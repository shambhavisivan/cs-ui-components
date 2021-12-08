import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSSection from '../../components/CSSection';

const title = 'section title';

describe('<CSSection />', () => {
	it('should render the default CSSection', () => {
		const uut = shallow(<CSSection title={title} />);
		const sectionTitle = uut.find('.cs-section-title');
		expect(sectionTitle).toHaveLength(1);
		expect(sectionTitle.text()).toBe(title);
	});

	it('should apply background color to section header', () => {
		const uut = shallow(<CSSection title={title} bgColor="#3cdbc0" />);
		// style property is on .cs-section although css var is utilized on .cs-section-header
		const section = uut.find('.cs-section').get(0).props.style;
		expect(section).toHaveProperty('--cs-section-header-bg', '#3cdbc0');
	});

	it('should set custom border radius', () => {
		const borderRadiusValue = '1rem';
		const uut = shallow(<CSSection title={title} borderRadius={borderRadiusValue} />);
		// Style property is on .cs-section although css var is utilized on .cs-section-header
		const section = uut.find('.cs-section').get(0).props.style;
		expect(section).toHaveProperty('--cs-section-border-radius', borderRadiusValue);
	});

	it('should be collapsible', () => {
		const uut = shallow(<CSSection title={title} collapsible />);
		const sectionToggleButton = uut.find('.cs-section-button');
		expect(sectionToggleButton).toHaveLength(1);
	});

	it('should be closed by default and not render section body', () => {
		const uut = shallow(<CSSection title={title} collapsible defaultClosed />);
		const sectionBody = uut.find('.cs-section-body');
		expect(sectionBody).toHaveLength(0);
		const sectionToggleIcon = uut.find('.cs-section-header CSIcon');
		expect(sectionToggleIcon.prop('rotate')).toBe(0);
		const sectionToggleButton = uut.find('.cs-section-button');
		expect(sectionToggleButton.props()['aria-expanded']).toBeFalsy();
	});

	it('should render section with error styles', () => {
		const uut = shallow(<CSSection title={title} error />);
		const sectionHeader = uut.find('.cs-section-header.cs-section-header-error');
		expect(sectionHeader).toHaveLength(1);
	});

	it('should pass errorMessage to CSTooltip', () => {
		const errorMessageText = 'This section has an error';
		const uut = shallow(<CSSection title={title} error errorMessage={errorMessageText} />);
		const sectionErrorTooltip = uut.find('.cs-section-header > CSTooltip');
		// Make sure CSTooltip exists in section header
		expect(sectionErrorTooltip).toHaveLength(1);
		// Make sure CSTooltip received correct value for content prop
		expect(sectionErrorTooltip.prop('content')).toBe(errorMessageText);
	});

	it('should hide section header', () => {
		const uut = shallow(<CSSection title={title} hideSectionHeader />);
		const sectionHeader = uut.find('.cs-section-header');
		expect(sectionHeader).toHaveLength(0);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSection title={title} className={customClass} />);
		const section = uut.find(`.cs-section.${customClass}`);
		expect(section).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSSection title={title} id={customId} />);
		const section = uut.find(`.cs-section#${customId}`);
		expect(section).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSSection title={title}><div className="custom-child" /></CSSection>);
		expect(uut.find('.cs-section-body > .custom-child')).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSSection title={title} data-testid="rest" />);
		const section = uut.find({ 'data-testid': 'rest' });
		expect(section).toHaveLength(1);
	});
});
