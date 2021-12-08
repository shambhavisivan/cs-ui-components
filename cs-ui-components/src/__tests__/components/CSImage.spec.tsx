import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSImage from '../../components/CSImage';
import Logo from '../../images/index';

const defaultType = 'logo';

describe('<CSImage />', () => {
	it('should render the default CSImage', () => {
		const color = 'purple';
		const variant = 'initial';
		const uut = shallow(<CSImage type={defaultType} />);
		// Should render an image
		const image = uut.find('img.cs-image');
		expect(image).toHaveLength(1);
		// color
		expect(image.props().src).toBe(Logo[`cs-${defaultType}-${color}-${variant}`]);
		// variant
		expect(image.prop('alt')).toBe(`${defaultType}-${color}-${variant}`);
		// height
		expect(image.props().style).toHaveProperty('--cs-image-height', undefined);
		// width
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

	it('should set custom height', () => {
		const height = '10px';
		const uut = shallow(<CSImage type={defaultType} height={height} />);
		const image = uut.find('img.cs-image');
		expect(image.props().style).toHaveProperty('--cs-image-height', height);
	});

	it('should set custom width', () => {
		const width = '10px';
		const uut = shallow(<CSImage type={defaultType} width={width} />);
		const image = uut.find('img.cs-image');
		expect(image.props().style).toHaveProperty('--cs-image-width', width);
	});

	it('should set aria-labelledby attribute', () => {
		const description = 'long description';
		const uut = shallow(<CSImage type={defaultType} longDescription={description} />);
		const imageDescription = uut.find('img.cs-image + .cs-aria-description');
		const image = uut.find('img.cs-image');
		expect(imageDescription.text()).toBe(description);
		expect(image.prop('aria-labelledby')).toEqual(imageDescription.prop('id'));
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSImage type={defaultType} className={customClass} />);
		const image = uut.find(`img.cs-image.${customClass}`);
		expect(image).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSImage type={defaultType} id={customId} />);
		const image = uut.find(`img.cs-image#${customId}`);
		expect(image).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSImage type={defaultType} data-testid="rest" />);
		const image = uut.find({ 'data-testid': 'rest' });
		expect(image).toHaveLength(1);
	});
});
