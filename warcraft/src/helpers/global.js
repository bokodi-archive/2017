import { getType, isObject, TYPE_ARRAY, TYPE_OBJECT, TYPE_FUNCTION } from './type.js';
import { arrayWrap, arrayIsEmpty } from './array.js';

export function assert(bool, error) {
	if (!bool) {
		throw new Error(error);
	}
}

export function use(target, data) {
	if (!target) {
		throw new Error('Invalid target supplied for use');
	}

	if (!isObject(data)) {
		throw new Error('Invalid data type supplied for use');
	}

	Object.keys(data).forEach((dataKey) => {
		let dataValue = data[dataKey];
		let targetValue = target[dataKey];

		switch (getType(targetValue)) {
			case TYPE_FUNCTION:
				let dataValueArray = arrayWrap(dataValue);

				if (arrayIsEmpty(dataValueArray)) {
					targetValue.call(target);
				}

				dataValueArray.forEach((item) => {
					targetValue.apply(target, arrayWrap(item));
				});

				break;

			case TYPE_ARRAY:
				targetValue.push(...arrayWrap(dataValue));

				break;

			case TYPE_OBJECT:
				use(targetValue, dataValue);

				break;

			default:
				target[dataKey] = dataValue;

				break;
		}
	});

	return target;
}
