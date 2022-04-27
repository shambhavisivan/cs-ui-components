import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSInputNumber from '../../components/CSInputNumber';
import { actions, icons } from '../common/custom-data';

const label = 'input number value';
const errorMessage = 'input number error message';

describe('<CSInputNumber />', () => {
	it('should render the default CSInputNumber', () => {
		const uut = shallow(<CSInputNumber label={label} />);
		// Should render input number
		const inputNumber = uut.find('.cs-input-number');
		expect(inputNumber).toHaveLength(1);
		// Should render a label
		const inputNumberLabel = uut.find('CSLabel');
		expect(inputNumberLabel).toHaveLength(1);
		expect(inputNumberLabel.prop('label')).toBe(label);
		const inputNumberAriaLabel = inputNumber.prop('aria-label');
		expect(inputNumberAriaLabel).toBe(label);
		// disabled
		expect(inputNumber.props().disabled).toBeFalsy();
		// error
		const inputNumberError = uut.find('.cs-input-number.cs-input-number-error');
		expect(inputNumberError).toHaveLength(0);
		expect(inputNumber.prop('aria-invalid')).toBeFalsy();
		// readonly
		expect(inputNumber.props().readOnly).toBeFalsy();
		// type
		const inputNumberType = inputNumber.props().type;
		expect(inputNumberType).toBe('number');
		// hidden
		const hiddenInputNumber = uut.find('.cs-input-number-wrapper.cs-element-hidden');
		expect(hiddenInputNumber).toHaveLength(0);
		// hideSpinner
		const hiddenInputNumberSpinner = uut.find('.cs-input-number.cs-input-number-hide-spinner-true');
		expect(hiddenInputNumberSpinner).toHaveLength(0);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(<CSInputNumber label={label} actions={actions} />);
		const inputNumberCustomData = uut.find('CSCustomData').prop('actions');
		expect(inputNumberCustomData).toMatchObject(actions);
	});

	it('should set custom border radius', () => {
		const borderRadius = '0';
		const uut = shallow(<CSInputNumber label={label} borderRadius={borderRadius} />);
		const inputNumberStyle = uut.find('.cs-input-number-wrapper').props().style;
		expect(inputNumberStyle).toHaveProperty('--cs-input-border-radius', borderRadius);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSInputNumber label={label} disabled />);
		const disabledInputNumber = uut.find('.cs-input-wrapper-disabled > .cs-input-number');
		expect(disabledInputNumber.props().disabled).toBeTruthy();
	});

	it('should render in the error state', () => {
		const uut = shallow(<CSInputNumber label={label} error />);
		const inputNumberError = uut.find('.cs-input-wrapper.cs-input-wrapper-error');
		expect(inputNumberError).toHaveLength(1);
		expect(uut.find('.cs-input-number').prop('aria-invalid')).toBeTruthy();
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputNumber label={label} error errorMessage={errorMessage} />);
		const inputNumberErrorMsg = uut.find('CSFieldErrorMsg');
		expect(inputNumberErrorMsg.prop('message')).toBe(errorMessage);
	});

	it('should format value based on fractionDigits value', () => {
		const uut = shallow(<CSInputNumber label={label} fractionDigits={2} value={1.245} />);
		const inputNumber = uut.find('.cs-input-number');
		expect(inputNumber.prop('value')).toBe('1.25');
	});

	it('should pass errorTooltip to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputNumber label={label} error errorMessage={errorMessage} errorTooltip />);
		const CSTooltip = uut.find('CSTooltip');
		expect(CSTooltip.prop('content')).toBe(errorMessage);
	});

	it('should pass helpText to CSLabel', () => {
		const helpText = 'help text';
		const uut = shallow(<CSInputNumber label={label} helpText={helpText} />);
		const inputNumberLabel = uut.find('CSLabel');
		expect(inputNumberLabel.prop('helpText')).toBe(helpText);
	});

	it('should hide the input number', () => {
		const uut = shallow(<CSInputNumber label={label} hidden />);
		const hiddenInputNumber = uut.find('.cs-input-number-wrapper.cs-element-hidden');
		expect(hiddenInputNumber).toHaveLength(1);
	});

	it('should hide the incremental number controls', () => {
		const uut = shallow(<CSInputNumber label={label} hideSpinner />);
		const hiddenInputNumberSpinner = uut.find('.cs-input-number.cs-input-number-hide-spinner-true');
		expect(hiddenInputNumberSpinner).toHaveLength(1);
	});

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(<CSInputNumber label={label} icons={icons} />);
		const inputNumberCustomData = uut.find('CSCustomData').prop('icons');
		expect(inputNumberCustomData).toMatchObject(icons);
	});

	it('should hide the label', () => {
		const uut = shallow(<CSInputNumber label={label} labelHidden />);
		const inputNumberLabel = uut.find('CSLabel');
		expect(inputNumberLabel).toHaveLength(0);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSInputNumber label={label} labelTitle />);
		const inputNumberLabelTitle = uut.find('CSLabel').props().title;
		expect(inputNumberLabelTitle).toBe(label);
	});

	it('should set the max attribute', () => {
		const max = 10;
		const uut = shallow(<CSInputNumber label={label} max={max} />);
		const inputNumber = uut.find('.cs-input-number');
		expect(inputNumber.props().max).toBe(max);
		expect(inputNumber.prop('aria-valuemax')).toBe(max);
	});

	it('should set the max length attribute', () => {
		const maxLength = 10;
		const uut = shallow(<CSInputNumber label={label} type="text" maxLength={maxLength} />);
		const inputNumberMaxLength = uut.find('.cs-input-number').prop('maxLength');
		expect(inputNumberMaxLength).toBe(maxLength);
	});

	it('should set the min attribute', () => {
		const min = 10;
		const uut = shallow(<CSInputNumber label={label} min={min} />);
		const inputNumber = uut.find('.cs-input-number');
		expect(inputNumber.props().min).toBe(min);
		expect(inputNumber.prop('aria-valuemin')).toBe(min);
	});

	it('should set name attribute', () => {
		const name = 'name';
		const uut = shallow(<CSInputNumber label={label} name={name} />);
		const inputNumberName = uut.find('.cs-input-number').props().name;
		expect(inputNumberName).toBe(name);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onBlur={handleBlurMock} />);
		const inputNumber = uut.find('.cs-input-number');
		inputNumber.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onChange={handleChangeMock} />);
		const inputNumber = uut.find('.cs-input-number');
		inputNumber.simulate('change', { target: { value: 0 } });
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onFocus callback', () => {
		const handleFocusMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onFocus={handleFocusMock} />);
		const inputNumber = uut.find('.cs-input-number');
		inputNumber.simulate('focus');
		expect(handleFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onClick={handleClickMock} />);
		const inputNumber = uut.find('.cs-input-wrapper');
		inputNumber.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onKeyDown={handleKeyDownMock} />);
		const inputNumber = uut.find('.cs-input-number');
		inputNumber.simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onPaste callback', () => {
		const handlePasteMock = jest.fn();
		const uut = shallow(<CSInputNumber label={label} onPaste={handlePasteMock} />);
		const inputNumber = uut.find('.cs-input-number');
		inputNumber.simulate('paste');
		expect(handlePasteMock).toHaveBeenCalledTimes(1);
	});

	it('should set a placeholder attribute', () => {
		const placeholder = 'placeholder';
		const uut = shallow(<CSInputNumber label={label} placeholder={placeholder} />);
		const inputNumberPlaceholder = uut.find('.cs-input-number').props().placeholder;
		expect(inputNumberPlaceholder).toBe(placeholder);
	});

	it('should set the readonly attribute', () => {
		const uut = shallow(<CSInputNumber label={label} readOnly />);
		const inputNumberReadOnly = uut.find('.cs-input-wrapper-read-only > .cs-input-number').props().readOnly;
		expect(inputNumberReadOnly).toBeTruthy();
	});

	it('should set the required attribute', () => {
		const uut = shallow(<CSInputNumber label={label} required />);
		const inputNumberRequired = uut.find('.cs-input-number').props().required;
		const inputNumberAriaRequired = uut.find('.cs-input-number').prop('aria-required');
		const inputNumberLabelRequired = uut.find('CSLabel').prop('required');
		expect(inputNumberRequired).toBeTruthy();
		expect(inputNumberAriaRequired).toBeTruthy();
		expect(inputNumberLabelRequired).toBeTruthy();
	});

	it('should set the step attribute', () => {
		const step = '2';
		const uut = shallow(<CSInputNumber label={label} step={step} />);
		const inputNumberStep = uut.find('.cs-input-number').props().step;
		expect(inputNumberStep).toBe(step);
	});

	it('should set the title attribute', () => {
		const title = 'title';
		const uut = shallow(<CSInputNumber label={label} title={title} />);
		const inputNumberTitle = uut.find('.cs-input-number').props().title;
		expect(inputNumberTitle).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSInputNumber label={label} tooltipPosition={tooltipPosition} />);
		const inputNumberLabelPosition = uut.find('CSLabel').prop('tooltipPosition');
		expect(inputNumberLabelPosition).toBe(tooltipPosition);
	});

	it('should override the type attribute to text', () => {
		const type = 'text';
		const uut = shallow(<CSInputNumber label={label} type={type} />);
		const inputNumberType = uut.find('.cs-input-number').props().type;
		expect(inputNumberType).toBe(type);
	});

	it('should set the value attribute', () => {
		const value = 10;
		const uut = shallow(<CSInputNumber label={label} value={value} />);
		const inputNumber = uut.find('.cs-input-number');
		expect(inputNumber.props().value).toBe(String(value));
		expect(inputNumber.prop('aria-valuenow')).toBe(Number(value));
	});

	it('should have a custom class name', () => {
		const className = 'custom-class';
		const uut = shallow(<CSInputNumber label={label} className={className} />);
		const inputNumber = uut.find(`.cs-input-number-wrapper.${className}`);
		expect(inputNumber).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSInputNumber label={label} id={id} />);
		const inputNumber = uut.find(`.cs-input-number#${id}`);
		const inputNumberLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(inputNumber).toHaveLength(1);
		expect(inputNumberLabelHtmlFor).toBe(id);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSInputNumber label={label} data-testid="rest" />);
		const inputNumber = uut.find({ 'data-testid': 'rest' });
		expect(inputNumber).toHaveLength(1);
	});
});
