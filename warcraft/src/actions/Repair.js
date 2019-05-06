import PathAction from "./PathAction.js";
import {ACTIVITY_ENTITY_REPAIR, STATE_ENTITY_REPAIR, STATE_ENTITY_WALK} from "../config/constants.js";

export default class Repair extends PathAction {
	constructor(target) {
		super();

		this.target = target;
	}

	idle(entity) {
        entity.activity = ACTIVITY_ENTITY_REPAIR;

		this.setState('goToTarget');
	}

	goToTarget(entity, game) {
		let direction = this.pathHandler.goNearEntity(entity, this.target, game);

		entity.state = STATE_ENTITY_WALK;
		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
			this.setState('repair');
		}
	}

	repair(entity, game) {
		if (!this.target.hp || this.target.hp === this.target.maxHp) {
			return this.setState('end');
		}

		entity.victim = this.target;
		entity.state = STATE_ENTITY_REPAIR;
		entity.dealHeal(this.target, 15);

		this.sleep(100);
	}
}
