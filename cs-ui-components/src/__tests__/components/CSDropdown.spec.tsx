import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { NavLink } from 'react-router-dom';
import CSDropdown from '../../components/dropdown/CSDropdown';
import CSDropdownItemWrapper from '../../components/dropdown/CSDropdownItemWrapper';
import CSButton from '../../components/CSButton';

const dropdownLabel = 'label';
const btnLabel = 'label';
const alignLeft = 'left';
const alignRight = 'right';
const positionTop = 'top';
const positionBottom = 'bottom';

describe('<CSDropdown />', () => {
	it('should render default CSDropdown', () => {
		const uut = shallow(
			<CSDropdown>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('mouseover');
		const dropdownWrapper = uut.find('CSAutoposition');
		expect(dropdownWrapper).toHaveLength(0); // Make sure hover is disabled and dropdown is not opened nor autoposition rendered
		dropdownBtn.simulate('click');
		expect(dropdownBtn.prop('btnStyle')).toBe('initial');
		expect(dropdownBtn.prop('btnType')).toBe('default');
		expect(dropdownBtn.props().disabled).toBeFalsy();
		const dropdownAutoposition = uut.find('CSAutoposition');
		expect(dropdownAutoposition.prop('initialPosition')).toBe('bottom-right'); // Align left translates to this. Position prop is also checked here
		expect(dropdownBtn.prop('iconName')).toBe('down');
		expect(dropdownBtn.prop('iconOrigin')).toBe('slds');
		expect(dropdownBtn.prop('iconPosition')).toBe(undefined); // Without label sets to undefined
		expect(dropdownBtn.prop('iconRotate')).toBe(0);
		expect(dropdownBtn.prop('label')).toBe('Toggle dropdown');
		// Make sure mode is button
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('mode')).toBe('button');
		expect(dropdownBtn.prop('size')).toBe('normal');
	});

	it('should be disabled when no children', () => {
		const uut = shallow(
			<CSDropdown />,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.props().disabled).toBeTruthy();
	});

	it('should align dropdown to left', () => {
		const uut = shallow(
			<CSDropdown align="left">
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownAutoposition = uut.find('CSAutoposition');
		expect(dropdownAutoposition.prop('initialPosition')).toBe('bottom-right');
	});

	it('should align dropdown to right', () => {
		const uut = shallow(
			<CSDropdown align="right">
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownAutoposition = uut.find('CSAutoposition');
		expect(dropdownAutoposition.prop('initialPosition')).toBe('bottom-left');
	});

	it('should pass btnStyle to toggle CSButton', () => {
		const btnStyleBrand = 'brand';
		const uut = shallow(
			<CSDropdown btnStyle={btnStyleBrand}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('btnStyle')).toBe(btnStyleBrand);
	});

	it('should pass btnType to toggle CSButton', () => {
		const btnTypeError = 'error';
		const uut = shallow(
			<CSDropdown btnType={btnTypeError}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('btnType')).toBe(btnTypeError);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(
			<CSDropdown disabled>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.props().disabled).toBeTruthy();
	});

	it('should pass dropdownClassName to CSDropdownItemWrapper', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSDropdown dropdownClassName={customClass}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('dropdownClassName')).toBe(customClass);
	});

	// TODO extra for hover prop
	// add onMouseLeave simulate (react issue with event, added trello card)
	// add onBlur simulate
	it('should enable hover and onMouseOver to trigger openDropdown, pass hover to CSDropdownItemWrapper', () => {
		const uut = shallow(
			<CSDropdown hover>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('mouseover');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef');
		expect(dropdownItemWrapper).toHaveLength(1);
		expect(dropdownItemWrapper.prop('hover')).toBeTruthy();
	});

	it('should pass iconName to CSButton', () => {
		const iconName = 'broadcast';
		const uut = shallow(
			<CSDropdown iconName={iconName}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('iconName')).toBe(iconName);
	});

	it('should pass iconOrigin to CSButton', () => {
		const iconOriginCS = 'cs';
		const uut = shallow(
			<CSDropdown iconOrigin={iconOriginCS}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('iconOrigin')).toBe(iconOriginCS);
	});

	it('should pass iconPosition to CSButton', () => {
		const iconPosition = 'right';
		const uut = shallow(
			<CSDropdown label={dropdownLabel} iconPosition={iconPosition}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('iconPosition')).toBe(iconPosition);
	});

	it('should pass iconRotate to CSButton', () => {
		const iconRotate = '90';
		const uut = shallow(
			<CSDropdown iconRotate={iconRotate}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('iconRotate')).toBe(iconRotate);
	});

	it('should pass label to CSButton', () => {
		const uut = shallow(
			<CSDropdown label={dropdownLabel}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('label')).toBe(dropdownLabel);
	});

	it('should pass maxHeight to CSDropdownItemWrapper', () => {
		const maxHeight = '300px';
		const uut = shallow(
			<CSDropdown maxHeight={maxHeight}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('maxHeight')).toBe(maxHeight);
	});

	it('should pass maxWidth to CSDropdownItemWrapper', () => {
		const maxWidth = '200px';
		const uut = shallow(
			<CSDropdown maxWidth={maxWidth}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('maxWidth')).toBe(maxWidth);
	});

	it('should pass mode to CSDropdownItemWrapper', () => {
		const mode = 'button';
		const uut = shallow(
			<CSDropdown mode={mode}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('mode')).toBe(mode);
	});

	it('should use a working onDropdownClose callback', () => {
		const handleDropdownCloseMock = jest.fn();
		const uut = shallow(
			<CSDropdown onDropdownClose={handleDropdownCloseMock}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click'); // Open
		dropdownBtn.simulate('click'); // Close
		expect(handleDropdownCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onDropdownOpen callback', () => {
		const handleDropdownOpenMock = jest.fn();
		const uut = shallow(
			<CSDropdown onDropdownOpen={handleDropdownOpenMock}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click'); // Open
		expect(handleDropdownOpenMock).toHaveBeenCalledTimes(1);
	});

	it('should pass onDropdownTabClose to CSDropdownItemWrapper', () => {
		const handleDropdownTabMock = jest.fn();
		const uut = shallow(
			<CSDropdown onDropdownTabClose={handleDropdownTabMock}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownToggleBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownToggleBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('onDropdownTabClose')).toBe(handleDropdownTabMock);
	});

	it('should pass padding to CSDropdownItemWrapper', () => {
		const padding = '1rem';
		const uut = shallow(
			<CSDropdown padding={padding}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('padding')).toBe(padding);
	});

	it('should set dropdown opening position to bottom', () => {
		const uut = shallow(
			<CSDropdown position={positionBottom}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownAutoposition = uut.find('CSAutoposition');
		expect(dropdownAutoposition.prop('initialPosition')).toBe(`${positionBottom}-right`);
	});

	it('should set dropdown opening position to top', () => {
		const uut = shallow(
			<CSDropdown position={positionTop}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownAutoposition = uut.find('CSAutoposition');
		expect(dropdownAutoposition.prop('initialPosition')).toBe(`${positionTop}-right`);
	});

	it('should pass routerLink to CSButton', () => {
		const routerLinkNavLink = <NavLink to="/utilities/cloud-sense-icons" />;
		const uut = shallow(
			<CSDropdown hover routerLink={routerLinkNavLink}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('routerLink')).toBe(routerLinkNavLink);
	});

	it('should pass size to CSButton', () => {
		const sizeNormal = 'normal';
		const uut = shallow(
			<CSDropdown size={sizeNormal}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('size')).toBe(sizeNormal);
	});

	it('should pass title to CSButton', () => {
		const title = 'title';
		const uut = shallow(
			<CSDropdown title={title}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		expect(dropdownBtn.prop('title')).toBe(title);
	});

	it('should pass width to CSDropdownItemWrapper', () => {
		const width = '200px';
		const uut = shallow(
			<CSDropdown width={width}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		expect(dropdownItemWrapper.prop('width')).toBe(width);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSDropdown className={customClass}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownWrapper = uut.find(`.cs-dropdown-wrapper.${customClass}`);
		expect(dropdownWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'id';
		const uut = shallow(
			<CSDropdown id={customId}>
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownWrapper = uut.find(`.cs-dropdown-wrapper#${customId}`);
		expect(dropdownWrapper).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(
			<CSDropdown>
				<CSButton label={btnLabel} />
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
		dropdownBtn.simulate('click');
		const dropdownItemWrapper = uut.find('CSAutoposition').dive().find('ForwardRef').dive();
		const dropdownItemWrapperItems = dropdownItemWrapper.find('CSButton');
		expect(dropdownItemWrapperItems).toHaveLength(2);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSDropdown data-testid="rest">
				<CSButton label={btnLabel} />
			</CSDropdown>,
		);
		const dropdownWrapper = uut.find({ 'data-testid': 'rest' });
		expect(dropdownWrapper).toHaveLength(1);
	});
});

describe('<CSDropdownItemWrapper />', () => {
	it('should not display CSDropdownItemWrapper', () => {
		const uut = shallow(<CSDropdownItemWrapper visible={false} mounted align={alignLeft} position={positionBottom} />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper');
		expect(dropdownItemWrapper).toHaveLength(0);
	});

	it('should render default CSDropdownItemWrapper', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted align={alignLeft} position={positionBottom} />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-outer-item-wrapper');
		expect(dropdownItemWrapper).toHaveLength(1);
		const dropdownItemWrapperHover = uut.find('CSDropdownItemWrapper').dive().find('cs-dropdown-hover');
		expect(dropdownItemWrapperHover).toHaveLength(0);
		const dropdownItemWrapperHidden = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-hidden');
		expect(dropdownItemWrapperHidden).toHaveLength(0);
	});

	it('should set align left', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted hover align={alignLeft} position="top" />).dive();
		const dropdownItemWrapperAlign = uut.find('CSDropdownItemWrapper').dive().find(`.cs-dropdown-outer-item-wrapper.cs-dropdown-top-${alignLeft}`);
		expect(dropdownItemWrapperAlign).toHaveLength(1);
	});

	it('should set align right', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted hover align={alignRight} position="top" />).dive();
		const dropdownItemWrapperAlign = uut.find('CSDropdownItemWrapper').dive().find(`.cs-dropdown-outer-item-wrapper.cs-dropdown-top-${alignRight}`);
		expect(dropdownItemWrapperAlign).toHaveLength(1);
	});

	it('should set position bottom', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted hover align="left" position={positionBottom} />).dive();
		const dropdownItemWrapperPosition = uut.find('CSDropdownItemWrapper').dive().find(`.cs-dropdown-outer-item-wrapper.cs-dropdown-${positionBottom}-left`);
		expect(dropdownItemWrapperPosition).toHaveLength(1);
	});

	it('should set position top', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted hover align="left" position={positionTop} />).dive();
		const dropdownItemWrapperPosition = uut.find('CSDropdownItemWrapper').dive().find(`.cs-dropdown-outer-item-wrapper.cs-dropdown-${positionTop}-left`);
		expect(dropdownItemWrapperPosition).toHaveLength(1);
	});

	it('should invoke setMounted', () => {
		const handleOnSetMounted = jest.fn();
		shallow(<CSDropdownItemWrapper visible mounted setMounted={handleOnSetMounted} />).dive().find('CSDropdownItemWrapper').dive();
		expect(handleOnSetMounted).toHaveBeenCalledTimes(1);
	});

	it('should not be hidden if mounted', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-hidden');
		expect(dropdownItemWrapper).toHaveLength(0);
	});

	it('should be hidden if not mounted', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted={false} />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-hidden');
		expect(dropdownItemWrapper).toHaveLength(1);
	});

	it('should set custom dropdown class', () => {
		const dropdownClassName = 'custom-class';
		const uut = shallow(<CSDropdownItemWrapper visible mounted dropdownClassName={dropdownClassName} />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find(`.cs-dropdown-outer-item-wrapper.${dropdownClassName}`);
		expect(dropdownItemWrapper).toHaveLength(1);
	});

	it('should enable hover by setting belonging class', () => {
		const uut = shallow(<CSDropdownItemWrapper visible mounted hover />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-hover');
		expect(dropdownItemWrapper).toHaveLength(1);
	});

	it('should set maxHeight', () => {
		const maxHeight = '3rem';
		const uut = shallow(<CSDropdownItemWrapper visible mounted maxHeight={maxHeight} />).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('ul');
		const dropdownItemWrapperUlStyle = dropdownItemWrapperUl.props().style;
		expect(dropdownItemWrapperUlStyle).toHaveProperty('--cs-dropdown-max-height', maxHeight);
	});

	it('should set maxWidth', () => {
		const maxWidth = '10rem';
		const uut = shallow(<CSDropdownItemWrapper visible mounted maxWidth={maxWidth} />).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('ul');
		const dropdownItemWrapperUlStyle = dropdownItemWrapperUl.props().style;
		expect(dropdownItemWrapperUlStyle).toHaveProperty('--cs-dropdown-max-width', maxWidth);
	});

	// TODO onDropdownTabClose, in method testing?
	// it('should use a working onDropdownTabClose callback', () => {
	// 	const handleOnDropdownTabCloseMock = jest.fn();
	// 	const uut = mount(
	// 		<CSDropdown mode="button" onDropdownTabClose={handleOnDropdownTabCloseMock}>
	// 			<CSButton label={btnLabel} />
	// 		</CSDropdown>,
	// 	);
	// 	const dropdownBtn = uut.find('.cs-dropdown-wrapper > CSButton');
	// 	dropdownBtn.simulate('click');
	// 	const dropdownItemWrapperChild = uut.find('.cs-dropdown-outer-item-wrapper > ul > li > CSButton');
	// 	console.log(uut.debug());
	// 	expect(dropdownItemWrapperChild).toHaveLength(1);
	// 	dropdownItemWrapperChild.simulate('keydown', { key: 'Tab' });
	// 	expect(handleOnDropdownTabCloseMock).toHaveBeenCalledTimes(1);
	// });

	it('should set mode button and render correct html', () => {
		const uut = shallow(
			<CSDropdownItemWrapper visible mounted mode="button">
				<CSButton label={btnLabel} />
			</CSDropdownItemWrapper>,
		).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-outer-item-wrapper > ul');
		expect(dropdownItemWrapperUl.prop('role')).toBe('menu');
		const dropdownItemWrapperListItem = dropdownItemWrapperUl.find('li');
		expect(dropdownItemWrapperListItem).toHaveLength(1);
		// Make sure list item has role none
		expect(dropdownItemWrapperListItem.prop('role')).toBe('none');
		const dropdownItemWrapperListItemChild = dropdownItemWrapperListItem.find('CSButton');
		// Make sure child has role menuitem
		expect(dropdownItemWrapperListItemChild.prop('role')).toBe('menuitem');
	});

	it('should set mode list and render correct html', () => {
		const uut = shallow(
			<CSDropdownItemWrapper visible mounted mode="list">
				<CSButton label={btnLabel} />
			</CSDropdownItemWrapper>,
		).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-outer-item-wrapper > ul');
		expect(dropdownItemWrapperUl.prop('role')).toBe('menu');
		const dropdownItemWrapperListItem = dropdownItemWrapperUl.find('li');
		expect(dropdownItemWrapperListItem).toHaveLength(1);
		// Make sure list item has role none
		expect(dropdownItemWrapperListItem.prop('role')).toBe('none');
		const dropdownItemWrapperListItemChild = dropdownItemWrapperListItem.find('CSButton');
		// Make sure child has role menuitem
		expect(dropdownItemWrapperListItemChild.prop('role')).toBe('menuitem');
	});

	it('should set mode custom and render correct html', () => {
		const uut = shallow(
			<CSDropdownItemWrapper visible mounted mode="custom">
				<CSButton label={btnLabel} />
			</CSDropdownItemWrapper>,
		).dive();
		const dropdownItemWrapperDivWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-outer-item-wrapper > .cs-dropdown-item-wrapper');
		expect(dropdownItemWrapperDivWrapper).toHaveLength(1);
		// Make sure div has role menu
		expect(dropdownItemWrapperDivWrapper.prop('role')).toBe('menu');
		const dropdownItemWrapperChildWrapper = dropdownItemWrapperDivWrapper.find('.cs-dropdown-item-wrapper > div');
		// Make sure child wrapper div has role none
		expect(dropdownItemWrapperChildWrapper.prop('role')).toBe('none');
	});

	it('should set custom padding', () => {
		const customPadding = '0';
		const uut = shallow(<CSDropdownItemWrapper visible mounted padding={customPadding} />).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('ul.cs-dropdown-item-wrapper-no-padding');
		const dropdownItemWrapperUlStyle = dropdownItemWrapperUl.props().style;
		expect(dropdownItemWrapperUlStyle).toHaveProperty('--cs-dropdown-padding', customPadding);
	});

	it('should set custom inline style', () => {
		const style = { border: '2px solid var(--csd-custom-br-purple)' };
		const uut = shallow(<CSDropdownItemWrapper visible mounted style={style} />).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('.cs-dropdown-outer-item-wrapper');
		const dropdownItemWrapperStyle = dropdownItemWrapper.props().style;
		expect(dropdownItemWrapperStyle).toMatchObject(style);
	});

	// TODO toggleDropdown, in method testing?
	// it('should use a working toggleDropdown callback', () => {
	// 	const handleToggleDropdownMock = jest.fn();
	// 	const uut = shallow(<CSDropdownItemWrapper visible mounted toggleDropdown={handleToggleDropdownMock} />).dive();
	// 	const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive();
	// 	expect(dropdownItemWrapper).toHaveLength(1);
	// });

	it('should set custom width', () => {
		const customWidth = '10rem';
		const uut = shallow(<CSDropdownItemWrapper visible mounted width={customWidth} />).dive();
		const dropdownItemWrapperUl = uut.find('CSDropdownItemWrapper').dive().find('ul');
		const dropdownItemWrapperUlStyle = dropdownItemWrapperUl.props().style;
		expect(dropdownItemWrapperUlStyle).toHaveProperty('--cs-dropdown-width', customWidth);
	});

	it('should render custom children', () => {
		const uut = shallow(
			<CSDropdownItemWrapper visible mounted>
				<CSButton label={btnLabel} />
			</CSDropdownItemWrapper>,
		).dive();
		const dropdownItemWrapper = uut.find('CSDropdownItemWrapper').dive().find('CSButton');
		expect(dropdownItemWrapper).toHaveLength(1);
	});
});
