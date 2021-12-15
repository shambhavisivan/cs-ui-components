export default {
	name: 'CSFormSection',
	type: 'attributes',
	data: [
		{
			name: 'fields',
			types: 'CSFormFieldData',
			required: true,
			description: 'Define form fields for the section.'
		}, {
			name: 'label',
			types: 'string',
			required: true,
			description: 'Set a label for the form section.'
		}, {
			name: 'sectionKey',
			types: 'string',
			required: true,
			description: 'Unique identifier for the form section'
		}, {
			name: 'collapsible',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the form section should be collapsible.'
		}, {
			name: 'defaultClosed',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the form section is closed by default. It is designed to be used with collapsible prop.'
		}, {
			name: 'error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			types: ['string', 'Array<string>'],
			description: 'Set the tooltip error message or messages for the form section.'
		}, {
			name: 'hideSectionHeader',
			types: 'boolean',
			default: 'false',
			description: 'Hide the header of the form section.'
		}, {
			name: 'styleClass',
			types: 'string',
			description: 'Apply custom CSS classes to the form section.'
		}
	]
};
