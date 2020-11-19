import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import {
	CSGridBaseActionsRenderer,
	CSGridBaseActionsRendererProps
} from '../../src/components/cs-grid-base-actions-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { UserInfo } from '../../src/interfaces/user-info';

class CSGridTestBaseActionsRenderer extends CSGridBaseActionsRenderer<
	boolean,
	CSGridBaseActionsRendererProps<boolean>
> {
	// Set the renderer to equal the action function as this is the react component for this class.
	render = this.Actions;
	constructor(props: CSGridBaseActionsRendererProps<boolean>) {
		super(props);

		this.state = {
			actions: this.props.getActions ? this.props.getActions(this.props.node.id) : [],
			isLastColumn: this.isLastColumn(),
			noOfInlineIcons: this.props.noOfInlineIcons || 0,
			useDropdown: true,
			value: this.props.value
		};
	}
}

describe('CS Grid Base Actions Renderer', () => {
	let exampleBaseActions: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridBaseActionsRendererProps<boolean>;
	const exampleIcon = (
		<span
			className='cs-grid_clear-button'
			aria-hidden='true'
			style={{ margin: 0, padding: 0 }}
		/>
	);
	const exampleAction = () => console.error('Delete option called');
	const nodeId = 'nodeId';

	beforeEach(() => {
		exampleBaseActions = {
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

		const node = new RowNode();
		node.id = nodeId;

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
			node,
			rowIndex: 0,
			setValue: (value: any) => {
				// Do nothing
			},
			userInfo,
			value: exampleBaseActions
		};
	});

	test('The actions function should always render nothing if the getActions prop is not provided.', () => {
		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;

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
		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);

		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;

		expect(
			cellRenderer.equals(
				<div className='select-wrapper-actions'>
					<button
						className='row-selection-icons-item row-selection-icons-item-menu'
						title='Row Actions'
						onClick={instance.startEditing}
						id={`icon-item-${nodeId}-${column.getId()}-dropdown`}
					>
						<span id={`icon-menu-${nodeId}-${column.getId()}`} className='icon-menu' />
					</button>
				</div>
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

		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);

		const button = cellRenderer.find('button');
		button.simulate('click');

		expect(startEditingCellMock.mock.calls.length).toEqual(1);
	});

	test('The refresh function should do nothing and then always return true.', () => {
		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;
		expect(instance.refresh(cSGridCellRendererProps)).toBeTruthy();
	});

	test('Renders the vertical ellipsis and an inline icon when the getActions prop returns 2 actions and the noOfInlineIcons is set to 1.', () => {
		const disabled = false;

		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: exampleAction,
					disabled,
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

		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);
		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;

		expect(
			cellRenderer.containsMatchingElement(
				<div className='select-wrapper-actions'>
					<button
						className='row-selection-icons-item'
						title='Delete'
						id={`icon-item-${nodeId}-${column.getId()}-0`}
						disabled={disabled}
					>
						<div className='cs-btn-icon'>{exampleIcon}</div>
					</button>

					<button
						className='row-selection-icons-item row-selection-icons-item-menu'
						title='Row Actions'
						onClick={instance.startEditing}
						id={`icon-item-${nodeId}-${column.getId()}-dropdown`}
					>
						<span id={`icon-menu-${nodeId}-${column.getId()}`} className='icon-menu' />
					</button>
				</div>
			)
		).toBeTruthy();
	});

	test('Renders just the inline icon when the getActions prop returns 1 action and the noOfInlineIcons is set to 1.', () => {
		const disabled = true;

		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				{
					action: exampleAction,
					disabled,
					icon: exampleIcon,
					name: 'Delete'
				}
			];
		};
		cSGridCellRendererProps.noOfInlineIcons = 1;

		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);

		expect(
			cellRenderer.containsMatchingElement(
				<div className='select-wrapper-actions'>
					<button
						className='row-selection-icons-item'
						title='Delete'
						disabled={disabled}
						id={`icon-item-${nodeId}-${column.getId()}-0`}
					>
						<div className='cs-btn-icon'>{exampleIcon}</div>
					</button>
				</div>
			)
		).toBeTruthy();
	});
});
