import { arrayRemove, arrayEmpty, arrayIsEmpty } from '../helpers/array.js';

export default class EventObjective {
	constructor() {
		this.eventListeners = new Map();
	}

	getEventListeners(type) {
		this.ensureEvent(type);

		return this.eventListeners.get(type);
	}

	addEventListener(type, listener) {
		this.getEventListeners(type).push(listener);

		return this;
	}

	hasEventListener(type) {
		return !arrayIsEmpty(this.getEventListeners(type));
	}

	removeEventListener(type, listener) {
		arrayRemove(this.getEventListeners(type), listener);

		return this;
	}

	clearEventListener(type) {
		arrayEmpty(this.getEventListeners(type));

		return this;
	}

	clearAllEventListeners() {
		this.eventListeners.clear();

		return this;
	}

	dispatchEvent(type, ...parameters) {
		let removeEventListeners = [];

		this.getEventListeners(type).forEach(eventListener => {
			if (eventListener.apply(this, parameters) === true) {
				removeEventListeners.push(eventListener);
			}
		});

		removeEventListeners.forEach((eventListener) => {
			this.removeEventListener(type, eventListener);
		});

		return this;
	}

	ensureEvent(type) {
		if (!this.eventListeners.has(type)) {
			this.eventListeners.set(type, []);
		}

		return this;
	}

	on(type, listener) {
		return this.addEventListener(type, listener);
	}

	emit(type, ...parameters) {
		return this.dispatchEvent.apply(this, [type].concat(parameters));
	}
}
