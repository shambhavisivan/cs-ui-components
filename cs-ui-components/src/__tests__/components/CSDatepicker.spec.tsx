import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import DatePicker from 'react-datepicker';
import {
	addDays,
	subDays,
	addYears,
	subYears,
} from 'date-fns';
import CSDatepicker from '../../components/CSDatepicker';
import { actions, icons } from '../common/custom-data';

const labelValue = 'Select date';
const errorMessage = 'Error message';
const maxDate = 5;
const minDate = 5;
const onChange = jest.fn();

describe('<CSDatepicker />', () => {
	it('should render the default CSDatepicker', () => {
		const uut = shallow(<CSDatepicker label={labelValue} onChange={onChange} />).dive();
		// Should render a datepicker
		const datepicker = uut.find(DatePicker);
		expect(datepicker).toHaveLength(1);
		// Should have a label
		expect(uut.find('.cs-datepicker-wrapper > CSLabel')).toHaveLength(1);
		// autoFocus
		expect(datepicker.prop('autoFocus')).toBeFalsy();
		// dateFormat
		expect(datepicker.prop('dateFormat')).toBe('P');
		// disabled
		expect(datepicker.prop('disabled')).toBeFalsy();
		// dropdownMode
		expect(datepicker.prop('dropdownMode')).toBe('scroll');
		// error
		expect(uut.find('.cs-datepicker-wrapper.cs-datepicker-wrapper-error')).toHaveLength(0);
		// inline
		expect(datepicker.prop('inline')).toBeFalsy();
		// maxDate
		expect(datepicker.prop('maxDate')).toBeFalsy();
		// minDate
		expect(datepicker.prop('minDate')).toBeFalsy();
		// readOnly
		expect(datepicker.prop('readOnly')).toBeFalsy();
		// required
		expect(datepicker.prop('required')).toBeFalsy();
		expect(uut.find('.cs-datepicker-wrapper > CSLabel').prop('required')).toBeFalsy();
		// scrollableYearDropdown
		expect(datepicker.prop('scrollableYearDropdown')).toBeFalsy();
		// errorMessage
		expect(uut.find('CSFieldErrorMsg')).toHaveLength(0);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSDatepicker label={labelValue} onChange={onChange} />).dive();
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepickerLabel.prop('label')).toBe(labelValue);
	});

	it('should use a working onChange callback', () => {
		const date = new Date();
		const event: any = {};
		const uut = shallow(<CSDatepicker label={labelValue} onChange={onChange} />).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onChange')(date, event);
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				actions={actions}
			/>,
		).dive();
		const datepickerCustomData = uut.find('.cs-datepicker-wrapper CSCustomData');
		expect(datepickerCustomData).toHaveLength(1);
		expect(datepickerCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should pass autoFocus to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				autoFocus
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('autoFocus')).toBeTruthy();
	});

	it('should set custom border radius', () => {
		const borderRadius = '1rem';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				borderRadius={borderRadius}
			/>,
		).dive();
		const datepickerStyle = uut.find('.cs-datepicker-wrapper').get(0).props.style;
		expect(datepickerStyle).toHaveProperty('--cs-datepicker-border-radius', borderRadius);
	});

	it('should pass dateFormat to DatePicker', () => {
		const dateFormat = 'd MMMM, yyyy';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				dateFormat={dateFormat}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass disabled to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				disabled
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('disabled')).toBeTruthy();
	});

	it('should pass dropdownMode to DatePicker', () => {
		const dropdownMode = 'scroll';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				dropdownMode={dropdownMode}
			/>,
		).dive();
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
		).dive();
		expect(uut.find('.cs-datepicker-wrapper.cs-datepicker-wrapper-error')).toHaveLength(1);
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
			/>,
		).dive();
		const datepickerError = uut.find('CSFieldErrorMsg');
		expect(datepickerError.prop('message')).toBe(errorMessage);
	});

	it('should pass errorTooltip to CSFieldErrorMsg', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
				errorTooltip
			/>,
		).dive();
		const datepickerError = uut.find('CSFieldErrorMsg');
		expect(datepickerError.prop('tooltipMessage')).toBeTruthy();
	});

	it('should pass help text to CSLabel', () => {
		const helpText = 'Help text';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				helpText={helpText}
			/>,
		).dive();
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepickerLabel.prop('helpText')).toBe(helpText);
	});

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				icons={icons}
			/>,
		).dive();
		const datepickerCustomData = uut.find('.cs-datepicker-wrapper CSCustomData');
		expect(datepickerCustomData).toHaveLength(1);
		expect(datepickerCustomData.prop('icons')).toMatchObject(icons);
	});

	it('should pass inline to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				inline
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('inline')).toBeTruthy();
	});

	it('should pass clearable to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				clearable
			/>,
		).dive();
		const datepickerWrapper = uut.find('.cs-datepicker-wrapper-clearable');
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
		).dive();
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepickerLabel).toHaveLength(0);
	});

	it('should pass label to CSLabel title prop', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				labelTitle
			/>,
		).dive();
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepickerLabel.prop('title')).toBe(labelValue);
	});

	it('should pass locale to Datepicker', () => {
		const uut = mount(
			<CSDatepicker
				locale="es"
				label={labelValue}
				onChange={onChange}
			/>,
		);

		const datepickerInput = uut.find('.react-datepicker__input-container > input');
		datepickerInput.simulate('click');

		const datepickerDay = uut.find('.react-datepicker__day-names > .react-datepicker__day-name').at(0).text();

		expect(uut.find(DatePicker).prop('locale')).toBe('es');
		expect(datepickerDay).toBe('lu');
	});

	it('should pass max date to DatePicker', () => {
		const date = addDays(new Date(), maxDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('maxDate').toDateString()).toBe(date);
	});

	it('should calculate max date if maxDateYear is set', () => {
		const date = addYears(new Date(), maxDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
				maxDateYear
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('maxDate').toDateString()).toBe(date);
	});

	it('should pass min date to DatePicker', () => {
		const date = subDays(new Date(), minDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('minDate').toDateString()).toBe(date);
	});

	it('should calculate min date if minDateYear is set', () => {
		const date = subYears(new Date(), minDate).toDateString();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
				minDateYear
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('minDate').toDateString()).toBe(date);
	});

	it('should pass name to DatePicker', () => {
		const name = 'name';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				name={name}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('name')).toBe(name);
	});

	it('should use a working onBlur callback', () => {
		const handleOnBlurMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onBlur={handleOnBlurMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onBlur')(event);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onCalendarClose callback', () => {
		const handleOnCalendarCloseMock = jest.fn();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onCalendarClose={handleOnCalendarCloseMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onCalendarClose')();
		expect(handleOnCalendarCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChangeRaw callback', () => {
		const handleOnChangeRawMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onChangeRaw={handleOnChangeRawMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onChangeRaw')(event);
		expect(handleOnChangeRawMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onClick={handleOnClickMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onInputClick')();
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleOnKeyDownMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onKeyDown={handleOnKeyDownMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onKeyDown')(event);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSelect callback', () => {
		const handleOnSelectMock = jest.fn();
		const event: any = {};
		const date = new Date();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				onSelect={handleOnSelectMock}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		datepicker.prop('onSelect')(date, event);
		expect(handleOnSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should pass openToDate to DatePicker', () => {
		const date = new Date('1992-12-20');
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				openToDate={date}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('openToDate')).toBe(date);
	});

	it('should pass placeholder to DatePicker', () => {
		const placeholder = 'placeholder';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				placeholder={placeholder}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('placeholderText')).toBe(placeholder);
	});

	it('should pass readOnly to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				readOnly
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass required to DatePicker and CSLabel', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				required
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepicker.prop('required')).toBeTruthy();
		expect(datepickerLabel.prop('required')).toBeTruthy();
	});

	it('should pass scrollableYearDropdown to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				scrollableYearDropdown
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('scrollableYearDropdown')).toBeTruthy();
	});

	it('should pass selected date to DatePicker', () => {
		const selectedDate = new Date();
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				selected={selectedDate}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('selected')).toBe(selectedDate);
	});

	it('should pass showMonthDropdown to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				showMonthDropdown
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('showMonthDropdown')).toBeTruthy();
	});

	it('should pass showYearDropdown to DatePicker', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				showYearDropdown
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('showYearDropdown')).toBeTruthy();
	});

	it('should set timeFormat for DatePicker', () => {
		const timeFormat = 'HH:mm:ss';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				timeFormat={timeFormat}
			/>,
		).dive();

		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('timeFormat')).toBe(timeFormat);
	});

	it('should set title attribute', () => {
		const title = 'title';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				title={title}
			/>,
		).dive();
		const datepickerWrapper = uut.find('.cs-datepicker');
		expect(datepickerWrapper.props().title).toBe(title);
	});

	it('should pass correct today button label to DatePicker', () => {
		const todayLabel = 'today';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				todayButton={todayLabel}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('todayButton')).toBe(todayLabel);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				tooltipPosition={tooltipPosition}
			/>,
		).dive();
		const datepickerLabel = uut.find('.cs-datepicker-wrapper > CSLabel');
		expect(datepickerLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should pass value to DatePicker', () => {
		const value = '21-02-2021';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				value={value}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('value')).toBe(value);
	});

	it('should set custom width', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				width="300px"
			/>,
		).dive();
		const datepickerStyle = uut.find('.cs-datepicker-wrapper').get(0).props.style;
		expect(datepickerStyle).toHaveProperty('--datepicker-width', '300px');
	});

	it('should pass yearDropdownItemNumber to DatePicker', () => {
		const yearDropdownItemNumber = 5;
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				yearDropdownItemNumber={yearDropdownItemNumber}
			/>,
		).dive();
		const datepicker = uut.find(DatePicker);
		expect(datepicker.prop('yearDropdownItemNumber')).toBe(yearDropdownItemNumber);
	});

	it('should have a custom class name', () => {
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				className="custom-class"
			/>,
		).dive();
		const datepicker = uut.find('.cs-datepicker-wrapper.custom-class');
		expect(datepicker).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSDatepicker
				label={labelValue}
				onChange={onChange}
				id={customId}
			/>,
		).dive();
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
		).dive();
		const datepicker = uut.find({ 'data-testid': 'rest' });
		expect(datepicker).toHaveLength(1);
	});
});
