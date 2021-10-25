import '../../setupTests';
import { defineFormData, CSFormDefinition } from '../../utils/cs-form-data-util';

const formDefinition: CSFormDefinition = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		fieldType: 'TEXT',
		name: 'text_1',
		label: 'label',
	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		fieldType: 'NUMBER',
		name: 'number_2',
		label: 'label',
	}],
}];

const formData = [{
	text_1: 'Example text',
}, {
	number_2: 2,
}];

const formDataWithoutOneValue = [{
	text_1: 'Example text',
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
		fieldType: 'TEXT',
		name: 'text_1',
		label: 'label',
		value: 'Example text',
		errorMessage: 'Error message',

	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		fieldType: 'NUMBER',
		name: 'number_2',
		label: 'label',
		value: 2,
		errorMessage: 'Error message',
	}],
}];

const resultWithoutErrors = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		fieldType: 'TEXT',
		name: 'text_1',
		label: 'label',
		value: 'Example text',

	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		fieldType: 'NUMBER',
		name: 'number_2',
		label: 'label',
		value: 2,
	}],
}];

const resultWithoutValue = [{
	sectionKey: 'section_1',
	label: 'section',
	fields: [{
		fieldType: 'TEXT',
		name: 'text_1',
		label: 'label',
		value: 'Example text',

	}],
}, {
	sectionKey: 'section_2',
	label: 'section',
	fields: [{
		fieldType: 'NUMBER',
		name: 'number_2',
		label: 'label',
		value: undefined,
	}],
}];

describe('defineFormData()', () => {
	it('should combine form definition, from data and error messages to data array', () => {
		const data = defineFormData(formDefinition, formData, formErrorMessages);
		expect(JSON.stringify(data)).toBe(JSON.stringify(result));
	});

	it('should combine only form definition and from data if error messages are not provided', () => {
		const data = defineFormData(formDefinition, formData);
		expect(JSON.stringify(data)).toBe(JSON.stringify(resultWithoutErrors));
	});

	it('should set value property to undefined if not provided in the data argument', () => {
		const data = defineFormData(formDefinition, formDataWithoutOneValue);
		expect(JSON.stringify(data)).toBe(JSON.stringify(resultWithoutValue));
	});
});
