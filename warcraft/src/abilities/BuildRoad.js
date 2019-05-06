import Ability from "./Ability.js";

export default class BuildRoad extends Ability {
	execute(entity, game, cell) {
		let cost = this.getCost();
        let race = entity.race;

		if (game.hasResource(cost, race)) {
		    game.costs(cost, race);
            game.addRoad(cell);
        }
	}

	isValidTarget(entity, game, cell) {
	    return game.canAddRoad(cell);
	}
}
