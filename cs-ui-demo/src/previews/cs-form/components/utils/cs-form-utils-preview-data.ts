import { CSFormData } from '@cloudsense/cs-form-v2';

export default [
	{
		sectionKey: 'section-1',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TEXT',
			name: 'text-1',
			label: 'Text field',
			required: true,
			value: ''
		}, {
			fieldType: 'NUMBER',
			name: 'number-1',
			label: 'Number field',
			min: 1,
			max: 5,
			value: ''
		}]
	}
] as CSFormData;
