export default {
	name: 'CSDataTable Column',
	type: 'attributes',
	data: [
		{
			name: 'key',
			link: '/cs-ui/data-table#base-usage',
			required: true,
			types: 'string',
			description: 'Define which key inside the row data object should be used to display cell data inside the column.'
		}, {
			name: 'align',
			link: '/cs-ui/data-table#cell-alignment',
			default: `'left'`,
			customTypes: {
				name: 'CSDataTableColumnAlign',
				types: [`'left'`, `'center`, `'right'`]
			},
			description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
		}, {
			name: 'cellClassName',
			link: '/cs-ui/data-table#ids-&-classes',
			customTypes: {
				name: 'CSDataTableCellClassName',
				types: ['string', '(row) => string']
			},
			description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
		}, {
			name: 'columnClassName',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Set a custom class for all the header and body cells inside a column.'
		}, {
			name: 'grow',
			link: '/cs-ui/data-table#column-width',
			default: '1',
			types: 'number',
			description: 'Set the flex-grow attribute for a column.'
		}, {
			name: 'render',
			link: '/cs-ui/data-table#rendering-custom-cells',
			types: '(row) => CSDataTableCell',
			description: 'Render custom content inside a cell.'
		}, {
			name: 'header',
			link: '/cs-ui/data-table#custom-header-cells',
			customTypes: {
				name: 'CSDataTableCell',
				types: ['React.ReactElement', 'React.ReactText']
			},
			description: 'Set the header title.'
		}, {
			name: 'headerTitle',
			link: '/cs-ui/data-table#titles',
			default: 'false',
			types: 'boolean',
			description: 'Determine whether a header cell should have a title based on its content.'
		}, {
			name: 'title',
			link: '/cs-ui/data-table#titles',
			default: 'false',
			types: 'boolean',
			description: 'Determine whether a column\'s cells should each have a title based on their content.'
		}, {
			name: 'width',
			link: '/cs-ui/data-table#column-width',
			types: 'string',
			description: 'Define column width. This overrides the grow attribute.'
		}, {
			name: 'wrap',
			link: '/cs-ui/data-table#content-wrapping',
			default: 'false',
			types: 'boolean',
			description: 'Enable cell content wrapping and disable ellipses.'
		}, {
			name: 'className',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the table header cell.'
		}
	]
};
