import PathAction from "./PathAction.js";
import {ACTIVITY_ENTITY_FIGHT, STATE_ENTITY_ATTACK_RANGED, STATE_ENTITY_WALK} from "../config/constants.js";

export default class AttackRanged extends PathAction {
    constructor(target, damageMin, damageMax, range, delay) {
        super();

        this.target = target;
        this.damageMin = damageMin;
        this.damageMax = damageMax;
        this.range = range;
        this.delay = delay;
    }

    getDamage() {
        let gap = this.damageMax - this.damageMin;
        let rand = Math.round(Math.random() * gap);

        return this.damageMin + rand;
    }

    idle(entity) {
        entity.victim = this.target;
        entity.activity = ACTIVITY_ENTITY_FIGHT;

        this.setState('goToTarget');
    }

    goToTarget(entity, game) {
        let direction = this.pathHandler.goNearEntity(entity, this.target, game, this.range);

        entity.state = STATE_ENTITY_WALK;
        entity.direction.copy(direction);

        if (this.pathHandler.isArrived()) {
            this.setState('attack');
        }
    }

    attack(entity, game) {
        if (!this.target.hp) {
            return this.setState('end');
        }

        if (game.entitiesDistance(entity, this.target) > this.range) {
            this.pathHandler.reset();

            return this.setState('goToTarget');
        }

        entity.state = STATE_ENTITY_ATTACK_RANGED;
        entity.victim = this.target;
        entity.dealDamage(this.target, this.getDamage());

        this.sleep(this.delay);
    }
}
