import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridCurrencyEditor } from '../../src/components/cs-grid-currency-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';

describe('CS Grid Currency Editor', () => {
	const fireEvent = createDocumentListenersMock();

	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const exampleCurrency: CellData<number> = {
		cellValue: 10
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode();
	let cSGridCellEditorProps: CSGridCellEditorProps<number>;

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
			value: exampleCurrency
		};
	});

	test('The currency editor should return a number formatter for formatting currency in the users local using the users currency code.', () => {
		const cellEditor = shallow(<CSGridCurrencyEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridCurrencyEditor;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			currency: userInfo.currencyCode,
			style: 'currency'
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});

	test('The number format type for the currency editor should be currency.', () => {
		const cellEditor = shallow(<CSGridCurrencyEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridCurrencyEditor;
		expect(instance.numberFormatType).toEqual('Currency');
	});

	test('Renders a currency editor that has no cell data so should render an empty cell.', () => {
		cSGridCellEditorProps.value = undefined;

		const cellEditor = shallow(<CSGridCurrencyEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe('');
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		mount(<CSGridCurrencyEditor {...cSGridCellEditorProps} />);
		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		mount(<CSGridCurrencyEditor {...cSGridCellEditorProps} />);
		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
