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
	it('should render the default CSCard', () => {
		const uut = shallow(<CSCard />);
		const card = uut.find('.cs-card');
		// Should render a card
		expect(card).toHaveLength(1);
	});

	it('should set custom border radius', () => {
		const borderRadiusValue = '1rem';
		const uut = shallow(<CSCard borderRadius={borderRadiusValue} />);
		const cardStyle = uut.find('.cs-card').get(0).props.style;
		expect(cardStyle).toHaveProperty('--cs-card-border-radius', borderRadiusValue);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSCard className={customClass} />);
		const card = uut.find(`.cs-card.${customClass}`);
		expect(card).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSCard id={customId} />);
		const card = uut.find(`.cs-card#${customId}`);
		expect(card).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(<CSCard><CSCardBody /></CSCard>);
		expect(uut.find('.cs-card > CSCardBody')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCard data-testid="rest" />);
		const card = uut.find({ 'data-testid': 'rest' });
		expect(card).toHaveLength(1);
	});
});

describe('<CSCardHeader />', () => {
	it('should render the default CSCardHeader', () => {
		const uut = shallow(<CSCardHeader />);
		// Should render a card header
		const cardHeader = uut.find('.cs-card-header');
		expect(cardHeader).toHaveLength(1);
		// borderRadius
		expect(cardHeader.find('.cs-card-header-with-border')).toHaveLength(1);
	});

	it('should set custom background color', () => {
		const uut = shallow(<CSCardHeader bgColor={bgColorValue} />);
		const cardHeaderStyle = uut.find('.cs-card-header').get(0).props.style;
		expect(cardHeaderStyle).toHaveProperty('--cs-card-header-bg-color', bgColorValue);
	});

	it('should be collapsible', () => {
		const uut = shallow(<CSCardHeader collapsible />);
		// Make sure belonging class exists on CSCardHeader
		expect(uut.find('.cs-card-header-collapsible')).toHaveLength(1);
		// Make sure it is collapsible by ensuring header toggle button exists
		expect(uut.find('.cs-card-header > .cs-card-toggle-btn')).toHaveLength(1);
		expect(uut.find('.cs-card-header > CSButton').prop('ariaExpanded')).toBeTruthy();
	});

	it('should be closed by default', () => {
		const uut = shallow(<CSCardHeader collapsible defaultClosed />);
		expect(uut.find('.cs-card-header-collapsible.cs-card-header-collapsed')).toHaveLength(1);
		expect(uut.find('.cs-card-header > CSButton').prop('ariaExpanded')).toBeFalsy();
	});

	it('should pass iconColor to CSIcon', () => {
		const iconColorValue = 'red';
		const uut = shallow(<CSCardHeader iconName="description" iconColor={iconColorValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('color')).toBe(iconColorValue);
	});

	it('should render icon frame', () => {
		const uut = shallow(<CSCardHeader iconName="description" iconFrame />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('frame')).toBeTruthy();
	});

	it('should pass iconName to CSIcon', () => {
		const uut = shallow(<CSCardHeader iconName={iconNameValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('name')).toBe(iconNameValue);
	});

	it('should pass iconOrigin to CSIcon', () => {
		const uut = shallow(<CSCardHeader iconName={iconNameValue} iconOrigin={iconOriginValue} />);
		const cardHeaderIcon = uut.find('.cs-card-header-icon > CSIcon');
		expect(cardHeaderIcon.prop('origin')).toBe(iconOriginValue);
	});

	it('should set custom padding', () => {
		const uut = shallow(<CSCardHeader padding={paddingValue} />);
		const cardHeaderStyle = uut.find('.cs-card-header').get(0).props.style;
		expect(cardHeaderStyle).toHaveProperty('--cs-card-header-padding', paddingValue);
	});

	it('should show border', () => {
		const uut = shallow(<CSCardHeader showBorder />);
		// Make sure class that adds border exists
		expect(uut.find('.cs-card-header.cs-card-header-with-border')).toHaveLength(1);
	});

	it('should not show border', () => {
		const uut = shallow(<CSCardHeader showBorder={false} />);
		expect(uut.find('.cs-card-header:not(.cs-card-header-with-border)')).toHaveLength(1);
	});

	it('should set title', () => {
		const title = 'Header title';
		const uut = shallow(<CSCardHeader title={title} />);
		const cardHeaderTitle = uut.find('.cs-card-header-title');
		expect(cardHeaderTitle.text()).toBe(title);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSCardHeader className={customClass} />);
		const cardHeader = uut.find(`.cs-card-header.${customClass}`);
		expect(cardHeader).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSCardHeader id={customId} />);
		const cardHeader = uut.find(`.cs-card-header#${customId}`);
		expect(cardHeader).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardHeader><div className="custom-content" /></CSCardHeader>);
		expect(uut.find('.cs-card-header > .custom-content')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCardHeader data-testid="rest" />);
		const cardHeader = uut.find({ 'data-testid': 'rest' });
		expect(cardHeader).toHaveLength(1);
	});
});

