import * as dom from '../helpers/dom.js';

export default class Layer {
	constructor(width, height) {
		this.canvas = dom.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		this.width = width;
		this.height = height;
	}

	get width() {
		return this.canvas.width;
	}

	get height() {
		return this.canvas.height;
	}

	set width(width) {
		this.canvas.width = width;
	}

	set height(height) {
		this.canvas.height = height;
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	enableSmoothing() {
		this.setSmoothing(true);
	}

	disableSmoothing() {
		this.setSmoothing(false);
	}

	setSmoothing(bool) {
		this.ctx.mozImageSmoothingEnabled = bool;
		this.ctx.webkitImageSmoothingEnabled = bool;
		this.ctx.msImageSmoothingEnabled = bool;
		this.ctx.imageSmoothingEnabled = bool;
	}
}
