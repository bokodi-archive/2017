import * as CONSTANTS from "../config/constants.js";

export default class EntityAi {
    constructor(threatRange = 1, sleep = 250) {
        this.threatRange = threatRange;
        this.sleep = sleep;
        this.lastTick = 0;
    }

    process(entity, game, time) {
        if (!this.isSleeping(time)) {
            this.update(entity, game);

            this.lastTick = time;
        }

        return this;
    }

    update(entity, game) {

    }

    isSleeping(time) {
        return time < this.lastTick + this.sleep;
    }

    runAction(abilityType, entity, game, target) {
        let ability = game.getAbility(abilityType);
        let entityAbilities = game.getEntityAbilities(entity.type);

        if (entityAbilities.includes(abilityType) && target && game.hasTile(target)) {
            ability.execute(entity, game, target);
        }

        return this;
    }

    findThreat(entity, game) {
        if (entity.race === CONSTANTS.RACE_NEUTRAL) {
            return null;
        }

        return game
            .getEntitiesInRange(entity, this.threatRange)
            .filter(enemy => entity.isEnemy(enemy) && game.isUnit(enemy.type) && enemy.isVisible())
            [0];
    }

    findHelp(entity, game) {
        if (entity.race === CONSTANTS.RACE_NEUTRAL) {
            return null;
        }

        let helps = game.entities.filter(help => {
            return (
                entity.race === help.race // same race
                && !game.isCoward(help.type) // not coward
                && game.isUnit(help.type) // is unit
                && help.isVisible() // visible
                && help.activity !== CONSTANTS.ACTIVITY_ENTITY_FIGHT // currently not fighting
            );
        });

        return game.nearestEntity(entity, helps);
    }

    getAttackAbilityType(entity, game) {
        let entityAbilities = game.getEntityAbilities(entity.type);
        let attackTypes = game.config.types[CONSTANTS.TYPE_ABILITY_ATTACK];

        return attackTypes.find(type => entityAbilities.includes(type));
    }
}
