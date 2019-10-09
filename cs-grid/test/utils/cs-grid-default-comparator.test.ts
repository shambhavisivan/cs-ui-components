import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridDefaultComparator } from '../../src/utils/cs-grid-default-comparator';

describe('CS Grid Default Comparator', () => {
	test('Compare text cells - same string case', () => {
		const cellValue = 'Foo';
		const cellData1: CellData<string> = {
			cellValue,
			errorMessage: 'Bar'
		};
		const cellData2: CellData<string> = {
			cellValue,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(0);
	});

	test('Compare text cells - second string is greater case', () => {
		const cellData1: CellData<string> = {
			cellValue: 'abc',
			errorMessage: 'Bar'
		};
		const cellData2: CellData<string> = {
			cellValue: 'xyz',
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(-1);
	});

	test('Compare multi select picklist cells - same arrays case', () => {
		const cellValue = ['Foo', 'bar'];
		const cellData1: CellData<Array<string>> = {
			cellValue,
			errorMessage: 'Bar'
		};
		const cellData2: CellData<Array<string>> = {
			cellValue,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(0);
	});

	test('Compare number cells - greater than case', () => {
		const cellData1: CellData<number> = {
			cellValue: 2,
			errorMessage: 'Bar'
		};
		const cellData2: CellData<number> = {
			cellValue: -1,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(1);
	});

	test('Compare number cells with undefined first value', () => {
		const cellData1: CellData<number> = {
			cellValue: undefined,
			errorMessage: 'Bar'
		};
		const cellData2: CellData<number> = {
			cellValue: -1,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(-1);
	});

	test('Compare string cells with null second value', () => {
		const cellData1: CellData<string> = {
			cellValue: '',
			errorMessage: 'Bar'
		};
		const cellData2: CellData<string> = {
			cellValue: null,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(1);
	});

	test('Compare string cells with first is null and the second is undefined', () => {
		const cellData1: CellData<string> = {
			cellValue: null,
			errorMessage: 'Bar'
		};
		const cellData2: CellData<string> = {
			cellValue: undefined,
			errorMessage: 'Bar'
		};

		const check: number = CSGridDefaultComparator(cellData1, cellData2);
		expect(check).toBe(0);
	});
});
