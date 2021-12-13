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
			description: 'Define form strucutre and field values.'
		}, {
			name: 'columnNumber',
			types: 'number',
			default: 4,
			description: 'Set number of fields displayed in one section row.'
		}, {
			name: 'errorLabels',
			customTypes: {
				name: 'CSFormErrorLabels',
				types: 'See CSFormErrorLabels Attributes'
			},
			description: 'Set custom error labels for standard validation errors.'
		}, {
			name: 'formErrorMessage',
			types: ['string', 'Array<string>'],
			description: 'Set error message relevant to the entire form.'
		}, {
			name: 'locale',
			customTypes: {
				name: 'CSFormLocale',
				types: `See CSFormLocale Attributes`
			},
			description: 'Set form locale for number, date and date-time fields.'
		}, {
			name: 'mode',
			customTypes: {
				name: 'CSFormMode',
				types: 'read-only'
			},
			description: 'Set read-only mode which sets whole form to read-only state, overriding readOnly fields attributes.'
		}, {
			name: 'onFieldBlur',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when form field blur event is triggered.'
		}, {
			name: 'onFieldChange',
			types: '(newData: CSFormChangedFieldData) => void',
			description: 'Handler method when form field change event is triggered.'
		}
	]
};
