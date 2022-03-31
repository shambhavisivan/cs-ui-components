import { CSFormData } from '@cloudsense/cs-form-v2';

export default [
	{
		sectionKey: 'section-1',
		label: 'Section',
		collapsible: true,
		fields: [{
			type: 'TEXTAREA',
			label: 'Textarea field',
			name: 'textarea-1',
			required: true,
			value: 'Example text.'
		}, {
			type: 'NUMBER',
			label: 'Number field',
			name: 'number-1',
			min: 1,
			max: 5,
			value: 1
		}]
	}
] as CSFormData;
