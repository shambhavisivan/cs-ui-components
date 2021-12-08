import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSPath from '../../components/path/CSPath';
import CSPathItem from '../../components/path/CSPathItem';

const pathItemName = 'Path Item';

describe('<CSPath />', () => {
	it('should render the default CSPath', () => {
		const uut = shallow(<CSPath />);
		const path = uut.find('nav.cs-path > ol.cs-path-wrapper');
		expect(path).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSPath className={customClass} />);
		const path = uut.find(`nav.cs-path.${customClass}`);
		expect(path).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSPath id={id} />);
		const path = uut.find(`nav.cs-path#${id}`);
		expect(path).toHaveLength(1);
	});

	it('should render CSPathItem as children', () => {
		const uut = shallow(
			<CSPath>
				<CSPathItem name="Path item 1" />
			</CSPath>,
		);
		const pathItem = uut.find('CSPathItem');
		expect(pathItem).toHaveLength(1);
	});
});

describe('<CSPathItem />', () => {
	it('should render the default CSPathItem', () => {
		const uut = shallow(<CSPathItem name={pathItemName} />);
		const pathItemLINode = uut.find('li.cs-path-item');
		const pathItemNameNode = uut.find('li.cs-path-item > button.cs-path-item-wrapper > span.cs-path-item-name');
		expect(pathItemLINode.props().title).toBe(pathItemName);
		expect(pathItemNameNode.text()).toBe(pathItemName);
	});

	it('should render active path list item', () => {
		const uut = shallow(<CSPathItem name={pathItemName} active />);
		const pathListItem = uut.find('li.cs-path-item-active');
		const pathItemButton = uut.find('button.cs-path-item-wrapper');
		expect(pathListItem).toHaveLength(1);
		expect(pathItemButton.prop('aria-current')).toBeTruthy();
	});

	it('should render disabled path list item', () => {
		const uut = shallow(<CSPathItem name={pathItemName} disabled />);
		const pathItemButton = uut.find('button.cs-path-item-wrapper');
		expect(pathItemButton.prop('disabled')).toBeTruthy();
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSPathItem name={pathItemName} onClick={handleClickMock} />);
		const pathItemButton = uut.find('button.cs-path-item-wrapper');
		pathItemButton.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should render path list item with success status', () => {
		const uut = shallow(<CSPathItem name={pathItemName} status="success" />);
		const pathListItem = uut.find('li.cs-path-item-success');
		const pathListItemIcon = uut.find('CSIcon');
		expect(pathListItem).toHaveLength(1);
		expect(pathListItemIcon.prop('name')).toBe('check');
		expect(pathListItemIcon.prop('color')).toBe('var(--cs-path-item-icon)');
	});

	it('should render path list item with error status', () => {
		const uut = shallow(<CSPathItem name={pathItemName} status="error" />);
		const pathListItem = uut.find('li.cs-path-item-error');
		const pathItemButton = uut.find('button.cs-path-item-wrapper');
		const pathListItemIcon = uut.find('CSIcon');
		expect(pathListItem).toHaveLength(1);
		expect(pathItemButton.prop('aria-invalid')).toBeTruthy();
		expect(pathListItemIcon.prop('name')).toBe('warning');
		expect(pathListItemIcon.prop('color')).toBe('var(--cs-path-item-icon)');
	});

	it('should render path list item with warning status', () => {
		const uut = shallow(<CSPathItem name={pathItemName} status="warning" />);
		const pathListItem = uut.find('li.cs-path-item-warning');
		const pathListItemIcon = uut.find('CSIcon');
		expect(pathListItem).toHaveLength(1);
		expect(pathListItemIcon.prop('name')).toBe('warning');
		expect(pathListItemIcon.prop('color')).toBe('var(--cs-path-item-warning-icon)');
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSPathItem name={pathItemName} className={customClass} />);
		const pathListItem = uut.find(`.cs-path-item.${customClass}`);
		expect(pathListItem).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSPathItem name={pathItemName} id={id} />);
		const pathListItem = uut.find(`.cs-path-item#${id}`);
		expect(pathListItem).toHaveLength(1);
	});
});
