import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridRowSelectionEditor } from '../../src/components/cs-grid-row-selection-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	RowSelectionAction,
	RowSelectionProps
} from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

jest.useFakeTimers();

describe('CS Grid Row Selection Editor', () => {
	let exampleCellValue: CellData<boolean>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<boolean> & RowSelectionProps;

	let stopEditingMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleCellValue = {
			cellValue: true
		};
		editable = false;

		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
		};

		stopEditingMock = jest.fn();

		colDef = { editable };
		column = new Column(colDef, null, columnId, true);
		columnApi = new ColumnApi();
		columnApi.getAllGridColumns = () => [column];

		cSGridCellEditorProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi,
			context: {},
			data: {},
			eGridCell: { className: 'className' } as any,
			getActions: () => [],
			node: new RowNode(),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleCellValue
		};
	});

	test('Renders one list item with no icon provided by the getActions call.', () => {
		const action = {
			action: () => console.error('No Icon option called'),
			name: 'No Icon'
		};
		cSGridCellEditorProps.getActions = (guid: string) => {
			return [action];
		};

		const cellEditor = shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);

		expect(
			cellEditor.containsMatchingElement(
				<div className='cs-grid_popup-wrapper'>
					<div className='row-selection-list'>
						<button
							className='row-selection-list-item'
							id={`row-selection-list-item-${action.name}`}
						>
							<div className='row-selection-name-wrapper'>{action.name}</div>
						</button>
					</div>
				</div>
			)
		).toBeTruthy();

		expect(
			cellEditor.containsMatchingElement(<div className='row-selection-icon-wrapper' />)
		).toBeFalsy();
	});

	test('Renders two list items one with an icon and one without.', () => {
		const icon = (
			<span className='csgrid-tooltip-text'>
				<span className='icon-error' aria-hidden='true' />
			</span>
		);

		const action1: RowSelectionAction = {
			action: undefined,
			name: 'NoIcon'
		};
		const action2: RowSelectionAction = {
			action: () => console.error('edit option called'),
			icon,
			name: 'Edit'
		};

		cSGridCellEditorProps.getActions = (guid: string) => {
			return [action1, action2];
		};

		const cellEditor = shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);

		expect(
			cellEditor.containsMatchingElement(
				<div className='cs-grid_popup-wrapper'>
					<div className='row-selection-list'>
						<button
							className='row-selection-list-item'
							id={`row-selection-list-item-${action1.name}`}
						>
							<div className='row-selection-icon-wrapper' />
							<div className='row-selection-name-wrapper'>{action1.name}</div>
						</button>
						<button
							className='row-selection-list-item'
							id={`row-selection-list-item-${action2.name}`}
						>
							<div className='row-selection-icon-wrapper'>{icon}</div>
							<div className='row-selection-name-wrapper'>{action2.name}</div>
						</button>
					</div>
				</div>
			)
		).toBeTruthy();
	});

	test('Creates a new row selection editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridRowSelectionEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Row selection editor should be a popup.', () => {
		const cellEditor = shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridRowSelectionEditor;

		expect(instance.isPopup()).toBeTruthy();
	});

	test('A row selection editor should call the passed in action function when the action is chosen from the list.', () => {
		const mockAction = jest.fn();
		const anotherMockAction = jest.fn();

		const chosenAction = {
			action: mockAction,
			name: 'chosenAction'
		};
		const anotherAction = {
			action: anotherMockAction,
			name: 'anotherAction'
		};

		cSGridCellEditorProps.getActions = (guid: string) => {
			return [chosenAction, anotherAction];
		};

		const cellEditor = shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);

		const chosenActionLi = cellEditor.find(`#row-selection-list-item-${chosenAction.name}`);
		chosenActionLi.simulate('click');
		expect(mockAction.mock.calls.length).toEqual(1);
		expect(anotherMockAction.mock.calls.length).toEqual(0);
	});

	test('Tests the popup is moved to below the ellipsis.', () => {
		const action = {
			action: () => console.error('No Icon option called'),
			name: 'No Icon'
		};
		cSGridCellEditorProps.getActions = (guid: string) => {
			return [action];
		};

		const domNode = document.createElement('div');
		document.body.appendChild(domNode);

		const cellEditor = mount(
			<div className='cs-grid_app-wrapper'>
				<div className='ag-theme-balham cs-grid_main'>
					<div className='ag-popup-editor'>
						<CSGridRowSelectionEditor {...cSGridCellEditorProps} />
					</div>
				</div>
			</div>,
			{ attachTo: domNode }
		);

		// Fast-forward until all timers have been executed.
		jest.runAllTimers();

		const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
		)[0];

		const rowSelectionList: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor .row-selection-list'
		)[0];

		expect(setTimeout).toHaveBeenCalled();
		expect(popupWrapper).toBeTruthy();
		expect(rowSelectionList).toBeTruthy();

		// The mounting keeps cellEditor mounted for the whole test file not just this test.
		cellEditor.detach();
	});

	test('Tests not finding the popup does not cause errors.', () => {
		const action = {
			action: () => console.error('No Icon option called'),
			name: 'No Icon'
		};
		cSGridCellEditorProps.getActions = (guid: string) => {
			return [action];
		};

		shallow(<CSGridRowSelectionEditor {...cSGridCellEditorProps} />);

		// Fast-forward until all timers have been executed.
		jest.runAllTimers();

		const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
		)[0];

		const rowSelectionList: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor .row-selection-list'
		)[0];

		expect(setTimeout).toHaveBeenCalled();
		expect(popupWrapper).toBeFalsy();
		expect(rowSelectionList).toBeFalsy();
	});
});
