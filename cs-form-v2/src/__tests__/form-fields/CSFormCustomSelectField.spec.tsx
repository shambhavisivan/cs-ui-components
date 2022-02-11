import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSCustomSelect } from '@cloudsense/cs-ui-components';
import CSFormCustomSelectField from '../../form-fields/CSFormCustomSelectField';

const label = 'label';
const fieldType = 'CUSTOM-SELECT';
const name = 'custom-select';
const customSelectOptions = [
	{ key: 1, label: 'First' },
	{ key: 2, label: 'Second' },
	{ key: 3, label: 'Third' },
	{ key: 4, label: 'Fourth' },
];

describe('CSFormCustomSelectField', () => {
	it('should pass correct options to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(JSON.stringify(customSelect.prop('options'))).toBe(JSON.stringify(customSelectOptions));
	});

	it('should pass correct label to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('label')).toBe(label);
	});

	it('should pass correct name to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('name')).toBe(name);
	});

	it('should pass correct disabled value to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSCustomSelect', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSCustomSelect', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('helpText')).toBe(helpText);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		customSelect.simulate('blur');
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange when onSelect or onDeselect is triggered', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);

		const customSelect = uut.find(CSCustomSelect);
		customSelect.prop('onSelect')({} as any);
		customSelect.prop('onDeselect' as any)();
		expect(handleOnChangeMock).toHaveBeenCalledTimes(2);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		customSelect.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		customSelect.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSCustomSelect', () => {
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSCustomSelect', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSCustomSelect', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('title')).toBe(title);
	});

	it('should pass correct value to CSCustomSelect', () => {
		const value = 3;
		const uut = shallow(
			<CSFormCustomSelectField
				options={customSelectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const customSelect = uut.find(CSCustomSelect);
		expect(customSelect.prop('selectedKeys')).toBe(value);
	});
});
