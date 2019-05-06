import * as CONSTANTS from "../config/constants.js";
import map from "../maps/campaign_human_1.js";
import {RACE_HUMAN} from "../config/constants.js";

export default {
    game: {
        player: RACE_HUMAN,
        terrain: CONSTANTS.TERRAIN_FOREST,
    },

    scrollStart: {
        x: 31,
        y: 14,
    },

    resources: {
        lumber: 400,
        gold: 950,
    },

    tiles: map,

    road: [
        [40, 21], [41, 21], [42, 21], [43, 21], [44, 21],
        [40, 18], [40, 19], [40, 20], [40, 21], [40, 22], [40, 23], [40, 24],
    ],

    entities: [
        {
            type: CONSTANTS.ENTITY_SUMMONER,
            race: CONSTANTS.RACE_ORC,
            cellX: 32,
            cellY: 23,
        },

        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 49,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 14,
            cellY: 8,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 22,
            cellY: 37,
        },
        {
            type: CONSTANTS.ENTITY_GOLD_MINE,
            race: CONSTANTS.RACE_NEUTRAL,
            cellX: 50,
            cellY: 50,
        },


        {
            type: CONSTANTS.ENTITY_TOWN_HALL,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 22,
        },
        {
            type: CONSTANTS.ENTITY_FARM,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 19,
        },

        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 40,
            cellY: 18,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 39,
            cellY: 24,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 45,
            cellY: 21,
        },
        {
            type: CONSTANTS.ENTITY_WORKER,
            race: CONSTANTS.RACE_HUMAN,
            cellX: 41,
            cellY: 21,
        },

        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 35,
            cellY: 10,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 22,
            cellY: 20,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 56,
            cellY: 31,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 27,
            cellY: 36,
        },
        {
            type: CONSTANTS.ENTITY_SOLDIER,
            race: CONSTANTS.RACE_ORC,
            cellX: 44,
            cellY: 49,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 46,
            cellY: 50,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 15,
            cellY: 55,
        },
        {
            type: CONSTANTS.ENTITY_SHOOTER,
            race: CONSTANTS.RACE_ORC,
            cellX: 6,
            cellY: 10,
        },
    ],
}
