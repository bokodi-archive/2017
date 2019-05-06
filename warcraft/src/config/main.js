import * as CONSTANTS from "./constants.js";
import campaigns from "./campaigns.js";
import tileConfig from "./tiles.js";
import abilityConfig from "./abilities.js";
import entityConfig from "./entities.js";
import types from "./types.js";


export default {
	columns: 64,
	rows: 64,

	tileSize: 32,

	threatRange: 6,

	resourcesPath: './resources/',

	races: CONSTANTS.RACES,
	terrains: CONSTANTS.TERRAINS,
	entities: CONSTANTS.ENTITIES,
	abilities: CONSTANTS.ABILITIES,

	colors: {
		success: '#00ff00',
		error: '#ff0000',

		[CONSTANTS.RACE_NEUTRAL]: '#ffffff',
		[CONSTANTS.RACE_HUMAN]: '#2222ff',
		[CONSTANTS.RACE_ORC]: '#ffff00',
	},

    enemies: {
        [CONSTANTS.RACE_HUMAN]: [CONSTANTS.RACE_ORC],
        [CONSTANTS.RACE_ORC]: [CONSTANTS.RACE_HUMAN],
        [CONSTANTS.RACE_NEUTRAL]: [],
    },

	campaigns,
	tileConfig,
	abilityConfig,
	entityConfig,
    types,
};
