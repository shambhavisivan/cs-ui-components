import { CSFormData } from '@cloudsense/cs-form-v2';

export default [
	{
		sectionKey: 'section-1',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TEXT',
			label: 'Text field',
			name: 'text-1',
			required: true,
			value: ''
		}, {
			fieldType: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			min: 1,
			max: 5,
			value: ''
		}]
	}
] as CSFormData;
