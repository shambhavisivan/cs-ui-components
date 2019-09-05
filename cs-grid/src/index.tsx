'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../src/sass/style.scss';
import './sass/style.scss';

import { ColDef, ColGroupDef } from 'ag-grid-community';
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
				field: 'exampleRowSelection',
				filter: false,
				headerCheckboxSelection: true,
				headerCheckboxSelectionFilteredOnly: true,
				headerName: '',
				lockPosition: true,
				lockVisible: true,
				maxWidth: 40,
				resizable: false,
				sortable: false
			},
			{
				field: 'exampleGuid',
				headerName: 'GUID',
				hide: true
			},
			{
				cellEditor: 'textEditor',
				cellRenderer: 'textRenderer',
				field: 'exampleText',
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
				field: 'exampleDecimal',
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
				field: 'exampleCurrency',
				headerName: 'Currency Column'
			},
			{
				cellEditor: 'booleanEditor',
				cellRenderer: 'booleanRenderer',
				editable: () => Math.floor(Math.random() * 2) === 1,
				field: 'exampleBoolean',
				headerName: 'Boolean Column'
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
				field: 'exampleDate',
				headerName: 'Date Column',
				editable: false
			},
			{
				cellEditor: 'lookupEditor',
				cellEditorParams: { displayColumn: 'text1', getLookupValues },
				cellRenderer: 'lookupRenderer',
				field: 'exampleLookup',
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
				field: 'exampleMultiSelectLookup',
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
				field: 'exampleIntegerStep',
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
				field: 'exampleInteger',
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
				field: 'examplePicklist',
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
				field: 'exampleMultiSelectPicklist',
				headerName: 'Multi Select Picklist'
			},
			{
				cellRenderer: 'rowValidationRenderer',
				editable: false,
				field: 'exampleRowValidation',
				filter: false,
				headerName: '',
				sortable: false,
				suppressMenu: true
			}
		];

		const rowDataSeeds = [
			{
				exampleBoolean: {
					cellValue: false
				},
				exampleCurrency: {
					cellValue: 34000.67
				},
				exampleDate: {
					cellValue: '1992/01/27'
				},
				exampleDecimal: {
					cellValue: 35000.567567
				},
				exampleGuid: {
					cellValue: '1'
				},
				exampleInteger: {
					cellValue: 35000
				},
				exampleIntegerStep: {
					cellValue: 3500
				},
				exampleLookup: {
					cellValue: 'Bob'
				},
				exampleMultiSelectLookup: {
					cellValue: ['Bob', 'Harry']
				},
				exampleMultiSelectPicklist: {
					cellValue: ['Harry', 'Sally']
				},
				examplePicklist: {
					cellValue: 'Bob'
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: ValidationStatus.None
				},
				exampleText: {
					cellValue: 'Toyota'
				}
			},
			{
				exampleBoolean: {
					cellValue: true,
					errorMessage: 'An error message'
				},
				exampleCurrency: {
					cellValue: 33000.77,
					errorMessage: 'An error message'
				},
				exampleDate: {
					cellValue: '1992/01/28',
					errorMessage: 'An error message'
				},
				exampleDecimal: {
					cellValue: 32000.56756,
					errorMessage: 'An error message'
				},
				exampleGuid: {
					cellValue: '2',
					errorMessage: 'An error message'
				},
				exampleInteger: {
					cellValue: 32000,
					errorMessage: 'An error message'
				},
				exampleIntegerStep: {
					cellValue: 32000,
					errorMessage: 'An error message'
				},
				exampleLookup: {
					cellValue: 'Harry',
					errorMessage: 'An error message'
				},
				exampleMultiSelectLookup: {
					cellValue: ['Harry', 'Sally'],
					errorMessage: 'An error message'
				},
				exampleMultiSelectPicklist: {
					cellValue: ['Sally', 'Bob'],
					errorMessage: 'An error message'
				},
				examplePicklist: {
					cellValue: 'Harry',
					errorMessage: 'An error message'
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: ValidationStatus.Error,
					errorMessage: 'Error 1\nError 2'
				},
				exampleText: {
					cellValue: 'Ford',
					errorMessage: 'An error message'
				}
			},
			{
				exampleBoolean: {
					cellValue: false
				},
				exampleCurrency: {
					cellValue: 73000.98
				},
				exampleDate: {
					cellValue: '1992/01/29'
				},
				exampleDecimal: {
					cellValue: 72000.67878
				},
				exampleGuid: {
					cellValue: '3'
				},
				exampleInteger: {
					cellValue: 72000
				},
				exampleIntegerStep: {
					cellValue: 72000
				},
				exampleLookup: {
					cellValue: 'Sally'
				},
				exampleMultiSelectLookup: {
					cellValue: ['Sally', 'Bob']
				},
				exampleMultiSelectPicklist: {
					cellValue: ['Bob', 'Harry']
				},
				examplePicklist: {
					cellValue: 'Sally'
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: ValidationStatus.Info,
					errorMessage: 'Info 1\nInfo 2'
				},
				exampleText: {
					cellValue: 'Toyota'
				}
			},
			{
				exampleBoolean: {
					cellValue: false,
					errorMessage: ''
				},
				exampleCurrency: {
					cellValue: undefined as number,
					errorMessage: ''
				},
				exampleDate: {
					cellValue: '1986/11/15',
					errorMessage: ''
				},
				exampleDecimal: {
					cellValue: 99000.67878,
					errorMessage: ''
				},
				exampleGuid: {
					cellValue: '4',
					errorMessage: ''
				},
				exampleInteger: {
					cellValue: 99000,
					errorMessage: ''
				},
				exampleIntegerStep: {
					cellValue: 99000,
					errorMessage: ''
				},
				exampleLookup: {
					cellValue: 'Sue',
					errorMessage: ''
				},
				exampleMultiSelectLookup: {
					cellValue: ['Sue', 'Sean'],
					errorMessage: ''
				},
				exampleMultiSelectPicklist: {
					cellValue: ['Sean', 'Sue'],
					errorMessage: ''
				},
				examplePicklist: {
					cellValue: 'Sean',
					errorMessage: ''
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: ValidationStatus.Warning,
					errorMessage: 'Warning 1\nWarning 2'
				},
				exampleText: {
					cellValue: 'Ford',
					errorMessage: ''
				}
			}
		];

		const rowData: any = [];

		for (let i = 0; i < 200; i++) {
			const row = { ...rowDataSeeds[Math.floor(rowDataSeeds.length * Math.random())] };
			row.exampleGuid = { cellValue: this.generateGuid() };
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
					uniqueIdentifierColumnName={'exampleGuid'}
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
