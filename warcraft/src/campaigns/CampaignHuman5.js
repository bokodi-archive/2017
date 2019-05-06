import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_5.js";
import TacticalAi from "../ai/TacticalAi.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 33,
        y: 43,
    },

    resources: {
        lumber: 500,
        gold: 500,
    },

    tiles: map,

    road: [
        [42, 50], [43, 50], [44, 50], [45, 50], [46, 50], [47, 50], [48, 50], [45, 51], [45, 52], [11, 12],
        [11, 13], [11, 14], [11, 15], [11, 16], [11, 17], [11, 18], [15, 13], [15, 14], [15, 15], [15, 16],
        [15, 17], [15, 18], [19, 13], [19, 14], [19, 15], [19, 16], [19, 17], [19, 18], [19, 19], [23, 14],
        [23, 15], [23, 16], [23, 17], [23, 18], [13, 18], [13, 19], [16, 18], [16, 19], [22, 18], [22, 19],
        [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14],
        [21, 14], [22, 14], [23, 14], [11, 18], [12, 18], [13, 18], [14, 18], [15, 18], [16, 18], [17, 18],
        [18, 18], [19, 18], [20, 18], [21, 18], [22, 18], [23, 18],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    ais: {
        [CONSTANTS.RACE_ORC]: TacticalAi,
    },

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 44,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 6,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 6,
            cellY: 30,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 42,
            cellY: 34,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 4,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 42,
            cellY: 60,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 46,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 42,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 46,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 46,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 43,
            cellY: 54,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 44,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 52,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 42,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 12,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_ORC,
            cellX: 20,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_CHURCH,
            race: CONSTANTS.RACE_ORC,
            cellX: 12,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_LUMBER_MILL,
            race: CONSTANTS.RACE_ORC,
            cellX: 16,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_STABLE,
            race: CONSTANTS.RACE_ORC,
            cellX: 16,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_BLACKSMITH,
            race: CONSTANTS.RACE_ORC,
            cellX: 23,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 20,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 14,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 17,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 20,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 22,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 31,
            cellY: 26,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 33,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 16,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 26,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 27,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 28,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 19,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 19,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 23,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 33,
            cellY: 26,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 17,
            cellY: 27,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 18,
            cellY: 22,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 7,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 22,
            cellY: 11,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 28,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 31,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 9,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 14,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 15,
            cellY: 14,
        },
    ],
}
