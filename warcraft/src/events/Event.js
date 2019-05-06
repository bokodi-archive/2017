export default class Event {
	constructor(originalEvent) {
		this.originalEvent = originalEvent;
		this.type = originalEvent.type;
	}
}
