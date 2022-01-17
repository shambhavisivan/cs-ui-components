export default {
	name: 'CSFormCustomModal',
	type: 'attributes',
	data: [
		{
			name: 'header',
			customTypes: {
				name: 'CSFormModalHeaderAttributes',
				types: 'See CSFormModalHeader Attributes'
			},
			required: true,
			description: 'Set modal header.'

		}, {
			name: 'body',
			customTypes: {
				name: 'CSFormModalBodyAttributes',
				types: 'See CSFormModalBody Attributes'
			},
			required: true,
			description: 'Set modal body.'

		}, {
			name: 'footer',
			customTypes: {
				name: 'CSFormModalFooterAttributes',
				types: 'See CSFormModalFooter Attributes'
			},
			description: 'Set modal footer.'
		}, {
			name: 'animated',
			types: 'boolean',
			default: 'true',
			description: 'Control whether the modal should have animations.'
		}, {
			name: 'closeButton',
			types: 'boolean',
			default: 'false',
			description: 'Show the close button.'
		}, {
			name: 'loadingText',
			types: 'string',
			description: 'Set which text to show while the loading state is on.'
		}, {
			name: 'onClose',
			types: '(event) => void',
			description: 'Handler method for closing the modal.'
		}, {
			name: 'outerClickClose',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the modal should be closed on outside clicks.'
		}, {
			name: 'size',
			customTypes: {
				name: 'CSModalSize',
				types: [
					`'auto'`,
					`'xsmall'`,
					`'small'`,
					`'medium'`,
					`'large'`,
					`'xlarge'`
				]
			},
			default: `'auto'`,
			description: 'Set the modal size.'
		}, {
			name: 'style',
			types: 'object',
			description: 'Add custom styles as inline css.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the modal.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the modal wrapper.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the modal overlay div.'
		}
	]
};
