import {arrayEmpty, arrayFirst, arrayRange, arrayRemove, arrayWrap} from "./helpers/array.js";
import {KEY_DOWN, KEY_ESC, KEY_LEFT, KEY_RIGHT, KEY_UP} from "./events/KeyEvent.js";
import Layer from "./core/Layer.js";
import EventObjective from "./core/EventObjective.js";
import MouseDownEvent from "./events/MouseDownEvent.js";
import ImageLoader from "./core/ImageLoader.js";
import Vector2 from "./core/Vector2.js";
import Screen from "./core/Screen.js";
import KeyUpEvent from "./events/KeyUpEvent.js";
import SpriteSheet from "./core/SpriteSheet.js";
import {assert, use} from "./helpers/global.js";
import Grid from "./core/Grid.js";
import {createElement} from "./helpers/dom.js";
import Level from "./Level.js";
import PathFinder from "./core/PathFinder.js";
import directionKeys from "./helpers/direction-keys.js";
import {BUTTON_LEFT} from "./events/MouseEvent.js";
import MouseWheelEvent from "./events/MouseWheelEvent.js";
import Entity from "./Entity.js";
import abilityList from "./abilities/ability-list.js";
import MouseMoveEvent from "./events/MouseMoveEvent.js";
import {drawArc, drawRect} from "./helpers/canvas.js";
import Passive from "./ai/Passive.js";
import Aggressive from "./ai/Aggressive.js";
import Coward from "./ai/Coward.js";
import EntityAi from "./ai/EntityAi.js";
import MouseLeaveEvent from "./events/MouseLeaveEvent.js";
import {
    ABILITY_CANCEL,
    ENTITY_TOWN_HALL,
    FLAG_ENTITY_IMMORTAL,
    FLAG_ENTITY_INVISIBLE,
    PACK_ABILITY_DEFAULT,
    RACE_HUMAN,
    RACE_NEUTRAL,
    TERRAIN_FOREST,
    TYPE_ABILITY_CONSTRUCT,
    TYPE_ENTITY_BUILDING,
    TYPE_ENTITY_COWARD,
    TYPE_ENTITY_FIGHTER,
    TYPE_ENTITY_UNIT
} from "./config/constants.js";

export default class Game extends EventObjective {
	constructor(config, useData = {}) {
		super();

		this.config = config;

		this.width = config.columns * config.tileSize;
		this.height = config.rows * config.tileSize;
		this.tileSize = config.tileSize;

		this.mainWrapper = createElement('div');
		this.mapWrapper = createElement('div');
		this.selectionWrapper = createElement('div');
		this.statsWrapper = createElement('div');
		this.abilitiesWrapper = createElement('div');

		this.pathFinder = new PathFinder();
		this.level = new Level(this);
		this.imageLoader = new ImageLoader(this.config.resourcesPath);
		this.screen = new Screen(config.columns, config.rows, 1, 1, this.tileSize);

		this.cache = new Map();
		this.layers = new Map();

        this.currentLevel = null;
		this.levelConfig = new Map();
        this.resources = new Map();

        this.player = RACE_HUMAN;
        this.playerAis = new Map();

        this.terrain = TERRAIN_FOREST;
        this.focus = new Vector2();

		this.tileMap = [];
		this.entities = [];
		this.selection = [];

		this.abilityPack = PACK_ABILITY_DEFAULT;
		this.selectedAbility = null;

		this.lastTick = 0;

		use(this, useData);

		this.init();
	}

	init() {
		let visibleSize = this.screen.visibleSize();

		this.addLayer(this.mapWrapper, 'map', new Layer(this.mapWrapper.clientWidth, this.mapWrapper.clientHeight));
		this.addLayer(this.mainWrapper, 'tiles', new Layer(visibleSize.x, visibleSize.y));
		this.addLayer(this.mainWrapper, 'main', new Layer(visibleSize.x, visibleSize.y));

		this.registerEventHandlers();
	}

	load() {
		this.imageLoader.reset();

		this.imageLoader.on('success', () => this.emit('load.success'));

		Object.values(this.config.tileConfig.display).forEach(tileConfig => {
            this.imageLoader.add(tileConfig.spriteSheetSource);
        });

		Object.values(this.config.abilityConfig).forEach(abilityConfig => {
            Object.values(abilityConfig.display).forEach(displayConfig => {
                this.imageLoader.add([displayConfig.spriteSheetSource]);
            });
		});

		Object.values(this.config.entityConfig).forEach(entityConfig => {
            Object.values(entityConfig.display).forEach(displayConfig => {
                this.imageLoader.add([displayConfig.iconSource, displayConfig.spriteSheetSource]);
            });
		});

		this.imageLoader.start();
	}

	setLevelData(levelData) {
		this.level.load(levelData);

		return this;
	}

