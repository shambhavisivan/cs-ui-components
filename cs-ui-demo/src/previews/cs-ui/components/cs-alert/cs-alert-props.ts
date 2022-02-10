export default {
	name: 'CSAlert',
	type: 'props',
	data: [
		{
			name: 'variant',
			link: '/cs-ui/alert#variants',
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
			link: '/cs-ui/alert#closing',
			types: 'boolean',
			default: 'false',
			description: 'Show the close button.'
		}, {
			name: 'iconHidden',
			link: '/cs-ui/alert#icons',
			types: 'boolean',
			default: 'false',
			description: 'Show or hide the icon.'
		}, {
			name: 'iconName',
			link: '/cs-ui/alert#icons',
			types: 'string',
			description: 'Override the default icon defined by the variant.'
		}, {
			name: 'iconOrigin',
			link: '/cs-ui/alert#icons',
			customTypes: {
				name: 'CSAlertIconOrigin',
				types: [`'slds'`, `'cs'`]
			},
			default: `'slds'`,
			description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
		}, {
			name: 'onClose',
			link: '/cs-ui/alert#closing',
			types: '(event) => void',
			description: 'Handler method for closing the alert.'
		}, {
			name: 'styleFormat',
			link: '/cs-ui/alert#emphasis',
			customTypes: {
				name: 'CSAlertStyleFormat',
				types: [`'default'`, `'scoped'`]
			},
			default: `'default'`,
			description: 'Determine size of alert and icons.'
		}, {
			name: 'styleType',
			link: '/cs-ui/alert#styling',
			customTypes: {
				name: 'CSAlertStyleType',
				types: [`'default'`, `'light'`]
			},
			default: `'default'`,
			description: 'Determine style of text and background.'
		}, {
			name: 'text',
			link: '/cs-ui/alert#text',
			types: ['string', 'Array<string>'],
			description: 'Set textual content of the alert.'
		}, {
			name: 'textAlign',
			link: '/cs-ui/alert#alignment',
			customTypes: {
				name: 'CSAlertTextAlign',
				types: [`'left'`, `'center'`]
			},
			default: `'left'`,
			description: 'Align text inside the alert.'
		}, {
			name: 'id',
			link: '/cs-ui/alert#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the alert.'
		}, {
			name: 'className',
			link: '/cs-ui/alert#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the alert.'
		}, {
			name: 'children',
			link: '/cs-ui/alert#children',
			types: 'any',
			description: 'This component supports custom content passed as children.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the alert div.'
		}
	]
};
