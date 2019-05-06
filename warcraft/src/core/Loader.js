import EventObjective from './EventObjective.js';
import { arrayWrap } from '../helpers/array.js';

export default class Loader extends EventObjective {
	constructor(basePath = './') {
		super();

		this.basePath = basePath;

		this.sources = new Set();
		this.failedResources = new Set();
		this.cache = new Map();

		this.isRunning = false;
	}

	add(sources) {
		arrayWrap(sources).forEach((src) => {
			if (!this.cache.has(src)) {
				this.sources.add(src);
			}
		});

		return this;
	}

	remove(src) {
		this.sources.delete(src);

		if (this.isEmpty()) {
			this.end();
		}

		return this;
	}

	reset() {
		this.stop();
		this.clear();
		this.clearAllEventListeners();

		return this;
	}

	clear() {
		this.sources.clear();
		this.failedResources.clear();

		return this;
	}

	destroyCache() {
		this.cache.clear();
	}

	isEmpty() {
		return this.sources.size === 0;
	}

	isFailedEmpty() {
		return this.failedResources.size === 0;
	}

	start() {
		if (this.isRunning) {
			return this;
		}

		this.failedResources.clear();

		this.isRunning = true;

		this.emit('start');

		if (this.isEmpty()) {
			return this.end();
		}

		this.process();

		return this;
	}

	stop() {
		this.isRunning = false;

		return this;
	}

	end() {
		this.emit(this.isFailedEmpty() ? 'success' : 'error');
		this.emit('complete');

		return this.stop();
	}

	load(src) {

	}

	process() {
		this.sources.forEach(src => {
			this.load(src);
		});

		return this;
	}

	getPath(src) {
		return this.basePath + src;
	}

	loaded(src, item) {
		this.cache.set(src, item);

		// TODO emit loaded

		this.remove(src);
	}

	failed(src) {
		this.failedResources.add(src);

		// TODO emit failed

		this.remove(src);
	}
}
