import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSLabel from '../../components/CSLabel';

const labelContent = 'This is a label';

describe('<CSLabel />', () => {
	it('should render the default CSLabel', () => {
		const uut = shallow(<CSLabel label={labelContent} />);
		// Should render a label
		const label = uut.find('.cs-label');
		expect(label).toHaveLength(1);
		expect(label.text()).toBe(labelContent);
		// required
		expect(uut.find('.cs-label-required')).toHaveLength(0);
	});

	it('should pass helpText to CSTooltip', () => {
		const helpText = 'Help text example';
		const uut = shallow(<CSLabel label={labelContent} helpText={helpText} />);
		const tooltip = uut.find('.cs-tooltip-group > CSTooltip');
		expect(tooltip.prop('content')).toBe(helpText);
	});

	it('should set htmlFor attribute', () => {
		const htmlFor = 'name';
		const uut = shallow(<CSLabel label={labelContent} htmlFor={htmlFor} />);
		expect(uut.find('.cs-label-wrapper').props().htmlFor).toBe(htmlFor);
	});

	it('should set required attribute', () => {
		const uut = shallow(<CSLabel label={labelContent} required />);
		expect(uut.find('.cs-label-wrapper > .cs-label-required')).toHaveLength(1);
	});

	it('should set title attribute', () => {
		const title = 'Title example on a label';
		const uut = shallow(<CSLabel label={labelContent} title={title} />);
		expect(uut.find('.cs-label-wrapper > .cs-label').props().title).toBe(title);
	});

	it('should pass tooltipPosition to CSTooltip position prop', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSLabel label={labelContent} helpText="Help text example" tooltipPosition={tooltipPosition} />);
		const tooltip = uut.find('.cs-tooltip-group > CSTooltip');
		expect(tooltip.prop('position')).toBe(tooltipPosition);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSLabel label={labelContent} className={customClass} />);
		const labelWrapper = uut.find(`.cs-label-wrapper.${customClass}`);
		expect(labelWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-class';
		const uut = shallow(<CSLabel label={labelContent} id={customId} />);
		const labelWrapper = uut.find(`.cs-label-wrapper#${customId}`);
		expect(labelWrapper).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSLabel label={labelContent} data-testid="rest" />);
		const label = uut.find({ 'data-testid': 'rest' });
		expect(label).toHaveLength(1);
	});
});
