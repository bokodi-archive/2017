import Ability from "./Ability.js";
import MoveAction from "../actions/Move.js";

export default class Move extends Ability {
	execute(entity, game, cell) {
		if (!game.find(cell)) {
			entity.addAction(new MoveAction(cell));
		}
	}

    isValidTarget(entity, game, cell) {
	    return !game.find(cell) && game.isWalkable(cell);
    }
}
