import { CSDataTableRowInterface } from '@cloudsense/cs-ui-components';
import { formatLookupValue } from '../../src/utils/cs-grid-lookup-formatting-helper';

describe('CS Grid Lookup Formatting-helper Comparator', () => {
	test('format single select lookup value', () => {
		const expectedResult = 'Foo';

		const value = {
			data: { text1: 'Foo', 'text2.name.thirdPart': '123456' },
			key: 'Foo'
		};
		const displayColumn = 'text1';

		const result = formatLookupValue(value, displayColumn);

		console.log(result);

		expect(result).toEqual(expectedResult);
	});

	test('format single select lookup value with no value', () => {
		const expectedResult = '';
		const value: CSDataTableRowInterface = undefined;
		const displayColumn = 'text1';

		const result = formatLookupValue(value, displayColumn);

		expect(result).toEqual(expectedResult);
	});

	test('format multi select lookup value', () => {
		const expectedResult = 'Foo, Bar';
		const value = [
			{
				data: { text1: 'Foo', 'text2.name.thirdPart': '123456' },
				key: 'Foo'
			},
			{
				data: { text1: 'Bar', 'text2.name.thirdPart': '123456' },
				key: 'Bar'
			}
		];
		const displayColumn = 'text1';

		const result = formatLookupValue(value, displayColumn);

		expect(result).toEqual(expectedResult);
	});

	test('format multi select lookup value with empty array', () => {
		const expectedResult = '';
		const value: Array<CSDataTableRowInterface> = [];
		const displayColumn = 'text1';

		const result = formatLookupValue(value, displayColumn);

		expect(result).toEqual(expectedResult);
	});
});
