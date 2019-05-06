export const NAME = 'warcraft';
export const DESCRIPTION = 'Orcs and Humans';


// race
export const RACE_HUMAN = 'human';
export const RACE_ORC = 'orc';
export const RACE_NEUTRAL = 'neutral';

// terrain
export const TERRAIN_FOREST = 'forest';
export const TERRAIN_SWAMP = 'swamp';
export const TERRAIN_DUNGEON = 'dungeon';

// resource
export const RESOURCE_GOLD = 'gold';
export const RESOURCE_LUMBER = 'lumber';

// entity
export const ENTITY_GOLD_MINE = 'gold mine';
export const ENTITY_WORKER = 'worker';
export const ENTITY_SOLDIER = 'soldier';
export const ENTITY_SHOOTER = 'shooter';
export const ENTITY_CAVALRY = 'cavalry';
export const ENTITY_CATAPULT = 'catapult';
export const ENTITY_MAGE = 'mage';
export const ENTITY_SUMMONER = 'summoner';
export const ENTITY_COMPANION = 'companion';
export const ENTITY_CREATURE = 'creature';
export const ENTITY_FARM = 'farm';
export const ENTITY_TOWN_HALL = 'town hall';
export const ENTITY_BARRACKS = 'barracks';
export const ENTITY_LUMBER_MILL = 'lumber mill';
export const ENTITY_BLACKSMITH = 'blacksmith';
export const ENTITY_STABLE = 'stable';
export const ENTITY_CHURCH = 'church';
export const ENTITY_TOWER = 'tower';

// ability
export const ABILITY_CANCEL = 'cancel';
export const ABILITY_MOVE = 'move';
export const ABILITY_STOP = 'stop';
export const ABILITY_REPAIR = 'repair';
export const ABILITY_EXTRACT = 'extract';
export const ABILITY_ATTACK_MELEE = 'attack melee';
export const ABILITY_ATTACK_STING = 'attack sting';
export const ABILITY_ATTACK_CREATURE = 'attack creature';
export const ABILITY_ATTACK_RANGED = 'attack ranged';
export const ABILITY_ATTACK_LANCE = 'attack lance';
export const ABILITY_ATTACK_CANNON = 'attack cannon';
export const ABILITY_ATTACK_SPELL = 'attack spell';
export const ABILITY_ATTACK_FIREBALL = 'attack fireball';
export const ABILITY_BUFF = 'buff';
export const ABILITY_SUMMON_COMPANION = 'summon companion';
export const ABILITY_SUMMON_CREATURE = 'summon creature';
export const ABILITY_BUILD_ROAD = 'build road';
export const ABILITY_BUILD_STANDARD = 'build standard';
export const ABILITY_BUILD_ADVANCED = 'build advanced';
export const ABILITY_BUILD_FARM = 'build farm';
export const ABILITY_BUILD_BARRACKS = 'build barracks';
export const ABILITY_BUILD_LUMBER_MILL = 'build lumber mill';
export const ABILITY_BUILD_BLACKSMITH = 'build blacksmith';
export const ABILITY_BUILD_STABLE = 'build stable';
export const ABILITY_BUILD_CHURCH = 'build church';
export const ABILITY_BUILD_TOWER = 'build tower';
export const ABILITY_PRODUCE_WORKER = 'produce worker';
export const ABILITY_PRODUCE_SOLDIER = 'produce soldier';
export const ABILITY_PRODUCE_SHOOTER = 'produce shooter';
export const ABILITY_PRODUCE_CAVALRY = 'produce cavalry';
export const ABILITY_PRODUCE_CATAPULT = 'produce catapult';
export const ABILITY_PRODUCE_MAGE = 'produce mage';
export const ABILITY_PRODUCE_SUMMONER = 'produce summoner';

// ability pack
export const PACK_ABILITY_DEFAULT = 'pack default';
export const PACK_ABILITY_BUILD_STANDARD = 'pack build standard';
export const PACK_ABILITY_BUILD_ADVANCED = 'pack build advanced';

// activity
export const ACTIVITY_ENTITY_EXTRACT_WOOD = 'extract wood';
export const ACTIVITY_ENTITY_EXTRACT_GOLD = 'extract gold';
export const ACTIVITY_ENTITY_CONSTRUCT = 'construct';
export const ACTIVITY_ENTITY_REPAIR = 'repair';
export const ACTIVITY_ENTITY_PRODUCE = 'produce';
export const ACTIVITY_ENTITY_IDLE = 'idle';
export const ACTIVITY_ENTITY_FIGHT = 'fight';
export const ACTIVITY_ENTITY_ESCAPE = 'escape';

// state
export const STATE_ENTITY_IDLE = 'idle';
export const STATE_ENTITY_WALK = 'walk';
export const STATE_ENTITY_ATTACK_MELEE = 'melee';
export const STATE_ENTITY_ATTACK_RANGED = 'ranged';
export const STATE_ENTITY_REPAIR = 'repair';
export const STATE_ENTITY_CARRY_GOLD = 'carryGold';
export const STATE_ENTITY_CARRY_WOOD = 'carryWood';
export const STATE_ENTITY_DIE = 'die';
export const STATE_ENTITY_CONSTRUCTING = 'constructing';

