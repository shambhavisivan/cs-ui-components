export default {
	name: 'CSFormSection',
	type: 'attributes',
	data: [
		{
			name: 'fields',
			link: '/cs-form/section#key,-label-and-fields',
			types: 'CSFormFieldData',
			required: true,
			description: 'Define the form fields for the section.'
		}, {
			name: 'label',
			link: '/cs-form/section#key,-label-and-fields',
			types: 'string',
			required: true,
			description: 'Set a label for the form section.'
		}, {
			name: 'sectionKey',
			link: '/cs-form/section#key,-label-and-fields',
			types: 'string',
			required: true,
			description: 'Unique identifier for the form section'
		}, {
			name: 'collapsible',
			link: '/cs-form/section#header-and-collapsibility',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the form section should be collapsible.'
		}, {
			name: 'defaultClosed',
			link: '/cs-form/section#header-and-collapsibility',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the form section is closed by default. It is designed to be used with the collapsible prop.'
		}, {
			name: 'error',
			link: '/cs-form/section#error-handling-and-display',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-form/section#error-handling-and-display',
			types: ['string', 'Array<string>'],
			description: 'Set the tooltip error message or messages for the form section.'
		}, {
			name: 'hideSectionHeader',
			link: '/cs-form/section#header-and-collapsibility',
			types: 'boolean',
			default: 'false',
			description: 'Hide the header of the form section.'
		}, {
			name: 'styleClass',
			link: '/cs-form/section#custom-styles',
			types: 'string',
			description: 'Apply custom CSS classes to the form section.'
		}
	]
};
