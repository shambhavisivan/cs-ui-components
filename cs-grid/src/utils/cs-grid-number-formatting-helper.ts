import { getIntl } from '../polyfill/cs-grid-intl';

/**
 * Creates a number from a localised string.
 * @param num - a localised string or a number.
 * @param decimalSeparator - the character used to indicate the start of the decimal part of the number.
 */
export function formatDecimalNumber(num: string | number, decimalSeparator: string): number {
	if (num === '') {
		return undefined;
	}

	if (typeof num !== 'string') {
		return num;
	}

	let replaced: string;
	if (decimalSeparator === ',') {
		// remove periods;
		replaced = num.replace(/[\s.]+/g, '');
		// replace remaining comma with a period;
		replaced = replaced.replace(/\,/, '.');
	} else {
		replaced = num.replace(/[\s,]+/g, '');
	}

	return parseFloat(replaced);
}

export function getSeparator(locale: string, separatorType: string): string {
	const numberWithGroupAndDecimalSeparator = 1000.1;

	return getIntl(locale)
		.NumberFormat(locale)
		.formatToParts(numberWithGroupAndDecimalSeparator)
		.find(part => part.type === separatorType).value;
}
