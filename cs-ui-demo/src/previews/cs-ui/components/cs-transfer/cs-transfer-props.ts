export default {
	name: 'CSTransfer',
	type: 'props',
	data: [
		{
			name: 'items',
			link: '/cs-ui/transfer#base-usage',
			required: true,
			customTypes: {
				name: 'Array<CSTransferItemsType>',
				types: 'object'
			},
			description: 'Define an array of objects to be used as a data source. The object accepts key and label attributes. In case the key is within targetKeys, that item will be displayed in the target list.'
		}, {
			name: 'sourceLabel',
			link: '/cs-ui/transfer#label-options',
			required: true,
			types: 'string',
			description: 'Set the source list label.'
		}, {
			name: 'targetLabel',
			link: '/cs-ui/transfer#label-options',
			required: true,
			types: 'string',
			description: 'Set the target list label.'
		}, {
			name: 'helpText',
			link: '/cs-ui/transfer#label-options',
			customTypes: {
				name: 'CSTransferHelpText',
				types: 'object'
			},
			description: 'Set the text to be displayed in the transfer lists tooltip.'
		}, {
			name: 'onTransfer',
			link: '/cs-ui/transfer#transferring-items',
			types: '(key: ReactText | Array<ReactText>) => void',
			description: 'Handler method for the change event.'
		}, {
			name: 'oneWay',
			link: '/cs-ui/transfer#left-to-right-transfers',
			types: 'boolean',
			default: 'false',
			description: 'Only allow left-to-right transfers.'
		}, {
			name: 'searchable',
			link: '/cs-ui/transfer#search-for-items',
			types: 'boolean',
			default: 'false',
			description: 'Render a search bar for both lists.'
		}, {
			name: 'selectAll',
			link: '/cs-ui/transfer#select-all-items',
			types: 'boolean',
			default: 'false',
			description: 'Render a checkbox to select all items in a list. It can be only used with the check-list variant.'
		}, {
			name: 'targetKeys',
			link: '/cs-ui/transfer#data-management',
			types: 'Array<ReactText>',
			description: 'An array of keys corresponding to selected transfer items.'
		}, {
			name: 'variant',
			link: '/cs-ui/transfer#styling',
			customTypes: {
				name: 'CSTransferVariant',
				types: [`'simple-list'`, `'check-list'`]
			},
			default: `'simple-list'`,
			description: 'Set a transfer list variant.'
		}, {
			name: 'id',
			link: '/cs-ui/transfer#ids-&-classes',
			types: 'string',
			description: 'Set the ID for the transfer.'
		}, {
			name: 'className',
			link: '/cs-ui/transfer#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the transfer.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the transfer wrapper div.'
		}
	]
};
