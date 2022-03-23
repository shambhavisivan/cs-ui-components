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
		sectionKey: 'section-locale',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-locale',
			useLocale: true,
			value: 100
		}, {
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-locale',
			value: new Date()
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-locale',
			value: new Date()
		}]
	}
];
export const eventsData: CSFormData = [
	{
		sectionKey: 'section-2',
		label: 'First Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-2',
			min: 1,
			max: 5,
			value: 3
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-2',
			required: true,
			value: 'Example text'
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-2',
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
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false
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
			name: 'radio-22',
			value: 'red2',
			options: [{
				key: 'red2',
				label: 'Red2'
			}, {
				key: 'blue2',
				label: 'Blue2'
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
			required: true
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			maxLength: 10
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1'
		}]
	}
];

export const standardDataTest: CSFormData = [
	{
		sectionKey: 'STANDARD',
		label: 'STANDARD',
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
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false
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
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea LONG ',
			name: 'textarea-2',
			value: 'Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum'
		}]
	}, {
		sectionKey: 'STANDARD-2',
		label: 'STANDARD-2',
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date()
		}, {
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-23',
			value: 'red3',
			options: [{
				key: 'red3',
				label: 'Red3'
			}, {
				key: 'blue3',
				label: 'Blue3'
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

export const readOnlyDataTest: CSFormData = [
	{
		sectionKey: 'READONLY-1',
		label: 'READONLY-1',
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
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false
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
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea LONG ',
			name: 'textarea-2',
			value: 'Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum'
		}]
	}, {
		sectionKey: 'READONLY-2',
		label: 'READONLY-2',
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date()
		}, {
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-24',
			value: 'red4',
			options: [{
				key: 'red4',
				label: 'Red4'
			}, {
				key: 'blue4',
				label: 'Blue4'
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

export const disabledDataTest: CSFormData = [
	{
		sectionKey: 'DISABLED-1',
		label: 'DISABLED',
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			value: 3,
			disabled: true
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			value: 'Example text.',
			disabled: true
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: true,
			disabled: true
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false,
			disabled: true
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
			,
			disabled: true
		}, {
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1',
			value: true
			,
			disabled: true
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			value: 'Example description.',
			disabled: true
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea LONG ',
			name: 'textarea-2',
			value: 'Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum',
			disabled: true
		}]
	}, {
		sectionKey: 'DISABLED-2',
		label: 'DISABLED',
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date(),
			disabled: true
		}, {
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-25',
			value: 'red5',
			options: [{
				key: 'red5',
				label: 'Red5'
			}, {
				key: 'blue5',
				label: 'Blue5'
			}],
			disabled: true
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-2',
			value: new Date(),
			disabled: true
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
			value: { key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
			disabled: true
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
			value: 0,
			disabled: true
		}]
	}
];

export const disabled2DataTest: CSFormData = [
	{
		sectionKey: 'DISABLED-1',
		label: 'DISABLED',
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			value: 3,
			disabled: true
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			value: 'Example text.',
			disabled: true
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: true,
			disabled: true
		}, {
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			value: false,
			disabled: true
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
			,
			disabled: true
		}, {
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1',
			value: true
			,
			disabled: true
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			value: 'Example description.',
			disabled: true
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea LONG ',
			name: 'textarea-2',
			value: 'Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum. Example description lorem ipsum dipsum pipsum',
			disabled: true
		}]
	}, {
		sectionKey: 'DISABLED-2',
		label: 'DISABLED',
		fields: [{
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2',
			value: new Date(),
			disabled: true
		}, {
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-26',
			value: 'red6',
			options: [{
				key: 'red6',
				label: 'Red6'
			}, {
				key: 'blue6',
				label: 'Blue6'
			}],
			disabled: true
		}, {
			fieldType: 'DATETIME',
			label: 'Date-time field',
			name: 'date-time-2',
			value: new Date(),
			disabled: true
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
			value: { key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
			disabled: true
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
			value: 0,
			disabled: true
		}]
	}
];
