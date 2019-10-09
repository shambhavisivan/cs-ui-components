import { CellData } from '../interfaces/cs-grid-base-interfaces';

export function CSGridLookupComparator<
	T extends CellData<
		Array<Record<string, number | string | boolean>> | Record<string, number | string | boolean>
	>
>(a: T, b: T, displayColumn: string) {
	if (a === undefined || a === null) {
		if (b === undefined || b === null) {
			return 0;
		}

		return -1;
	}
	if (b === undefined || b === null) {
		return 1;
	}

	let aValue = a.cellValue;
	let bValue = b.cellValue;

	if (Array.isArray(aValue)) {
		aValue = aValue[0];
	}

	if (Array.isArray(bValue)) {
		bValue = bValue[0];
	}

	let aDisplayValue = aValue ? aValue[displayColumn] : aValue;
	let bDisplayValue = bValue ? bValue[displayColumn] : bValue;

	if (aDisplayValue === undefined || aDisplayValue === null) {
		if (bDisplayValue === undefined || bDisplayValue === null) {
			return 0;
		}

		return -1;
	}
	if (bDisplayValue === undefined || bDisplayValue === null) {
		return 1;
	}

	if (typeof aDisplayValue === 'string' || aDisplayValue instanceof String) {
		aDisplayValue = aDisplayValue.toUpperCase();
	}

	if (typeof bDisplayValue === 'string' || bDisplayValue instanceof String) {
		bDisplayValue = bDisplayValue.toUpperCase();
	}

	return aDisplayValue > bDisplayValue ? 1 : aDisplayValue < bDisplayValue ? -1 : 0;
}
