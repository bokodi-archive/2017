import Vector2 from "../core/Vector2.js";
import * as CONSTANTS from "../config/constants.js";
import {arrayRemove} from "../helpers/array.js";
import Grid from "../core/Grid.js";
import {arrayWrap} from "../helpers/array.js";

export default class PlayerAi {
    constructor(race, sleep = 1000) {
        this.race = race;
        this.plans = [];

        this.sleep = sleep;
        this.lastTick = 0;
        this.timers = new Map();
    }

    process(game, time) {
        if (this.isSleeping(time)) {
            return this;
        }

        this.update(game);

        this.lastTick = time;

        return this;
    }

    update(game) {

    }

    isSleeping(time) {
        return time < this.lastTick + this.sleep;
    }

    addPlan(plan) {
        if (!this.plans.includes(plan)) {
            console.info(`new plan: ${plan}`);
            this.plans.push(plan);
        }

        return this;
    }

    hasPlan(plan) {
        return this.plans.includes(plan);
    }

    removePlan(plan) {
        arrayRemove(this.plans, plan);

        return this;
    }

    commit(game, entity, abilityType, target) {
        let ability = game.getAbility(abilityType);

        ability.execute(entity, game, target);

        return this;
    }

    collectGold(game, entity) {
        let nearestGoldMine = this.findNearestGoldMine(game);
        let target = game.entityPositionCell(nearestGoldMine);

        return this.commit(game, entity, CONSTANTS.ABILITY_EXTRACT, target);
    }

    collectLumber(game, entity) {
        let nearestForest = this.findNearestForest(game);

        return this.commit(game, entity, CONSTANTS.ABILITY_EXTRACT, nearestForest);
    }

    attack(game, entities) {
        entities = arrayWrap(entities);

        if (!entities) {
            return;
        }

        let chief = entities[0];

        let closestEnemy = this.getClosestEnemy(game, chief);

        if (!closestEnemy) {
            return;
        }

        let target = game.entityPositionCell(closestEnemy);

        entities.forEach(entity => this.commit(game, entity, entity.ai.getAttackAbilityType(entity, game), target));
    }

    getClosestEnemy(game, entity) {
        let enemies = game.getEnemies(this.race);

        if (!enemies) {
            return null;
        }

        let distances = enemies.map(enemy => [enemy, game.entitiesDistance(entity, enemy)]);
        let range = Math.min(...distances.map(([enemy, distance]) => distance));

        let closest = distances.find(([enemy, distance]) => distance === range);

        return closest ? closest[0] : null;
    }

    getAvailableEntity(game, type) {
        return game.getRaceEntities(this.race).find(entity => entity.is(type) && entity.activity === CONSTANTS.ACTIVITY_ENTITY_IDLE);
    }

    getAvailableEntities(game, type, count) {
        return game.getRaceEntities(this.race)
            .filter(entity => entity.is(type) && entity.activity === CONSTANTS.ACTIVITY_ENTITY_IDLE)
            .slice(0, count);
    }

    getSourceForAbility(game, ability) {
        return Object.entries(game.config.entityConfig)
            .find(([key, config]) => config.abilities.includes(ability))[0];
    }

    getAbilityForEntity(game, entity) {
        let ability = Object.entries(game.config.abilityConfig).find(([key, config]) => {
            let info = config.info || {};

            return info.produces === entity || info.summons === entity || info.constructs === entity;
        });

        return ability ? ability[0] : null;
    }

    getResources(game) {
        return game.getResources(this.race);
    }

    hasTownHall(game) {
        return !!game.townHall(this.race);
    }

    getEntityCount(game, type) {
        return this.getEntitiesCount(game).get(type);
    }

    getEntitiesCount(game) {
        return game.getRaceEntitiesCount(this.race);
    }

    getActivityCount(game, activity) {
        return this.getActivitiesCount(game).get(activity);
    }

    getActivitiesCount(game) {
        let info = new Map();
        let race = this.race;

        game.getRaceEntities(this.race).forEach(entity => {
            let activity = entity.activity;
            let count = info.get(activity) || 0;

            info.set(activity, count + 1);
        });

        return info;
    }

    getCenter(game) {
        let positions = game.getBuildings(this.race).map(b => game.entityPositionCell(b));
        let sum = positions.reduce((carry, position) => carry.add(position), new Vector2());

        return sum.divideScalar(positions.length).round();
    }

    findNearestGoldMine(game) {
        if (!this.hasTownHall(game)) {
            return null;
        }

        let townHall = game.townHall(this.race);
        let goldMines = game.getEntitiesByType(CONSTANTS.ENTITY_GOLD_MINE);

        return game.nearestEntity(townHall, goldMines);
    }

    findNearestForest(game) {
        if (!this.hasTownHall(game)) {
            return null;
        }

        let townHall = game.townHall(this.race);
        let townHallPosition = game.entityPositionCell(townHall);
        let forest = game.getCellsByTileType('forest');

        return game.nearestCell(townHallPosition, forest);
    }

    findBuildPosition(game, type) {
        let cityCenter = this.getCenter(game);
        let walkableMap = game.getWalkableMap();
        let buildingsMap = game.getTypeMap(CONSTANTS.TYPE_ENTITY_BUILDING);

        let openList = [];
        let closedList = [];
        let checkList = [];

        openList.push(cityCenter);

        let i = 0;

        let {tilesWidth, tilesHeight} = game.getEntityConfig(type);
        let grid = new Grid(tilesWidth, tilesHeight);
        let entityCells = grid.toCells();

        do {
            checkList.length = 0;

            openList.forEach(open => {
                let newNeighbors = game.neighbors(open).filter(w => {
                    return !checkList.some(i => i.isEqualTo(w)) && !closedList.some(i => i.isEqualTo(w));
                });

                checkList.push(...newNeighbors);
            });

            if (!checkList.length) {
                break;
            }

            let target = checkList.find(check => {
                // cell cannot be occupied
                // neighbors cannot be building
                return !entityCells.some(entityCell => {
                    let row = walkableMap[check.y + entityCell.y];

                    return !row || !!row[check.x + entityCell.x];
                }) && game.neighbors(check, tilesWidth, tilesHeight).every(neighborCell => {
                    let row = buildingsMap[neighborCell.y];

                    return !row || !row[neighborCell.x];
                });
            });

            if (target) {
                return target;
            }

            closedList.push(...openList.slice());

            openList.length = 0;
            openList.push(...checkList.slice());

            if (++i > 10) break;
        } while (true);

        return null;
    }
}
