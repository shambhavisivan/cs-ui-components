import { UserInfo } from '../interfaces/user-info';
import { getIntl } from '../polyfill/cs-grid-intl';

/**
 * Creates a number from a localised string.
 * @param num - a localised string or a number.
 * @param decimalSeparator - the character used to indicate the start of the decimal part of the number.
 */
export function formatDecimalNumber(num: string | number, userInfo: UserInfo): number {
	if (num === '') {
		return undefined;
	}

	if (typeof num !== 'string') {
		return num;
	}

	const decimalSeparator = getSeparator(userInfo.userLocale, 'decimal');
	const currencySymbol = getCurrencySymbol(userInfo.userLocale, userInfo.currencyCode);

	let replaced = num.replace(new RegExp(`[${currencySymbol}]`, 'g'), '').trim();
	if (decimalSeparator === ',') {
		// remove periods;
		replaced = replaced.replace(/[\s.]+/g, '');
		// replace remaining comma with a period;
		replaced = replaced.replace(/\,/, '.');
	} else {
		replaced = replaced.replace(/[\s,]+/g, '');
	}

	return parseFloat(replaced);
}

/**
 * Returns the localised separator, decimal or thousands.
 */
export function getSeparator(locale: string, separatorType: string): string {
	const numberWithGroupAndDecimalSeparator = 1000.1;

	return getIntl(locale)
		.NumberFormat(locale)
		.formatToParts(numberWithGroupAndDecimalSeparator)
		.find((part) => part.type === separatorType).value;
}

/**
 * Returns the localised currency symbol.
 */
export function getCurrencySymbol(locale: string, currency: string): string {
	const formatter = getIntl(locale).NumberFormat(locale, {
		currency,
		style: 'currency'
	});

	return formatter.formatToParts(1).find((part) => part.type === 'currency').value;
}
