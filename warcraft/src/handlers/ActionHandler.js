import {arrayLast, arrayRemove, arrayEmpty} from "../helpers/array.js";

export default class ActionHandler {
	constructor() {
		this.actions = [];
	}

	update(entity, game) {
		let action = this.current();

		if (action) {
			this.check(action.update(entity, game));
		}

		return this;
	}

	stop() {
		let action = this.current();

		if (action) {
			action.stop();
		}

		return this;
	}

	isPending() {
		return !this.actions.length;
	}

	add(action) {
		this.clean(action);

		this.actions.push(action);

		return this;
	}

	has(action) {
		return this.actions.includes(action);
	}

	last() {
		return arrayLast(this.actions);
	}

	current() {
		return this.last();
	}

	check(action) {
		if (!action.hasState()) {
			this.remove(action);
		}

		return this;
	}

	remove(action) {
		arrayRemove(this.actions, action);

		return this;
	}

	clear() {
		arrayEmpty(this.actions);

		return this;
	}

	clean(action) {
		this.actions = this.actions.filter(a => a.constructor !== action.constructor);

		return this;
	}
}
