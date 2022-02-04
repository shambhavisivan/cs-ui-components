import * as React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import CSTree, { CSTreeItemWithMetaInterface } from '../../components/tree/CSTree';
import {
	CSButtonIconPosition,
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSButtonWidth,
} from '../../components/CSButton';
import { CSIconOrigin } from '../../components/CSIcon';

const items = [{
	key: 'zagreb',
	render: 'Zagreb',
}, {
	key: 'chennai',
	render: 'Chennai',
}, {
	key: 'leeds',
	render: 'Leeds',
}];

// This is meant to be used
// as a generic object for testing
// item specific attributes and
// can be used well with the
// spread syntax to reduce repetition
const item = {
	key: 'london',
	render: 'London',
};
// e.g. this would add an attribute to the item object
// item={[{ ...item, attribute: value }]} corresponding to
// item={[{ key: 'london', render: 'Render', attribute: value }]}
// e.g. this would add this item to existing items
// item={[...items, item]}

// Generate a subset of items
// that can be used to test props
// that should only apply to some items
const itemsSubset = items.slice(0, -1);
// Generate an array f keys from the objects above
const itemKeysSubset = itemsSubset.map((itemSubset) => itemSubset.key);

const actions = [{
	label: 'label 1',
	borderRadius: '1rem',
	btnStyle: 'brand' as CSButtonStyle,
	btnType: 'transparent' as CSButtonType,
	color: '#ffffff',
	disabled: true,
	iconName: 'delete',
	iconColor: '#000000',
	iconOrigin: 'slds' as CSIconOrigin,
	iconSize: '2rem',
	iconPosition: 'right' as CSButtonIconPosition,
	iconRotate: 180,
	labelHidden: true,
	link: 'link 1',
	loading: true,
	onClick: () => {},
	onKeyDown: () => {},
	onMouseDown: () => {},
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	openInNewTab: true,
	routerLink: <></>,
	size: 'xsmall' as CSButtonSize,
	title: 'title 1',
	value: 'value 1',
	width: 'max' as CSButtonWidth,
}, {
	label: 'label 2',
	borderRadius: '0',
	btnStyle: 'outline' as CSButtonStyle,
	btnType: 'default' as CSButtonType,
	color: '#000000',
	disabled: false,
	iconName: 'action',
	iconColor: '#ffffff',
	iconOrigin: 'cs' as CSIconOrigin,
	iconSize: '1rem',
	iconPosition: 'left' as CSButtonIconPosition,
	iconRotate: 0,
	labelHidden: false,
	link: 'link 2',
	loading: false,
	onClick: () => {},
	onKeyDown: () => {},
	onMouseDown: () => {},
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	openInNewTab: false,
	routerLink: <></>,
	size: 'large' as CSButtonSize,
	title: 'title 2',
	value: 'value 2',
	width: 'auto' as CSButtonWidth,
}];

