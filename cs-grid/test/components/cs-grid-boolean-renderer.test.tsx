import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridBooleanRenderer } from '../../src/components/cs-grid-boolean-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Boolean Renderer', () => {
	let exampleBoolean: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<boolean>;

	beforeEach(() => {
		exampleBoolean = {
			cellValue: false,
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
			value: exampleBoolean
		};
	});

	test('Renders a basic boolean renderer that is readonly so should have read only flags.', () => {
		const readOnly = true;
		const expectedReadOnlyClass = '.read-only-cell';
		const mockOnChange = jest.fn();

		const cellRenderer = shallow(
			<CSGridBooleanRenderer
				{...cSGridCellRendererProps}
				readonly={readOnly}
				onChange={mockOnChange}
			/>
		);

		expect(cellRenderer.find(expectedReadOnlyClass).length).toEqual(1);

		const input = cellRenderer.find('input');
		expect(input.prop('readOnly')).toBe(true);
	});

	test("Renders a basic boolean renderer that is not readonly so shouldn't have readonly flags.", () => {
		const expectedReadOnlyClass = '.read-only-cell';
		const mockOnChange = jest.fn();

		const cellRenderer = shallow(
			<CSGridBooleanRenderer
				{...cSGridCellRendererProps}
				readonly={false}
				onChange={mockOnChange}
			/>
		);

		expect(cellRenderer.find(expectedReadOnlyClass).length).toEqual(0);

		const input = cellRenderer.find('input');
		expect(input.prop('readOnly')).toBe(false);
	});

	test('Renders a boolean renderer that has the editable flag set to true so should call the mock function when the button is clicked.', () => {
		colDef = { editable: true };
		column = new Column(colDef, null, 'colId', true);

		cSGridCellRendererProps.colDef = colDef;
		cSGridCellRendererProps.column = column;

		const mockOnChange = jest.fn();

		const cellRenderer = shallow(
			<CSGridBooleanRenderer {...cSGridCellRendererProps} onChange={mockOnChange} />
		);

		const input = cellRenderer.find('input');
		input.simulate('click');
		expect(mockOnChange.mock.calls.length).toEqual(1);
	});

	test("Renders a boolean renderer that has the editable flag set to false so shouldn't call mock function when button is clicked.", () => {
		colDef = { editable: false };
		column = new Column(colDef, null, 'colId', true);

		cSGridCellRendererProps.colDef = colDef;
		cSGridCellRendererProps.column = column;

		const mockOnChange = jest.fn();

		const cellRenderer = shallow(
			<CSGridBooleanRenderer {...cSGridCellRendererProps} onChange={mockOnChange} />
		);

		const input = cellRenderer.find('input');
		input.simulate('click');
		expect(mockOnChange.mock.calls.length).toEqual(0);
	});

	test("Renders a boolean renderer that has the editable attribute as a function that returns false so shouldn't call mock function when button is clicked.", () => {
		colDef = { editable: () => false };
		column = new Column(colDef, null, 'colId', true);

		cSGridCellRendererProps.colDef = colDef;
		cSGridCellRendererProps.column = column;

		const mockOnChange = jest.fn();

		const cellRenderer = shallow(
			<CSGridBooleanRenderer {...cSGridCellRendererProps} onChange={mockOnChange} />
		);

		const input = cellRenderer.find('input');
		input.simulate('click');
		expect(mockOnChange.mock.calls.length).toEqual(0);
	});

	test('Tests that the defaultChecked attribute of the input matches the cell value.', () => {
		const cellRenderer = shallow(<CSGridBooleanRenderer {...cSGridCellRendererProps} />);
		const input = cellRenderer.find('input');

		expect(input.prop('defaultChecked')).toBe(exampleBoolean.cellValue);
		expect(input.prop('disabled')).toBe(!editable);
	});

	test('The boolean renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(<CSGridBooleanRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders a basic boolean renderer that is not the last column.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];
		const lastColumnClass = '.is-last-column';

		const cellRenderer = shallow(<CSGridBooleanRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.find(lastColumnClass).length).toEqual(0);
	});

	test('Renders a basic boolean renderer that is the last column.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, columnId, true)
		];

		const lastColumnClass = '.is-last-column';

		const cellRenderer = shallow(<CSGridBooleanRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.find(lastColumnClass).length).toEqual(1);
	});

	test("Tests that clicking the input doesn't cause an error when no onChange function is provided.", () => {
		colDef = { editable: true };
		column = new Column(colDef, null, 'colId', true);

		cSGridCellRendererProps.colDef = colDef;
		cSGridCellRendererProps.column = column;

		const cellRenderer = shallow(<CSGridBooleanRenderer {...cSGridCellRendererProps} />);

		const input = cellRenderer.find('input');

		expect(() => input.simulate('click')).not.toThrow();
	});
});