	setLevel(level) {
        let campaigns = this.config.campaigns[this.player];
        let levelData = campaigns[level];

        if (levelData) {
            this.currentLevel = level;
            this.setLevelData(levelData);
        }

		return this;
	}

	nextLevel() {
	    let campaigns = this.config.campaigns[this.player];
	    let currentLevel = this.currentLevel;
	    let nextLevel = 0;

	    if (campaigns[currentLevel] && campaigns[currentLevel + 1]) {
	        nextLevel = currentLevel + 1;
        }

	    return this.setLevel(nextLevel);
    }

    checkLevel() {
	    if (!this.getEnemies(this.player).length) {
	        this.nextLevel();
        }

        return this;
    }

	getResources(race) {
	    return this.resources.get(race);
    }

	hasResource(cost, race) {
	    let resources = this.getResources(race);
        let { gold = 0, lumber = 0 } = cost;

        return resources.gold >= gold && resources.lumber >= lumber;
    }

    gain(resource, race) {
        let resources = this.getResources(race);
        let { gold = 0, lumber = 0 } = resource;

        resources.gold += gold;
        resources.lumber += lumber;
    }

	costs(cost, race) {
        if (this.hasResource(cost, race)) {
            let resources = this.getResources(race);
            let { gold = 0, lumber = 0 } = cost;

            resources.gold -= gold;
            resources.lumber -= lumber;
        }

		return this;
	}

	registerEventHandlers() {
		this.mainWrapper.addEventListener('mousedown', e => this.onMouseDown(new MouseDownEvent(e)));
		this.mainWrapper.addEventListener('mousemove', e => this.onMouseMove(new MouseMoveEvent(e)));
		this.mainWrapper.addEventListener('mouseleave', e => this.onMouseLeave(new MouseLeaveEvent(e)));

		this.mapWrapper.addEventListener('mousedown', (e) => this.onMapClick(e));
		this.mapWrapper.addEventListener('mousemove', (e) => this.onMapMouseMove(e));

		this.abilitiesWrapper.addEventListener('mousedown', e => {
			if (!this.hasSelected()) {
				return;
			}

			let li = e.target;
			let abilityKey = li.dataset.abilityKey;
			let ability = this.getAbility(abilityKey);

			this.selectAbility(ability);
		});

		window.document.addEventListener('keyup', e => this.onKeyUp(new KeyUpEvent(e)));

		window.document.addEventListener('mousewheel', e => this.onMouseWheel(new MouseWheelEvent(e)));

		window.addEventListener('resize', () => this.onWindowResize());

        window.dispatchEvent(new Event('resize'));
	}

    onWindowResize() {
	    // todo ugliness
        let padding = 15;
        let margin = 8;
        let bodyMargin = 23;
        let hudLeftSize = 210;
        let statsSize = 40;

        let availableWidth = document.documentElement.clientWidth - hudLeftSize - 2 * padding - 2 * bodyMargin - margin;
        let availableHeight = document.documentElement.clientHeight - statsSize - 3 * padding - 2 * bodyMargin;

        let visibleColumns = Math.floor((availableWidth - this.tileSize) / this.tileSize);
        let visibleRows = Math.floor((availableHeight - this.tileSize) / this.tileSize);

	    let visibleSize = new Vector2(visibleColumns, visibleRows);

		return this.resize(visibleSize);
	}

	resize(visibleSize) {
	    let width = this.tileSize * visibleSize.x;
	    let height = this.tileSize * visibleSize.y;

        [this.getLayer('tiles'), this.getLayer('main')].forEach(layer => use(layer, {
            width, height,
        }));

        use(this.mainWrapper.style, {
            width: width + 'px',
            height: height + 'px',
        });

        this.screen.resize(visibleSize);
        this.renderMain(true);

        return this;
    }

	onMouseDown(mouseDownEvent) {
		this.on('input', () => {
			let cell = this.cursorToCell(mouseDownEvent);

			this.selectedAbility ? this.abilityClick(cell) : this.selectClick(cell);

			return true;
		});
	}

	onMouseMove(mouseMoveEvent) {
		this.on('input', () => {
			let cell = this.cursorToCell(mouseMoveEvent);

			this.focus.copy(cell);

			return true;
		});
	}

	onMouseLeave(mouseLeaveEvent) {
	    this.on('input', () => {
	        this.focus.set(-1, -1);

	        return true;
        });
    }

	onMapClick(e) {
		this.on('input', () => {
			let [cellX, cellY] = this.mapCell(e);

			this.scrollTo(cellX, cellY);

			return true;
		});
	}

	onMapMouseMove(e) {
		this.on('input', () => {
			if (e.buttons === BUTTON_LEFT) {
				let [cellX, cellY] = this.mapCell(e);

				this.scrollTo(cellX, cellY);
			}

			return true;
		});
	}

