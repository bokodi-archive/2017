import {range} from "../helpers/math.js";

export default class Process {
    constructor(max, start = 0) {
        this.renew(max, start);
    }

    setCurrent(value) {
        this.current = range(value, this.max);

        return this;
    }

    renew(max, start = 0) {
        this.max = max;

        return this.setCurrent(start);
    }

    proceed(value) {
        return this.setCurrent(this.current + value);
    }

    isFinished() {
        return this.current === this.max || !this.max;
    }

    reset() {
        return this.setCurrent(0);
    }

    toPercent() {
        return this.isFinished() ? 100 : Math.round(this.current / this.max * 100);
    }
}
