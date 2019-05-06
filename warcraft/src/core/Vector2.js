export default class Vector2 {
	constructor(x = 0, y = 0) {
		this.set(x, y);
	}

	setX(x) {
		this.x = x;

		return this;
	}

	setY(y) {
		this.y = y;

		return this;
	}

	set(x, y) {
		return this.setX(x).setY(y);
	}

	setScalar(s) {
		return this.setX(s).setY(s);
	}

	add(vector2) {
		return this.set(this.x + vector2.x, this.y + vector2.y);
	}

	addScalar(s) {
		return this.set(this.x + s, this.y + s);
	}

	addScalarX(s) {
		return this.setX(this.x + s);
	}

	addScalarY(s) {
		return this.setY(this.y + s);
	}

	sub(vector2) {
		return this.set(this.x - vector2.x, this.y - vector2.y);
	}

	subScalar(s) {
		return this.set(this.x - s, this.y - s);
	}

	subScalarX(s) {
		return this.setX(this.x - s);
	}

	subScalarY(s) {
		return this.setY(this.y - s);
	}

	multiply(vector2) {
		return this.set(this.x * vector2.x, this.y * vector2.y);
	}

	multiplyScalar(s) {
		return this.set(this.x * s, this.y * s);
	}

	divide(vector2) {
		let x = this.x === 0 ? 0 : this.x / vector2.x;
		let y = this.y === 0 ? 0 : this.y / vector2.y;

		return this.set(x, y);
	}

	divideScalar(s) {
		let x = this.x === 0 ? 0 : this.x / s;
		let y = this.y === 0 ? 0 : this.y / s;

		return this.set(x, y);
	}

	min(vector2) {
		if (this.x > vector2.x) {
			this.setX(vector2.x);
		}

		if (this.y > vector2.y) {
			this.setY(vector2.y);
		}

		return this;
	}

	max(vector2) {
		if (this.x < vector2.x) {
			this.setX(vector2.x);
		}

		if (this.y < vector2.y) {
			this.setY(vector2.y);
		}

		return this;
	}

	clamp(min, max) {
		return this.max(min).min(max);
	}

	abs() {
		return this.set(Math.abs(this.x), Math.abs(this.y));
	}

	floor() {
		return this.set(Math.floor(this.x), Math.floor(this.y));
	}

	ceil() {
		return this.set(Math.ceil(this.x), Math.ceil(this.y));
	}

	round() {
		return this.set(Math.round(this.x), Math.round(this.y));
	}

	negate() {
		return this.set(-this.x, -this.y);
	}

	rotate(radian) {
		let cos = Math.cos(radian);
		let sin = Math.sin(radian);

		let x = this.x * cos - this.y * sin;
		let y = this.x * sin + this.y * cos;

		return this.set(x, y);
	}

	toAngle(radian) {
		return this.rotate(2 * Math.PI - Math.atan2(this.y, this.x) + radian);
	}

	setLength(vector2) {
		return this.normalize().multiplyScalar(vector2.getLength());
	}

	dot(vector2) {
		return this.x * vector2.x + this.y * vector2.y;
	}

	cross(vector2) {
		return this.x * vector2.y - this.y * vector2.x;
	}

	getLength() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalize() {
		return this.divideScalar(this.getLength());
	}

	distanceTo(vector2) {
		var dx = this.x - vector2.x;
		var dy = this.y - vector2.y;

		return Math.sqrt(dx * dx + dy * dy);
	}

	angleTo(vector2) {
		return Math.atan2(vector2.cross(this), vector2.dot(this));
	}

	isEqualTo(vector2) {
		return this.x === vector2.x && this.y === vector2.y;
	}

	copy(vector2) {
		return this.set(vector2.x, vector2.y);
	}

	clone() {
		return new this.constructor(this.x, this.y);
	}

	toArray() {
		return [this.x, this.y];
	}
}