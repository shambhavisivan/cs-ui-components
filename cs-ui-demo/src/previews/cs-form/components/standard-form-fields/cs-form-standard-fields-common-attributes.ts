export default {
	name: 'CSFormField Common',
	type: 'attributes',
	data: [
		{
			name: 'fieldType',
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
			types: 'string',
			required: true,
			description: 'Set the lookup label.'
		}, {
			name: 'name',
			types: 'string',
			required: true,
			description: `Set the unique identifier for the form field and 'name' attribute. The defined value of this property is returned when the field change or blur is triggered as part of an object.`
		}, {
			name: 'actions',
			types: 'Array<CSCustomDataActionProps>',
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip, and an action prop for the button action/function.'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the field.'
		}, {
			name: 'error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			types: ['string', 'Array<string>'],
			description: 'Set the error message(s) for the field.'
		}, {
			name: 'grow',
			types: 'number',
			description: 'Set the number of columns that the field takes in one row.'
		}, {
			name: 'helpText',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			types: 'Array<CSCustomDataIconProps>',
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'readOnly',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'showInNewLine',
			types: 'boolean',
			default: 'false',
			description: 'Render the field as the first field in a new line in the form section.'
		}, {
			name: 'styleClass',
			types: 'string',
			description: 'Apply custom CSS classes to the field.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set the field title.'
		}, {
			name: 'value',
			types: 'any',
			description: 'Set the value of the field.'
		}
	]
};
