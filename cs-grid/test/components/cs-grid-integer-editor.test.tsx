import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridIntegerEditor } from '../../src/components/cs-grid-integer-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, IntegerProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';

describe('CS Grid Integer Editor', () => {
	const fireEvent = createDocumentListenersMock();

	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const exampleInteger: CellData<number> = {
		cellValue: 10
	};

	const userInfo: UserInfo = {
		currencyCode: 'EUR',
		userLocale: 'de-DE'
	};

	const colDef: ColDef = {};
	const column: Column = new Column(colDef, null, 'colId', true);
	const rowNode: RowNode = new RowNode();

	let cSGridCellEditorProps: CSGridCellEditorProps<number> & IntegerProps;

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
			eGridCell: { className: 'className', contains: containsMock } as any,
			node: rowNode,
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleInteger
		};
	});

	test('The integer editor should return a number formatter for formatting integers in the users local.', () => {
		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;

		const expectedNumberFormat = Intl.NumberFormat(userInfo.userLocale, {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});

		const numberFormat = instance.getNumberFormat();
		expect(expectedNumberFormat).toEqual(numberFormat);
	});

	test('The number format type for the integer editor should be integer.', () => {
		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;
		expect(instance.numberFormatType).toEqual('Integer');
	});

	test('If stepper arrows are used then the format function should always return the actual number not a localised string.', () => {
		cSGridCellEditorProps.stepperArrows = true;
		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;

		const formattedString = instance.format('99 000');
		const formattedInteger = instance.format(99000);

		expect(formattedString).toEqual(99000);
		expect(formattedInteger).toEqual(99000);
	});

	test('If stepper arrows are set to false used then the format function should return a localised string.', () => {
		cSGridCellEditorProps.stepperArrows = false;
		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;

		const formattedString = instance.format('99.000');
		const formattedInteger = instance.format(99000);

		expect(formattedString).toEqual('99.000');
		expect(formattedInteger).toEqual('99.000');
	});

	test('If stepper arrows are not used then the format function should return a localised string.', () => {
		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;

		const formattedString = instance.format('99.000');
		const formattedInteger = instance.format(99000);

		expect(formattedString).toEqual('99.000');
		expect(formattedInteger).toEqual('99.000');
	});

	test('Renders an integer editor that has no cell data so should render an empty cell.', () => {
		cSGridCellEditorProps.value = undefined;

		const cellEditor = shallow(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe('');
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		const cellEditor = mount(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		const cellEditor = mount(<CSGridIntegerEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridIntegerEditor;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
