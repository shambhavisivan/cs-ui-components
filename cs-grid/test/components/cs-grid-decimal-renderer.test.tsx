import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridDecimalRenderer } from '../../src/components/cs-grid-decimal-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps, DecimalProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Decimal Renderer', () => {
	let exampleDecimal: CellData<number>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<number> & DecimalProps;

	beforeEach(() => {
		exampleDecimal = {
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
			node: new RowNode(new Beans()),
			rowIndex: 0,
			setValue: (value: any) => {
				// Do nothing
			},
			userInfo,
			value: exampleDecimal
		};
	});

	test('The decimal renderer should return a number formatter for formatting decimals in the users local that rounds to 5 dp when no input is given.', () => {
		const cellEditor = shallow(<CSGridDecimalRenderer {...cSGridCellRendererProps} />);
		const instance = cellEditor.instance() as CSGridDecimalRenderer;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			maximumFractionDigits: 5,
			minimumFractionDigits: 5
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});

	test('The decimal renderer should return a number formatter for formatting decimals in the users local that rounds to 5 dp when no input is given.', () => {
		const noOfDecimalDigits = 3;
		const cellEditor = shallow(
			<CSGridDecimalRenderer
				{...cSGridCellRendererProps}
				noOfDecimalDigits={noOfDecimalDigits}
			/>
		);
		const instance = cellEditor.instance() as CSGridDecimalRenderer;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			maximumFractionDigits: noOfDecimalDigits,
			minimumFractionDigits: noOfDecimalDigits
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});
});
