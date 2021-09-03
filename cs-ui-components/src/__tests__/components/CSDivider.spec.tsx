import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSDivider from '../../components/CSDivider';

describe('<CSDivider />', () => {
	it('should render divider with vertical variant', () => {
		const uut = shallow(<CSDivider variant="vertical" />);
		expect(uut.find('.cs-divider-vertical')).toHaveLength(1);
	});

	it('should render divider with horizontal variant', () => {
		const uut = shallow(<CSDivider variant="horizontal" />);
		expect(uut.find('.cs-divider-horizontal')).toHaveLength(1);
	});

	it('should render divider with label', () => {
		const label = 'This is a label';
		const uut = shallow(<CSDivider variant="horizontal" label={label} size="25rem" />);
		expect(uut.find('.cs-divider-horizontal.cs-divider-with-label')).toHaveLength(1);
		expect(uut.find('.cs-divider-with-label > .cs-divider-label').text()).toBe(label);
	});

	it('should render divider with size 100px', () => {
		const size = '100px';
		const uut = shallow(<CSDivider variant="vertical" size={size} />);
		expect(uut.find('.cs-divider').get(0).props.style).toHaveProperty('--cs-divider-size', size);
	});

	it('should render divider with custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSDivider variant="vertical" className={customClass} />);
		expect(uut.find(`.cs-divider.${customClass}`)).toHaveLength(1);
	});

	it('should render divider with custom id', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSDivider variant="vertical" id={customId} />);
		expect(uut.find(`.cs-divider#${customId}`)).toHaveLength(1);
	});
});
