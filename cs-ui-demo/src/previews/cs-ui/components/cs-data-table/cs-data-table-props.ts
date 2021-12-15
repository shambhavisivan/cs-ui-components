export default {
	name: 'CSDataTable',
	type: 'props',
	data: [
		{
			name: 'columns',
			customTypes: {
				name: 'Array<CSDataTableColumn>',
				types: 'See CSDataTable Column Attributes'
			},
			description: 'Define table columns. See CSDataTable Column Attributes for details.'
		}, {
			name: 'rows',
			types: 'boolean',
			description: 'Define table rows. See CSDataTable Row Attributes for details.'
		}, {
			name: 'borderless',
			types: 'boolean',
			default: 'false',
			description: 'Remove row dividers.'
		}, {
			name: 'collapsible',
			types: 'boolean',
			default: 'true',
			description: 'Set whether the table should display collapsibility toggles.'
		}, {
			name: 'columnDividers',
			types: 'boolean',
			default: 'false',
			description: 'Show column dividers.'
		}, {
			name: 'defaultCollapsed',
			types: 'boolean',
			default: 'false',
			description: 'Control whether subsections or children should be collapsed by default.'
		}, {
			name: 'density',
			customTypes: {
				name: 'CSDataTableDensity',
				types: [`'compact'`, `'comfortable'`, `'spacious'`]
			},
			default: `'compact'`,
			description: 'Set the spacing level between the data and the edges of a cell.'
		}, {
			name: 'disableHover',
			types: 'boolean',
			default: 'false',
			description: 'Disable hover styles and transitions.'
		}, {
			name: 'headerCheckbox',
			customTypes: {
				name: 'CSCheckboxProps',
				types: 'See CSCheckbox'
			},
			description: 'Render a checkbox in the header when selection is on.'
		}, {
			name: 'headless',
			types: 'boolean',
			default: 'false',
			description: 'Remove the table header.'
		}, {
			name: 'indeterminateKeys',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are marked as indeterminate.'
		}, {
			name: 'maxHeight',
			types: 'string',
			description: 'Set the max-height property for the table.'
		}, {
			name: 'multiselect',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the table should support multiple selections.'
		}, {
			name: 'onCollapseClick',
			types: '(event, row) => void',
			description: 'Handler method for overriding the subsection or children toggle button behaviour.'
		}, {
			name: 'onSelectChange',
			types: '(event, row) => void',
			description: 'Handler method for changing the selection.'
		}, {
			name: 'readOnlyKeys',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are read-only.'
		}, {
			name: 'rowHeight',
			types: 'string',
			description: 'Set a custom row height. Individual rows are able to override this setting.'
		}, {
			name: 'selectable',
			types: 'boolean',
			default: 'false',
			description: 'Make the table selectable.'
		}, {
			name: 'selectedKeys',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are selected.'
		}, {
			name: 'selectionType',
			customTypes: {
				name: 'CSDataTableSelectionType',
				types: [`'row'`, `'checkbox`]
			},
			description: 'Render selection as checkboxes or clickable rows.'
		}, {
			name: 'stickyHeader',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the header should stay fixed when scrolling.'
		}, {
			name: 'striped',
			types: 'boolean',
			default: 'false',
			description: 'Alternate backgrounds between odd and even rows.'
		}, {
			name: 'subsectionRender',
			types: '(row) => CSDataTableElement',
			description: 'Generate a collapsible row subsection.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set an ID for the table.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the table.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the table.'
		}
	]
};
