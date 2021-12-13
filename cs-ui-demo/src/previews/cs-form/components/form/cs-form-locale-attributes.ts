export default {
	name: 'CSFormLocale',
	type: 'attributes',
	data: [
		{
			name: 'dateLocale',
			types: 'string',
			description: 'Set BCP 47 language tag for date and date-time fields.'
		}, {
			name: 'numberLocale',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'See CSFormNumberFiledLocale Attributes'
			},
			description: 'Set locale for number field.'
		}
	]
};
