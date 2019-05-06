export default class Action {
	constructor() {
		this.state = null;
		this.wait = 0;

		this.setState('idle');
	}

	idle() {

	}

	end() {
		this.clearState();
	}

	update(entity, game) {
		if (this.hasState()) {
			this.elapse();

			this.run(entity, game);
		}

		return this;
	}

	runState(state, entity, game) {
		return this.setState(state).run(entity, game);
	}

	setState(state) {
		this.state = state;

		return this;
	}

	hasState() {
		return !!this.state;
	}

	validState() {
		return this.hasState() && !!this[this.state];
	}

	clearState() {
		return this.setState(null);
	}

	run(entity, game) {
		if (this.validState() && this.awake()) {
			this[this.state](entity, game);
		}

		return this;
	}

	stop() {
	    this.setSleep();

		return this.setState('end');
	}

	awake() {
		return !this.wait;
	}

	elapse() {
		this.wait = Math.max(0, --this.wait);

		return this;
	}

	setSleep(duration = 0) {
	    this.wait = duration;

	    return this;
    }

	sleep(duration) {
		return this.setSleep(this.wait + duration);
	}
}
