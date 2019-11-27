import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridRowSelectionRenderer } from '../../src/components/cs-grid-row-selection-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid RowSelection Renderer', () => {
	let exampleRowSelection: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<boolean>;

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
			node: new RowNode(),
			rowIndex: 0,
			setValue: (value: any) => {
				// Do nothing
			},
			userInfo,
			value: exampleRowSelection
		};
	});

	test('The row selection renderer should always render nothing', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('The refresh function should do nothing and then always return true.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;
		expect(instance.refresh()).toBeTruthy();
	});
});
