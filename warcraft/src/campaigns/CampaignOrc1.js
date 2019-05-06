import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_1.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_SWAMP,
    },

    scrollStart: {
        x: 32,
        y: 18,
    },

    resources: {
        lumber: 400,
        gold: 950,
    },

    tiles: map,

    road: [
        [55, 24], [55, 25], [55, 26], [55, 27], [55, 28], [55, 29], [55, 30], [53, 28], [54, 28], [55, 28],
    ],

    lockedAbilities: [
        CONSTANTS.ABILITY_BUILD_LUMBER_MILL,
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
            cellX: 39,
            cellY: 1,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 41,
            cellY: 53,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 10,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 53,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 8,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 52,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 53,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 50,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 57,
            cellY: 27,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_ORC,
            cellX: 53,
            cellY: 28,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 53,
            cellY: 23,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 35,
            cellY: 25,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 24,
            cellY: 28,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 23,
            cellY: 29,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 24,
            cellY: 48,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 24,
            cellY: 15,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 48,
        },
    ],
}
