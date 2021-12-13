import { CSFormCustomModalFieldProps, CSFormFieldData } from '../types/cs-form-field-types';
import { CSFormData, CSFormErrorLabels } from '../types/cs-form-types';

const defaultErrorLabels: CSFormErrorLabels = {
	requiredFieldErrLabel: 'is required',
	maxNumberFieldErrLabel: 'value is higher than defined max value.',
	minNumberFieldErrLabel: 'value is lower than defined min value.',
};

const validateField = (field: CSFormFieldData, value: any, customErrorLabels?: CSFormErrorLabels) => {
	const errors: Array<string> = [];

	if (field.fieldType === 'CUSTOM-MODAL' || field.fieldType === 'CUSTOM') return null;

	/** Check requiredness of the field regardless of the type */
	if (field.required && !value) {
		if (customErrorLabels?.requiredFieldErrLabel) {
			errors.push(customErrorLabels.requiredFieldErrLabel);
		} else if (field.fieldType === 'RADIO') {
			errors.push('Radio options are required!');
		} else {
			errors.push(`${field.name} ${defaultErrorLabels.requiredFieldErrLabel}`);
		}
	}

	/** Number field validations */
	if (field.fieldType === 'NUMBER') {
		if (value > field.max) {
			if (customErrorLabels?.maxNumberFieldErrLabel) {
				errors.push(customErrorLabels.maxNumberFieldErrLabel);
			} else {
				errors.push(`${field.name} ${defaultErrorLabels.maxNumberFieldErrLabel}`);
			}
		}

		if (value < field.min) {
			if (customErrorLabels?.minNumberFieldErrLabel) {
				errors.push(customErrorLabels.minNumberFieldErrLabel);
			} else {
				errors.push(`${field.name} ${defaultErrorLabels.minNumberFieldErrLabel}`);
			}
		}
	}

	if (errors.length) {
		return errors;
	}

	return null;
};

const validateForm = (data: CSFormData, customErrorLabels?: CSFormErrorLabels) => {
	let validationResults: Array<object> = [];
	data.forEach(({ sectionKey, fields }) => {
		const evaluatedFields = fields.filter((field) => field.fieldType !== 'CUSTOM' && field.fieldType !== 'CUSTOM-MODAL')
			.map((field) => {
				const { name, value } = field as Exclude<CSFormFieldData, CSFormCustomModalFieldProps>;
				const errorMessage = validateField(field, value, customErrorLabels);
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
	defaultErrorLabels,
};
