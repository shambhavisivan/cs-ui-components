import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridLookupComparator } from '../../src/utils/cs-grid-lookup-comparator';

describe('CS Grid Default Comparator', () => {
	let cellData1: CellData<Record<string, string>>;
	let cellData2: CellData<Record<string, string>>;
	const theDisplayColumn = 'displayColumnName';

	beforeEach(() => {
		cellData1 = {
			cellValue: { otherColumn: 'AAA' },
			errorMessage: 'Bar'
		};
		cellData2 = {
			cellValue: { otherColumn: 'ZZZ' },
			errorMessage: 'Bar'
		};
	});

	test('Compare lookup cells - greater than case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Foo';
		cellData2.cellValue[theDisplayColumn] = 'Bar';

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(1);
	});

	test('Compare lookup cells - less than case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Dave';
		cellData2.cellValue[theDisplayColumn] = 'Eave';

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(-1);
	});

	test('Compare lookup cells - equal case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Dave';
		cellData2.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(0);
	});

	test('Compare multi select lookup cells - greater than case', () => {
		const multiSelectCellData1: CellData<Array<Record<string, number>>> = {
			cellValue: [{ otherColumn: -1 }, {}],
			errorMessage: 'Bar'
		};
		const multiSelectCellData2: CellData<Array<Record<string, number>>> = {
			cellValue: [{ otherColumn: 1 }, {}, {}, {}],
			errorMessage: 'Bar'
		};

		multiSelectCellData1.cellValue[0][theDisplayColumn] = 2;
		multiSelectCellData2.cellValue[0][theDisplayColumn] = -3;

		const check: number = CSGridLookupComparator(
			multiSelectCellData1,
			multiSelectCellData2,
			theDisplayColumn
		);
		expect(check).toBe(1);
	});

	test('Compare lookup cells - first display column undefined case', () => {
		cellData1.cellValue[theDisplayColumn] = undefined;
		cellData2.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(-1);
	});

	test('Compare lookup cells - second display column undefined case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Dave';
		cellData2.cellValue[theDisplayColumn] = undefined;

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(1);
	});

	test('Compare lookup cells - both display columns are undefined case', () => {
		cellData1.cellValue[theDisplayColumn] = null;
		cellData2.cellValue[theDisplayColumn] = null;

		const check: number = CSGridLookupComparator(cellData1, cellData2, theDisplayColumn);
		expect(check).toBe(0);
	});

	test('Compare lookup cells - first cellValue undefined case', () => {
		cellData2.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(
			{ cellValue: undefined },
			cellData2,
			theDisplayColumn
		);
		expect(check).toBe(-1);
	});

	test('Compare lookup cells - second cellValue undefined case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(
			cellData1,
			{ cellValue: undefined },
			theDisplayColumn
		);
		expect(check).toBe(1);
	});

	test('Compare lookup cells - both cellValues null case', () => {
		const check: number = CSGridLookupComparator(
			{ cellValue: null },
			{ cellValue: null },
			theDisplayColumn
		);
		expect(check).toBe(0);
	});

	test('Compare lookup cells - first cellData undefined case', () => {
		cellData2.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(undefined, cellData2, theDisplayColumn);
		expect(check).toBe(-1);
	});

	test('Compare lookup cells - second cellData undefined case', () => {
		cellData1.cellValue[theDisplayColumn] = 'Dave';

		const check: number = CSGridLookupComparator(cellData1, null, theDisplayColumn);
		expect(check).toBe(1);
	});

	test('Compare lookup cells - both cellData are undefined case', () => {
		const check: number = CSGridLookupComparator(null, undefined, theDisplayColumn);
		expect(check).toBe(0);
	});
});
