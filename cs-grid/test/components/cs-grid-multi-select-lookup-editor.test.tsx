import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridMultiSelectLookupEditor } from '../../src/components/cs-grid-multi-select-lookup-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, LookupProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid MultiSelectLookup Editor', () => {
	const exampleMultiSelectLookup: CellData<Record<string, string>> = {
		cellValue: { foo: 'bar' }
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode();

	const cSGridCellEditorProps: CSGridCellEditorProps<Record<string, string>> & LookupProps = {
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
		value: exampleMultiSelectLookup,

		displayColumn: 'text1',
		getLookupValues: () => {
			return new Promise((resolve, reject) => {
				return {
					columnDefs: [
						{
							header: {
								label: 'Name'
							},
							name: 'text1'
						}
					],
					rowData: [
						{
							text1: 'Foobar'
						}
					]
				};
			});
		},
		guidColumn: 'text1',
		minSearchTermLength: 3
	};

	test('The multi select lookup editor should set the multi select flag to true.', () => {
		const cellEditor = shallow(<CSGridMultiSelectLookupEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridMultiSelectLookupEditor;

		expect(instance.multiSelect).toBeTruthy();
	});
});
