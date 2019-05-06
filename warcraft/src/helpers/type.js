export const TYPE_OBJECT = 'object';
export const TYPE_FUNCTION = 'function';
export const TYPE_ARRAY = 'array';
export const TYPE_STRING = 'string';
export const TYPE_BOOLEAN = 'boolean';
export const TYPE_NUMBER = 'number';
export const TYPE_UNDEFINED = 'undefined';
export const TYPE_NULL = 'null';

export function getType(testValue) {
	let stringValue = Object.prototype.toString.call(testValue);
	let [, type] = stringValue.match(/\s([a-zA-Z]+)/);

	return type ? type.toLowerCase() : null;
}

export function isObject(testValue) {
	return getType(testValue) === TYPE_OBJECT;
}

export function isNumber(testValue) {
	return getType(testValue) === TYPE_NUMBER;
}