	onKeyUp(keyUpEvent) {
		this.on('input', () => {
			let keyCode = keyUpEvent.keyCode;

			switch(keyCode) {
				case KEY_LEFT:
				case KEY_UP:
				case KEY_RIGHT:
				case KEY_DOWN:
					this.scrollByKey(keyCode);
					break;

				case KEY_ESC:
					this.cancel();
					break;

				default:
					this.handleHotKey(keyCode);

					break;
			}

			return true;
		});
	}

	onMouseWheel(mouseWheelEvent) {
		let {dX, dY} = mouseWheelEvent;

		this.scrollBy(new Vector2(dX, dY));
	}

	renderMain(deleteCache = false) {
		let tilesLayer = this.getLayer('tiles');
		let mapLayer = this.getLayer('map');

		if (deleteCache) {
            this.cache.delete('tileMapCanvas');
        }

		if (this.getTilesMapCache()) {
            this.renderTiles(tilesLayer.ctx);
            this.renderMap(mapLayer.ctx);
        }

        return this;
	}

	scrollByKey(key) {
		this.scrollBy(directionKeys.get(key));
	}

	scrollBy(direction) {
		this.screen.scrollBy(this.screen.speedVector().multiply(direction));

		this.renderMain();
	}

	scrollTo(x, y) {
		this.screen.scrollTo(new Vector2(x, y));

		this.renderMain();
	}

	abilityClick(cell) {
		if (this.selectedAbility) {
			this.executeAbility(this.selectedAbility, cell);

			if (!this.selectedAbility.repeatable()) {
				this.deselectAbility();
			}
		}

		return this;
	}

	selectClick(cell) {
		let target = this.find(cell);

		return target ? this.select(target) : this.clearSelection();
	}

	cancel() {
	    if (this.selectedAbility) {
	        return this.deselectAbility();
        }

	    if (this.abilityPack !== PACK_ABILITY_DEFAULT) {
	        return this.resetAbilityPack();
        }

		return this.clearSelection();
	}

    handleHotKey(keyCode) {
	    if (!this.hasSelected() || this.selectedAbility) {
	        return this;
        }

        let selected = arrayFirst(this.selection);
	    let abilities = this.getEntityAbilities(selected.type).map(abilityKey => this.getAbility(abilityKey));
	    let ability = abilities.find(a => a.getCharCode() === keyCode);

	    if (ability) {
	        this.selectAbility(ability);
        }

        return this;
    }

	executeAbility(ability, cell = null) {
		this.selection.forEach(selected => ability.execute(selected, this, cell));

		return this;
	}

	selectAbility(ability) {
		ability.needsTarget() ? this.selectedAbility = ability : this.executeAbility(ability);

		return this;
	}

	deselectAbility() {
		this.selectedAbility = null;

		return this;
	}

	resetAbilityPack() {
        this.abilityPack = PACK_ABILITY_DEFAULT;

        return this;
    }

    getUnlockedBuildings() {
	    let constructAbilities = this.config.types[TYPE_ABILITY_CONSTRUCT];
        let lockedConstructAbilities = this.levelConfig.get('lockedAbilities')
            .filter(lockedAbility => constructAbilities.includes(lockedAbility));
        let lockedBuildings = lockedConstructAbilities
            .map(ability => this.config.abilityConfig[ability].info.constructs);

	    return this.config.types[TYPE_ENTITY_BUILDING]
            .filter(buildingType => !lockedBuildings.includes(buildingType));
    }

    getEnemyRaces(race) {
	    return this.config.enemies[race];
    }

    getEnemies(race) {
	    let enemyRaces = this.getEnemyRaces(race);

	    return this.entities.filter(entity => enemyRaces.includes(entity.race));
    }

	getRaceEntities(race) {
	    return this.entities.filter(entity => entity.race === race);
    }

    getRaceEntitiesCount(race) {
        let info = new Map();

        this.getRaceEntities(race).forEach(entity => {
            let entityType = entity.type;
            let count = info.get(entityType) || 0;

            info.set(entityType, count + 1);
        });

        return info;
    }

	getUnitLimit(race) {
	    return this.getRaceEntities(race).reduce((carry, entity) => {
	        return carry + (this.getEntityConfig(entity.type).beds || 0);
        }, 0);
    }

    getBuildings(race) {
	    return this.getRaceEntities(race).filter(entity => this.isBuilding(entity.type));
    }

    getUnits(race) {
	    return this.getRaceEntities(race).filter(entity => this.isUnit(entity.type));
    }

    canProduce(race) {
	    return this.getUnitLimit(race) > this.getUnits(race).length;
    }

	isBuilding(type) {
	    return this.config.types[TYPE_ENTITY_BUILDING].includes(type);
    }

	isUnit(type) {
	    return this.config.types[TYPE_ENTITY_UNIT].includes(type);
    }

