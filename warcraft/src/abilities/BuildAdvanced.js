import Ability from "./Ability.js";
import {PACK_ABILITY_BUILD_ADVANCED} from "../config/constants.js";

export default class BuildAdvanced extends Ability {
    execute(entity, game) {
        game.abilityPack = PACK_ABILITY_BUILD_ADVANCED;
    }
}
