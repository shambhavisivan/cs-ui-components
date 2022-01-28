export default {
	name: 'CSTree',
	type: 'props',
	data: [
		{
			name: 'items',
			required: true,
			customTypes: {
				name: 'Array<CSTreeItemInterface>',
				types: 'See CSTreeItem Attributes'
			},
			description: 'Define tree items. See CSTree Item Attributes for details.'
		}, {
			name: 'activeKey',
			types: 'React.ReactText',
			description: 'Set which item is active.'
		}, {
			name: 'collapsible',
			types: 'boolean',
			default: 'true',
			description: 'Set whether the tree should display collapsibility toggles.'
		}, {
			name: 'defaultCollapsed',
			types: 'boolean',
			default: 'true',
			description: 'Control whether children should be collapsed by default.'
		}, {
			name: 'displayActionsOnHover',
			types: 'boolean',
			default: 'false',
			description: 'Control whether to only show actions on hover or focus.'
		}, {
			name: 'indeterminateKeys',
			types: 'Array<React.ReactText>',
			description: 'Set which items are marked as indeterminate.'
		}, {
			name: 'itemHeight',
			types: 'string',
			description: 'Set a custom item height. Individual items are able to override this setting.'
		}, {
			name: 'onItemClick',
			types: '(event, item) => void',
			description: 'Handler method for clicking on an item.'
		}, {
			name: 'onSelectChange',
			types: '(event, item) => void',
			description: 'Handler method for changing the selection.'
		}, {
			name: 'readOnlyKeys',
			types: 'Array<React.ReactText>',
			description: 'Set which items are marked as read-only.'
		}, {
			name: 'selectable',
			types: 'boolean',
			default: 'false',
			description: 'Make the tree selectable.'
		}, {
			name: 'selectedKeys',
			types: 'Array<React.ReactText>',
			description: 'Set which items are selected.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set an ID for the tree.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the tree.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the tree.'
		}
	]
};
