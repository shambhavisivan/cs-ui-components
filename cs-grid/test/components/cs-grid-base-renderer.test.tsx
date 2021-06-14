import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridBaseRenderer } from '../../src/components/cs-grid-base-renderer';
import { CellData, CSGridCellRendererState } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

class CSGridTestBaseRenderer extends CSGridBaseRenderer<string> {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
	}

	render = (): string => {
		return null;
	};
}

describe('CS Grid Base Renderer', () => {
	let exampleBaseValue: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<string>;
	const baseClassName = 'className';

	beforeEach(() => {
		exampleBaseValue = {
			cellValue: 'foo',
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
			eGridCell: { className: baseClassName } as any,
			getValue: () => {
				console.log('getValue called');
			},
			node: new RowNode(new Beans()),
			rowIndex: 0,
			setValue: (value: any) => {
				console.log('setValue called');
			},
			userInfo,
			value: exampleBaseValue
		};
	});

	test('Confirms the readonly class wrapper is added to the cell element when the renderer is readonly.', () => {
		const readOnly = true;
		cSGridCellRendererProps.readonly = readOnly;
		const expectedReadOnlyClass = 'read-only-cell-wrapper';

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(instance.props.eGridCell.className).toContain(expectedReadOnlyClass);
	});

	test('Confirms the isLastColumn function returns false when this renderer is not the last column.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, columnId, true),
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(instance.isLastColumn()).toBeFalsy();
	});

	test('Confirms the isLastColumn function returns true when this renderer is the last column.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true),
			new Column(colDef, null, columnId, true)
		];

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(instance.isLastColumn()).toBeTruthy();
	});

	test('Confirms the isLastColumn handles the situation when there are no columns.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [];

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(instance.isLastColumn()).toBeFalsy();
	});

	test('Confirms the isLastColumn handles the situation when the columns array is undefined.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => undefined;

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(instance.isLastColumn()).toBeFalsy();
	});

	test('Tests that calling refresh does not cause an error when no state is set.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(() => instance.refresh(cSGridCellRendererProps)).not.toThrow();
	});

	test('Tests that calling refresh does not cause an error when no value state is set.', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(() => instance.refresh(cSGridCellRendererProps)).not.toThrow();
	});

	test('Tests that calling refresh with no params does not cause an error.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		expect(() => instance.refresh(undefined)).not.toThrow();
	});

	test('Confirms the cellValue on the state does update when the refresh function is called with a new cellValue.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		instance.refresh(cSGridCellRendererProps); // sets the state once.

		const newCellValue = '1234';

		expect(instance.state.isLastColumn).toBeTruthy();
		expect(instance.state.value).toEqual(exampleBaseValue);

		const params = { ...cSGridCellRendererProps };
		params.value.cellValue = newCellValue;
		instance.refresh(cSGridCellRendererProps);
		expect(instance.state.value.cellValue).toEqual(newCellValue);

		expect(instance.state.value.errorMessage).toEqual(exampleBaseValue.errorMessage);
		expect(instance.state.isLastColumn).toBeTruthy();
	});

	test('Confirms the errorMessage on the state does update when the refresh function is called with a new errorMessage.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;
		const newErrorMessage = '1234';

		instance.refresh(cSGridCellRendererProps); // sets the state once.
		expect(instance.state.isLastColumn).toBeTruthy();
		expect(instance.state.value).toEqual(exampleBaseValue);

		const params = { ...cSGridCellRendererProps };
		params.value.errorMessage = newErrorMessage;

		instance.refresh(cSGridCellRendererProps);

		const newState = cellRenderer.state() as CSGridCellRendererState<string>;

		expect(newState.isLastColumn).toBeTruthy();
		expect(newState.value).toEqual(exampleBaseValue);

		expect(newState.value.errorMessage).toEqual(newErrorMessage);

		expect(newState.value.cellValue).toEqual(exampleBaseValue.cellValue);
		expect(newState.isLastColumn).toBeTruthy();
	});

	test('Confirms the isLastColumn on the state does update when the refresh function is called after the column has been moved to the end of the column array.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		instance.refresh(cSGridCellRendererProps); // sets the state once.

		expect(instance.state.isLastColumn).toBeTruthy();
		expect(instance.state.value).toEqual(exampleBaseValue);

		instance.props.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, columnId, true),
			new Column(colDef, null, 'NotThisColId', true)
		];

		instance.refresh(cSGridCellRendererProps);
		const newState = cellRenderer.state() as CSGridCellRendererState<string>;
		expect(newState.isLastColumn).toBeFalsy();
		expect(newState.value).toEqual(exampleBaseValue);
	});

	test('Confirms the state does not update when the refresh function is called when nothing has changed.', () => {
		const cellRenderer = shallow(<CSGridTestBaseRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		instance.refresh(cSGridCellRendererProps); // sets the state once.
		instance.setState = jest.fn();

		instance.refresh(cSGridCellRendererProps);

		expect(instance.setState).toHaveBeenCalledTimes(0);
	});

	test('Confirms the isReadOnly function returns true when the readonly prop is true.', () => {
		const readOnly = true;

		const cellRenderer = shallow(
			<CSGridTestBaseRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		const isReadOnly = instance.isReadOnly(); // sets the state once.

		expect(isReadOnly).toBeTruthy();
	});

	test('Confirms the isReadOnly function returns false when the readonly prop is false.', () => {
		const readOnly = false;

		const cellRenderer = shallow(
			<CSGridTestBaseRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		const isReadOnly = instance.isReadOnly(); // sets the state once.

		expect(isReadOnly).toBeFalsy();
	});

	test('Confirms the isReadOnly function returns true when the readonly prop is a function that returns true.', () => {
		const readOnly = () => true;

		const cellRenderer = shallow(
			<CSGridTestBaseRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		const isReadOnly = instance.isReadOnly(); // sets the state once.

		expect(isReadOnly).toBeTruthy();
	});

	test('Confirms the isReadOnly function returns false when the readonly prop is a function that returns false.', () => {
		const readOnly = () => false;

		const cellRenderer = shallow(
			<CSGridTestBaseRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseRenderer;

		const isReadOnly = instance.isReadOnly(); // sets the state once.

		expect(isReadOnly).toBeFalsy();
	});
});
