import { CSFormData } from '@cloudsense/cs-form-v2';

export const checkboxPropsData: CSFormData = [
	{
		sectionKey: 'checkbox-properties-section',
		label: 'Checkbox',
		collapsible: true,
		fields: [{
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1',
			value: true
		}]
	}
];

export const customSelectPropsData: CSFormData = [
	{
		sectionKey: 'custom-select-properties-section',
		label: 'Custom Select',
		collapsible: true,
		fields: [
			{
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
			}
		]
	}
];

export const datePropsData: CSFormData = [
	{
		sectionKey: 'date-properties-section',
		label: 'Date',
		collapsible: true,
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date()
		}]
	}
];

export const dateTimePropsData: CSFormData = [
	{
		sectionKey: 'datetime-properties-section',
		label: 'Date time',
		collapsible: true,
		fields: [{
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-2',
			value: new Date()
		}]
	}
];

export const lookupPropsData: CSFormData = [
	{
		sectionKey: 'lookup-properties-section',
		label: 'Lookup',
		collapsible: true,
		fields: [{
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
		}]
	}
];

export const numberLocaleData: CSFormData = [
	{
		sectionKey: 'number-locale-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field with locale',
			name: 'number-1',
			useLocale: true,
			value: 100
		}, {
			fieldType: 'NUMBER',
			label: 'Number field without locale',
			name: 'number-2',
			useLocale: false,
			value: 100
		}]
	}
];

export const radioPropsData: CSFormData = [
	{
		sectionKey: 'radio-properties-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-color',
			radioOptions: [{
				radioOptionValue: 'red',
				label: 'Red'

			}, {
				radioOptionValue: 'blue',
				label: 'Blue'
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select fruit:',
			name: 'radio-fruit',
			radioOptions: [{
				radioOptionValue: 'apple',
				label: 'Apple'

			}, {
				radioOptionValue: 'banana',
				label: 'Banana',
				disabled: true
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select drink:',
			name: 'radio-drink',
			radioOptions: [{
				radioOptionValue: 'cola',
				label: 'Coca-cola',
				readOnly: true
			}, {
				radioOptionValue: 'pepsi',
				label: 'Pepsi'
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select season:',
			name: 'radio-season',
			radioOptions: [{
				radioOptionValue: 'summer',
				label: 'Summer',
				title: 'Summer season'
			}, {
				radioOptionValue: 'winter',
				label: 'Winter',
				title: 'Winter season'
			}]
		}]
	}
];

export const selectPropsData: CSFormData = [
	{
		sectionKey: 'select-properties-section',
		label: 'Select',
		collapsible: true,
		fields: [
			{
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
			}
		]
	}
];

export const textPropsData: CSFormData = [
	{
		sectionKey: 'text-properties-section',
		label: 'Text',
		collapsible: true,
		fields: [
			{
				fieldType: 'TEXT',
				label: 'Text field',
				name: 'text-1',
				value: 'Example text.'
			}
		]
	}
];

export const textareaPropsData: CSFormData = [
	{
		sectionKey: 'textarea-properties-section',
		label: 'Textarea',
		collapsible: true,
		fields: [
			{
				fieldType: 'TEXTAREA',
				label: 'Textarea field',
				name: 'textarea-1',
				value: 'Example description.'
			}
		]
	}
];
