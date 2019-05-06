import Event from "./Event.js";

export default class MouseWheelEvent extends Event {
	constructor(originalEvent) {
		super(originalEvent);

		this.dX = Math.sign(originalEvent.deltaX);
		this.dY = Math.sign(originalEvent.deltaY);
	}
}
