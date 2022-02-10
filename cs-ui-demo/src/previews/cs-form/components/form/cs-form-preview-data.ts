import { CSFormData } from '@cloudsense/cs-form-v2';
export const initialData: CSFormData = [
	{
		sectionKey: 'section-1',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			required: true,
			min: 1,
			max: 5
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			maxLength: 10
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1'
		}, {
			fieldType: 'SELECT',
			label: 'Select field',
			name: 'select-1',
			selectOptions: [{
				key: 'red',
				value: 'Red'
			}, {
				key: 'blue',
				value: 'Blue'
			}, {
				key: 'yellow',
				value: 'Yellow'
			}]
		}, {
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1'
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1'
		}]
	},
	{
		sectionKey: 'section-2',
		label: 'Second section',
		collapsible: true,
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			disabled: true
		}, {
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-2'
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-2'
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1'
		}, {
			fieldType: 'LOOKUP',
			label: 'Lookup field',
			name: 'lookup-1',
			mode: 'client',
			columns: [{ key: 'Account', header: 'Account' },
			{ key: 'Industry', header: 'Industry' }],
			options: [{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
			{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
			{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
			{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } }],
			fieldToBeDisplayed: 'Account'
		}]
	}
];

export const localeData: CSFormData = [
	{
		sectionKey: 'section-1',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			useLocale: true,
			value: 100
		}, {
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-1',
			value: new Date()
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-1',
			value: new Date()
		}]
	}
];

export const eventsData: CSFormData = [
	{
		sectionKey: 'section-1',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			required: true,
			min: 1,
			max: 5,
			value: 3
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			maxLength: 10,
			value: ''
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false
		}]
	}
];

export const readOnlyData: CSFormData = [
	{
		sectionKey: 'section-1',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			value: 3
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			value: 'Example text.'
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: true
		}, {
			fieldType: 'SELECT',
			label: 'Select field',
			name: 'select-1',
			selectOptions: [{
				key: 'red',
				value: 'Red'
			}, {
				key: 'blue',
				value: 'Blue'
			}, {
				key: 'yellow',
				value: 'Yellow'
			}],
			value: 'yellow'
		}, {
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1',
			value: true
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			value: 'Example description.'
		}]
	}, {
		sectionKey: 'section-2',
		label: 'Second section',
		collapsible: true,
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date()
		}, {
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-2',
			value: 'red',
			radioOptions: [{
				radioOptionValue: 'red',
				label: 'Red'

			}, {
				radioOptionValue: 'blue',
				label: 'Blue'
			}]
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-2',
			value: new Date()
		}, {
			fieldType: 'LOOKUP',
			label: 'Lookup field',
			name: 'lookup-2',
			mode: 'client',
			columns: [{ key: 'Account', header: 'Account' },
			{ key: 'Industry', header: 'Industry' }],
			options: [{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
			{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
			{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
			{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } }],
			fieldToBeDisplayed: 'Account',
			value: { key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }
		}, {
			fieldType: 'CUSTOM-SELECT',
			label: 'Custom select field',
			name: 'custom-select-2',
			options: [
				{ key: 0, label: 'Product' },
				{ key: 1, label: 'Services' },
				{ key: 2, label: 'Sales' },
				{ key: 3, label: 'Marketing' }
			],
			value: 0
		}]
	}
];

export const formErrorData: CSFormData = [
	{
		sectionKey: 'section-1',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-form-error',
			required: true,
			value: ''
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			maxLength: 10,
			value: ''
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false
		}]
	}
];
