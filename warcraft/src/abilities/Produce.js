import Ability from "./Ability.js";
import ProduceAction from "../actions/Produce.js";
import {ACTIVITY_ENTITY_IDLE} from "../config/constants.js";

export default class Produce extends Ability {
    execute(entity, game) {
        let cost = this.getCost();
        let race = entity.race;

        if (game.hasResource(cost, race) && game.canProduce(race) && entity.activity === ACTIVITY_ENTITY_IDLE) {
            game.costs(cost, race);
            entity.addAction(new ProduceAction(this.getInfo('produces'), this.getInfo('time')));
        }
    }
}
