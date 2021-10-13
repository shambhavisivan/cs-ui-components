import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridPicklistEditor } from '../../src/components/cs-grid-picklist-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	PicklistOption,
	PicklistProps
} from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
type PicklistCellValueType = PicklistOption | Array<PicklistOption>;

describe('CS Grid Picklist Editor', () => {
	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const examplePicklist: CellData<PicklistOption> = {
		cellValue: {
			key: 'exampleCellValue',
			label: 'exampleCellValue'
		}
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'fr-FR'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode(new Beans());

	let cSGridCellEditorProps: CSGridCellEditorProps<PicklistCellValueType> & PicklistProps;

	beforeEach(() => {
		stopEditingMock = jest.fn();
		containsMock = jest.fn();

		cSGridCellEditorProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi: new ColumnApi(),
			context: {},
			data: {},
			eGridCell: null,
			node: rowNode,
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: examplePicklist,

			filterAboveSize: 5,
			getOptions: () => {
				return [
					{ key: '1', label: 'Bob' },
					{ key: '2', label: 'Harry' }
				];
			},
			getDropdownActions: () => {
				return [
					{
						label: 'John Action',
						iconName: 'add',
						onClick: () => alert('John Action invoked.')
					},
					{
						label: 'Larry Action',
						iconName: 'add',
						onClick: () => alert('Larry Action invoked.')
					}
				];
			}
		};
	});

	test('CSCustomSelect should have actions data', () => {
		const cellEditor = shallow(<CSGridPicklistEditor {...cSGridCellEditorProps} />);
		expect(cellEditor.find('CSCustomSelect').prop('dropdownActions')).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					label: expect.any(String),
					iconName: expect.any(String),
					onClick: expect.any(Function)
				})
			])
		);
	});
});