describe('<CSTree />', () => {
	it('should render the default CSTree', () => {
		const uut = shallow(<CSTree items={items} />);
		// should render a tree
		const tree = uut.find('ul.cs-tree');
		expect(tree).toHaveLength(1);
	});

	it('should render an active item', () => {
		const uut = mount(<CSTree items={items} activeKey={items[0].key} />);
		const treeItems = uut.find('CSTreeItem');

		treeItems.forEach((treeItem) => {
			if ((treeItem.prop('item') as any).key === items[0].key) {
				expect(treeItem.find('.cs-tree-item-wrapper.cs-tree-item-active')).toHaveLength(1);
			} else {
				expect(treeItem.find('.cs-tree-item-wrapper.cs-tree-item-active')).toHaveLength(0);
			}
		});
	});

	it('should apply custom height to items', () => {
		const itemHeight = '4rem';
		const uut = shallow(<CSTree items={items} itemHeight={itemHeight} />);
		const tree = uut.find('ul.cs-tree');
		expect(tree.props().style).toHaveProperty('--cs-tree-item-height', itemHeight);
	});

	it('should render strings inside items', () => {
		const uut = mount(<CSTree items={[item]} />);
		expect(uut.find('.cs-tree-item-content').text()).toEqual(item.render);
	});

	it('should render custom elements inside items', () => {
		const className = 'custom-element';
		const uut = mount(<CSTree items={[{ ...item, render: <div className={className} /> }]} />);
		expect(uut.find(`.cs-tree-item-content > .${className}`)).toHaveLength(1);
	});

	it('should execute and render custom callbacks inside items', () => {
		const className = 'custom-function-';
		const render = (currentItem: CSTreeItemWithMetaInterface) => <div className={`${className}${currentItem.key}`} />;
		const uut = mount(<CSTree items={[{ ...item, render }]} />);
		expect(uut.find(`.cs-tree-item-content > .${className}${item.key}`)).toHaveLength(1);
	});

	it('should use a working onItemClick callback', () => {
		const handleItemClick = jest.fn();
		const uut = mount(<CSTree items={items} onItemClick={handleItemClick} />);
		const treeItems = uut.find('CSTreeItem > .cs-tree-item-wrapper');

		treeItems.forEach((treeItem, treeItemIndex) => {
			treeItem.simulate('click');
			expect(handleItemClick).toHaveBeenCalledTimes(treeItemIndex + 1);
		});
	});

	it('should have a custom class name for items', () => {
		const customClass = 'custom-class';
		const uut = mount(<CSTree items={[{ ...item, className: customClass }, ...items]} />);
		expect(uut.find('CSTreeItem > .cs-tree-item-wrapper').first().hasClass(customClass)).toBeTruthy();
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSTree items={items} className={customClass} />);
		const tree = uut.find(`.cs-tree.${customClass}`);
		expect(tree).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSTree items={items} id={customId} />);
		const tree = uut.find(`.cs-tree#${customId}`);
		expect(tree).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const testId = 'test-id';
		const uut = shallow(<CSTree items={items} data-testid={testId} />);
		const tree = uut.find({ 'data-testid': testId });
		expect(tree).toHaveLength(1);
	});
});

describe('<CSTree /> - selectability', () => {
	it('should be selectable', () => {
		const uut = mount(<CSTree items={items} selectable />);
		const tree = uut.find('ul.cs-tree.cs-tree-selectable');
		expect(tree).toHaveLength(1);

		const treeItemCheckboxes = uut.find('CSTreeItem .cs-tree-checkbox > CSCheckbox');
		expect(treeItemCheckboxes).toHaveLength(items.length);
	});

	it('should not be selectable when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, selectable: false }, ...items]} selectable />);
		const treeItemCheckbox = uut.find('CSTreeItem').first().find('CSCheckbox');
		expect(treeItemCheckbox).toHaveLength(0);
	});

	it('should use a working onSelectChange callback', () => {
		const handleSelectChange = jest.fn();
		const uut = mount(<CSTree items={items} selectable onSelectChange={handleSelectChange} />);
		const treeItemCheckbox = uut.find('CSTreeItem CSCheckbox').first();
		treeItemCheckbox.prop('onChange')({ stopPropagation: () => {} } as React.ChangeEvent);
		expect(handleSelectChange).toHaveBeenCalledTimes(1);
	});

	it('should render selected items', () => {
		const uut = mount(<CSTree items={items} selectable selectedKeys={itemKeysSubset} />);
		const treeItems = uut.find('CSTreeItem');

		treeItems.forEach((treeItem) => {
			if (itemKeysSubset.includes((treeItem.prop('item') as any).key)) {
				expect(treeItem.find('CSCheckbox').prop('checked')).toBeTruthy();
				expect(treeItem.find('CSCheckbox').prop('label')).toEqual('Deselect item');
			} else {
				expect(treeItem.find('CSCheckbox').prop('checked')).toBeFalsy();
				expect(treeItem.find('CSCheckbox').prop('label')).toEqual('Select item');
			}
		});
	});

	it('render indeterminate items', () => {
		const uut = mount(<CSTree items={items} selectable indeterminateKeys={itemKeysSubset} />);
		const treeItems = uut.find('CSTreeItem');

		treeItems.forEach((treeItem) => {
			if (itemKeysSubset.includes((treeItem.prop('item') as any).key)) {
				expect(treeItem.find('CSCheckbox').prop('indeterminate')).toBeTruthy();
				expect(treeItem.find('CSCheckbox').prop('label')).toEqual('Indeterminate');
			} else {
				expect(treeItem.find('CSCheckbox').prop('indeterminate')).toBeFalsy();
			}
		});
	});

	it('render read-only items', () => {
		const uut = mount(<CSTree items={items} selectable readOnlyKeys={itemKeysSubset} />);
		const treeItems = uut.find('CSTreeItem');

		treeItems.forEach((treeItem) => {
			if (itemKeysSubset.includes((treeItem.prop('item') as any).key)) {
				expect(treeItem.find('CSCheckbox').prop('readOnly')).toBeTruthy();
			} else {
				expect(treeItem.find('CSCheckbox').prop('readOnly')).toBeFalsy();
			}
		});
	});
});

