import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridDecimalEditor } from '../../src/components/cs-grid-decimal-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, DecimalProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';

describe('CS Grid Decimal Editor', () => {
	const fireEvent = createDocumentListenersMock();

	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const exampleDecimal: CellData<number> = {
		cellValue: 10
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode(new Beans());

	let cSGridCellEditorProps: CSGridCellEditorProps<string | number> & DecimalProps;

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
			eGridCell: { className: 'className', contains: containsMock } as any,
			node: rowNode,
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleDecimal
		};
	});

	test('The decimal editor should return a number formatter for formatting decimals in the users local.', () => {
		const cellEditor = shallow(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDecimalEditor;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			maximumFractionDigits: 20
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});

	test('The number format type for the decimal editor should be decimal.', () => {
		const cellEditor = shallow(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDecimalEditor;
		expect(instance.numberFormatType).toEqual('Decimal');
	});

	test('Renders a decimal editor that has no cell data so should render an empty cell.', () => {
		cSGridCellEditorProps.value = undefined;

		const cellEditor = shallow(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe('');
	});

	test('Renders a decimal editor that has an empty cell value and the prop noOfDecimalDigits defined so should render an empty cell.', () => {
		cSGridCellEditorProps.value = {
			cellValue: ''
		};
		cSGridCellEditorProps.noOfDecimalDigits = 4;

		const cellEditor = shallow(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe('');
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		const cellEditor = mount(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDecimalEditor;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		const cellEditor = mount(<CSGridDecimalEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDecimalEditor;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
