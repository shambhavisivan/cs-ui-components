export default {
	name: 'CSFormLocale',
	type: 'attributes',
	data: [
		{
			name: 'dateLocale',
			types: 'string',
			description: 'Set the BCP 47 language tag for the date and date-time fields.'
		}, {
			name: 'numberLocale',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'See CSFormNumberFiledLocale Attributes'
			},
			description: 'Set the locale for the number field.'
		}
	]
};
