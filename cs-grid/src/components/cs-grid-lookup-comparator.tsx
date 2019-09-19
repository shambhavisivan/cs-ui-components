import { CellData } from '../interfaces/cs-grid-base-interfaces';

export function CSGridLookupComparator(a: CellData<any>, b: CellData<any>, displayColumn: string) {
	let aValue = a.cellValue;
	let bValue = b.cellValue;

	if (Array.isArray(aValue) && Array.isArray(bValue)) {
		aValue = aValue[0];
		bValue = bValue[0];
	}

	aValue = aValue ? aValue[displayColumn] : aValue;
	bValue = bValue ? bValue[displayColumn] : bValue;

	if (aValue === undefined || aValue == null) {
		if (bValue === undefined || bValue == null) {
			return 0;
		}

		return -1;
	}
	if (bValue === undefined || bValue == null) {
		return 1;
	}

	if (typeof aValue === 'string') {
		aValue = aValue.toUpperCase();
		bValue = bValue.toUpperCase();
	}

	return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
}
