import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import CSFormDateTimeField from '../../form-fields/CSFormDateTimeField';

const label = 'label';
const fieldType = 'DATETIME';
const name = 'datetime';
const actions = [
	{
		action: () => jest.fn(),
		icon: { iconName: 'check' },
		labelHidden: true,
		name: 'Check',
	},
	{
		action: () => jest.fn(),
		icon: { iconName: 'add' },
		labelHidden: true,
		name: 'Add',
		getTooltip: {
			content: ['actions tooltip'],
			delay: 300,
			stickyOnClick: true,
		},
	},
];
const icons = [{ iconName: 'activity' }];

describe('CSFormDateTimeField', () => {
	it('should pass correct label to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('label')).toBe(label);
	});

	it('should pass correct name to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(JSON.stringify(dateTimePicker.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct date format to CSDateTimePicker', () => {
		const dateFormat = 'MM-dd-yyyy';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				dateFormat={dateFormat}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass correct disabled value to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSDateTimePicker', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSDateTimePicker', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(JSON.stringify(dateTimePicker.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct locale value to CSDateTimePicker', () => {
		const locale = 'en-GB';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				locale={locale}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('locale')).toBe(locale);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		dateTimePicker.simulate('blur', { target: { value: '1/1/2021' } });
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		dateTimePicker.simulate('change');
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSDateTimePicker', () => {
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSDateTimePicker', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('className')).toBe(styleClass);
	});

	it('should pass correct time caption to CSDateTimePicker', () => {
		const timeCaption = 'Tick-Tock';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				timeCaption={timeCaption}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('timeCaption')).toBe(timeCaption);
	});

	it('should pass correct time format to CSDateTimePicker', () => {
		const timeFormat = 'HH:mm:ss';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				timeFormat={timeFormat}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('timeFormat')).toBe(timeFormat);
	});

	it('should pass correct time intervals to CSDateTimePicker', () => {
		const timeIntervals = 60;
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				timeIntervals={timeIntervals}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('timeIntervals')).toBe(timeIntervals);
	});

	it('should pass correct title to CSDateTimePicker', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('title')).toBe(title);
	});

	it('should pass correct value to CSDateTimePicker', () => {
		const value = new Date();
		const uut = shallow(
			<CSFormDateTimeField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const dateTimePicker = uut.find(CSDateTimePicker);
		expect(dateTimePicker.prop('selected')).toBe(value);
	});
});
