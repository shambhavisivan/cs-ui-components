import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridMultiSelectPicklistEditor } from '../../src/components/cs-grid-multi-select-picklist-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, PicklistProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid MultiSelectPicklist Editor', () => {
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

	const cSGridCellEditorProps: CSGridCellEditorProps<string> & PicklistProps = {
		api: new GridApi(),
		colDef,
		column,
		columnApi: new ColumnApi(),
		context: {},
		data: {},
		eGridCell: null,
		node: rowNode,
		rowIndex: 0,
		stopEditing: (suppressNavigateAfterEdit?: boolean) => {
			return;
		},
		userInfo,
		value: exampleMultiSelectPicklist,

		filterAboveSize: 5,
		getOptions: () => {
			return ['Bob', 'Harry'];
		}
	};

	test('The multiSelectPicklist editor should set the multi select flag to true.', () => {
		const cellEditor = shallow(<CSGridMultiSelectPicklistEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridMultiSelectPicklistEditor;

		expect(instance.multiSelect).toBeTruthy();
	});
});
