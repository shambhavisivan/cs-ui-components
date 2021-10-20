import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSTextarea } from '@cloudsense/cs-ui-components';
import CSFormTextareaField from '../../form-fields/CSFormTextareaField';

const label = 'label';
const fieldType = 'TEXTAREA';
const name = 'textarea';
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

describe('CSFormTextareaField', () => {
	it('should pass correct label to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('label')).toBe(label);
	});

	it('should pass correct name to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(JSON.stringify(inputText.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSTextarea', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSTextarea', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(JSON.stringify(inputText.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct max height value to CSTextarea', () => {
		const maxHeight = '200px';
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				maxHeight={maxHeight}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('maxHeight')).toBe(maxHeight);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		inputText.simulate('blur', { target: { value: 'Text' } });
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		inputText.simulate('change', { target: { value: 'Text' } });
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('required')).toBeTruthy();
	});

	it('should pass correct rows value to CSTextarea', () => {
		const rows = 5;
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				rows={rows}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('rows')).toBe(rows);
	});

	it('should pass correct styleClass to CSTextarea', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSTextarea', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('title')).toBe(title);
	});

	it('should pass correct value to CSTextarea', () => {
		const value = 5;
		const uut = shallow(
			<CSFormTextareaField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const inputText = uut.find(CSTextarea);
		expect(inputText.prop('value')).toBe(value);
	});
});
