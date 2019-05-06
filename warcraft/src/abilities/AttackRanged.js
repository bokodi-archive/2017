import Ability from "./Ability.js";
import AttackRangedAction from "../actions/AttackRanged.js";

export default class AttackRanged extends Ability {
    execute(entity, game, cell) {
        let target = game.find(cell);

        if (target && target.isVisible()) {
            let {damageMin = 0, damageMax = 0, range = 1, delay = 0} = this.getInfo();

            entity.addAction(new AttackRangedAction(target, damageMin, damageMax, range, delay));
        }
    }

    isValidTarget(entity, game, cell) {
        let target = game.find(cell);

        return !!target && target.isVisible();
    }
}
