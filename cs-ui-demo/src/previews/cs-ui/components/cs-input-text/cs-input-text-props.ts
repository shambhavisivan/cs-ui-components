export default {
	name: 'CSInputText',
	type: 'props',
	data: [
		{
			name: 'label',
			link: '/cs-ui/input-text#label-options',
			required: true,
			types: 'string',
			description: 'Set the text input label.'
		}, {
			name: 'actions',
			link: '/cs-ui/input-text#custom-data',
			customTypes: {
				name: 'CSInputTextActionsProps',
				types: 'Array<CSInputTextActionsProps>'
			},
			description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
		}, {
			name: 'borderRadius',
			link: '/cs-ui/input-text#general',
			default: '0.25rem',
			types: 'string',
			description: 'Set a border radius style.'
		}, {
			name: 'className',
			link: '/cs-ui/input-text#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the input text.'
		}, {
			name: 'disabled',
			link: '/cs-ui/input-text#restrictions',
			default: 'false',
			types: 'boolean',
			description: 'Disable the text input.'
		}, {
			name: 'error',
			link: '/cs-ui/input-text#error',
			default: 'false',
			types: 'boolean',
			description: 'Toggle the error state.'
		}, {
			name: 'errorMessage',
			link: '/cs-ui/input-text#error',
			default: 'false',
			customTypes: {
				name: 'CSFieldErrorMsgType',
				types: ['string', 'Array<string>']
			},
			description: 'Set the error message or messages for the text input.'
		}, {
			name: 'errorTooltip',
			link: '/cs-ui/input-text#error',
			types: 'boolean',
			description: 'Show an error tooltip for the text input.'
		}, {
			name: 'helpText',
			link: '/cs-ui/input-text#label-options',
			types: 'string',
			description: 'Set the text to be displayed in the tooltip.'
		}, {
			name: 'hidden',
			link: '/cs-ui/input-text#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control the hidden attribute.'
		}, {
			name: 'icons',
			link: '/cs-ui/input-text#custom-data',
			customTypes: {
				name: 'CSInputTextIconProps',
				types: 'Array<CSInputTextIconProps>'
			},
			description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
		}, {
			name: 'id',
			link: '/cs-ui/input-text#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the text input.'
		}, {
			name: 'labelHidden',
			link: '/cs-ui/input-text#label-options',
			types: 'boolean',
			default: 'false',
			description: 'Hide the text input label.'
		}, {
			name: 'labelTitle',
			link: '/cs-ui/input-text#label-options',
			types: 'boolean',
			description: 'Control whether to set the title attribute.'
		}, {
			name: 'maxLength',
			link: '/cs-ui/input-text#input-options',
			types: 'number',
			description: 'Set the maximum length of the value.'
		}, {
			name: 'name',
			link: '/cs-ui/input-text#input-options',
			types: 'string',
			description: 'Set the text input name attribute.'
		}, {
			name: 'onBlur',
			link: '/cs-ui/input-text#event-handling',
			types: '(event) => void',
			description: 'Handler method for the blur event.'
		}, {
			name: 'onChange',
			link: '/cs-ui/input-text#event-handling',
			types: '(event) => void',
			description: 'Handler method for the change event.'
		}, {
			name: 'onClick',
			link: '/cs-ui/input-text#event-handling',
			types: '(event) => void',
			description: 'Handler method for the click event.'
		}, {
			name: 'onFocus',
			link: '/cs-ui/input-text#event-handling',
			types: '(event) => void',
			description: 'Handler method for the focus event.'
		}, {
			name: 'onKeyDown',
			link: '/cs-ui/input-text#event-handling',
			types: '(event) => void',
			description: 'Handler method for the keydown event.'
		}, {
			name: 'placeholder',
			link: '/cs-ui/input-text#input-options',
			types: 'string',
			description: 'Set a text input placeholder.'
		}, {
			name: 'readOnly',
			link: '/cs-ui/input-text#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to apply the readonly attribute.'
		}, {
			name: 'required',
			link: '/cs-ui/input-text#restrictions',
			types: 'boolean',
			default: 'false',
			description: 'Make the text input required.'
		}, {
			name: 'title',
			link: '/cs-ui/input-text#input-options',
			types: 'string',
			description: 'Set the text input title.'
		}, {
			name: 'tooltipPosition',
			link: '/cs-ui/input-text#label-options',
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
			description: 'Set the tooltip position for the text input.'
		}, {
			name: 'value',
			link: '/cs-ui/input-text#base-usage',
			types: 'string',
			description: 'Set the text input value.'
		}
	]
};
