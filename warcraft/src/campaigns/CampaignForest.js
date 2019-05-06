import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_2.js";
import TacticalAi from "../ai/TacticalAi.js";

export default {
    game: {
        player: CONSTANTS.RACE_HUMAN,
    },

    scrollStart: {
        x: 0,
        y: 0,
    },

    resources: {
        lumber: 500,
        gold: 500,
    },

    ais: {
        [CONSTANTS.RACE_ORC]: TacticalAi,
    },

    tiles: map,

    road: [
        [9,7],[9,8],[9,9],
        [6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],
        [8, 10],

        [53, 53],
        [54, 53],[54, 52],[54, 51],
        [54, 54],[55, 54],[56, 54],
        [54, 55],[54, 56],
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 6,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 10,
            cellY: 6,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 6,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 9,
            cellY: 10,
        },

        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 9,
            cellY: 9,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 12,
            cellY: 12,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 8,
            cellY: 13,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 14,
            cellY: 9,
        },


        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_ORC,
            cellX: 55,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_BARRACKS,
            race: CONSTANTS.RACE_ORC,
            cellX: 55,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 52,
            cellY: 51,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_ORC,
            cellX: 52,
            cellY: 54,
        },
    ],
}
