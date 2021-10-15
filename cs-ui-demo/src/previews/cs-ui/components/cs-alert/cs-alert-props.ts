export default [
	{
		name: 'variant',
		required: true,
		customTypes: {
			name: 'CSAlertVariant',
			types: [
				`'info'`,
				`'warning'`,
				`'error'`,
				`'base'`
			]
		},
		description: 'Set the color and icon variant of the alert.'
	}, {
		name: 'closeButton',
		types: 'boolean',
		default: 'false',
		description: 'Show the close button.'
	}, {
		name: 'iconHidden',
		types: 'boolean',
		default: 'false',
		description: 'Show or hide the icon.'
	}, {
		name: 'iconName',
		types: 'string',
		description: 'Override the default icon defined by the variant.'
	}, {
		name: 'iconOrigin',
		customTypes: {
			name: 'CSAlertIconOrigin',
			types: [`'slds'`, `'cs'`]
		},
		default: `'slds'`,
		description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
	}, {
		name: 'onClose',
		types: '(event) => void',
		description: 'Handler method for closing the alert.'
	}, {
		name: 'styleFormat',
		customTypes: {
			name: 'CSAlertStyleFormat',
			types: [`'default'`, `'scoped'`]
		},
		default: `'default'`,
		description: 'Determine size of alert and icons.'
	}, {
		name: 'styleType',
		customTypes: {
			name: 'CSAlertStyleType',
			types: [`'default'`, `'light'`]
		},
		default: `'default'`,
		description: 'Determine style of text and background.'
	}, {
		name: 'text',
		types: ['string', 'Array<string>'],
		description: 'Set textual content of the alert.'
	}, {
		name: 'textAlign',
		customTypes: {
			name: 'CSAlertTextAlign',
			types: [`'left'`, `'center'`]
		},
		default: `'left'`,
		description: 'Align text inside the alert.'
	}, {
		name: 'id',
		types: 'string',
		description: 'Set the ID for the alert.'
	}, {
		name: 'className',
		types: 'string',
		description: 'Apply custom CSS classes to the alert.'
	}, {
		name: 'children',
		types: 'any',
		description: 'This component supports custom content passed as children.'
	}, {
		name: '[key: string]',
		types: 'any',
		description: 'Spreads the rest of the props to the alert div.'
	}
];
