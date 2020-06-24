import { CellData } from '../interfaces/cs-grid-base-interfaces';
import { UserInfo } from '../interfaces/user-info';
import { formatDecimalNumber } from './cs-grid-number-formatting-helper';

export function CSGridNumberComparator(
	a: CellData<number | string>,
	b: CellData<number | string>,
	userInfo: UserInfo
) {
	let aValue: number | string = a.cellValue;
	let bValue: number | string = b.cellValue;

	if (aValue === undefined || aValue === null || aValue === '') {
		if (bValue === undefined || bValue === null || bValue === '') {
			return 0;
		}

		return -1;
	}
	if (bValue === undefined || bValue === null || bValue === '') {
		return 1;
	}

	if (typeof aValue === 'string' || (aValue as any) instanceof String) {
		aValue = formatDecimalNumber(aValue, userInfo);
	}

	if (typeof bValue === 'string' || (bValue as any) instanceof String) {
		bValue = formatDecimalNumber(bValue, userInfo);
	}

	return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
}
