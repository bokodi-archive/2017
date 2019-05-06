import Ability from "./Ability.js";
import RepairAction from "../actions/Repair.js";

export default class Repair extends Ability {
	execute(entity, game, cell) {
		let target = game.find(cell);

		if (target) {
			entity.addAction(new RepairAction(target))
		}
	}

    isValidTarget(entity, game, cell) {
        return game.find(cell);
    }
}
