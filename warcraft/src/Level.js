import {use} from "./helpers/global.js";
import Vector2 from "./core/Vector2.js";

export default class Level {
	constructor(game) {
		this.game = game;
	}

	load(levelData) {
	    let {
	        game: gameData = {},
	        resources = {},
            lockedAbilities = [],
	        ais: aisData = {},
	        tiles = [],
	        road: roads = [],
	        entities = [],
            scrollStart = { x: 0, y: 0 },
        } = levelData;

	    this.reset();

		this.loadGame(gameData);

		this.loadConfig(lockedAbilities);

		this.loadAis(aisData);

		this.loadResources(resources);

		this.loadTiles(tiles);

		this.loadRoad(roads);

		this.loadEntities(entities);

		this.game.scrollTo(scrollStart.x, scrollStart.y);
	}

	reset() {
		let game = this.game;

        game.clearSelection();
        game.clearAllEventListeners();

        game.cache.clear();

		game.playerAis.clear();
		game.resources.clear();
		game.levelConfig.clear();

        game.tileMap.length = 0;
        game.entities.length = 0;

		return this;
	}

	loadGame(config) {
		use(this.game, config);
	}

	loadConfig(lockedAbilities) {
		this.game.levelConfig.set('lockedAbilities', lockedAbilities);
	}

	loadAis(ais) {
        for (let [race, ai] of Object.entries(ais)) {
            this.game.playerAis.set(race, new ai(race));
        }
	}

    loadResources(resources) {
        let game = this.game;
        let { gold = 0, lumber = 0 } = resources;

        game.resources.set(game.player, { gold, lumber });
        game.playerAis.forEach((ai, race) => game.resources.set(race, { gold, lumber }));
    }

	loadTiles(tiles) {
        this.game.tileMap.push(...tiles);
	}

	loadRoad(road) {
		this.game.addRoad(road.map(pos => new Vector2(...pos)));
	}

	loadEntities(entities) {
		entities.forEach((entityData) => {
			this.game.insertEntity(entityData);
		});
	}
}
