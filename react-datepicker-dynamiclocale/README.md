Helper module for injecting arbitrary date localisation strings into react-datepicker

### Table of Contents

-   [createDynamicLocale()][1]
    -   [Parameters][2]
    -   [Examples][3]

## createDynamicLocale(days,months,firstDayOfWeek,minimumDaysInFirstWeek)

Create date-fns locale with calendar localisations provided dynamically. Intended to work with react-datepicker,
but can be extended with more overrides to work for any purpose. (Note: creating an entire locale object
from scratch is very fiddly, so we're using the en-US locale as the basis of our locale.)

### Parameters

-   `days`  Names of weekdays, starting with Sunday. react-datepicker normally uses the `short` names
-   `months`  Names of months, starting with January. react-datepicker normally uses the `wide` names
-   `firstDayOfWeek`  Index of day the week officially starts with, 0 for Sunday, 1 for Monday, etc.
-   `minimumDaysInFirstWeek`  Number of days of a week that need to overlap into January for the week to be counted as week 1 of the new year. For full
    explanation see [here]([4]). (Note: the ISO default used almost everywhere is 4, the US is of course using 1.)

### Examples

#### Example of initialising date picker in TS with dynamic locale
    render() {
        const germanLocale = createDynamicLocale(
        // names of days
        {
             short: ["Sun", "Mon", "Die", "Mit", "Don", "Fre", "Sam"]
        },
        // names of months
        {
             wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        1, // first day of the week (numbering starts with Sunday, so 1 means the week starts on Monday)
        4  // minimum number of days in first week of the year
    );
    
	// the weird casting to unknown and then string is sometimes required because the type definitions of DatePicker don't match the
    // implementation. In reality DatePicker expects either a string or a locale object.
    return <DatePicker locale={germanLocale as unknown as string}/>;

[1]: #createdynamiclocale

[2]: #parameters

[3]: #examples

[4]: https://en.wikipedia.org/wiki/Week#Week_numbering
