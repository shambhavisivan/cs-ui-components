import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { shallow } from 'enzyme';
import React from 'react';
import {
	CellData,
	CSGridCellEditorProps,
	CSGridLookupEditor,
	CSGridLookupSearchResult,
	LookupProps,
	UserInfo
} from '../../main';
import { LookupSearchColDef } from '../../src/interfaces/cs-grid-col-def';

describe('CS Grid Lookup Editor', () => {
	let exampleLookupEditor: CellData<Record<string, string>>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<Record<string, string>> & LookupProps;

	let stopEditingMock: jest.Mock<any, any>;

	const lookupColDefs: Array<LookupSearchColDef> = [
		{
			hasFilter: false,
			header: {
				label: 'Name'
			},
			name: 'Name'
		},
		{
			header: {
				label: 'Number of Locations'
			},
			name: 'NumberOfLocations__c'
		}
	];
	const lookupSearchResult: CSGridLookupSearchResult = {
		columnDefs: lookupColDefs,
		rowData: []
	};

	const getLookupValues = jest.fn().mockReturnValue(Promise.resolve(lookupSearchResult));

	beforeEach(() => {
		editable = false;
		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
		};

		exampleLookupEditor = {
			cellValue: { Name: 'Foo', 'text2.name.thirdPart': '123456' },
			errorMessage: 'errorMessage'
		};

		stopEditingMock = jest.fn();

		colDef = { editable };
		column = new Column(colDef, null, columnId, true);
		columnApi = new ColumnApi();
		columnApi.getAllGridColumns = () => [column];

		cSGridCellEditorProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi,
			context: {},
			data: {},
			displayColumn: 'Name',
			eGridCell: { className: 'className' } as any,
			getLookupValues,
			guidColumn: 'Id',
			node: new RowNode(),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleLookupEditor
		};
	});

	test('Should use hasFilter prop when it exists in props', async () => {
		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);

		// tslint:disable-next-line: await-promise
		await cellEditor.update();

		expect(getLookupValues).toBeCalled();
		expect(cellEditor.find(AgGridReact).props().columnDefs).toEqual([
			{
				field: 'Name',
				filter: false,
				headerName: 'Name'
			},
			{
				field: 'NumberOfLocations__c',
				headerName: 'Number of Locations'
			}
		]);
	});

	test('The lookup editor should set the multi select flag to false.', async () => {
		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridLookupEditor;

		expect(instance.multiSelect).toBeFalsy();
	});

	test('If the value is set then the lookup editor should show the current value in the search input and a clear button.', async () => {
		cSGridCellEditorProps.minSearchTermLength = undefined;
		const expectedValue = 'Foo';

		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);

		expect(
			cellEditor.containsMatchingElement(
				<div className='cs-grid_search'>
					<span className='cs-grid_search-icon' />
					<input
						className='cs-grid_search-input'
						type='text'
						value={expectedValue}
						title={expectedValue}
					/>
					<button className='cs-grid_clear-button' title={'Clear value'} />
				</div>
			)
		).toBeTruthy();
	});

	test('If the value is not set then the lookup editor should show a placeholder in the search input and no clear button.', async () => {
		cSGridCellEditorProps.minSearchTermLength = undefined;
		cSGridCellEditorProps.value = {
			cellValue: undefined,
			errorMessage: 'errorMessage'
		};

		const expectedPlaceHolder = 'Search...';

		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);

		expect(
			cellEditor.containsMatchingElement(
				<input
					className='cs-grid_search-input'
					type='text'
					placeholder={expectedPlaceHolder}
					title={expectedPlaceHolder}
				/>
			)
		).toBeTruthy();

		expect(
			cellEditor.containsMatchingElement(<button className='cs-grid_clear-button' />)
		).toBeFalsy();
	});

	test('onSelectionChanged should not change the value if rowDeselection is set to false.', async () => {
		cSGridCellEditorProps.rowDeselection = false;

		const expectedValue = {
			cellValue: { Name: 'Foo', bar: '123456' }
		};
		cSGridCellEditorProps.value = expectedValue;

		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridLookupEditor;

		// Get ag-grid to return no selected rows.
		instance.gridApi = {} as any;
		instance.gridApi.getSelectedRows = jest.fn().mockReturnValue([]);

		(instance as any).onSelectionChanged();

		expect((cellEditor.instance() as CSGridLookupEditor).state.value).toEqual(expectedValue);
	});

	test('onSelectionChanged should change the value if rowDeselection is set to true.', async () => {
		cSGridCellEditorProps.rowDeselection = true;

		const expectedValue = {
			cellValue: { Name: 'Foo', bar: '123456' }
		};
		cSGridCellEditorProps.value = expectedValue;

		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridLookupEditor;

		// Get ag-grid to return no selected rows.
		instance.gridApi = {} as any;
		instance.gridApi.getSelectedRows = jest.fn().mockReturnValue([]);

		(instance as any).onSelectionChanged();

		expect((cellEditor.instance() as CSGridLookupEditor).state.value).not.toEqual(
			expectedValue
		);
	});
});
