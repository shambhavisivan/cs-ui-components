import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSDivider from '../../components/CSDivider';

const variantHorizontal = 'horizontal';
const variantVertical = 'vertical';

describe('<CSDivider />', () => {
	it('should render divider with vertical variant', () => {
		const uut = shallow(<CSDivider variant={variantVertical} />);
		expect(uut.find('.cs-divider-vertical')).toHaveLength(1);
	});

	it('should render divider with horizontal variant', () => {
		const uut = shallow(<CSDivider variant={variantHorizontal} />);
		expect(uut.find('.cs-divider-horizontal')).toHaveLength(1);
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
