import Ability from "./Ability.js";
import AttackMeleeAction from "../actions/AttackMelee.js";

export default class AttackMelee extends Ability {
	execute(entity, game, cell) {
		let target = game.find(cell);

		if (target && target.isVisible()) {
		    let {damageMin = 0, damageMax = 0, range = 1, delay = 0} = this.getInfo();

			entity.addAction(new AttackMeleeAction(target, damageMin, damageMax, range, delay));
		}
	}

    isValidTarget(entity, game, cell) {
		let target = game.find(cell);

	    return !!target && target.isVisible();
    }
}
