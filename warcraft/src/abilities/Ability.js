export default class Ability {
	constructor(type, config = {}) {
		this.type = type;
		this.config = config;

		this.level = 1;
	}

	getCost() {
		return this.config.cost || {};
	}

	getDependencies() {
		return this.config.dependencies || [];
	}

	getInfo(key, defaultValue = null) {
		let info = this.config.info || {};

		if (!key) {
			return info;
		}

		return info[key] || defaultValue;
	}

	getCharCode() {
		let { key = '' } = this.config;

		return key.toUpperCase().charCodeAt(0);
	}

	needsTarget() {
		return !!this.config.needsTarget;
	}

	repeatable() {
		return !!this.config.repeatable;
	}

	isValidTarget(entity, game, cell) {
		return true;
	}

	execute(entity, game, cell = null) {

	}
}
