import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridNoEditor } from '../../src/components/cs-grid-no-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid No Editor', () => {
	let exampleNoEditor: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<boolean>;

	let stopEditingMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleNoEditor = {
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
			node: new RowNode(new Beans()),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleNoEditor
		};
	});

	test('Creates a new no editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridNoEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridNoEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('The no editor should always render nothing', () => {
		const cellEditor = shallow(<CSGridNoEditor {...cSGridCellEditorProps} />);
		expect(cellEditor.equals(null)).toBeTruthy();
	});

	test('Always reject an edit because a no editor cell is managed in the renderer.', () => {
		const cellEditor = shallow(<CSGridNoEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridNoEditor;
		expect(instance.isCancelBeforeStart()).toBeTruthy();
	});
});
