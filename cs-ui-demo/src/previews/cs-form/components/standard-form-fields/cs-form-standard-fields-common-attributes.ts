export default {
	name: 'CSFormField Common',
	type: 'attributes',
	data: [
		{
			name: 'fieldType',
			link: '/cs-form/standard-form-fields#common-properties',
			customTypes: {
				name: 'CSFormFieldType',
				types: [
					`'CHECKBOX'`,
					`'CUSTOM-SELECT'`,
					`'DATE'`,
					`'DATETIME'`,
					`'LOOKUP'`,
					`'NUMBER'`,
					`'RADIO'`,
					`'SELECT'`,
					`'TEXT'`,
					`'TEXTAREA'`,
					`'TOGGLE'`
				]
			},
			required: true,
			description: 'Set the type of the field which enables specific properties.'
		}, {
			name: 'label',
			link: '/cs-form/standard-form-fields#common-properties',
			types: 'string',
			required: true,
			description: 'Set the lookup label.'
		}, {
			name: 'name',
			link: '/cs-form/standard-form-fields#common-properties',
			types: 'string',
			required: true,
			description: `Set the unique identifier for the form field and 'name' attribute. The defined value of this property is returned when the field change or blur is triggered as part of an object.`
		}, {
			name: 'actions',
			link: '/cs-form/standard-form-fields#custom-data',
			types: 'Array<CSCustomDataActionProps>',
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip, and an action prop for the button action/function.'
		}, {
			name: 'disabled',
			link: '/cs-form/standard-form-fields#field-state-and-visibility',
			types: 'boolean',
			default: 'false',
			description: 'Disable the field.'
		}, {
			name: 'error',
			link: '/cs-form/standard-form-fields#error-and-helptext-display',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-form/standard-form-fields#error-and-helptext-display',
			types: ['string', 'Array<string>'],
			description: 'Set the error message(s) for the field.'
		}, {
			name: 'grow',
			link: '/cs-form/standard-form-fields#layout',
			types: 'number',
			description: 'Set the number of columns that the field takes in one row.'
		}, {
			name: 'helpText',
			link: '/cs-form/standard-form-fields#error-and-helptext-display',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-form/standard-form-fields#field-state-and-visibility',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			link: '/cs-form/standard-form-fields#custom-data',
			types: 'Array<CSCustomDataIconProps>',
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'readOnly',
			link: '/cs-form/standard-form-fields#field-state-and-visibility',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-form/standard-form-fields#field-state-and-visibility',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'showInNewLine',
			link: '/cs-form/standard-form-fields#layout',
			types: 'boolean',
			default: 'false',
			description: 'Render the field as the first field in a new line in the form section.'
		}, {
			name: 'styleClass',
			link: '/cs-form/standard-form-fields#field-custom-styles',
			types: 'string',
			description: 'Apply custom CSS classes to the field.'
		}, {
			name: 'title',
			link: '/cs-form/standard-form-fields#title-and-value',
			types: 'string',
			description: 'Set the field title.'
		}, {
			name: 'value',
			link: '/cs-form/standard-form-fields#title-and-value',
			types: 'any',
			description: 'Set the value of the field.'
		}
	]
};
