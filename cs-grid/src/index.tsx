import { CSButton, CSButtonGroup, CSChip, CSTooltip } from '@cloudsense/cs-ui-components';
import React from 'react';
import ReactDOM from 'react-dom';

import './sass/style.scss';

import { CSGridLookupSearchResult } from '../main';
import { CSGrid } from './components/cs-grid';
import {
	CellData,
	CellNotification,
	GridApi,
	GridReadyEvent,
	Row,
	RowData
} from './interfaces/cs-grid-base-interfaces';
import { ColDef } from './interfaces/cs-grid-col-def';
import {
	ColumnFilterCondition,
	Condition,
	CSGridSortDirection,
	FilterModel,
	OrderBy
} from './interfaces/cs-grid-data-source-api';
import { UserInfo } from './interfaces/user-info';
import { CSGridDefaultComparator } from './utils/cs-grid-default-comparator';
import { CSGridLookupComparator } from './utils/cs-grid-lookup-comparator';

interface AppState {
	columnDefs: Array<ColDef>;
	rowData: Array<Record<string, any>>;
	isDataSourceRowModel: boolean;
}

/**
 * Creates an example CS Grid with dummy data.
 */
export class App extends React.Component<object, AppState> {
	private currentPage = 0;
	private pageSizes = [10, 20, 50, 100];
	private currentPageSize = this.pageSizes[0];
	private lookupDisplayColumn = 'text1';
	private sortedAndFilteredRows: Array<Row>;
	private gridApi: GridApi;

	private columnState: string =
		'[{"colId":"exampleRowSelection","hide":false,"aggFunc":null,"width":80,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleGuid","hide":true,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleDecimal","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleText","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleCurrency","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleDate","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleLookup","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleMultiSelectLookup","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleBoolean","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleIntegerStep","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleInteger","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"examplePicklist","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleMultiSelectPicklist","hide":false,"aggFunc":null,"width":200,"pivotIndex":null,"pinned":null,"rowGroupIndex":null},{"colId":"exampleRowValidation","hide":false,"aggFunc":null,"width":40,"pivotIndex":null,"pinned":null,"rowGroupIndex":null}]';

	private rowDataSeeds: Record<string, any> = [
		{
			exampleBoolean: false,
			exampleCurrency: 34000.67,
			exampleDate: '1992-01-27',
			exampleDateTime: '1992-01-27 11:22',
			exampleDecimal: 35000.567567,
			exampleGuid: '1',
			exampleInteger: 35000,
			exampleIntegerStep: 3500,
			exampleLookup: {
				data: {
					text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
					'text2.name.thirdPart': '0000'
				},
				key: 1
			},
			exampleMultiSelectLookup: [
				{
					data: {
						text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
						'text2.name.thirdPart': '0000'
					},
					key: 1
				},
				{
					data: {
						text1: 'Harry',
						'text2.name.thirdPart': '0123'
					},
					key: 2
				}
			],
			exampleMultiSelectPicklist: [
				{
					key: '2',
					label: 'Harry'
				},
				{
					key: '3',
					label: 'Sally'
				}
			],
			examplePicklist: {
				key: '2',
				label: 'Harry'
			},
			exampleRowValidation: {
				status: 'None'
			},
			exampleText: 'Toy&o|:;ta',
			status: ['red']
		},
		{
			exampleBoolean: true,
			exampleCurrency: 33000.77,
			exampleDate: '1992-01-28',
			exampleDateTime: '1992-01-28 14:45',
			exampleDecimal: 32000.56756,
			exampleGuid: '2',
			exampleInteger: 32000,
			exampleIntegerStep: 32000,
			exampleLookup: {
				data: {
					text1: 'Harry',
					'text2.name.thirdPart': '1234'
				},
				key: 2
			},
			exampleMultiSelectLookup: [
				{
					data: {
						text1: 'Harry',
						'text2.name.thirdPart': '1234'
					},
					key: 2
				},
				{
					data: {
						text1: 'Sally',
						'text2.name.thirdPart': '9012'
					},
					key: 3
				}
			],
			exampleMultiSelectPicklist: [
				{
					key: '5',
					label: 'John'
				},
				{
					key: '3',
					label: 'Sally'
				}
			],
			examplePicklist: {
				key: '5',
				label: 'John'
			},
			exampleRowValidation: {
				status: 'Error'
			},
			exampleText: 'Ford',
			status: ['red', 'yellow', 'breadcrumbs']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 73000.98,
			exampleDate: '1992-01-29',
			exampleDateTime: '1992-01-29 15:25',
			exampleDecimal: 72000.67878,
			exampleGuid: '3',
			exampleInteger: 72000,
			exampleIntegerStep: 72000,
			exampleLookup: {
				data: {
					text1: 'Sally',
					'text2.name.thirdPart': '9012'
				},
				key: 3
			},
			exampleMultiSelectLookup: [
				{
					data: {
						text1: 'Sally',
						'text2.name.thirdPart': '9012'
					},
					key: 3
				},
				{
					data: {
						text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
						'text2.name.thirdPart': '0000'
					},
					key: 1
				}
			],
			exampleMultiSelectPicklist: [
				{
					key: '5',
					label: 'John'
				},
				{
					key: '11',
					label: 'Fred'
				}
			],
			examplePicklist: {
				key: '11',
				label: 'Fred'
			},
			exampleRowValidation: {
				status: 'Info',
				icons: ['medium']
			},
			exampleText: 'Toyota',
			status: ['yellow']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 'undefined as number',
			exampleDate: '1986-11-15',
			exampleDateTime: '1986-11-15 05:55',
			exampleDecimal: 99000.67878,
			exampleGuid: '4',
			exampleInteger: 99000,
			exampleIntegerStep: 99000,
			exampleLookup: {
				data: {
					text1: 'Mary',
					'text2.name.thirdPart': '5678'
				},
				key: 7
			},
			exampleMultiSelectLookup: [
				{
					data: {
						text1: 'Mary',
						'text2.name.thirdPart': '5678'
					},
					key: 7
				},
				{
					data: {
						text1: 'Robert',
						'text2.name.thirdPart': '4567'
					},
					key: 8
				}
			],
			exampleMultiSelectPicklist: [
				{
					key: '7',
					label: 'Sue'
				},
				{
					key: '11',
					label: 'Fred'
				}
			],
			examplePicklist: {
				key: '7',
				label: 'Sue'
			},
			exampleRowValidation: {
				status: 'Error',
				icons: ['medium', 'video']
			},
			exampleText: 'Ford',
			status: ['yellow', 'breadcrumbs']
		}
	];

