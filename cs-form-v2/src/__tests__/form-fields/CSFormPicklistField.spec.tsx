import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSPicklist } from '@cloudsense/cs-ui-components';
import CSFormPicklistField from '../../form-fields/CSFormPicklistField';

const label = 'label';
const type = 'PICKLIST';
const name = 'picklist';
const picklistOptions = [
	{ key: 1, label: 'First' },
	{ key: 2, label: 'Second' },
	{ key: 3, label: 'Third' },
	{ key: 4, label: 'Fourth' },
];

describe('CSFormPicklistField', () => {
	it('should pass correct options to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(JSON.stringify(picklist.prop('options'))).toBe(JSON.stringify(picklistOptions));
	});

	it('should pass correct label to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('label')).toBe(label);
	});

	it('should pass correct name to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('name')).toBe(name);
	});

	it('should pass correct disabled value to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				disabled
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				error
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSPicklist', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSPicklist', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('helpText')).toBe(helpText);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		picklist.simulate('blur');
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange when onSelect or onDeselect is triggered', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);

		const picklist = uut.find(CSPicklist);
		picklist.prop('onSelect')({} as any);
		picklist.prop('onDeselect')({} as any);
		picklist.prop('onClear')();
		expect(handleOnChangeMock).toHaveBeenCalledTimes(3);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		picklist.simulate('click');
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFocus event', () => {
		const handleOnFocusMock = jest.fn();
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				onFocus={handleOnFocusMock}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		picklist.simulate('focus');
		expect(handleOnFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		picklist.simulate('keydown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSPicklist', () => {
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				required
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSPicklist', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSPicklist', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('title')).toBe(title);
	});

	it('should pass correct value to CSPicklist', () => {
		const value = 3;
		const uut = shallow(
			<CSFormPicklistField
				options={picklistOptions}
				type={type}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const picklist = uut.find(CSPicklist);
		expect(picklist.prop('selectedKeys')).toBe(value);
	});
});
