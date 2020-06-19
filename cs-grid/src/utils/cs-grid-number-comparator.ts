import { CellData } from '../interfaces/cs-grid-base-interfaces';
import { formatDecimalNumber } from './cs-grid-number-formatting-helper';

export function CSGridNumberComparator(
	a: CellData<number | string>,
	b: CellData<number | string>,
	decimalSeparator: string
) {
	let aValue: number | string = a.cellValue;
	let bValue: number | string = b.cellValue;

	if (aValue === undefined || aValue === null) {
		if (bValue === undefined || bValue === null) {
			return 0;
		}

		return -1;
	}
	if (bValue === undefined || bValue === null) {
		return 1;
	}

	if (typeof aValue === 'string' || (aValue as any) instanceof String) {
		aValue = formatDecimalNumber(aValue, decimalSeparator);
	}

	if (typeof bValue === 'string' || (bValue as any) instanceof String) {
		bValue = formatDecimalNumber(bValue, decimalSeparator);
	}

	return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
}
