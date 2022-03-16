export default {
	name: 'CSRadio',
	type: 'props',
	data: [
		{
			name: 'label',
			link: '/cs-ui/radio#base-usage',
			required: true,
			types: 'string',
			description: 'Set the radio label.'
		}, {
			name: 'options',
			link: '/cs-ui/radio#base-usage',
			required: true,
			types: 'array',
			description: 'Set the radio options.'
		}, {
			name: 'disabled',
			link: '/cs-ui/radio#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Disable the radio.'
		}, {
			name: 'disabledKeys',
			link: '/cs-ui/radio#restrictions',
			types: 'Array',
			description: 'Control the disabled radio options.'
		}, {
			name: 'error',
			link: '/cs-ui/radio#error',
			types: 'boolean',
			default: 'false',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-ui/radio#error',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the radio.'
		}, {
			name: 'helpText',
			link: '/cs-ui/radio#label-options',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-ui/radio#restrictions',
			types: 'boolean',
			description: 'Control the hidden attribute.'
		}, {
			name: 'labelHidden',
			link: '/cs-ui/radio#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Hide the radio label.'
		}, {
			name: 'labelTitle',
			link: '/cs-ui/radio#label-options',
			types: 'boolean',
			description: 'Control whether to set the title attribute.'
		}, {
			name: 'onBlur',
			link: '/cs-ui/radio#event-handling',
			types: '(event) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onClick',
			link: '/cs-ui/radio#event-handling',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onChange',
			link: '/cs-ui/radio#event-handling',
			types: '(event) => void',
			description: 'Handler method for the change event.'
		}, {
			name: 'onFocus',
			link: '/cs-ui/radio#event-handling',
			types: '(event) => void',
			description: 'Handler method for the focus event.'
		}, {
			name: 'onKeyDown',
			link: '/cs-ui/radio#event-handling',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'readOnly',
			link: '/cs-ui/radio#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-ui/radio#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Set the radio to required.'
		}, {
			name: 'selectedKey',
			link: '/cs-ui/radio#selection',
			types: 'React.Text',
			description: 'Control the selected radio option.'
		}, {
			name: 'tooltipPosition',
			link: '/cs-ui/radio#label-options',
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
			link: '/cs-ui/radio#general',
			customTypes: {
				name: 'CSRadioVariant',
				types: [`'neutral'`, `'brand'`]
			},
			default: `'neutral'`,
			description: 'Set the radio variant.'
		}, {
			name: 'id',
			link: '/cs-ui/radio#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the radio.'
		}, {
			name: 'className',
			link: '/cs-ui/radio#ids-&-classes',
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
