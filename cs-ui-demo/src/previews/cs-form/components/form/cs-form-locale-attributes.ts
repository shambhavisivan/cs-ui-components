export default {
	name: 'CSFormLocale',
	type: 'attributes',
	data: [
		{
			name: 'dateLocale',
			link: '/cs-form/form#localization',
			types: 'string',
			description: 'Set the BCP 47 language tag for the date and date-time fields.'
		}, {
			name: 'numberLocale',
			link: '/cs-form/form#localization',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'See CSFormNumberFiledLocale Attributes'
			},
			description: 'Set the locale for the number field.'
		}
	]
};
