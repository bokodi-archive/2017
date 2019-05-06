export function arrayRemove(array, element) {
	let index = array.indexOf(element);

	if (index !== -1) {
		array.splice(index, 1);
	}
}

export function arrayEmpty(array) {
	array.length = 0;
}

export function arrayIsEmpty(array) {
	return array.length > 0;
}

export function arrayWrap(value) {
	return Array.isArray(value) ? value : [value];
}

export function arrayLast(array) {
	return array[array.length - 1];
}

export function arrayFirst(array) {
	return array[0];
}

export function arrayNext(array, value, isFinite = false) {
	let index = array.indexOf(value);

	if (index === -1) {
		return array[0];
	}

	++index;

	if (!isFinite && index === array.length) {
		return array[0];
	}

	return array[index];
}

export function arrayRange(min, max) {
	let array = [];

	for (let i = 0; min + i <= max;) {
		array.push(min + i);
		++i;
	}

	return array;
}