import PathAction from "./PathAction.js";
import {ACTIVITY_ENTITY_IDLE, STATE_ENTITY_IDLE, STATE_ENTITY_WALK} from "../config/constants.js";

export default class Move extends PathAction {
	constructor(target) {
		super();

		this.target = target;
	}

	idle() {
		this.setState('move');
	}

	move(entity, game) {
		let direction = this.pathHandler.goTo(entity, this.target, game);

		entity.state = STATE_ENTITY_WALK;
		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
            entity.state = STATE_ENTITY_IDLE;
            entity.activity = ACTIVITY_ENTITY_IDLE;

			this.clearState();
		}
	}
}
