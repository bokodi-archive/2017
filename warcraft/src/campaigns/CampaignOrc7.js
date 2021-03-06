import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_7.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_SWAMP,
    },

    scrollStart: {
        x: 28,
        y: 41,
    },

    resources: {
        lumber: 500,
        gold: 300,
    },

    tiles: map,

    road: [
        [42, 48], [43, 48], [44, 48], [45, 48], [45, 49], [46, 49], [47, 49], [45, 50], [45, 51], [45, 52],
        [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3],
        [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3],
        [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
        [10, 6], [11, 6], [12, 6], [13, 6], [14, 6], [15, 6], [16, 6], [17, 6], [18, 6], [19, 6], [20, 6],
        [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10],
        [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [19, 10], [20, 10],
        [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13],
        [10, 13], [14, 13], [15, 13], [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14],
        [4, 3], [4, 4], [4, 5], [4, 6], [7, 3], [7, 4], [7, 5], [7, 6],
        [17, 3], [17, 4], [17, 5], [17, 6], [20, 3], [20, 4], [20, 5], [20, 6],
        [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9],
        [10, 10], [10, 11], [10, 12], [10, 13], [10, 14],
        [14, 3], [14, 4], [14, 5], [14, 6], [14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [14, 12], [14, 13], [14, 14],
        [6, 6], [6, 7], [6, 8], [6, 9], [6, 10], [18, 6], [18, 7], [18, 8], [18, 9], [18, 10],
        [4, 10], [4, 11], [4, 12], [4, 13], [7, 10], [7, 11], [7, 12], [7, 13],
        [17, 10], [17, 11], [17, 12], [17, 13], [20, 10], [20, 11], [20, 12], [20, 13],
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 28,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 9,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 54,
            cellY: 23,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 29,
            cellY: 47,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 53,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 2,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 42,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 46,
            cellY: 47,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 46,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 41,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 48,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 46,
            cellY: 52,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 45,
            cellY: 46,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 43,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 45,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 42,
            cellY: 52,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 42,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_ORC,
            cellX: 7,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_TOWER,
            race: CONSTANTS.RACE_ORC,
            cellX: 8,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_ORC,
            cellX: 15,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_BLACKSMITH,
            race: CONSTANTS.RACE_ORC,
            cellX: 15,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_STABLE,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 5,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 18,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 5,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 8,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 15,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 18,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 37,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 39,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 40,
            cellY: 16,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 41,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 42,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 3,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 12,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 21,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 3,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 14,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 21,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 40,
            cellY: 17,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 25,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 24,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 18,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 18,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 10,
            cellY: 8,
        },
    ],
}
