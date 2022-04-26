import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSToggle } from '@cloudsense/cs-ui-components';
import CSFormToggleField from '../../form-fields/CSFormToggleField';
import { actions, icons } from '../test-data/custom-data';

const label = 'label';
const type = 'TOGGLE';
const name = 'toggle';

describe('CSFormToggleField', () => {
	it('should pass correct label to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('label')).toBe(label);
	});

	it('should pass correct name to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(JSON.stringify(toggle.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				disabled
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				error
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSToggle', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSToggle', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(JSON.stringify(toggle.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const toggle = uut.find(CSToggle);
		toggle.simulate('blur', { target: { checked: false } });
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFocus event', () => {
		const handleOnFocusMock = jest.fn();
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				onFocus={handleOnFocusMock}
			/>,
		);
		const toggle = uut.find(CSToggle);
		toggle.simulate('focus', { target: { checked: false } });
		expect(handleOnFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const toggle = uut.find(CSToggle);
		toggle.simulate('change', { target: { checked: false } });
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const toggle = uut.find(CSToggle);
		toggle.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const toggle = uut.find(CSToggle);
		toggle.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSToggle', () => {
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				required
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSToggle', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSToggle', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('title')).toBe(title);
	});

	it('should pass correct value to CSToggle', () => {
		const value = true;
		const uut = shallow(
			<CSFormToggleField
				type={type}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const toggle = uut.find(CSToggle);
		expect(toggle.prop('checked')).toBe(value);
	});
});
