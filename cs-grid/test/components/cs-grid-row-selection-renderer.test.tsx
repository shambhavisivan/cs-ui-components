import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridBaseActionsRendererProps } from '../../src/components/cs-grid-base-actions-renderer';
import { CSGridRowSelectionRenderer } from '../../src/components/cs-grid-row-selection-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid RowSelection Renderer', () => {
	let exampleRowSelection: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridBaseActionsRendererProps<boolean>;
	const nodeId = 'nodeId';

	beforeEach(() => {
		exampleRowSelection = {
			cellValue: true,
			errorMessage: 'errorMessage'
		};

		editable = true;

		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
		};

		colDef = { editable };
		column = new Column(colDef, null, columnId, true);
		columnApi = new ColumnApi();
		columnApi.getAllGridColumns = () => [column];

		const node = new RowNode();
		node.id = nodeId;

		cSGridCellRendererProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi,
			context: {},
			data: {},
			eGridCell: { className: 'className' } as any,
			getValue: () => {
				// Do nothing
			},
			node,
			rowIndex: 0,
			setValue: (value: any) => {
				// Do nothing
			},
			userInfo,
			value: exampleRowSelection
		};
	});

	test('The row selection renderer should always pass the render over to the actions function.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;

		expect(cellRenderer.equals(<instance.Actions />)).toBeTruthy();
	});
});
