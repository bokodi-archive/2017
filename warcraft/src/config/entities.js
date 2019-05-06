import * as CONSTANTS from "./constants.js";


export default {
    [CONSTANTS.ENTITY_GOLD_MINE]: {
        tilesWidth: 3,
        tilesHeight: 3,
        display: {
            [CONSTANTS.RACE_NEUTRAL]: {
                name: 'Gold Mine',
                iconSource: 'entity/neutral/GoldMine_icon.png',
                spriteSheetSource: 'entity/neutral/GoldMine.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        animationSpeedOffset: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 25500,
        abilities: [],
    },

    [CONSTANTS.ENTITY_WORKER]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Peasant',
                iconSource: 'entity/human/Peasant_icon.png',
                spriteSheetSource: 'entity/human/Peasant.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [15, 16, 17, 18, 19],
                    },
                    [CONSTANTS.STATE_ENTITY_REPAIR]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [90, 91, 92, 93, 94],
                    },
                    [CONSTANTS.STATE_ENTITY_CARRY_GOLD]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [40, 41, 42, 43, 44],
                    },
                    [CONSTANTS.STATE_ENTITY_CARRY_WOOD]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [65, 66, 67, 68, 69],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Peon',
                iconSource: 'entity/orc/Peon_icon.png',
                spriteSheetSource: 'entity/orc/Peon.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [15, 16, 17, 18, 19],
                    },
                    [CONSTANTS.STATE_ENTITY_REPAIR]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [90, 91, 92, 93, 94],
                    },
                    [CONSTANTS.STATE_ENTITY_CARRY_GOLD]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [40, 41, 42, 43, 44],
                    },
                    [CONSTANTS.STATE_ENTITY_CARRY_WOOD]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [65, 66, 67, 68, 69],
                    },
                },
            },
        },
        maxHp: 40,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_REPAIR,
            CONSTANTS.ABILITY_EXTRACT,
            CONSTANTS.ABILITY_BUILD_STANDARD,
            CONSTANTS.ABILITY_BUILD_ADVANCED,
            CONSTANTS.ABILITY_BUILD_FARM,
            CONSTANTS.ABILITY_BUILD_LUMBER_MILL,
            CONSTANTS.ABILITY_BUILD_BARRACKS,
            CONSTANTS.ABILITY_BUILD_BLACKSMITH,
            CONSTANTS.ABILITY_BUILD_STABLE,
            CONSTANTS.ABILITY_BUILD_CHURCH,
            CONSTANTS.ABILITY_BUILD_TOWER,
        ],
    },

    [CONSTANTS.ENTITY_SOLDIER]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Footman',
                iconSource: 'entity/human/Footman_icon.png',
                spriteSheetSource: 'entity/human/Footman.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                scale: 2,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [5, 6, 7, 8, 9],
                    },
                    [CONSTANTS.STATE_ENTITY_ATTACK_MELEE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 195,
                        frames: [30, 31, 32, 33, 34],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Grunt',
                iconSource: 'entity/orc/Grunt_icon.png',
                spriteSheetSource: 'entity/orc/Grunt.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [5, 6, 7, 8, 9],
                    },
                    [CONSTANTS.STATE_ENTITY_ATTACK_MELEE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 195,
                        frames: [30, 31, 32, 33],
                    },
                },
            },
        },
        armor: 2,
        maxHp: 60,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_MELEE,
        ],
    },

    [CONSTANTS.ENTITY_SHOOTER]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Archer',
                iconSource: 'entity/human/Archer_icon.png',
                spriteSheetSource: 'entity/human/Archer.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [5, 6, 7],
                    },
                    [CONSTANTS.STATE_ENTITY_ATTACK_RANGED]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 350,
                        frames: [20, 21, 22],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Spearman',
                iconSource: 'entity/orc/Spearman_icon.png',
                spriteSheetSource: 'entity/orc/Spearman.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [5, 6, 7, 8, 9],
                    },
                    [CONSTANTS.STATE_ENTITY_ATTACK_RANGED]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 245,
                        frames: [30, 31, 32],
                    },
                },
            },
        },
        armor: 1,
        maxHp: 60,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_RANGED,
        ],
    },

    [CONSTANTS.ENTITY_CAVALRY]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Knight',
                iconSource: 'entity/human/Knight_icon.png',
                spriteSheetSource: 'entity/human/Knight.png',
                spriteSheetTileWidth: 64,
                spriteSheetTileHeight: 64,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 180,
                        frames: [0, 15, 30, 45, 60],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Raider',
                iconSource: 'entity/orc/Raider_icon.png',
                spriteSheetSource: 'entity/orc/Raider.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                scale: 2,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 180,
                        frames: [0, 15, 30, 45, 60],
                    },
                },
            },
        },
        armor: 5,
        maxHp: 90,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_LANCE,
        ],
    },

    [CONSTANTS.ENTITY_CATAPULT]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Catapult',
                iconSource: 'entity/human/Catapult_icon.png',
                spriteSheetSource: 'entity/human/Catapult.png',
                spriteSheetTileWidth: 64,
                spriteSheetTileHeight: 64,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 5, 10, 15],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Catapult',
                iconSource: 'entity/orc/Catapult_icon.png',
                spriteSheetSource: 'entity/orc/Catapult.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 5, 10, 15],
                    },
                },
            },
        },
        maxHp: 120,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_CANNON,
        ],
    },

    [CONSTANTS.ENTITY_MAGE]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Cleric',
                iconSource: 'entity/human/Cleric_icon.png',
                spriteSheetSource: 'entity/human/Cleric.png',
                spriteSheetTileWidth: 64,
                spriteSheetTileHeight: 64,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 15, 55],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Necrolyte',
                iconSource: 'entity/orc/Necrolyte_icon.png',
                spriteSheetSource: 'entity/orc/Necrolyte.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 5, 15, 30, 35, 45, 60],
                    },
                },
            },
        },
        maxHp: 40,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_SPELL,
            CONSTANTS.ABILITY_BUFF,
        ],
    },

    [CONSTANTS.ENTITY_SUMMONER]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Conjurer',
                iconSource: 'entity/human/Conjurer_icon.png',
                spriteSheetSource: 'entity/human/Conjurer.png',
                spriteSheetTileWidth: 64,
                spriteSheetTileHeight: 64,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 15, 60],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Warlock',
                iconSource: 'entity/orc/Warlock_icon.png',
                spriteSheetSource: 'entity/orc/Warlock.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 5, 15, 30, 35, 45, 60],
                    },
                },
            },
        },
        maxHp: 40,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_FIREBALL,
            CONSTANTS.ABILITY_SUMMON_COMPANION,
            CONSTANTS.ABILITY_SUMMON_CREATURE,
        ],
    },

    [CONSTANTS.ENTITY_COMPANION]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Scorpion',
                iconSource: 'entity/human/Scorpion_icon.png',
                spriteSheetSource: 'entity/human/Scorpion.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 15, 45, 60],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Spider',
                iconSource: 'entity/orc/Spider_icon.png',
                spriteSheetSource: 'entity/orc/Spider.png',
                spriteSheetTileWidth: 32,
                spriteSheetTileHeight: 32,
                scale: 1.5,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 15, 45, 60],
                    },
                },
            },
        },
        maxHp: 30,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_STING,
        ],
    },

    [CONSTANTS.ENTITY_CREATURE]: {
        tilesWidth: 1,
        tilesHeight: 1,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Elemental',
                iconSource: 'entity/human/Elemental_icon.png',
                spriteSheetSource: 'entity/human/Elemental.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                scale: 2,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: true,
                        reversed: false,
                        animationSpeed: 150,
                        animationSpeedOffset: 200,
                        frames: [0, 15, 30],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 200,
                        frames: [0, 15, 30],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Daemon',
                iconSource: 'entity/orc/Daemon_icon.png',
                spriteSheetSource: 'entity/orc/Daemon.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                scale: 2,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 5000,
                        animationSpeedOffset: 5000,
                        frames: [0, 1, 2, 3, 4],
                    },
                    [CONSTANTS.STATE_ENTITY_WALK]: {
                        repeat: true,
                        reversed: true,
                        animationSpeed: 230,
                        frames: [0, 5, 15, 30, 45, 60],
                    },
                },
            },
        },
        maxHp: 300,
        abilities: [
            CONSTANTS.ABILITY_MOVE,
            CONSTANTS.ABILITY_STOP,
            CONSTANTS.ABILITY_ATTACK_CREATURE,
        ],
    },

    [CONSTANTS.ENTITY_FARM]: {
        tilesWidth: 2,
        tilesHeight: 2,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Farm',
                iconSource: 'entity/human/FarmHuman_icon.png',
                spriteSheetSource: 'entity/human/FarmHuman.png',
                spriteSheetTileWidth: 34,
                spriteSheetTileHeight: 32,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Farm',
                iconSource: 'entity/orc/FarmOrc_icon.png',
                spriteSheetSource: 'entity/orc/FarmOrc.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 32,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 400,
        abilities: [],
        beds: 5,
    },

    [CONSTANTS.ENTITY_TOWN_HALL]: {
        tilesWidth: 3,
        tilesHeight: 3,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Town Hall',
                iconSource: 'entity/human/TownhallHuman_icon.png',
                spriteSheetSource: 'entity/human/TownhallHuman.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Town Hall',
                iconSource: 'entity/orc/TownhallOrc_icon.png',
                spriteSheetSource: 'entity/orc/TownhallOrc.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 2500,
        abilities: [
            CONSTANTS.ABILITY_PRODUCE_WORKER,
            CONSTANTS.ABILITY_BUILD_ROAD,
        ],
    },

    [CONSTANTS.ENTITY_BARRACKS]: {
        tilesWidth: 3,
        tilesHeight: 3,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Barracks',
                iconSource: 'entity/human/BarracksHuman_icon.png',
                spriteSheetSource: 'entity/human/BarracksHuman.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Barracks',
                iconSource: 'entity/orc/BarracksOrc_icon.png',
                spriteSheetSource: 'entity/orc/BarracksOrc.png',
                spriteSheetTileWidth: 64,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 800,
        abilities: [
            CONSTANTS.ABILITY_PRODUCE_SOLDIER,
            CONSTANTS.ABILITY_PRODUCE_SHOOTER,
            CONSTANTS.ABILITY_PRODUCE_CATAPULT,
            CONSTANTS.ABILITY_PRODUCE_CAVALRY,
        ],
    },

    [CONSTANTS.ENTITY_LUMBER_MILL]: {
        tilesWidth: 3,
        tilesHeight: 3,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Lumber Mill',
                iconSource: 'entity/human/LumbermillHuman_icon.png',
                spriteSheetSource: 'entity/human/LumbermillHuman.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Lumber Mill',
                iconSource: 'entity/orc/LumbermillOrc_icon.png',
                spriteSheetSource: 'entity/orc/LumbermillOrc.png',
                spriteSheetTileWidth: 48,
                spriteSheetTileHeight: 48,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 600,
        abilities: [],
    },

    [CONSTANTS.ENTITY_BLACKSMITH]: {
        tilesWidth: 2,
        tilesHeight: 2,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Blacksmith',
                iconSource: 'entity/human/Blacksmith_icon.png',
                spriteSheetSource: 'entity/human/Blacksmith.png',
                spriteSheetTileWidth: 36,
                spriteSheetTileHeight: 32,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Blacksmith',
                iconSource: 'entity/orc/Blacksmith_icon.png',
                spriteSheetSource: 'entity/orc/Blacksmith.png',
                spriteSheetTileWidth: 43,
                spriteSheetTileHeight: 32,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 800,
        abilities: [],
    },

    [CONSTANTS.ENTITY_STABLE]: {
        tilesWidth: 3,
        tilesHeight: 2,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Stable',
                iconSource: 'entity/human/Stable_icon.png',
                spriteSheetSource: 'entity/human/Stable.png',
                spriteSheetTileWidth: 56,
                spriteSheetTileHeight: 43,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Kennel',
                iconSource: 'entity/orc/Kennel_icon.png',
                spriteSheetSource: 'entity/orc/Kennel.png',
                spriteSheetTileWidth: 56,
                spriteSheetTileHeight: 31,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 500,
        abilities: [],
    },

    [CONSTANTS.ENTITY_CHURCH]: {
        tilesWidth: 3,
        tilesHeight: 3,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Church',
                iconSource: 'entity/human/Church_icon.png',
                spriteSheetSource: 'entity/human/Church.png',
                spriteSheetTileWidth: 54,
                spriteSheetTileHeight: 46,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Temple',
                iconSource: 'entity/orc/Temple_icon.png',
                spriteSheetSource: 'entity/orc/Temple.png',
                spriteSheetTileWidth: 56,
                spriteSheetTileHeight: 42,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 700,
        abilities: [
            CONSTANTS.ABILITY_PRODUCE_MAGE,
        ],
    },

    [CONSTANTS.ENTITY_TOWER]: {
        tilesWidth: 2,
        tilesHeight: 2,
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                name: 'Tower',
                iconSource: 'entity/human/Tower_icon.png',
                spriteSheetSource: 'entity/human/Tower.png',
                spriteSheetTileWidth: 36,
                spriteSheetTileHeight: 33,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
            [CONSTANTS.RACE_ORC]: {
                name: 'Tower',
                iconSource: 'entity/orc/Tower_icon.png',
                spriteSheetSource: 'entity/orc/Tower.png',
                spriteSheetTileWidth: 43,
                spriteSheetTileHeight: 36,
                framesets: {
                    [CONSTANTS.STATE_ENTITY_IDLE]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [1],
                    },
                    [CONSTANTS.STATE_ENTITY_CONSTRUCTING]: {
                        repeat: false,
                        reversed: false,
                        animationSpeed: 0,
                        frames: [0],
                    },
                },
            },
        },
        maxHp: 900,
        abilities: [
            CONSTANTS.ABILITY_PRODUCE_SUMMONER,
        ],
    },
};
