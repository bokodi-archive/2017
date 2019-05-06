import Vector2 from "../core/Vector2.js";

export default class GraphicsHandler {
    constructor() {
        this.defaultDirection = new Vector2(0, -1);
    }

	update(entity) {
		entity.spriteSheet.setFrameset(entity.state);

		entity.spriteSheet.animate();

		entity.rotation = this.getRotation(entity);
	}

	getRotation(entity) {
        if (entity.direction.getLength()) {
            return entity.direction.angleTo(this.defaultDirection);
        }

        if (entity.victim) {
            return entity.victim.position.clone().sub(entity.position).angleTo(this.defaultDirection);
        }

        return this.defaultDirection;
    }
}
