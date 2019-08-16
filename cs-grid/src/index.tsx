'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../src/sass/style.scss';
import './sass/style.scss';

import { ColDef, ColGroupDef } from 'ag-grid-community';
import CSTooltip from '../../src/components/CSTooltip';
import CSGrid from './components/cs-grid';
import { CSGridLookupSearchResult } from './components/cs-grid-lookup-editor';
import { CSGridPaginationLocation } from './components/cs-grid-pagination';
import { CSGridQuickFilterLocation } from './components/cs-grid-quick-filter';
import { ValidationStatus } from './components/cs-grid-row-validation-renderer';
import { CellData } from './models/cs-grid-base-interfaces';

interface AppState {
	columnDefs: Array<ColDef | ColGroupDef>;
	rowData: Array<any>;
}

/**
 * Creates an example CS Grid with dummy data.
 */
export default class App extends React.Component<object, AppState> {
	private csGridRef: React.RefObject<CSGrid>;
	constructor(props: object) {
		super(props);

		this.csGridRef = React.createRef();

		const userInfo = {
			currencyCode: 'USD',
			userLocale: 'en-US'
		};

		const getLookupValues = (searchTerm: string): Promise<CSGridLookupSearchResult> => {
			const results: CSGridLookupSearchResult = {
				columnDefs: [
					{
						field: 'text1',
						headerName: 'Name'
					},
					{
						field: 'text2',
						headerName: 'Order Number'
					}
				],
				rowData: [
					{
						text1: 'Bob',
						text2: '645612'
					},
					{
						text1: 'Harry',
						text2: '564768'
					},
					{
						text1: 'Sally',
						text2: '079845'
					}
				]
			};

			return this.delayResponse(results);
		};

		const columnDefs = [
			{
				cellRenderer: 'rowSelectionRenderer',
				checkboxSelection: true,
				editable: false,
				field: 'rowSelection',
				filter: false,
				headerCheckboxSelection: true,
				headerCheckboxSelectionFilteredOnly: true,
				headerName: '',
				lockPosition: true,
				lockVisible: true,
				resizable: false,
				sortable: false,
				width: 55
			},
			{
				field: 'guid',
				headerName: 'GUID',
				hide: true
			},
			{
				cellEditor: 'textEditor',
				cellRenderer: 'textRenderer',
				field: 'text',
				headerName: 'Text Column'
				// sort: SortOrder.Descending
			},
			{
				cellEditor: 'decimalEditor',
				cellEditorParams: {
					userInfo
				},
				cellRenderer: 'decimalRenderer',
				cellRendererParams: {
					noOfDecimalDigits: 3,
					userInfo
				},
				field: 'decimal',
				headerName: 'Decimal Column'
			},
			{
				cellEditor: 'currencyEditor',
				cellEditorParams: {
					userInfo
				},
				cellRenderer: 'currencyRenderer',
				cellRendererParams: {
					userInfo
				},
				field: 'currency',
				headerName: 'Currency Column'
			},
			{
				cellEditor: 'booleanEditor',
				cellRenderer: 'booleanRenderer',
				editable: () => Math.floor(Math.random() * 2) === 1,
				field: 'boolean',
				// filter: false,
				headerName: 'Boolean Column'
				// sortable: false
			},
			{
				cellEditor: 'dateEditor',
				cellEditorParams: {
					userInfo
				},
				cellRenderer: 'dateRenderer',
				cellRendererParams: {
					userInfo
				},
				field: 'date',
				headerName: 'Date Column'
			},
			{
				cellEditor: 'lookupEditor',
				cellEditorParams: { displayColumn: 'text1', getLookupValues },
				cellRenderer: 'lookupRenderer',
				field: 'lookup',
				headerName: 'Lookup'
			},
			{
				cellEditor: 'multiSelectLookupEditor',
				cellEditorParams: {
					displayColumn: 'text1',
					getLookupValues,
					minSearchTermLength: 3
				},
				cellRenderer: 'multiSelectLookupRenderer',
				field: 'multiSelectLookup',
				headerName: 'Multi Select Lookup'
			},
			{
				cellEditor: 'integerEditor',
				cellEditorParams: {
					onChange: (rowNodeId: string, oldValue: any, newValue: any) => {
						console.log(
							`onChange called with rowNodeId = ${rowNodeId} oldValue = ${oldValue} newValue = ${newValue}`
						);
						const value: CellData<number> = {
							cellValue: newValue,
							errorMessage: 'onChange error message'
						};

						return Promise.resolve(value);
					},
					stepperArrows: true,
					userInfo
				},
				cellRenderer: 'integerRenderer',
				cellRendererParams: {
					userInfo
				},
				field: 'integerStep',
				headerName: 'Integer With Stepper Arrows'
			},
			{
				cellEditor: 'integerEditor',
				cellEditorParams: {
					stepperArrows: false,
					userInfo
				},
				cellRenderer: 'integerRenderer',
				cellRendererParams: {
					userInfo
				},
				field: 'integer',
				headerName: 'Integer No Stepper Arrows'
			},
			{
				cellEditor: 'picklistEditor',
				cellEditorParams: {
					filterAboveSize: 5,
					options: [
						'Bob',
						'Harry',
						'Sally',
						'Mary',
						'John',
						'Jack',
						'Sue',
						'Sean',
						'Niall',
						'Albert',
						'Fred',
						'Jenny',
						'Larry'
					]
				},
				cellRenderer: 'picklistRenderer',
				field: 'picklist',
				headerComponentParams: {
					className: 'PicklistOverrideClass'
				},
				headerName: 'Picklist'
			},
			{
				cellEditor: 'multiSelectPicklistEditor',
				cellEditorParams: {
					options: [
						'Bob',
						'Harry',
						'Sally',
						'Mary',
						'John',
						'Jack',
						'Sue',
						'Sean',
						'Niall',
						'Albert',
						'Fred',
						'Jenny',
						'Larry'
					]
				},
				cellRenderer: 'multiSelectPicklistRenderer',
				field: 'multiSelectPicklist',
				headerName: 'Multi Select Picklist'
			},
			{
				cellRenderer: 'rowValidationRenderer',
				editable: false,
				field: 'rowValidation',
				filter: false,
				headerName: '',
				sortable: false,
				suppressMenu: true
			}
		];

		const rowDataSeeds = [
			{
				boolean: {
					cellValue: false
				},
				currency: {
					cellValue: 34000.67
				},
				date: {
					cellValue: '1992/01/27'
				},
				decimal: {
					cellValue: 35000.567567
				},
				guid: {
					cellValue: '1'
				},
				integer: {
					cellValue: 35000
				},
				integerStep: {
					cellValue: 3500
				},
				lookup: {
					cellValue: 'Bob'
				},
				multiSelectLookup: {
					cellValue: ['Bob', 'Harry']
				},
				multiSelectPicklist: {
					cellValue: ['Harry', 'Sally']
				},
				picklist: {
					cellValue: 'Bob'
				},
				rowSelection: {},
				rowValidation: {
					cellValue: ValidationStatus.None
				},
				text: {
					cellValue: 'Toyota'
				}
			},
			{
				boolean: {
					cellValue: true,
					errorMessage: 'An error message'
				},
				currency: {
					cellValue: 33000.77,
					errorMessage: 'An error message'
				},
				date: {
					cellValue: '1992/01/28',
					errorMessage: 'An error message'
				},
				decimal: {
					cellValue: 32000.56756,
					errorMessage: 'An error message'
				},
				guid: {
					cellValue: '2',
					errorMessage: 'An error message'
				},
				integer: {
					cellValue: 32000,
					errorMessage: 'An error message'
				},
				integerStep: {
					cellValue: 32000,
					errorMessage: 'An error message'
				},
				lookup: {
					cellValue: 'Harry',
					errorMessage: 'An error message'
				},
				multiSelectLookup: {
					cellValue: ['Harry', 'Sally'],
					errorMessage: 'An error message'
				},
				multiSelectPicklist: {
					cellValue: ['Sally', 'Bob'],
					errorMessage: 'An error message'
				},
				picklist: {
					cellValue: 'Harry',
					errorMessage: 'An error message'
				},
				rowSelection: {},
				rowValidation: {
					cellValue: ValidationStatus.Error,
					errorMessage: 'Error 1\nError 2'
				},
				text: {
					cellValue: 'Ford',
					errorMessage: 'An error message'
				}
			},
			{
				boolean: {
					cellValue: false
				},
				currency: {
					cellValue: 73000.98
				},
				date: {
					cellValue: '1992/01/29'
				},
				decimal: {
					cellValue: 72000.67878
				},
				guid: {
					cellValue: '3'
				},
				integer: {
					cellValue: 72000
				},
				integerStep: {
					cellValue: 72000
				},
				lookup: {
					cellValue: 'Sally'
				},
				multiSelectLookup: {
					cellValue: ['Sally', 'Bob']
				},
				multiSelectPicklist: {
					cellValue: ['Bob', 'Harry']
				},
				picklist: {
					cellValue: 'Sally'
				},
				rowSelection: {},
				rowValidation: {
					cellValue: ValidationStatus.Info,
					errorMessage: 'Info 1\nInfo 2'
				},
				text: {
					cellValue: 'Toyota'
				}
			},
			{
				boolean: {
					cellValue: false,
					errorMessage: ''
				},
				currency: {
					cellValue: undefined as number,
					errorMessage: ''
				},
				date: {
					cellValue: '1986/11/15',
					errorMessage: ''
				},
				decimal: {
					cellValue: 99000.67878,
					errorMessage: ''
				},
				guid: {
					cellValue: '4',
					errorMessage: ''
				},
				integer: {
					cellValue: 99000,
					errorMessage: ''
				},
				integerStep: {
					cellValue: 99000,
					errorMessage: ''
				},
				lookup: {
					cellValue: 'Sue',
					errorMessage: ''
				},
				multiSelectLookup: {
					cellValue: ['Sue', 'Sean'],
					errorMessage: ''
				},
				multiSelectPicklist: {
					cellValue: ['Sean', 'Sue'],
					errorMessage: ''
				},
				picklist: {
					cellValue: 'Sean',
					errorMessage: ''
				},
				rowSelection: {},
				rowValidation: {
					cellValue: ValidationStatus.Warning,
					errorMessage: 'Warning 1\nWarning 2'
				},
				text: {
					cellValue: 'Ford',
					errorMessage: ''
				}
			}
		];

		const rowData: any = [];

		for (let i = 0; i < 200; i++) {
			const row = { ...rowDataSeeds[Math.floor(rowDataSeeds.length * Math.random())] };
			row.guid = { cellValue: this.generateGuid() };
			rowData.push(row);
		}

		this.state = {
			columnDefs,
			rowData
		};
	}
	delayResponse = (result: any) => {
		return new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				return resolve(result);
			}, 500);
		});
	};

	s4 = (): string => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};

	generateGuid = (): string => {
		return `${this.s4()}${this.s4()}-${this.s4()}-${this.s4()}-${this.s4()}-${this.s4()}${this.s4()}${this.s4()}`;
	};

	onSelectionChange = (selectedRows: Array<any>): void => {
		console.log(selectedRows);
		console.log(this.csGridRef.current.getSelectedRows());
	};

	render() {
		return (
			<>
				<div className='example-filter' />
				<div className='example-pagination' />
				<CSGrid
					ref={this.csGridRef}
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}
					pageSizes={[10, 20, 50, 100]}
					csGridPagination={{
						detachedCSSClass: 'example-pagination',
						location: CSGridPaginationLocation.Both
					}}
					csGridQuickFilter={{
						detachedCSSClass: 'example-filter',
						location: CSGridQuickFilterLocation.Both
					}}
					// suppressDragLeaveHidesColumns={false}
					multiSelect={true}
					onSelectionChange={this.onSelectionChange}
					uniqueIdentifierColumnName={'guid'}
				/>
				<div className='example-pagination' />
				<div className='example-filter' />
			</>
		);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App />, document.getElementById('app'));
});
