import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_3.js";
import TacticalAi from "../ai/TacticalAi.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_SWAMP,
    },

    scrollStart: {
        x: 41,
        y: 40,
    },

    resources: {
        lumber: 500,
        gold: 500,
    },

    tiles: map,

    road: [
        [57, 45], [57, 46], [57, 47], [57, 48], [57, 49], [58, 47], [59, 47],
        [10, 15], [10, 16], [10, 17], [10, 18], [10, 19], [10, 20], [8, 20],
        [8, 21], [12, 20], [12, 21], [9, 16], [10, 16], [11, 16], [7, 20],
        [8, 20], [9, 20], [10, 20], [11, 20], [12, 20], [12, 16], [13, 16],
        [14, 16],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_ADVANCED,
        CONSTANTS.ABILITY_BUILD_BLACKSMITH,
        CONSTANTS.ABILITY_BUILD_STABLE,
        CONSTANTS.ABILITY_BUILD_CHURCH,
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    ais: {
        [CONSTANTS.RACE_ORC]: TacticalAi,
    },

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 55,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 26,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 3,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 29,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 41,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 46,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 45,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 60,
            cellY: 44,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 47,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 55,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 60,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 45,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 45,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 7,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_ORC,
            cellX: 14,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 8,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 13,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 28,
            cellY: 30,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 24,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 35,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 27,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 13,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 24,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 14,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 28,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 2,
            cellY: 24,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 8,
            cellY: 13,
        },
    ],
}
