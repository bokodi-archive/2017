import PathAction from "./PathAction.js";
import {
    ACTIVITY_ENTITY_CONSTRUCT,
    STATE_ENTITY_CONSTRUCTING,
    STATE_ENTITY_IDLE,
    STATE_ENTITY_REPAIR,
    STATE_ENTITY_WALK
} from "../config/constants.js";

export default class Build extends PathAction {
	constructor(target, type, time) {
		super();

		this.target = target;
		this.type = type;
		this.time = time;
		this.building = null;
	}

	idle(entity, game) {
        entity.activity = ACTIVITY_ENTITY_CONSTRUCT;

        let building = game.makeEntity({
            type: this.type,
            race: entity.race,
            cellX: this.target.x,
            cellY: this.target.y,
        });

        building.state = STATE_ENTITY_CONSTRUCTING;

        game.addEntity(building);

        this.building = building;

		this.setState('goToTarget');
	}

	goToTarget(entity, game) {
		let direction = this.pathHandler.goNearEntity(entity, this.building, game);

        entity.state = STATE_ENTITY_WALK;
		entity.direction.copy(direction);

		if (this.pathHandler.isArrived()) {
            entity.state = STATE_ENTITY_REPAIR;
            this.building.process.renew(this.time);
			this.setState('build');
		}
	}

	build(entity, game) {
	    entity.victim = this.building;
        this.building.process.proceed(1);

		if (this.building.process.isFinished()) {
			this.building.state = STATE_ENTITY_IDLE;

		    return this.setState('end');
		}
	}
}
