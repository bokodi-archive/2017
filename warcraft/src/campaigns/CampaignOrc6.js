import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_6.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 13,
        y: 48,
    },

    resources: {
        lumber: 1000,
        gold: 1000,
    },

    tiles: map,

    road: [
        [23, 58], [24, 58], [25, 58], [26, 58], [27, 58], [28, 58], [29, 58], [24, 58], [24, 59],
        [24, 60], [24, 61], [28, 58], [28, 59], [28, 60], [28, 61], [31, 2],
        [32, 2], [33, 2], [34, 2], [35, 2], [28, 6], [29, 6], [30, 6], [31, 6], [32, 6], [33, 6],
        [34, 6], [35, 6], [36, 6], [37, 6], [38, 6], [39, 6], [28, 9], [29, 9], [30, 9], [31, 9],
        [31, 10], [32, 10], [33, 10], [34, 10], [35, 10], [36, 10], [37, 10],
        [38, 10], [39, 10], [31, 14], [32, 14], [33, 14], [34, 14], [35, 14],
        [28, 6], [28, 7], [28, 8], [28, 9], [31, 2], [31, 3], [31, 4], [31, 5],
        [31, 6], [31, 7], [31, 8], [31, 9], [31, 10], [31, 11], [31, 12], [31, 13], [31, 14],
        [35, 2], [35, 3], [35, 4], [35, 5], [35, 6], [35, 7], [35, 8], [35, 9],
        [35, 10], [35, 11], [35, 12], [35, 13], [35, 14], [39, 6], [39, 7], [39, 8], [39, 9], [39, 10],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 57,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 8,
            cellY: 52,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 3,
            cellY: 30,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 18,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 57,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 59,
            cellY: 36,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 25,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 22,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 29,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 21,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 29,
            cellY: 62,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 26,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 23,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 29,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 24,
            cellY: 61,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 27,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 32,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 32,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 32,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 28,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_BLACKSMITH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 36,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_STABLE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 36,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_TOWER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 26,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 29,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 29,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 36,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 31,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 31,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 32,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 33,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 34,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 36,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 37,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 38,
            cellY: 32,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 50,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 22,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 23,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 31,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 28,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 28,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 31,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 31,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 8,
        },
    ],
}
