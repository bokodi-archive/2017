import Action from "./Action.js";
import {ACTIVITY_ENTITY_IDLE, ACTIVITY_ENTITY_PRODUCE} from "../config/constants.js";

export default class Produce extends Action {
	constructor(type, time) {
		super();

		this.type = type;
		this.time = time;
	}

	idle(entity, game) {
        entity.activity = ACTIVITY_ENTITY_PRODUCE;
        entity.process.renew(this.time);

		this.setState('produce');
	}

	produce(entity, game) {
        entity.process.proceed(1);

        if (!entity.process.isFinished()) {
            return;
        }

        let walkableNeighbors = game.entityWalkableNeighbors(entity);

        if (walkableNeighbors.length) {
            let entityCell = game.entityPositionCell(entity);
            let produceCell = game.nearestCell(entityCell, walkableNeighbors);
            let {x: cellX, y: cellY} = produceCell;

            game.insertEntity({
                race: entity.race,
                type: this.type,
                cellX: cellX,
                cellY: cellY,
            });

            entity.activity = ACTIVITY_ENTITY_IDLE;

            this.clearState();
        }
	}
}
