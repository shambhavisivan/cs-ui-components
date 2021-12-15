export default {
	name: 'CSDataTable Column',
	type: 'attributes',
	data: [
		{
			name: 'key',
			required: true,
			types: 'string',
			description: 'Define which key inside the row data object should be used to display cell data inside the column.'
		}, {
			name: 'align',
			default: `'left'`,
			customTypes: {
				name: 'CSDataTableColumnAlign',
				types: [`'left'`, `'center`, `'right'`]
			},
			description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
		}, {
			name: 'cellClassName',
			customTypes: {
				name: 'CSDataTableCellClassName',
				types: ['string', '(row) => string']
			},
			description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
		}, {
			name: 'columnClassName',
			types: 'string',
			description: 'Set a custom class for all the header and body cells inside a column.'
		}, {
			name: 'grow',
			default: '1',
			types: 'number',
			description: 'Set the flex-grow attribute for a column.'
		}, {
			name: 'render',
			types: '(row) => CSDataTableCell',
			description: 'Render custom content inside a cell.'
		}, {
			name: 'header',
			customTypes: {
				name: 'CSDataTableCell',
				types: ['React.ReactElement', 'React.ReactText']
			},
			description: 'Set the header title.'
		}, {
			name: 'width',
			types: 'string',
			description: 'Define column width. This overrides the grow attribute.'
		}, {
			name: 'wrap',
			default: 'false',
			types: 'boolean',
			description: 'Enable cell content wrapping and disable ellipses.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the table header cell.'
		}
	]
};
