import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridDateRenderer } from '../../src/components/cs-grid-date-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { formatDate } from '../../src/utils/cs-grid-date-helper';
import { CSCustomDataHelper } from '../../src/components/cs-grid-custom-data-helper';

describe('CS Grid Date Renderer', () => {
	let exampleDate: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<string>;

	let setValueMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleDate = {
			cellValue: '2001-11-01'
		};

		editable = true;

		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
		};

		setValueMock = jest.fn();

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
			setValue: setValueMock,
			userInfo,
			value: exampleDate
		};
	});

	test('Renders a date renderer that is readonly so should have read only flags and should not have a remove date button.', () => {
		const readOnly = true;

		const cellRenderer = shallow(
			<CSGridDateRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridDateRenderer;
		const value = formatDate(
			instance.state.value.cellValue,
			instance.props.userInfo.userLocale,
			'Date'
		);

		expect(
			cellRenderer.equals(
				<span className='cs-grid_cell-content cs-grid_cell-content-date read-only-cell'>
					<CSCustomDataHelper
						api={cSGridCellRendererProps.api}
						value={value}
						title={value}
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic date renderer that is not the last column so should have error position as top right.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridDateRenderer;
		const value = formatDate(
			instance.state.value.cellValue,
			instance.props.userInfo.userLocale,
			'Date'
		);

		expect(
			cellRenderer.equals(
				<span className='cs-grid_cell-content cs-grid_cell-content-date '>
					<CSCustomDataHelper
						api={cSGridCellRendererProps.api}
						value={value}
						title={value}
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a date renderer that has a cell value of undefined so should have no date', () => {
		cSGridCellRendererProps.value.cellValue = undefined;

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className='cs-grid_cell-content cs-grid_cell-content-date '>
					<CSCustomDataHelper
						api={cSGridCellRendererProps.api}
						title=""
						value=""
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('The date renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders a date renderer that is not editable so should have should not have a remove date button.', () => {
		colDef.editable = false;

		const cellRenderer = shallow(
			<CSGridDateRenderer {...cSGridCellRendererProps} colDef={colDef} />
		);

		const instance = cellRenderer.instance() as CSGridDateRenderer;
		const value = formatDate(
			instance.state.value.cellValue,
			instance.props.userInfo.userLocale,
			'Date'
		);

		expect(
			cellRenderer.equals(
				<span className='cs-grid_cell-content cs-grid_cell-content-date '>
					<CSCustomDataHelper
						api={cSGridCellRendererProps.api}
						title={value}
						value={value}
					/>
				</span>
			)
		).toBeTruthy();
	});
});
