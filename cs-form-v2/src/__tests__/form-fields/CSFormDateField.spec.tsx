import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import CSFormDateField from '../../form-fields/CSFormDateField';
import { actions, icons } from '../test-data/custom-data';

const label = 'label';
const type = 'DATE';
const name = 'date';

describe('CSFormDateField', () => {
	it('should pass correct label to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('label')).toBe(label);
	});

	it('should pass correct name to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(JSON.stringify(datepicker.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct date format to CSDatepicker', () => {
		const dateFormat = 'MM-dd-yyyy';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				dateFormat={dateFormat}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('dateFormat')).toBe(dateFormat);
	});

	it('should pass correct disabled value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				disabled
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				error
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSDatepicker', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSDatepicker', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(JSON.stringify(datepicker.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct locale value to CSDatepicker', () => {
		const locale = 'en-GB';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				locale={locale}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('locale')).toBe(locale);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('blur', { target: { value: '1/1/2021' } });
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('change');
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				required
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSDatepicker', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSDatepicker', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('title')).toBe(title);
	});

	it('should pass correct value to CSDatepicker', () => {
		const value = new Date();
		const uut = shallow(
			<CSFormDateField
				type={type}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('selected')).toBe(value);
	});
});
