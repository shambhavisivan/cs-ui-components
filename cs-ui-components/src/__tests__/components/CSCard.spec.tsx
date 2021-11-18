import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSCard from '../../components/card/CSCard';
import CSCardHeader from '../../components/card/CSCardHeader';
import CSCardBody from '../../components/card/CSCardBody';
import CSCardFooter from '../../components/card/CSCardFooter';

const iconNameValue = 'activity';
const iconOriginValue = 'slds';
const customClass = 'custom-class';
const customId = 'custom-id';
const bgColorValue = 'green';
const paddingValue = '0';

describe('<CSCard />', () => {
	it('should render default CSCard', () => {
		const uut = shallow(<CSCard />);
		const card = uut.find('.cs-card');
		expect(card).toHaveLength(1);
	});

	it('should set custom border radius', () => {
		const borderRadiusValue = '1rem';
		const uut = shallow(<CSCard borderRadius={borderRadiusValue} />);
		const cardStyle = uut.find('.cs-card').get(0).props.style;
		expect(cardStyle).toHaveProperty('--cs-card-border-radius', borderRadiusValue);
	});

	it('should set custom class', () => {
		const uut = shallow(<CSCard className={customClass} />);
		const card = uut.find(`.cs-card.${customClass}`);
		expect(card).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSCard id={customId} />);
		const card = uut.find(`.cs-card#${customId}`);
		expect(card).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(<CSCard><CSCardBody /></CSCard>);
		expect(uut.find('.cs-card > CSCardBody')).toHaveLength(1);
	});
});

