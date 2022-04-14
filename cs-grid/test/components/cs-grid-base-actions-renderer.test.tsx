import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import {CSButton, CSButtonGroup, CSDropdown} from '@cloudsense/cs-ui-components';
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
		const action = {
			action: () => console.error('No Icon option called'),
			name: 'No Icon'
		};
		cSGridCellRendererProps.getActions = (guid: string) => {
			return [action];
		};

		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);

		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;

		expect(
			cellRenderer.containsMatchingElement(
				<CSDropdown
					mode='button'
					iconName='threedots_vertical'
				>
					<CSButton
						label={action.name}
						id={`row-selection-list-item-${action.name}`}
					/>
				</CSDropdown>
			)
		).toBeTruthy();
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

		const action1 = {
			action: exampleAction,
			disabled,
			icon: exampleIcon,
			name: 'Delete'
		};

		const action2 = {
			action: () => console.error('no inline icon option called'),
			name: 'no inline icon'
		};

		cSGridCellRendererProps.getActions = (guid: string) => {
			return [
				action1,
				action2
			];
		};

		cSGridCellRendererProps.noOfInlineIcons = 1;

		const cellRenderer = shallow(
			<CSGridTestBaseActionsRenderer {...cSGridCellRendererProps} />
		);

		const instance = cellRenderer.instance() as CSGridTestBaseActionsRenderer;
		expect(
			cellRenderer.containsMatchingElement(
				<CSButtonGroup>
					<CSButton
						label='Delete'
						title='Delete'
						labelHidden={true}
						id={`icon-item-${nodeId}-${column.getId()}-0`}
					>
						<span
							className='cs-grid_clear-button'
							aria-hidden='true'
							style={{ margin: 0, padding: 0 }}
						/>
					</CSButton>
					<CSDropdown
						mode='button'
						iconName='threedots_vertical'
					>
						<CSButton
							label={action1.name}
							id={`row-selection-list-item-${action1.name}`}
						>
							 <span
								className='cs-grid_clear-button'
								aria-hidden='true'
								style={{ margin: 0, padding: 0 }}
							/>
							Delete
						</CSButton>
						<CSButton
							label={action2.name}
							id={`row-selection-list-item-${action2.name}`}
						/>
					</CSDropdown>
				</CSButtonGroup>
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
				<CSButton
					label='Delete'
					labelHidden={true}
					title='Delete'
					disabled={true}
					id={`icon-item-${nodeId}-${column.getId()}-0`}
				>
					<span
						className='cs-grid_clear-button'
						aria-hidden='true'
						style={{ margin: 0, padding: 0 }}
					/>
				</CSButton>
			)
		).toBeTruthy();
	});
});
