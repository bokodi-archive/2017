import {arrayRange} from "../helpers/array.js";
import * as CONSTANTS from './constants.js';


export default {
    walkableTiles: ['brokenWall', 'destroyedBuilding', 'road', 'dirtRoad', 'land', 'extractedForest', 'bridge'],
    solidTiles: ['wall', 'forest', 'water'],

    display: {
        [CONSTANTS.TERRAIN_FOREST]: {
            spriteSheetSource: 'tile/forest/terrain.png',
            spriteSheetTileWidth: 32,
            spriteSheetTileHeight: 32,
            types: {
                fog: arrayRange(0, 9),
                wall: arrayRange(10, 32).concat([40]),
                brokenWall: arrayRange(33, 39),
                destroyedBuilding: arrayRange(41, 55),
                forest: arrayRange(71, 94),
                extractedForest: [95],

                road: arrayRange(56, 70)
                    .concat(arrayRange(184, 195))
                    .concat([218])
                    .concat(arrayRange(225, 240))
                    .concat(arrayRange(243, 245)),

                dirtRoad: arrayRange(196, 198)
                    .concat(arrayRange(203, 217))
                    .concat(arrayRange(252, 256)),

                land: arrayRange(97, 106)
                    .concat([109, 112])
                    .concat(arrayRange(116, 123))
                    .concat(arrayRange(134, 142))
                    .concat(arrayRange(155, 163))
                    .concat(arrayRange(167, 183))
                    .concat(arrayRange(199, 202))
                    .concat(arrayRange(218, 223))
                    .concat([241, 242])
                    .concat(arrayRange(246, 251)),

                water: [96].concat(arrayRange(107, 108))
                    .concat([110, 111])
                    .concat(arrayRange(113, 115))
                    .concat(arrayRange(124, 133))
                    .concat(arrayRange(143, 154))
                    .concat(arrayRange(164, 166)),

                bridge: arrayRange(257, 314),
            },
            roadHelper: [
                { tile: 56, top: false, right: true, bottom: false, left: false }, // right
                { tile: 57, top: false, right: false, bottom: true, left: false }, // bottom
                { tile: 58, top: false, right: false, bottom: false, left: true }, // left
                { tile: 59, top: true, right: false, bottom: false, left: false }, // top

                { tile: 60, top: true, right: true, bottom: false, left: false }, // top right
                { tile: 61, top: true, right: false, bottom: true, left: false }, // top bottom
                { tile: 62, top: true, right: false, bottom: false, left: true }, // top left

                { tile: 63, top: true, right: true, bottom: true, left: false }, // top bottom right
                { tile: 64, top: true, right: true, bottom: false, left: true }, // top right left
                { tile: 65, top: true, right: false, bottom: true, left: true }, // top bottom left

                { tile: 66, top: true, right: true, bottom: true, left: true }, // all
                { tile: 66, top: false, right: false, bottom: false, left: false }, // none

                { tile: 67, top: false, right: true, bottom: true, left: false }, // bottom right
                { tile: 68, top: false, right: true, bottom: false, left: true }, // right left
                { tile: 69, top: false, right: true, bottom: true, left: true }, // bottom right left

                { tile: 70, top: false, right: false, bottom: true, left: true }, // bottom left
            ],
        },
        [CONSTANTS.TERRAIN_SWAMP]: {
            spriteSheetSource: 'tile/swamp/terrain.png',
            spriteSheetTileWidth: 32,
            spriteSheetTileHeight: 32,
            types: {
                fog: arrayRange(0, 9).concat([101]),
                wall: arrayRange(10, 32).concat([40]),
                brokenWall: arrayRange(33, 39).concat(41),
                destroyedBuilding: arrayRange(42, 56),
                forest: arrayRange(72, 95),
                extractedForest: [96],

                road: arrayRange(57, 71),

                dirtRoad: [],

                land: arrayRange(97, 100)
                    .concat([102, 103])
                    .concat([107, 108])
                    .concat([112, 113])
                    .concat(arrayRange(117, 121))
                    .concat(arrayRange(125, 137))
                    .concat(arrayRange(141, 158))
                    .concat(arrayRange(164, 172))
                    .concat(arrayRange(178, 180))
                    .concat(arrayRange(186, 187))
                    .concat(arrayRange(189, 198))
                    .concat(arrayRange(202, 211))
                    .concat(arrayRange(216, 224))
                    .concat([228])
                    .concat(arrayRange(230, 239))
                    .concat(arrayRange(241, 249))
                    .concat(arrayRange(255, 261))
                    .concat(arrayRange(265, 271))
                    .concat(arrayRange(275, 282))
                ,

                water: [188]
                    .concat(arrayRange(199, 201))
                    .concat(arrayRange(212, 215))
                    .concat(arrayRange(224, 227))
                    .concat(arrayRange(229, 230))
                    .concat([240])
                    .concat(arrayRange(250, 254))
                    .concat(arrayRange(262, 264))
                    .concat(arrayRange(272, 274))
                ,

                bridge: arrayRange(104, 106)
                    .concat(arrayRange(109, 111))
                    .concat(arrayRange(114, 116))
                    .concat(arrayRange(122, 124))
                    .concat(arrayRange(138, 140))
                    .concat(arrayRange(159, 163))
                    .concat(arrayRange(173, 177))
                    .concat(arrayRange(181, 185)),
            },
            roadHelper: [
                { tile: 57, top: false, right: true, bottom: false, left: false }, // right
                { tile: 58, top: false, right: false, bottom: true, left: false }, // bottom
                { tile: 59, top: false, right: false, bottom: false, left: true }, // left
                { tile: 60, top: true, right: false, bottom: false, left: false }, // top

                { tile: 61, top: true, right: true, bottom: false, left: false }, // top right
                { tile: 62, top: true, right: false, bottom: true, left: false }, // top bottom
                { tile: 63, top: true, right: false, bottom: false, left: true }, // top left

                { tile: 64, top: true, right: true, bottom: true, left: false }, // top bottom right
                { tile: 65, top: true, right: true, bottom: false, left: true }, // top right left
                { tile: 66, top: true, right: false, bottom: true, left: true }, // top bottom left

                { tile: 67, top: true, right: true, bottom: true, left: true }, // all
                { tile: 67, top: false, right: false, bottom: false, left: false }, // none

                { tile: 68, top: false, right: true, bottom: true, left: false }, // bottom right
                { tile: 69, top: false, right: true, bottom: false, left: true }, // right left
                { tile: 70, top: false, right: true, bottom: true, left: true }, // bottom right left

                { tile: 71, top: false, right: false, bottom: true, left: true }, // bottom left
            ],
        },
        [CONSTANTS.TERRAIN_DUNGEON]: {
            spriteSheetSource: 'tile/dungeon/terrain.png',
            spriteSheetTileWidth: 32,
            spriteSheetTileHeight: 32,
            types: {
                fog: [],
                wall: [],
                brokenWall: [],
                destroyedBuilding: [],
                forest: [],
                road: [],
                dirtRoad: [],
                land: [],
                water: [],
                bridge: [],
            },
            roadHelper: [],
        },
    },
};
