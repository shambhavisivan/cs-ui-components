export default {
	name: 'CSRadio',
	type: 'props',
	data: [
		{
			name: 'label',
			required: true,
			types: 'string',
			description: 'Set the radio label.'
		}, {
			name: 'options',
			required: true,
			types: 'array',
			description: 'Set the radio options.'
		}, {
			name: 'disabled',
			types: 'boolean',
			default: 'false',
			description: 'Disable the radio.'
		}, {
			name: 'disabledKeys',
			types: 'Array',
			description: 'Control the disabled radio options.'
		}, {
			name: 'error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the radio.'
		}, {
			name: 'helpText',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			types: 'boolean',
			description: 'Control the hidden attribute.'
		}, {
			name: 'labelHidden',
			types: 'boolean',
			default: 'false',
			description: 'Hide the radio label.'
		}, {
			name: 'labelTitle',
			types: 'boolean',
			description: 'Control whether to set the title attribute.'
		}, {
			name: 'onBlur',
			types: '(event) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClick',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onChange',
			types: '(event) => void',
			description: 'Handler method for the change event.'
		}, {
			name: 'onFocus',
			types: '(event) => void',
			description: 'Handler method for the focus event.'
		}, {
			name: 'onKeyDown',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'readOnly',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			types: 'boolean',
			default: 'false',
			description: 'Set the radio to required.'
		}, {
			name: 'selectedKey',
			types: 'React.Text',
			description: 'Control the selected radio option.'
		}, {
			name: 'tooltipPosition',
			customTypes: {
				name: 'CSTooltipPosition',
				types: [
					`'top-right'`,
					`'top-center'`,
					`'top-left'`,
					`'bottom-right'`,
					`'bottom-center'`,
					`'bottom-left'`,
					`'right-top'`,
					`'right-center'`,
					`'right-bottom'`,
					`'left-top'`,
					`'left-center'`,
					`'left-bottom'`
				]
			},
			default: `'top-right'`,
			description: 'Set the tooltip position for the radio.'
		}, {
			name: 'variant',
			customTypes: {
				name: 'CSRadioVariant',
				types: [`'neutral'`, `'brand'`]
			},
			default: `'neutral'`,
			description: 'Set the radio variant.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the radio.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the radio.'
		}, {
			name: 'children',
			customTypes: {
				name: 'CSRadioOptionChildren',
				types: ['<CSRadioOption />', 'any']
			},
			description: 'This component is designed to support CSRadioOption as a child.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the radio wrapper div.'
		}
	]
};
