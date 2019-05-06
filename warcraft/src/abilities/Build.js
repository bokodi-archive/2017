import Ability from "./Ability.js";
import BuildAction from "../actions/Build.js";

export default class Build extends Ability {
	execute(entity, game, cell) {
		let cost = this.getCost();
        let race = entity.race;
        let buildingType = this.getInfo('constructs');
        let buildTime = this.getInfo('time');

		if (game.canBuildTo(cell, buildingType) && game.hasResource(cost, race)) {
            game.costs(cost, race);
            entity.addAction(new BuildAction(cell, buildingType, buildTime));
		}
	}

	isValidTarget(entity, game, cell) {
		return game.canBuildTo(cell, this.getInfo('constructs'));
	}
}
