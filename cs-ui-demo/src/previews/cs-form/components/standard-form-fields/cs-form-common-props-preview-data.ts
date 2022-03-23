import { CSFormData } from '@cloudsense/cs-form-v2';
import { CSButtonSize, CSTooltipPosition, CSIconOrigin } from '@cloudsense/cs-ui-components';
const actions = [
	{
		action: () => alert('Delete option called'),
		icon: { iconName: 'delete' },
		labelHidden: true,
		size: 'small' as CSButtonSize,
		name: 'Delete'
	}, {
		action: () => alert('Add option called'),
		icon: { iconName: 'add' },
		labelHidden: true,
		size: 'small' as CSButtonSize,
		name: 'Add',
		getTooltip: {
			content: ['actions tooltip'],
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const icons = [
	{ iconName: 'cart' },
	{
		iconName: 'tag',
		iconOrigin: 'cs' as CSIconOrigin,
		getTooltip: {
			content: ['icons tooltip'],
			delay: 300,
			maxWidth: '20rem',
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

export const fieldTypeData: CSFormData = [
	{
		sectionKey: 'field-type-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1'
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1'
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1'
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
			fieldType: 'DATE',
			label: 'Date field',
			name: 'date-2'
		}, {
			fieldType: 'CHECKBOX',
			label: 'Checkbox',
			name: 'checkbox-1'
		}]
	}
];

export const customOptionsData: CSFormData = [
	{
		sectionKey: 'custom-data-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			actions
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
			fieldToBeDisplayed: 'Account',
			icons
		}]
	}
];

export const layoutPropsData: CSFormData = [
	{
		sectionKey: 'layout-props-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			grow: 2
		}, {
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1'
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			showInNewLine: true
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1-1'
		}]
	}
];

export const errorAndHelpTextData: CSFormData = [
	{
		sectionKey: 'error-helptext-display-section',
		label: 'Section',
		collapsible: true,
		fields: [{
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
			fieldToBeDisplayed: 'Account',
			error: true,
			errorMessage: 'Account is invalid!'
		}, {
			fieldType: 'DATETIME',
			label: 'Datetime field',
			name: 'date-time-1',
			error: true,
			errorMessage: 'Select correct date!'
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			helpText: 'Enter description.'
		}]
	}
];

export const fieldStateVisibilityData: CSFormData = [
	{
		sectionKey: 'field-state-visibility-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TOGGLE',
			label: 'Toggle field',
			name: 'toggle-1',
			hidden: true
		}, {
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			disabled: true
		}, {
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			readOnly: true,
			value: 2
		}, {
			fieldType: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			required: true
		}]
	}
];

export const fieldStyleData: CSFormData = [
	{
		sectionKey: 'field-style-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'RADIO',
			label: 'Radio field',
			name: 'radio-1',
			styleClass: 'csd-custom-br-mint',
			options: [{
				key: 'red',
				label: 'Red'

			}, {
				key: 'blue',
				label: 'Blue'
			}]
		}]
	}
];

export const fieldTitleAndValueData: CSFormData = [
	{
		sectionKey: 'field-title-data-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			title: 'Text field title'
		}, {
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			value: 2
		}]
	}
];
