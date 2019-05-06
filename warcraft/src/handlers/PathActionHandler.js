export default class PathActionHandler {
	constructor(pathFollower) {
		this.pathFollower = pathFollower;
		this.target = null;
	}

	goNearEntity(entity, targetEntity, game, range) {
		this.checkEntityTarget(entity, targetEntity, game, range);

		return this.getDirection(entity.position);
	}

	goNearTile(entity, target, game) {
		this.checkTileTarget(entity, target, game);

		return this.getDirection(entity.position);
	}

	goTo(entity, target, game) {
		this.checkCell(entity, target, game);

		return this.getDirection(entity.position);
	}

	finish(entity) {
        return this.getDirection(entity.position);
	}

	stop() {
		this.pathFollower.clearPath();

		return this;
	}

	reset() {
		this.target = null;

		return this;
	}

	isFinished() {
	    return !this.pathFollower.hasTarget();
    }

	isArrived() {
		return this.isFinished(); // todo
	}

	hasConcurrency(game) {
	    return this.pathFollower.target && game.find(this.pathFollower.target);
    }

	getDirection(position) {
		return this.pathFollower.update(position).getDirection();
	}

	updateNearEntityPath(entity, targetEntity, game, range = 1) {
		let walkableNeighbors = game.entityWalkableNeighbors(targetEntity, range);
		let from = game.entityPositionCell(entity);
		let to = game.nearestCell(from, walkableNeighbors);

		if (!to || game.entitiesDistance(entity, targetEntity) <= range) {
		    to = from;
        }

		this.updatePath(entity, to, game);
	}

	updateNearTilePath(entity, target, game) {
		let walkableNeighbors = game.walkableNeighbors(target);
		let from = game.entityPositionCell(entity);
		let to = game.nearestCell(from, walkableNeighbors) || from;

		this.updatePath(entity, to, game);
	}

	updatePath(entity, to, game) {
		this.pathFollower.reset();

		let from = game.entityPositionCell(entity);
		let path = game.getPathTo(from, to);

		this.pathFollower.setPath(path);
	}

	checkEntityTarget(entity, targetEntity, game, range) {
		let targetCell = game.entityPositionCell(targetEntity);

		if (this.newTarget(targetCell) || this.hasConcurrency(game)) {
			this.updateNearEntityPath(entity, targetEntity, game, range);
			this.target = targetCell;
		}
	}

	checkTileTarget(entity, target, game) {
		if (this.newTarget(target) || this.hasConcurrency(game)) {
			this.updateNearTilePath(entity, target, game);
			this.target = target;
		}
	}

	checkCell(entity, target, game) {
		if (this.newTarget(target) || this.hasConcurrency(game)) {
			this.updatePath(entity, target, game);
			this.target = target;
		}
	}

	newTarget(cell) {
		return !this.target || !this.target.isEqualTo(cell);
	}
}
