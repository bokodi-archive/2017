import Game from "./Game.js";
import gameConfig from "./config/main.js";
import * as CONSTANTS from "./config/constants.js";


let game = new Game(gameConfig, {
    player: CONSTANTS.RACE_HUMAN,
    mainWrapper: document.getElementById('main'),
    mapWrapper: document.getElementById('map'),
    selectionWrapper: document.getElementById('selection'),
    statsWrapper: document.getElementById('stats'),
    abilitiesWrapper: document.getElementById('selection-abilities'),
});

game.on('load.success', () => game.nextLevel().start()).load();

window.document.addEventListener('keypress', e => {
    if (e.keyCode === 13) game.nextLevel();
});

window.game = game;
