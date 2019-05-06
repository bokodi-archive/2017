export default class PhysicsHandler {
	update(entity) {
		let speed = 1;
		let velocity = entity.direction.multiplyScalar(speed);

		if (velocity.getLength()) {
			entity.position.add(velocity).round();
		}
	}
}
