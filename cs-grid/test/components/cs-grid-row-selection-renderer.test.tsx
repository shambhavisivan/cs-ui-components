import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridRowSelectionRenderer } from '../../src/components/cs-grid-row-selection-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import {
	CSGridCellRendererProps,
	RowSelectionProps
} from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid RowSelection Renderer', () => {
	let exampleRowSelection: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<boolean> & RowSelectionProps;
	const exampleIcon = (
		<span
			className='cs-grid_clear-button'
			aria-hidden='true'
			style={{ margin: 0, padding: 0 }}
		/>
	);
	const exampleAction = () => console.error('Delete option called');

	beforeEach(() => {
		exampleRowSelection = {
			cellValue: true,
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
			value: exampleRowSelection
		};
	});

	test('The row selection renderer should always render nothing if the getActions prop is not provided.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders the vertical ellipsis when the getActions prop is provided and the noOfInlineIcons props is not.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: () => console.error('no inline icon option called'),
					name: 'no inline icon'
				}
			];
		};
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);

		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;

		expect(
			cellRenderer.equals(
				<>
					<button
						className='row-selection-icons-item'
						title='Row Actions'
						onClick={instance.startEditing}
					>
						<span className='icon-menu' />
					</button>
				</>
			)
		).toBeTruthy();
	});

	test('Checks that clicking the start editing button starts editing the cell.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: () => console.error('no inline icon option called'),
					name: 'no inline icon'
				}
			];
		};
		const startEditingCellMock = jest.fn();
		cSGridCellRendererProps.api.startEditingCell = startEditingCellMock;

		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);

		const button = cellRenderer.find('button');
		button.simulate('click');

		expect(startEditingCellMock.mock.calls.length).toEqual(1);
	});

	test('The refresh function should do nothing and then always return true.', () => {
		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;
		expect(instance.refresh()).toBeTruthy();
	});

	test('Renders the vertical ellipsis and an inline icon when the getActions prop returns 2 actions and the noOfInlineIcons is set to 1.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: exampleAction,
					icon: exampleIcon,
					name: 'Delete'
				},
				{
					action: () => console.error('no inline icon option called'),
					name: 'no inline icon'
				}
			];
		};
		cSGridCellRendererProps.noOfInlineIcons = 1;

		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);
		const instance = cellRenderer.instance() as CSGridRowSelectionRenderer;

		expect(
			cellRenderer.equals(
				<>
					<button
						className='row-selection-icons-item'
						onClick={exampleAction}
						title='Delete'
					>
						<div className='cs-btn-icon'>{exampleIcon}</div>
					</button>
					<button
						className='row-selection-icons-item'
						title='Row Actions'
						onClick={instance.startEditing}
					>
						<span className='icon-menu' />
					</button>
				</>
			)
		).toBeTruthy();
	});

	test('Renders just the inline icon when the getActions prop returns 1 action and the noOfInlineIcons is set to 1.', () => {
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: exampleAction,
					icon: exampleIcon,
					name: 'Delete'
				}
			];
		};
		cSGridCellRendererProps.noOfInlineIcons = 1;

		const cellRenderer = shallow(<CSGridRowSelectionRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<>
					<button
						className='row-selection-icons-item'
						onClick={exampleAction}
						title='Delete'
					>
						<div className='cs-btn-icon'>{exampleIcon}</div>
					</button>
				</>
			)
		).toBeTruthy();
	});
});
