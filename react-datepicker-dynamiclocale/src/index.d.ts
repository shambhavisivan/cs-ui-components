export interface Values {
	narrow: Array<string>;
	short: Array<string>;
	abbreviated: Array<string>;
	wide: Array<string>;
}
/**
 * Create date-fns locale with calendar localisations provided dynamically. Intended to work with react-datepicker,
 * but can be extended with more overrides to work for any purpose. (Note: creating an entire locale object
 * from scratch is very fiddly, so we're using the en-US locale as the basis of our locale.)
 *
 * @example <caption>Example of initialising date picker in TS with dynamic locale</caption>
 *	render() {
 * 	const germanLocale = createDynamicLocale(
 *      // names of days
 *		{
 *			short: ["Sun", "Mon", "Die", "Mit", "Don", "Fre", "Sam"]
 *		},
 *      // names of months
 *		{
 *			wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
 *		},
 *		1, // first day of the week (numbering starts with Sunday, so 1 means the week starts on Monday)
 *		4  // minimum number of days in first week of the year
 *	);
 *  // the weird casting to unknown and then string is sometimes required because the type definitions of DatePicker don't match the
 *  // implementation. In reality DatePicker expects either a string or a locale object.
 *	return <DatePicker locale={germanLocale as unknown as string}/>;
 *
 * @param days Names of weekdays, starting with Sunday. react-datepicker normally uses the `short` names
 * @param months Names of months, starting with January. react-datepicker normally uses the `wide` names
 * @param firstDayOfWeek Index of day the week officially starts with, 0 for Sunday, 1 for Monday, etc.
 * @param minimumDaysInFirstWeek Number of days of a week that need to overlap into January for the week to be counted as week 1 of the new year. For full
 * explanation see [here])https://en.wikipedia.org/wiki/Week#Week_numbering). (Note: the ISO default used almost everywhere is 4, the US is of course using 1.)
 */
export = (days: Partial<Values>, months: Partial<Values>, firstDayOfWeek: number, minimumDaysInFirstWeek: number) => object;
//# sourceMappingURL=index.d.ts.map
