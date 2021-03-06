import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSCheckbox from '../../components/CSCheckbox';
import { actions, icons } from '../common/custom-data';

const label = 'label';
const errorMessage = 'error message';

describe('<CSCheckbox />', () => {
	it('should render the default CSCheckbox', () => {
		const uut = shallow(<CSCheckbox label={label} />);
		// Should render a checkbox
		const checkbox = uut.find('.cs-checkbox');
		expect(checkbox).toHaveLength(1);
		// checked
		expect(checkbox.props().checked).toBeFalsy();
		expect(checkbox.prop('aria-checked')).toBeFalsy();
		// disabled
		expect(checkbox.props().disabled).toBeFalsy();
		// Should render a label
		const checkboxLabel = uut.find('CSLabel');
		expect(checkboxLabel).toHaveLength(1);
		// required
		expect(checkbox.prop('required')).toBeFalsy();
		expect(checkbox.prop('aria-required')).toBeFalsy();
		expect(checkboxLabel.prop('required')).toBeFalsy();
		// error
		const checkboxError = uut.find('.cs-checkbox.cs-checkbox-error');
		expect(checkboxError).toHaveLength(0);
		// aria-invalid
		expect(checkbox.prop('aria-invalid')).toBeFalsy();
		// readOnly
		expect(checkbox.prop('readOnly')).toBeFalsy();
		// indeterminate
		const checkboxIndeterminate = uut.find('.cs-checkbox.cs-checkbox-indeterminate');
		expect(checkboxIndeterminate).toHaveLength(0);
		// labelPosition
		const checkboxLabelLeft = uut.find('.cs-checkbox.cs-checkbox-label-left');
		expect(checkboxLabelLeft).toHaveLength(0);
		const checkboxLabelRight = uut.find('.cs-checkbox.cs-checkbox-label-right');
		expect(checkboxLabelRight).toHaveLength(0);
		const checkboxFauxNeutral = uut.find('.cs-checkbox-faux.cs-checkbox-neutral');
		expect(checkboxFauxNeutral).toHaveLength(1);
	});

	it('should pass label to CSLabel and set aria-label', () => {
		const uut = shallow(<CSCheckbox label={label} />);
		const checkboxLabel = uut.find('CSLabel');
		const checkbox = uut.find('.cs-checkbox');
		expect(checkboxLabel.prop('label')).toBe(label);
		expect(checkbox.prop('aria-label')).toBe(label);
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(<CSCheckbox label={label} actions={actions} />);
		const checkboxCustomData = uut.find('CSCustomData');
		expect(checkboxCustomData).toHaveLength(1);
		expect(checkboxCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should set custom border radius', () => {
		const borderRadiusValue = '1rem';
		const uut = shallow(<CSCheckbox label={label} borderRadius={borderRadiusValue} />);
		const fauxStyle = uut.find('.cs-checkbox-faux').props().style;
		expect(fauxStyle).toHaveProperty('--cs-checkbox-border-radius', borderRadiusValue);
	});

	it('should set checked and aria-checked attributes', () => {
		const uut = shallow(<CSCheckbox label={label} checked />);
		const checkbox = uut.find('.cs-checkbox');
		expect(checkbox.props().checked).toBeTruthy();
		expect(checkbox.prop('aria-checked')).toBeTruthy();
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSCheckbox label={label} disabled />);
		expect(uut.find('.cs-checkbox').props().disabled).toBeTruthy();
	});

	it('should render an error checkbox', () => {
		const uut = shallow(<CSCheckbox label={label} error />);
		const checkbox = uut.find('.cs-checkbox.cs-checkbox-error');
		expect(checkbox).toHaveLength(1);
		expect(checkbox.prop('aria-invalid')).toBeTruthy();
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(<CSCheckbox label={label} error errorMessage={errorMessage} />);
		const checkboxErrorMsg = uut.find('CSFieldErrorMsg');
		expect(checkboxErrorMsg.prop('message')).toBe(errorMessage);
	});

	it('should pass errorTooltip to CSFieldErrorMsg', () => {
		const uut = shallow(<CSCheckbox label={label} error errorMessage={errorMessage} errorTooltip />);
		const checkboxErrorMsg = uut.find('CSFieldErrorMsg');
		expect(checkboxErrorMsg.prop('tooltipMessage')).toBeTruthy();
	});

	it('should pass helpText to CSLabel', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(<CSCheckbox label={label} helpText={helpTextMsg} />);
		const toggleLabel = uut.find('CSLabel');
		expect(toggleLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should hide checkbox', () => {
		const uut = shallow(<CSCheckbox label={label} hidden />);
		expect(uut.find('.cs-checkbox-wrapper.cs-element-hidden')).toHaveLength(1);
	});

	it('should pass icons to CSCustomData', () => {
		const uut = shallow(<CSCheckbox label={label} icons={icons} />);
		const checkboxCustomData = uut.find('CSCustomData');
		expect(checkboxCustomData).toHaveLength(1);
		// Make sure CSCustomDataActions received correct actions object
		expect(checkboxCustomData.prop('icons')).toMatchObject(icons);
	});

	it('should set indeterminate state', () => {
		const uut = shallow(<CSCheckbox label={label} indeterminate />);
		const checkboxIndeterminate = uut.find('.cs-checkbox.cs-checkbox-indeterminate').prop('aria-checked');
		expect(checkboxIndeterminate).toBe('mixed');
	});

	it('should not display label', () => {
		const uut = shallow(<CSCheckbox label={label} labelHidden />);
		expect(uut.find('.cs-checkbox CSLabel')).toHaveLength(0);
	});

	it('should display label on left', () => {
		const uut = shallow(<CSCheckbox label={label} labelPosition="left" />);
		expect(uut.find('.cs-checkbox-wrapper.cs-checkbox-label-left')).toHaveLength(1);
	});

	it('should display label on right', () => {
		const uut = shallow(<CSCheckbox label={label} labelPosition="right" />);
		expect(uut.find('.cs-checkbox-wrapper.cs-checkbox-label-right')).toHaveLength(1);
	});

	it('should pass label to CSLabel as title', () => {
		const uut = shallow(<CSCheckbox label={label} labelTitle />);
		const checkboxLabel = uut.find('.cs-checkbox-wrapper-outer > CSLabel');
		expect(checkboxLabel.props().title).toBe('label');
	});

	it('should set name attribute', () => {
		const nameValue = 'checkbox';
		const uut = shallow(<CSCheckbox label={label} name={nameValue} />);
		expect(uut.find('.cs-checkbox').props().name).toBe(nameValue);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(<CSCheckbox label={label} onBlur={handleBlurMock} />);
		const checkbox = uut.find('.cs-checkbox');
		checkbox.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(<CSCheckbox label={label} onChange={handleChangeMock} />);
		const checkbox = uut.find('.cs-checkbox');
		checkbox.simulate('change');
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSCheckbox label={label} onClick={handleClickMock} />);
		const checkbox = uut.find('.cs-checkbox');
		checkbox.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(<CSCheckbox label={label} onKeyDown={handleOnKeyDownMock} />);
		const checkbox = uut.find('.cs-checkbox');
		checkbox.simulate('keyDown');
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSCheckbox label={label} readOnly />);
		const checkbox = uut.find('.cs-checkbox');
		expect(checkbox.prop('readOnly')).toBeTruthy();
		expect(checkbox.prop('aria-readonly')).toBeTruthy();
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSCheckbox label={label} required />);
		const checkbox = uut.find('.cs-checkbox');
		const checkboxLabel = uut.find('CSLabel');
		expect(checkboxLabel.prop('required')).toBeTruthy();
		expect(checkbox.props().required).toBeTruthy();
		expect(checkbox.prop('aria-required')).toBeTruthy();
	});

	it('should set title attribute', () => {
		const title = 'title';
		const uut = shallow(<CSCheckbox label={label} title={title} />);
		const checkboxFaux = uut.find('.cs-checkbox-faux');
		expect(checkboxFaux.props().title).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSCheckbox label={label} tooltipPosition={tooltipPositionValue} />);
		const checkboxLabel = uut.find('CSLabel');
		expect(checkboxLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should render checkbox with variant neutral', () => {
		const uut = shallow(<CSCheckbox label={label} variant="neutral" />);
		const faux = uut.find('.cs-checkbox-faux.cs-checkbox-neutral');
		expect(faux).toHaveLength(1);
	});

	it('should render checkbox with variant brand', () => {
		const uut = shallow(<CSCheckbox label={label} variant="brand" />);
		const faux = uut.find('.cs-checkbox-faux.cs-checkbox-brand');
		expect(faux).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSCheckbox label={label} className={customClass} />);
		const checkboxWrapper = uut.find(`.cs-checkbox-wrapper.${customClass}`);
		expect(checkboxWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSCheckbox label={label} id={customId} />);
		const checkbox = uut.find(`.cs-checkbox#${customId}`);
		const checkboxLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(checkbox).toHaveLength(1);
		expect(checkboxLabelHtmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCheckbox label={label} data-testid="rest" />);
		const checkbox = uut.find({ 'data-testid': 'rest' });
		expect(checkbox).toHaveLength(1);
	});
});
