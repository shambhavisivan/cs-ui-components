import { CellValueChangedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGrid, CSGridProps, DataSourceAPI, Row, RowData, UserInfo } from '../../main';

describe('csgrid', () => {
	const userInfo: UserInfo = {
		currencyCode: 'GBP',
		userLocale: 'en-GB'
	};

	const baseProps: CSGridProps = {
		columnDefs: [
			{
				cellType: 'Text',
				flashOnCellValueChange: true,
				name: 'exampleText',
				userInfo,
				visible: true
			},
			{
				cellType: 'Text',
				name: 'exampleDecimal',
				userInfo,
				visible: true
			}
		],
		csGridPagination: {
			location: 'Header'
		},
		csGridQuickFilter: {
			location: 'None'
		},
		multiSelect: false,
		rowData: [
			{
				Id: {
					cellValue: '123'
				},
				exampleText: {
					cellValue: 'ABC'
				}
			},
			{
				Id: {
					cellValue: '456'
				},
				exampleDecimal: {
					cellValue: 567
				}
			}
		],
		uniqueIdentifierColumnName: 'Id'
	};

	describe('singleClickEdit', () => {
		test('singleClickEdit should be true when not defined in props', () => {
			const csGridShallow = shallow(<CSGrid {...baseProps} />);

			expect(csGridShallow.find(AgGridReact).props().singleClickEdit).toBeTruthy();
		});

		test('singleClickEdit from props should be used when defined', () => {
			const gridProps = {
				...baseProps,
				singleClickEdit: false
			};
			const csGridShallow = shallow(<CSGrid {...gridProps} />);

			expect(csGridShallow.find(AgGridReact).props().singleClickEdit).toBeFalsy();
		});
	});

	describe('getQuickFilterText', () => {
		test('getQuickFilterText should be empty when not present in column definition', () => {
			const csGridShallow = shallow(<CSGrid {...baseProps} />);

			expect(
				csGridShallow
					.find(AgGridReact)
					.props()
					.columnDefs.map((d: any) => d.getQuickFilterText !== undefined)
			).toEqual([false, false]);
		});

		test('getQuickFilterText should be set when not present in column definition', () => {
			const customProps: CSGridProps = JSON.parse(JSON.stringify(baseProps));
			const testFn = jest.fn(() => 'test');
			customProps.columnDefs[0].getQuickFilterText = testFn;

			const csGridShallow = shallow(<CSGrid {...customProps} />);

			expect(
				csGridShallow
					.find(AgGridReact)
					.props()
					.columnDefs.map((d: any) => d.getQuickFilterText !== undefined)
			).toEqual([true, false]);
		});

		test('getQuickFilterText should pass value to function in column definition', () => {
			const customProps: CSGridProps = JSON.parse(JSON.stringify(baseProps));
			const testFn = jest.fn(() => 'test');
			customProps.columnDefs[0].getQuickFilterText = testFn;

			const csGridShallow = shallow(<CSGrid {...customProps} />);
			const agGridFn = (csGridShallow.find(AgGridReact).props().columnDefs[0] as any)
				.getQuickFilterText;
			const result = agGridFn({ value: 'testinput' });
			expect(result).toBe('test');
			expect(testFn).toHaveBeenCalledWith('testinput');
		});
	});

	describe('onCellValueChanged', () => {
		const csgrid: any = shallow(<CSGrid {...baseProps} />).instance();

		const oldValue = {
			cellValue: 'ABC'
		};
		const newValue = {
			cellValue: 'DEF'
		};
		const baseCellValueChangedEvent: CellValueChangedEvent = {
			colDef: {
				field: 'exampleText'
			},
			data: {
				Id: {
					cellValue: '123'
				},
				exampleText: {
					cellValue: 'ABC'
				}
			},
			newValue,
			oldValue,

			api: undefined,
			column: undefined,
			columnApi: undefined,
			context: undefined,
			node: undefined,
			rowIndex: undefined,
			rowPinned: undefined,
			source: undefined,
			type: undefined,
			value: undefined
		};

		const mockFlashCells = jest.fn();
		csgrid.gridApi = {
			flashCells: mockFlashCells,
			getRowNode: jest.fn()
		};

		beforeEach(() => {
			mockFlashCells.mockClear();
		});

		it('calls flashCells on successful update', () => {
			csgrid.onCellValueChanged(baseCellValueChangedEvent);

			expect(mockFlashCells).toBeCalledWith({
				columns: ['exampleText'],
				fadeDelay: 0,
				flashDelay: 1000,
				rowNodes: expect.any(Array)
			});
		});

		it('does not call flashCells on successful update if csgrid colDef.flashOnCellValueChange is not true', () => {
			const mockCellValueChangedEvent: CellValueChangedEvent = {
				colDef: {
					field: 'exampleDecimal'
				},
				data: {
					Id: {
						cellValue: '456'
					},
					exampleDecimal: {
						cellValue: 999
					}
				},
				newValue: {
					cellValue: 888
				},
				oldValue: {
					cellValue: 567
				},

				api: undefined,
				column: undefined,
				columnApi: undefined,
				context: undefined,
				node: undefined,
				rowIndex: undefined,
				rowPinned: undefined,
				source: undefined,
				type: undefined,
				value: undefined
			};

			csgrid.onCellValueChanged(mockCellValueChangedEvent);

			expect(mockFlashCells).toBeCalledTimes(0);
		});

		it('does not call flashCells when there is errorMessage', () => {
			const mockCellValueChangedEventWithError = {
				...baseCellValueChangedEvent
			};

			mockCellValueChangedEventWithError.data.exampleText.errorMessage = 'An error occured';

			csgrid.onCellValueChanged(mockCellValueChangedEventWithError);

			expect(mockFlashCells).toBeCalledTimes(0);
		});

		it('does not call flashCells when oldValue and newValue are the same', () => {
			const mockCellValueChangedEvent = {
				...baseCellValueChangedEvent
			};
			mockCellValueChangedEvent.newValue = mockCellValueChangedEvent.oldValue;

			mockCellValueChangedEvent.data.exampleText.errorMessage = 'An error occurred';

			csgrid.onCellValueChanged(mockCellValueChangedEvent);

			expect(mockFlashCells).toBeCalledTimes(0);
		});
	});

	describe('suppressFieldDotNotation', () => {
		test('suppressFieldDotNotation should be true when not defined in props', () => {
			const csGridShallow = shallow(<CSGrid {...baseProps} />);

			expect(csGridShallow.find(AgGridReact).props().suppressFieldDotNotation).toBeTruthy();
		});

		test('suppressFieldDotNotation from props should be used when defined', () => {
			const gridProps = {
				...baseProps,
				suppressFieldDotNotation: false
			};
			const csGridShallow = shallow(<CSGrid {...gridProps} />);

			expect(csGridShallow.find(AgGridReact).props().suppressFieldDotNotation).toBeFalsy();
		});
	});

	describe('multiSelect', () => {
		test('If multiSelect is false then headerCheckboxSelection should be false for all column definitions', () => {
			baseProps.multiSelect = false;

			baseProps.columnDefs = baseProps.columnDefs.map(colDef => ({
				...colDef,
				headerCheckboxSelection: true
			}));

			const csGridShallow = shallow(<CSGrid {...baseProps} />);

			expect(
				csGridShallow
					.find(AgGridReact)
					.props()
					.columnDefs.some((columnDef: ColDef) => columnDef.headerCheckboxSelection)
			).toBeFalsy();
		});

		test('headerCheckboxSelection should be used if multiSelect is true', () => {
			baseProps.multiSelect = true;

			baseProps.columnDefs = baseProps.columnDefs.map(colDef => ({
				...colDef,
				headerCheckboxSelection: true
			}));

			const csGridShallow = shallow(<CSGrid {...baseProps} />);

			expect(
				csGridShallow
					.find(AgGridReact)
					.props()
					.columnDefs.every((columnDef: ColDef) => columnDef.headerCheckboxSelection)
			).toBeTruthy();
		});
	});

	test('Testing if customPaginationAPI is used then the api is passed to pagination and called when clicked.', () => {
		const customOnBtPreviousMock = jest.fn();

		baseProps.customPaginationAPI = {
			currentPage: 1,
			isLastPage: jest.fn(),
			onBtNext: jest.fn(),
			onBtPrevious: customOnBtPreviousMock,
			onPageSizeChange: jest.fn()
		};

		const csGridMount = mount(<CSGrid {...baseProps} />);

		const input = csGridMount.find('.cs-grid_pagination-icon-left');
		input.simulate('click');
		expect(customOnBtPreviousMock.mock.calls.length).toEqual(1);
	});
});

