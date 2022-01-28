export default {
	name: 'CSTree Item',
	type: 'attributes',
	data: [
		{
			name: 'key',
			required: true,
			types: 'React.ReactText',
			description: 'Define a unique key for every item.'
		}, {
			name: 'actions',
			customTypes: {
				name: 'Array<CSButtonProps>',
				types: 'See CSButton Props'
			},
			description: 'Display custom button controls next to the item.'
		}, {
			name: 'children',
			types: 'Array<CSTreeItemInterface>',
			description: 'Add child items to the current item. Since the item-child pattern renders recursively, it can be repeated indefinitely.'
		}, {
			name: 'collapsible',
			types: 'boolean',
			description: 'Define whether the item should be collapsible.'
		}, {
			name: 'defaultCollapsed',
			types: 'boolean',
			description: 'Define whether the item should be collapsed by default.'
		}, {
			name: 'displayActionsOnHover',
			types: 'boolean',
			description: 'Control whether to only show actions on hover or focus.'
		}, {
			name: 'render',
			types: '(item) => CSTreeElementType',
			customTypes: {
				name: 'CSTreeElementType',
				types: ['React.ReactElement', 'React.ReactText']
			},
			description: 'Render item content.'
		}, {
			name: 'selectable',
			types: 'boolean',
			description: 'Define whether the item should be selectable.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the tree item.'
		}
	]
};
