import EntityAi from "./EntityAi.js";
import {ACTIVITY_ENTITY_FIGHT} from "../config/constants.js";

export default class Aggressive extends EntityAi {
    update(entity, game) {
        if (!entity.isVisible() || entity.activity === ACTIVITY_ENTITY_FIGHT) {
            return;
        }

        let threat = this.findThreat(entity, game);

        if (threat) {
            let attackAbilityType = this.getAttackAbilityType(entity, game);

            if (attackAbilityType) {
                let targetCell = game.entityPositionCell(threat);

                this.runAction(attackAbilityType, entity, game, targetCell);
            }
        }
    }
}
