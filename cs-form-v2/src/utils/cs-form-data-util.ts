import { CSFormSectionProps } from '../types/cs-form-section-types';
import { CSFormFieldDefinition, CSFormFieldData } from '../types/cs-form-field-types';

export interface CSFormSectionDefinition extends Omit<CSFormSectionProps, 'fields'> {
	fields: Array<CSFormFieldDefinition>;
}

export type CSFormDefinition = Array<CSFormSectionDefinition>;

const arrayToMap = (array: Array<Record<string, any>>) => {
	const map = new Map<String, any>();
	array.forEach((item) => {
		const [key, value] = Object.entries(item)[0];
		map.set(key, value);
	});
	return map;
};

export const defineFormData = (formDefinition: CSFormDefinition, data: Array<Record<string, any>>, errors?: Array<Record<string, any>>) => {
	let formData = [];
	const dataMap = arrayToMap(data);
	const errorMap = errors ? arrayToMap(errors) : undefined;

	formData = formDefinition.map(({ fields, ...rest }) => {
		const newFields = fields.map((field) => {
			let newField = { ...field } as CSFormFieldData;
			if (dataMap.has(field?.name)) {
				newField = { ...newField, value: dataMap.get(field.name) };
			} else if (field.fieldType !== 'CUSTOM') {
				newField = { ...newField, value: undefined };
			}

			if (errorMap?.has(field?.name)) {
				newField = { ...newField, errorMessage: errorMap.get(field.name) };
			}
			return newField;
		});

		return { ...rest, fields: newFields };
	});

	return formData;
};