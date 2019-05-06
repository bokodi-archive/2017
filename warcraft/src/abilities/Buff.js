import Ability from "./Ability.js";
import {arrayWrap} from "../helpers/array.js";

export default class Buff extends Ability {
    execute(entity, game, cell) {
        let target = game.find(cell);

        if (target && game.isUnit(target.type)) {
            let buffInfo = this.getInfo('buff');
            let buffs = arrayWrap(buffInfo[entity.race]);
            let time = this.getInfo('time');

            buffs.forEach(buff => entity.addBuff(target, buff, time));
        }
    }

    isValidTarget(entity, game, cell) {
        let target = game.find(cell);

        return !!target && game.isUnit(target.type) && this.getInfo('range', 1) >= game.entityDistance(entity, cell);
    }
}
