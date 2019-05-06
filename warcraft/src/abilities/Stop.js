import Ability from "./Ability.js";

export default class Stop extends Ability {
	execute(entity, game) {
		entity.stopAction();
	}
}
