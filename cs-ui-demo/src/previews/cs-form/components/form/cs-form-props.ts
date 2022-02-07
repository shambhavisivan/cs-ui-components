export default {
	name: 'CSForm',
	type: 'props',
	data: [
		{
			name: 'data',
			required: true,
			customTypes: {
				name: 'CSFormData',
				types: 'Array<CSSectionProps>'
			},
			description: 'Define the form strucutre and field values.'
		}, {
			name: 'columnNumber',
			types: 'number',
			default: 4,
			description: 'Set the number of fields displayed in each row.'
		}, {
			name: 'errorLabels',
			customTypes: {
				name: 'CSFormErrorLabels',
				types: 'See CSFormErrorLabels Attributes'
			},
			description: 'Set the custom error labels for standard validation errors.'
		}, {
			name: 'formErrorMessage',
			types: ['string', 'Array<string>'],
			description: 'Set the error message for the entire form.'
		}, {
			name: 'locale',
			customTypes: {
				name: 'CSFormLocale',
				types: `See CSFormLocale Attributes`
			},
			description: 'Set the form locale for number, date and date-time fields.'
		}, {
			name: 'mode',
			customTypes: {
				name: 'CSFormMode',
				types: 'read-only'
			},
			description: 'Sets the entire form to read-only state, overriding the readOnly fields attributes.'
		}, {
			name: 'onFieldBlur',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when the form field blur event is triggered.'
		}, {
			name: 'onFieldChange',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when the form field change event is triggered.'
		}
	]
};
