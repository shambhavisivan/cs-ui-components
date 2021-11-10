import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import CSFormDateField from '../../form-fields/CSFormDateField';

const label = 'label';
const fieldType = 'DATE';
const name = 'date';
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

describe('CSFormDateField', () => {
	it('should pass correct label to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
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
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('blur');
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		datepicker.simulate('change');
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSDatepicker', () => {
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
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
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('required')).toBeTruthy();
	});

	it('should pass correct selected date to CSDatepicker', () => {
		const selectedDate = new Date();
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
				label={label}
				name={name}
				selected={selectedDate}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('selected')).toBe(selectedDate);
	});

	it('should pass correct styleClass to CSDatepicker', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
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
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('title')).toBe(title);
	});

	it('should pass correct value to CSDatepicker', () => {
		const value = '1-1-2020';
		const uut = shallow(
			<CSFormDateField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const datepicker = uut.find(CSDatepicker);
		expect(datepicker.prop('value')).toBe(value);
	});
});