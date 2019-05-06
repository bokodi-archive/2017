import Event from "./Event.js";

export const KEY_ESC = 27;

export const KEY_LEFT = 37;
export const KEY_UP = 38;
export const KEY_RIGHT = 39;
export const KEY_DOWN = 40;

export default class KeyEvent extends Event {
	constructor(originalEvent) {
		super(originalEvent);

		this.keyCode = originalEvent.keyCode || originalEvent.which;
	}

	getChar() {
		return String.fromCharCode(this.keyCode).toLowerCase();
	}
}
