import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSInputText } from '@cloudsense/cs-ui-components';
import CSFormTextField from '../../form-fields/CSFormTextField';

const label = 'label';
const fieldType = 'TEXT';
const name = 'text';
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

describe('CSFormTextField', () => {
	it('should pass correct label to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('label')).toBe(label);
	});

	it('should pass correct name to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(JSON.stringify(inputText.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSInputText', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSInputText', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(JSON.stringify(inputText.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct max length value to CSInputText', () => {
		const maxLength = 8;
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				maxLength={maxLength}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('maxLength')).toBe(maxLength);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const inputText = uut.find(CSInputText);
		inputText.simulate('blur', { target: { value: 'Text' } });
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const inputText = uut.find(CSInputText);
		inputText.simulate('change', { target: { value: 'Text' } });
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const inputText = uut.find(CSInputText);
		inputText.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const inputText = uut.find(CSInputText);
		inputText.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSInputText', () => {
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSInputText', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSInputText', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('title')).toBe(title);
	});

	it('should pass correct value to CSInputText', () => {
		const value = 'Text';
		const uut = shallow(
			<CSFormTextField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const inputText = uut.find(CSInputText);
		expect(inputText.prop('value')).toBe(value);
	});
});
