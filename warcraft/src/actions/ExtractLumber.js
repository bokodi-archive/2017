import PathAction from "./PathAction.js";
import {
    ACTIVITY_ENTITY_EXTRACT_WOOD,
    STATE_ENTITY_CARRY_WOOD,
    STATE_ENTITY_REPAIR,
    STATE_ENTITY_WALK
} from "../config/constants.js";

export default class ExtractLumber extends PathAction {
	constructor(target, amount) {
		super();

        this.amount = amount;
		this.target = target;
		this.extracted = [];
	}

	findTarget(entity, game) {
		// TODO store extractables
		if (game.isForest(this.target)) {
			return this.target;
		}

		for (let i = 0; i < this.extracted.length; ++i) {
			let extracted = this.extracted[i];
			let neighbors = game.neighbors(extracted);
			let neighborsForest = neighbors.filter(neighbor => game.isForest(neighbor));
			let next = game.nearestCell(game.entityPositionCell(entity), neighborsForest);

			if (next) return next;
		}
	}

	idle(entity) {
        entity.activity = ACTIVITY_ENTITY_EXTRACT_WOOD;

		this.setState('goToForest');
	}

	goToForest(entity, game) {
		let target = this.findTarget(entity, game);

		if (!target || !game.isForest(target)) {
		    return this.setState('end');
		}

		this.target = target;
        entity.state = STATE_ENTITY_WALK;

		let direction = this.pathHandler.goNearTile(entity, target, game);

		entity.direction.copy(direction);

		if (game.isForest(target) && this.pathHandler.isArrived()) {
            this.sleep(300);
            entity.state = STATE_ENTITY_REPAIR;
			this.setState('getLumber');
		}
	}

	getLumber(entity, game) {
        if (game.entityDistance(entity, this.target) > 1) {
            this.pathHandler.reset();
            this.setSleep(0);

            return this.setState('goToForest');
        }

		game.extractLumber(this.target);

        this.setState('returnLumber');
    }

	returnLumber(entity, game) {
		let townHall = game.townHall(entity.race);

		if (!townHall) {
			return this.setState('end');
		}

		this.extracted.push(this.target);

        entity.state = STATE_ENTITY_CARRY_WOOD;
		let direction = this.pathHandler.goNearEntity(entity, townHall, game);

		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
            game.gain({
                lumber: this.amount,
            }, entity.race);

			this.setState('goToForest');
		}
	}
}
