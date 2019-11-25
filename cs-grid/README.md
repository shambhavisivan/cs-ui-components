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