describe('<CSTree /> - actions', () => {
	it('should render item actions', () => {
		const uut = mount(<CSTree items={[{ ...item, actions }]} />);
		const treeItemActions = uut.find('CSTreeItem CSButtonGroup .cs-tree-actions > CSButton');

		treeItemActions.forEach((treeItemAction, treeItemActionIndex) => {
			Object.entries(actions[treeItemActionIndex]).forEach((action) => {
				expect(JSON.stringify(treeItemAction.prop(action[0]))).toEqual(JSON.stringify(action[1]));
			});
		});
	});

	it('should render item actions on hover', () => {
		const uut = mount(<CSTree items={[{ ...item, actions }]} displayActionsOnHover />);
		const treeShowMore = uut.find('CSTreeItem CSIcon.cs-tree-actions-show-more');
		expect(treeShowMore).toHaveLength(1);
	});

	it('should always render item actions when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, actions, displayActionsOnHover: false }]} displayActionsOnHover />);
		const treeShowMore = uut.find('CSTreeItem CSIcon.cs-tree-actions-show-more');
		expect(treeShowMore).toHaveLength(0);
	});

	it('should render item actions on hover when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, actions, displayActionsOnHover: true }]} displayActionsOnHover={false} />);
		const treeShowMore = uut.find('CSTreeItem CSIcon.cs-tree-actions-show-more');
		expect(treeShowMore).toHaveLength(1);
	});
});

