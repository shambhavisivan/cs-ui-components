import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSSkipLink from '../../components/CSSkipLink';

const jumpDestinationValue = 'test';
const href = '#test';

describe('<CSSkipLink />', () => {
	it('should set correct href attribute', () => {
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} />);
		expect(uut.find('.cs-skip-link').props().href).toBe('#test');
	});

	it('should append jumpDestination string to label', () => {
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} />);
		expect(uut.find('.cs-skip-link').text()).toBe(`Jump to ${jumpDestinationValue}`);
	});

	it('should set correct color', () => {
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} color="green" />);
		const skipLinkStyle = uut.find('.cs-skip-link').get(0).props.style;
		expect(skipLinkStyle).toHaveProperty('--cs-skip-link-custom-c', 'green');
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} className={customClass} />);
		const skipLink = uut.find(`.cs-skip-link.${customClass}`);
		expect(skipLink).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} id={customId} />);
		const skipLink = uut.find(`.cs-skip-link#${customId}`);
		expect(skipLink).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSSkipLink href={href} jumpDestination={jumpDestinationValue} data-testid="rest" />);
		const skipLink = uut.find({ 'data-testid': 'rest' });
		expect(skipLink).toHaveLength(1);
	});
});
