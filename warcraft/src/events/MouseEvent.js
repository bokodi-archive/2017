import Vector2 from "../core/Vector2.js";
import Event from "./Event.js";

export const BUTTON_LEFT = 1;

export default class MouseEvent extends Event {
	constructor(originalEvent) {
		super(originalEvent);

		this.x = originalEvent.layerX;
		this.y = originalEvent.layerY;
	}

	toVector() {
		return new Vector2(this.x, this.y);
	}
}
