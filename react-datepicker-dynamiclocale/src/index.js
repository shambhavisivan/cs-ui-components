const formatDistance = require("./_lib/formatDistance");
const formatRelative = require("./_lib/formatRelative");
const { localize, monthValues, dayValues } = require("./_lib/localize");
const match = require("./_lib/match");
const formatLong = require("./_lib/formatLong");
const buildLocalizeFn = require("./_lib/buildLocalizeFn");

/**
 * Create date-fns locale with calendar localisations provided dynamically. Intended to work with react-datepicker,
 * but can be extended with more overrides to work for any purpose. (Note: creating an entire locale object
 * from scratch is very fiddly, so we're using the en-US locale as the basis of our locale.)
 *
 * @param days Names of weekdays, starting with Sunday. react-datepicker normally uses the `short` names
 * @param months Names of months, starting with January. react-datepicker normally uses the `wide` names
 * @param firstDayOfWeek Index of day the week officially starts with, 0 for Sunday, 1 for Monday, etc.
 * @param minimumDaysInFirstWeek Number of days of a week that need to overlap into January for the week to be counted as week 1 of the new year. For full
 * explanation see [here])https://en.wikipedia.org/wiki/Week#Week_numbering). (Note: the ISO default used almost everywhere is 4, the US is of course using 1.)
 */
module.exports = function(days, months, firstDayOfWeek, minimumDaysInFirstWeek) {
	const localizeCopy = Object.assign([], localize, {
		day: buildLocalizeFn({
			values: Object.assign({}, dayValues, days), // overwrite default day settings with provided ones
			defaultWidth: "wide"
		}),
		month: buildLocalizeFn({
			values: Object.assign({}, monthValues, months), // overwrite default month settings with provided ones
			defaultWidth: "wide"
		})
	});
	return {
		formatDistance: formatDistance,
		formatLong: formatLong,
		formatRelative: formatRelative,
		localize: localizeCopy,
		match: match,
		options: {
			weekStartsOn: firstDayOfWeek,
			firstWeekContainsDate: minimumDaysInFirstWeek
		}
	};
};
