import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSAlert from '../../components/CSAlert';

const alertRole = 'alert';
const statusRole = 'status';
const textContent = 'test text';
const variantBase = 'base';
const variantError = 'error';
const variantInfo = 'info';
const variantWarning = 'warning';

describe('<CSAlert />', () => {
	it('should render default CSAlert', () => {
		const uut = shallow(<CSAlert variant={variantInfo} />);
		// Make sure the variant class is applied
		expect(uut.find('.cs-alert-info')).toHaveLength(1);
		// Make sure the corresponding icon is shown
		expect(uut.find('.cs-alert-text-wrapper > CSIcon').props().name).toBe(variantInfo);
		// Make sure there is no close button
		expect(uut.find('CSButton')).toHaveLength(0);
		// Make sure appropriate classes are applied
		expect(uut.find('.cs-alert-no-close-btn')).toHaveLength(1);
		// Make sure an icon is shown, icon is from the SLDS pack and scoped styles are not applied
		const icon = uut.find('.cs-alert-text-wrapper > CSIcon');
		expect(icon).toHaveLength(1);
		expect(icon.props().origin).toBe('slds');
		expect(uut.find('.cs-alert-scoped')).toHaveLength(0);
		// Check icon size for non-scoped icon
		expect(uut.find('CSIcon').props().size).toBe('0.875rem');
		// Make sure style type is set to default
		expect(uut.find('.cs-alert-type-default')).toHaveLength(1);
		// Make sure text is aligned left
		const textWrapper = uut.find('.cs-alert-text-wrapper.cs-alert-left');
		expect(textWrapper).toHaveLength(1);
		// Check role matches variant
		expect(uut.props().role).toBe(statusRole);
	});

	it('should render info alert', () => {
		const uut = shallow(<CSAlert variant={variantInfo} />);
		// Make sure the variant class is applied
		expect(uut.find('.cs-alert-info')).toHaveLength(1);
		// Make sure the corresponding icon is shown
		expect(uut.find('.cs-alert-text-wrapper > CSIcon').props().name).toBe(variantInfo);
		// Check role matches variant
		expect(uut.props().role).toBe(statusRole);
	});

	it('should render warning alert', () => {
		const uut = shallow(<CSAlert variant={variantWarning} />);
		expect(uut.find('.cs-alert-warning')).toHaveLength(1);
		expect(uut.find('.cs-alert-text-wrapper > CSIcon').props().name).toBe(variantWarning);
		expect(uut.props().role).toBe(alertRole);
	});

	it('should render error alert', () => {
		const uut = shallow(<CSAlert variant={variantError} />);
		expect(uut.find('.cs-alert-error')).toHaveLength(1);
		expect(uut.find('.cs-alert-text-wrapper > CSIcon').props().name).toBe(variantError);
		expect(uut.props().role).toBe(alertRole);
	});

	it('should render base alert', () => {
		const uut = shallow(<CSAlert variant={variantBase} />);
		expect(uut.find('.cs-alert-base')).toHaveLength(1);
		expect(uut.find('.cs-alert-text-wrapper > CSIcon').props().name).toBe(variantInfo);
		expect(uut.props().role).toBe(alertRole);
	});

	it('should render alert without close button', () => {
		const uut = shallow(<CSAlert variant={variantInfo} closeButton={false} />);
		// Make sure there is no close button
		expect(uut.find('CSButton')).toHaveLength(0);
		// Make sure appropriate classes are applied
		expect(uut.find('.cs-alert-no-close-btn')).toHaveLength(1);
	});

	it('should render alert with close button', () => {
		const uut = shallow(<CSAlert variant={variantInfo} closeButton />);
		// Make sure the close button is rendered
		expect(uut.find('CSButton')).toHaveLength(1);
	});

	it('should render alert with icon', () => {
		const uut = shallow(<CSAlert variant={variantInfo} iconHidden={false} />);
		// Make sure an icon is shown
		expect(uut.find('.cs-alert-text-wrapper > CSIcon')).toHaveLength(1);
	});

	it('should render alert without icon', () => {
		const uut = shallow(<CSAlert variant={variantInfo} iconHidden />);
		// Make sure no icon is rendered
		expect(uut.find('.cs-alert-text-wrapper > CSIcon')).toHaveLength(0);
	});

	it('should pass iconName to CSIcon', () => {
		const uut = shallow(<CSAlert variant={variantInfo} iconName="activity" />);
		const icon = uut.find('.cs-alert-text-wrapper > CSIcon');
		// Make sure an icon is shown
		expect(icon).toHaveLength(1);
		// Make sure it is the right icon
		expect(icon.props().name).toBe('activity');
	});

	it('should pass iconOrigin to CSIcon', () => {
		const uut = shallow(<CSAlert variant={variantInfo} iconOrigin="slds" />);
		const icon = uut.find('.cs-alert-text-wrapper > CSIcon');
		expect(icon.props().origin).toBe('slds');
	});

	it('should render alert with close button and corresponding callback', () => {
		const handleCloseMock = jest.fn();
		const uut = shallow(<CSAlert variant={variantInfo} closeButton onClose={handleCloseMock} />);
		// Simulate a click event on the close button and make sure it was called exactly once
		uut.find('CSButton').simulate('click');
		expect(handleCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should render default non-scoped alert', () => {
		const uut = shallow(<CSAlert variant={variantInfo} styleFormat="default" />);
		// Make sure scoped styles are not applied
		expect(uut.find('.cs-alert-scoped')).toHaveLength(0);
		// Check icon size for non-scoped icon
		expect(uut.find('CSIcon').props().size).toBe('0.875rem');
	});

	it('should render scoped alert', () => {
		const uut = shallow(<CSAlert variant={variantInfo} styleFormat="scoped" />);
		// Check for scoped style class
		expect(uut.find('.cs-alert-scoped')).toHaveLength(1);
		// Check icon size for scoped icon
		expect(uut.find('CSIcon').props().size).toBe('1.5rem');
	});

	it('should render light alert', () => {
		const uut = shallow(<CSAlert variant={variantInfo} styleType="light" />);
		expect(uut.find('.cs-alert-type-light')).toHaveLength(1);
	});

	it('should render text from a string', () => {
		const uut = shallow(<CSAlert variant={variantInfo} text={textContent} />);
		const textElement = uut.find('span.cs-alert-text');
		expect(textElement).toHaveLength(1);
		expect(textElement.text()).toBe(textContent);
	});

	it('should render text from an array of strings', () => {
		// Generate a test array
		const text: Array<string> = [];
		for (let i = 0; i < 5; i++) text.push(`test text ${i}`);
		const uut = shallow(<CSAlert variant={variantInfo} text={text} />);
		const textElements = uut.find('span.cs-alert-text');
		// Make sure all strings are rendered
		expect(textElements).toHaveLength(text.length);
		// Make sure all text matches the original strings
		textElements.forEach((node, nodeIndex) => {
			expect(node.text()).toBe(text[nodeIndex]);
		});
	});

	it('should align text to the left', () => {
		const uut = shallow(<CSAlert variant={variantInfo} text="test text" textAlign="left" />);
		const textWrapper = uut.find('.cs-alert-text-wrapper.cs-alert-left');
		expect(textWrapper).toHaveLength(1);
	});

	it('should center-align text', () => {
		const uut = shallow(<CSAlert variant={variantInfo} text="test text" textAlign="center" />);
		const textWrapper = uut.find('.cs-alert-text-wrapper.cs-alert-center');
		expect(textWrapper).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSAlert variant={variantInfo} className={customClass} />);
		const textWrapper = uut.find(`.cs-alert.${customClass}`);
		expect(textWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSAlert variant={variantInfo} id={customId} />);
		const textWrapper = uut.find(`.cs-alert#${customId}`);
		expect(textWrapper).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(<CSAlert variant={variantInfo}><div className="custom-child" /></CSAlert>);
		expect(uut.find('.cs-alert-text > div.custom-child')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSAlert variant={variantInfo} data-testid="rest" />);
		const alert = uut.find({ 'data-testid': 'rest' });
		expect(alert).toHaveLength(1);
	});
});
