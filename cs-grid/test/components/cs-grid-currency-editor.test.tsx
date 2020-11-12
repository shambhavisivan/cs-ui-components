import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCurrencyEditor } from '../../src/components/cs-grid-currency-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Currency Editor', () => {
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

	const cSGridCellEditorProps: CSGridCellEditorProps<number> = {
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
		value: exampleCurrency
	};

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
});
