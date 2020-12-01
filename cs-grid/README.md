cs-grid
------

cs-grid is a fully-featured and highly customizable React Typescript data grid, cs-grid is built on top of ag-Grid (https://www.ag-grid.com) and provides a standard CloudSense look and feel as well as providing cell renderers/editors for common attribute types.

Features
--------------

Besides the standard set of features you'd expect from any grid cs-grid includes:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection
* Cell renderers for simple data types of Text, Integer, Decimal, Date, Boolean, Currency and for reference data selection of Lookup, Multi-select lookup, picklist & multi-select picklist selection.

Release Notes
------------------
####1.2.42
 * Blank decimals no longer become NaN.
####1.2.41
 * Added event to clear sort on custom sort.
####1.2.40
 * Fixed border and focusing for date input field.
####1.2.39
 * Added optional `textInputFormat` prop to date colDef and implemented input for typing in dates if prop is present.
####1.2.38
 * Used colDef sort instead of column sort.
####1.2.37
 * Add colId to all column definitions to fix problems with aggrid column state caching
 * onSelectionChange interface corrected.
 * add extra undefined checks for props value.
 * select all checkbox hidden if multi select set to false.
 * dot notation is now valid in column names.
 * non-editable dates no longer show remove button.
####1.2.36
 * Included `customSort` as a new prop to achieve sorting.
####1.2.35
 * Enable cell flashing on success using `flashOnCellValueChange` property in coldefs.
 * `RowData.row_cell_notifications` is now an optional property.
 * `Row` has been deprecated in favour of `RowData`.
 * Lookup fields can now disable the filter on their grid by passing `hasFilter` to `LookupSearchColDef`

Usage Overview
--------------
#### Install dependencies

    $ npm install @cloudsense/cs-grid

#### Import the grid and styles

	import { CSGrid } from '@cloudsense/cs-grid';
	import '@cloudsense/cs-grid/css/styles.css';

### Set configuration

	const userInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const gridOptions = {
		columnDefs: [
			{
				cellType: 'Text',
				header: {
					label: 'Vehicle Make'
				},
				name: 'make',
				userInfo
			},
			{
				cellType: 'Text',
				header: {
					label: 'Model'
				},
				name: 'model',
				userInfo
			},
			{
				cellType: 'Currency',
				header: {
					label: 'Price'
				},
				name: 'price',
				userInfo
			},
			{
				cellType: 'Text',
				name: 'guid',
				userInfo,
				visible: false
			}
		],
		rowData: [
			{
				make: {
					cellValue: 'Fiat'
				},
				model: {
					cellValue: 'Uno'
				},
				price: {
					cellValue: 35000,
					errorMessage: 'Too expensive'
				},
				guid: {
					cellValue: 1
				}
			},
			{
				make: {
					cellValue: 'Ford'
				},
				model: {
					cellValue: 'Mondeo'
				},
				price: {
					cellValue: 32000
				},
				guid: {
					cellValue: 2
				}
			}
		]
	};

### Initialize the cs-grid react component

	<CSGrid
		columnDefs={this.gridOptions.columnDefs}
		rowData={this.gridOptions.rowData}
		csGridPagination={{
			location: 'Footer'
		}}
		csGridQuickFilter={{
			detachedCSSClass: this.props.cSGridFilterClass,
			location: 'Detached'
		}}
		multiSelect={true}
		uniqueIdentifierColumnName={'guid'}
	/>

Issue Reporting
----------

Please raise a ticket.
