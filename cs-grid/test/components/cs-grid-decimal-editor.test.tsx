import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridDecimalEditor } from '../../src/components/cs-grid-decimal-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Decimal Editor', () => {
	const exampleDecimal: CellData<number> = {
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
		value: exampleDecimal
	};

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
});