	private errorMessagesSeed: Record<string, any> = [
		{},
		{
			exampleBoolean:
				'This is a really long error message so that we can test various sizes. It is so very very looooonnnnngggg.',
			exampleCurrency: 'An error message',
			exampleDate: 'An error message',
			exampleDateTime: 'An error message',
			exampleDecimal: 'An error message',
			exampleGuid: 'An error message',
			exampleInteger: 'An error message',
			exampleIntegerStep: 'An error message',
			exampleLookup: 'An error message',
			exampleMultiSelectLookup: 'An error message',
			exampleMultiSelectPicklist: 'An error message',
			examplePicklist: 'An error message',
			exampleRowValidation: 'Error 1\nError 2',
			exampleText: 'An error message'
		},
		{
			exampleRowValidation: 'Info 1\nInfo 2'
		},
		{
			exampleBoolean: '',
			exampleCurrency: '',
			exampleDate: '',
			exampleDateTime: '',
			exampleDecimal: '',
			exampleGuid: '',
			exampleInteger: '',
			exampleIntegerStep: '',
			exampleLookup: '',
			exampleMultiSelectLookup: '',
			exampleMultiSelectPicklist: '',
			examplePicklist: '',
			exampleRowValidation: 'Error 1Error 2',
			exampleText: ''
		}
	];

	constructor(props: object) {
		super(props);

		const userInfo: UserInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr'
		};

		const getLookupValues = (
			searchTerm: string,
			guid: string
		): Promise<CSGridLookupSearchResult> => {
			const results: CSGridLookupSearchResult = {
				columnDefs: [
					{
						header: { label: 'Name' },
						name: 'text1'
					},
					{
						header: { label: 'Order Number' },
						name: 'text2.name.thirdPart'
					},
					{
						header: { label: 'hidden' },
						name: 'hidden',
						visible: false
					}
				],
				rowData: [
					{
						data: {
							text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
							'text2.name.thirdPart': '0000'
						},
						key: 1
					},
					{
						data: {
							text1: 'Harry',
							'text2.name.thirdPart': '0123'
						},
						key: 2
					},
					{
						data: {
							text1: 'Sally',
							'text2.name.thirdPart': '9012'
						},
						key: 3
					},
					{
						data: {
							text1: 'John',
							'text2.name.thirdPart': '8901'
						},
						key: 4
					},
					{
						data: {
							text1: 'Dan',
							'text2.name.thirdPart': '8790'
						},
						key: 5
					},
					{
						data: {
							text1: 'Jane',
							'text2.name.thirdPart': '6789'
						},
						key: 6
					},
					{
						data: {
							text1: 'Mary',
							'text2.name.thirdPart': '5678'
						},
						key: 7
					},
					{
						data: {
							text1: 'Robert',
							'text2.name.thirdPart': '4567'
						},
						key: 8
					},
					{
						data: {
							text1: 'Andy',
							'text2.name.thirdPart': '3456'
						},
						key: 9
					},
					{
						data: {
							text1: 'Daniel',
							'text2.name.thirdPart': '2345'
						},
						key: 10
					},
					{
						data: {
							text1: 'Watson',
							'text2.name.thirdPart': '1234'
						},
						key: 11
					}
				]
			};

			return this.delayResponse(results);
		};

