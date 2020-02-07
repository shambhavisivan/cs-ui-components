import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridDateEditor } from '../../src/components/cs-grid-date-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Date Editor', () => {
	let exampleDate: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<string>;

	let stopEditingMock: jest.Mock<any, any>;

	beforeEach(() => {
		exampleDate = {
			cellValue: '2001-11-01',
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
			value: exampleDate
		};
	});

	test('Renders a date editor that has no value so should render an empty date.', () => {
		cSGridCellEditorProps.value.cellValue = undefined;
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);

		const datePicker = cellEditor.find('DatePicker');

		expect(datePicker.prop('value')).toBe('');
		expect(datePicker.prop('selected')).toBe(null);
	});

	test('Renders a date editor that has a specific date so should render the localised date.', () => {
		const testDate = '2019-01-07';
		cSGridCellEditorProps.value.cellValue = testDate;
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);

		const datePicker = cellEditor.find('DatePicker');

		expect(datePicker.prop('value')).toBe('07/01/2019'); // French format.
		expect(datePicker.prop('selected')).toEqual(new Date(testDate));
	});

	test('Created a new date editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Date editor should be a popup.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.isPopup()).toBeTruthy();
	});

	test('Date editor onChange should change the state values.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;
		const testDate = '2019-01-07';

		instance.onChange(new Date(testDate));

		// stored in YYYY-MM-DD format.
		expect(instance.state.value.cellValue).toBe(testDate);
	});

	test('Date editor onChange should handle an undefined date.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		instance.onChange(undefined);

		// stored in YYYY-MM-DD format.
		expect(instance.state.value.cellValue).toBe('');
	});

	test('A date editor should call the passed in onChange function when the onChange function is called.', () => {
		const mockOnChange = jest.fn();
		const testDate = '2019-01-07';

		const cellEditor = shallow(
			<CSGridDateEditor {...cSGridCellEditorProps} onChange={mockOnChange} />
		);
		const instance = cellEditor.instance() as CSGridDateEditor;

		instance.onChange(new Date(testDate));

		expect(mockOnChange.mock.calls.length).toEqual(1);
	});
});
