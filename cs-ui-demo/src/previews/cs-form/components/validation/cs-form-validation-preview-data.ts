import { CSFormData } from '@cloudsense/cs-form-v2';

export default [
	{
		sectionKey: 'section-1',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'TEXTAREA',
			name: 'textarea-1',
			label: 'Textarea field',
			required: true,
			value: 'Example text.'
		}, {
			fieldType: 'NUMBER',
			name: 'number-1',
			label: 'Number field',
			min: 1,
			max: 5,
			value: 1
		}]
	}
] as CSFormData;
