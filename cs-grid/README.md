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
####1.2.62
* Removed submodule imports from cs-ui-components
* Fixed Multiselect Lookup not opening editor mode with keyboard
* Lookup - prevented horizontal scroll on ArrowLeft key
* BUG-07826: Added check for null values
* Changed all sass variables to css variables
####1.2.61
* When clearing a value on the date renderer then focusing on another cell, focus will no longer return to the date renderer.
* Multi-select lookup dropdown no longer closes after each selection.
* Fix noOfInlineIcons check, if the noOfInlineIcons is set to 0 then 0 icons will be shown.
* Implemented forceLegacyRowData featureFlag.
####1.2.60
* Changed where the editing is stopped when the grid loses focus from a grid level to an attribute level.
* Added a scroll the Grid to a column option to the grid API.
####1.2.59
* prevent lookup from opening when action button clicked
* added gridCustomPopup prop to lookup editor
####1.2.58
* Implement feature flag utilities and example
* Remove green background on cell success and add green border instead
* Replace boolean renderer custom checkbox with CSCheckbox
* Added accessibility support to boolean renderer
* Fixed missing box shadow on cell value
* Updated ag-grid to 24.1.0
* Refactor keyboard accessibility functionality
* Replace custom CS Grid lookup with CS UI Components Lookup
####1.2.57
* Added tab/arrow keys keyboard accessibility
* Replace instances of iconDisplay prop with labelHidden
* Change search to CSInputSearch inside Lookup cell
* Minor styling fixes - cell overflow fix, filter padding, icon cell margin fix
####1.2.56
* Remove unnecessary horizontal scroll from lookup popup
* Fix lookup input field padding
* Change editable cell border color
* Change filter to CSInputSearch
* Fix text cutting off in table header cells
* Add border and shadow to pinned left and right cells
* Fix datepicker popup being cut off by max height
* Fix styling on column header dropdown menu
* Add background to row when cell is being edited
* Fix "unique key in the list" error in the picklist editor component
* SCSS code cleanup
* Pass missing props to all cell instances of CSTooltip
* Implement CSDropdown inside renderer instead of action column editor
####1.2.55
 * Moved dev and peer dependencies to correct place
 * Removed accidental logging messages
####1.2.54
 * Fixed non-selectable read only cells
 * Replaced all buttons with CSButtons
 * Added support for custom buttons inside Icon type cell
 * Added support for tooltips on individual icons and buttons
 * New tooltip props support added: maxHeight, maxWidth, stickyOnClick
 * New button props support added: color, size, btnType, btnStyle
 * Added support for icons from CloudSense icons list using iconOrigin prop
####1.2.53
 * Fix problem with action dropdown not displaying/displaying fewer actions than available
####1.2.52
 * Fix conversion logic to legacy row format
 ####1.2.51
 * Fix row highlighting
####1.2.50
 * Fix boolean update logic
 * Update cs-ui-components dependency
 * Add support for cell tooltip props: variant, height, width, position, padding
 * Add hover bg color and selected text color for lookup popup cells
####1.2.49
 * Exposed a simplified version of `getQuickFilterText()` for optional quick filter value override.
####1.2.48
 * Exposed `cellClassRules` props of AgGrid's columnDefinition.
####1.2.47
 * Update font icons & success/error icon ui
 * Added props for grid row height
 * Fix client and server buttons and change to CSButton component
####1.2.46
 * Exposed `headerClass` props of AgGrid's columnDefinition.
####1.2.45
 * Exposed `sizeColumnsToFit` props of AgGrid. Specific columns can be overridden by passing `suppressSizeToFit` to columnDefs.
####1.2.44
 * Fixed call to onChange when date is typed into input field.
####1.2.43
 * Updated the main.ts file to include missing file cs-grid-base-actions-renderer.
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
