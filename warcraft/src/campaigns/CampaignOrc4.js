import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_orc_4.js";

export default {
    game: {
        player: CONSTANTS.RACE_ORC,
        terrain: CONSTANTS.TERRAIN_DUNGEON,
    },

    scrollStart: {
        x: 22,
        y: 0,
    },

    resources: {
        lumber: 0,
        gold: 0,
    },

    tiles: map,

    road: [

    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 4,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 37,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 3,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 34,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_CAVALRY,
            race: CONSTANTS.RACE_ORC,
            cellX: 38,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_MAGE,
            race: CONSTANTS.RACE_ORC,
            cellX: 36,
            cellY: 2,
        },
        {
            type: CONSTANTS.ENTITY_MAGE,
            race: CONSTANTS.RACE_ORC,
            cellX: 37,
            cellY: 2,
        },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 11,
        //     cellY: 14,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 18,
        //     cellY: 3,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 17,
        //     cellY: 6,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 41,
        //     cellY: 38,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 52,
        //     cellY: 59,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 11,
        //     cellY: 29,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 2,
        //     cellY: 25,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 17,
        //     cellY: 29,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 8,
        //     cellY: 20,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 13,
        //     cellY: 20,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 15,
        //     cellY: 15,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 10,
        //     cellY: 14,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 56,
        //     cellY: 16,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 40,
        //     cellY: 36,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 26,
        //     cellY: 60,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 57,
        //     cellY: 59,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 33,
        //     cellY: 24,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 31,
        //     cellY: 27,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 5,
        //     cellY: 49,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 2,
        //     cellY: 51,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 55,
        //     cellY: 39,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 56,
        //     cellY: 39,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 58,
        //     cellY: 39,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 59,
        //     cellY: 39,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 54,
        //     cellY: 40,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 55,
        //     cellY: 40,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 57,
        //     cellY: 40,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 58,
        //     cellY: 40,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 53,
        //     cellY: 41,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 54,
        //     cellY: 41,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 56,
        //     cellY: 41,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 57,
        //     cellY: 41,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 59,
        //     cellY: 41,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 54,
        //     cellY: 42,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 56,
        //     cellY: 42,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 57,
        //     cellY: 42,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 59,
        //     cellY: 42,
        // },
    ],
}
