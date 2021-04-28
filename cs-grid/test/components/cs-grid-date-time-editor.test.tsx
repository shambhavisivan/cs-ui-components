import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { CSGridDateTimeEditor } from '../../src/components/cs-grid-date-time-editor';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, DateTimeProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';
import { createDocumentListenersMock } from '../utils/document-listeners-mock';

describe('CS Grid Date Time Editor', () => {
	// This is defined by the react-dateTimePicker component.
	const dateTimePickerComponentName = 'o';
	let exampleDateTime: CellData<string>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellEditorProps: CSGridCellEditorProps<string> & DateTimeProps;

	let stopEditingMock: jest.Mock<any, any>;
	let containsMock: jest.Mock<any, any>;

	const fireEvent = createDocumentListenersMock();

	beforeEach(() => {
		exampleDateTime = {
			cellValue: '1992-01-27 11:22',
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
			node: new RowNode(),
			rowIndex: 0,
			stopEditing: stopEditingMock,
			userInfo,
			value: exampleDateTime
		};
	});

	test('Renders a date time editor that has no value so should render an empty date.', () => {
		cSGridCellEditorProps.value.cellValue = undefined;
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);

		const dateTimePicker = cellEditor.find(dateTimePickerComponentName);

		expect(dateTimePicker.prop('value')).toBe('');
		expect(dateTimePicker.prop('selected')).toBe(null);
	});

	test('Renders a date time editor that has a specific date and time so should render the localised date time.', () => {
		const testDateTime = '2019-01-07 13:24';
		const expectedLocalisedDateTime = '07/01/2019 13:24'; // French format.
		cSGridCellEditorProps.value.cellValue = testDateTime;
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);

		const dateTimePicker = cellEditor.find(dateTimePickerComponentName);

		expect(dateTimePicker.prop('value')).toBe(expectedLocalisedDateTime);
		expect(dateTimePicker.prop('selected')).toEqual(new Date(testDateTime));
	});

	test('Created a new date time editor and checks the getValue function returns the expected value.', () => {
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Created a new date time editor with dateLocale set which should have no effect on the expected value.', () => {
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
				],
				timeCaption: 'Zeit'
			},
			userLocale: 'fr-FR'
		};
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;

		expect(instance.getValue()).toEqual(cSGridCellEditorProps.value);
	});

	test('Date time editor should be a popup.', () => {
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;

		expect(instance.isPopup()).toBeTruthy();
	});

	test('Date time editor onChange should change the state values.', () => {
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;
		const testDateTime = '2014-12-11 09:35:22 AM';
		const expectedDateTime = '2014-12-11 09:35';

		instance.onChange(new Date(testDateTime), {} as any);

		// stored in YYYY-MM-DD HH:mm format.
		expect(instance.state.value.cellValue).toBe(expectedDateTime);
	});

	test('Date time editor onChange should change the state values PM example.', () => {
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;
		const testDateTime = '2014-12-11 09:35:22 PM';
		const expectedDateTime = '2014-12-11 21:35';

		instance.onChange(new Date(testDateTime), {} as any);

		// stored in YYYY-MM-DD HH:mm format.
		expect(instance.state.value.cellValue).toBe(expectedDateTime);
	});

	test('Date time editor onChange should handle an undefined date.', () => {
		const cellEditor = shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;

		instance.onChange(undefined, undefined);

		// stored in YYYY-MM-DD format.
		expect(instance.state.value.cellValue).toBe('');
	});

	test('A date time editor should call the passed in onChange function when the onChange function is called.', () => {
		const mockOnChange = jest.fn();
		const testDateTime = '2014-12-11 09:35';

		const cellEditor = shallow(
			<CSGridDateTimeEditor {...cSGridCellEditorProps} onChange={mockOnChange} />
		);
		const instance = cellEditor.instance() as CSGridDateTimeEditor;

		instance.onChange(new Date(testDateTime), undefined);

		expect(mockOnChange.mock.calls.length).toEqual(1);
	});

	test('Renders a date time editor that has no getOpenToDate, this should not cause errors.', () => {
		cSGridCellEditorProps.getOpenToDate = undefined;
		expect(() => shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />)).not.toThrow();
	});

	test('Renders a date time editor that has no cell data, this should not cause errors.', () => {
		cSGridCellEditorProps.value = undefined;
		expect(() => shallow(<CSGridDateTimeEditor {...cSGridCellEditorProps} />)).not.toThrow();
	});

	test('Confirms stopEditing is called when clicking outside the editor.', () => {
		containsMock.mockReturnValue(false);
		const cellEditor = mount(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;

		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(1);
	});

	test('Confirms stopEditing is not called when clicking inside the editor.', () => {
		containsMock.mockReturnValue(true);
		const cellEditor = mount(<CSGridDateTimeEditor {...cSGridCellEditorProps} />);
		const instance = cellEditor.instance() as any;

		instance.divRef.current.contains = containsMock;
		fireEvent.click(document.body);

		expect(stopEditingMock).toHaveBeenCalledTimes(0);
	});
});
