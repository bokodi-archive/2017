import PlayerAi from "./PlayerAi.js";
import * as CONSTANTS from "../config/constants.js";

export default class TacticalAi extends PlayerAi {
    update(game) {
        if (!this.hasTownHall(game)) {
            return;
        }

        this.organizeWorkers(game);
        this.buildAll(game);

        if (!this.commitPlans(game)) {
            return;
        }

        this.produceFighter(game);

        this.raid(game);
    }

    commitPlans(game) {
        return this.plans.reduce((carry, plan) => this.attempt(game, plan, false) && carry, true);
    }

    buildAll(game) {
        let entitiesCount = this.getEntitiesCount(game);

        return game.getUnlockedBuildings().every(unlocked => {
            if (entitiesCount.get(unlocked) || !this.getAbilityForEntity(game, unlocked)) {
                return true;
            }

            this.makeEntity(game, unlocked);

            return false;
        });
    }

    produceFighter(game) {
        let fighters = game.config.types[CONSTANTS.TYPE_ENTITY_FIGHTER];
        let index = Math.round((Math.random() * (fighters.length - 1)));
        let fighter = fighters[index];

        return this.makeEntity(game, fighter);
    }

    raid(game) {
        let fighter = game.getRaceEntities(this.race).reverse().find(entity => game.isFighter(entity.type));

        if (fighter) {
            console.log(`attacking: ${fighter.type}`);
            this.attack(game, fighter);
        }
    }

    makeEntity(game, entityType) {
        let ability = this.getAbilityForEntity(game, entityType);

        if (!ability) {
            return this;
        }

        return this.attempt(game, ability);
    }

    findTarget(game, abilityType, availableEntity) {
        let types = game.config.types;
        let ability = game.getAbility(abilityType);

        if (types[CONSTANTS.TYPE_ABILITY_CONSTRUCT].includes(abilityType)) {
            return this.findBuildPosition(game, ability.getInfo('constructs'));
        }

        if (types[CONSTANTS.TYPE_ABILITY_SUMMON].includes(abilityType)) {
            let ability = game.getAbility(abilityType);
            let range = ability.getInfo('range', 1);

            return game.entityWalkableNeighbors(availableEntity, range)[0];
        }

        // todo
    }

    attempt(game, plan, newPlan = true) {
        let entitiesCount = this.getEntitiesCount(game);
        let source = this.getSourceForAbility(game, plan);
        let availableEntity = this.getAvailableEntity(game, source);

        if (newPlan) {
            this.addPlan(plan);
        }

        let ability = game.getAbility(plan);
        let abilityInfo = ability.getInfo();
        let abilityDependencies = ability.getDependencies();
        let dependency;

        let { gold: costGold = 0, lumber: costLumber = 0 } = ability.getCost();
        let { gold = 0, lumber = 0 } = this.getResources(game);

        // check resources
        if (costGold > gold || costLumber > lumber) {
            return;
        }

        // todo check for manaCost

        // check for dependency
        if (dependency = abilityDependencies.find(dependency => !entitiesCount.get(dependency))) {
            return void this.makeEntity(game, dependency);
        }

        // check for source
        if (!entitiesCount.get(source)) {
            return void this.makeEntity(game, source);
        }

        if (!availableEntity) {
            return;
        }

        // check beds limit
        if (abilityInfo.produces || abilityInfo.summons) {
            let limit = game.getUnitLimit(this.race);
            let entitiesSum = Array.from(entitiesCount).reduce((carry, [type, count]) => carry + (game.isUnit(type) ? count : 0), 0);

            if (entitiesSum + 1 > limit) {
                let bedSource = Object.entries(game.config.entityConfig).find(([key, config]) => config.beds > 0)[0];

                return this.makeEntity(game, bedSource);
            }
        }

        this.removePlan(plan);

        return this.commit(game, availableEntity, plan, ability.needsTarget() ? this.findTarget(game, plan, availableEntity) : null);
    }

    organizeWorkers(game) {
        let resourcesCount = CONSTANTS.RESOURCES.length;
        let activitiesCount = this.getActivitiesCount(game);
        let extractGoldActivityCount = activitiesCount.get(CONSTANTS.ACTIVITY_ENTITY_EXTRACT_GOLD);
        let extractWoodActivityCount = activitiesCount.get(CONSTANTS.ACTIVITY_ENTITY_EXTRACT_WOOD);

        let workerType = this.getSourceForAbility(game, CONSTANTS.ABILITY_EXTRACT);
        let workersCount = this.getEntityCount(game, workerType);
        let abilityProduceWorker = this.getAbilityForEntity(game, workerType);
        let sourceForWorker = this.getSourceForAbility(game, abilityProduceWorker);
        let availableSourceForWorker = this.getAvailableEntity(game, sourceForWorker);
        let planProduceWorkerCount = this.plans.reduce((carry, plan) =>  carry + (plan === abilityProduceWorker), 0);
        let hasEnoughWorkers = workersCount + planProduceWorkerCount > resourcesCount;

        let requiredEntities = Number(!extractGoldActivityCount) + Number(!extractWoodActivityCount);
        let availableEntities = this.getAvailableEntities(game, workerType, requiredEntities);
        let entity;

        if (!hasEnoughWorkers && availableSourceForWorker) {
            this.attempt(game, abilityProduceWorker);
        }

        if (!extractGoldActivityCount && (entity = availableEntities.pop())) {
            this.collectGold(game, entity);
        }

        if (!extractWoodActivityCount && (entity = availableEntities.pop())) {
            this.collectLumber(game, entity);
        }
    }
}
