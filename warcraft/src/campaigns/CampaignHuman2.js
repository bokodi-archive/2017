import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_2.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 41,
        y: 32,
    },

    resources: {
        lumber: 700,
        gold: 700,
    },

    tiles: map,

    road: [
        [51, 38], [52, 38], [53, 38], [54, 38], [55, 38], [56, 38], [53, 37], [53, 38],
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
            cellX: 59,
            cellY: 45,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 44,
            cellY: 27,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 10,
            cellY: 13,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 28,
            cellY: 59,
        },

        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 39,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 36,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 42,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 36,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 56,
            cellY: 39,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 38,
        },

        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 58,
            cellY: 22,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 49,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 14,
            cellY: 24,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 19,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 48,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 13,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 19,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 30,
            cellY: 57,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 59,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 24,
            cellY: 62,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 48,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 17,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 17,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 11,
            cellY: 23,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 12,
            cellY: 25,
        },
    ],
}
