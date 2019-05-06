import Ability from "./Ability.js";

export default class Cancel extends Ability {
	execute(entity, game) {
		game.cancel();
	}
}
