import createDynamicLocale from '@cloudsense/react-datepicker-dynamiclocale';
import moment from 'moment';
import { DateLocale } from '../interfaces/user-info';

/**
 * Localizes a date string.
 * @param inputDate the date to localize.
 * @param userLocale the users locale.
 * @param type the type of date.
 */
export function formatDate(
	inputDate: string,
	userLocale: string,
	type: 'Date' | 'DateTime'
): string {
	moment.locale(userLocale);

	let date: Date = null;
	if (inputDate) {
		const format = type === 'Date' ? dateFormat : dateTimeFormat;
		date = moment(inputDate, format).toDate();
	}

	return formatLocale(date, type);
}

/**
 * Formats a Date object into a localised date string.
 */
export function formatLocale(value: Date, type: 'Date' | 'DateTime'): string {
	let localeFormat = moment.localeData().longDateFormat('L');
	if (type === 'DateTime') {
		localeFormat += ` ${timeFormat}`;
	}

	return value ? moment(value).format(localeFormat) : '';
}

export function createLocale(dateLocale?: DateLocale): any {
	const dates = dateLocale || defaultDateLocale;

	return createDynamicLocale(
		{
			short: dates.daysOfWeek
		},
		{
			wide: dates.monthsOfYear
		},
		dates.firstDayOfWeek,
		dates.daysInFirstWeek
	);
}

export const dateFormat: string = 'YYYY-MM-DD';
export const timeFormat: string = 'HH:mm';
export const dateTimeFormat: string = `${dateFormat} ${timeFormat}`;

export const defaultDateLocale: DateLocale = {
	daysInFirstWeek: 7,
	daysOfWeek: ['Sun', 'Mon', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat'],
	firstDayOfWeek: 0,
	monthsOfYear: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]
};
