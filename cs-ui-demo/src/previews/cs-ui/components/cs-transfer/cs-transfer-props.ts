export default {
	name: 'CSTransfer',
	type: 'props',
	data: [
		{
			name: 'items',
			required: true,
			customTypes: {
				name: 'Array<CSTransferItemsType>',
				types: 'object'
			},
			description: 'Define an array of objects to be used as a data source. The object accepts key and label attributes. In case the key is within targetKeys, that item will be displayed in the target list.'
		}, {
			name: 'sourceLabel',
			required: true,
			types: 'string',
			description: 'Set the source list label.'
		}, {
			name: 'targetLabel',
			required: true,
			types: 'string',
			description: 'Set the target list label.'
		}, {
			name: 'helpText',
			customTypes: {
				name: 'CSTransferHelpText',
				types: 'object'
			},
			description: 'Set the text to be displayed in the transfer lists tooltip.'
		}, {
			name: 'onTransfer',
			types: '(key: ReactText | Array<ReactText>) => void',
			description: 'Handler method for the change event.'
		}, {
			name: 'oneWay',
			types: 'boolean',
			default: 'false',
			description: 'Only allow left-to-right transfers.'
		}, {
			name: 'searchable',
			types: 'boolean',
			default: 'false',
			description: 'Render a search bar for both lists.'
		}, {
			name: 'selectAll',
			types: 'boolean',
			default: 'false',
			description: 'Render a checkbox to select all items in a list. It can be only used with the check-list variant.'
		}, {
			name: 'targetKeys',
			types: 'Array<ReactText>',
			description: 'An array of keys corresponding to selected transfer items.'
		}, {
			name: 'variant',
			customTypes: {
				name: 'CSTransferVariant',
				types: [`'simple-list'`, `'check-list'`]
			},
			default: `'simple-list'`,
			description: 'Set a transfer list variant.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the transfer.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the transfer.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the transfer wrapper div.'
		}
	]
};
