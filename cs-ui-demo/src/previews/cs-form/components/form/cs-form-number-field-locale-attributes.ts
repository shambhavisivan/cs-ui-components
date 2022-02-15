export default {
	name: 'CSFormNumberFiledLocale',
	type: 'attributes',
	data: [
		{
			name: 'numLocale',
			link: '/cs-form/form#localization',
			types: 'string',
			description: 'Set the BCP 47 language tag.'
		}, {
			name: 'options',
			link: '/cs-form/form#localization',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'To be added'
			},
			description: 'Set the options for locale formatting.'
		}
	]
};
