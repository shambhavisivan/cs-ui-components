export default {
	name: 'Custom Fields Common',
	type: 'attributes',
	data: [
		{
			name: 'fieldType',
			customTypes: {
				name: 'CSFormFieldType',
				types: [`CUSTOM`, `CUSTOM-MODAL`]
			},
			required: true,
			description: 'Set type of the field which enables properties specific for the type.'
		}, {
			name: 'grow',
			types: 'number',
			description: 'Set the number of columns that field takes in one row.'
		}, {
			name: 'hidden',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'showInNewLine',
			types: 'boolean',
			default: 'false',
			description: 'Render the field as the first field in the new line in form section.'
		}
	]
};
