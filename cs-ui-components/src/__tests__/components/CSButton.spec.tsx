import * as React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import '../../setupTests';
import CSButton from '../../components/CSButton';

const label = 'button label';
const iconNameValue = 'activity';
const link = 'https://cloudsense.com';

describe('<CSButton />', () => {
	it('should render a default button', () => {
		const uut = shallow(<CSButton label={label} />).dive();
		const button = uut.find('button.cs-btn');
		const buttonLabel = uut.find('.cs-btn-label');
		const buttonAriaLabel = uut.find('.cs-btn').prop('aria-label');
		const defaultButton = uut.find('.cs-btn.cs-btn-initial.cs-btn-default');
		const buttonRight = uut.find('.cs-btn.cs-btn-icon-right');
		const buttonLabelHidden = uut.find('.cs-btn.cs-btn-label-hidden');
		const extraSmallButton = uut.find('.cs-btn.cs-btn-size-xsmall');
		const smallButton = uut.find('.cs-btn.cs-btn-size-small');
		const largeButton = uut.find('.cs-btn.cs-btn-size-large');
		const maxWidthButton = uut.find('.cs-btn.cs-btn-max-width');
		expect(button).toHaveLength(1);
		expect(buttonLabel).toHaveLength(1);
		expect(buttonLabel.text()).toBe(label);
		expect(buttonAriaLabel).toBe(label);
		expect(button.props().disabled).toBeFalsy();
		expect(defaultButton).toHaveLength(1);
		expect(buttonRight).toHaveLength(0);
		expect(buttonLabelHidden).toHaveLength(0);
		expect(buttonLabel).toHaveLength(1);
		expect(extraSmallButton).toHaveLength(0);
		expect(smallButton).toHaveLength(0);
		expect(largeButton).toHaveLength(0);
		expect(maxWidthButton).toHaveLength(0);
	});

	it('should have custom border radius', () => {
		const borderRadius = '0';
		const uut = shallow(<CSButton label={label} borderRadius={borderRadius} />).dive();
		const buttonStyle = uut.find('.cs-btn').props().style;
		expect(buttonStyle).toHaveProperty('--cs-btn-border-radius', borderRadius);
	});

	it('should have initial styles', () => {
		const uut = shallow(<CSButton label={label} btnStyle="initial" />).dive();
		const initialButton = uut.find('.cs-btn.cs-btn-initial');
		expect(initialButton).toHaveLength(1);
	});

	it('should have brand styles', () => {
		const uut = shallow(<CSButton label={label} btnStyle="brand" />).dive();
		const brandButton = uut.find('.cs-btn.cs-btn-brand');
		expect(brandButton).toHaveLength(1);
	});

	it('should have outline styles', () => {
		const uut = shallow(<CSButton label={label} btnStyle="outline" />).dive();
		const outlineButton = uut.find('.cs-btn.cs-btn-outline');
		expect(outlineButton).toHaveLength(1);
	});

	it('should have default type styles', () => {
		const uut = shallow(<CSButton label={label} btnType="default" />).dive();
		const defaultButton = uut.find('.cs-btn.cs-btn-default');
		expect(defaultButton).toHaveLength(1);
	});

	it('should have error type styles', () => {
		const uut = shallow(<CSButton label={label} btnType="error" />).dive();
		const errorButton = uut.find('.cs-btn.cs-btn-error');
		expect(errorButton).toHaveLength(1);
	});

	it('should have success type styles', () => {
		const uut = shallow(<CSButton label={label} btnType="success" />).dive();
		const successButton = uut.find('.cs-btn.cs-btn-success');
		expect(successButton).toHaveLength(1);
	});

	it('should have transparent type styles', () => {
		const uut = shallow(<CSButton label={label} btnType="transparent" />).dive();
		const transparentButton = uut.find('.cs-btn.cs-btn-transparent');
		expect(transparentButton).toHaveLength(1);
	});

	it('should have a custom color', () => {
		const color = '#000';
		const uut = shallow(<CSButton label={label} color={color} />).dive();
		const buttonStyle = uut.find('.cs-btn').props().style;
		expect(buttonStyle).toHaveProperty('--cs-btn-custom-c', color);
	});

	it('should be disabled', () => {
		const uut = shallow(<CSButton label={label} disabled />).dive();
		const disabledButton = uut.find('.cs-btn');
		expect(disabledButton.props().disabled).toBeTruthy();
	});

	it('should set a custom icon color', () => {
		const iconColor = '#000';
		const uut = shallow(<CSButton label={label} iconColor={iconColor} />).dive();
		const buttonStyle = uut.find('.cs-btn').props().style;
		expect(buttonStyle).toHaveProperty('--cs-btn-custom-icon-c', iconColor);
	});

	it('should pass iconName to CSIcon', () => {
		const uut = shallow(<CSButton label={label} iconName={iconNameValue} />).dive();
		const buttonIcon = uut.find('CSIcon');
		expect(buttonIcon).toHaveLength(1);
		expect(buttonIcon.prop('name')).toBe(iconNameValue);
	});

	it('should pass iconOrigin to CSIcon', () => {
		const iconOriginValue = 'cs';
		const iconNameCSValue = 'action';
		const uut = shallow(<CSButton label={label} iconOrigin={iconOriginValue} iconName={iconNameCSValue} />).dive();
		const buttonIcon = uut.find('CSIcon');
		expect(buttonIcon.prop('origin')).toBe(iconOriginValue);
	});

	it('should left-position the icon inside the button', () => {
		const uut = shallow(<CSButton label={label} iconPosition="left" />).dive();
		const button = uut.find('.cs-btn.cs-btn-icon-right');
		expect(button).toHaveLength(0);
	});

	it('should right-position the icon inside the button', () => {
		const uut = shallow(<CSButton label={label} iconPosition="right" />).dive();
		const button = uut.find('.cs-btn.cs-btn-icon-right');
		expect(button).toHaveLength(1);
	});

	it('should pass iconRotate to CSIcon', () => {
		const iconRotate = 90;
		const uut = shallow(<CSButton label={label} iconName={iconNameValue} iconRotate={iconRotate} />).dive();
		const buttonIcon = uut.find('CSIcon');
		expect(buttonIcon.prop('rotate')).toBe(iconRotate);
	});

	it('should pass iconSize to CSIcon', () => {
		const iconSize = '3rem';
		const uut = shallow(<CSButton label={label} iconName={iconNameValue} iconSize={iconSize} />).dive();
		const buttonIcon = uut.find('CSIcon');
		expect(buttonIcon.prop('size')).toBe(iconSize);
	});

	it('should hide the label', () => {
		const uut = shallow(<CSButton label={label} labelHidden />).dive();
		const button = uut.find('.cs-btn.cs-btn-label-hidden');
		const buttonLabel = uut.find('.cs-btn-label');
		expect(button).toHaveLength(1);
		expect(buttonLabel).toHaveLength(0);
		expect(button.props().title).toBe(label);
	});

	it('should render a valid anchor link', () => {
		const uut = shallow(<CSButton label={label} link={link} />).dive();
		const anchor = uut.find('a.cs-btn');
		const anchorHref = anchor.props().href;
		expect(anchor).toHaveLength(1);
		expect(anchorHref).toBe(link);
	});

	it('should render loading state', () => {
		const uut = shallow(<CSButton label={label} loading />).dive();
		const loadingButton = uut.find('.cs-btn');
		const buttonIcon = loadingButton.find('CSIcon');
		expect(buttonIcon).toHaveLength(1);
		expect(loadingButton.props().disabled).toBeTruthy();
		expect(buttonIcon.prop('name')).toBe('spinner');
		expect(buttonIcon.prop('spin')).toBeTruthy();
	});

	it('should pass iconSize to CSIcon when loading', () => {
		const iconSize = '3rem';
		const uut = shallow(<CSButton label={label} loading iconSize={iconSize} />).dive();
		const buttonIcon = uut.find('CSIcon');
		expect(buttonIcon.prop('size')).toBe(iconSize);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSButton label={label} onClick={handleClickMock} />).dive();
		uut.find('.cs-btn').simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(<CSButton label={label} onKeyDown={handleKeyDownMock} />).dive();
		uut.find('.cs-btn').simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onMouseDown callback', () => {
		const handleMouseDownMock = jest.fn();
		const uut = shallow(<CSButton label={label} onMouseDown={handleMouseDownMock} />).dive();
		uut.find('.cs-btn').simulate('mousedown');
		expect(handleMouseDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onMouseEnter callback', () => {
		const handleMouseEnterMock = jest.fn();
		const uut = shallow(<CSButton label={label} onMouseEnter={handleMouseEnterMock} />).dive();
		uut.find('.cs-btn').simulate('mouseenter');
		expect(handleMouseEnterMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onMouseLeave callback', () => {
		const handleMouseLeaveMock = jest.fn();
		const uut = shallow(<CSButton label={label} onMouseLeave={handleMouseLeaveMock} />).dive();
		uut.find('.cs-btn').simulate('mouseleave');
		expect(handleMouseLeaveMock).toHaveBeenCalledTimes(1);
	});

	it('should open links in a new tab', () => {
		const uut = shallow(<CSButton label={label} link={link} openInNewTab />).dive();
		const anchor = uut.find('a.cs-btn');
		const anchorTarget = anchor.props().target;
		expect(anchorTarget).toBe('_blank');
	});

	it('should render a NavLink instead of a button', () => {
		const uut = shallow(<CSButton label={label} routerLink={<NavLink to="/icons" />} />).dive();
		const navLink = uut.find('NavLink');
		expect(navLink).toHaveLength(1);
	});

	it('should render an extra small button', () => {
		const uut = shallow(<CSButton label={label} size="xsmall" />).dive();
		const extraSmallButton = uut.find('.cs-btn.cs-btn-size-xsmall');
		expect(extraSmallButton).toHaveLength(1);
	});

	it('should render a small button', () => {
		const uut = shallow(<CSButton label={label} size="small" />).dive();
		const smallButton = uut.find('.cs-btn.cs-btn-size-small');
		expect(smallButton).toHaveLength(1);
	});

	it('should render a large button', () => {
		const uut = shallow(<CSButton label={label} size="large" />).dive();
		const largeButton = uut.find('.cs-btn.cs-btn-size-large');
		expect(largeButton).toHaveLength(1);
	});

	it('should set the title attribute on the button', () => {
		const title = 'button title';
		const uut = shallow(<CSButton label={label} title={title} />).dive();
		const buttonTitle = uut.find('.cs-btn').props().title;
		expect(buttonTitle).toBe(title);
	});

	it('should set the value attribute on the button', () => {
		const value = 'button value';
		const uut = shallow(<CSButton label={label} value={value} />).dive();
		const buttonValue = uut.find('.cs-btn').props().value;
		expect(buttonValue).toBe(value);
	});

	it('should take up the minimum required space', () => {
		const uut = shallow(<CSButton label={label} width="auto" />).dive();
		const maxWidthButton = uut.find('.cs-btn.cs-btn-max-width');
		expect(maxWidthButton).toHaveLength(0);
	});

	it('should take up the maximum available space', () => {
		const uut = shallow(<CSButton label={label} width="max" />).dive();
		const maxWidthButton = uut.find('.cs-btn.cs-btn-max-width');
		expect(maxWidthButton).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const className = 'custom-class';
		const uut = shallow(<CSButton label={label} className={className} />).dive();
		const button = uut.find(`.cs-btn.${className}`);
		expect(button).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSButton label={label} id={id} />).dive();
		const button = uut.find(`.cs-btn#${id}`);
		expect(button).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(<CSButton label={label}><div className="custom-child" /></CSButton>).dive();
		const buttonChild = uut.find('.cs-btn > span.cs-btn-custom-content > .custom-child');
		expect(buttonChild).toHaveLength(1);
	});

	it('should set the aria-expanded attribute', () => {
		const uut = shallow(<CSButton label={label} ariaExpanded />).dive();
		const buttonAriaExpanded = uut.find('.cs-btn').prop('aria-expanded');
		expect(buttonAriaExpanded).toBeTruthy();
	});

	it('should set the aria-haspopup attribute', () => {
		const uut = shallow(<CSButton label={label} ariaHaspopup />).dive();
		const buttonAriaHasPopup = uut.find('.cs-btn').prop('aria-haspopup');
		expect(buttonAriaHasPopup).toBeTruthy();
	});

	it('should override the aria-label attribute', () => {
		const ariaLabel = 'button aria label';
		const uut = shallow(<CSButton label={label} ariaLabel={ariaLabel} />).dive();
		const buttonAriaLabel = uut.find('.cs-btn').prop('aria-label');
		expect(buttonAriaLabel).toBe(ariaLabel);
	});

	it('should set the role attribute to menuitem', () => {
		const role = 'menuitem';
		const uut = shallow(<CSButton label={label} role={role} />).dive();
		const buttonRole = uut.find('.cs-btn').props().role;
		expect(buttonRole).toBe(role);
	});
});
