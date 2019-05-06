import Action from "./Action.js";
import PathActionHandler from "../handlers/PathActionHandler.js";
import PathFollower from "../core/PathFollower.js";
import {ACTIVITY_ENTITY_IDLE, STATE_ENTITY_IDLE} from "../config/constants.js";

export default class PathAction extends Action {
    constructor() {
        super();

        this.pathHandler = new PathActionHandler(new PathFollower());
    }

    end(entity, game) {
        let direction = this.pathHandler.finish(entity);

        entity.direction.copy(direction);

        if (this.pathHandler.isFinished()) {
            entity.victim = null;
            entity.state = STATE_ENTITY_IDLE;
            entity.activity = ACTIVITY_ENTITY_IDLE;
            entity.direction.setScalar(0);
            this.clearState();
        }
    }

    stop() {
        super.stop();
        this.pathHandler.stop();
    }
}
