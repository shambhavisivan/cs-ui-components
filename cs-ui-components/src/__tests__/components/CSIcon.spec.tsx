import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSIcon from '../../components/CSIcon';

const name = 'video';
const origin = 'cs';
const color = 'rgb(74, 38, 171)';
const size = '3rem';
const title = 'title';
const customClass = 'custom-br-mint';
const customId = 'custom-id';

describe('<CSIcon />', () => {
	it('should render icon with name', () => {
		const uut = shallow(<CSIcon name={name} />);
		expect(uut.find('use').props().href).toBe('#cssfi-video');
	});

	it('should render icon with color', () => {
		const uut = shallow(<CSIcon name={name} color={color} />);
		expect(uut.find('.cs-icon').props().style).toHaveProperty('--cs-icon-c', color);
		expect(uut.find('.cs-icon').props().style).toHaveProperty('--cs-main-header-neutral-icon', color);
	});

	it('should render icon frame', () => {
		const uut = shallow(<CSIcon name={name} frame />);
		expect(uut.find('.cs-icon-frame')).toHaveLength(1);
	});

	it('should render icon with slds origin', () => {
		const uut = shallow(<CSIcon name={name} />);
		expect(uut.find('use').props().href).toContain('#cssfi');
	});

	it('should render icon with cs origin', () => {
		const uut = shallow(<CSIcon origin={origin} name="table" />);
		expect(uut.find('use').props().href).toContain('#csi');
	});

	it('should render icon with custom value for --cs-icon-rotate', () => {
		const uut = shallow(<CSIcon name={name} rotate={45} />);
		expect(uut.find('.cs-icon').props().style).toHaveProperty('--cs-icon-rotate', '45deg');
	});

	it('should render icon with custom size', () => {
		const uut = shallow(<CSIcon name={name} size={size} />);
		expect(uut.find('.cs-icon').props().style).toHaveProperty('--cs-icon-size', size);
	});

	it('should render a spinning icon', () => {
		const uut = shallow(<CSIcon name={name} spin />);
		expect(uut.find('.cs-icon-spin')).toHaveLength(1);
	});

	it('should render icon with title', () => {
		const uut = shallow(<CSIcon name={name} title={title} />);
		expect(uut.find('title').text()).toBe(title);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSIcon name={name} className={customClass} />);
		expect(uut.find(`.cs-icon.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSIcon name={name} id={customId} />);
		expect(uut.find(`.cs-icon#${customId}`)).toHaveLength(1);
	});
});
