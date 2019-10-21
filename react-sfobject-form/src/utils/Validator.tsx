import { findFieldInFormDescriptor } from './FormDescriptorUtils';
import { calculateComponentStatus, isMandatoryFieldPresent } from './ComponentStatusUtil';
import { interpolateString } from './Util';
import { FormDescriptor } from '../types/FormDescriptor';
import { FormSettings } from '..';

/**
 * Validates an entire form.
 */
export class Validator {

	constructor(private descriptor: FormDescriptor, private formSettings: FormSettings, private requiredMessage: string, private numberFormatMessage: string) {

	}

	validate = (sfObject: Record<string, any>): Record<string, string> => {
		return Object.keys(sfObject)
			.map(name => this.validateField(sfObject, name, sfObject[name]))
			.reduce((ret, r) => { if (r) { ret[r.name] = r.message; } return ret; }, {} as Record<string, string>);
	}

	private validateField = (sfObject: Record<string, any>, name: string, value: any): { name: string, message: string } | null => {
		const fieldDescriptor = findFieldInFormDescriptor(this.descriptor, name);
		if (!fieldDescriptor) {
			throw new Error(`No descriptor found for field ${name}`);
		}
		if (!isMandatoryFieldPresent(calculateComponentStatus(fieldDescriptor, this.formSettings, sfObject), value)) {
			return {
				name,
				message: interpolateString(this.requiredMessage, { name: fieldDescriptor.label })
			};
		}
		if (fieldDescriptor.fieldType === 'NUMBER') {
			if (isNaN(Number(value))) {
				return {
					name,
					message: interpolateString(this.numberFormatMessage, { name: fieldDescriptor.label })
				};
			}
		}
		if (fieldDescriptor.validation && typeof value === 'string') {
			const failedRule = fieldDescriptor.validation.find(rule => !new RegExp(rule.regex).test(value));
			if (failedRule) {
				return {
					name,
					message: interpolateString(failedRule.errorMessage, { name: fieldDescriptor.label })
				};
			}
		}
		return null;
	}

}
