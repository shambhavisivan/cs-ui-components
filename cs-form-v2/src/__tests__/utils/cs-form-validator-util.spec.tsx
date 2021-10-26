import '../../setupTests';
import { defaultErrorLabels, validateField, validateForm } from '../../utils/cs-form-validator-util';
import { CSFormFieldData } from '../../types/cs-form-field-types';
import { CSFormData, CSFormErrorLabels } from '../../types/cs-form-types';

const requiredField: CSFormFieldData = {
	fieldType: 'TOGGLE',
	label: 'label',
	name: 'toggle',
	required: true,
};

const numberField: CSFormFieldData = {
	fieldType: 'NUMBER',
	label: 'label',
	name: 'number',
};

const numberFieldMax = { ...numberField, max: 9 };
const numberFieldMin = { ...numberField, min: 5 };

const textField: CSFormFieldData = {
	fieldType: 'TEXT',
	label: 'label',
	name: 'text',
	maxLength: 5,
};

const customErrorLabels: CSFormErrorLabels = {
	requiredFieldErrLabel: 'Required field!',
	maxLengthTextFieldErr: 'Value length is higher than defined max length',
	maxNumberFieldErrLabel: 'Value is higher than defined max value',
	minNumberFieldErrLabel: 'Value is lower that defined min value',
};

const sectionKeyFirst = { sectionKey: 'section_1' };
const sectionKeySecond = { sectionKey: 'section_2' };

const formData: CSFormData = [
	{
		...sectionKeyFirst,
		label: 'section',
		fields: [
			requiredField,
			{ ...numberFieldMin, value: 1 },
		],
	}, {
		...sectionKeySecond,
		label: 'section',
		fields: [
			{ ...numberFieldMax, value: 10 },
			{ ...textField, value: 'Some long text!' },
		],
	},
];

const validationResults = [
	{
		...sectionKeyFirst,
		name: requiredField.name,
		errorMessage: [customErrorLabels.requiredFieldErrLabel],
	}, {
		...sectionKeyFirst,
		name: numberFieldMin.name,
		value: 1,
		errorMessage: [customErrorLabels.minNumberFieldErrLabel],
	}, {
		...sectionKeySecond,
		name: numberFieldMax.name,
		value: 10,
		errorMessage: [customErrorLabels.maxNumberFieldErrLabel],
	}, {
		...sectionKeySecond,
		name: textField.name,
		value: 'Some long text!',
		errorMessage: [customErrorLabels.maxLengthTextFieldErr],
	}];

describe('validateField()', () => {
	it('should return OOTB error message if field is required and value is not defined', () => {
		const error = validateField(requiredField, undefined);
		expect(error[0]).toBe(`${requiredField.name} ${defaultErrorLabels.requiredFieldErrLabel}`);
	});

	it('should return OOTB error message if number field value is higher than defined', () => {
		const error = validateField(numberFieldMax, 10);
		expect(error[0]).toBe(`${numberFieldMax.name} ${defaultErrorLabels.maxNumberFieldErrLabel}`);
	});

	it('should return OOTB error message if number field value is lower than defined', () => {
		const error = validateField(numberFieldMin, 4);
		expect(error[0]).toBe(`${numberFieldMin.name} ${defaultErrorLabels.minNumberFieldErrLabel}`);
	});

	it('should return OOTB error message if text field value length is higher than defined', () => {
		const error = validateField(textField, 'Some long text.');
		expect(error[0]).toBe(`${textField.name} ${defaultErrorLabels.maxLengthTextFieldErr}`);
	});

	it('should return custom error message if field is required and value is not defined', () => {
		const error = validateField(requiredField, null, customErrorLabels);
		expect(error[0]).toBe(customErrorLabels.requiredFieldErrLabel);
	});

	it('should return custom error message if number field value is higher than defined', () => {
		const error = validateField(numberFieldMax, 10, customErrorLabels);
		expect(error[0]).toBe(customErrorLabels.maxNumberFieldErrLabel);
	});

	it('should return custom error message if number field value is lower than defined', () => {
		const error = validateField(numberFieldMin, 4, customErrorLabels);
		expect(error[0]).toBe(customErrorLabels.minNumberFieldErrLabel);
	});

	it('should return custom error message if text field value length is higher than defined', () => {
		const error = validateField(textField, 'Some long text.', customErrorLabels);
		expect(error[0]).toBe(customErrorLabels.maxLengthTextFieldErr);
	});

	it('should return multiple error messages if more validations fail', () => {
		const numberMinRequired = { ...numberFieldMin, required: true };
		const errors = validateField(numberMinRequired, null);
		expect(errors[0]).toBe(`${numberMinRequired.name} ${defaultErrorLabels.requiredFieldErrLabel}`);
		expect(errors[1]).toBe(`${numberMinRequired.name} ${defaultErrorLabels.minNumberFieldErrLabel}`);
	});

	it('should return null if all validations pass', () => {
		const error = validateField(requiredField, true);
		expect(error).toBeNull();
	});
});

describe('validateForm()', () => {
	it('should return validation results with custom error messages', () => {
		const results = validateForm(formData, customErrorLabels);
		expect(JSON.stringify(results)).toBe(JSON.stringify(validationResults));
	});
});
