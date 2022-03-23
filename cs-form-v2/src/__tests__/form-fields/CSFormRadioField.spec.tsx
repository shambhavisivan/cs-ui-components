import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSRadio } from '@cloudsense/cs-ui-components';
import CSFormRadioField from '../../form-fields/CSFormRadioField';

const label = 'label';
const fieldType = 'RADIO';
const name = 'city';
const options = [{
	key: 'zagreb',
	label: 'Zagreb',
}, {
	key: 'chennai',
	label: 'Chennai',
}];

describe('CSFormRadioField', () => {
	it('should pass options to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(JSON.stringify(radio.prop('options'))).toBe(JSON.stringify(options));
	});

	it('should pass correct label to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('label')).toBe(label);
	});

	it('should pass correct disabled value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('disabled')).toBeTruthy();
	});

	it('should pass correct disabledKeys value to CSRadio', () => {
		const disabledKeys = ['zagreb', 'chennai'];
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				disabledKeys={disabledKeys}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(JSON.stringify(radio.prop('disabledKeys'))).toBe(JSON.stringify(disabledKeys));
	});

	it('should pass correct error value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
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
				options={options}
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
				options={options}
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
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const radio = uut.find(CSRadio);
		radio.prop('onBlur')({ target: {} } as any);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const radio = uut.find(CSRadio);
		radio.prop('onChange')({ target: {} } as any);
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				onClick={handleOnClickMock}
			/>,
		);
		const radio = uut.find(CSRadio);
		radio.prop('onClick')();
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const radio = uut.find(CSRadio);
		radio.prop('onKeyDown')();
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
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
				options={options}
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
				options={options}
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
		const value = 'zagreb';
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('selectedKey')).toBe(value);
	});

	it('should pass correct name value to CSRadio', () => {
		const uut = shallow(
			<CSFormRadioField
				options={options}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const radio = uut.find(CSRadio);
		expect(radio.prop('name')).toBe(name);
	});

	it('should pass correct options with title to CSRadio', () => {
		const title = 'title';
		const optionsWithTitle = options.map((option) => ({ ...option, title }));
		const uut = shallow(
			<CSFormRadioField
				options={optionsWithTitle}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const option = uut.find(CSRadio);
		expect(JSON.stringify(option.prop('options'))).toBe(JSON.stringify(optionsWithTitle));
	});
});