		const columnDefs: Array<ColDef> = [
			{
				cellType: 'RowSelection',
				flashOnCellValueChange: true,
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('Edit option called'),
							icon: { iconName: 'warning', color: '#c23934', iconSize: '0.875rem' },
							name: 'Custom content'
						},
						{
							action: () => console.error('disabled icons should not get called!'),
							disabled: true,
							name: 'disabled'
						},
						{
							action: () => console.error('Delete option called'),
							icon: { iconName: 'close', color: 'red' },
							name: 'Delete with icon and color'
						},
						{
							action: () => console.error('Delete option called'),
							icon: { iconName: 'close' },
							name: 'Delete with no color'
						},
						{
							action: () => console.error('No Icon 1 option called'),
							name: 'No Icon'
						},
						{
							action: () => console.error('disabled icons should not get called!'),
							disabled: true,
							name: 'No icon disabled'
						}
					];
				},
				maxWidth: 400,
				minWidth: 40,
				name: 'exampleRowSelection',
				noOfInlineIcons: 3,
				pinned: 'left',
				resizable: true,
				userInfo,
				width: 115
			},
			{
				cellType: 'Text',
				flashOnCellValueChange: true,
				name: 'exampleGuid',
				userInfo,
				visible: false
			},
			{
				cellType: 'Text',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: (
							<CSChip text='Long text example to demonstrate auto height and width of tooltip ' />
						),
						delay: 300,
						variant: 'basic',
						height: 'auto',
						width: 'auto',
						position: 'bottom-left'
					};
				},
				header: {
					label: 'Text Column'
				},
				name: 'exampleText',
				pinned: 'left',
				userInfo,
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				}
			},
			{
				cellType: 'Decimal',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				header: {
					label: 'Decimal Column'
				},
				name: 'exampleDecimal',
				noOfDecimalDigits: 3,
				userInfo
			},
			{
				cellType: 'Currency',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				header: {
					label: 'Currency Column'
				},
				name: 'exampleCurrency',
				userInfo
			},
			{
				cellType: 'Boolean',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				editable: () => true,
				header: {
					label: 'Boolean Column'
				},
				name: 'exampleBoolean',
				readonly: () => false,
				userInfo
			},
			{
				cellType: 'Date',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				getOpenToDate: (guid: string) => '1999-09-23',
				header: {
					label: 'Date Column'
				},
				name: 'exampleDate',
				textInputFormat: 'DD/MM/YYYY',
				userInfo
			},
			{
				cellType: 'DateTime',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				getOpenToDate: (guid: string) => '2004-02-22',
				header: {
					label: 'Date Time Column'
				},
				name: 'exampleDateTime',
				timeInterval: 10,
				userInfo
			},
			{
				cellType: 'Lookup',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				comparator: (a: CellData<any>, b: CellData<any>) =>
					CSGridLookupComparator(a, b, this.lookupDisplayColumn),
				displayColumn: this.lookupDisplayColumn,
				getActions: (guid: string) => {
					return [
						{
							action: (rowGUID: string, currentValue: any) =>
								console.log(
									`Edit option called with rowGUID=${rowGUID} currentValue= ${JSON.stringify(
										currentValue
									)}`
								),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Edit',
							size: 'xsmall'
						},
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getLookupValues,
				guidColumn: 'text2.name.thirdPart',
				header: {
					label: 'Lookup'
				},
				name: 'exampleLookup',
				userInfo
			},
			{
				cellType: 'MultiSelectLookup',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: (rowGUID: string, currentValue: any) =>
								console.log(
									`Edit option called with rowGUID=${rowGUID} currentValue= ${JSON.stringify(
										currentValue
									)}`
								),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Edit',
							size: 'xsmall'
						},
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				comparator: (a: CellData<any>, b: CellData<any>) =>
					CSGridLookupComparator(a, b, this.lookupDisplayColumn),
				displayColumn: this.lookupDisplayColumn,
				getLookupValues,
				guidColumn: 'text2.name.thirdPart',
				header: {
					label: 'Multi Select Lookup'
				},
				minSearchTermLength: 3,
				name: 'exampleMultiSelectLookup',
				userInfo
			},
			{
				cellType: 'Integer',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				header: {
					label: 'Integer With Stepper Arrows'
				},
				name: 'exampleIntegerStep',
				onChange: (rowNodeId: string, oldValue: any, newValue: any) => {
					console.log(
						`onChange called with rowNodeId = ${rowNodeId} oldValue = ${oldValue} newValue = ${newValue}`
					);

					if (this.gridApi) {
						const node = this.gridApi.getRowNode(rowNodeId);
						let icon = 'red';

						const rowValidationIconNames = [];

						const exampleIntegerValue: number = parseInt(newValue, 10);

						if (exampleIntegerValue > 50000 && exampleIntegerValue <= 100000) {
							icon = 'yellow';
						} else if (exampleIntegerValue > 100000) {
							icon = 'green';
						}

						if (exampleIntegerValue > 50000) {
							rowValidationIconNames.push('medium');
						}
						if (exampleIntegerValue > 100000) {
							rowValidationIconNames.push('large');
						}

						const validationCellValue = node.data.exampleRowValidation.cellValue;
						const status =
							typeof validationCellValue === 'object'
								? validationCellValue.status
								: validationCellValue;

						node.setDataValue('exampleRowValidation', {
							cellValue: { status, icons: rowValidationIconNames }
						});
						node.setDataValue('status', { cellValue: [icon] });
					}
					const value: CellData<number> = {
						cellValue: newValue,
						errorMessage: 'onChange error message'
					};

					return Promise.resolve(value);
				},
				pinned: 'right',
				stepperArrows: true,
				userInfo
			},
			{
				cellClass: (value: CellData<number>, rowGuid: string) => {
					if (value && value.cellValue > 5000) {
						return ['custom-cell-class'];
					} else {
						return null;
					}
				},
				cellType: 'Integer',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				header: {
					label: 'Integer No Stepper Arrows'
				},
				name: 'exampleInteger',
				stepperArrows: false,
				userInfo
			},
			{
				cellType: 'Picklist',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				filterAboveSize: 5,
				getOptions: () => {
					return [
						{ key: '1', label: 'Bob' },
						{ key: '2', label: 'Harry' },
						{ key: '3', label: 'Sally' },
						{ key: '4', label: 'Mary' },
						{ key: '5', label: 'John' },
						{ key: '6', label: 'Jack' },
						{ key: '7', label: 'Sue' },
						{ key: '8', label: 'Sean' },
						{ key: '9', label: 'Niall' },
						{ key: '10', label: 'Albert' },
						{ key: '11', label: 'Fred' },
						{ key: '12', label: 'Jenny' },
						{ key: '13', label: 'Larry' }
					];
				},
				getDropdownActions: () => {
					return [
						{
							label: 'John Action',
							iconName: 'add',
							onClick: () => alert('John Action invoked.')
						},
						{
							label: 'Larry Action',
							iconName: 'add',
							onClick: () => alert('Larry Action invoked.')
						}
					];
				},
				header: {
					class: 'PicklistOverrideClass',
					label: 'Picklist'
				},
				name: 'examplePicklist',
				toggleSelection: false,
				userInfo
			},
			{
				cellType: 'MultiSelectPicklist',
				flashOnCellValueChange: true,
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				filterAboveSize: 5,
				getOptions: () => {
					return [
						{ key: '1', label: 'Bob' },
						{ key: '2', label: 'Harry' },
						{ key: '3', label: 'Sally' },
						{ key: '4', label: 'Mary' },
						{ key: '5', label: 'John' },
						{ key: '6', label: 'Jack' },
						{ key: '7', label: 'Sue' },
						{ key: '8', label: 'Sean' },
						{ key: '9', label: 'Niall' },
						{ key: '10', label: 'Albert' },
						{ key: '11', label: 'Fred' },
						{ key: '12', label: 'Jenny' },
						{ key: '13', label: 'Larry' }
					];
				},
				getDropdownActions: () => {
					return [
						{
							label: 'John Action',
							iconName: 'add',
							onClick: () => alert('John Action invoked.')
						},
						{
							label: 'Larry Action',
							iconName: 'add',
							onClick: () => alert('Larry Action invoked.')
						}
					];
				},
				header: {
					label: 'Multi Select Picklist'
				},
				name: 'exampleMultiSelectPicklist',
				userInfo
			},
			{
				cellType: 'Icon',
				flashOnCellValueChange: true,
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip examples']
								};
							}
						}
					];
				},
				getActions: (guid: string) => {
					return [
						{
							action: () => console.error('action called'),
							labelHidden: true,
							icon: { iconName: 'new_window' },
							name: 'Open record in new window',
							size: 'xsmall',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom action with tooltip example']
								};
							}
						}
					];
				},
				getTooltip: (guid: string) => {
					return {
						content: ['example tooltip', 'Line two'],
						delay: 300
					};
				},
				header: {
					label: 'Status'
				},
				name: 'status',
				pinned: 'right',
				userInfo,
				width: 150
			},
			{
				cellType: 'RowValidation',
				flashOnCellValueChange: true,
				getIcons: (guid: string) => {
					return [
						{
							iconName: 'info',
							getTooltip: (guid: string) => {
								return {
									content: ['Custom icon with tooltip example']
								};
							}
						}
					];
				},
				name: 'exampleRowValidation',
				pinned: 'right',
				userInfo,
				width: 100
			}
		];

		const rowDataSeedsLegacy = [
			{
				exampleBoolean: {
					cellValue: false
				},
				exampleCurrency: {
					cellValue: 34000.67
				},
				exampleDate: {
					cellValue: '1992-01-27'
				},
				exampleDateTime: {
					cellValue: '1992-01-27 11:22'
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
					cellValue: {
						data: {
							text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
							'text2.name.thirdPart': '0000'
						},
						key: 1
					}
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{
							data: {
								text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
								'text2.name.thirdPart': '0000'
							},
							key: 1
						},
						{
							data: {
								text1: 'Harry',
								'text2.name.thirdPart': '0123'
							},
							key: 2
						}
					]
				},
				exampleMultiSelectPicklist: {
					cellValue: [
						{ key: '2', label: 'Harry' },
						{ key: '3', label: 'Sally' }
					]
				},
				examplePicklist: {
					cellValue: { key: '2', label: 'Harry' }
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: { status: 'None' }
				},
				exampleText: {
					cellValue: 'Toy&o|:;ta'
				},
				status: {
					cellValue: ['red']
				}
			},
			{
				exampleBoolean: {
					cellValue: true,
					errorMessage:
						'This is a really long error message so that we can test various sizes. It is so very very looooonnnnngggg.'
				},
				exampleCurrency: {
					cellValue: 33000.77,
					errorMessage: 'An error message'
				},
				exampleDate: {
					cellValue: '1992-01-28',
					errorMessage: 'An error message'
				},
				exampleDateTime: {
					cellValue: '1992-01-28 14:45',
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
					cellValue: {
						data: {
							text1: 'Harry',
							'text2.name.thirdPart': '0123'
						},
						key: 2
					},
					errorMessage: 'An error message'
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{
							data: {
								text1: 'Harry',
								'text2.name.thirdPart': '0123'
							},
							key: 2
						},
						{
							data: {
								text1: 'Sally',
								'text2.name.thirdPart': '9012'
							},
							key: 3
						}
					],
					errorMessage: 'An error message'
				},
				exampleMultiSelectPicklist: {
					cellValue: [
						{ key: '5', label: 'John' },
						{ key: '3', label: 'Sally' }
					]
				},
				examplePicklist: {
					cellValue: { key: '5', label: 'John' },
					errorMessage: 'An error message'
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: { status: 'Error' },
					errorMessage: 'Error 1\nError 2'
				},
				exampleText: {
					cellValue: 'Ford',
					errorMessage: 'An error message'
				},
				status: {
					cellValue: ['red', 'yellow', 'breadcrumbs']
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
					cellValue: '1992-01-29'
				},
				exampleDateTime: {
					cellValue: '1992-01-29 15:25'
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
					cellValue: {
						data: {
							text1: 'Sally',
							'text2.name.thirdPart': '9012'
						},
						key: 3
					}
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{
							data: {
								text1: 'Sally',
								'text2.name.thirdPart': '9012'
							},
							key: 3
						},
						{
							data: {
								text1: 'Bob the Great Bob the Great Bob the Great Bob the Great',
								'text2.name.thirdPart': '0000'
							},
							key: 1
						}
					]
				},
				exampleMultiSelectPicklist: {
					cellValue: [
						{ key: '5', label: 'John' },
						{ key: '11', label: 'Fred' }
					]
				},
				examplePicklist: {
					cellValue: { key: '11', label: 'Fred' },
					errorMessage: 'An error message'
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: { status: 'Info', icons: ['medium'] },
					errorMessage: 'Info 1\nInfo 2'
				},
				exampleText: {
					cellValue: 'Toyota'
				},
				status: {
					cellValue: ['yellow']
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
					cellValue: '1986-11-15',
					errorMessage: ''
				},
				exampleDateTime: {
					cellValue: '1986-11-15 05:55',
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
					cellValue: {
						data: {
							text1: 'Mary',
							'text2.name.thirdPart': '5678'
						},
						key: 7
					},
					errorMessage: ''
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{
							data: {
								text1: 'Mary',
								'text2.name.thirdPart': '5678'
							},
							key: 7
						},
						{
							data: {
								text1: 'Robert',
								'text2.name.thirdPart': '4567'
							},
							key: 8
						}
					],
					errorMessage: ''
				},
				exampleMultiSelectPicklist: {
					cellValue: [
						{ key: '7', label: 'Sue' },
						{ key: '11', label: 'Fred' }
					],
					errorMessage: ''
				},
				examplePicklist: {
					cellValue: { key: '7', label: 'Sue' },
					errorMessage: ''
				},
				exampleRowSelection: {},
				exampleRowValidation: {
					cellValue: { status: 'Error', icons: ['medium', 'video'] },
					errorMessage: 'Error 1Error 2'
				},
				exampleText: {
					cellValue: 'Ford',
					errorMessage: ''
				},
				status: {
					cellValue: ['yellow', 'breadcrumbs']
				}
			}
		];

		const rowData: Array<any> = this.getRowData(this.rowDataSeeds, this.errorMessagesSeed);
		// const rowData = this.getLegacyRowData(rowDataSeedsLegacy);

		// A simple css class for demo purposes, this won't be compiled into the cs-grid build.
		this.createCSSClass(
			`.cs-grid_app-wrapper .ag-theme-balham .ag-cell.ag-cell-not-inline-editing.custom-cell-class {
				background-color: lightgreen;
			}`
		);

		this.createCSSClass(
			`.cs-grid_app-wrapper .ag-theme-balham .ag-row-even.rowClass,
			.cs-grid_app-wrapper .ag-theme-balham .ag-row-odd.rowClass,
			.cs-grid_app-wrapper .ag-theme-balham .ag-row-even.ag-row-hover.rowClass,
			.cs-grid_app-wrapper .ag-theme-balham .ag-row-odd.ag-row-hover.rowClass {
				background-color: yellow!important;
			}`
		);

		this.sortedAndFilteredRows = rowData;
		this.state = {
			columnDefs,
			isDataSourceRowModel: false,
			rowData
		};
	}

	s4 = (): string => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};

	generateGuid = (): string => {
		return `${this.s4()}${this.s4()}-${this.s4()}-${this.s4()}-${this.s4()}-${this.s4()}${this.s4()}${this.s4()}`;
	};

	onSelectionChange = (selectedRows: Array<Row>): void => {
		console.log(selectedRows);
	};

	render() {
		return (
			<>
				<div
					style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'flex-end' }}
				>
					<CSButtonGroup>
						<CSButton
							onClick={this.clientDemo}
							label='Client Demo'
							btnStyle={this.state.isDataSourceRowModel ? 'initial' : 'brand'}
						/>
						<CSButton
							onClick={this.serverDemo}
							label='Server Demo'
							btnStyle={this.state.isDataSourceRowModel ? 'brand' : 'initial'}
						/>
					</CSButtonGroup>
				</div>
				{this.state.isDataSourceRowModel ? (
					<CSGrid
						key='server'
						columnDefs={this.state.columnDefs}
						pageSizes={this.pageSizes}
						csGridPagination={{
							detachedCSSClass: 'example-server-pagination',
							location: 'Both'
						}}
						csGridQuickFilter={{
							detachedCSSClass: 'example-server-filter',
							location: 'Both',
							nonIncremental: true
						}}
						multiSelect={true}
						onSelectionChange={this.onSelectionChange}
						uniqueIdentifierColumnName={'exampleGuid'}
						dataSourceAPI={{
							isLastPage: this.isLastPage,
							onBtNext: this.onBtNext,
							onBtPrevious: this.onBtPrevious,
							onContextChange: this.onContextChange
						}}
						onColumnStateChange={this.onColumnStateChange}
						columnState={this.columnState}
						onGridReady={this.onGridReady}
						featureFlags={{ useExtendedActionFormat: false }}
					/>
				) : (
					<CSGrid
						key='client'
						columnDefs={this.state.columnDefs}
						rowData={this.state.rowData}
						pageSizes={this.pageSizes}
						csGridPagination={{
							detachedCSSClass: 'example-client-pagination',
							location: 'Both'
						}}
						csGridQuickFilter={{
							detachedCSSClass: 'example-client-filter',
							location: 'Both'
						}}
						multiSelect={true}
						onSelectionChange={this.onSelectionChange}
						uniqueIdentifierColumnName={'exampleGuid'}
						onCellEditingStopped={this.onCellEditingStopped}
						featureFlags={{ useExtendedActionFormat: false }}
						onGridReady={this.onGridReady}
						// rowHighlighting={{
						// 	[this.state.rowData[0].exampleGuid]: 'red',
						// 	[this.state.rowData[3].exampleGuid]: '#73d9d2'
						// }}
						/* use this for legacy style models*/
						// rowHighlighting={{
						// 	[this.state.rowData[0].exampleGuid.cellValue]: 'red',
						// 	[this.state.rowData[3].exampleGuid.cellValue]: '#73d9d2'
						// }}
						// tslint:disable-next-line: jsx-no-lambda
						getRowClass={(rowGuid) => {
							if (rowGuid === this.state.rowData[4].exampleGuid.cellValue) {
								return ['rowClass'];
							}
						}}
						onCellValueChange={this.onCellValueChange}
						onColumnResized={this.onColumnResized}
						// Uncomment to demo custom sort and custom pagination.
						// customSort={this.randomizeRows}
						// customPaginationAPI={{
						// 	currentPage: this.currentPage + 1,
						// 	isLastPage: () => false,
						// 	onBtNext: this.customPaginationOnBtNext,
						// 	onBtPrevious: this.customPaginationOnBtPrevious,
						// 	onPageSizeChange: this.customPaginationOnPageSizeChanged
						// }}
					/>
				)}
				<>
					<hr />
					<h1 style={{ marginBottom: '0.25rem' }}>Externally controlled by CS-Grid</h1>
					<div style={{ display: '-webkit-inline-box' }}>
						<div style={{ marginRight: '0.25rem' }}>
							<div className='example-server-pagination' />
							<div className='example-client-pagination' />
						</div>
						<div className='example-server-filter' />
						<div className='example-client-filter' />
					</div>
				</>
			</>
		);
	}

	customPaginationOnPageSizeChanged = async () => {
		this.currentPage = 0;
		await this.randomizeRows();
	};

	customPaginationOnBtPrevious = async () => {
		this.currentPage = this.currentPage - 1;
		await this.randomizeRows();
	};

	customPaginationOnBtNext = async () => {
		this.currentPage = this.currentPage + 1;
		await this.randomizeRows();
	};

	randomizeRows = () => {
		this.setState({
			rowData: this.getRowData(this.rowDataSeeds, this.errorMessagesSeed)
		});

		return Promise.resolve();
	};

	delayResponse = (result: any) => {
		return new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				return resolve(result);
			}, 1000);
		});
	};

	onSearchFilterChange = (rows: Array<Row>, unqualifiedSearchTerms: Array<string>) => {
		let filteredRows = rows;

		for (const filterText of unqualifiedSearchTerms) {
			const resultOfFilter: Array<Row> = [];

			const condition: Condition = {
				filterText,
				type: 'contains'
			};

			for (const row of filteredRows) {
				let passFilters = false;
				for (const columnId in row) {
					if (
						!row.hasOwnProperty(columnId) ||
						columnId === 'exampleGuid' ||
						columnId === 'exampleRowSelection' ||
						columnId === 'exampleRowValidation'
					) {
						continue;
					}

					const cellValue = this.formatValue(row[columnId].cellValue);
					if (this.individualConditionPasses(cellValue, condition)) {
						passFilters = true;
						break;
					}
				}
				if (passFilters) {
					resultOfFilter.push(row);
				}
			}
			filteredRows = resultOfFilter;
		}

		return filteredRows;
	};

	onBtNext = async () => {
		if (!this.isLastPage()) {
			this.currentPage += 1;
		}

		return this.changeRows();
	};

	onBtPrevious = async () => {
		if (this.currentPage > 0) {
			this.currentPage -= 1;
		}

		return this.changeRows();
	};

	isLastPage = () => {
		return (this.currentPage + 1) * this.currentPageSize >= this.sortedAndFilteredRows.length;
	};

	onContextChange = async (
		pageSize: number,
		sortModel: Array<OrderBy>,
		filterModel: FilterModel
	) => {
		this.currentPageSize = pageSize;
		this.currentPage = 0;

		this.sortedAndFilteredRows = this.sortAndFilter(
			this.state.rowData,
			sortModel,
			filterModel.columnFilters
		);
		this.sortedAndFilteredRows = this.onSearchFilterChange(
			this.sortedAndFilteredRows,
			filterModel.unqualifiedSearchTerms
		);

		return this.changeRows();
	};

	sortAndFilter = (
		rows: Array<Row>,
		sortModel: Array<OrderBy>,
		filterModel: Map<string, Array<ColumnFilterCondition>>
	) => {
		return this.sortData(sortModel, this.filterData(filterModel, rows));
	};

	sortData = (sortModel: Array<OrderBy>, rows: Array<Row>) => {
		const sortPresent = sortModel && sortModel.length > 0;
		if (!sortPresent) {
			return rows;
		}

		const resultOfSort = rows.slice();
		resultOfSort.sort((a, b) => {
			for (const sortColModel of sortModel) {
				const valueA = a[sortColModel.columnId];
				const valueB = b[sortColModel.columnId];

				const columnIndex = this.state.columnDefs.findIndex(
					(column: any) => column.name === sortColModel.columnId
				);

				const result =
					(this.state.columnDefs[columnIndex] as any).cellType
						.toLowerCase()
						.indexOf('lookup') >= 0
						? CSGridLookupComparator(valueA, valueB, this.lookupDisplayColumn)
						: CSGridDefaultComparator(valueA, valueB);
				const sortDirection = sortColModel.sortDirection === 'SORT_ASC' ? 1 : -1;

				return sortDirection * result;
			}
		});

		return resultOfSort;
	};

	filterData = (filterModel: Map<string, Array<ColumnFilterCondition>>, rows: Array<Row>) => {
		const filterPresent = filterModel && filterModel.size > 0;
		if (!filterPresent) {
			return rows;
		}
		const resultOfFilter = [];
		for (const row of rows) {
			let passFilters = true;
			for (const [columnId, columnFilterConditions] of filterModel) {
				for (const columnFilterCondition of columnFilterConditions) {
					const cellValue = this.formatValue(row[columnId].cellValue);
					if (!this.doesFilterPass(cellValue, columnFilterCondition)) {
						passFilters = false;
						break;
					}
				}
				if (!passFilters) {
					break;
				}
			}
			if (passFilters) {
				resultOfFilter.push(row);
			}
		}

		return resultOfFilter;
	};

	getLegacyRowData(rowDataSeeds: any) {
		const rowData: Array<Row> = [];
		for (let i = 0; i < 200; i++) {
			const row = { ...rowDataSeeds[Math.floor(rowDataSeeds.length * Math.random())] };
			row.exampleGuid = { cellValue: this.generateGuid() };
			rowData.push(row);
		}

		return rowData;
	}

	getRowData(rowDataSeeds: Record<string, any>, errorMessagesSeed: Record<string, any>) {
		const rowData: Array<RowData> = [];
		for (let i = 0; i < 200; i++) {
			const randomIndex = Math.floor(rowDataSeeds.length * Math.random());
			const record = rowDataSeeds[randomIndex];
			const row: RowData = {} as RowData;
			const rowNotifications: Record<string, CellNotification> = {};
			const errorMessage = errorMessagesSeed[randomIndex];
			for (const field in record) {
				row[field] = record[field];
				if (errorMessage[field]) {
					const notification: CellNotification = {
						message: errorMessage[field],
						type: 'error'
					};
					rowNotifications[field] = notification;
				}
			}
			row.exampleGuid = this.generateGuid();
			row.row_cell_notifications = rowNotifications;
			rowData.push(row);
		}

		return rowData;
	}

	private changeRows = async () => {
		const startRow = this.currentPage * this.currentPageSize;
		const endRow = startRow + this.currentPageSize;
		const results = this.sortedAndFilteredRows.slice(startRow, endRow);

		return this.delayResponse(results);
	};

	private clientDemo = (): void => {
		this.changeDemo(false);
	};

	private serverDemo = (): void => {
		this.changeDemo(true);
	};

	private changeDemo = (isDataSourceRowModel: boolean): void => {
		this.currentPage = 0;
		this.currentPageSize = this.pageSizes[0];

		const columnDefs: Array<any> = [...this.state.columnDefs];
		const rowSelectionIndex = columnDefs.findIndex(
			(column: any) => column.cellType === 'RowSelection'
		);
		columnDefs[rowSelectionIndex].headerCheckboxSelection = !isDataSourceRowModel;

		this.setState({
			columnDefs,
			isDataSourceRowModel
		});
	};

	private doesFilterPass = (
		cellValue: string,
		columnFilterCondition: ColumnFilterCondition
	): boolean => {
		const isCombined = !!columnFilterCondition.condition2;
		if (isCombined) {
			const firstResult = this.individualConditionPasses(
				cellValue,
				columnFilterCondition.condition1
			);
			const secondResult = this.individualConditionPasses(
				cellValue,
				columnFilterCondition.condition2
			);
			if (columnFilterCondition.operator === 'AND') {
				return firstResult && secondResult;
			} else {
				return firstResult || secondResult;
			}
		} else {
			const result = this.individualConditionPasses(
				cellValue,
				columnFilterCondition.condition1
			);

			return result;
		}
	};

	private individualConditionPasses = (cellValue: string, condition: Condition) => {
		const filterText = condition.filterText;
		const filterOption = condition.type;

		if (cellValue === '') {
			return filterOption === 'notEqual' || filterOption === 'notContain';
		}

		const filterTextFormatted = this.formatValue(filterText);

		return this.comparator(filterOption, cellValue, filterTextFormatted);
	};

	private comparator = (filter: string, cellValue: string, filterText: string) => {
		switch (filter) {
			case 'contains':
				return cellValue.indexOf(filterText) >= 0;
			case 'notContain':
				return cellValue.indexOf(filterText) === -1;
			case 'equals':
				return cellValue === filterText;
			case 'notEqual':
				return cellValue !== filterText;
			case 'startsWith':
				return cellValue.indexOf(filterText) === 0;
			case 'endsWith':
				const index = cellValue.lastIndexOf(filterText);

				return index >= 0 && index === cellValue.length - filterText.length;
			default:
				// should never happen
				console.warn('invalid filter type ' + filter);

				return false;
		}
	};

	private formatValue = (value: any): string => {
		if (!value) {
			return '';
		}

		if (typeof value === 'string' || value instanceof String) {
			return value.toLowerCase();
		}

		return value.toString().toLowerCase();
	};

	private onColumnStateChange = (columnState: string): void => {
		console.log(columnState);
	};

	private onCellEditingStopped = (rowNodeId: string, columnField: string) => {
		console.log(
			`onCellEditingStopped called with rowNodeId = ${rowNodeId} and columnField = ${columnField}`
		);
	};

	private onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
	};

	private createCSSClass = (contents: string) => {
		const style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = contents;
		document.getElementsByTagName('head')[0].appendChild(style);
	};

	private onCellValueChange = (
		rowNodeId: string,
		columnField: string,
		oldValue: any,
		newValue: any
	) => {
		console.log(rowNodeId, columnField, oldValue, newValue);
		if (
			columnField === 'exampleInteger' &&
			((oldValue.cellValue > 5000 && newValue.cellValue <= 5000) ||
				(oldValue.cellValue <= 5000 && newValue.cellValue > 5000))
		) {
			this.gridApi.redrawRows({
				rowNodes: [this.gridApi.getRowNode(rowNodeId)]
			});
		}

		return Promise.resolve();
	};

	private onColumnResized = (columnField: string, newWidth: number) => {
		console.log(`columnField: ${columnField}, newWidth: ${newWidth}`);
	};
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App />, document.getElementById('app'));
});
