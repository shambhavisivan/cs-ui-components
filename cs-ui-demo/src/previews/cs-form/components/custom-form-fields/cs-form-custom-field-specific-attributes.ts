export default {
	name: 'CSFormCustomField Specific',
	type: 'attributes',
	data: [
		{
			name: 'render',
			link: '/cs-form/custom-form-fields#custom-field',
			type: 'ReactElement',
			required: true,
			description: 'Control the indeterminate state of the checkbox.'
		}, {
			name: 'onBlur',
			link: '/cs-form/custom-form-fields#custom-field',
			type: '(value?: any) => any',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onChange',
			link: '/cs-form/custom-form-fields#custom-field',
			type: '(value?: any) => any',
			description: 'Handler method for the change event.'
		}, {
			name: 'onFocus',
			link: '/cs-form/custom-form-fields#custom-field',
			type: '(value?: any) => any',
			description: 'Handler method for the focus event.'
		}
	]
};