	isFighter(type) {
	    return !!this.config.types[TYPE_ENTITY_FIGHTER].includes(type);
    }

	isCoward(type) {
	    return !!this.config.types[TYPE_ENTITY_COWARD].includes(type);
    }

	isLand(cell) {
		return this.isTile(cell, 'land');
	}

	isForest(cell) {
		return this.isTile(cell, 'forest');
	}

	isRoad(cell) {
		return this.isTile(cell, 'road');
	}

	canAddRoad(cell) {
		return !this.find(cell) && this.isLand(cell);
	}

	addRoad(cells) {
	    let validCells = arrayWrap(cells).filter(cell => this.canAddRoad(cell));

		validCells.forEach(cell => this.setTile(cell, 60));

        if (validCells.length) {
            this.fixRoad();
            this.cache.delete('tileMapCanvas');
            this.renderMain();
        }

		return this;
	}

	extractLumber(cell) {
	    // todo
        let extractedTile = this.getTileDisplayConfig().types.extractedForest[0];

        this.setTile(cell, extractedTile);
        this.renderMain(true);

        return this;
	}

	fixRoad() {
		this.eachCell((cell) => {
			if (!this.isRoad(cell)) {
				return this;
			}

			let tempCell = cell.clone();

			let isTopRoad = this.isRoad(tempCell.copy(cell).subScalarY(1));
			let isRightRoad = this.isRoad(tempCell.copy(cell).addScalarX(1));
			let isBottomRoad = this.isRoad(tempCell.copy(cell).addScalarY(1));
			let isLeftRoad = this.isRoad(tempCell.copy(cell).subScalarX(1));

			let roadConfig = this.getTileDisplayConfig().roadHelper;

			let typeConfig = roadConfig.find((config) => {
				let { top, right, bottom, left } = config;

				return isTopRoad === top && isRightRoad === right && isBottomRoad === bottom && isLeftRoad === left;
			});

			if (typeConfig === null) {
				return this;
			}

			return this.setTile(cell, typeConfig.tile);
		});

		return this;
	}

	eachCell(callback) {
		this.tileMap.forEach((row, y) => {
			row.forEach((item, x) => {
				callback(new Vector2(x, y), item);
			});
		});
	}

	hasTile(cell) {
		let {x, y} = cell;

		return (this.tileMap[y] && this.tileMap[y][x]) !== undefined;
	}

	getTile(cell) {
		let {x, y} = cell;

		return this.tileMap[y][x];
	}

	setTile(cell, tile) {
		let {x, y} = cell;

		this.tileMap[y][x] = tile;

		return this;
	}

	isTile(cell, tileType) {
		if (!this.hasTile(cell)) {
			return false;
		}

		let tile = this.getTile(cell);
		let tileTypes = this.getTileDisplayConfig().types;
		let tiles = tileTypes[tileType];

		return tiles && tiles.includes(tile);
	}

	getCellsByTileType(type) {
	    let cells = [];

	    this.eachCell(cell => {
            if (this.isTile(cell, type)) {
                cells.push(cell);
            }
        });

	    return cells;
    }

	isWalkable(cell) {
        let walkableTiles = this.getWalkableTiles();
        let tile = this.getTile(cell);

	    return walkableTiles.includes(tile);
    }

    getWalkableTiles() {
        let tileTypes = this.getTileDisplayConfig().types;
        let walkableTileTypes = this.getTileConfig().walkableTiles;
        let walkableTiles = [];

        walkableTileTypes.forEach((type) => walkableTiles.push(...tileTypes[type]));

        return walkableTiles;
    }

	getWalkableMap() {
		let map = this.tileMap.map(r => r.slice());
		let walkableTiles = this.getWalkableTiles();

		map.forEach((row) => {
			row.forEach((item, c) => {
				row[c] = +!walkableTiles.includes(item);
			});
		});

		this.entities.forEach((entity) => {
			this.entityToCells(entity).forEach(({x, y}) => {
				map[y][x] = 1;
			});
		});

		return map;
	}

	getTypeMap(type) {
        let map = this.tileMap.map(r => r.slice());
        let types = this.config.types[type];

        map.forEach(row => row.forEach((item, c) => row[c] = 0));

        this.entities
            .filter(entity => types.includes(entity.type))
            .forEach(entity => {
                this.entityToCells(entity).forEach(({x, y}) => map[y][x] = 1);
            });

        return map;
	}

