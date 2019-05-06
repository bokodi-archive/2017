import Vector2 from "./Vector2.js";
import Grid from "./Grid.js";

export default class Screen {
	constructor(maxColumns, maxRows, visibleColumns, visibleRows, columnSize, rowSize = columnSize) {
		this.grid = new Grid(maxColumns, maxRows);
		this.visibleGrid = new Grid(visibleColumns, visibleRows);

		this.columnSize = columnSize;
		this.rowSize = rowSize;

		this.offset = new Vector2();

		this.scrollSpeed = 1;
	}

	cellSize() {
		return new Vector2(this.columnSize, this.rowSize);
	}

	offsetSize() {
		return this.cellSize().multiply(this.offset);
	}

	visibleSize() {
		return this.visibleGrid.toVector().multiply(this.cellSize());
	}

	getMax() {
		return new Vector2(this.grid.columns - this.visibleGrid.columns, this.grid.rows - this.visibleGrid.rows);
	}

	getMin() {
		return new Vector2();
	}

	fix() {
		this.offset.clamp(this.getMin(), this.getMax());

		return this;
	}

	speedVector() {
		return new Vector2(this.scrollSpeed, this.scrollSpeed);
	}

	scrollTo(vector2) {
		this.offset.copy(vector2);

		return this.fix();
	}

	scrollBy(vector2) {
		this.offset.add(vector2);

		return this.fix();
	}

	scrollX(speed = this.scrollSpeed) {
		this.offset.setX(this.offset.x + speed);

		return this.fix();
	}

	scrollY(speed = this.scrollSpeed) {
		this.offset.setY(this.offset.y + speed);

		return this.fix();
	}

	resize(size) {
        let visibleSizeOld = this.visibleGrid.toVector();

        let offsetX = Math.round((size.x - visibleSizeOld.x) / 2);
        let offsetY = Math.round((size.y - visibleSizeOld.y) / 2);

        let scrollTo = this.offset.clone().subScalarX(offsetX).subScalarY(offsetY);

        this.visibleGrid.set(size.x, size.y);

		this.scrollTo(scrollTo);

		return this;
	}
}