describe('<CSCardBody />', () => {
	it('should render the default CSCardBody', () => {
		const uut = shallow(<CSCardBody />);
		// Should render a card body
		const cardBody = uut.find('.cs-card-body');
		expect(cardBody).toHaveLength(1);
	});

	it('should set max height', () => {
		const maxHeightValue = '5rem';
		const uut = shallow(<CSCardBody maxHeight={maxHeightValue} />);
		const cardBodyStyle = uut.find('.cs-card-body').get(0).props.style;
		expect(cardBodyStyle).toHaveProperty('--cs-card-body-max-height', maxHeightValue);
	});

	it('should set custom padding', () => {
		const uut = shallow(<CSCardBody padding={paddingValue} />);
		const cardBodyStyle = uut.find('.cs-card-body').get(0).props.style;
		expect(cardBodyStyle).toHaveProperty('--cs-card-body-padding', paddingValue);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSCardBody className={customClass} />);
		const cardBody = uut.find(`.cs-card-body.${customClass}`);
		expect(cardBody).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSCardBody id={customId} />);
		const cardBody = uut.find(`.cs-card-body#${customId}`);
		expect(cardBody).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardBody><div className="custom-content" /></CSCardBody>);
		expect(uut.find('.cs-card-body > .custom-content')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCardBody data-testid="rest" />);
		const cardBody = uut.find({ 'data-testid': 'rest' });
		expect(cardBody).toHaveLength(1);
	});
});

describe('<CSCardFooter />', () => {
	it('should render the default CSCardFooter', () => {
		const uut = shallow(<CSCardFooter />);
		// Should render a card footer, align
		const cardFooter = uut.find('.cs-card-footer');
		expect(cardFooter).toHaveLength(1);
		// align
		expect(cardFooter.find('.cs-card-footer-left')).toHaveLength(1);
	});

	it('should align child elements to left', () => {
		const uut = shallow(<CSCardFooter align="left" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-left')).toHaveLength(1);
	});

	it('should align child elements to center', () => {
		const uut = shallow(<CSCardFooter align="center" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-center')).toHaveLength(1);
	});

	it('should align child elements to right', () => {
		const uut = shallow(<CSCardFooter align="right" />);
		expect(uut.find('.cs-card-footer.cs-card-footer-right')).toHaveLength(1);
	});

	it('should set custom background color', () => {
		const uut = shallow(<CSCardFooter bgColor={bgColorValue} />);
		const cardFooterStyle = uut.find('.cs-card-footer').get(0).props.style;
		expect(cardFooterStyle).toHaveProperty('--cs-card-footer-bg-color', bgColorValue);
	});

	it('should set custom padding', () => {
		const uut = shallow(<CSCardFooter padding={paddingValue} />);
		const cardStyle = uut.find('.cs-card-footer').get(0).props.style;
		expect(cardStyle).toHaveProperty('--cs-card-footer-padding', paddingValue);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSCardFooter className={customClass} />);
		const cardFooter = uut.find(`.cs-card-footer.${customClass}`);
		expect(cardFooter).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSCardFooter id={customId} />);
		const cardFooter = uut.find(`.cs-card-footer#${customId}`);
		expect(cardFooter).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSCardFooter><div className="custom-content" /></CSCardFooter>);
		expect(uut.find('.cs-card-footer > .custom-content')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCardFooter data-testid="rest" />);
		const cardFooter = uut.find({ 'data-testid': 'rest' });
		expect(cardFooter).toHaveLength(1);
	});
});
