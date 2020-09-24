import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { shallow } from 'enzyme';
import React from 'react';
import { UserInfo, CSGridCellEditorProps, LookupProps, CSGridLookupSearchResult, CSGridLookupEditor } from '../../main';
import { LookupSearchColDef } from  '../../src/interfaces/cs-grid-col-def'

describe('CS Grid Lookup Editor', () => {
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<Record<string, string>> & LookupProps;

	let stopEditingMock: jest.Mock<any, any>;

	const lookupColDefs: LookupSearchColDef[] = [
		{
			header: {
				label: 'Name',
			},
			name: 'Name',
			hasFilter: false
		},
		{
			header: {
				label: 'Number of Locations',
			},
			name: 'NumberofLocations__c',
		},
	];
	const lookupSearchResult: CSGridLookupSearchResult = {
		rowData: [],
		columnDefs: lookupColDefs,
	};

	const getLookupValues = jest
		.fn()
		.mockReturnValue(Promise.resolve(lookupSearchResult));

	beforeEach(() => {
		editable = false;
		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
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
			eGridCell: { className: 'className' } as any,
			node: new RowNode(),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			getLookupValues,
			displayColumn: 'Name',
			guidColumn: 'Id',
			value: {
				cellValue: {'Id': ''}
			}
		};
	});

	test('Should use hasFilter prop when it exists in props', async () => {
		const cellEditor = shallow(<CSGridLookupEditor {...cSGridCellEditorProps} />);
		await cellEditor.update();

		expect(getLookupValues).toBeCalled();
		expect(cellEditor.find(AgGridReact).props().columnDefs).toEqual([
			{
				"field": "Name",
				"filter": false,
				"headerName": "Name",
			},
			{
				"field": "NumberofLocations__c",
				"headerName": "Number of Locations",
			},
		]);
	});
});
