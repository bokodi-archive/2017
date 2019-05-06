import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_4.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_DUNGEON,
    },

    scrollStart: {
        x: 41,
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
            race: CONSTANTS.RACE_HUMAN,
            cellX: 51,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 55,
            cellY: 7,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 52,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 53,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 54,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 55,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 56,
            cellY: 5,
        },
        {
            type: CONSTANTS.ENTITY_MAGE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 58,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_MAGE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_MAGE,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 57,
            cellY: 7,
        },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 53,
        //     cellY: 31,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 55,
        //     cellY: 33,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 54,
        //     cellY: 35,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 35,
        //     cellY: 53,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 23,
        //     cellY: 56,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 46,
        //     cellY: 56,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 47,
        //     cellY: 59,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 25,
        //     cellY: 55,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 23,
        //     cellY: 57,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 37,
        //     cellY: 7,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 33,
        //     cellY: 10,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 36,
        //     cellY: 10,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 9,
        //     cellY: 29,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 15,
        //     cellY: 31,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 33,
        //     cellY: 8,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 29,
        //     cellY: 19,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 16,
        //     cellY: 13,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 19,
        //     cellY: 17,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 14,
        //     cellY: 16,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 52,
        //     cellY: 57,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 51,
        //     cellY: 59,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 41,
        //     cellY: 6,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 38,
        //     cellY: 4,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 42,
        //     cellY: 9,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 31,
        //     cellY: 7,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 37,
        //     cellY: 4,
        // },
        // {
        //     type: CONSTANTS.ENTITY_,
        //     race: CONSTANTS.RACE_,
        //     cellX: 30,
        //     cellY: 8,
        // },
    ],
}
