import EntityAi from "./EntityAi.js";
import {ABILITY_MOVE, ACTIVITY_ENTITY_ESCAPE} from "../config/constants.js";

export default class Coward extends EntityAi {
    update(entity, game) {
        let threat = this.findThreat(entity, game);

        if (threat && entity.activity !== ACTIVITY_ENTITY_ESCAPE) {
            let help = this.findHelp(entity, game);

            if (help) {
                let helpNeighbors = game.entityWalkableNeighbors(help);
                let entityPosition = game.entityPositionCell(entity);

                let target = game.nearestCell(entityPosition, helpNeighbors);

                if (target) {
                    entity.activity = ACTIVITY_ENTITY_ESCAPE;

                    this.runAction(ABILITY_MOVE, entity, game, target);
                }
            }
        }
    }
}
