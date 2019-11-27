import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCurrencyRenderer } from '../../src/components/cs-grid-currency-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Currency Renderer', () => {
	let exampleCurrency: CellData<number>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<number>;

	beforeEach(() => {
		exampleCurrency = {
			cellValue: 10,
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
			value: exampleCurrency
		};
	});

	test('The currency renderer should return a number formatter for formatting currency in the users local using the users currency code.', () => {
		const cellEditor = shallow(<CSGridCurrencyRenderer {...cSGridCellRendererProps} />);
		const instance = cellEditor.instance() as CSGridCurrencyRenderer;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			currency: userInfo.currencyCode,
			style: 'currency'
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});
});
