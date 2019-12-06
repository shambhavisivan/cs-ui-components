import { Validator } from '../../utils/Validator';
import { FormDescriptor } from '../../types/FormDescriptor';
import { FormSettings } from '../../CSForm';
import { applyDefaults } from '../../utils/FormDescriptorUtils';
import { FormLabels } from '../..';

const formDescriptor: FormDescriptor = {
	type: 'FORM',
	panels: [
		{
			title: 'General',
			fields: [
				{
					name: 'SimpleNumber',
					fieldType: 'NUMBER'
				},
				{
					name: 'RestrictedNumber',
					fieldType: 'NUMBER',
					scale: 2,
					precision: 5,
					maxVal: 50,
					minVal: 1
				},
				{
					name: 'SimpleString',
					fieldType: 'STRING'
				},
				{
					name: 'RestrictedString',
					fieldType: 'STRING',
					maxLength: 5
				},
				{
					name: 'MultiRegexValidationString',
					fieldType: 'STRING',
					validations: [
						{ regex: '\S+@\S+\.\S+', errorMessage: '${name} Should be in email format' },
						{ regex: 'SpecificMatch', errorMessage: '${name} Should be Specific Match' }
					]
				}
			],
			isOpenByDefault: true
		}
	]
};

const formLabels: FormLabels = {
	validation_message_required: 'Field "${name}" is mandatory',
	validation_message_number_format: 'Field "${name}" must be a valid number and within range.',
	validation_message_exceeds_length: 'value exceeds maximum length',
	button_save: 'save'
};

const validator = new Validator(
	applyDefaults(formDescriptor),
	{} as any as FormSettings,
	formLabels
);

describe('NUMBER Validations', () => {

	it('should not error when valid number', () => {
		const result: Record<string, Array<string>> = validator.validate({ SimpleNumber: '12345.6789' });

		expect(result).toEqual({});
	});

	it('errors when value is greater than the  maxvalue', () => {
		const result: Record<string, Array<string>> = validator.validate({ RestrictedNumber: '52' });

		expect(result.RestrictedNumber).toEqual(['Field "RestrictedNumber" must be a valid number and within range.']);
	});

	it('errors when value is lesser than the  minvalue', () => {
		const result: Record<string, Array<string>> = validator.validate({ RestrictedNumber: '-52' });

		expect(result.RestrictedNumber).toEqual(['Field "RestrictedNumber" must be a valid number and within range.']);
	});

	it('should not error when number confirms to precision and scale', () => {
		const result1: Record<string, Array<string>> = validator.validate({ RestrictedNumber: '12.45' });
		const result2: Record<string, Array<string>> = validator.validate({ RestrictedNumber: '12' });
		const result3: Record<string, Array<string>> = validator.validate({ RestrictedNumber: '1.35' });

		[result1, result2, result3].map(result => {
			expect(result).toEqual({});
		});
	});
});

describe('STRING validations', () => {
	it('should not result in any error for string with no validations', () => {
		expect(validator.validate({ SimpleString: '123.45' })).toEqual({});
	});

	it('should not error when maxLength validation is satisfied', () => {
		expect(validator.validate({ RestrictedString: '123' })).toEqual({});
	});

	it('should error when maxLength validation fails', () => {
		const expected: Record<string, Array<string>> = { RestrictedString: ['value exceeds maximum length'] };

		expect(validator.validate({ RestrictedString: '1234567' })).toEqual(expected);
	});

	it('validates all field regex validations and reports all errors', () => {
		const expected: Record<string, Array<string>> = {
			MultiRegexValidationString: [
				'MultiRegexValidationString Should be in email format',
				'MultiRegexValidationString Should be Specific Match'
			]
		};

		expect(validator.validate({ MultiRegexValidationString: 'FailAllValidations' })).toEqual(expected);
	});
});