	getTilesMapCache() {
		let cached = this.cache.get('tileMapCanvas');

		if (cached) {
			return cached;
		}

		let tilesConfig = this.getTileDisplayConfig();
		let tilesImage = this.imageLoader.cache.get(tilesConfig.spriteSheetSource);

		if (!(tilesImage && this.tileMap.length)) {
			return null;
		}

		let tilesCanvas = createElement('canvas');

		tilesCanvas.width = this.width;
		tilesCanvas.height = this.height;

		let tileCtx = tilesCanvas.getContext('2d');
		let tilesSprite = new SpriteSheet(tilesImage, tilesConfig.spriteSheetTileWidth, tilesConfig.spriteSheetTileHeight);

		tilesSprite.addFrameset('default', arrayRange(0, tilesSprite.countFrames() - 1));
		tilesSprite.setFrameset('default');

		this.screen.grid.eachCell((y, x, index) => {
			tilesSprite.frameIndex = this.tileMap[y][x];

			let position = this.screen.grid.indexToCell(index).multiply(this.screen.cellSize());

			tilesSprite.draw(tileCtx, position, this.tileSize, this.tileSize);
		});

		this.cache.set('tileMapCanvas', tilesCanvas);

		return tilesCanvas;
	}

	getEntitiesByType(type) {
	    return this.entities.filter(entity => entity.is(type));
    }

	getEntitiesInRange(entity, range = 1) {
	    return this.entities.filter(target => this.entitiesDistance(entity, target) <= range);
    }

    entityDistance(entity, cells) {
        let entityCells = this.entityToCells(entity);
        let distance = Math.max(this.screen.grid.rows, this.screen.grid.columns);

        cells = arrayWrap(cells);

        entityCells.forEach(entityCell => {
            cells.forEach(cell => {
                let d = Math.max(Math.abs(entityCell.x - cell.x), Math.abs(entityCell.y - cell.y));

                if (d < distance) {
                    distance = d;
                }
            });
        });

        return distance;
	}

	entitiesDistance(entity1, entity2) {
		return this.entityDistance(entity1, this.entityToCells(entity2));
	}

	neighbors(cell, tilesWidth = 1, tilesHeight = 1, range = 1) {
        let {x, y} = cell;
        let cells = [];
        let i, j;

        for (j = range; j > 0; j--) {
            for (i = -range; i < tilesWidth + range; i++) {
                cells.push(new Vector2(x + i, y - j));
                cells.push(new Vector2(x + i, y + tilesHeight + j - 1));
            }
        }

        for (j = range; j > 0; j--) {
            for (i = 0; i < tilesHeight; i++) {
                cells.push(new Vector2(x - j, y + i));
                cells.push(new Vector2(x + tilesWidth + j - 1, y + i));
            }
        }

		return cells.filter(cell => this.hasTile(cell));
	}

	walkableNeighbors(cell, tilesWidth, tilesHeight, range = 1) {
        let walkableMap = this.getWalkableMap();

		return this.neighbors(cell, tilesWidth, tilesHeight, range).filter(cell => {
			return !walkableMap[cell.y][cell.x];
		});
	}

	nearestCell(position, cells) {
		let nearest = null;
		let distance = null;

		cells.forEach((cell) => {
			let cellDistance = position.distanceTo(cell);

			if (cellDistance < distance || !distance) {
				distance = cellDistance;
				nearest = cell;
			}
		});

		return nearest;
	}

	nearestEntity(entity, entities) {
	    return arrayFirst(entities.sort((a, b) => this.entitiesDistance(entity, a) - this.entitiesDistance(entity, b)));
    }

	canBuildTo(cell, entityType) {
		let {tilesWidth, tilesHeight} = this.getEntityConfig(entityType);
		let grid = new Grid(tilesWidth, tilesHeight);
		let entityCells = grid.toCells();
		let walkableMap = this.getWalkableMap();

		return !entityCells.some(entityCell => {
			entityCell.add(cell);

			return !!walkableMap[entityCell.y][entityCell.x];
		});
	}

	entityPositionCell(entity) {
		return entity.position.clone().divide(this.screen.cellSize()).round();
	}

	entityToCells(entity) {
		let {tilesWidth, tilesHeight} = this.getEntityConfig(entity.type);
		let entityCell = this.entityPositionCell(entity);
		let grid = new Grid(tilesWidth, tilesHeight);
		let cells = grid.toCells();

		cells.forEach(cell => cell.add(entityCell));

		return cells;
	}

	entityWalkableNeighbors(entity, range = 1) {
        let {tilesWidth, tilesHeight} = this.getEntityConfig(entity.type);
        let cell = this.entityPositionCell(entity);

        return this.walkableNeighbors(cell, tilesWidth, tilesHeight, range);
	}

	mapRatio() {
		let mapCanvas = this.getLayer('map').canvas;

		let rateX = mapCanvas.height / this.height;
		let rateY = mapCanvas.width / this.width;

		return [rateX, rateY];
	}

	mapCell(e) {
		let x = e.layerX;
		let y = e.layerY;

		let {x: visibleWidth, y: visibleHeight} = this.screen.visibleSize();
		let [rateX, rateY] = this.mapRatio();

		let screenX = x / rateX - visibleWidth / 2;
		let screenY = y / rateY - visibleHeight / 2;

		let cellX = Math.floor(screenX / this.tileSize);
		let cellY = Math.floor(screenY / this.tileSize);

		return [cellX, cellY];
	}

