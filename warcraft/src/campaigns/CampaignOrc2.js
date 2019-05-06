import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_2.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_SWAMP,
    },

    scrollStart: {
        x: 19,
        y: 12,
    },

    resources: {
        lumber: 700,
        gold: 700,
    },

    tiles: map,

    road: [
        [34, 20], [34, 21], [34, 22], [34, 22], [35, 22], [36, 22], [37, 22],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_ADVANCED,
        CONSTANTS.ABILITY_BUILD_BLACKSMITH,
        CONSTANTS.ABILITY_BUILD_STABLE,
        CONSTANTS.ABILITY_BUILD_CHURCH,
        CONSTANTS.ABILITY_BUILD_TOWER,
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 1,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 32,
            cellY: 13,
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
            cellX: 44,
            cellY: 35,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 32,
            cellY: 54,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 19,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 23,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 36,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 28,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 9,
            cellY: 24,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 11,
            cellY: 37,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 20,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 59,
            cellY: 44,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 45,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 42,
            cellY: 56,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 21,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 9,
            cellY: 38,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 19,
            cellY: 57,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 11,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 60,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 30,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 7,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 13,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 22,
            cellY: 57,
        },
    ],
}
