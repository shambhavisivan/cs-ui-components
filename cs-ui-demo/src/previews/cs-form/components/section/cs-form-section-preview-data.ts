import { CSFormData } from '@cloudsense/cs-form-v2';
export const fields: any = [{
	type: 'NUMBER',
	label: 'Number field',
	name: 'number-1',
	required: true,
	min: 1,
	max: 5
}, {
	type: 'TEXT',
	label: 'Text field',
	name: 'text-1',
	maxLength: 10
}, {
	type: 'TOGGLE',
	label: 'Toggle field',
	name: 'toggle-1'
}, {
	type: 'SELECT',
	label: 'Select field',
	name: 'select-1',
	options: [{
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
	type: 'CHECKBOX',
	label: 'Checkbox',
	name: 'checkbox-1'
}, {
	type: 'TEXTAREA',
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
