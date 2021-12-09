import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSToast from '../../components/CSToast';

const variant = 'info';

describe('<CSToast />', () => {
	it('should set variant info and pass correct name value to CSIcon', () => {
		const uut = shallow(<CSToast variant={variant} />);
		expect(uut.find('.cs-toast.cs-toast-info')).toHaveLength(1);
		expect(uut.find('.cs-toast.cs-toast-info > CSIcon').prop('name')).toBe('info');
	});

	it('should set variant success and pass correct name value to CSIcon', () => {
		const uut = shallow(<CSToast variant="success" />);
		expect(uut.find('.cs-toast.cs-toast-success')).toHaveLength(1);
		expect(uut.find('.cs-toast.cs-toast-success > CSIcon').prop('name')).toBe('success');
	});

	it('should set variant warning and pass correct name value to CSIcon', () => {
		const uut = shallow(<CSToast variant="warning" />);
		expect(uut.find('.cs-toast.cs-toast-warning')).toHaveLength(1);
		expect(uut.find('.cs-toast.cs-toast-warning > CSIcon').prop('name')).toBe('warning');
	});

	it('should set variant error and pass correct name value to CSIcon', () => {
		const uut = shallow(<CSToast variant="error" />);
		expect(uut.find('.cs-toast.cs-toast-error')).toHaveLength(1);
		expect(uut.find('.cs-toast.cs-toast-error > CSIcon').prop('name')).toBe('error');
	});

	it('should have a close button', () => {
		const uut = shallow(<CSToast variant={variant} closeButton />);
		expect(uut.find('.cs-toast.cs-toast-close')).toHaveLength(1);
		expect(uut.find('.cs-toast > CSButton')).toHaveLength(1);
	});

	it('should have a detail', () => {
		const detail = 'This is the detail';
		const uut = shallow(<CSToast variant={variant} detail={detail} />);
		expect(uut.find('.cs-toast-text > .cs-toast-detail')).toHaveLength(1);
		expect(uut.find('.cs-toast-text > .cs-toast-detail').text()).toContain(detail);
	});

	it('should pass iconName to CSIcon', () => {
		const iconNameValue = 'quote';
		const uut = shallow(<CSToast variant={variant} iconName={iconNameValue} />);
		const icon = uut.find('.cs-toast.cs-toast-info > CSIcon');
		expect(icon).toHaveLength(1);
		expect(icon.prop('name')).toBe(iconNameValue);
	});

	it('should pass iconName to CSIcon', () => {
		const iconNameValue = 'big_shot';
		const iconOriginCSValue = 'cs';
		const uut = shallow(<CSToast variant={variant} iconName={iconNameValue} iconOrigin={iconOriginCSValue} />);
		const icon = uut.find('.cs-toast.cs-toast-info > CSIcon');
		expect(icon).toHaveLength(1);
		expect(icon.prop('origin')).toBe(iconOriginCSValue);
	});

	it('should not have an icon', () => {
		const uut = shallow(<CSToast variant={variant} iconHidden />);
		expect(uut.find('.cs-toast > CSIcon')).toHaveLength(0);
	});

	it('should have close button and corresponding callback', () => {
		const handleCloseMock = jest.fn();
		const uut = shallow(<CSToast variant={variant} closeButton onClose={handleCloseMock} />);
		const closeButton = uut.find('.cs-toast > CSButton');
		closeButton.simulate('click');
		expect(handleCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should have text', () => {
		const text = 'This is a text example';
		const uut = shallow(<CSToast variant={variant} text={text} />);
		const textElement = uut.find('.cs-toast-text > h4');
		expect(textElement).toHaveLength(1);
		expect(textElement.text()).toBe(text);
	});

	it('should set custom toast width', () => {
		const uut = shallow(<CSToast variant={variant} width="600px" />);
		expect(uut.find('.cs-toast').get(0).props.style).toHaveProperty('--cs-toast-width', '600px');
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSToast variant={variant} className={customClass} />);
		const textWrapper = uut.find(`.cs-toast-wrapper.${customClass}`);
		expect(textWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSToast variant={variant} id={customId} />);
		const textWrapper = uut.find(`.cs-toast-wrapper#${customId}`);
		expect(textWrapper).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSToast variant={variant}><div className="custom-child" /></CSToast>);
		expect(uut.find('.cs-toast-text > .custom-child')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSToast variant={variant} data-testid="rest" />);
		const toast = uut.find({ 'data-testid': 'rest' });
		expect(toast).toHaveLength(1);
	});
});
