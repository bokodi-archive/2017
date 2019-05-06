import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_3.js";
import TacticalAi from "../ai/TacticalAi.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 0,
        y: 0,
    },

    resources: {
        lumber: 500,
        gold: 500,
    },

    tiles: map,

    road: [
        [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [6, 5], [7, 5], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9],
        [53, 36], [54, 36], [55, 36], [56, 36], [57, 36], [52, 40], [53, 40], [54, 40],
        [55, 40], [56, 40], [57, 40], [58, 40], [53, 36], [53, 37], [53, 38], [53, 39], [53, 40],
        [53, 41], [53, 42], [57, 36], [57, 37], [57, 38], [57, 39], [57, 40], [57, 41], [57, 42],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_ADVANCED,
        CONSTANTS.ABILITY_BUILD_BLACKSMITH,
        CONSTANTS.ABILITY_BUILD_STABLE,
        CONSTANTS.ABILITY_BUILD_CHURCH,
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    ais: {
        [CONSTANTS.RACE_HUMAN]: TacticalAi,
    },

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 15,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 40,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 59,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 4,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 3,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 8,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 4,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 5,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 37,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 50,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 34,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 34,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 41,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 50,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 24,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 24,
            cellY: 57,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 61,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 34,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 50,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 44,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 44,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 60,
            cellY: 37,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 55,
            cellY: 40,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 48,
            cellY: 46,
        },
    ],
}
