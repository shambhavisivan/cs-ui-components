import { getIntl } from '../../src/polyfill/cs-grid-intl';

describe('CS Grid Intl', () => {
	test('Compare lookup cells - greater than case', () => {
		const exampleNumberFormat = () => {
			return {
				formatToParts: (num: number) => {
					return [{ type: 'currency', value: `${num}` }];
				}
			};
		};

		const exampleIntl: any = {
			NumberFormat: exampleNumberFormat
		};

		global.Intl = exampleIntl;

		const intl = getIntl('userLocale');
		expect(intl).toBe(exampleIntl);
	});

	test('Intl not defined case.', () => {
		global.Intl = undefined;
		const intl = getIntl('userLocale');
		expect(intl).toBeUndefined();
	});
});
