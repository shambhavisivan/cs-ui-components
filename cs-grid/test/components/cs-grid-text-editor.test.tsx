import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';
import { CSGridTextEditor } from '../../src/components/cs-grid-text-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Text Editor', () => {
	let exampleText: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<string>;

	let stopEditingMock: jest.Mock<any, any>;

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
			node: new RowNode(),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleText
		};
	});

	test('Creates a new text editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridTextEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Renders a text editor that has no value so should render an empty text.', () => {
		cSGridCellEditorProps.value.cellValue = undefined;
		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe('');
		expect(input.prop('title')).toBe('');
	});

	test('Renders a text editor that has specific text.', () => {
		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const input = cellEditor.find('input');

		expect(input.prop('value')).toBe(exampleText.cellValue);
		expect(input.prop('title')).toBe(exampleText.cellValue);
	});

	test('Text editor onChange should change the state values.', () => {
		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridTextEditor;
		const testText = 'foobar';

		const input = cellEditor.find('input');
		input.simulate('change', { target: { value: testText } });

		expect(instance.state.value.cellValue).toBe(testText);
	});

	test('Text editor onChange should handle an undefined text.', () => {
		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridTextEditor;

		const input = cellEditor.find('input');
		input.simulate('change', { target: { value: undefined } });

		expect(instance.state.value.cellValue).toBe('');
	});

	test('Renders a text editor should call the passed in onChange function when the onChange function is called.', () => {
		const mockOnChange = jest.fn();
		const testText = 'foobar';

		const cellEditor = shallow(
			<CSGridTextEditor {...cSGridCellEditorProps} onChange={mockOnChange} />
		);

		const input = cellEditor.find('input');
		input.simulate('change', { target: { value: testText } });

		expect(mockOnChange.mock.calls.length).toEqual(1);
	});

	test('Confirms the focus is put on the input and the text is selected when the editor is created.', () => {
		const focus = jest.fn();
		const select = jest.fn();

		const cellEditor = shallow(<CSGridTextEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridTextEditor;
		instance.inputRef = { current: { focus, select } } as any;

		instance.afterGuiAttached();

		expect(focus.mock.calls.length).toEqual(1);
		expect(select.mock.calls.length).toEqual(1);
	});
});