describe('<CSCardHeader />', () => {
	it('should render default CSCardHeader', () => {
		const uut = shallow(<CSCardHeader />);
		const cardHeader = uut.find('.cs-card-header.cs-card-header-with-border');
		expect(cardHeader).toHaveLength(1);
	});

	it('should set custom background color on header', () => {
		const uut = shallow(<CSCardHeader bgColor={bgColorValue} />);
		const cardHeaderStyle = uut.find('.cs-card-header').get(0).props.style;
		expect(cardHeaderStyle).toHaveProperty('--cs-card-header-bg-color', bgColorValue);
	});

	it('should make card header collapsible', () => {
		const uut = shallow(<CSCardHeader collapsible />);
		// Make sure belonging class exists on CSCardHeader
		expect(uut.find('.cs-card-header-collapsible')).toHaveLength(1);
		// Make sure it is collapsible by ensuring header toggle button exists
		expect(uut.find('.cs-card-header > .cs-card-button')).toHaveLength(1);
	});

	it('should make card header closed by default', () => {
		const uut = shallow(<CSCardHeader collapsible defaultClosed />);
		expect(uut.find('.cs-card-header-collapsible.cs-card-header-collapsed')).toHaveLength(1);
	});

	it('should pass correct iconColor value to CSIcon', () => {
		const iconColorValue = 'red';
		const uut = shallow(<CSCardHeader iconName="description" iconColor={iconColorValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('color')).toBe(iconColorValue);
	});

	it('should set card header icon frame', () => {
		const uut = shallow(<CSCardHeader iconName="description" iconFrame />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('frame')).toBeTruthy();
	});

	it('should pass correct iconName to CSIcon', () => {
		const uut = shallow(<CSCardHeader iconName={iconNameValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		// Make sure the icon is from the slds pack
		expect(cardHeaderIcon.prop('name')).toBe(iconNameValue);
	});

	it('should pass correct iconOrigin to CSIcon', () => {
		const uut = shallow(<CSCardHeader iconName={iconNameValue} iconOrigin={iconOriginValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		// Make sure the icon is from the slds pack
		expect(cardHeaderIcon.prop('origin')).toBe(iconOriginValue);
	});

	it('should set card header padding', () => {
		const uut = shallow(<CSCardHeader padding={paddingValue} />);
		const cardHeaderStyle = uut.find('.cs-card-header').get(0).props.style;
		expect(cardHeaderStyle).toHaveProperty('--cs-card-header-padding', paddingValue);
	});

	it('should show card header border', () => {
		const uut = shallow(<CSCardHeader showBorder />);
		// Make sure class that adds border exists
		expect(uut.find('.cs-card-header.cs-card-header-with-border')).toHaveLength(1);
	});

	it('should not show card header border', () => {
		const uut = shallow(<CSCardHeader showBorder={false} />);
		expect(uut.find('.cs-card-header:not(.cs-card-header-with-border)')).toHaveLength(1);
	});

	it('should render card header title', () => {
		const title = 'Header title';
		const uut = shallow(<CSCardHeader title={title} />);
		const cardHeaderTitle = uut.find('.cs-card-header-title');
		expect(cardHeaderTitle.text()).toBe(title);
	});

	it('should set custom class', () => {
		const uut = shallow(<CSCardHeader className={customClass} />);
		const cardHeader = uut.find(`.cs-card-header.${customClass}`);
		expect(cardHeader).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSCardHeader id={customId} />);
		const cardHeader = uut.find(`.cs-card-header#${customId}`);
		expect(cardHeader).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardHeader><div className="custom-content" /></CSCardHeader>);
		expect(uut.find('.cs-card-header > .custom-content')).toHaveLength(1);
	});
});

describe('<CSCardBody />', () => {
	it('should render default CSCardBody', () => {
		const uut = shallow(<CSCardBody />);
		const cardBody = uut.find('.cs-card-body');
		expect(cardBody).toHaveLength(1);
	});

	it('should set card body max height', () => {
		const maxHeightValue = '5rem';
		const uut = shallow(<CSCardBody maxHeight={maxHeightValue} />);
		const cardBodyStyle = uut.find('.cs-card-body').get(0).props.style;
		expect(cardBodyStyle).toHaveProperty('--cs-card-body-max-height', maxHeightValue);
	});

	it('should set card body padding', () => {
		const uut = shallow(<CSCardBody padding={paddingValue} />);
		const cardBodyStyle = uut.find('.cs-card-body').get(0).props.style;
		expect(cardBodyStyle).toHaveProperty('--cs-card-body-padding', paddingValue);
	});

	it('should set custom class', () => {
		const uut = shallow(<CSCardBody className={customClass} />);
		const cardBody = uut.find(`.cs-card-body.${customClass}`);
		expect(cardBody).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSCardBody id={customId} />);
		const cardBody = uut.find(`.cs-card-body#${customId}`);
		expect(cardBody).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardBody><div className="custom-content" /></CSCardBody>);
		expect(uut.find('.cs-card-body > .custom-content')).toHaveLength(1);
	});
});

describe('<CSCardFooter />', () => {
	it('should render default CSCardFooter', () => {
		const uut = shallow(<CSCardFooter />);
		const cardFooter = uut.find('.cs-card-footer.cs-card-footer-left');
		expect(cardFooter).toHaveLength(1);
	});

	it('should align card footer child elements to left', () => {
		const uut = shallow(<CSCardFooter align="left" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-left')).toHaveLength(1);
	});

	it('should align card footer child elements to center', () => {
		const uut = shallow(<CSCardFooter align="center" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-center')).toHaveLength(1);
	});

	it('should align card footer child elements to right', () => {
		const uut = shallow(<CSCardFooter align="right" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-right')).toHaveLength(1);
	});

	it('should set custom background color on footer', () => {
		const uut = shallow(<CSCardFooter bgColor={bgColorValue} />);
		const cardFooterStyle = uut.find('.cs-card-footer').get(0).props.style;
		expect(cardFooterStyle).toHaveProperty('--cs-card-footer-bg-color', bgColorValue);
	});

	it('should set card footer padding', () => {
		const uut = shallow(<CSCardFooter padding={paddingValue} />);
		const cardStyle = uut.find('.cs-card-footer').get(0).props.style;
		expect(cardStyle).toHaveProperty('--cs-card-footer-padding', paddingValue);
	});

	it('should set custom class', () => {
		const uut = shallow(<CSCardFooter className={customClass} />);
		const cardFooter = uut.find(`.cs-card-footer.${customClass}`);
		expect(cardFooter).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const uut = shallow(<CSCardFooter id={customId} />);
		const cardFooter = uut.find(`.cs-card-footer#${customId}`);
		expect(cardFooter).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardFooter><div className="custom-content" /></CSCardFooter>);
		expect(uut.find('.cs-card-footer > .custom-content')).toHaveLength(1);
	});
});
