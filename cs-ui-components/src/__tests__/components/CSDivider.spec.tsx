import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSDivider from '../../components/CSDivider';

const variantHorizontal = 'horizontal';
const variantVertical = 'vertical';

describe('<CSDivider />', () => {
	it('should render the default CSDivider', () => {
		const uut = shallow(<CSDivider variant={variantVertical} />);
		// should render a divider
		const divider = uut.find('.cs-divider');
		expect(divider).toHaveLength(1);
		// variant
		expect(divider.find('.cs-divider-vertical')).toHaveLength(1);
		expect(divider.prop('aria-orientation')).toBe(variantVertical);
	});

	it('should render divider with horizontal variant', () => {
		const uut = shallow(<CSDivider variant={variantHorizontal} />);
		const divider = uut.find('.cs-divider');
		expect(divider.find('.cs-divider-horizontal')).toHaveLength(1);
		expect(divider.prop('aria-orientation')).toBe(variantHorizontal);
	});

	it('should render divider with label', () => {
		const label = 'This is a label';
		const uut = shallow(<CSDivider variant={variantHorizontal} label={label} />);
		expect(uut.find('.cs-divider-with-label > .cs-divider-label').text()).toBe(label);
	});

	it('should render divider with size 100px', () => {
		const size = '100px';
		const uut = shallow(<CSDivider variant={variantVertical} size={size} />);
		expect(uut.find('.cs-divider').get(0).props.style).toHaveProperty('--cs-divider-size', size);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSDivider variant={variantVertical} className={customClass} />);
		expect(uut.find(`.cs-divider.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSDivider variant={variantVertical} id={customId} />);
		expect(uut.find(`.cs-divider#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSDivider variant={variantVertical} data-testid="rest" />);
		const divider = uut.find({ 'data-testid': 'rest' });
		expect(divider).toHaveLength(1);
	});
});
