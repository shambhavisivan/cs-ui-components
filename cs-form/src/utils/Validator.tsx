import { findFieldInFormDescriptor } from './FormDescriptorUtils';
import { calculateComponentStatus, isMandatoryFieldPresent } from './ComponentStatusUtil';
import { interpolateString } from './Util';
import { FormDescriptor, FieldDescriptor } from '../types/FormDescriptor';
import { FormSettings, FormLabels } from '..';

/**
 * Validates an entire form.
 */
export class Validator {
	constructor(
		private descriptor: FormDescriptor,
		private formSettings: FormSettings,
		private formLabels: FormLabels
	) {}

	setDescriptor(value: FormDescriptor) {
		this.descriptor = value;
	}

	validate = (data: Record<string, any>): Record<string, Array<string>> => {
		return Object.keys(data)
			.map(name => this.validateField(data, name, data[name]))
			.reduce((ret, r) => {
				if (r) {
					ret[r.name] = r.errors;
				}
				return ret;
			}, ({} as any) as Record<string, Array<string>>);
	}

	private validateField = (
		data: Record<string, any>,
		name: string,
		value: any
	): { name: string; errors: Array<string> } | null => {
		const fieldDescriptor: FieldDescriptor | undefined = findFieldInFormDescriptor(
			this.descriptor,
			name
		);

		if (!fieldDescriptor) {
			throw new Error(`No descriptor found for field ${name}`);
		}

		if (
			!isMandatoryFieldPresent(
				calculateComponentStatus(fieldDescriptor, this.formSettings, data),
				value
			)
		) {
			return {
				name,
				errors: [
					interpolateString(this.formLabels.validation_message_required, {
						name: fieldDescriptor.label
					})
				]
			};
		}

		if (fieldDescriptor.fieldType === 'NUMBER') {
			const numberFormatError = {
				name,
				errors: [
					interpolateString(this.formLabels.validation_message_number_format, {
						name: fieldDescriptor.label
					})
				]
			};

			if (fieldDescriptor.maxVal) {
				if (Number(value) > fieldDescriptor.maxVal) {
					return numberFormatError;
				}
			}

			if (fieldDescriptor.minVal) {
				if (Number(value) < fieldDescriptor.minVal) {
					return numberFormatError;
				}
			}
		}

		if (
			value &&
			fieldDescriptor.fieldType === 'STRING' &&
			fieldDescriptor.maxLength &&
			Number.isInteger(fieldDescriptor.maxLength)
		) {
			if (String(value).length > fieldDescriptor.maxLength) {
				return {
					name,
					errors: [
						interpolateString(this.formLabels.validation_message_exceeds_length, {
							name: fieldDescriptor.label
						})
					]
				};
			}
		}

		if (fieldDescriptor.validations && typeof value === 'string') {
			const errors: Array<string> = [];

			fieldDescriptor.validations.reduce((failureMessages, rule) => {
				if (!new RegExp(rule.regex).test(value)) {
					failureMessages.push(
						interpolateString(rule.errorMessage, {
							name: fieldDescriptor.label
						})
					);
				}

				return failureMessages;
			}, errors);

			if (errors.length > 0) {
				return { name, errors };
			}
		}

		return null;
	}
}
