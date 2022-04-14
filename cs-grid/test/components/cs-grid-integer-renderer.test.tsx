import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridIntegerRenderer } from '../../src/components/cs-grid-integer-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps, IntegerProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Integer Renderer', () => {
	let exampleInteger: CellData<number>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<number> & IntegerProps;

	beforeEach(() => {
		exampleInteger = {
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
			value: exampleInteger
		};
	});

	test('The integer renderer should return a number formatter for formatting integers in the users local.', () => {
		const cellEditor = shallow(<CSGridIntegerRenderer {...cSGridCellRendererProps} />);
		const instance = cellEditor.instance() as CSGridIntegerRenderer;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});
});
