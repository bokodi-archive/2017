import Vector2 from "./Vector2.js";

export default class Grid {
	constructor(columns, rows) {
		this.set(columns, rows);
	}

	set(columns, rows) {
		this.columns = columns;
		this.rows = rows;

		return this;
	}

	indexToCell(index) {
		let row = Math.floor(index / this.columns);
		let column = index - row * this.columns;

		return new Vector2(column, row);
	}

	eachCell(callback) {
		let index = 0;

		for (let y = 0; y < this.rows; ++y) {
			for (let x = 0; x < this.columns; ++x) {
				callback(y, x, index++);
			}
		}

		return this;
	}

	toCells() {
		let cells = [];

		this.eachCell((y, x) => cells.push(new Vector2(x, y)));

		return cells;
	}

	toVector() {
		return new Vector2(this.columns, this.rows);
	}
}
