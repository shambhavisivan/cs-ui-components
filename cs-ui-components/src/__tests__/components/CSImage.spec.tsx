import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSImage from '../../components/CSImage';
import Logo from '../../images/index';

describe('<CSImage />', () => {
	it('should render the default image', () => {
		const type = 'logo';
		const color = 'purple';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
		expect(image.props().style).toHaveProperty('--cs-image-height', undefined);
		expect(image.props().style).toHaveProperty('--cs-image-width', undefined);
	});

	it('should render purple initial logo image', () => {
		const type = 'logo';
		const color = 'purple';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render white initial logo image', () => {
		const type = 'logo';
		const color = 'white';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render purple initial logomark image', () => {
		const type = 'logomark';
		const color = 'purple';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render white initial logomark image', () => {
		const type = 'logomark';
		const color = 'white';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render black initial logomark image', () => {
		const type = 'logomark';
		const color = 'black';
		const variant = 'initial';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render purple reversed logomark image', () => {
		const type = 'logomark';
		const color = 'purple';
		const variant = 'reversed';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render black reversed logomark image', () => {
		const type = 'logomark';
		const color = 'black';
		const variant = 'reversed';
		const uut = shallow(<CSImage type={type} color={color} variant={variant} />);
		const image = uut.find('img.cs-image');
		expect(image.props().src).toBe(Logo[`cs-${type}-${color}-${variant}`]);
		expect(image.prop('alt')).toBe(`${type}-${color}-${variant}`);
	});

	it('should render image with custom height', () => {
		const type = 'logo';
		const height = '10px';
		const uut = shallow(<CSImage type={type} height={height} />);
		const image = uut.find('img.cs-image');
		expect(image.props().style).toHaveProperty('--cs-image-height', height);
	});

	it('should render image with custom width', () => {
		const type = 'logo';
		const width = '10px';
		const uut = shallow(<CSImage type={type} width={width} />);
		const image = uut.find('img.cs-image');
		expect(image.props().style).toHaveProperty('--cs-image-width', width);
	});

	it('should render image with long description', () => {
		const type = 'logo';
		const description = 'long description';
		const uut = shallow(<CSImage type={type} longDescription={description} />);
		const imageDescription = uut.find('img.cs-image + .cs-aria-description');
		const image = uut.find('img.cs-image');
		expect(imageDescription.text()).toBe(description);
		expect(image.prop('aria-labelledby')).toEqual(imageDescription.prop('id'));
	});

	it('should have a custom class name', () => {
		const type = 'logo';
		const customClass = 'custom-class';
		const uut = shallow(<CSImage type={type} className={customClass} />);
		const image = uut.find(`img.cs-image.${customClass}`);
		expect(image).toHaveLength(1);
	});

	it('should have a custom id', () => {
		const type = 'logo';
		const customId = 'custom-id';
		const uut = shallow(<CSImage type={type} id={customId} />);
		const image = uut.find(`img.cs-image#${customId}`);
		expect(image).toHaveLength(1);
	});
});
