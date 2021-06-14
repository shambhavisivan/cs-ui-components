import { Beans, ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import React from 'react';
import { CSGridDateEditor } from '../../src/components/cs-grid-date-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, DateProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';
import { CSDatepicker } from '@cloudsense/cs-ui-components';

describe('CS Grid Date Editor', () => {
	const datePickerComponentName = CSDatepicker;
	let exampleDate: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<string> & DateProps;

	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const fireEvent = createDocumentListenersMock();

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
		containsMock = jest.fn();

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
			getOpenToDate: (guid: string) => '2004-02-22',
			node: new RowNode(new Beans()),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleDate
		};
	});

	test('Renders a date editor that has no value so should render an empty date.', () => {
		cSGridCellEditorProps.value.cellValue = undefined;
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);

		const datePicker = cellEditor.find(datePickerComponentName);

		expect(datePicker.prop('selected')).toBe(null);
	});

	test('Renders a date editor that has a specific date so should render the localised date.', () => {
		const testDate = '2019-01-07';
		cSGridCellEditorProps.value.cellValue = testDate;
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);

		const datePicker: any = cellEditor.find(datePickerComponentName);

		expect(moment(datePicker.prop('selected')).format('YYYY-MM-DD')).toEqual(testDate);
	});

	test('Created a new date editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Created a new date editor with dateLocale set which should have no effect on the expected value.', () => {
		cSGridCellEditorProps.userInfo = {
			currencyCode: 'EUR',
			dateLocale: {
				daysInFirstWeek: 4,
				daysOfWeek: ['Sun', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
				firstDayOfWeek: 0,
				monthsOfYear: [
					'Januar',
					'Februar',
					'März',
					'April',
					'Mai',
					'Juni',
					'Juli',
					'August',
					'September',
					'Oktober',
					'November',
					'Dezember'
				]
			},
			userLocale: 'fr-FR'
		};
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Date editor should be a popup.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.isPopup()).toBeTruthy();
	});

	test('Date editor onSelect should change the state values.', () => {
		const cellEditor = shallow(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateEditor;
		const testDate = '2019-01-07';

		instance.onSelect(new Date(testDate));

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

		instance.onSelect(new Date(testDate));

		expect(mockOnChange.mock.calls.length).toEqual(1);
	});

	test('Renders a date editor that has no getOpenToDate, this should not cause errors.', () => {
		cSGridCellEditorProps.getOpenToDate = undefined;
		expect(() => shallow(<CSGridDateEditor {...cSGridCellEditorProps} />)).not.toThrow();
	});

	test('Renders a date editor that has no cell data, this should not cause errors.', () => {
		cSGridCellEditorProps.value = undefined;
		expect(() => shallow(<CSGridDateEditor {...cSGridCellEditorProps} />)).not.toThrow();
	});

	test('Renders input field if textInputFormat is provided', () => {
		const cellEditor = mount(
			<CSGridDateEditor {...cSGridCellEditorProps} textInputFormat='DD/MM/YYYY' />
		);
		expect(cellEditor.find('div input').length).toBe(1);
	});

	test('Updates selected date on valid text input', () => {
		const onChange = jest.fn();
		const cellEditor = mount(
			<CSGridDateEditor
				{...cSGridCellEditorProps}
				textInputFormat='DD/MM/YYYY'
				onChange={onChange}
			/>
		);

		cellEditor.find('input').simulate('change', { target: { value: '24/12/2014' } });

		const instance = cellEditor.instance() as CSGridDateEditor;

		expect(instance.state.inputValue).toEqual('24/12/2014');
		expect(instance.state.value.cellValue).toEqual('2014-12-24');
		expect(onChange).toHaveBeenCalled();
	});

	test("Doesn't update date on invalid text input", () => {
		const cellEditor = mount(
			<CSGridDateEditor {...cSGridCellEditorProps} textInputFormat='DD/MM/YYYY' />
		);

		cellEditor.find('input').simulate('change', { target: { value: '24/13/2014' } });

		const instance = cellEditor.instance() as CSGridDateEditor;
		expect(instance.state.inputValue).toEqual('24/13/2014');
		expect(instance.state.value.cellValue).toEqual('2001-11-01');
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		const cellEditor = mount(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		const cellEditor = mount(<CSGridDateEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;
		instance.isCancelBeforeStart();

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
