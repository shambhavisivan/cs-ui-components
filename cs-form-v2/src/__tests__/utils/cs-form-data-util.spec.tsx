import '../../setupTests';
import { defineFormData, CSFormDefinition } from '../../utils/cs-form-data-util';

const formDefinition: CSFormDefinition = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		type: 'TEXT',
		name: 'text_1',
		label: 'label',
	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		type: 'NUMBER',
		name: 'number_2',
		label: 'label',
	}],
}];

const formData = [{
	text_1: 'Example text',
}, {
	number_2: 2,
}];

const formErrorMessages = [{
	text_1: 'Error message',
}, {
	number_2: 'Error message',
}];

const result = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		type: 'TEXT',
		name: 'text_1',
		label: 'label',
		value: 'Example text',
		error: true,
		errorMessage: 'Error message',

	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		type: 'NUMBER',
		name: 'number_2',
		label: 'label',
		value: 2,
		error: true,
		errorMessage: 'Error message',
	}],
}];

const resultWithoutErrors = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		type: 'TEXT',
		name: 'text_1',
		label: 'label',
		value: 'Example text',

	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		type: 'NUMBER',
		name: 'number_2',
		label: 'label',
		value: 2,
	}],
}];

const resultWithoutData = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		type: 'TEXT',
		name: 'text_1',
		label: 'label',
		error: true,
		errorMessage: 'Error message',
	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		type: 'NUMBER',
		name: 'number_2',
		label: 'label',
		error: true,
		errorMessage: 'Error message',
	}],
}];

describe('defineFormData()', () => {
	it('should combine form definition, from data and error messages to data array', () => {
		const data = defineFormData(formDefinition, formData, formErrorMessages);
		expect(JSON.stringify(data)).toBe(JSON.stringify(result));
	});

	it('should combine only form definition and from data if data is not provided', () => {
		const data = defineFormData(formDefinition, [], formErrorMessages);
		expect(JSON.stringify(data)).toBe(JSON.stringify(resultWithoutData));
	});

	it('should combine only form definition and from data if error messages are not provided', () => {
		const data = defineFormData(formDefinition, formData, []);
		expect(JSON.stringify(data)).toBe(JSON.stringify(resultWithoutErrors));
	});
});
