import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridMultiSelectPicklistEditor } from '../../src/components/cs-grid-multi-select-picklist-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, PicklistProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';

describe('CS Grid MultiSelectPicklist Editor', () => {
	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const fireEvent = createDocumentListenersMock();

	const exampleMultiSelectPicklist: CellData<string> = {
		cellValue: 'exampleCellValue'
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode();

	let cSGridCellEditorProps: CSGridCellEditorProps<string> & PicklistProps;

	beforeEach(() => {
		stopEditingMock = jest.fn();
		containsMock = jest.fn();

		cSGridCellEditorProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi: new ColumnApi(),
			context: {},
			data: {},
			eGridCell: null,
			node: rowNode,
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleMultiSelectPicklist,

			filterAboveSize: 5,
			getOptions: () => {
				return ['Bob', 'Harry'];
			}
		};
	});

	test('The multiSelectPicklist editor should set the multi select flag to true.', () => {
		const cellEditor = shallow(<CSGridMultiSelectPicklistEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridMultiSelectPicklistEditor;

		expect(instance.multiSelect).toBeTruthy();
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		const cellEditor = mount(<CSGridMultiSelectPicklistEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		const cellEditor = mount(<CSGridMultiSelectPicklistEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;
		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
