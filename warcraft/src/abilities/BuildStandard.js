import Ability from "./Ability.js";
import {PACK_ABILITY_BUILD_STANDARD} from "../config/constants.js";

export default class BuildStandard extends Ability {
    execute(entity, game) {
        game.abilityPack = PACK_ABILITY_BUILD_STANDARD;
    }
}
