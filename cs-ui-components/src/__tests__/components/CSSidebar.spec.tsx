import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSSidebar from '../../components/sidebar/CSSidebar';
import CSSidebarTab from '../../components/sidebar/CSSidebarTab';

const sidebarTitle = 'title';

describe('<CSSidebar />', () => {
	it('should render the default CSSidebar', () => {
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const defaultSidebar = uut.find('.cs-sidebar.cs-sidebar-wrapper-left.cs-sidebar-closed:not(.cs-sidebar-multiple-tabs)');
		// Should have default values for props multipleTabs, expanded, opensTo
		expect(defaultSidebar).toHaveLength(1);
	});

	it('should render closed sidebar', () => {
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar.cs-sidebar-closed');
		expect(sidebar).toHaveLength(1);
	});

	it('should set sidebar custom height', () => {
		const heightValue = '50vh';
		const uut = shallow(
			<CSSidebar height={heightValue}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar').get(0).props.style;
		expect(sidebar).toHaveProperty('--cs-sidebar-height', heightValue);
	});

	it('should render multiple tabs variant sidebar', () => {
		const uut = shallow(
			<CSSidebar multipleTabs>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar.cs-sidebar-multiple-tabs');
		const sidebarTabsWrapper = uut.find('.cs-button-tabs-wrapper');
		// Make sure belonging class exists
		expect(sidebar).toHaveLength(1);
		// Make sure tabs button wrapper is rendered
		expect(sidebarTabsWrapper).toHaveLength(1);
	});

	it('should trigger function passed to onToggle by clicking on toggle button', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar onToggle={handleOnToggle} expanded>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarToggleBtn = uut.find('.cs-sidebar-toggle');
		expect(sidebarToggleBtn).toHaveLength(1);
		sidebarToggleBtn.simulate('click');
		expect(handleOnToggle).toHaveBeenCalledTimes(1);
	});

	it('should trigger function passed to onToggle with multipleTabs variant by clicking on tab button', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar multipleTabs onToggle={handleOnToggle}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarTabButton = uut.find('.cs-button-tabs-wrapper CSButton').dive();
		expect(sidebarTabButton).toHaveLength(1);
		sidebarTabButton.simulate('click');
		expect(handleOnToggle).toHaveBeenCalledTimes(1);
	});

	it('should apply styles to open sidebar to right', () => {
		const uut = shallow(
			<CSSidebar opensTo="right">
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		// Make sure class that applies styles to render wrapper on left exists
		const sidebar = uut.find('.cs-sidebar.cs-sidebar-wrapper-left');
		expect(sidebar).toHaveLength(1);
	});

	it('should apply styles to open sidebar to left', () => {
		const uut = shallow(
			<CSSidebar opensTo="left">
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		// Make sure class that applies styles to render wrapper on left does not exist
		const sidebar = uut.find('.cs-sidebar:not(.cs-sidebar-wrapper-left)');
		expect(sidebar).toHaveLength(1);
	});

	it('should set sidebar tabs custom padding', () => {
		const tabsPaddingValue = '1rem 0.5rem';
		const uut = shallow(
			<CSSidebar tabsPadding={tabsPaddingValue}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar').get(0).props.style;
		// Make sure css var is added with correct value
		expect(sidebar).toHaveProperty('--cs-sidebar-tabs-custom-padding', tabsPaddingValue);
	});

	it('should set sidebar tabs custom width', () => {
		const tabsWidthValue = '200px';
		const uut = shallow(
			<CSSidebar tabsWidth={tabsWidthValue}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar').get(0).props.style;
		// Make sure css var is added with correct value
		expect(sidebar).toHaveProperty('--cs-sidebar-tab-custom-width', tabsWidthValue);
	});

	/* wholeSidebarClickable prop - 4 variants with aside and toggle click tests */
	it('should make sidebar to not be expandable by click on whole sidebar and not have belonging class', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar wholeSidebarClickable={false} onToggle={handleOnToggle}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar:not(.cs-whole-sidebar-clickable)');
		sidebar.simulate('click');
		expect(sidebar).toHaveLength(1);
		expect(handleOnToggle).toHaveBeenCalledTimes(0);
	});

	it('should use a working onToggle callback', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar wholeSidebarClickable={false} onToggle={handleOnToggle}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarToggleBtn = uut.find('.cs-sidebar-toggle');
		sidebarToggleBtn.simulate('click');
		expect(handleOnToggle).toHaveBeenCalledTimes(1);
	});

	it('should use a working onToggle callback by click on whole sidebar', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar wholeSidebarClickable onToggle={handleOnToggle}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar.cs-whole-sidebar-clickable');
		sidebar.simulate('click');
		// Make sure belonging class exists
		expect(sidebar).toHaveLength(1);
		expect(handleOnToggle).toHaveBeenCalledTimes(1);
	});

	// Button is positioned over aside element therefore it is prevented from triggering when sidebar is closed and whole sidebar is clickable because it would trigger 2 clicks
	it('should prevent toggle button click because it already propagates from sidebar element', () => {
		const handleOnToggle = jest.fn();
		const uut = shallow(
			<CSSidebar wholeSidebarClickable onToggle={handleOnToggle}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarToggleBtn = uut.find('.cs-sidebar-toggle');
		sidebarToggleBtn.simulate('click');
		expect(handleOnToggle).toHaveBeenCalledTimes(0);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSSidebar id={customId}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find(`.cs-sidebar#${customId}`);
		expect(sidebar).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSSidebar className={customClass}>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find(`.cs-sidebar.${customClass}`);
		expect(sidebar).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSSidebar data-testid="rest">
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebar = uut.find({ 'data-testid': 'rest' });
		expect(sidebar).toHaveLength(1);
	});
});

describe('<CSSidebarTab />', () => {
	it('should render title on sidebar tab', () => {
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarTab = uut.find(CSSidebarTab).dive().find('.cs-sidebar-tab-title');
		expect(sidebarTab.text()).toBe(sidebarTitle);
	});

	it('should pass iconName to toggle CSButton', () => {
		// Sidebar needs to be closed to show tab icon because when expanded button always uses close icon
		const iconNameValue = 'activity';
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab title={sidebarTitle} iconName={iconNameValue} />
			</CSSidebar>,
		);
		const sidebarToggleBtn = uut.find('.cs-sidebar > CSButton');
		expect(sidebarToggleBtn).toHaveLength(1);
		expect(sidebarToggleBtn.prop('iconName')).toBe(iconNameValue);
	});

	it('should pass iconOrigin to toggle CSButton', () => {
		// Sidebar needs to be closed to show tab icon because when expanded button always uses close icon
		const iconOriginValue = 'cs';
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab title={sidebarTitle} iconOrigin={iconOriginValue} />
			</CSSidebar>,
		);
		const sidebarToggleBtn = uut.find('.cs-sidebar > CSButton');
		expect(sidebarToggleBtn).toHaveLength(1);
		expect(sidebarToggleBtn.prop('iconOrigin')).toBe(iconOriginValue);
	});

	it('should pass iconName to toggle CSButton in multipleTab variant', () => {
		// Sidebar needs to be closed to show tab icon because when expanded button uses close icon
		const iconNameValue = 'activity';
		const uut = shallow(
			<CSSidebar multipleTabs>
				<CSSidebarTab title={sidebarTitle} iconName={iconNameValue} />
			</CSSidebar>,
		);
		const sidebarTabBtn = uut.find('.cs-button-tabs-wrapper > CSButton');
		expect(sidebarTabBtn).toHaveLength(1);
		expect(sidebarTabBtn.prop('iconName')).toBe(iconNameValue);
	});

	it('should pass iconOrigin to toggle CSButton in multipleTab variant', () => {
		// Sidebar needs to be closed to show tab icon because when expanded button uses close icon
		const iconOriginValue = 'cs';
		const uut = shallow(
			<CSSidebar multipleTabs>
				<CSSidebarTab title={sidebarTitle} iconOrigin={iconOriginValue} />
			</CSSidebar>,
		);
		const sidebarTabBtn = uut.find('.cs-button-tabs-wrapper > CSButton');
		expect(sidebarTabBtn).toHaveLength(1);
		expect(sidebarTabBtn.prop('iconOrigin')).toBe(iconOriginValue);
	});

	it('should hide tab header', () => {
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab title={sidebarTitle} noTabHeader />
			</CSSidebar>,
		);
		const sidebarTab = uut.find('CSSidebarTab').dive().find('.cs-sidebar-tab-header');
		expect(sidebarTab).toHaveLength(0);
	});

	it('should set custom padding', () => {
		const tabPaddingValue = '2rem';
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle} tabPadding={tabPaddingValue} />
			</CSSidebar>,
		);
		const sidebarTabStyle = uut.find('CSSidebarTab').dive().find('.cs-sidebar-tab').get(0).props.style;
		expect(sidebarTabStyle).toHaveProperty('--cs-sidebar-tab-custom-padding', tabPaddingValue);
	});

	it('should set custom width and override tabsWidth if it is defined', () => {
		const tabWidthValue = '150px';
		const uut = shallow(
			<CSSidebar multipleTabs tabsWidth="200px">
				<CSSidebarTab title={sidebarTitle} tabWidth={tabWidthValue} />
			</CSSidebar>,
		);
		const sidebar = uut.find('.cs-sidebar').get(0).props.style;
		expect(sidebar).toHaveProperty('--cs-sidebar-tab-custom-width', tabWidthValue);
	});

	it('should render subtitle', () => {
		const subtitle = 'subtitle';
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle} subtitle={subtitle} />
			</CSSidebar>,
		);
		const sidebarTab = uut.find('CSSidebarTab').dive().find('.cs-sidebar-tab-subtitle');
		expect(sidebarTab.text()).toBe(subtitle);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle} id={customId} />
			</CSSidebar>,
		);
		const sidebarTab = uut.find('CSSidebarTab').dive().find(`.cs-sidebar-tab#${customId}`);
		expect(sidebarTab).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle} className={customClass} />
			</CSSidebar>,
		);
		const sidebar = uut.find(CSSidebarTab).dive().find(`.cs-sidebar-tab.${customClass}`);
		expect(sidebar).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(
			<CSSidebar expanded>
				<CSSidebarTab title={sidebarTitle}>
					<div className="custom-content" />
				</CSSidebarTab>
			</CSSidebar>,
		);
		const sidebarTabContent = uut.find(CSSidebarTab).dive().find('.cs-sidebar-tab-body > .custom-content');
		expect(sidebarTabContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSSidebar>
				<CSSidebarTab data-testid="rest" title={sidebarTitle} />
			</CSSidebar>,
		);
		const sidebarTab = uut.find({ 'data-testid': 'rest' });
		expect(sidebarTab).toHaveLength(1);
	});
});
