export default {
	name: 'CSFormNumberFiledLocale',
	type: 'attributes',
	data: [
		{
			name: 'numLocale',
			types: 'string',
			description: 'Set BCP 47 language tag.'
		}, {
			name: 'options',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'To be added'
			},
			description: 'Set options for locale formatting.'
		}
	]
};
