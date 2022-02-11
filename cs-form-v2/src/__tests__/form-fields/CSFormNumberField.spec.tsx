import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import CSFormNumberField from '../../form-fields/CSFormNumberField';

const label = 'label';
const fieldType = 'NUMBER';
const name = 'number';
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

describe('CSFormNumberField', () => {
	it('should pass correct label to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('label')).toBe(label);
	});

	it('should pass correct name to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(JSON.stringify(inputNumber.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSInputNumber', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSInputNumber', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(JSON.stringify(inputNumber.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct max value to CSInputNumber', () => {
		const max = 8;
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				max={max}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('max')).toBe(max);
	});

	it('should pass correct min value to CSInputNumber', () => {
		const min = 4;
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				min={min}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('min')).toBe(min);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		inputNumber.simulate('blur', { target: { value: 2 } });
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		inputNumber.simulate('change', { target: { value: 2 } });
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		inputNumber.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		inputNumber.simulate('keydown', {} as any);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSInputNumber', () => {
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSInputNumber', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSInputNumber', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('title')).toBe(title);
	});

	it('should pass correct value to CSInputNumber', () => {
		const value = 5;
		const uut = shallow(
			<CSFormNumberField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const inputNumber = uut.find(CSInputNumber);
		expect(inputNumber.prop('value')).toBe(value);
	});
});
