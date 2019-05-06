import * as CONSTANTS from "./constants.js";


export default {
    [CONSTANTS.ABILITY_CANCEL]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Cancel',
                spriteSheetSource: 'skill/human/CancelHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Cancel',
                spriteSheetSource: 'skill/orc/CancelOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
    },

    [CONSTANTS.ABILITY_MOVE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Move',
                spriteSheetSource: 'skill/human/MoveHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Move',
                spriteSheetSource: 'skill/orc/MoveOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'm',
        levels: 1,
        needsTarget: true,
    },

    [CONSTANTS.ABILITY_STOP]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Stop',
                spriteSheetSource: 'skill/human/StopHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Stop',
                spriteSheetSource: 'skill/orc/StopOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 's',
        levels: 3,
    },

    [CONSTANTS.ABILITY_REPAIR]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Repair',
                spriteSheetSource: 'skill/human/RepairHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Repair',
                spriteSheetSource: 'skill/orc/RepairOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'r',
        levels: 1,
        needsTarget: true,
    },

    [CONSTANTS.ABILITY_EXTRACT]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Harvest',
                spriteSheetSource: 'skill/human/ExtractHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Harvest',
                spriteSheetSource: 'skill/orc/ExtractOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'h',
        levels: 1,
        needsTarget: true,
        info: {
            extracts: {
                [CONSTANTS.RESOURCE_GOLD]: 100,
                [CONSTANTS.RESOURCE_LUMBER]: 100,
            },
        },
    },

    [CONSTANTS.ABILITY_ATTACK_MELEE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Sword',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Axe',
                spriteSheetSource: 'skill/orc/AttackAxe.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 1,
            delay: 65,
            damageMin: 1,
            damageMax: 10,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_STING]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Sting',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Sting',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 1,
            delay: 45,
            damageMin: 3,
            damageMax: 3,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_CREATURE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 1,
            delay: 80,
            damageMin: 0,
            damageMax: 65,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_RANGED]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Bow',
                spriteSheetSource: 'skill/human/AttackBow.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Spear',
                spriteSheetSource: 'skill/orc/AttackSpear.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 5,
            delay: 50,
            damageMin: 4,
            damageMax: 4,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_LANCE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Sword',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Axe',
                spriteSheetSource: 'skill/orc/AttackAxe.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 1,
            delay: 65,
            damageMin: 1,
            damageMax: 14,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_CANNON]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Cannon',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Cannon',
                spriteSheetSource: 'skill/human/AttackSword.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 3,
        needsTarget: true,
        info: {
            range: 8,
            delay: 800,
            damageMin: 0,
            damageMax: 255,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_SPELL]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Holy Lance',
                spriteSheetSource: 'skill/human/AttackSpell.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Shadow Spear',
                spriteSheetSource: 'skill/orc/AttackShadowSpear.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 1,
        needsTarget: true,
        info: {
            range: 2,
            delay: 40,
            damageMin: 6,
            damageMax: 6,
        },
    },

    [CONSTANTS.ABILITY_ATTACK_FIREBALL]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Attack Fireball',
                spriteSheetSource: 'skill/human/AttackFireball.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Attack Fireball',
                spriteSheetSource: 'skill/orc/AttackFireball.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 1,
        needsTarget: true,
        info: {
            range: 3,
            delay: 40,
            damageMin: 6,
            damageMax: 6,
        },
    },

    [CONSTANTS.ABILITY_BUFF]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Invisibility',
                spriteSheetSource: 'skill/human/Invisibility.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Unholy Armor',
                spriteSheetSource: 'skill/orc/UnholyArmor.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'i',
        levels: 1,
        needsTarget: true,
        info: {
            range: 3,
            manaCost: 20,
            time: 10000,
            buff: {
                [CONSTANTS.RACE_HUMAN]: CONSTANTS.FLAG_ENTITY_INVISIBLE,
                [CONSTANTS.RACE_ORC]: CONSTANTS.FLAG_ENTITY_IMMORTAL,
            },
        },
    },

    [CONSTANTS.ABILITY_SUMMON_COMPANION]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Summon Scorpions',
                spriteSheetSource: 'entity/human/Scorpion_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Summon Spiders',
                spriteSheetSource: 'entity/orc/Spider_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'u',
        levels: 1,
        needsTarget: true,
        info: {
            range: 3,
            manaCost: 20,
            summons: CONSTANTS.ENTITY_COMPANION,
        },
    },

    [CONSTANTS.ABILITY_SUMMON_CREATURE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Summon Elemental',
                spriteSheetSource: 'entity/human/Elemental_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Summon Daemon',
                spriteSheetSource: 'entity/orc/Daemon_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'e',
        levels: 1,
        needsTarget: true,
        info: {
            range: 3,
            manaCost: 40, // todo 60
            summons: CONSTANTS.ENTITY_CREATURE,
        },
    },

    [CONSTANTS.ABILITY_BUILD_ROAD]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Road',
                spriteSheetSource: 'skill/human/BuildRoad.png',
                spriteSheetTileWidth: 54,
                spriteSheetTileHeight: 38,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Road',
                spriteSheetSource: 'skill/orc/BuildRoad.png',
                spriteSheetTileWidth: 54,
                spriteSheetTileHeight: 38,
            },
        },
        key: 'r',
        levels: 1,
        needsTarget: true,
        repeatable: true,
        cost: { gold: 50 },
    },

    [CONSTANTS.ABILITY_BUILD_STANDARD]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Standard',
                spriteSheetSource: 'skill/human/BuildingStandardHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Standard',
                spriteSheetSource: 'skill/orc/BuildingStandardOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'b',
        levels: 1,
    },

    [CONSTANTS.ABILITY_BUILD_ADVANCED]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Advanced',
                spriteSheetSource: 'skill/human/BuildingAdvancedHuman.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Advanced',
                spriteSheetSource: 'skill/orc/BuildingAdvancedOrc.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        key: 'a',
        levels: 1,
    },

    [CONSTANTS.ABILITY_BUILD_FARM]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Farm',
                spriteSheetSource: 'entity/human/FarmHuman_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Farm',
                spriteSheetSource: 'entity/orc/FarmOrc_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_STANDARD,
        cost: { gold: 500, lumber: 300 },
        info: { constructs: CONSTANTS.ENTITY_FARM, time: 1000 },
    },

    [CONSTANTS.ABILITY_BUILD_BARRACKS]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Barracks',
                spriteSheetSource: 'entity/human/BarracksHuman_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Barracks',
                spriteSheetSource: 'entity/orc/BarracksOrc_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_STANDARD,
        cost: { gold: 600, lumber: 500 },
        info: { constructs: CONSTANTS.ENTITY_BARRACKS, time: 1500 },
    },

    [CONSTANTS.ABILITY_BUILD_LUMBER_MILL]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Lumber Mill',
                spriteSheetSource: 'entity/human/LumbermillHuman_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Lumber Mill',
                spriteSheetSource: 'entity/orc/LumbermillOrc_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_STANDARD,
        cost: { gold: 600, lumber: 500 },
        info: { constructs: CONSTANTS.ENTITY_LUMBER_MILL, time: 1500 },
    },

    [CONSTANTS.ABILITY_BUILD_BLACKSMITH]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Blacksmith',
                spriteSheetSource: 'entity/human/Blacksmith_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Blacksmith',
                spriteSheetSource: 'entity/orc/Blacksmith_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_ADVANCED,
        cost: { gold: 900, lumber: 400 },
        info: { constructs: CONSTANTS.ENTITY_BLACKSMITH, time: 1500 },
        dependencies: [
            CONSTANTS.ENTITY_LUMBER_MILL,
        ],
    },

    [CONSTANTS.ABILITY_BUILD_CHURCH]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Church',
                spriteSheetSource: 'entity/human/Church_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Temple',
                spriteSheetSource: 'entity/orc/Temple_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_ADVANCED,
        cost: { gold: 800, lumber: 500 },
        info: { constructs: CONSTANTS.ENTITY_CHURCH, time: 2000 },
        dependencies: [
            CONSTANTS.ENTITY_LUMBER_MILL,
        ],
    },

    [CONSTANTS.ABILITY_BUILD_STABLE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Stable',
                spriteSheetSource: 'entity/human/Stable_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Kennel',
                spriteSheetSource: 'entity/orc/Kennel_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_ADVANCED,
        cost: { gold: 1000, lumber: 400 },
        info: { constructs: CONSTANTS.ENTITY_STABLE, time: 1500 },
        dependencies: [
            CONSTANTS.ENTITY_LUMBER_MILL,
        ],
    },

    [CONSTANTS.ABILITY_BUILD_TOWER]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Tower',
                spriteSheetSource: 'entity/human/Tower_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Tower',
                spriteSheetSource: 'entity/orc/Tower_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        needsTarget: true,
        pack: CONSTANTS.PACK_ABILITY_BUILD_ADVANCED,
        cost: { gold: 1400, lumber: 300 },
        info: { constructs: CONSTANTS.ENTITY_TOWER, time: 2000 },
        dependencies: [
            CONSTANTS.ENTITY_BLACKSMITH,
        ],
    },

    [CONSTANTS.ABILITY_PRODUCE_WORKER]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Peasant',
                spriteSheetSource: 'entity/human/Peasant_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Peon',
                spriteSheetSource: 'entity/orc/Peon_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 400 },
        info: { produces: CONSTANTS.ENTITY_WORKER, time: 750 },
    },

    [CONSTANTS.ABILITY_PRODUCE_SOLDIER]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Footman',
                spriteSheetSource: 'entity/human/Footman_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Grunt',
                spriteSheetSource: 'entity/orc/Grunt_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 400 },
        info: { produces: CONSTANTS.ENTITY_SOLDIER, time: 600 },
    },

    [CONSTANTS.ABILITY_PRODUCE_SHOOTER]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Archer',
                spriteSheetSource: 'entity/human/Archer_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Spearman',
                spriteSheetSource: 'entity/orc/Spearman_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 450, lumber: 50 },
        info: { produces: CONSTANTS.ENTITY_SHOOTER, time: 700 },
        dependencies: [
            CONSTANTS.ENTITY_LUMBER_MILL,
        ],
    },

    [CONSTANTS.ABILITY_PRODUCE_CAVALRY]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Knight',
                spriteSheetSource: 'entity/human/Knight_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Raider',
                spriteSheetSource: 'entity/orc/Raider_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 850 },
        info: { produces: CONSTANTS.ENTITY_CAVALRY, time: 800 },
        dependencies: [
            CONSTANTS.ENTITY_BLACKSMITH,
            CONSTANTS.ENTITY_STABLE,
        ],
    },

    [CONSTANTS.ABILITY_PRODUCE_CATAPULT]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Build Catapult',
                spriteSheetSource: 'entity/human/Catapult_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Build Catapult',
                spriteSheetSource: 'entity/orc/Catapult_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 900, lumber: 200 },
        info: { produces: CONSTANTS.ENTITY_CATAPULT, time: 1000 },
        dependencies: [
            CONSTANTS.ENTITY_LUMBER_MILL,
            CONSTANTS.ENTITY_BLACKSMITH,
        ],
    },

    [CONSTANTS.ABILITY_PRODUCE_MAGE]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Cleric',
                spriteSheetSource: 'entity/human/Cleric_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Necrolyte',
                spriteSheetSource: 'entity/orc/Necrolyte_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 700 },
        info: { produces: CONSTANTS.ENTITY_MAGE, time: 800 },
    },

    [CONSTANTS.ABILITY_PRODUCE_SUMMONER]: {
        display: {
            [CONSTANTS.RACE_HUMAN]: {
                label: 'Train Conjurer',
                spriteSheetSource: 'entity/human/Conjurer_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
            [CONSTANTS.RACE_ORC]: {
                label: 'Train Warlock',
                spriteSheetSource: 'entity/orc/Warlock_icon.png',
                spriteSheetTileWidth: 27,
                spriteSheetTileHeight: 19,
            },
        },
        levels: 1,
        cost: { gold: 900 },
        info: { produces: CONSTANTS.ENTITY_SUMMONER, time: 900 },
    },
};
