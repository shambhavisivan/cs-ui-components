export default {
	name: 'CSFormErrorLabels',
	type: 'attributes',
	data: [
		{
			name: 'requiredFieldErrLabel',
			link: '/cs-form/form#custom-error-labels',
			types: 'string',
			description: 'Set the custom error label for the field requiredness validation.'
		}, {
			name: 'maxNumberFieldErrLabel',
			link: '/cs-form/form#custom-error-labels',
			types: 'string',
			description: 'Set the custom error label for the number field max attribute validation.'
		}, {
			name: 'minNumberFieldErrLabel',
			link: '/cs-form/form#custom-error-labels',
			types: 'string',
			description: 'Set the custom error label for the number field min attribute validation.'
		}, {
			name: 'maxLengthTextFieldErr',
			link: '/cs-form/form#custom-error-labels',
			types: 'string',
			description: 'Set the custom error label for the number field maxLength attribute validation.'
		}
	]
};
