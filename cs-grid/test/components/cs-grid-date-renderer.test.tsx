import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';
import { CSGridDateRenderer } from '../../src/components/cs-grid-date-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

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
			cellValue: '2001-11-01',
			errorMessage: 'errorMessage'
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
		const value = instance.formattedDate();

		expect(
			cellRenderer.equals(
				<span className='is-last-column read-only-cell'>
					<span className='cs-grid_date-cell-value-read-only' title={value}>
						{value}
					</span>
					<CSGridCellError errorMessage={exampleDate.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a date renderer that is not readonly so should not have read only flags and should have a remove date button.', () => {
		const readOnly = false;

		const cellRenderer = shallow(
			<CSGridDateRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridDateRenderer;
		const value = instance.formattedDate();

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<span className='cs-grid_date-cell-value' title={value}>
						{value}
					</span>
					<CSGridCellError errorMessage={exampleDate.errorMessage} />
					<button
						title='Clear Date'
						className='cs-grid_clear-button'
						onClick={instance.clearDate}
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic date renderer that is not the last column so do not have a last column class.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridDateRenderer;
		const value = instance.formattedDate();

		expect(
			cellRenderer.equals(
				<span className=''>
					<span className='cs-grid_date-cell-value' title={value}>
						{value}
					</span>
					<CSGridCellError errorMessage={exampleDate.errorMessage} />
					<button
						title='Clear Date'
						className='cs-grid_clear-button'
						onClick={instance.clearDate}
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a date renderer that has a cell value of undefined so should have no date and no remove button.', () => {
		cSGridCellRendererProps.value.cellValue = undefined;

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<span className='cs-grid_date-cell-value' title=''>
						{''}
					</span>
					<CSGridCellError errorMessage={exampleDate.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('The date renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Checks clear date calls setValue with an empty date.', () => {
		const stopEditing = jest.fn();
		cSGridCellRendererProps.api.stopEditing = stopEditing;

		const cellRenderer = shallow(<CSGridDateRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridDateRenderer;

		instance.clearDate();
		expect(stopEditing).toHaveBeenCalledTimes(1);
		expect(setValueMock).toHaveBeenCalledTimes(1);
		expect(setValueMock).toHaveBeenCalledWith({
			cellValue: '',
			errorMessage: exampleDate.errorMessage
		});
	});

	test('Checks clear date calls the passed in onChange function.', () => {
		const mockOnChange = jest.fn();
		const stopEditing = jest.fn();
		cSGridCellRendererProps.api.stopEditing = stopEditing;

		const cellRenderer = shallow(
			<CSGridDateRenderer {...cSGridCellRendererProps} onChange={mockOnChange} />
		);
		const instance = cellRenderer.instance() as CSGridDateRenderer;

		instance.clearDate();

		expect(mockOnChange.mock.calls.length).toEqual(1);
	});
});