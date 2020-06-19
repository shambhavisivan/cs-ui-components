import moment from 'moment';

/**
 * Localizes a date string.
 * @param inputDate the date to localize.
 * @param userLocale the users locale.
 */
export function formatDate(inputDate: string, userLocale: string): string {
	const dateValueFormat = 'YYYY-MM-DD';
	moment.locale(userLocale);

	let date: Date = null;
	if (inputDate) {
		date = moment(inputDate, dateValueFormat).toDate();
	}

	return date ? moment(date).format(moment.localeData().longDateFormat('L')) : '';
}
