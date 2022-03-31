import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSTextarea } from '@cloudsense/cs-ui-components';
import CSFormTextareaField from '../../form-fields/CSFormTextareaField';
import { actions, icons } from '../test-data/custom-data';

const label = 'label';
const type = 'TEXTAREA';
const name = 'textarea';

describe('CSFormTextareaField', () => {
	it('should pass correct label to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('label')).toBe(label);
	});

	it('should pass correct name to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(JSON.stringify(textarea.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				disabled
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				error
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSTextarea', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSTextarea', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(JSON.stringify(textarea.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct max height value to CSTextarea', () => {
		const maxHeight = '200px';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				maxHeight={maxHeight}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('maxHeight')).toBe(maxHeight);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		textarea.simulate('blur', { target: { value: 'Text' } });
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		textarea.simulate('change', { target: { value: 'Text' } });
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		textarea.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		textarea.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSTextarea', () => {
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				required
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('required')).toBeTruthy();
	});

	it('should pass correct rows value to CSTextarea', () => {
		const rows = 5;
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				rows={rows}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('rows')).toBe(rows);
	});

	it('should pass correct styleClass to CSTextarea', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSTextarea', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('title')).toBe(title);
	});

	it('should pass correct value to CSTextarea', () => {
		const value = 'Text';
		const uut = shallow(
			<CSFormTextareaField
				type={type}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const textarea = uut.find(CSTextarea);
		expect(textarea.prop('value')).toBe(value);
	});
});
