import {KEY_LEFT, KEY_UP, KEY_RIGHT, KEY_DOWN} from "../events/KeyEvent.js";
import Vector2 from "../core/Vector2.js";


let directionKeys = new Map();

directionKeys.set(KEY_LEFT, new Vector2(-1, 0));
directionKeys.set(KEY_UP, new Vector2(0, -1));
directionKeys.set(KEY_RIGHT, new Vector2(1, 0));
directionKeys.set(KEY_DOWN, new Vector2(0, 1));

export default directionKeys;