// flag
export const FLAG_ENTITY_INVISIBLE = 'invisible';
export const FLAG_ENTITY_IMMORTAL = 'immortal';

// type
export const TYPE_ENTITY_UNIT = 'entity unit';
export const TYPE_ENTITY_BUILDING = 'entity building';
export const TYPE_ENTITY_WORKER = 'entity worker';
export const TYPE_ENTITY_COWARD = 'entity coward';
export const TYPE_ENTITY_FIGHTER = 'entity fighter';
export const TYPE_ABILITY_COMMON = 'ability common';
export const TYPE_ABILITY_WORK = 'ability work';
export const TYPE_ABILITY_ATTACK = 'ability attack';
export const TYPE_ABILITY_SUMMON = 'ability summon';
export const TYPE_ABILITY_BUILD = 'ability build';
export const TYPE_ABILITY_CONSTRUCT = 'ability construct';
export const TYPE_ABILITY_PRODUCE = 'ability produce';
export const TYPE_ABILITY_BUFF = 'ability buff';


export const RACES = [
	RACE_HUMAN,
	RACE_ORC,
	RACE_NEUTRAL,
];

export const TERRAINS = [
	TERRAIN_FOREST,
	TERRAIN_SWAMP,
	TERRAIN_DUNGEON,
];

export const RESOURCES = [
    RESOURCE_GOLD,
    RESOURCE_LUMBER,
];

export const ENTITIES = [
    ENTITY_GOLD_MINE,
    ENTITY_WORKER,
    ENTITY_SOLDIER,
    ENTITY_SHOOTER,
    ENTITY_CAVALRY,
    ENTITY_CATAPULT,
    ENTITY_MAGE,
    ENTITY_SUMMONER,
    ENTITY_COMPANION,
    ENTITY_CREATURE,
    ENTITY_FARM,
    ENTITY_TOWN_HALL,
    ENTITY_BARRACKS,
    ENTITY_LUMBER_MILL,
	ENTITY_BLACKSMITH,
	ENTITY_STABLE,
	ENTITY_CHURCH,
	ENTITY_TOWER,
];

export const ABILITIES = [
	ABILITY_CANCEL,
	ABILITY_MOVE,
	ABILITY_STOP,
	ABILITY_REPAIR,
	ABILITY_EXTRACT,
    ABILITY_ATTACK_MELEE,
    ABILITY_ATTACK_STING,
    ABILITY_ATTACK_CREATURE,
    ABILITY_ATTACK_RANGED,
    ABILITY_ATTACK_LANCE,
    ABILITY_ATTACK_CANNON,
    ABILITY_ATTACK_SPELL,
    ABILITY_ATTACK_FIREBALL,
    ABILITY_BUFF,
    ABILITY_SUMMON_COMPANION,
    ABILITY_SUMMON_CREATURE,
	ABILITY_BUILD_ROAD,
    ABILITY_BUILD_STANDARD,
    ABILITY_BUILD_ADVANCED,
	ABILITY_BUILD_FARM,
	ABILITY_BUILD_BARRACKS,
    ABILITY_BUILD_LUMBER_MILL,
    ABILITY_BUILD_BLACKSMITH,
    ABILITY_BUILD_STABLE,
    ABILITY_BUILD_CHURCH,
    ABILITY_BUILD_TOWER,
	ABILITY_PRODUCE_WORKER,
	ABILITY_PRODUCE_SOLDIER,
    ABILITY_PRODUCE_SHOOTER,
    ABILITY_PRODUCE_CAVALRY,
    ABILITY_PRODUCE_CATAPULT,
    ABILITY_PRODUCE_MAGE,
    ABILITY_PRODUCE_SUMMONER,
];

export const ENTITY_STATES = [
	STATE_ENTITY_IDLE,
	STATE_ENTITY_WALK,
	STATE_ENTITY_ATTACK_MELEE,
	STATE_ENTITY_ATTACK_RANGED,
	STATE_ENTITY_REPAIR,
	STATE_ENTITY_CARRY_GOLD,
	STATE_ENTITY_CARRY_WOOD,
	STATE_ENTITY_DIE,
	STATE_ENTITY_CONSTRUCTING,
];

export const ENTITY_ACTIVITIES = [
    ACTIVITY_ENTITY_EXTRACT_WOOD,
    ACTIVITY_ENTITY_EXTRACT_GOLD,
    ACTIVITY_ENTITY_CONSTRUCT,
    ACTIVITY_ENTITY_REPAIR,
    ACTIVITY_ENTITY_PRODUCE,
    ACTIVITY_ENTITY_IDLE,
    ACTIVITY_ENTITY_FIGHT,
    ACTIVITY_ENTITY_ESCAPE,
];

export const ENTITY_TYPES = [
    TYPE_ENTITY_UNIT,
    TYPE_ENTITY_BUILDING,
];

export const ABILITY_TYPES = [
    TYPE_ABILITY_COMMON,
    TYPE_ABILITY_WORK,
    TYPE_ABILITY_ATTACK,
    TYPE_ABILITY_SUMMON,
    TYPE_ABILITY_BUILD,
    TYPE_ABILITY_CONSTRUCT,
    TYPE_ABILITY_PRODUCE,
    TYPE_ABILITY_BUFF,
];
