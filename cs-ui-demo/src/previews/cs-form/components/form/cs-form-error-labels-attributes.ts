export default {
	name: 'CSFormErrorLabels',
	type: 'attributes',
	data: [
		{
			name: 'requiredFieldErrLabel',
			types: 'string',
			description: 'Set the custom error label for the field requiredness validation.'
		}, {
			name: 'maxNumberFieldErrLabel',
			types: 'string',
			description: 'Set the custom error label for the number field max attribute validation.'
		}, {
			name: 'minNumberFieldErrLabel',
			types: 'string',
			description: 'Set the custom error label for the number field min attribute validation.'
		}, {
			name: 'maxLengthTextFieldErr',
			types: 'string',
			description: 'Set the custom error label for the number field maxLength attribute validation.'
		}
	]
};
