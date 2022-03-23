import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import DatePicker from 'react-datepicker';
import CSDateTimePicker from '../../components/CSDateTimePicker';
import { actions, icons } from '../common/custom-data';

const labelValue = 'Select date';
const errorMessage = 'Error message';
const minDate = 5;
const maxDate = 5;
const onChange = () => {};

describe('<CSDateTimePicker />', () => {
	it('should render the default CSDateTimepicker', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={onChange} />).dive();
		// Should render a datepicker
		const datepicker = uut.dive().find('CSDatepicker');
		// Should have a label
		expect(datepicker.dive().find('.cs-datepicker-wrapper > CSLabel')).toHaveLength(1);
		// autoFocus
		expect(datepicker.prop('autoFocus')).toBeFalsy();
		// dateFormat
		expect(datepicker.prop('dateFormat')).toBe('Pp');
		// timeFormat
		expect(datepicker.prop('timeFormat')).toBe('p');
		// disabled
		expect(datepicker.prop('disabled')).toBeFalsy();
		// dropdownMode
		expect(datepicker.prop('dropdownMode')).toBe('scroll');
		// error
		expect(uut.find('.cs-datetimepicker.cs-datepicker-wrapper-error')).toHaveLength(0);
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
		expect(datepicker.dive().find('.cs-datepicker-wrapper > CSLabel').prop('required')).toBeFalsy();
		// scrollableYearDropdown
		expect(datepicker.prop('scrollableYearDropdown')).toBeFalsy();
		// errorMessage
		expect(uut.find('CSFieldErrorMsg')).toHaveLength(0);
	});

	it('should pass showTimeSelect to CSDatepicker', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={onChange} />).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showTimeSelect')).toBeTruthy();
	});

	it('should pass label to CSDatepicker', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={onChange} />).dive();
		const dateTimePickerLabel = uut.dive().find('CSDatepicker');
		expect(dateTimePickerLabel.prop('label')).toBe(labelValue);
	});

	it('should use a working onChange callback', () => {
		const handleOnChangeMock = jest.fn();
		const event: any = {};
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={handleOnChangeMock} />).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onChange')(event);
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should pass actions to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				actions={actions}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker).toHaveLength(1);
		expect(datepicker.prop('actions')).toMatchObject(actions);
	});

	it('should pass autoFocus to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				autoFocus
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('autoFocus')).toBeTruthy();
	});

	it('should pass border radius to CSDatepicker', () => {
		const borderRadius = '1rem';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				borderRadius={borderRadius}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('borderRadius')).toBe(borderRadius);
	});

	it('should pass dateFormat to CSDatepicker', () => {
		const dateFormat = 'd MMMM, yyyy h:mm aa';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				dateFormat={dateFormat}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass disabled to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				disabled
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('disabled')).toBeTruthy();
	});

	it('should pass dropdownMode to CSDatepicker', () => {
		const dropdownMode = 'scroll';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				dropdownMode={dropdownMode}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('dropdownMode')).toBe(dropdownMode);
	});

	it('should pass error to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('error')).toBeTruthy();
	});

	it('should pass errorMessage to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass errorTooltip to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
				errorTooltip
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('errorTooltip')).toBeTruthy();
	});

	it('should pass helpText to CSDatepicker', () => {
		const helpText = 'Help text';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				helpText={helpText}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('helpText')).toBe(helpText);
	});

	it('should pass icons to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				icons={icons}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('icons')).toMatchObject(icons);
	});

	it('should pass inline to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				inline
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('inline')).toBeTruthy();
	});

	it('should pass clearable to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				clearable
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('clearable')).toBeTruthy();
	});

	it('should pass labelHidden to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				labelHidden
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('labelHidden')).toBeTruthy();
	});

	it('should pass labelTitle to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				labelTitle
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('labelTitle')).toBeTruthy();
	});

	it('should pass locale to CSDatepicker', () => {
		const uut = mount(
			<CSDateTimePicker
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

	it('should pass maxDate to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('maxDate')).toBe(maxDate);
	});

	it('should pass maxDateYear to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
				maxDateYear
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('maxDateYear')).toBeTruthy();
	});

	it('should pass minDate to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('minDate')).toBe(minDate);
	});

	it('should pass minDateYear to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
				minDateYear
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('minDateYear')).toBeTruthy();
	});

	it('should pass name to CSDatepicker', () => {
		const name = 'name';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				name={name}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('name')).toBe(name);
	});

	it('should use a working onBlur callback', () => {
		const handleOnBlurMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onBlur={handleOnBlurMock}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onBlur')(event);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onClick={handleOnClickMock}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		const event: any = {};
		datepicker.prop('onClick')(event);
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleOnKeyDownMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onKeyDown={handleOnKeyDownMock}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onKeyDown')(event);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSelect callback', () => {
		const handleOnSelectMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onSelect={handleOnSelectMock}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onSelect')(event);
		expect(handleOnSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should pass placeholder to CSDatepicker', () => {
		const placeholder = 'placeholder';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				placeholder={placeholder}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('placeholder')).toBe(placeholder);
	});

	it('should pass readOnly to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				readOnly
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass required to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				required
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('required')).toBeTruthy();
	});

	it('should pass scrollableYearDropdown to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				scrollableYearDropdown
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('scrollableYearDropdown')).toBeTruthy();
	});

	it('should pass selectedDate to CSDatepicker', () => {
		const selectedDate = new Date();
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				selected={selectedDate}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('selected')).toBe(selectedDate);
	});

	it('should pass showMonthDropdown to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				showMonthDropdown
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showMonthDropdown')).toBeTruthy();
	});

	it('should pass showYearDropdown to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				showYearDropdown
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showYearDropdown')).toBeTruthy();
	});

	it('should pass timeCaption to DatePicker', () => {
		const timeCaption = 'Tick Tock';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeCaption={timeCaption}
			/>,
		).dive();
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeCaption')).toBe(timeCaption);
	});

	it('should pass timeFormat to DatePicker', () => {
		const timeFormat = 'HH:mm:ss';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeFormat={timeFormat}
			/>,
		).dive();
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeFormat')).toBe(timeFormat);
	});

	it('should pass timeIntervals to DatePicker', () => {
		const timeIntervals = 60;
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeIntervals={timeIntervals}
			/>,
		).dive();
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeIntervals')).toBe(timeIntervals);
	});

	it('should pass title to CSDatepicker', () => {
		const title = 'title';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				title={title}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('title')).toBe(title);
	});

	it('should pass correct todayButton value to CSDatepicker', () => {
		const todayLabel = 'today';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				todayButton={todayLabel}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('todayButton')).toBe(todayLabel);
	});

	it('should pass tooltipPosition to CSDatepicker', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				tooltipPosition={tooltipPosition}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should pass value to CSDatepicker', () => {
		const value = '21-02-2021';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				value={value}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('value')).toBe(value);
	});

	it('should pass width to CSDatepicker', () => {
		const width = '300px';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				width={width}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('width')).toBe(width);
	});

	it('should pass yearDropdownItemNumber to CSDatepicker', () => {
		const yearDropdownItemNumber = 5;
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				yearDropdownItemNumber={yearDropdownItemNumber}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('yearDropdownItemNumber')).toBe(yearDropdownItemNumber);
	});

	it('should pass className to CSDatepicker', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				className={customClass}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('className')).toBe(`cs-datetimepicker ${customClass}`);
	});

	it('should pass id to CSDatepicker', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				id={customId}
			/>,
		).dive();
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('id')).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} data-testid="rest" />).dive();
		const datepicker = uut.find({ 'data-testid': 'rest' });
		expect(datepicker).toHaveLength(1);
	});
});
