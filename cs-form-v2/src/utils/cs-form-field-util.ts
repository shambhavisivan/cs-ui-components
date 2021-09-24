import { CSFormData } from '../types/cs-form-types';

const getFieldData = (data: CSFormData, sectionKey: string, fieldName: string) => {
	let fieldData = {};

	fieldData = data.find((section) => section.sectionKey === sectionKey)
		.fields.find((field) => field.name === fieldName);

	return fieldData;
};

export default getFieldData;
