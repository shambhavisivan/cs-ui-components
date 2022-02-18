import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSToggle from '../../components/CSToggle';

const errorText = 'error message';
const helpTextMsg = 'help text in tooltip';
const iconsValue = [{ iconName: 'cart' }];
const labelValue = 'toggle label';
const actionsValue = [
	{
		action: () => jest.fn(),
		icon: { iconName: 'delete' },
		name: 'Delete',
	},
	{
		action: () => jest.fn(),
		icon: { iconName: 'add' },
		name: 'Add',
	},
];

describe('<CSToggle />', () => {
	it('should render the default CSToggle', () => {
		const uut = shallow(<CSToggle label={labelValue} />);
		// Should render a toggle
		const toggle = uut.find('.cs-toggle');
		expect(toggle).toHaveLength(1);
		// checked
		expect(toggle.props().checked).toBeFalsy();
		expect(toggle.prop('aria-checked')).toBeFalsy();
		// disabled
		expect(toggle.props().disabled).toBeFalsy();
		// error
		const toggleError = uut.find('.cs-toggle.cs-toggle-error');
		expect(toggleError).toHaveLength(0);
		// aria-invalid
		expect(toggle.prop('aria-invalid')).toBeFalsy();
		// Should render a label
		const toggleLabel = uut.find('CSLabel');
		expect(toggleLabel).toHaveLength(1);
		expect(toggle.prop('aria-label')).toBe(labelValue);
		expect(toggleLabel.prop('label')).toBe(labelValue);
		// labelPosition
		const toggleLabelLeft = uut.find('.cs-toggle.cs-toggle-label-left');
		expect(toggleLabelLeft).toHaveLength(0);
		// readOnly
		const toggleReadOnly = uut.find('.cs-toggle.cs-toggle-readonly');
		expect(toggleReadOnly).toHaveLength(0);
		// required
		expect(toggle.prop('required')).toBeFalsy();
		expect(toggle.prop('aria-required')).toBeFalsy();
		expect(toggleLabel.prop('required')).toBeFalsy();
	});

	it('should render custom actions and check if passed object is correct', () => {
		const uut = shallow(<CSToggle label={labelValue} actions={actionsValue} />);
		const toggleCustomActions = uut.find('.cs-toggle-wrapper CSCustomDataActions');
		expect(toggleCustomActions).toHaveLength(1);
		// Make sure CSCustomDataActions received correct actions object
		expect(toggleCustomActions.prop('actions')).toMatchObject(actionsValue);
	});

	it('should set checked attribute', () => {
		const uut = shallow(<CSToggle label={labelValue} checked />);
		expect(uut.find('.cs-toggle').props().checked).toEqual(true);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSToggle label={labelValue} disabled />);
		expect(uut.find('.cs-toggle').props().disabled).toEqual(true);
	});

	it('should render an error toggle', () => {
		const uut = shallow(<CSToggle label={labelValue} error />);
		const toggle = uut.find('.cs-toggle.cs-toggle-error');
		expect(toggle).toHaveLength(1);
		expect(toggle.prop('aria-invalid')).toBeTruthy();
	});

	it('should render an error message from string', () => {
		const uut = shallow(<CSToggle label={labelValue} error errorMessage={errorText} />);
		const toggleErrorMsg = uut.find('.cs-toggle-wrapper CSFieldErrorMsg');
		// Make sure CSFieldErrorMsg received correct value for message prop
		expect(toggleErrorMsg.prop('message')).toBe(errorText);
	});

	it('should render toggle in error state with an error tooltip', () => {
		const uut = shallow(<CSToggle label={labelValue} error errorMessage={errorText} errorTooltip />);
		const toggleErrorMsg = uut.find('.cs-toggle-wrapper CSFieldErrorMsg');
		// Make sure CSFieldErrorMsg prop tooltipMessage received correct value and casted into true
		expect(toggleErrorMsg.prop('tooltipMessage')).toBe(true);
	});

	it('should pass helpText to CSLabel', () => {
		const uut = shallow(<CSToggle label={labelValue} helpText={helpTextMsg} />);
		const toggleLabel = uut.find('.cs-toggle-wrapper > .cs-toggle-wrapper-outer > CSLabel');
		// Make sure CSLabel received correct value for helpText prop
		expect(toggleLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should pass icons to CSCustomDataIcons', () => {
		const uut = shallow(<CSToggle label={labelValue} icons={iconsValue} />);
		const toggleCustomIcons = uut.find('.cs-toggle-wrapper CSCustomDataIcons');
		expect(toggleCustomIcons).toHaveLength(1);
		// Make sure CSCustomDataIcons received correct icons object
		expect(toggleCustomIcons.prop('icons')).toMatchObject(iconsValue);
	});

	it('should hide label', () => {
		const uut = shallow(<CSToggle label={labelValue} labelHidden />);
		expect(uut.find('.cs-toggle-wrapper > .cs-toggle-wrapper-outer > CSLabel')).toHaveLength(0);
	});

	it('should display label on default top position', () => {
		const uut = shallow(<CSToggle label={labelValue} labelPosition="default" />);
		expect(uut.find('.cs-toggle-wrapper:not(.cs-toggle-label-left)')).toHaveLength(1);
	});

	it('should display label on left position', () => {
		const uut = shallow(<CSToggle label={labelValue} labelPosition="left" />);
		expect(uut.find('.cs-toggle-wrapper.cs-toggle-label-left')).toHaveLength(1);
	});

	it('should pass label to CSLabel as title', () => {
		const label = 'label';
		const uut = shallow(<CSToggle label={label} labelTitle />);
		const toggleLabel = uut.find('.cs-toggle-wrapper > .cs-toggle-wrapper-outer > CSLabel');
		expect(toggleLabel.props().title).toBe(label);
	});

	it('should use a working onChange callback', () => {
		const handleChange = jest.fn();
		const uut = shallow(<CSToggle label={labelValue} onChange={handleChange} />);
		const toggle = uut.find('.cs-toggle');
		toggle.simulate('change');
		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClick = jest.fn();
		const uut = shallow(<CSToggle label={labelValue} onClick={handleClick} />);
		const toggle = uut.find('.cs-toggle');
		toggle.simulate('click');
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDown = jest.fn();
		const uut = shallow(<CSToggle label={labelValue} onKeyDown={handleKeyDown} />);
		const toggle = uut.find('.cs-toggle');
		toggle.simulate('keydown');
		expect(handleKeyDown).toHaveBeenCalledTimes(1);
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(<CSToggle label={labelValue} readOnly />);
		const toggle = uut.find('.cs-toggle.cs-toggle-read-only');
		expect(toggle).toHaveLength(1);
		expect(toggle.prop('aria-readonly')).toBeTruthy();
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSToggle label={labelValue} required />);
		const toggle = uut.find('.cs-toggle');
		const toggleLabel = uut.find('.cs-toggle-wrapper > .cs-toggle-wrapper-outer > CSLabel');
		expect(toggle.props().required).toEqual(true);
		expect(toggle.prop('aria-required')).toBeTruthy();
		expect(toggleLabel.prop('required')).toEqual(true);
	});

	it('should display title on hover of toggle', () => {
		const title = 'title';
		const uut = shallow(<CSToggle label={labelValue} title={title} />);
		const toggleFaux = uut.find('.cs-toggle-faux');
		expect(toggleFaux.props().title).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPositionValue = 'top-left';
		const uut = shallow(<CSToggle label={labelValue} helpText={helpTextMsg} tooltipPosition={tooltipPositionValue} />);
		const toggleLabel = uut.find('CSLabel');
		// Make sure CSLabel prop tooltipPosition has received correct value
		expect(toggleLabel.prop('tooltipPosition')).toBe(tooltipPositionValue);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSToggle label={labelValue} className={customClass} />);
		const toggleWrapper = uut.find(`.cs-toggle-wrapper.${customClass}`);
		expect(toggleWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSToggle label={labelValue} id={customId} />);
		const toggle = uut.find(`.cs-toggle#${customId}`);
		const toggleLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(toggle).toHaveLength(1);
		expect(toggleLabelHtmlFor).toBe(customId);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSToggle label={labelValue} data-testid="rest" />);
		const toggle = uut.find({ 'data-testid': 'rest' });
		expect(toggle).toHaveLength(1);
	});
});
