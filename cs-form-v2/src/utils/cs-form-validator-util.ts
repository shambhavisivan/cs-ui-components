import { CSFormFieldProps } from '../types/cs-form-field-types';
import { CSFormData, CSFormErrorLabels } from '../types/cs-form-types';

const validateField = (field: CSFormFieldProps, value: any, errorLabels?: CSFormErrorLabels) => {
	const errors: Array<string> = [];

	/** Check requiredness of the field regardless of the type */
	if (field.required && !value) {
		if (errorLabels?.requiredFieldErrLabel) {
			errors.push(errorLabels.requiredFieldErrLabel);
		} else if (field.fieldType === 'RADIO') {
			errors.push('Radio options are required!');
		} else {
			errors.push(`${field.name} is required.`);
		}
	}

	/** Number field validations */
	if (field.fieldType === 'NUMBER') {
		if (value > field.max) {
			if (errorLabels?.maxNumberFieldErrLabel) {
				errors.push(errorLabels.maxNumberFieldErrLabel);
			} else {
				errors.push(`${field.name} value is higher than defined max value.`);
			}
		}

		if (value < field.min) {
			if (errorLabels?.minNumberFieldErrLabel) {
				errors.push(errorLabels.minNumberFieldErrLabel);
			} else {
				errors.push(`${field.name} value is lower than defined min value.`);
			}
		}
	}

	/** Text field validations */
	if (field.fieldType === 'TEXT') {
		if ((value as string).length > field.maxLength) {
			if (errorLabels?.maxLengthTextFieldErr) {
				errors.push(errorLabels.maxLengthTextFieldErr);
			} else {
				errors.push(`${field.name} value is higher than defined maxLength value.`);
			}
		}
	}

	if (errors.length) {
		return errors;
	}

	return null;
};

const validateForm = (data: CSFormData, errorLabels?: CSFormErrorLabels) => {
	let validationResults: Array<object> = [];

	data.forEach(({ sectionKey, fields }) => {
		const evaluatedFields = fields.map((field) => {
			const { name, value } = field;
			const errorMessage = validateField(field, value, errorLabels);
			if (errorMessage) {
				return {
					sectionKey,
					name,
					value,
					errorMessage,
				};
			}

			return {
				sectionKey,
				name,
				value,
			};
		});

		validationResults = [...validationResults, ...evaluatedFields];
	});

	return validationResults;
};

export {
	validateForm,
	validateField,
};
