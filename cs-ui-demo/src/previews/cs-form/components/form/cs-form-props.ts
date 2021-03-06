export default {
	name: 'CSForm',
	type: 'props',
	data: [
		{
			name: 'data',
			link: '/cs-form/form#structure-and-data',
			required: true,
			customTypes: {
				name: 'CSFormData',
				types: 'Array<CSSectionProps>'
			},
			description: 'Define the form structure and field values.'
		}, {
			name: 'columnNumber',
			link: '/cs-form/form#layout',
			types: 'number',
			default: 4,
			description: 'Set the number of fields displayed in each row.'
		}, {
			name: 'errorLabels',
			link: '/cs-form/form#custom-error-labels',
			customTypes: {
				name: 'CSFormErrorLabels',
				types: 'See CSFormErrorLabels Attributes'
			},
			description: 'Set the custom error labels for standard validation errors.'
		}, {
			name: 'formErrorMessage',
			link: '/cs-form/form#error-handling-and-display',
			types: ['string', 'Array<string>'],
			description: 'Set the error message for the entire form.'
		}, {
			name: 'locale',
			link: '/cs-form/form#localization',
			customTypes: {
				name: 'CSFormLocale',
				types: `See CSFormLocale Attributes`
			},
			description: 'Set the form locale for number, date and date-time fields.'
		}, {
			name: 'mode',
			link: '/cs-form/form#mode',
			customTypes: {
				name: 'CSFormMode',
				types: 'read-only'
			},
			description: 'Sets the entire form to read-only state, overriding the readOnly fields attributes.'
		}, {
			name: 'onFieldBlur',
			link: '/cs-form/form#event-handling',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when the form field blur event is triggered.'
		}, {
			name: 'onFieldChange',
			link: '/cs-form/form#event-handling',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when the form field change event is triggered.'
		}, {
			name: 'onFieldClick',
			link: '/cs-form/form#event-handling',
			types: '(fieldData: CSFormFieldData) => void',
			description: 'Handler method when form field click event is triggered.'
		}, {
			name: 'onFieldFocus',
			link: '/cs-form/form#event-handling',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when the form field focus event is triggered.'
		}, {
			name: 'onFieldKeyDown',
			link: '/cs-form/form#event-handling',
			types: '(fieldData: CSFormFieldData, event: React.KeyboardEvent<HTMLElement>) => void',
			description: 'Handler method when form field keydown event is triggered.'
		}
	]
};
