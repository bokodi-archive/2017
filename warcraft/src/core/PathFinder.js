export default class PathFinder {
	constructor() {
		this.closedSet = new Set();
		this.openSet = new Set();

		this.gScore = new Map();
		this.fScore = new Map();

		this.cameFrom = new Map();

		this.map = [[]];

		this.directions = [
			[ 0, -1, 1  ], // top
			[ 1, -1, 1.4], // top-right
			[ 1,  0, 1  ], // right
			[ 1,  1, 1.4], // bottom-right
			[ 0,  1, 1  ], // bottom
			[-1,  1, 1.4], // bottom-left
			[-1,  0, 1  ], // left
			[-1, -1, 1.4], // top-left
		];
	}

	reset() {
		this.closedSet.clear();
		this.openSet.clear();

		this.gScore.clear();
		this.fScore.clear();

		this.cameFrom.clear();
	}

	init(startX, startY, goalX, goalY) {
		let startIndex = this.toIndex(startX, startY);

		this.openSet.add(startIndex);
		this.gScore.set(startIndex, 0);
		this.fScore.set(startIndex, Math.abs(startX - goalX) + Math.abs(startY - goalY));
	}

	setMap(map) {
		this.map = map;
	}

	find(startX, startY, goalX, goalY) {
		this.reset();

		this.init(startX, startY, goalX, goalY);

		let startIndex = this.toIndex(startX, startY);
		let goalIndex = this.toIndex(goalX, goalY);

		while (this.openSet.size > 0) {
			let currentIndex = this.getCurrent();
			let [currentX, currentY] = this.fromIndex(currentIndex);

			if (currentIndex === goalIndex) {
				let path = [];

				do {
					path.push(this.fromIndex(currentIndex));
					currentIndex = this.cameFrom.get(currentIndex)
				} while (currentIndex && currentIndex !== startIndex);

				return path;
			}

			this.openSet.delete(currentIndex);
			this.closedSet.add(currentIndex);

			this.neighbors(currentX, currentY, (neighbor, neighborX, neighborY, cost) => {
				let neighborIndex = this.toIndex(neighborX, neighborY);

				if (this.closedSet.has(neighborIndex)) {
					return;
				}

				if (!this.openSet.has(neighborIndex)) {
					this.openSet.add(neighborIndex);
				}

				let score = this.gScore.get(currentIndex) + cost;

				if (score >= this.gScore.get(neighborIndex)) {
					return;
				}

				this.cameFrom.set(neighborIndex, currentIndex);
				this.gScore.set(neighborIndex, score);
				this.fScore.set(neighborIndex, score + Math.abs(startX - neighborX) + Math.abs(startY - neighborY));
			});
		}

		return [];
	}

	getCurrent() {
		let lowestF;
		let selected = null;

		this.openSet.forEach((item) => {
			let itemIndex = this.toIndex(item.x, item.y);
			let fScore = this.fScore.get(itemIndex);

			if (!selected || fScore < lowestF) {
				lowestF = fScore;
				selected = item;
			}
		});

		return selected;
	}

	neighbors(x, y, callback) {
		this.directions.forEach(([dX, dY, cost]) => {
			let cX = x + dX;
			let cY = y + dY;

			if (cY in this.map && cX in this.map[cY]) {
				let cell = this.map[cY][cX];

				if (!cell) {
					callback(cell, cX, cY, cost);
				}
			}
		});
	}

	toIndex(x, y) {
		let maxY = this.columns();

		return y * maxY + x;
	}

	fromIndex(index) {
		let maxY = this.columns();
		let x = index % maxY;
		let y = Math.floor(index / maxY);

		return [x, y];
	}

	rows() {
		if (!Array.isArray(this.map)) {
			return 0;
		}

		return this.map.length;
	}

	columns() {
		if (!Array.isArray(this.map) || !Array.isArray(this.map[0])) {
			return 0;
		}

		return this.map[0].length;
	}
}