	cursorToCell(cursorEvent) {
		return cursorEvent.toVector()
		.add(this.screen.offsetSize())
		.divide(this.screen.cellSize())
		.floor();
	}

    entityIsOnScreen(entity) {
	    let { x: ex1, y: ey1 } = this.entityPositionCell(entity);
	    let { tilesWidth: ew, tilesHeight: eh } = this.getEntityConfig(entity.type);
	    let ex2 = ex1 + ew;
	    let ey2 = ey1 + eh;

	    let { x: sx1, y: sy1 } = this.screen.offset;
	    let { x: sw, y: sh } = this.screen.visibleGrid.toVector();
        let sx2 = sx1 + sw;
        let sy2 = sy1 + sh;

	    return ex1 < sx2 && ex2 > sx1 && ey1 < sy2 && ey2 > sy1;
    }

	entityCellsSize(entityType) {
		let config = this.getEntityConfig(entityType);

		return [config.tilesWidth, config.tilesHeight];
	}

	entitySize(entityType) {
		let config = this.getEntityConfig(entityType);

		return [config.tilesWidth * this.tileSize, config.tilesHeight * this.tileSize];
	}

	getEntityConfig(entityType) {
		return this.config.entityConfig[entityType];
	}

	getAbilityConfig(abilityType) {
		return this.config.abilityConfig[abilityType];
	}

	getPathTo(from, to) {
		this.pathFinder.setMap(this.getWalkableMap());

		let path = this.pathFinder.find(from.x, from.y, to.x, to.y);

		path.forEach((item) => {
			item[0] *= this.tileSize;
			item[1] *= this.tileSize;
		});

		return path;
	}

	find(cell) {
		return this.entities.find(entity => {
			let entityCells = this.entityToCells(entity);

			return entityCells.some(entityCell => entityCell.isEqualTo(cell));
		});
	}

	getTileConfig() {
        return this.config.tileConfig;
    }

	getTileDisplayConfig() {
	    let tileConfig = this.getTileConfig();

	    return tileConfig.display[this.terrain];
    }

	townHall(race) {
		return this.entities.find(entity => entity.race === race && entity.type === ENTITY_TOWN_HALL);
	}

	addLayer(wrapper, key, layer) {
		wrapper.appendChild(layer.canvas);

		this.layers.set(key, layer);
	}

	getLayer(key) {
		return this.layers.get(key);
	}

	hasSelected() {
		return this.selection.length > 0;
	}

	select(entity) {
		this.clearSelection();

		this.selection.push(entity);

		return this;
	}

	deselect(entity) {
		arrayRemove(this.selection, entity);

		return this;
	}

	clearSelection() {
		this.deselectAbility();
		this.resetAbilityPack();

		arrayEmpty(this.selection);

		return this;
	}

	update(time) {
	    this.playerAis.forEach(playerAi => playerAi.process(this, time));
		this.entities.forEach(entity => entity.update(this, time, time - this.lastTick));

		this.checkLevel();

		return this;
	}

	tick(time) {
		this.animationFrameId = requestAnimationFrame(this._tick);

		this.processInput();
		this.update(time);
		this.render();

        this.lastTick = time;

        return this;
	}

	start() {
		this.stop();

		if (!this._tick) {
			this._tick = this.tick.bind(this);
		}

		this.tick(0);

        return this;
	}

	stop() {
		cancelAnimationFrame(this.animationFrameId);
	}

	processInput() {
		this.dispatchEvent('input');
	}

	render() {
		let mainLayer = this.getLayer('main');

		mainLayer.clear();

		this.renderEntities(mainLayer.ctx);
		this.renderSelection(mainLayer.ctx);
		this.renderFocus(mainLayer.ctx);
		this.renderStats();
	}

	renderTiles(ctx) {
		let tileMapCanvas = this.getTilesMapCache();
		let {x, y} = this.screen.offsetSize();

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.drawImage(
            tileMapCanvas,
            x, y, ctx.canvas.width, ctx.canvas.height,
            0, 0, ctx.canvas.width, ctx.canvas.height
        );

		return this;
	}

