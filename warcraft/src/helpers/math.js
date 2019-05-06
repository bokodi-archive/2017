export function degToRad(deg) {
	return deg * Math.PI / 180;
}

export function radToDeg(rad) {
	return rad * 180 / Math.PI;
}

export function range(value, min, max) {
	if (max === undefined) {
		max = min;
		min = 0;
	}

	return Math.max(min, Math.min(max, value));
}
