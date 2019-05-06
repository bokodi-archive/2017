import Vector2 from "./Vector2.js";
import {arrayEmpty} from "../helpers/array.js";

export default class PathFollower {
	constructor() {
		this.target = null;
		this.path = [];
		this.position = new Vector2();
		this.destiny = null;
	}

	setPosition(vector2) {
		this.position.copy(vector2);

		return this;
	}

	hasPosition() {
		return !!this.position;
	}

	clearPosition() {
		return this.setPosition(new Vector2());
	}

	setTarget(target) {
		this.target && target ? this.target.copy(target) : this.target = target;

		return this;
	}

	hasTarget() {
		return !!this.target;
	}

	clearTarget() {
		return this.setTarget(null);
	}

	setPath(path) {
		this.clearPath();

		Array.prototype.push.apply(this.path, path);

		return this.updateDestiny();
	}

	hasPath() {
		return this.path.length > 0;
	}

	clearPath() {
		arrayEmpty(this.path);

		return this;
	}

	updateDestiny() {
		if (this.hasPath()) {
			this.destiny = new Vector2(...this.path[0]);
		}

		return this;
	}

	hasDestiny() {
		return !!this.destiny;
	}

	clearDestiny() {
		this.destiny = null;

		return this;
	}

	reset() {
		this.clearTarget();
		this.clearPath();
		this.clearPosition();
		this.clearDestiny();
	}

	getDirection() {
		return this.hasTarget() ? this.target.clone().sub(this.position).normalize() : new Vector2();
	}

	update(position) {
		this.setPosition(position);

		if (!this.hasTarget() || this.isAtTarget()) {
			this.nextTarget();
		}

		return this;
	}

	nextTarget() {
		this.clearTarget();

		if (this.hasPath()) {
			this.setTarget(new Vector2(...this.path.pop()));
		}

		return this;
	}

	targetDistance() {
		return this.position.distanceTo(this.target);
	}

	destinyDistance() {
		return this.position.distanceTo(this.destiny)
	}

	isAtTarget() {
		return this.hasTarget() && this.targetDistance() < 1;
	}

	isArrived() {
		return this.hasDestiny() && this.destinyDistance() < 1;
	}
}