	renderMap(ctx) {
		let tileMapCanvas = this.getTilesMapCache();
		let mapCanvas = ctx.canvas;

		ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

		// draw tiles
		ctx.drawImage(
			tileMapCanvas,
			0, 0, tileMapCanvas.width, tileMapCanvas.height,
			0, 0, mapCanvas.width, mapCanvas.height
		);

        let [rateX, rateY] = this.mapRatio();

        // draw entities
        this.entities.forEach(entity => {
            ctx.fillStyle = this.colorByRace(entity.race);
        	let [width, height] = this.entitySize(entity.type);
			ctx.fillRect(entity.position.x * rateX | 0, entity.position.y * rateY | 0, width * rateX | 0, height * rateY | 0);
		});

		// draw focus rectangle
		let {x: offsetX, y: offsetY} = this.screen.offsetSize();
		let position = new Vector2(offsetX * rateX, offsetY * rateY);
        let {x: visibleWidth, y: visibleHeight} = this.screen.visibleSize();

		drawRect(ctx, position, visibleWidth * rateX, visibleHeight * rateY, this.colorByRace(RACE_NEUTRAL));
	}

	renderEntities(ctx) {
		this.entities.forEach((entity) => {
		    if (!this.entityIsOnScreen(entity)) {
		        return;
            }

			ctx.save();

			let pos = entity.position.clone().sub(this.screen.offsetSize());
			let config = this.getEntityConfig(entity.type);
			let displayConfig = config.display[entity.race];
			let [width, height] = this.entitySize(entity.type);

			let tx = Math.round(pos.x + width / 2);
			let ty = Math.round(pos.y + height / 2);

			ctx.translate(tx, ty);
			ctx.rotate(entity.rotation);
			ctx.translate(-tx, -ty);

            if (entity.flags.has(FLAG_ENTITY_INVISIBLE)) {
                ctx.globalAlpha = 0.4;
            }

            if (entity.flags.has(FLAG_ENTITY_IMMORTAL)) {
                let halfSize = width / 2;

                drawArc(ctx, pos.clone().addScalar(halfSize).round(), halfSize, this.colorByRace(entity.race), 2);
            }

			if (displayConfig.scale && displayConfig.scale !== 1) {
				let scaleRate = displayConfig.scale - 1;
				width += 2 * scaleRate * this.tileSize;
				height += 2 * scaleRate * this.tileSize;
				pos.subScalar(this.tileSize * scaleRate).round();
			}

			entity.spriteSheet.draw(ctx, pos, width, height);

			ctx.restore();
		});
	}

	renderFocus(ctx) {
	    let color = this.colorByRace(RACE_NEUTRAL);
        let focus = this.focus.clone();
        let renderCell = this.focus.clone();
        let width = this.tileSize;
        let height = this.tileSize;

        if (!this.hasTile(focus)) {
            return;
        }

		if (this.selectedAbility) {
			let isValidTarget = this.selectedAbility.isValidTarget(this.selection[0], this, focus.clone());
            let target = this.find(focus);

            color = this.colorByIsValid(isValidTarget);

            if (target) {
                [width, height] = this.entitySize(target.type);
                renderCell = this.entityPositionCell(target);
            }
		}

		let renderPosition = renderCell.sub(this.screen.offset).multiplyScalar(this.tileSize);

		drawRect(ctx, renderPosition, width, height, color);
	}

	renderStats() {
	    let resources = this.getResources(this.player);

		document.getElementById('stats-lumber').innerHTML = String(resources.lumber);
		document.getElementById('stats-gold').innerHTML = String(resources.gold);
	}

	renderSelection(ctx) {
		let wrapper = this.selectionWrapper;

		wrapper.classList.add('invisible');

		if (!this.hasSelected()) {
			return this;
		}

		let selection = this.selection[0];
		let pos = selection.position.clone().sub(this.screen.offsetSize());
		let [width, height] = this.entitySize(selection.type);
		let entityConfig = this.getEntityConfig(selection.type);
		let entityDisplayConfig = entityConfig.display[selection.race];
		let resourcesPath = this.config.resourcesPath;
		let onlyOwnEntitiesSelected = 1;this.selection.every(s => s.race === this.player);
		let isBusy = !selection.process.isFinished();
		let processPercent = selection.process.toPercent();
		let hpPercent = Math.round(selection.hp / selection.maxHp * 100);
		let manaPercent = Math.round(selection.mana / selection.maxMana * 100);

        drawRect(ctx, pos, width, height, this.colorByRace(selection.race));

        let processBar = document.getElementById('process-progress');
        processBar.parentElement.style.display = selection.process.isFinished() ? 'none' : 'block';
        processBar.style.width = `${processPercent}%`;

		document.getElementById('selection-icon').src = resourcesPath + entityDisplayConfig.iconSource;
		document.getElementById('selection-name').innerHTML = entityDisplayConfig.name.toUpperCase();
		document.getElementById('hp-progress').style.width = `${hpPercent}%`;

        let manaBar = document.getElementById('mana-progress');
        manaBar.parentElement.style.display = selection.maxMana ? 'block' : 'none';
        manaBar.style.width = `${manaPercent}%`;

		let abilityElements = Array.from(document.getElementById('selection-abilities').children);
		let selectionAbilities = this.selectedAbility ? [] : this.getEntityAvailableAbilities(selection.type, selection.race).filter(ak => {
            let ability = this.getAbility(ak);
            let abilityPack = ability.config.pack || PACK_ABILITY_DEFAULT;

            return abilityPack === this.abilityPack;
        });

		abilityElements.forEach((li, index) => {
            let abilityKey = selectionAbilities[index];

            if (!abilityKey && !abilityElements[index + 1] && (this.selectedAbility || this.abilityPack !== PACK_ABILITY_DEFAULT)) {
                abilityKey = ABILITY_CANCEL;
            }

		    if (!(abilityKey && onlyOwnEntitiesSelected && !isBusy)) {
				return li.style.display = 'none';
			}

			let ability = this.getAbility(abilityKey);
			let abilityConfig = ability.config;
			let abilityDisplay = abilityConfig.display[selection.race];
			let { key = '' } = abilityConfig;
			let title = abilityDisplay.label;

			if (key) {
				title = title + ` (${key.toUpperCase()})`;
			}

			let backgroundImage = this.imageLoader.cache.get(abilityDisplay.spriteSheetSource);
			let backgroundSizeX = abilityConfig.levels * 100;
			let backgroundPositionX = (ability.level - 1) * 50;

			li.dataset.abilityKey = abilityKey;

			li.title = title;
			li.style.display = '';
			li.style.backgroundImage = `url('${backgroundImage.src}')`;
			li.style.backgroundPosition = `${backgroundPositionX}% 0`;
			li.style.backgroundSize = `${backgroundSizeX}% 60px`;
		});

		wrapper.classList.remove('invisible');

		return this;
	}

