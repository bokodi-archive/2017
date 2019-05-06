import {arrayNext, arrayWrap} from "../helpers/array.js";

export default class SpriteSheet {
	constructor(image, frameWidth, frameHeight = frameWidth) {
		this.image = image;

		this.frameWidth = frameWidth;
		this.frameHeight = frameHeight;

		this.frameIndex = 0;
		this.framesets = new Map();
		this.frameset = null;

		this.lastTick = null;

		this.columns = Math.round(image.width / frameWidth);
		this.rows = Math.round(image.height / frameHeight);
	}

	addFrameset(key, framesetData) {
		framesetData.frames = arrayWrap(framesetData.frames);

		this.framesets.set(key, framesetData);

		return this;
	}

	setFrameset(key) {
		let current = this.frameset;

		this.frameset = key;

		if (current !== key) {
			this.firstFrame();
			this.animated();
		}

		return this;
	}

	firstFrame() {
		let framesetData = this.currentFrameset();

		if (framesetData) {
			this.frameIndex = framesetData.frames[0];
		}

		return this;
	}

	nextFrame() {
		let framesetData = this.currentFrameset();

		if (framesetData && framesetData.repeat) {
			this.frameIndex = arrayNext(framesetData.frames, this.frameIndex);
		}

		return this;
	}

	currentFrameset() {
		return this.framesets.get(this.frameset);
	}

	countFrames() {
		return this.columns * this.rows;
	}

	frameToCoordinates(frameIndex) {
		let row = Math.floor(frameIndex / this.columns);
		let col = frameIndex - row * this.columns;

		return [col * this.frameWidth, row * this.frameHeight];
	}

	currentFrameCoordinates() {
		return this.frameToCoordinates(this.frameIndex);
	}

	animate() {
		let framesetData = this.currentFrameset();

		if (!framesetData) {
			return;
		}

		let elapsed = this.elapsed();
		let animationSpeed = framesetData.animationSpeed;
		let animationOffset = framesetData.animationSpeedOffset || 0;

		animationSpeed += (Math.random() * animationOffset | 0);

		if (elapsed > animationSpeed) {
			this.nextFrame();
			this.animated();
		}
	}

	now() {
		return Number(new Date());
	}

	elapsed() {
		return this.now() - this.lastTick;
	}

	animated() {
		this.lastTick = this.now();

		return this;
	}

	draw(context, position, width = this.frameWidth, height = this.frameHeight) {
		let [x, y] = this.currentFrameCoordinates();

		context.drawImage(this.image, x, y, this.frameWidth, this.frameHeight, position.x, position.y, width, height);

		return this;
	}
}
