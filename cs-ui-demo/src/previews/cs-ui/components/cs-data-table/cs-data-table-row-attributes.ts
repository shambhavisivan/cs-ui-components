export default {
	name: 'CSDataTable Row',
	type: 'attributes',
	data: [
		{
			name: 'key',
			required: true,
			types: 'React.ReactText',
			description: 'Unique row identifier.'
		}, {
			name: 'children',
			types: 'Array<CSDataTableRow>',
			description: 'Add child rows to the current rows. Since the row-child pattern renders recursively, it can be repeated indefinitely.'
		}, {
			name: 'collapsible',
			type: 'boolean',
			default: 'true',
			description: 'Define whether the row should be collapsible.'
		}, {
			name: 'data',
			customTypes: {
				name: 'CSDataTableRowData',
				types: '{ [key: string]: any }'
			},
			description: 'Object of cell data where the column key corresponds to the cell attribute name.'
		}, {
			name: 'defaultCollapsed',
			type: 'boolean',
			description: 'Define whether the row should be collapsed by default.'
		}, {
			name: 'height',
			types: 'string',
			description: 'Define row height. This overrides the global rowHeight property.'
		}, {
			name: 'render',
			customTypes: {
				name: 'CSDataTableRender',
				types: '(row) => CSDataTableElement'
			},
			default: 'true',
			description: 'Render custom content instead of a row.'
		}, {
			name: 'selectable',
			type: 'boolean',
			description: 'Define whether the row should be selectable'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set an ID for the table row.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the table row.'
		}
	]
};