describe('rowdata Related', () => {
	const rowData: Array<RowData> = [
		{
			exampleBoolean: false,
			exampleCurrency: 'undefined as number',
			exampleDate: '1986-11-15',
			exampleDateTime: '1986-11-15 05:55',
			exampleDecimal: 99000.67878,
			exampleGuid: '980c2b1c-4542-57aa-bb39-161471d8256e',
			exampleInteger: 99000,
			exampleIntegerStep: 99000,
			exampleLookup: { text1: 'Sue', 'text2.name.thirdPart': '123456' },
			exampleMultiSelectLookup: [
				{ text1: 'Sue', 'text2.name.thirdPart': '123456' },
				{ text1: 'Sean', 'text2.name.thirdPart': '987654' }
			],
			exampleMultiSelectPicklist: ['Sean', 'Sue'],
			exampleMultiSelectPicklistWithLabels: [
				{ id: '7', label: 'Sue' },
				{ id: '11', label: 'Fred' }
			],
			examplePicklist: 'Sean',
			examplePicklistWithLabels: { id: '7', label: 'Sue' },
			exampleRowValidation: { status: 'Error', icons: ['medium', 'video'] },
			exampleText: 'Ford',
			row_cell_notifications: {
				exampleRowValidation: { message: 'Error 1Error 2', type: 'error' }
			},
			status: ['yellow', 'breadcrumbs']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 73000.98,
			exampleDate: '1992-01-29',
			exampleDateTime: '1992-01-29 15:25',
			exampleDecimal: 72000.67878,
			exampleGuid: '1d0ec757-41cd-cda6-76da-d54b1fb06382',
			exampleInteger: 72000,
			exampleIntegerStep: 72000,
			exampleLookup: { text1: 'Sally', 'text2.name.thirdPart': '079845' },
			exampleMultiSelectLookup: [
				{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
				{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
			],
			exampleMultiSelectPicklist: ['Bob', 'Harry'],
			exampleMultiSelectPicklistWithLabels: [
				{ id: '5', label: 'John' },
				{ id: '11', label: 'Fred' }
			],
			examplePicklist: 'Sally',
			examplePicklistWithLabels: { id: '11', label: 'Fred' },
			exampleRowValidation: { status: 'Info', icons: ['medium'] },
			exampleText: 'Toyota',
			row_cell_notifications: {
				examplePicklistWithLabels: { message: 'An error message', type: 'error' },
				exampleRowValidation: { message: 'Info 1 Info 2', type: 'error' }
			},
			status: ['yellow']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 34000.67,
			exampleDate: '1992-01-27',
			exampleDateTime: '1992-01-27 11:22',
			exampleDecimal: 35000.567567,
			exampleGuid: 'db24526d-931c-3f4f-87e8-a286addead3d',
			exampleInteger: 35000,
			exampleIntegerStep: 3500,
			exampleLookup: {
				hidden: '11111111111',
				text1: 'Bob',
				'text2.name.thirdPart': '645612'
			},
			exampleMultiSelectLookup: [
				{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
				{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
			],
			exampleMultiSelectPicklist: ['Harry', 'Sally'],
			exampleMultiSelectPicklistWithLabels: [
				{ id: '2', label: 'Harry' },
				{ id: '3', label: 'Sally' }
			],
			examplePicklist: 'Bob',
			examplePicklistWithLabels: { id: '2', label: 'Harry' },
			exampleRowValidation: { status: 'None' },
			exampleText: 'Toy&o|:;ta',
			row_cell_notifications: {},
			status: ['red']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 73000.98,
			exampleDate: '1992-01-29',
			exampleDateTime: '1992-01-29 15:25',
			exampleDecimal: 72000.67878,
			exampleGuid: '7cfe3d51-1e73-799f-1d5d-e77276a2d316',
			exampleInteger: 72000,
			exampleIntegerStep: 72000,
			exampleLookup: { text1: 'Sally', 'text2.name.thirdPart': '079845' },
			exampleMultiSelectLookup: [
				{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
				{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
			],
			exampleMultiSelectPicklist: ['Bob', 'Harry'],
			exampleMultiSelectPicklistWithLabels: [
				{ id: '5', label: 'John' },
				{ id: '11', label: 'Fred' }
			],
			examplePicklist: 'Sally',
			examplePicklistWithLabels: { id: '11', label: 'Fred' },
			exampleRowValidation: { status: 'Info', icons: ['medium'] },
			exampleText: 'Toyota',
			row_cell_notifications: {
				examplePicklistWithLabels: { message: 'An error message', type: 'error' },
				exampleRowValidation: { message: 'Info 1 Info 2', type: 'error' }
			},
			status: ['yellow']
		},
		{
			exampleBoolean: false,
			exampleCurrency: 73000.98,
			exampleDate: '1992-01-29',
			exampleDateTime: '1992-01-29 15:25',
			exampleDecimal: 72000.67878,
			exampleGuid: '6c495e38-4d72-a198-884d-b2762e47bede',
			exampleInteger: 72000,
			exampleIntegerStep: 72000,
			exampleLookup: { text1: 'Sally', 'text2.name.thirdPart': '079845' },
			exampleMultiSelectLookup: [
				{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
				{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
			],
			exampleMultiSelectPicklist: ['Bob', 'Harry'],
			exampleMultiSelectPicklistWithLabels: [
				{ id: '5', label: 'John' },
				{ id: '11', label: 'Fred' }
			],
			examplePicklist: 'Sally',
			examplePicklistWithLabels: { id: '11', label: 'Fred' },
			exampleRowValidation: { status: 'Info', icons: ['medium'] },
			exampleText: 'Toyota',
			row_cell_notifications: {
				examplePicklistWithLabels: { message: 'An error message', type: 'error' },
				exampleRowValidation: { message: 'Info 1 Info 2', type: 'error' }
			},
			status: ['yellow']
		}
	];

	const legacyData: Array<Row> = [
		{
			exampleBoolean: { cellValue: false },
			exampleCurrency: { cellValue: 34000.67 },
			exampleDate: { cellValue: '1992-01-27' },
			exampleDateTime: { cellValue: '1992-01-27 11:22' },
			exampleDecimal: { cellValue: 35000.567567 },
			exampleGuid: { cellValue: 'e0dc42da-3960-5dc8-c5f0-1aab03f92d9f' },
			exampleInteger: { cellValue: 35000 },
			exampleIntegerStep: { cellValue: 3500 },
			exampleLookup: {
				cellValue: { hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' }
			},
			exampleMultiSelectLookup: {
				cellValue: [
					{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
					{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
				]
			},
			exampleMultiSelectPicklist: { cellValue: ['Harry', 'Sally'] },
			exampleMultiSelectPicklistWithLabels: {
				cellValue: [
					{ id: '2', label: 'Harry' },
					{ id: '3', label: 'Sally' }
				]
			},
			examplePicklist: { cellValue: 'Bob' },
			examplePicklistWithLabels: { cellValue: { id: '2', label: 'Harry' } },
			exampleRowValidation: { cellValue: { status: 'None' } },
			exampleText: { cellValue: 'Toy&o|:;ta' },
			status: { cellValue: ['red'] }
		},
		{
			exampleBoolean: { cellValue: false, errorMessage: '' },
			exampleCurrency: { cellValue: 34000.67, errorMessage: '' },
			exampleDate: { cellValue: '1986-11-15', errorMessage: '' },
			exampleDateTime: { cellValue: '1986-11-15 05:55', errorMessage: '' },
			exampleDecimal: { cellValue: 99000.67878, errorMessage: '' },
			exampleGuid: { cellValue: '3e024fe3-4309-8892-ab02-9f930587cb01' },
			exampleInteger: { cellValue: 99000, errorMessage: '' },
			exampleIntegerStep: { cellValue: 99000, errorMessage: '' },
			exampleLookup: {
				cellValue: { text1: 'Sue', 'text2.name.thirdPart': '123456' },
				errorMessage: ''
			},
			exampleMultiSelectLookup: {
				cellValue: [
					{ text1: 'Sue', 'text2.name.thirdPart': '123456' },
					{ text1: 'Sean', 'text2.name.thirdPart': '987654' }
				],
				errorMessage: ''
			},
			exampleMultiSelectPicklist: { cellValue: ['Sean', 'Sue'], errorMessage: '' },
			exampleMultiSelectPicklistWithLabels: {
				cellValue: [
					{ id: '7', label: 'Sue' },
					{ id: '11', label: 'Fred' }
				],
				errorMessage: ''
			},
			examplePicklist: { cellValue: 'Sean', errorMessage: '' },
			examplePicklistWithLabels: { cellValue: { id: '7', label: 'Sue' }, errorMessage: '' },
			exampleRowValidation: {
				cellValue: { status: 'Error', icons: ['medium', 'video'] },
				errorMessage: 'Error 1Error 2'
			},
			exampleText: { cellValue: 'Ford', errorMessage: '' },
			status: { cellValue: ['yellow', 'breadcrumbs'] }
		},
		{
			exampleBoolean: {
				cellValue: true,
				errorMessage:
					'This is a really long error message so that we can test various sizes. It is so very very looooonnnnngggg.'
			},
			exampleCurrency: { cellValue: 33000.77, errorMessage: 'An error message' },
			exampleDate: { cellValue: '1992-01-28', errorMessage: 'An error message' },
			exampleDateTime: { cellValue: '1992-01-28 14:45', errorMessage: 'An error message' },
			exampleDecimal: { cellValue: 32000.56756, errorMessage: 'An error message' },
			exampleGuid: { cellValue: 'ca92e0d8-9b79-546a-e356-4e01f7eccdb1' },
			exampleInteger: { cellValue: 32000, errorMessage: 'An error message' },
			exampleIntegerStep: { cellValue: 32000, errorMessage: 'An error message' },
			exampleLookup: {
				cellValue: { text1: 'Harry', 'text2.name.thirdPart': '564768' },
				errorMessage: 'An error message'
			},
			exampleMultiSelectLookup: {
				cellValue: [
					{ text1: 'Harry', 'text2.name.thirdPart': '564768' },
					{ text1: 'Sally', 'text2.name.thirdPart': '079845' }
				],
				errorMessage: 'An error message'
			},
			exampleMultiSelectPicklist: {
				cellValue: ['Sally', 'Bob'],
				errorMessage: 'An error message'
			},
			exampleMultiSelectPicklistWithLabels: {
				cellValue: [
					{ id: '5', label: 'John' },
					{ id: '3', label: 'Sally' }
				]
			},
			examplePicklist: { cellValue: 'Harry', errorMessage: 'An error message' },
			examplePicklistWithLabels: {
				cellValue: { id: '5', label: 'John' },
				errorMessage: 'An error message'
			},
			exampleRowValidation: {
				cellValue: { status: 'Error' },
				errorMessage: 'Error 1 Error 2'
			},
			exampleText: { cellValue: 'Ford', errorMessage: 'An error message' },
			status: { cellValue: ['red', 'yellow', 'breadcrumbs'] }
		},
		{
			exampleBoolean: { cellValue: false },
			exampleCurrency: { cellValue: 34000.67 },
			exampleDate: { cellValue: '1992-01-27' },
			exampleDateTime: { cellValue: '1992-01-27 11:22' },
			exampleDecimal: { cellValue: 35000.567567 },
			exampleGuid: { cellValue: 'fe6d5857-f1ed-f075-d2ac-c6377603d1cf' },
			exampleInteger: { cellValue: 35000 },
			exampleIntegerStep: { cellValue: 3500 },
			exampleLookup: {
				cellValue: { hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' }
			},
			exampleMultiSelectLookup: {
				cellValue: [
					{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
					{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
				]
			},
			exampleMultiSelectPicklist: { cellValue: ['Harry', 'Sally'] },
			exampleMultiSelectPicklistWithLabels: {
				cellValue: [
					{ id: '2', label: 'Harry' },
					{ id: '3', label: 'Sally' }
				]
			},
			examplePicklist: { cellValue: 'Bob' },
			examplePicklistWithLabels: { cellValue: { id: '2', label: 'Harry' } },
			exampleRowValidation: { cellValue: { status: 'None' } },
			exampleText: { cellValue: 'Toy&o|:;ta' },
			status: { cellValue: ['red'] }
		},
		{
			exampleBoolean: { cellValue: false },
			exampleCurrency: { cellValue: 73000.98 },
			exampleDate: { cellValue: '1992-01-29' },
			exampleDateTime: { cellValue: '1992-01-29 15:25' },
			exampleDecimal: { cellValue: 72000.67878 },
			exampleGuid: { cellValue: 'e360a27e-f726-6676-b9ca-b26a6de5d51f' },
			exampleInteger: { cellValue: 72000 },
			exampleIntegerStep: { cellValue: 72000 },
			exampleLookup: { cellValue: { text1: 'Sally', 'text2.name.thirdPart': '079845' } },
			exampleMultiSelectLookup: {
				cellValue: [
					{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
					{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
				]
			},
			exampleMultiSelectPicklist: { cellValue: ['Bob', 'Harry'] },
			exampleMultiSelectPicklistWithLabels: {
				cellValue: [
					{ id: '5', label: 'John' },
					{ id: '11', label: 'Fred' }
				]
			},
			examplePicklist: { cellValue: 'Sally' },
			examplePicklistWithLabels: {
				cellValue: { id: '11', label: 'Fred' },
				errorMessage: 'An error message'
			},
			exampleRowValidation: {
				cellValue: { status: 'Info', icons: ['medium'] },
				errorMessage: 'Info 1 Info 2'
			},
			exampleText: { cellValue: 'Toyota' },
			status: { cellValue: ['yellow'] }
		}
	];

	const csGridBaseProps: CSGridProps = {
		columnDefs: [],
		csGridPagination: {
			location: 'Footer'
		},
		csGridQuickFilter: {
			location: 'Header'
		},
		multiSelect: false,
		rowData,
		uniqueIdentifierColumnName: 'exampleText'
	};

	const component = shallow<CSGrid>(<CSGrid {...csGridBaseProps} />);

	test('new row data', () => {
		expect(component.instance().state.isUsingLegacyRowDataModel).toBe(false);
		expect(component.instance().state.rowData).toEqual(
			component.instance().convertRowDataToLegacyRow(rowData)
		);
	});

	test('new row data', () => {
		const baseProps: CSGridProps = {
			columnDefs: [],
			csGridPagination: {
				location: 'Footer'
			},
			csGridQuickFilter: {
				location: 'Header'
			},
			multiSelect: false,
			rowData: legacyData,
			uniqueIdentifierColumnName: 'exampleText'
		};
		const csgridcomp = shallow<CSGrid>(<CSGrid {...baseProps} />);
		expect(csgridcomp.instance().state.isUsingLegacyRowDataModel).toBe(true);
		expect(csgridcomp.instance().state.rowData).toEqual(legacyData);
	});

	test('convertLegacyRowToRowData', () => {
		const result = component.instance().convertLegacyRowToRowData(legacyData);
		const expected: Array<Omit<RowData, 'row_cell_notifications'>> = [
			{
				exampleBoolean: false,
				exampleCurrency: 34000.67,
				exampleDate: '1992-01-27',
				exampleDateTime: '1992-01-27 11:22',
				exampleDecimal: 35000.567567,
				exampleGuid: 'e0dc42da-3960-5dc8-c5f0-1aab03f92d9f',
				exampleInteger: 35000,
				exampleIntegerStep: 3500,
				exampleLookup: {
					hidden: '11111111111',
					text1: 'Bob',
					'text2.name.thirdPart': '645612'
				},
				exampleMultiSelectLookup: [
					{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
					{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
				],
				exampleMultiSelectPicklist: ['Harry', 'Sally'],
				exampleMultiSelectPicklistWithLabels: [
					{ id: '2', label: 'Harry' },
					{ id: '3', label: 'Sally' }
				],
				examplePicklist: 'Bob',
				examplePicklistWithLabels: { id: '2', label: 'Harry' },
				exampleRowValidation: { status: 'None' },
				exampleText: 'Toy&o|:;ta',
				status: ['red']
			},
			{
				exampleBoolean: false,
				exampleCurrency: 34000.67,
				exampleDate: '1986-11-15',
				exampleDateTime: '1986-11-15 05:55',
				exampleDecimal: 99000.67878,
				exampleGuid: '3e024fe3-4309-8892-ab02-9f930587cb01',
				exampleInteger: 99000,
				exampleIntegerStep: 99000,
				exampleLookup: { text1: 'Sue', 'text2.name.thirdPart': '123456' },
				exampleMultiSelectLookup: [
					{ text1: 'Sue', 'text2.name.thirdPart': '123456' },
					{ text1: 'Sean', 'text2.name.thirdPart': '987654' }
				],
				exampleMultiSelectPicklist: ['Sean', 'Sue'],
				exampleMultiSelectPicklistWithLabels: [
					{ id: '7', label: 'Sue' },
					{ id: '11', label: 'Fred' }
				],
				examplePicklist: 'Sean',
				examplePicklistWithLabels: { id: '7', label: 'Sue' },
				exampleRowValidation: { icons: ['medium', 'video'], status: 'Error' },
				exampleText: 'Ford',
				status: ['yellow', 'breadcrumbs']
			},
			{
				exampleBoolean: true,
				exampleCurrency: 33000.77,
				exampleDate: '1992-01-28',
				exampleDateTime: '1992-01-28 14:45',
				exampleDecimal: 32000.56756,
				exampleGuid: 'ca92e0d8-9b79-546a-e356-4e01f7eccdb1',
				exampleInteger: 32000,
				exampleIntegerStep: 32000,
				exampleLookup: { text1: 'Harry', 'text2.name.thirdPart': '564768' },
				exampleMultiSelectLookup: [
					{ text1: 'Harry', 'text2.name.thirdPart': '564768' },
					{ text1: 'Sally', 'text2.name.thirdPart': '079845' }
				],
				exampleMultiSelectPicklist: ['Sally', 'Bob'],
				exampleMultiSelectPicklistWithLabels: [
					{ id: '5', label: 'John' },
					{ id: '3', label: 'Sally' }
				],
				examplePicklist: 'Harry',
				examplePicklistWithLabels: { id: '5', label: 'John' },
				exampleRowValidation: { status: 'Error' },
				exampleText: 'Ford',
				status: ['red', 'yellow', 'breadcrumbs']
			},
			{
				exampleBoolean: false,
				exampleCurrency: 34000.67,
				exampleDate: '1992-01-27',
				exampleDateTime: '1992-01-27 11:22',
				exampleDecimal: 35000.567567,
				exampleGuid: 'fe6d5857-f1ed-f075-d2ac-c6377603d1cf',
				exampleInteger: 35000,
				exampleIntegerStep: 3500,
				exampleLookup: {
					hidden: '11111111111',
					text1: 'Bob',
					'text2.name.thirdPart': '645612'
				},
				exampleMultiSelectLookup: [
					{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
					{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
				],
				exampleMultiSelectPicklist: ['Harry', 'Sally'],
				exampleMultiSelectPicklistWithLabels: [
					{ id: '2', label: 'Harry' },
					{ id: '3', label: 'Sally' }
				],
				examplePicklist: 'Bob',
				examplePicklistWithLabels: { id: '2', label: 'Harry' },
				exampleRowValidation: { status: 'None' },
				exampleText: 'Toy&o|:;ta',
				status: ['red']
			},
			{
				exampleBoolean: false,
				exampleCurrency: 73000.98,
				exampleDate: '1992-01-29',
				exampleDateTime: '1992-01-29 15:25',
				exampleDecimal: 72000.67878,
				exampleGuid: 'e360a27e-f726-6676-b9ca-b26a6de5d51f',
				exampleInteger: 72000,
				exampleIntegerStep: 72000,
				exampleLookup: { text1: 'Sally', 'text2.name.thirdPart': '079845' },
				exampleMultiSelectLookup: [
					{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
					{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
				],
				exampleMultiSelectPicklist: ['Bob', 'Harry'],
				exampleMultiSelectPicklistWithLabels: [
					{ id: '5', label: 'John' },
					{ id: '11', label: 'Fred' }
				],
				examplePicklist: 'Sally',
				examplePicklistWithLabels: { id: '11', label: 'Fred' },
				exampleRowValidation: { icons: ['medium'], status: 'Info' },
				exampleText: 'Toyota',
				status: ['yellow']
			}
		];
		expect(result).toEqual(expected);
	});

	test('convertRowDataToLegacyRow', () => {
		const result = component.instance().convertRowDataToLegacyRow(rowData);
		const expected = [
			{
				exampleBoolean: { cellValue: false },
				exampleCurrency: { cellValue: 'undefined as number' },
				exampleDate: { cellValue: '1986-11-15' },
				exampleDateTime: { cellValue: '1986-11-15 05:55' },
				exampleDecimal: { cellValue: 99000.67878 },
				exampleGuid: {
					cellValue: '980c2b1c-4542-57aa-bb39-161471d8256e'
				},
				exampleInteger: { cellValue: 99000 },
				exampleIntegerStep: { cellValue: 99000 },
				exampleLookup: {
					cellValue: { text1: 'Sue', 'text2.name.thirdPart': '123456' }
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{ text1: 'Sue', 'text2.name.thirdPart': '123456' },
						{ text1: 'Sean', 'text2.name.thirdPart': '987654' }
					]
				},
				exampleMultiSelectPicklist: { cellValue: ['Sean', 'Sue'] },
				exampleMultiSelectPicklistWithLabels: {
					cellValue: [
						{ id: '7', label: 'Sue' },
						{ id: '11', label: 'Fred' }
					]
				},
				examplePicklist: { cellValue: 'Sean' },
				examplePicklistWithLabels: {
					cellValue: { id: '7', label: 'Sue' }
				},
				exampleRowValidation: {
					cellValue: { icons: ['medium', 'video'], status: 'Error' },
					errorMessage: 'Error 1Error 2'
				},
				exampleText: { cellValue: 'Ford' },
				status: { cellValue: ['yellow', 'breadcrumbs'] }
			},
			{
				exampleBoolean: { cellValue: false },
				exampleCurrency: { cellValue: 73000.98 },
				exampleDate: { cellValue: '1992-01-29' },
				exampleDateTime: { cellValue: '1992-01-29 15:25' },
				exampleDecimal: { cellValue: 72000.67878 },
				exampleGuid: {
					cellValue: '1d0ec757-41cd-cda6-76da-d54b1fb06382'
				},
				exampleInteger: { cellValue: 72000 },
				exampleIntegerStep: { cellValue: 72000 },
				exampleLookup: {
					cellValue: { text1: 'Sally', 'text2.name.thirdPart': '079845' }
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
						{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
					]
				},
				exampleMultiSelectPicklist: { cellValue: ['Bob', 'Harry'] },
				exampleMultiSelectPicklistWithLabels: {
					cellValue: [
						{ id: '5', label: 'John' },
						{ id: '11', label: 'Fred' }
					]
				},
				examplePicklist: { cellValue: 'Sally' },
				examplePicklistWithLabels: {
					cellValue: { id: '11', label: 'Fred' },
					errorMessage: 'An error message'
				},
				exampleRowValidation: {
					cellValue: { icons: ['medium'], status: 'Info' },
					errorMessage: 'Info 1 Info 2'
				},
				exampleText: { cellValue: 'Toyota' },
				status: { cellValue: ['yellow'] }
			},
			{
				exampleBoolean: { cellValue: false },
				exampleCurrency: { cellValue: 34000.67 },
				exampleDate: { cellValue: '1992-01-27' },
				exampleDateTime: { cellValue: '1992-01-27 11:22' },
				exampleDecimal: { cellValue: 35000.567567 },
				exampleGuid: {
					cellValue: 'db24526d-931c-3f4f-87e8-a286addead3d'
				},
				exampleInteger: { cellValue: 35000 },
				exampleIntegerStep: { cellValue: 3500 },
				exampleLookup: {
					cellValue: {
						hidden: '11111111111',
						text1: 'Bob',
						'text2.name.thirdPart': '645612'
					}
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{ hidden: '11111111111', text1: 'Bob', 'text2.name.thirdPart': '645612' },
						{ hidden: '11111111111', text1: 'Harry', 'text2.name.thirdPart': '564768' }
					]
				},
				exampleMultiSelectPicklist: { cellValue: ['Harry', 'Sally'] },
				exampleMultiSelectPicklistWithLabels: {
					cellValue: [
						{ id: '2', label: 'Harry' },
						{ id: '3', label: 'Sally' }
					]
				},
				examplePicklist: { cellValue: 'Bob' },
				examplePicklistWithLabels: {
					cellValue: { id: '2', label: 'Harry' }
				},
				exampleRowValidation: { cellValue: { status: 'None' } },
				exampleText: { cellValue: 'Toy&o|:;ta' },
				status: { cellValue: ['red'] }
			},
			{
				exampleBoolean: { cellValue: false },
				exampleCurrency: { cellValue: 73000.98 },
				exampleDate: { cellValue: '1992-01-29' },
				exampleDateTime: { cellValue: '1992-01-29 15:25' },
				exampleDecimal: { cellValue: 72000.67878 },
				exampleGuid: {
					cellValue: '7cfe3d51-1e73-799f-1d5d-e77276a2d316'
				},
				exampleInteger: { cellValue: 72000 },
				exampleIntegerStep: { cellValue: 72000 },
				exampleLookup: {
					cellValue: { text1: 'Sally', 'text2.name.thirdPart': '079845' }
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
						{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
					]
				},
				exampleMultiSelectPicklist: { cellValue: ['Bob', 'Harry'] },
				exampleMultiSelectPicklistWithLabels: {
					cellValue: [
						{ id: '5', label: 'John' },
						{ id: '11', label: 'Fred' }
					]
				},
				examplePicklist: { cellValue: 'Sally' },
				examplePicklistWithLabels: {
					cellValue: { id: '11', label: 'Fred' },
					errorMessage: 'An error message'
				},
				exampleRowValidation: {
					cellValue: { icons: ['medium'], status: 'Info' },
					errorMessage: 'Info 1 Info 2'
				},
				exampleText: { cellValue: 'Toyota' },
				status: { cellValue: ['yellow'] }
			},
			{
				exampleBoolean: { cellValue: false },
				exampleCurrency: { cellValue: 73000.98 },
				exampleDate: { cellValue: '1992-01-29' },
				exampleDateTime: { cellValue: '1992-01-29 15:25' },
				exampleDecimal: { cellValue: 72000.67878 },
				exampleGuid: {
					cellValue: '6c495e38-4d72-a198-884d-b2762e47bede'
				},
				exampleInteger: { cellValue: 72000 },
				exampleIntegerStep: { cellValue: 72000 },
				exampleLookup: {
					cellValue: { text1: 'Sally', 'text2.name.thirdPart': '079845' }
				},
				exampleMultiSelectLookup: {
					cellValue: [
						{ text1: 'Sally', 'text2.name.thirdPart': '079845' },
						{ text1: 'Bob', 'text2.name.thirdPart': '645612' }
					]
				},
				exampleMultiSelectPicklist: { cellValue: ['Bob', 'Harry'] },
				exampleMultiSelectPicklistWithLabels: {
					cellValue: [
						{ id: '5', label: 'John' },
						{ id: '11', label: 'Fred' }
					]
				},
				examplePicklist: { cellValue: 'Sally' },
				examplePicklistWithLabels: {
					cellValue: { id: '11', label: 'Fred' },
					errorMessage: 'An error message'
				},
				exampleRowValidation: {
					cellValue: { icons: ['medium'], status: 'Info' },
					errorMessage: 'Info 1 Info 2'
				},
				exampleText: { cellValue: 'Toyota' },
				status: { cellValue: ['yellow'] }
			}
		];

		expect(result).toEqual(expected);
	});

	test('updateDataSource is called when OnGridReady is called', () => {
		const dataSourceAPI: DataSourceAPI = {
			isLastPage: jest.fn(),
			onBtNext: jest.fn(),
			onBtPrevious: jest.fn(),
			onContextChange: jest.fn()
		};
		const gridProps = {
			...csGridBaseProps,
			dataSourceAPI,
			singleClickEdit: false
		};
		const event: GridReadyEvent = {
			api: {
				setDatasource: jest.fn(),
				sizeColumnsToFit: jest.fn()
			} as any,
			columnApi: undefined,
			type: undefined
		};
		const csGridShallow = shallow<CSGrid>(<CSGrid {...gridProps} />);
		const spyUpdateDataSource = jest.spyOn(csGridShallow.instance(), 'updateDataSource');
		csGridShallow.instance().onGridReady(event);
		expect(spyUpdateDataSource).toHaveBeenCalledTimes(1);
	});

	test('sizeColumnsToFit is called when OnGridReady and componentDidUpdate are called', () => {
		const dataSourceAPI: DataSourceAPI = {
			isLastPage: jest.fn(),
			onBtNext: jest.fn(),
			onBtPrevious: jest.fn(),
			onContextChange: jest.fn()
		};
		const gridProps = {
			...csGridBaseProps,
			dataSourceAPI,
			singleClickEdit: false,
			sizeColumnsToFit: true
		};
		const event: GridReadyEvent = {
			api: {
				setDatasource: jest.fn(),
				sizeColumnsToFit: jest.fn()
			} as any,
			columnApi: undefined,
			type: undefined
		};
		const csGridShallow = shallow<CSGrid>(<CSGrid {...gridProps} />);
		csGridShallow.instance().onGridReady(event);
		expect(event.api.sizeColumnsToFit).toHaveBeenCalledTimes(1);
		csGridShallow.instance().componentDidUpdate({} as any, {} as any);
		/**
		 * sizeColumnsToFit is expected to be called thrice at this point. Once for onGridReady,
		 * and twice for componentDidUpdate because componentDidUpdate is called twice. Once for shallow(),
		 * and once when we called manually above.
		 */
		expect(event.api.sizeColumnsToFit).toHaveBeenCalledTimes(3);
	});

	test('suppressSizeToFit when assigned to columndefs should mapped to aggridcolumnDef', () => {
		const dataSourceAPI: DataSourceAPI = {
			isLastPage: jest.fn(),
			onBtNext: jest.fn(),
			onBtPrevious: jest.fn(),
			onContextChange: jest.fn()
		};
		const baseProps = { ...csGridBaseProps };
		baseProps.columnDefs = [{ suppressSizeToFit: true } as any, ...baseProps.columnDefs];

		const gridProps = {
			...baseProps,
			dataSourceAPI,
			singleClickEdit: false,
			sizeColumnsToFit: true
		};
		const csGridShallow = shallow<CSGrid>(<CSGrid {...gridProps} />);
		const agGridColDef: any = csGridShallow.find(AgGridReact).props().columnDefs;
		expect(agGridColDef[0].suppressSizeToFit).toEqual(true);
	});

	test('cellClassRules when assigned to columndefs should mapped to aggridcolumnDef', () => {
		const dataSourceAPI: DataSourceAPI = {
			isLastPage: jest.fn(),
			onBtNext: jest.fn(),
			onBtPrevious: jest.fn(),
			onContextChange: jest.fn()
		};
		const baseProps = { ...csGridBaseProps };

		const cellClassRules = {
			'my-custom-class': jest.fn()
		};

		baseProps.columnDefs = [{ cellClassRules } as any, ...baseProps.columnDefs];

		const gridProps = {
			...baseProps,
			dataSourceAPI,
			singleClickEdit: false
		};
		const csGridShallow = shallow<CSGrid>(<CSGrid {...gridProps} />);
		const agGridColDef: any = csGridShallow.find(AgGridReact).props().columnDefs;
		expect(agGridColDef[0].cellClassRules).toEqual(cellClassRules);
	});

	test('updateDataSource should throw error when no datasourceAPI is given', () => {
		const gridProps = {
			...csGridBaseProps,
			singleClickEdit: false
		};
		const event: GridReadyEvent = {
			api: {
				setDatasource: jest.fn()
			} as any,
			columnApi: undefined,
			type: undefined
		};
		try {
			const csGridShallow = shallow<CSGrid>(<CSGrid {...gridProps} />);
			csGridShallow.instance().updateDataSource();
			expect(true).toBe(false);
		} catch (e) {
			expect(e.message).toBe(
				'CSGrid::UpdateDataSource: Cannot call updateDataSource when dataSourceAPI is null'
			);
		}
	});

	test('ColId should be present on all column definitions', () => {
		const csGridShallow = shallow<CSGrid>(<CSGrid {...csGridBaseProps} />);

		expect(
			csGridShallow
				.find(AgGridReact)
				.props()
				.columnDefs.every(
					(columnDef: ColDef) => columnDef.colId && columnDef.colId == columnDef.field
				)
		).toBeTruthy();
	});
});
