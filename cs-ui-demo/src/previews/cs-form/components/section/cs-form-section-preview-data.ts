import { CSFormData } from '@cloudsense/cs-form-v2';
export const fields: any = [{
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
}];

export const initialSectionData: CSFormData = [
	{
		sectionKey: 'standard-fields-section',
		label: 'Standard Fields Section',
		fields
	}
];

export const styleClassSectionData: CSFormData = [
	{
		sectionKey: 'styled-section',
		label: 'Styled Section',
		collapsible: true,
		styleClass: 'csd-custom-br-mint',
		fields
	}
];

export const headerAndCollapsibilitySectionData: CSFormData = [
	{
		sectionKey: 'no-header-section',
		label: 'No Header Section',
		hideSectionHeader: true,
		fields
	}, {
		sectionKey: 'default-closed-section',
		label: 'Default Closed Section',
		collapsible: true,
		defaultClosed: true,
		fields
	}, {
		sectionKey: 'collapsible-section',
		label: 'Collapsible Section',
		collapsible: true,
		fields
	}
];
