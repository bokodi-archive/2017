import EventObjective from "./core/EventObjective.js";
import Vector2 from "./core/Vector2.js";
import ActionHandler from "./handlers/ActionHandler.js";
import PhysicsHandler from "./handlers/PhysicsHandler.js";
import GraphicsHandler from "./handlers/GraphicsHandler.js";
import {range} from "./helpers/math.js";
import {
    ACTIVITY_ENTITY_IDLE,
    FLAG_ENTITY_IMMORTAL,
    FLAG_ENTITY_INVISIBLE,
    RACE_NEUTRAL,
    STATE_ENTITY_IDLE
} from "./config/constants.js";
import Process from "./core/Process.js";

export default class Entity extends EventObjective {
	constructor(type, race, config, spriteSheet, ai) {
		super();

		this.type = type;
		this.race = race;

		this.maxHp = config.maxHp;
		this.maxMana = config.mana || 0;

		this.hp = this.maxHp;
		this.mana = this.maxMana;

		this.state = STATE_ENTITY_IDLE;
		this.activity = ACTIVITY_ENTITY_IDLE;

		this.position = new Vector2();
		this.direction = new Vector2();

        this.spriteSheet = spriteSheet;
		this.rotation = 0;

		this.victim = null;
		this.ai = ai;

		this.flags = new Set();
		this.buffTimers = new Map();
		this.process = new Process();

		this.actionHandler = new ActionHandler();
		this.physicsHandler = new PhysicsHandler();
		this.graphicsHandler = new GraphicsHandler();
	}

	update(game, time, elapsed) {
	    this.regenerate();

	    this.updateTimers(elapsed);

	    this.ai.update(this, game, time);

		this.actionHandler.update(this, game);
		this.physicsHandler.update(this);
		this.graphicsHandler.update(this);
	}

	regenerate() {
	    this.mana = range(this.mana + 1, this.maxMana);

	    return this;
    }

	updateTimers(elapsed) {
	    for (let [buffKey, time] of this.buffTimers.entries()) {
	        let newTime = Math.max(0, time - elapsed);

	        if (!newTime) {
	            this.flags.delete(buffKey);
            }

	        this.buffTimers.set(buffKey, newTime);
        }

		return this;
	}

	is(type) {
		return this.type === type;
	}

	isEnemy(enemy) {
		return this.race !== enemy.race && enemy.race !== RACE_NEUTRAL;
	}

	isVisible() {
	    return !this.flags.has(FLAG_ENTITY_INVISIBLE);
    }

	dealDamage(target, damage) {
	    if (target.flags.has(FLAG_ENTITY_IMMORTAL)) {
	        return this;
        }

		if (target.hp <= damage) {
		    this.kill(target);
		}

		return this.deal(target, -damage);
	}

	dealHeal(target, heal) {
		return this.deal(target, heal);
	}

	deal(target, modify) {
        target.modifyHealth(modify);

        this.flags.delete(FLAG_ENTITY_INVISIBLE);

	    return this;
    }

	kill(target) {
		if (target.hp) {
            target.actionHandler.clear();
            this.state = STATE_ENTITY_IDLE;
            target.emit('die');
        }

        return this;
	}

	modifyHealth(modify) {
		let hp = this.hp + modify;

		this.hp = range(hp, this.maxHp);
	}

	addBuff(target, buff, time = -1) {
	    target.flags.add(buff);
	    target.buffTimers.set(buff, time);

	    return this;
    }

    costsMana(cost) {
	    this.mana = range(this.mana - cost, this.maxMana);

	    return this;
    }

	addAction(action) {
		this.actionHandler.add(action);

		return this;
	}

	stopAction() {
		this.actionHandler.stop();

		return this;
	}
}
