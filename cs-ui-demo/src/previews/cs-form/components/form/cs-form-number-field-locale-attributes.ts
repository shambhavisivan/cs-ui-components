export default {
	name: 'CSFormNumberFiledLocale',
	type: 'attributes',
	data: [
		{
			name: 'numLocale',
			types: 'string',
			description: 'Set the BCP 47 language tag.'
		}, {
			name: 'options',
			customTypes: {
				name: 'CSFormNumberFiledLocale',
				types: 'To be added'
			},
			description: 'Set the options for locale formatting.'
		}
	]
};
