import { CSFormSectionProps } from '../types/cs-form-section-types';
import { CSFormFieldDefinition } from '../types/cs-form-field-types';

export interface CSFormSectionDefinition extends Omit<CSFormSectionProps, 'fields'> {
	fields: Array<CSFormFieldDefinition>;
}

export type CSFormDefinition = Array<CSFormSectionDefinition>;

const arrayToMap = (array: Array<Record<string, any>>) => {
	const map = new Map<String, any>();
	array.forEach((item) => {
		if (item) {
			const [key, value] = Object.entries(item)[0];
			map.set(key, value);
		}
	});
	return map;
};

export const defineFormData = (formDefinition: CSFormDefinition, data?: Array<Record<string, any>>, errors?: Array<Record<string, any>>) => {
	let formData = [];
	const dataMap = data?.length > 0 ? arrayToMap(data) : undefined;
	const errorMap = errors?.length > 0 ? arrayToMap(errors) : undefined;

	formData = formDefinition.map(({ fields, ...rest }) => {
		const newFields = fields.map((field) => {
			let newField;
			if (field.fieldType !== 'CUSTOM-MODAL') {
				if (dataMap?.has(field?.name)) {
					newField = { ...field, value: dataMap.get(field.name) };
				} else {
					newField = field;
				}

				if (errorMap?.has(field?.name)) {
					newField = { ...newField, error: true, errorMessage: errorMap.get(field.name) };
				} else if (Object.keys(newField).indexOf('errorMessage')) {
					delete newField.error;
					delete newField.errorMessage;
				}
			} else {
				newField = { ...field };
			}
			return newField;
		});

		return { ...rest, fields: newFields };
	});

	return formData;
};
