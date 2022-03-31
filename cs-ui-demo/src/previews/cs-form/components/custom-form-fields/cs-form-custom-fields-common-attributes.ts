export default {
	name: 'Custom Fields Common',
	type: 'attributes',
	data: [
		{
			name: 'type',
			link: '/cs-form/custom-form-fields#intro',
			customTypes: {
				name: 'CSFormFieldType',
				types: [`CUSTOM`, `CUSTOM-MODAL`]
			},
			required: true,
			description: 'Set the type of the field which enables specific properties.'
		}, {
			name: 'grow',
			link: '/cs-form/custom-form-fields#common-properites',
			types: 'number',
			description: 'Set the number of columns that the field takes in one row.'
		}, {
			name: 'hidden',
			link: '/cs-form/custom-form-fields#common-properites',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'showInNewLine',
			link: '/cs-form/custom-form-fields#common-properites',
			types: 'boolean',
			default: 'false',
			description: 'Render the field as the first field in a new line in form section.'
		}
	]
};
