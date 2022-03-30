export default {
	name: 'CSDataTable',
	type: 'props',
	data: [
		{
			name: 'columns',
			link: '/cs-ui/data-table#base-usage',
			customTypes: {
				name: 'Array<CSDataTableColumn>',
				types: 'See CSDataTable Column Attributes'
			},
			description: 'Define table columns. See CSDataTable Column Attributes for details.'
		}, {
			name: 'rows',
			link: '/cs-ui/data-table#base-usage',
			customTypes: {
				name: 'Array<CSDataTableRow>',
				types: 'See CSDataTable Row Attributes'
			},
			description: 'Define table rows. See CSDataTable Row Attributes for details.'
		}, {
			name: 'borderless',
			link: '/cs-ui/data-table#borders',
			types: 'boolean',
			default: 'false',
			description: 'Remove row dividers.'
		}, {
			name: 'collapsible',
			link: '/cs-ui/data-table#basic-hierarchy',
			types: 'boolean',
			default: 'true',
			description: 'Set whether the table should display collapsibility toggles.'
		}, {
			name: 'columnDividers',
			link: '/cs-ui/data-table#borders',
			types: 'boolean',
			default: 'false',
			description: 'Show column dividers.'
		}, {
			name: 'defaultCollapsed',
			link: '/cs-ui/data-table#basic-hierarchy',
			types: 'boolean',
			default: 'true',
			description: 'Control whether subsections or children should be collapsed by default.'
		}, {
			name: 'density',
			link: '/cs-ui/data-table#density-&-spacing',
			customTypes: {
				name: 'CSDataTableDensity',
				types: [`'compact'`, `'comfortable'`, `'spacious'`]
			},
			default: `'compact'`,
			description: 'Set the spacing level between the data and the edges of a cell.'
		}, {
			name: 'disableHover',
			link: '/cs-ui/data-table#row-distinction-styles',
			types: 'boolean',
			default: 'false',
			description: 'Disable hover styles and transitions.'
		}, {
			name: 'headerCheckbox',
			link: '/cs-ui/data-table#header-checkbox',
			customTypes: {
				name: 'CSCheckboxProps',
				types: 'See CSCheckbox'
			},
			description: 'Render a checkbox in the header when selection is on.'
		}, {
			name: 'headless',
			link: '/cs-ui/data-table#header-display',
			types: 'boolean',
			default: 'false',
			description: 'Remove the table header.'
		}, {
			name: 'indeterminateKeys',
			link: '/cs-ui/data-table#advanced-checkbox-selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are marked as indeterminate.'
		}, {
			name: 'maxHeight',
			link: '/cs-ui/data-table#table-height',
			types: 'string',
			description: 'Set the max-height property for the table.'
		}, {
			name: 'multiselect',
			link: '/cs-ui/data-table#basic-checkbox-selection',
			types: 'boolean',
			default: 'false',
			description: 'Control whether the table should support multiple selections.'
		}, {
			name: 'onCollapseClick',
			link: '/cs-ui/data-table#custom-hierarchy-toggles',
			types: '(event, row) => void',
			description: 'Handler method for overriding the subsection or children toggle button behaviour.'
		}, {
			name: 'onScroll',
			link: '/cs-ui/data-table#event-handling',
			types: '(event) => void',
			description: 'Handler method for scroll event.'
		}, {
			name: 'onSelectChange',
			link: '/cs-ui/data-table#basic-checkbox-selection',
			types: '(event, row) => void',
			description: 'Handler method for changing the selection.'
		}, {
			name: 'readOnlyKeys',
			link: '/cs-ui/data-table#advanced-checkbox-selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are read-only.'
		}, {
			name: 'rowHeight',
			link: '/cs-ui/data-table#row-height',
			types: 'string',
			description: 'Set a custom row height. Individual rows are able to override this setting.'
		}, {
			name: 'selectable',
			link: '/cs-ui/data-table#basic-checkbox-selection',
			types: 'boolean',
			default: 'false',
			description: 'Make the table selectable.'
		}, {
			name: 'selectedKeys',
			link: '/cs-ui/data-table#basic-checkbox-selection',
			types: ['React.ReactText', 'Array<React.ReactText>'],
			description: 'Set which rows are selected.'
		}, {
			name: 'selectionType',
			link: '/cs-ui/data-table#whole-row-selection',
			customTypes: {
				name: 'CSDataTableSelectionType',
				types: [`'row'`, `'checkbox`]
			},
			description: 'Render selection as checkboxes or clickable rows.'
		}, {
			name: 'stickyHeader',
			link: '/cs-ui/data-table#header-display',
			types: 'boolean',
			default: 'true',
			description: 'Control whether the header should stay fixed when scrolling.'
		}, {
			name: 'striped',
			link: '/cs-ui/data-table#row-distinction-styles',
			types: 'boolean',
			default: 'false',
			description: 'Alternate backgrounds between odd and even rows.'
		}, {
			name: 'subsectionRender',
			link: '/cs-ui/data-table#basic-subsections',
			types: '(row) => CSDataTableElement',
			description: 'Generate a collapsible row subsection.'
		}, {
			name: 'id',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Set an ID for the table.'
		}, {
			name: 'className',
			link: '/cs-ui/data-table#ids-&-classes',
			types: 'string',
			description: 'Apply custom CSS classes to the table.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the table.'
		}
	]
};
