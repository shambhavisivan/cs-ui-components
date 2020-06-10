import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';
import { CSGridTextRenderer } from '../../src/components/cs-grid-text-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Text Renderer', () => {
	let exampleText: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<string>;

	let setValueMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleText = {
			cellValue: 'cellValue',
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
			value: exampleText
		};
	});

	test('Renders a text renderer that is readonly so should have read only flags.', () => {
		const readOnly = true;

		const cellRenderer = shallow(
			<CSGridTextRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);

		expect(
			cellRenderer.equals(
				<span className='read-only-cell'>
					<span title={exampleText.cellValue}>{exampleText.cellValue}</span>
					<CSGridCellError errorMessage={exampleText.errorMessage} position='top-left' />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a text renderer that is not readonly so should not have read only flags.', () => {
		const readOnly = false;

		const cellRenderer = shallow(
			<CSGridTextRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);

		expect(
			cellRenderer.equals(
				<span className=''>
					<span title={exampleText.cellValue}>{exampleText.cellValue}</span>
					<CSGridCellError errorMessage={exampleText.errorMessage} position='top-left' />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic text renderer that is not the last column so error messages will be top right.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridTextRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<span title={exampleText.cellValue}>{exampleText.cellValue}</span>
					<CSGridCellError errorMessage={exampleText.errorMessage} position='top-right' />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a text renderer that has a cell value of undefined so should have no text.', () => {
		cSGridCellRendererProps.value.cellValue = undefined;

		const cellRenderer = shallow(<CSGridTextRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<span title=''>{''}</span>
					<CSGridCellError errorMessage={exampleText.errorMessage} position='top-left' />
				</span>
			)
		).toBeTruthy();
	});

	test('The text renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(<CSGridTextRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});
});
