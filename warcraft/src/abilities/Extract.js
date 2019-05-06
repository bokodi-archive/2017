import Ability from "./Ability.js";
import {ENTITY_GOLD_MINE, RESOURCE_GOLD, RESOURCE_LUMBER} from "../config/constants.js";
import ExtractGoldMine from "../actions/ExtractGoldMine.js";
import ExtractLumber from "../actions/ExtractLumber.js";

export default class Extract extends Ability {
    execute(entity, game, cell) {
        let extractInfo = this.getInfo('extracts');

        if (game.isForest(cell)) {
            return entity.addAction(new ExtractLumber(cell, extractInfo[RESOURCE_LUMBER]));
        }

        let target = game.find(cell);

        if (target && target.is(ENTITY_GOLD_MINE)) {
            return entity.addAction(new ExtractGoldMine(target, extractInfo[RESOURCE_GOLD]));
        }
    }

    isValidTarget(entity, game, cell) {
        let target = game.find(cell);

        return game.isForest(cell) || (target && target.is(ENTITY_GOLD_MINE));
    }
}
