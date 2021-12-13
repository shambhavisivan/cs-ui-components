export default {
	name: 'CSFormErrorLabels',
	type: 'attributes',
	data: [
		{
			name: 'requiredFieldErrLabel',
			types: 'string',
			description: 'Set custom error label for field requiredness validation.'
		}, {
			name: 'maxNumberFieldErrLabel',
			types: 'string',
			description: 'Set custom error label for number field max attribute validation.'
		}, {
			name: 'minNumberFieldErrLabel',
			types: 'string',
			description: 'Set custom error label for number field min attribute validation.'
		}, {
			name: 'maxLengthTextFieldErr',
			types: 'string',
			description: 'Set custom error label for number field maxLength attribute validation.'
		}
	]
};
