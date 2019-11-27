import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridBooleanEditor } from '../../src/components/cs-grid-boolean-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Boolean Editor', () => {
	let exampleBoolean: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<boolean>;

	let stopEditingMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleBoolean = {
			cellValue: false,
			errorMessage: 'errorMessage'
		};

		editable = true;

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
			value: exampleBoolean
		};
	});

	test('Creates a new boolean editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridBooleanEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridBooleanEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('The boolean editor should always render nothing', () => {
		const cellEditor = shallow(<CSGridBooleanEditor {...cSGridCellEditorProps} />);
		expect(cellEditor.equals(null)).toBeTruthy();
	});

	test('Always reject an edit because a boolean cell is managed in the renderer.', () => {
		const cellEditor = shallow(<CSGridBooleanEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridBooleanEditor;
		expect(instance.isCancelBeforeStart()).toBeTruthy();
	});
});
