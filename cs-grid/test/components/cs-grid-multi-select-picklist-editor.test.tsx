import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridMultiSelectPicklistEditor } from '../../src/components/cs-grid-multi-select-picklist-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	PicklistOption,
	PicklistProps
} from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';
type PicklistCellValueType = PicklistOption | Array<PicklistOption>;

describe('CS Grid MultiSelectPicklist Editor', () => {
	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const fireEvent = createDocumentListenersMock();

	const exampleMultiSelectPicklist: CellData<PicklistOption> = {
		cellValue: {
			key: 'exampleCellValue',
			label: 'exampleCellValue'
		}
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode(new Beans());

	let cSGridCellEditorProps: CSGridCellEditorProps<PicklistCellValueType> & PicklistProps;

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
				return [
					{ key: '1', label: 'Bob' },
					{ key: '2', label: 'Harry' }
				];
			}
		};
	});

	test('The multiSelectPicklist editor should set the multi select flag to true.', () => {
		const cellEditor = shallow(<CSGridMultiSelectPicklistEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridMultiSelectPicklistEditor;

		expect(instance.multiSelect).toBeTruthy();
	});
});
