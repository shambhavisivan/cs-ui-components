export default {
	name: 'CSFormCustomField Specific',
	type: 'attributes',
	data: [
		{
			name: 'render',
			type: 'ReactElement',
			required: true,
			description: 'Control the indeterminate state of the checkbox.'
		}, {
			name: 'onBlur',
			type: '(value?: any) => any',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onChange',
			type: '(value?: any) => any',
			description: 'Handler method for the change event.'
		}, {
			name: 'onFocus',
			type: '(value?: any) => any',
			description: 'Handler method for the focus event.'
		}, {
			name: '[key: string]',
			type: 'any',
			description: 'Arbitrary support for custom field.'
		}
	]
};
