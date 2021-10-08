import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import DatePicker from 'react-datepicker';
import CSDateTimePicker from '../../components/CSDateTimePicker';

const labelValue = 'Select date';
const errorMessage = 'Error message';
const minDate = 5;
const maxDate = 5;
const onChange = () => { };

describe('<CSDateTimePicker />', () => {
	it('should pass correct showTimeSelect value to CSDatepicker', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={onChange} />);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showTimeSelect')).toBeTruthy();
	});

	it('should pass correct label to CSDatepicker', () => {
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={onChange} />);
		const dateTimePickerLabel = uut.dive().find('CSDatepicker');
		expect(dateTimePickerLabel.prop('label')).toBe(labelValue);
	});

	it('should call onChange handler', () => {
		const handleOnChangeMock = jest.fn();
		const event: any = {};
		const uut = shallow(<CSDateTimePicker label={labelValue} onChange={handleOnChangeMock} />);
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onChange')(event);
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct actions value to CSDatepicker', () => {
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
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				actions={actionsValue}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker).toHaveLength(1);
		expect(JSON.stringify(datepicker.prop('actions'))).toBe(JSON.stringify(actionsValue));
	});

	it('should pass correct autoFocus value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				autoFocus
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('autoFocus')).toBeTruthy();
	});

	it('should pass correct border radius to CSDatepicker', () => {
		const borderRadius = '1rem';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				borderRadius={borderRadius}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('borderRadius')).toBe(borderRadius);
	});

	it('should pass correct date format to CSDatepicker', () => {
		const dateFormat = 'd MMMM, yyyy h:mm aa';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				dateFormat={dateFormat}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass correct disabled value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				disabled
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('disabled')).toBeTruthy();
	});

	it('should pass correct dropdown mode to CSDatepicker', () => {
		const dropdownMode = 'scroll';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				dropdownMode={dropdownMode}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('dropdownMode')).toBe(dropdownMode);
	});

	it('should pass correct error value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct errorTooltip value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				error
				errorMessage={errorMessage}
				errorTooltip
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('errorTooltip')).toBeTruthy();
	});

	it('should pass correct help text to CSDatepicker', () => {
		const helpText = 'Help text';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				helpText={helpText}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSDatepicker', () => {
		const iconsValue = [{ iconName: 'cart' }];
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				icons={iconsValue}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(JSON.stringify(datepicker.prop('icons'))).toBe(JSON.stringify(iconsValue));
	});

	it('should pass correct inline value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				inline
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('inline')).toBeTruthy();
	});

	it('should pass correct isClearable value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				isClearable
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('isClearable')).toBeTruthy();
	});

	it('should pass correct labelHidden value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				labelHidden
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('labelHidden')).toBeTruthy();
	});

	it('should pass correct labelTitle value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				labelTitle
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('labelTitle')).toBeTruthy();
	});

	it('should pass correct max date to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('maxDate')).toBe(maxDate);
	});

	it('should pass correct maxDateYear to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				maxDate={maxDate}
				maxDateYear
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('maxDateYear')).toBeTruthy();
	});

	it('should pass correct minDate to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('minDate')).toBe(minDate);
	});

	it('should pass correct minDateYear to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				minDate={minDate}
				minDateYear
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('minDateYear')).toBeTruthy();
	});

	it('should pass correct name to CSDatepicker', () => {
		const name = 'name';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				name={name}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('name')).toBe(name);
	});

	it('should call onBlur handler', () => {
		const handleOnBlurMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onBlur={handleOnBlurMock}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onBlur')(event);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown handler', () => {
		const handleOnKeyDownMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onKeyDown')(event);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should call onSelect handler', () => {
		const handleOnSelectMock = jest.fn();
		const event: any = {};
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				onSelect={handleOnSelectMock}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		datepicker.prop('onSelect')(event);
		expect(handleOnSelectMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct placeholder value to CSDatepicker', () => {
		const placeholder = 'placeholder';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				placeholder={placeholder}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('placeholder')).toBe(placeholder);
	});

	it('should pass correct readOnly value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				readOnly
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				required
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('required')).toBeTruthy();
	});

	it('should pass correct scrollableYearDropdown value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				scrollableYearDropdown
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('scrollableYearDropdown')).toBeTruthy();
	});

	it('should pass correct selected date to CSDatepicker', () => {
		const selectedDate = new Date();
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				selected={selectedDate}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('selected')).toBe(selectedDate);
	});

	it('should pass correct showMonthDropdown value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				showMonthDropdown
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showMonthDropdown')).toBeTruthy();
	});

	it('should pass correct showYearDropdown value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				showYearDropdown
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('showYearDropdown')).toBeTruthy();
	});

	it('should pass correct time caption to DatePicker', () => {
		const timeCaption = 'Tick Tock';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeCaption={timeCaption}
			/>,
		);
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeCaption')).toBe(timeCaption);
	});

	it('should pass correct time format to DatePicker', () => {
		const timeFormat = 'HH:mm:ss';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeFormat={timeFormat}
			/>,
		);
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeFormat')).toBe(timeFormat);
	});

	it('should pass correct time intervals to DatePicker', () => {
		const timeIntervals = 60;
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				timeIntervals={timeIntervals}
			/>,
		);
		const datepicker = uut.dive().dive().find(DatePicker);
		expect(datepicker.prop('timeIntervals')).toBe(timeIntervals);
	});

	it('should pass correct title value to CSDatepicker', () => {
		const title = 'title';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				title={title}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('title')).toBe(title);
	});

	it('should pass correct todayButton value to CSDatepicker', () => {
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				todayButton
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('todayButton')).toBeTruthy();
	});

	it('should pass correct tooltip position to CSDatepicker', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				tooltipPosition={tooltipPosition}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should pass correct value to CSDatepicker', () => {
		const value = '21-02-2021';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				value={value}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('value')).toBe(value);
	});

	it('should pass correct width value to CSDatepicker', () => {
		const width = '300px';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				width={width}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('width')).toBe(width);
	});

	it('should pass correct yearDropdownItemNumber to CSDatepicker', () => {
		const yearDropdownItemNumber = 5;
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				yearDropdownItemNumber={yearDropdownItemNumber}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('yearDropdownItemNumber')).toBe(yearDropdownItemNumber);
	});

	it('should pass correct custom class to CSDatepicker', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				className={customClass}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('className')).toBe(`cs-datetimepicker ${customClass}`);
	});

	it('should pass correct id to CSDatepicker', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSDateTimePicker
				label={labelValue}
				onChange={onChange}
				id={customId}
			/>,
		);
		const datepicker = uut.dive().find('CSDatepicker');
		expect(datepicker.prop('id')).toBe(customId);
	});
});
