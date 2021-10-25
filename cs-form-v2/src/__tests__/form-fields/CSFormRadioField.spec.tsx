import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';
import CSFormRadioField from '../../form-fields/CSFormRadioField';

const label = 'label';
const fieldType = 'RADIO';
const name = 'radio';
const radioOptionName = 'lang';
const radioOptions = [
	{ radioOptionName, radioOptionValue: 'eng', label: 'English' },
	{ radioOptionName, radioOptionValue: 'cro', label: 'Croatian' },
	{ radioOptionName, radioOptionValue: 'fr', label: 'French' },
];

describe('CSFormRadioField', () => {
	it('should render passed options as children of CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSRadio).children();
		expect(options).toHaveLength(3);
	});

	it('should pass correct label to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('label')).toBe(label);
	});

	it('should pass correct name to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('name')).toBe(name);
	});

	it('should pass correct disabled value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSRadio', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSRadio', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('helpText')).toBe(helpText);
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const options = uut.find(CSRadioOption);
		options.first().simulate('blur', { target: { value: 'First' } });
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const options = uut.find(CSRadioOption);
		options.first().simulate('change', { target: { value: 'First' } });
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSRadio', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('className')).toBe(styleClass);
	});

	it('should pass correct value to CSRadio', () => {
		const value = 'eng';
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const options = uut.find(CSRadioOption);
		expect(options.first().prop('checked')).toBeTruthy();
	});

	it('should pass correct option disabled value to CSRadioOption', () => {
		const radioOptionDisabled = [{ radioOptionName: 'lang', radioOptionValue: 'eng', label: 'English', disabled: true }];
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptionDisabled}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSRadioOption);
		expect(options.prop('disabled')).toBeTruthy();
	});

	it('should pass correct label value to CSRadioOption', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSRadioOption);
		expect(options.first().prop('label')).toBe('English');
	});

	it('should pass correct radioOptionName value to CSRadioOption', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSRadioOption);
		expect(options.first().prop('name')).toBe(radioOptionName);
	});

	it('should pass correct radioOptionValue value to CSRadioOption', () => {
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSRadioOption);
		expect(options.first().prop('value')).toBe('eng');
	});

	it('should pass correct option readOnly value to CSRadioOption', () => {
		const radioOptionReadOnly = [{ radioOptionName: 'lang', radioOptionValue: 'eng', label: 'English', readOnly: true }];
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptionReadOnly}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const option = uut.find(CSRadioOption);
		expect(option.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct option title to CSRadioOption', () => {
		const title = 'title';
		const radioOptionWithTitle = [{ radioOptionName: 'lang', radioOptionValue: 'eng', label: 'English', title }];
		const uut = shallow(
			<CSFormRadioField
				radioOptions={radioOptionWithTitle}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const option = uut.find(CSRadioOption);
		expect(option.prop('title')).toBe(title);
	});
});
