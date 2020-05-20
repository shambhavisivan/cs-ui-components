import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';
import { CSGridIconRenderer } from '../../src/components/cs-grid-icon-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Icon Renderer', () => {
	let exampleIcon: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<string>;
	const icon = <div>ICON</div>;
	let getIcon = () => icon;

	let setValueMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleIcon = {
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
			value: exampleIcon
		};
	});

	test('Renders an icon renderer that is readonly so should have read only flags.', () => {
		const readOnly = true;

		const cellRenderer = shallow(
			<CSGridIconRenderer
				{...cSGridCellRendererProps}
				readonly={readOnly}
				getIcon={getIcon}
			/>
		);

		expect(
			cellRenderer.equals(
				<span className='is-last-column read-only-cell'>
					<span title={exampleIcon.cellValue}>{icon}</span>
					<CSGridCellError errorMessage={exampleIcon.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a icon renderer that is not readonly so should not have read only flags.', () => {
		const readOnly = false;

		const cellRenderer = shallow(
			<CSGridIconRenderer
				{...cSGridCellRendererProps}
				readonly={readOnly}
				getIcon={getIcon}
			/>
		);

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<span title={exampleIcon.cellValue}>{icon}</span>
					<CSGridCellError errorMessage={exampleIcon.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic icon renderer that is not the last column so do not have a last column class.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(
			<CSGridIconRenderer {...cSGridCellRendererProps} getIcon={getIcon} />
		);

		expect(
			cellRenderer.equals(
				<span className=''>
					<span title={exampleIcon.cellValue}>{icon}</span>
					<CSGridCellError errorMessage={exampleIcon.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a icon renderer that has an icon of undefined so should have no text.', () => {
		cSGridCellRendererProps.value.cellValue = undefined;
		getIcon = () => undefined;

		const cellRenderer = shallow(
			<CSGridIconRenderer {...cSGridCellRendererProps} getIcon={getIcon} />
		);

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<span title='' />
					<CSGridCellError errorMessage={exampleIcon.errorMessage} />
				</span>
			)
		).toBeTruthy();
	});

	test('The icon renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;

		const cellRenderer = shallow(
			<CSGridIconRenderer {...cSGridCellRendererProps} getIcon={getIcon} />
		);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});
});
