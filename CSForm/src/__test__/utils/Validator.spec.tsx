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
					precision: 5
				},
				{
					name: 'SimpleString',
					fieldType: 'STRING'
				},
				{
					name: 'RestrictedString',
					fieldType: 'STRING',
					maxLength: 5
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
	it('errors when value is not a number', () => {
		const result: Record<string, string> = validator.validate({ SimpleNumber: 'abc' });

		expect(result.SimpleNumber).toEqual('Field "SimpleNumber" must be a valid number and within range.');
	});

	it('should not error when valid number', () => {
		const result: Record<string, string> = validator.validate({ SimpleNumber: '12345.6789' });

		expect(result).toEqual({});
	});

	it('errors when number does not confirm to precision and scale', () => {
		const result1: Record<string, string> = validator.validate({ RestrictedNumber: '12356.6789' });
		const result2: Record<string, string> = validator.validate({ RestrictedNumber: '123.6789' });
		const result3: Record<string, string> = validator.validate({ RestrictedNumber: '123456.67' });

		[ result1, result2, result3 ].map(result => {
			expect(result.RestrictedNumber).toEqual('Field "RestrictedNumber" must be a valid number and within range.');
		});
	});

	it('should not error when number confirms to precision and scale', () => {
		const result1: Record<string, string> = validator.validate({ RestrictedNumber: '123.45' });
		const result2: Record<string, string> = validator.validate({ RestrictedNumber: '123' });
		const result3: Record<string, string> = validator.validate({ RestrictedNumber: '0.45' });

		[ result1, result2, result3 ].map(result => {
			expect(result).toEqual({});
		});
	});
});

describe('STRING validations', () => {
	it('should not result in any error for string with no validations', () => {
		const result: Record<string, string> = validator.validate({ SimpleString: '123.45' });

		expect(result).toEqual({});
	});

	it('should not error when maxLength validation is satisfied', () => {
		const result: Record<string, string> = validator.validate({ RestrictedString: '123' });

		expect(result).toEqual({});
	});

	it('should error when maxLength validation fails', () => {
		const result: Record<string, string> = validator.validate({ RestrictedString: '1234567' });
		const expected: Record<string, string> = { RestrictedString: 'value exceeds maximum length' };

		expect(result).toEqual(expected);
	});
});
