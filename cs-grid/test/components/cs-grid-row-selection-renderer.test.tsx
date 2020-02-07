import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridRowSelectionRenderer } from '../../src/components/cs-grid-row-selection-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import {
	CSGridCellRendererProps,
	RowSelectionProps
} from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid RowSelection Renderer', () => {
	let exampleRowSelection: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<boolean> & RowSelectionProps;

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

	test('The row selection renderer should always render nothing if the getOptions prop is not provided.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders the vertical ellipsis when the getActions prop is provided.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [];
		};
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;

		expect(
			cellRenderer.equals(
				<span className='row-menu-wrapper' title='Row Actions'>
					<button className='icon-menu' onClick={instance.startEditing} />
				</span>
			)
		).toBeTruthy();
	});

	test('Checks that clicking the start editing button starts editing the cell.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [];
		};
		const startEditingCellMock = jest.fn();
		cSGridCellRendererProps.api.startEditingCell = startEditingCellMock;

		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);

		const button = cellRenderer.find('button');
		button.simulate('click');

		expect(startEditingCellMock.mock.calls.length).toEqual(1);
	});

	test('The refresh function should do nothing and then always return true.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;
		expect(instance.refresh()).toBeTruthy();
	});
});
