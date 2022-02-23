export default {
	name: 'CSRadioOption',
	type: 'attributes',
	data: [
		{
			name: 'checked',
			required: 'true',
			types: 'boolean',
			description: 'Control the checked state of the radio option.'
		}, {
			name: 'label',
			required: 'true',
			types: 'string',
			description: 'Set the radio option label.'
		}, {
			name: 'name',
			required: 'true',
			types: 'string',
			description: 'Set the radio option name attribute.'
		}, {
			name: 'value',
			required: 'true',
			types: 'string',
			description: 'Set the radio option value.'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the radio option.'
		}, {
			name: 'readOnly',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set the radio option title.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the radio wrapper div.'
		}, {
			name: 'ariaInvalid',
			required: 'CSRadio',
			types: 'boolean',
			default: 'false',
			description: 'Indicate whether an element has an error.'
		}, {
			name: 'ariaRequired',
			required: 'CSRadio',
			types: 'boolean',
			default: 'false',
			description: 'Indicate whether an element is required.'
		}
	]
};
