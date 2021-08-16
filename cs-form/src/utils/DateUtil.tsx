import createDynamicLocale from '@cloudsense/react-datepicker-dynamiclocale';
import { DateFieldLocale } from '../fields/DateField';

export function dateToNumber(date: Date | null | [Date, Date]) {
	return date ? date.valueOf() : null;
}

export function numberToDate(input: number | null) {
	return input ? new Date(input) : null;
}

/**
 * Create date-fns locale with calendar localizations provided dynamically.
 * Had to be defined to return "any" because the type bindings for date
 * picker are outdated and wrong.
 * @param dateLocale the locale info needed.
 */
export function createLocale(dateLocale: DateFieldLocale): any {
	return createDynamicLocale(
		{
			short: dateLocale.daysOfWeek
		},
		{
			wide: dateLocale.monthsOfYear
		},
		dateLocale.firstDayOfWeek,
		dateLocale.daysInFirstWeek
	);
}