	hasEntityAbility(entityType, ability) {
		return this.getEntityAbilities(entityType).includes(ability);
	}

	getEntityAbilities(entityType) {
		return this.getEntityConfig(entityType).abilities;
	}

	getEntityAvailableAbilities(entityType, race) {
	    let raceEntities = this.getRaceEntitiesCount(race);
	    let lockedAbilities = this.levelConfig.get('lockedAbilities');

		return this.getEntityAbilities(entityType)
            .filter(abilityKey => !lockedAbilities.includes(abilityKey))
            .filter(abilityKey => {
                let { dependencies = [] } = this.config.abilityConfig[abilityKey];

                return dependencies.every(dependency => raceEntities.get(dependency));
            });
	}

	getAbility(type) {
		if (!this.cache.has('abilities')) {
			this.cache.set('abilities', new Map());
		}

		let abilitiesCache = this.cache.get('abilities');

		if (!abilitiesCache.has(type)) {
			assert(abilityList.has(type), 'Invalid ability: ' + type);

			let abilityConstructor = abilityList.get(type);
			let abilityConfig = this.getAbilityConfig(type);

			abilitiesCache.set(type, new abilityConstructor(type, abilityConfig));
		}

		return abilitiesCache.get(type);
	}

	addEntity(entity) {
		this.entities.push(entity);

		let onDie = () => {
			entity.removeEventListener('die', onDie);
			this.removeEntity(entity);
		};

		entity.on('die', onDie);

		return this;
	}

	removeEntity(entity) {
		arrayRemove(this.entities, entity);

		this.deselect(entity);

		return this;
	}

	insertEntity(entityData) {
		return this.addEntity(this.makeEntity(entityData));
	}

	makeEntity(entityData) {
		let config = this.config.entityConfig[entityData.type];
		let displayConfig = config.display[entityData.race];

		let spriteSheetImage = this.imageLoader.cache.get(displayConfig.spriteSheetSource);
		let spriteSheet = new SpriteSheet(spriteSheetImage, displayConfig.spriteSheetTileWidth, displayConfig.spriteSheetTileHeight);

		Object.entries(displayConfig.framesets).forEach(([framesetName, framesetData]) => {
			spriteSheet.addFrameset(framesetName, framesetData);
		});

		let entity = new Entity(entityData.type, entityData.race, config, spriteSheet, this.getEntityAi(entityData));

		entity.position.set(entityData.cellX, entityData.cellY).multiplyScalar(this.tileSize);

		return entity;
	}

	getEntityAi(entityData) {
		if (this.isBuilding(entityData.type)) {
			return new EntityAi();
		}

        if (this.isCoward(entityData.type)) {
            return new Coward(this.getThreatRange());
        }

		if (entityData.race === RACE_NEUTRAL) {
		    return new Passive(this.getThreatRange());
        }

        return new Aggressive(this.getThreatRange());
	}

	getThreatRange() {
	    return this.config.threatRange;
    }

	colorByIsValid(isValid) {
	    return this.config.colors[isValid ? 'success' : 'error'];
    }

	colorByRace(race) {
	    assert(this.config.races.includes(race), 'Invalid race: ' + race);

	    return this.config.colors[race];
    }
}
