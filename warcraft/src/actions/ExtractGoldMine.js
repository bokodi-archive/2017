import PathAction from "./PathAction.js";
import {
    ACTIVITY_ENTITY_EXTRACT_GOLD,
    STATE_ENTITY_CARRY_GOLD,
    STATE_ENTITY_REPAIR,
    STATE_ENTITY_WALK
} from "../config/constants.js";

export default class ExtractGoldMine extends PathAction {
	constructor(mine, amount) {
		super();

		this.amount = amount;
		this.mine = mine;
	}

	idle(entity) {
        entity.activity = ACTIVITY_ENTITY_EXTRACT_GOLD;

		this.setState('goToMine');
	}

	goToMine(entity, game) {
		let direction = this.pathHandler.goNearEntity(entity, this.mine, game);

        entity.state = STATE_ENTITY_WALK;
		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
		    this.sleep(150);
		    entity.victim = this.mine;
            entity.state = STATE_ENTITY_REPAIR;
			this.setState('getGold');
		}
	}

	getGold() {
	    this.setState('returnGold');
    }

	returnGold(entity, game) {
		let townHall = game.townHall(entity.race);

		if (!townHall) {
		    return this.setState('end');
		}

        entity.victim = townHall;
        entity.state = STATE_ENTITY_CARRY_GOLD;
		let direction = this.pathHandler.goNearEntity(entity, townHall, game);

		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
			game.gain({
                gold: this.amount,
			}, entity.race);

			this.setState('goToMine');
		}
	}
}
