import * as React from 'react';
import { render, shallow, mount } from 'enzyme';
import '../../setupTests';
import { NavLink } from 'react-router-dom';
import CSTabGroup from '../../components/tab/CSTabGroup';
import CSTab from '../../components/tab/CSTab';

const tabName = 'tab name';
const customClass = 'custom-class';
const customId = 'custom-id';

describe('<CSTabGroup />', () => {
	it('should render default CSTabGroup', () => {
		const uut = mount(<CSTabGroup><CSTab name={tabName} /></CSTabGroup>);
		const tabGroup = uut.find('.cs-tab-group');
		const tab = uut.find('.cs-tab-group .cs-tab-wrapper-normal');
		expect(tabGroup).toHaveLength(1);
		expect(tab).toHaveLength(1);
	});

	it('should set aria-label', () => {
		const listNameValue = 'group';
		const uut = shallow(<CSTabGroup listName={listNameValue} />);
		const tabGroup = uut.find('.cs-tab-group > nav');
		expect(tabGroup.props()['aria-label']).toBe(listNameValue);
	});

	it('should pass variant normal to CSTab parentVariant and render variant normal tab', () => {
		const uut = render(<CSTabGroup variant="normal"><CSTab name={tabName} /></CSTabGroup>);
		const tab = uut.find('.cs-tab-group .cs-tab-wrapper-normal');
		expect(tab).toHaveLength(1);
	});

	it('should pass variant large to CSTab parentVariant and render variant large tab', () => {
		const uut = render(<CSTabGroup variant="large"><CSTab name={tabName} /></CSTabGroup>);
		const tabGroup = uut.find('.cs-tab-group .cs-tab-wrapper-large');
		expect(tabGroup).toHaveLength(1);
	});

	it('should set custom class name', () => {
		const uut = shallow(<CSTabGroup className={customClass} />);
		const tabGroup = uut.find(`.cs-tab-group.${customClass}`);
		expect(tabGroup).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSTabGroup id={customId} />);
		const tabGroup = uut.find(`.cs-tab-group#${customId}`);
		expect(tabGroup).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSTabGroup><div className="custom-content" /></CSTabGroup>);
		const tabGroupContent = uut.find('.cs-tab-group .custom-content');
		expect(tabGroupContent).toHaveLength(1);
	});
});

describe('<CSTab />', () => {
	it('should set tab name', () => {
		const uut = shallow(<CSTab name={tabName} />);
		const tab = uut.find('.cs-tab-name');
		expect(tab.text()).toBe(tabName);
	});

	it('should render active tab', () => {
		const uut = shallow(<CSTab name={tabName} active />);
		const tab = uut.find('.cs-tab-active');
		expect(tab).toHaveLength(1);
	});

	it('should render disabled tab', () => {
		const uut = shallow(<CSTab name={tabName} disabled />);
		const tab = uut.find('.cs-tab');
		expect(tab.props().disabled).toEqual(true);
	});

	it('should render SLDS origin activity icon', () => {
		const uut = shallow(<CSTab name={tabName} tabIcon="activity" iconOrigin="slds" />);
		const tabIcon = uut.find('.cs-tab > CSIcon');
		expect(tabIcon).toHaveLength(1);
		expect(tabIcon.prop('origin')).toBe('slds');
		expect(tabIcon.prop('name')).toBe('activity');
	});

	it('should render CS origin action icon', () => {
		const uut = shallow(<CSTab name={tabName} tabIcon="action" iconOrigin="cs" />);
		const tabIcon = uut.find('.cs-tab > CSIcon');
		expect(tabIcon).toHaveLength(1);
		expect(tabIcon.prop('origin')).toBe('cs');
		expect(tabIcon.prop('name')).toBe('action');
	});

	it('should handle onClick event', () => {
		const handleClick = jest.fn();
		const uut = mount(<CSTab name={tabName} onClick={handleClick} />);
		const tab = uut.find('.cs-tab');
		tab.simulate('click');
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should render tab as a link', () => {
		const uut = shallow(<CSTab name={tabName} routerLink={<NavLink to="/icons" />} />);
		const tab = uut.find('.cs-tab-wrapper > NavLink');
		expect(tab).toHaveLength(1);
	});

	it('should render initial status tab', () => {
		const uut = shallow(<CSTab name={tabName} status="initial" />);
		const tab = uut.find('.cs-tab-wrapper.cs-tab-wrapper-initial');
		expect(tab).toHaveLength(1);
	});

	it('should render error status tab', () => {
		const uut = shallow(<CSTab name={tabName} status="error" />);
		const tab = uut.find('.cs-tab-wrapper.cs-tab-wrapper-error');
		const tabIcon = uut.find('.cs-tab > CSIcon');
		// Make sure belonging class name exists
		expect(tab).toHaveLength(1);
		// Make sure warning icon is rendered
		expect(tabIcon.prop('name')).toBe('warning');
	});

	it('should render warning status tab', () => {
		const uut = shallow(<CSTab name={tabName} status="warning" />);
		const tab = uut.find('.cs-tab-wrapper.cs-tab-wrapper-warning');
		const tabIcon = uut.find('.cs-tab > CSIcon');
		// Make sure belonging class name exists
		expect(tab).toHaveLength(1);
		// Make sure error icon is rendered
		expect(tabIcon.prop('name')).toBe('warning');
	});

	it('should render success status tab', () => {
		const uut = shallow(<CSTab name={tabName} status="success" />);
		const tab = uut.find('.cs-tab-wrapper.cs-tab-wrapper-success');
		const tabIcon = uut.find('.cs-tab > CSIcon');
		// Make sure belonging class name exists
		expect(tab).toHaveLength(1);
		// Make sure error icon is rendered
		expect(tabIcon.prop('name')).toBe('check');
	});

	it('should pass correct tooltipContent value to CSTooltip', () => {
		const tooltipContentValue = 'error message';
		const uut = shallow(<CSTab name={tabName} tooltipContent={tooltipContentValue} />);
		const tabTooltip = uut.find('CSTooltip');
		// Make sure CSTooltip prop content received correct value
		expect(tabTooltip.prop('content')).toBe(tooltipContentValue);
	});

	it('should set custom tab width', () => {
		const uut = shallow(<CSTab name={tabName} width="10rem" />);
		const tabStyles = uut.find('.cs-tab').get(0).props.style;
		expect(tabStyles).toHaveProperty('--cs-tab-width', '10rem');
	});

	it('should set custom class name', () => {
		const uut = shallow(<CSTab name={tabName} className={customClass} />);
		const tabGroup = uut.find(`.cs-tab-wrapper.${customClass}`);
		expect(tabGroup).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSTab name={tabName} id={customId} />);
		const tabGroup = uut.find(`.cs-tab-wrapper#${customId}`);
		expect(tabGroup).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSTab name={tabName}><div className="custom-content" /></CSTab>);
		const tab = uut.find('.cs-tab > .custom-content');
		expect(tab).toHaveLength(1);
	});
});
