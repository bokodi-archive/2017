import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_6.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 4,
        y: 45,
    },

    resources: {
        lumber: 1000,
        gold: 1000,
    },

    tiles: map,

    road: [
        [40, 53], [41, 53], [42, 53], [43, 53], [44, 53], [45, 53], [46, 53], [47, 53], [48, 53], [39, 57], [40, 57],
        [41, 57], [42, 57], [43, 57], [44, 57], [45, 57], [46, 57], [47, 57], [48, 57], [39, 54], [40, 54], [40, 53],
        [40, 54], [40, 55], [40, 56], [40, 57], [44, 53], [44, 54], [44, 55], [44, 56], [44, 57], [48, 53], [48, 54],
        [48, 55], [48, 56], [48, 57], [48, 5], [49, 5], [50, 5], [51, 5], [52, 5], [53, 5], [54, 5], [55, 5],
        [56, 5], [57, 5], [58, 5], [59, 5], [60, 5], [48, 9], [49, 9], [50, 9], [51, 9], [52, 9], [53, 9],
        [54, 9], [55, 9], [56, 9], [57, 9], [58, 9], [59, 9], [60, 9], [51, 4], [51, 5], [54, 3], [54, 4],
        [54, 5], [58, 3], [58, 4], [58, 5], [48, 5], [48, 6], [48, 7], [48, 8], [48, 9], [52, 5], [52, 6],
        [52, 7], [52, 8], [52, 9], [52, 10], [52, 11], [56, 5], [56, 6], [56, 7], [56, 8], [56, 9], [56, 10],
        [56, 11], [60, 5], [60, 6], [60, 7], [60, 8], [60, 9], [48, 5], [49, 5], [50, 5], [51, 5], [52, 5],
        [53, 5], [54, 5], [55, 5], [56, 5], [57, 5], [58, 5], [59, 5], [60, 5], [48, 9], [49, 9], [50, 9],
        [51, 9], [52, 9], [53, 9], [54, 9], [55, 9], [56, 9], [57, 9], [58, 9], [59, 9], [60, 9],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 5,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 42,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 36,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 14,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 13,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 43,
            cellY: 44,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 58,
            cellY: 33,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 54,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_BLACKSMITH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 38,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_STABLE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 37,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 47,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 44,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 47,
            cellY: 58,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 49,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 54,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 10,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 10,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 10,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 10,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 8,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 8,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 8,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 8,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 49,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_BLACKSMITH,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_STABLE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 55,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_TOWER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 61,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 49,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 59,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 50,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 37,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 49,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 34,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 47,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 56,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 60,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 62,
            cellY: 22,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 48,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 49,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 37,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 48,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 56,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 61,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 9,
        },
    ],
}