describe('<CSTree /> - hierarchy', () => {
	it('should render children', () => {
		const uut = mount(<CSTree items={[{ ...item, children: items }]} />);
		const treeParentItem = uut.find('CSTreeItem');
		expect(treeParentItem).toHaveLength(1);
		expect((treeParentItem.prop('item') as any).key).toEqual(item.key);
		expect(uut.find('CSTreeGroup')).toHaveLength(1);

		const parentItemWrapper = treeParentItem.find('li.cs-tree-item-wrapper');
		expect(parentItemWrapper.prop('aria-level')).toEqual(1);
		expect(parentItemWrapper.prop('aria-expanded')).toBeFalsy();
		expect(parentItemWrapper.prop('style')).toHaveProperty('--cs-tree-item-offset', '2.25rem');

		const treeExpandButton = treeParentItem.find('CSButton').first();
		expect(treeExpandButton.prop('label')).toEqual('toggle');
		expect(treeExpandButton.prop('iconRotate')).toEqual(-90);

		const treeCollapsedChildren = uut.find('CSTreeItem CSTreeItem');
		expect(treeCollapsedChildren).toHaveLength(0);

		treeExpandButton.simulate('click');

		const treeCollapseButton = uut.find('CSTreeItem CSButton').first();
		expect(treeCollapseButton.prop('label')).toEqual('toggle');
		expect(treeCollapseButton.prop('iconRotate')).toEqual(0);

		const treeExpandedChildren = uut.find('CSTreeItem CSTreeItem');
		expect(treeExpandedChildren).toHaveLength(items.length);

		const treeExpandedChildrenWrapper = treeExpandedChildren.find('li.cs-tree-item-wrapper');
		expect(treeExpandedChildrenWrapper.first().prop('aria-level')).toEqual(2);
		expect(treeExpandedChildrenWrapper.first().prop('style')).toHaveProperty('--cs-tree-item-offset', '3.25rem');

		treeExpandedChildren.forEach((child, childIndex) => {
			expect((child.prop('item') as any).key).toEqual(items[childIndex].key);
		});

		const treeFirstItem = uut.find('CSTreeItem > li.cs-tree-item-wrapper').first();
		expect(treeFirstItem.prop('aria-expanded')).toBeTruthy();
		expect(uut.find('CSTreeGroup')).toHaveLength(2);
	});

	it('should render children as expanded by default', () => {
		const uut = mount(<CSTree items={[{ ...item, children: items }]} defaultCollapsed={false} />);
		const treeFirstItem = uut.find('CSTreeItem > li.cs-tree-item-wrapper').first();
		expect(treeFirstItem.prop('aria-expanded')).toBeTruthy();

		const treeCollapseButton = uut.find('CSTreeItem CSButton').first();
		expect(treeCollapseButton.prop('label')).toEqual('toggle');
		expect(treeCollapseButton.prop('iconRotate')).toEqual(0);

		const treeExpandedChildren = uut.find('CSTreeItem CSTreeItem');
		expect(treeExpandedChildren).toHaveLength(items.length);

		treeCollapseButton.simulate('click');

		const treeExpandButton = uut.find('CSTreeItem CSButton').first();
		expect(treeExpandButton.prop('label')).toEqual('toggle');
		expect(treeExpandButton.prop('iconRotate')).toEqual(-90);

		const treeCollapsedChildren = uut.find('CSTreeItem CSTreeItem');
		expect(treeCollapsedChildren).toHaveLength(0);

		const treeParentItem = uut.find('CSTreeItem > li.cs-tree-item-wrapper').first();
		expect(treeParentItem.prop('aria-expanded')).toBeFalsy();
	});

	it('should render children as collapsed by default when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, defaultCollapsed: true, children: items }]} defaultCollapsed={false} />);
		expect(uut.find('CSTreeItem CSTreeItem')).toHaveLength(0);
	});

	it('should render children as expanded by default when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, defaultCollapsed: false, children: items }]} defaultCollapsed />);
		expect(uut.find('CSTreeItem CSTreeItem')).toHaveLength(items.length);
	});

	it('should render children without toggle controls', () => {
		const uut = mount(<CSTree items={[{ ...item, children: items }]} defaultCollapsed={false} collapsible={false} />);
		expect(uut.find('CSTreeItem CSButton')).toHaveLength(0);
		expect(uut.find('CSTreeItem CSTreeItem')).toHaveLength(items.length);
		expect(uut.find('CSTreeItem li.cs-tree-item-wrapper').first().prop('style')).toHaveProperty('--cs-tree-item-offset', '0.75rem');
		expect(uut.find('CSTreeItem CSTreeItem li.cs-tree-item-wrapper').first().prop('style')).toHaveProperty('--cs-tree-item-offset', '1.75rem');
	});

	it('should render children with toggle controls when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, collapsible: true, children: items }]} collapsible={false} />);
		expect(uut.find('CSTreeItem CSButton').first()).toHaveLength(1);
	});

	it('should render children without toggle controls when overridden by item settings', () => {
		const uut = mount(<CSTree items={[{ ...item, collapsible: false, children: items }]} collapsible />);
		expect(uut.find('CSTreeItem CSButton')).toHaveLength(0);
	});
});
