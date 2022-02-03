import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSInputText from '../../components/CSInputText';

const label = 'Enter value';
const errorMsg = 'Error message.';

describe('<CSInputText />', () => {
	it('should render the default CSInputText', () => {
		const uut = shallow(<CSInputText label={label} />);
		// Should render input text
		const inputText = uut.find('.cs-input-text');
		expect(inputText).toHaveLength(1);
		// Should render a label
		const inputTextLabel = uut.find('CSLabel');
		expect(inputTextLabel).toHaveLength(1);
		// disabled
		expect(inputText.prop('disabled')).toBeFalsy();
		// error
		const errorInputSearch = uut.find('.cs-input-text-error');
		expect(errorInputSearch).toHaveLength(0);
		expect(inputText.prop('aria-invalid')).toBeFalsy();
		// hidden
		const hiddenInputSearch = uut.find('.cs-input-text-wrapper.cs-element-hidden');
		expect(hiddenInputSearch).toHaveLength(0);
		// readOnly
		expect(inputText.prop('readOnly')).toBeFalsy();
		// required
		expect(inputText.prop('required')).toBeFalsy();
		expect(inputText.prop('aria-required')).toBeFalsy();
		expect(inputTextLabel.prop('aria-required')).toBeFalsy();
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSInputText label={label} />);
		const inputTextLabel = uut.find('CSLabel');
		expect(inputTextLabel.prop('label')).toBe(label);
	});

	it('should pass correct actions value to CSCustomDataActions', () => {
		const actions = [{
			action: () => { },
			labelHidden: true,
			icon: { iconName: 'delete' },
			name: 'Delete',
		},
		{
			action: () => { },
			icon: { iconName: 'add' },
			labelHidden: true,
			name: 'Add',
			getTooltip: {
				content: ['actions tooltip'],
			},
		}];
		const uut = shallow(<CSInputText label={label} actions={actions} />);
		const inputTextActions = uut.find('CSCustomDataActions');
		expect(inputTextActions.prop('actions')).toMatchObject(actions);
	});

	it('should set custom border radius', () => {
		const uut = shallow(<CSInputText label={label} borderRadius="0" />);
		const inputTextStyle = uut.find('.cs-input-text-wrapper').prop('style');
		expect(inputTextStyle).toHaveProperty('--cs-input-text-border-radius', '0');
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSInputText label={label} disabled />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('disabled')).toBeTruthy();
	});

	it('should set input text to error state', () => {
		const uut = shallow(<CSInputText label={label} error />);
		const inputTextError = uut.find('.cs-input-text-error');
		expect(inputTextError).toHaveLength(1);
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputText label={label} error errorMessage={errorMsg} />);
		const inputTextErrorMsg = uut.find('CSFieldErrorMsg');
		expect(inputTextErrorMsg.prop('message')).toBe(errorMsg);
	});

	it('should pass errorTooltip to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputText label={label} error errorMessage={errorMsg} errorTooltip />);
		const inputTextErrorMsg = uut.find('CSFieldErrorMsg');
		expect(inputTextErrorMsg.prop('tooltipMessage')).toBeTruthy();
	});

	it('should pass helpText to CSLabel', () => {
		const helpText = 'Help text.';
		const uut = shallow(<CSInputText label={label} helpText={helpText} />);
		const inputTextLabel = uut.find('CSLabel');
		expect(inputTextLabel.prop('helpText')).toBe(helpText);
	});

	it('should hide input text', () => {
		const uut = shallow(<CSInputText label={label} hidden />);
		expect(uut.find('.cs-input-text-wrapper.cs-element-hidden')).toHaveLength(1);
	});

	it('should pass icons to CSCustomDataIcons', () => {
		const icons = [{
			iconName: 'activity',
		}, {
			iconName: 'info',
			getTooltip: { content: 'test test' },
		}];
		const uut = shallow(<CSInputText label={label} icons={icons} />);
		const inputTextIcons = uut.find('CSCustomDataIcons');
		expect(inputTextIcons.prop('icons')).toMatchObject(icons);
	});

	it('should hide input text label', () => {
		const uut = shallow(<CSInputText label={label} labelHidden />);
		expect(uut.find('CSLabel')).toHaveLength(0);
	});

	it('should pass title to CSLabel', () => {
		const uut = shallow(<CSInputText label={label} labelTitle />);
		const inputTextLabel = uut.find('CSLabel');
		expect(inputTextLabel.prop('title')).toBe(label);
	});

	it('should set maxLength attribute', () => {
		const maxLength = 10;
		const uut = shallow(<CSInputText label={label} maxLength={maxLength} />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('maxLength')).toBe(maxLength);
	});

	it('should set name attribute', () => {
		const name = 'input text';
		const uut = shallow(<CSInputText label={label} name={name} />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('name')).toBe(name);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(<CSInputText label={label} onBlur={handleBlurMock} />);
		const inputText = uut.find('.cs-input-text');
		inputText.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(<CSInputText label={label} onChange={handleChangeMock} />);
		const inputText = uut.find('.cs-input-text');
		inputText.simulate('change');
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSInputText label={label} onClick={handleClickMock} />);
		const inputText = uut.find('.cs-input-text');
		inputText.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onFocus callback', () => {
		const handleFocusMock = jest.fn();
		const uut = shallow(<CSInputText label={label} onFocus={handleFocusMock} />);
		const inputText = uut.find('.cs-input-text');
		inputText.simulate('focus');
		expect(handleFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(<CSInputText label={label} onKeyDown={handleKeyDownMock} />);
		const inputText = uut.find('.cs-input-text');
		inputText.simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should set placeholder attribute', () => {
		const uut = shallow(<CSInputText label={label} placeholder="Enter text" />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('placeholder')).toBe('Enter text');
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSInputText label={label} readOnly />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('readOnly')).toBeTruthy();
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSInputText label={label} required />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('required')).toBeTruthy();
	});

	it('should set title attribute', () => {
		const title = 'Title';
		const uut = shallow(<CSInputText label={label} title={title} />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('title')).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSInputText label={label} tooltipPosition={tooltipPosition} />);
		const inputTextLabel = uut.find('CSLabel');
		expect(inputTextLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should set value attribute', () => {
		const value = 'Text';
		const uut = shallow(<CSInputText label={label} value={value} />);
		const inputText = uut.find('.cs-input-text');
		expect(inputText.prop('value')).toBe(value);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSInputText label={label} className={customClass} />);
		expect(uut.find(`.cs-input-text-wrapper.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSInputText label={label} id={id} />);
		const inputText = uut.find('.cs-input-text');
		const inputTextLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(inputText.prop('id')).toBe(id);
		expect(inputTextLabelHtmlFor).toBe(id);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSInputText label={label} data-testid="rest" />);
		const inputText = uut.find({ 'data-testid': 'rest' });
		expect(inputText).toHaveLength(1);
	});
});
