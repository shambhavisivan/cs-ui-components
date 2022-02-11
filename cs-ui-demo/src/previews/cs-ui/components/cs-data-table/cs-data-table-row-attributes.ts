export default {
	name: 'CSDataTable Row',
	type: 'attributes',
	data: [
		{
			name: 'key',
			link: '/cs-ui/data-table#base-usage',
			required: true,
			types: 'React.ReactText',
			description: 'Unique row identifier.'
		}, {
			name: 'children',
			link: '/cs-ui/data-table#basic-hierarchy',
			types: 'Array<CSDataTableRow>',
			description: 'Add child rows to the current rows. Since the row-child pattern renders recursively, it can be repeated indefinitely.'
		}, {
			name: 'collapsible',
			link: '/cs-ui/data-table#basic-hierarchy',
			type: 'boolean',
			default: 'true',
			description: 'Define whether the row should be collapsible.'
		}, {
			name: 'data',
			link: '/cs-ui/data-table#base-usage',
			customTypes: {
				name: 'CSDataTableRowData',
				types: '{ [key: string]: any }'
			},
			description: 'Object of cell data where the column key corresponds to the cell attribute name.'
		}, {
			name: 'defaultCollapsed',
			link: '/cs-ui/data-table#basic-hierarchy',
			type: 'boolean',
			description: 'Define whether the row should be collapsed by default.'
		}, {
			name: 'height',
			link: '/cs-ui/data-table#row-height',
			types: 'string',
			description: 'Define row height. This overrides the global rowHeight property.'
		}, {
			name: 'render',
			link: '/cs-ui/data-table#rendering-custom-rows',
			customTypes: {
				name: 'CSDataTableRender',
				types: '(row) => CSDataTableElement'
			},
			default: 'true',
			description: 'Render custom content instead of a row.'
		}, {
			name: 'selectable',
			link: '/cs-ui/data-table#restricting-selectability',
			type: 'boolean',
			description: 'Define whether the row should be selectable'
		}, {
			name: 'id',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Set an ID for the table row.'
		}, {
			name: 'className',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the table row.'
		}
	]
};
