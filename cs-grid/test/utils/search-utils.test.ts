import { ColDef } from '../../src/interfaces/cs-grid-col-def';
import { ColumnFilterCondition } from '../../src/interfaces/cs-grid-data-source-api';
import { SearchUtils } from '../../src/utils/search-utils';

describe('Search Utils', () => {
	const validFieldName1 = 'field1';
	const validHeaderName1 = 'Foo';

	const validFieldName2 = 'field2';
	const validHeaderName2 = 'Bar';

	const hiddenFieldName = 'hidden';
	const hiddenHeaderName = 'hidden';

	const invalidHeaderName1 = 'ABCD';
	const invalidHeaderName2 = 'Dave';

	const simpleQuery1 = 'query1';
	const simpleQuery2 = 'query1';

	const AndQuery = `${simpleQuery1} & ${simpleQuery2}`;
	const OrQuery = `${simpleQuery1}|${simpleQuery2}`;

	const userInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const columnDefinitions: Array<ColDef> = [
		{
			cellType: 'Text',
			header: {
				label: validHeaderName1
			},
			name: validFieldName1,
			userInfo
		},
		{
			cellType: 'Text',
			header: {
				label: validHeaderName2
			},
			name: validFieldName2,
			userInfo,
			visible: true
		},
		{
			cellType: 'Text',
			header: {
				label: hiddenHeaderName
			},
			name: hiddenFieldName,
			userInfo,
			visible: false
		}
	];

	test('trimDelimiters', () => {
		const str = ';;;\\:::FooBar;\\R;;:::\\:;';
		const afterTrim = SearchUtils.trimDelimiters(str);
		expect(afterTrim).toBe('FooBar;\\R');
	});

	test('removeEscapesAndSplitForSearchFilter - Semi Colon', () => {
		const str = `N\\;ame:F\\;oo;Age:23`;
		const expected = ['N;ame:F;oo', 'Age:23'];
		const cleansedStrings = SearchUtils.removeEscapesAndSplitForSearchFilter(str, ';');
		expect(cleansedStrings).toEqual(expected);
	});

	test('handleBackSlashes', () => {
		const str = `Name\\:Fo\\o;Ag\\\\e:23`;
		const cleansedString = SearchUtils.handleBackslashes(str);
		expect(cleansedString).toBe(`Name:Foo;Ag\\e:23`);
	});

	test('validateQualifiedSearch - Success case', () => {
		const qualifiedSearchQueries: Record<string, string> = {};
		qualifiedSearchQueries[validHeaderName1] = simpleQuery1;
		qualifiedSearchQueries[validHeaderName2] = AndQuery;

		const validSearch = SearchUtils.validateQualifiedSearch(
			columnDefinitions,
			qualifiedSearchQueries
		);
		expect(validSearch).toBe('');
	});

	test('validateQualifiedSearch - Fail hidden case', () => {
		const qualifiedSearchQueries: Record<string, string> = {};
		qualifiedSearchQueries[validHeaderName1] = simpleQuery1;
		qualifiedSearchQueries[hiddenFieldName] = OrQuery;

		const validSearch = SearchUtils.validateQualifiedSearch(
			columnDefinitions,
			qualifiedSearchQueries
		);
		expect(validSearch).toBe(`The column ${hiddenFieldName} does not exist or is not visible.`);
	});

	test('validateQualifiedSearch - Fail invalid header names case', () => {
		const qualifiedSearchQueries: Record<string, string> = {};
		qualifiedSearchQueries[invalidHeaderName1] = simpleQuery1;
		qualifiedSearchQueries[invalidHeaderName2] = AndQuery;

		const validSearch = SearchUtils.validateQualifiedSearch(
			columnDefinitions,
			qualifiedSearchQueries
		);
		expect(validSearch).toBe(
			`The columns ${invalidHeaderName1} and ${invalidHeaderName2} do not exist or are not visible.`
		);
	});

	test('validateQualifiedSearch - test inherited properties are ignored.', () => {
		const qualifiedSearchQueries: Record<string, string> = Object.create({
			invalidHeaderName1: 'inherited'
		});

		const validSearch = SearchUtils.validateQualifiedSearch(
			columnDefinitions,
			qualifiedSearchQueries
		);
		expect(validSearch).toBe('');
	});

	test('convertQueriesToColumnFilters - Success Simple query and OR query case', () => {
		const qualifiedSearchQueries: Record<string, string> = {};
		qualifiedSearchQueries[validHeaderName1] = simpleQuery1;
		qualifiedSearchQueries[validHeaderName2] = OrQuery;

		const expectedColumnFilter: Map<string, Array<ColumnFilterCondition>> = new Map();

		expectedColumnFilter.set(validFieldName1, [
			{
				condition1: { filterText: simpleQuery1, type: 'contains' },
				condition2: undefined,
				operator: undefined
			}
		]);

		expectedColumnFilter.set(validFieldName2, [
			{
				condition1: { filterText: simpleQuery1, type: 'contains' },
				condition2: { filterText: simpleQuery2, type: 'contains' },
				operator: 'OR'
			}
		]);

		const columnFilters = SearchUtils.convertQueriesToColumnFilters(
			columnDefinitions,
			qualifiedSearchQueries
		);

		expect(columnFilters).toEqual(expectedColumnFilter);
	});

	test('convertQueriesToColumnFilters - Success AND query case', () => {
		const qualifiedSearchQueries: Record<string, string> = {};
		qualifiedSearchQueries[validHeaderName1] = AndQuery;

		const expectedColumnFilter: Map<string, Array<ColumnFilterCondition>> = new Map();

		expectedColumnFilter.set(validFieldName1, [
			{
				condition1: { filterText: simpleQuery1, type: 'contains' },
				condition2: { filterText: simpleQuery2, type: 'contains' },
				operator: 'AND'
			}
		]);

		const columnFilters = SearchUtils.convertQueriesToColumnFilters(
			columnDefinitions,
			qualifiedSearchQueries
		);

		expect(columnFilters).toEqual(expectedColumnFilter);
	});

	test('convertQueriesToColumnFilters - test inherited properties are ignored.', () => {
		const qualifiedSearchQueries: Record<string, string> = Object.create({
			invalidHeaderName1: 'inherited'
		});

		const columnFilters = SearchUtils.convertQueriesToColumnFilters(
			columnDefinitions,
			qualifiedSearchQueries
		);

		expect(columnFilters).toEqual(new Map());
	});
});
