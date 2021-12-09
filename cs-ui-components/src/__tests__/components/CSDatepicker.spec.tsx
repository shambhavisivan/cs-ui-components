import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import DatePicker from 'react-datepicker';
import {
	addDays,
	subDays,
	addYears,
	subYears,
} from 'date-fns';
import CSDatepicker from '../../components/CSDatepicker';

const labelValue = 'Select date';
const errorMessage = 'Error message';
const maxDate = 5;
const minDate = 5;
const onChange = jest.fn();

describe('<CSDatepicker />', () => {
	it('should pass correct label to CSLabel', () => {
		const uut = shallow(<CSDatepicker label={labelValue} onChange={onChange} />);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepickerLabel.prop('label')).toBe(labelValue);
	});

	it('should call onChange handler', () => {
		const date = new Date();
		const event: any = {};
		const uut = shallow(<CSDatepicker label={labelValue} onChange={onChange} />);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onChange')(date, event);
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it('should pass correct actions value to CSCustomDataActions', () => {
		const actionsValue = [
			{
				action: () => jest.fn(),
				icon: { iconName: 'delete' },
				name: 'Delete',
			},
			{
				action: () => jest.fn(),
				icon: { iconName: 'add' },
				name: 'Add',
			},
		];
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				actions={actionsValue}
			/>,
		);
		const datepickerActions = uut.find('.cs-datepicker CSCustomDataActions');
		expect(datepickerActions).toHaveLength(1);
		expect(datepickerActions.prop('actions')).toMatchObject(actionsValue);
	});

	it('should pass correct autoFocus value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				autoFocus
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('autoFocus')).toBeTruthy();
	});

	it('should have custom border radius', () => {
		const borderRadius = '1rem';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				borderRadius={borderRadius}
			/>,
		);
		const datepickerStyle = uut.find('.cs-datepicker').get(0).props.style;
		expect(datepickerStyle).toHaveProperty('--cs-datepicker-border-radius', borderRadius);
	});

	it('should pass correct date format to DatePicker', () => {
		const dateFormat = 'd MMMM, yyyy';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				dateFormat={dateFormat}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass correct disabled value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				disabled
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('disabled')).toBeTruthy();
	});

	it('should pass correct dropdownMode value to DatePicker', () => {
		const dropdownMode = 'scroll';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				dropdownMode={dropdownMode}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('dropdownMode')).toBe(dropdownMode);
	});

	it('should render datepicker in error state', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				error
			/>,
		);
		expect(uut.find('.cs-datepicker.cs-datepicker-error')).toHaveLength(1);
	});

	it('should pass correct error message to CSFieldErrorMsg', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
			/>,
		);
		const datepickerError = uut.find('CSFieldErrorMsg');
		expect(datepickerError.prop('message')).toBe(errorMessage);
	});

	it('should pass correct errorTooltip value to CSFieldErrorMsg', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
				errorTooltip
			/>,
		);
		const datepickerError = uut.find('CSFieldErrorMsg');
		expect(datepickerError.prop('tooltipMessage')).toBeTruthy();
	});

	it('should pass correct help text to CSLabel', () => {
		const helpText = 'Help text';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				helpText={helpText}
			/>,
		);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepickerLabel.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSCustomDataIcons', () => {
		const iconsValue = [{ iconName: 'cart' }];
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				icons={iconsValue}
			/>,
		);
		const datepickerIcons = uut.find('.cs-datepicker CSCustomDataIcons');
		expect(datepickerIcons).toHaveLength(1);
		expect(datepickerIcons.prop('icons')).toMatchObject(iconsValue);
	});

	it('should pass correct inline value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				inline
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('inline')).toBeTruthy();
	});

	it('should pass correct isClearable value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				isClearable
			/>,
		);
		const datepickerWrapper = uut.find('.cs-datepicker-clearable');
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('isClearable')).toBeTruthy();
		expect(datepickerWrapper).toHaveLength(1);
	});

	it('should render datepicker without label', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				labelHidden
			/>,
		);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepickerLabel).toHaveLength(0);
	});

	it('should pass label value to CSLabel title prop', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				labelTitle
			/>,
		);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepickerLabel.prop('title')).toBe(labelValue);
	});

	it('should pass correct max date to DatePicker', () => {
		const date = addDays(new Date(), maxDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('maxDate').toDateString()).toBe(date);
	});

	it('should calculate correct max date if maxDateYear is set', () => {
		const date = addYears(new Date(), maxDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
				maxDateYear
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('maxDate').toDateString()).toBe(date);
	});

	it('should pass correct min date to DatePicker', () => {
		const date = subDays(new Date(), minDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('minDate').toDateString()).toBe(date);
	});

	it('should calculate correct min date if minDateYear is set', () => {
		const date = subYears(new Date(), minDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
				minDateYear
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('minDate').toDateString()).toBe(date);
	});

	it('should pass correct name value to DatePicker', () => {
		const name = 'name';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				name={name}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('name')).toBe(name);
	});

	it('should call onBlur handler', () => {
		const handleOnBlurMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onBlur={handleOnBlurMock}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onBlur')(event);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onCalendarClose handler', () => {
		const handleOnCalendarCloseMock = jest.fn();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onCalendarClose={handleOnCalendarCloseMock}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onCalendarClose')();
		expect(handleOnCalendarCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChangeRaw handler', () => {
		const handleOnChangeRawMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onChangeRaw={handleOnChangeRawMock}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onChangeRaw')(event);
		expect(handleOnChangeRawMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown handler', () => {
		const handleOnKeyDownMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onKeyDown')(event);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should call onSelect handler', () => {
		const handleOnSelectMock = jest.fn();
		const event: any = {};
		const date = new Date();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onSelect={handleOnSelectMock}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onSelect')(date, event);
		expect(handleOnSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct openToDate value to DatePicker', () => {
		const date = new Date('1992-12-20');
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				openToDate={date}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('openToDate')).toBe(date);
	});

	it('should pass correct placeholder value to DatePicker', () => {
		const placeholder = 'placeholder';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				placeholder={placeholder}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('placeholderText')).toBe(placeholder);
	});

	it('should pass correct readOnly value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				readOnly
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to DatePicker and CSLabel', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				required
			/>,
		);
		const datepicker = uut.find(DatePicker);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepicker.prop('required')).toBeTruthy();
		expect(datepickerLabel.prop('required')).toBeTruthy();
	});

	it('should pass correct scrollableYearDropdown value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				scrollableYearDropdown
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('scrollableYearDropdown')).toBeTruthy();
	});

	it('should pass correct selected date to DatePicker', () => {
		const selectedDate = new Date();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				selected={selectedDate}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('selected')).toBe(selectedDate);
	});

	it('should pass correct showMonthDropdown value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				showMonthDropdown
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('showMonthDropdown')).toBeTruthy();
	});

	it('should pass correct showYearDropdown value to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				showYearDropdown
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('showYearDropdown')).toBeTruthy();
	});

	it('should set title to datepicker wrapper', () => {
		const title = 'title';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				title={title}
			/>,
		);
		const datepickerWrapper = uut.find('.cs-datepicker-wrapper');
		expect(datepickerWrapper.props().title).toBe(title);
	});

	it('should set correct today button label to DatePicker if todayButton is true', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				todayButton
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('todayButton')).toBe('Today');
	});

	it('should pass correct tooltipPosition value to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				tooltipPosition={tooltipPosition}
			/>,
		);
		const datepickerLabel = uut.find('.cs-datepicker > CSLabel');
		expect(datepickerLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should pass correct value to DatePicker', () => {
		const value = '21-02-2021';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				value={value}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('value')).toBe(value);
	});

	it('should set correct width to datepicker input', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				width="300px"
			/>,
		);
		const datepickerStyle = uut.find('.cs-datepicker').get(0).props.style;
		expect(datepickerStyle).toHaveProperty('--datepicker-width', '300px');
	});

	it('should pass correct yearDropdownItemNumber to DatePicker', () => {
		const yearDropdownItemNumber = 5;
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				yearDropdownItemNumber={yearDropdownItemNumber}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('yearDropdownItemNumber')).toBe(yearDropdownItemNumber);
	});

	it('should set custom class', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				className="custom-class"
			/>,
		);
		const datepicker = uut.find('.cs-datepicker.custom-class');
		expect(datepicker).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				id={customId}
			/>,
		);
		const datepicker = uut.find(DatePicker);
		const datepickerLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(datepicker.prop('id')).toBe(customId);
		expect(datepickerLabelHtmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				data-testid="rest"
			/>,
		);
		const datepicker = uut.find({ 'data-testid': 'rest' });
		expect(datepicker).toHaveLength(1);
	});
});
