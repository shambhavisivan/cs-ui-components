import { CellData } from '../interfaces/cs-grid-base-interfaces';

export function CSGridDefaultComparator<T>(a: CellData<T>, b: CellData<T>) {
	let aValue: T = a?.cellValue;
	let bValue: T = b?.cellValue;

	if (Array.isArray(aValue) && Array.isArray(bValue)) {
		aValue = aValue[0];
		bValue = bValue[0];
	}

	if (aValue === undefined || aValue === null) {
		if (bValue === undefined || bValue === null) {
			return 0;
		}

		return -1;
	}
	if (bValue === undefined || bValue === null) {
		return 1;
	}

	if (typeof aValue === 'string' || aValue instanceof String) {
		aValue = aValue.toUpperCase() as unknown as T;
	}

	if (typeof bValue === 'string' || bValue instanceof String) {
		bValue = bValue.toUpperCase() as unknown as T;
	}

	return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
}
