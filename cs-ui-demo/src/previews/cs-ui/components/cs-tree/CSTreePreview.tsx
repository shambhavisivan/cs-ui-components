import React, { useState } from 'react';
import { CSTree, CSTreeItemWithMetaInterface, CSChip, CSButton } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSTreeAccessibility from './cs-tree-accessibility';
import CSTreeProps from './cs-tree-props';
import CSTreeItemAttributes from './cs-tree-item-attributes';

const items = [{
	key: 'zagreb',
	render: 'Zagreb'
}, {
	key: 'chennai',
	render: 'Chennai'
}, {
	key: 'leeds',
	render: 'Leeds'
}];

const CSTreePreview = () => {
	const [selectedKeys, setSelectedKeys] = useState<Array<React.ReactText>>([]);
	const [indeterminateSelectedKeys, setIndeterminateSelectedKeys] = useState<Array<React.ReactText>>([]);
	const [activeKey, setActiveKey] = useState<React.ReactText>();

	return (
		<CSD.Page
			title="Tree"
			accessible="yes"
			accessibility={CSTreeAccessibility}
			tables={[CSTreeProps, CSTreeItemAttributes]}
			routePrefix="cs-ui"
		>
			<CSD.Heading>General Props</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Base Usage</CSD.Heading>
				<CSD.Text>
					Trees represent the visualization of a structure hierarchy.
					It contains items which can be interactive, selectable, as well as nested and expanded or collapsed.
				</CSD.Text>
				<CSD.Text>
					Tree items are key-value pair objects described with the `CSTreeItemInterface` interface.
					An item's content is defined in the `render` attribute, which takes on primitives such as
					strings, numbers or more complex structures such as React elements or callback functions.
				</CSD.Text>
				<CSD.Text>
					It is necessary to provide a unique key to the item object to allow delta updates and better performance.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items']}
					code={`
						const items = [{
							key: 'zagreb',
							render: 'Zagreb'
						}, {
							key: 'chennai',
							render: 'Chennai'
						}, {
							key: 'leeds',
							render: 'Leeds'
						}];

						<CSTree items={items} />
					`}
				>
					<CSTree items={items} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to CSTree
					using the `className` and `id` props respectively.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'id', 'className']}
					code={`
						<CSTree
							items={items}
							id="custom-id"
							className="custom-br-purple"
						/>
					`}
				>
					<CSTree
						items={items}
						id="custom-id"
						className="csd-custom-br-mint"
					/>
				</CSD.Preview>
				<CSD.Text>
					Classes can also be applied on specific items
					by setting the `className` attribute on them.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render', 'className']}
					code={`
						<CSTree
							items={[{
								key: 'london',
								render: 'London',
								className: 'csd-custom-br-mint'
							}, ...items]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'london',
							render: 'London',
							className: 'csd-custom-br-mint'
						}, ...items]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Item Controls</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Item Height</CSD.Heading>
				<CSD.Text>
					Controlling item height on the tree level can be achieved with the `itemHeight` prop,
					which accepts a string with a valid CSS max-height value.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'itemHeight']}
					code={`<CSTree items={items} itemHeight="4rem" />`}
				>
					<CSTree items={items} itemHeight="4rem" />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Rendering Items</CSD.Heading>
				<CSD.Text>
					An item's content is set in the `render` attribute.
					It can accept primitives such as `string` or `number`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render']}
					code={`
						<CSTree
							items={[{
								key: 'zagreb',
								render: 'Zagreb'
							}, {
								key: 'chennai',
								render: 'Chennai'
							}, {
								key: 'leeds',
								render: 'Leeds'
							}]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'zagreb',
							render: 'Zagreb'
						}, {
							key: 'chennai',
							render: 'Chennai'
						}, {
							key: 'leeds',
							render: 'Leeds'
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					It can also accept a renderable React element.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render']}
					code={`
						<CSTree
							items={[{
								key: 'zagreb',
								render: <CSChip text="Zagreb" />
							}, {
								key: 'chennai',
								render: <CSChip text="Chennai" />
							}, {
								key: 'leeds',
								render: <CSChip text="Leeds" />
							}]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'zagreb',
							render: <CSChip text="Zagreb" />
						}, {
							key: 'chennai',
							render: <CSChip text="Chennai" />
						}, {
							key: 'leeds',
							render: <CSChip text="Leeds" />
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					On top of that, it also with with callback functions
					which pass down the `item` object with the `meta`
					attribute and return a renderable React element.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render']}
					code={`
						const renderChip = (item: CSTreeItemWithMetaInterface) => <CSChip text={item.key as string} />;

						<CSTree
							items={[{
								key: 'zagreb',
								render: renderChip
							}, {
								key: 'chennai',
								render: renderChip
							}, {
								key: 'leeds',
								render: renderChip
							}]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'zagreb',
							render: (item: CSTreeItemWithMetaInterface) => <CSChip text={item.key as string} />
						}, {
							key: 'chennai',
							render: (item: CSTreeItemWithMetaInterface) => <CSChip text={item.key as string} />
						}, {
							key: 'leeds',
							render: (item: CSTreeItemWithMetaInterface) => <CSChip text={item.key as string} />
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Actions</CSD.Heading>
				<CSD.Text>
					Tree items support rendering helper buttons
					on the right-hand-side. These represent actions that
					can be performed in or for a particular item. Each item
					can take an `action` attribute, which is an array of `CSButtonProps`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					consoleAlert
					related={['key', 'render', 'actions']}
					code={`
						<CSTree
							items={[{
								key: 'london',
								render: 'London',
								actions: [{
									label: 'Add',
									onClick: console.log,
									iconName: 'add'
								}, {
									label: 'Call',
									onClick: console.log,
									iconName: 'call'
								}]
							}, ...items]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'london',
							render: 'London',
							actions: [{
								label: 'Add',
								onClick: console.log,
								iconName: 'add'
							}, {
								label: 'Call',
								onClick: console.log,
								iconName: 'call'
							}]
						}, ...items]}
					/>
				</CSD.Preview>
				<CSD.Text>
					Trees can sometimes might have a maximum height
					they can take up and the actions might get in the way of the content.
					In those cases, the `displayActionsOnHover` prop can be set to `true` to
					only show actions when an item is hovered or focused.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					consoleAlert
					related={['items', 'displayActionsOnHover']}
					code={`
						<CSTree
							displayActionsOnHover
							items={[{
								key: 'london',
								render: 'London',
								actions: [{
									label: 'Add',
									onClick: console.log,
									iconName: 'add'
								}, {
									label: 'Call',
									onClick: console.log,
									iconName: 'call'
								}]
							}, ...items]}
						/>
					`}
				>
					<CSTree
						displayActionsOnHover
						items={[{
							key: 'london',
							render: 'London',
							actions: [{
								label: 'Add',
								onClick: console.log,
								iconName: 'add'
							}, {
								label: 'Call',
								onClick: console.log,
								iconName: 'call'
							}]
						}, ...items]}
					/>
				</CSD.Preview>
				<CSD.Text>
					This feature can also be set on a per-item basis
					by overriding the prop with the `displayActionsOnHover` attribute.
				</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Item Metadata</CSD.Heading>
				<CSD.Text>
					When defined, each item is described by its corresponding `CSTreeItemInterface` object.
					This object is passed on to callback functions that run on every item.
					This way, referencing the keys and other attributes becomes much simpler in those functions.
					Even though the raw data can be very useful, the item object gets expanded with the
					`meta` attribute before it is passed on to the callback function and it
					is typed as `CSTreeItemWithMetaInterface`. The `meta` attribute contains precomputed
					values and control functions that can be used to read the managed state of the current item
					or even control it. These are the `meta` object attributes:
				</CSD.Text>
				<CSD.List>
					<CSD.ListItem>`level` represents the level inside a tree hierarchy. Root elements are of level `0`, while their immediate children are of level `1`.</CSD.ListItem>
					<CSD.ListItem>`active` is a boolean attribute that is set to `true` when the current item is in the active state.</CSD.ListItem>
					<CSD.ListItem>`selected` is a boolean attribute that is set to `true` when the current item is selected.</CSD.ListItem>
					<CSD.ListItem>`indeterminate` is a boolean attribute that is set to `true` when the checkbox in the current item is set to indeterminate.</CSD.ListItem>
					<CSD.ListItem>`readOnly` is a boolean attribute that is set to `true` when the checkbox in the current item is set to read only.</CSD.ListItem>
					<CSD.ListItem>`expanded` is a boolean attribute that is set to `true` when the current item is expanded.</CSD.ListItem>
					<CSD.ListItem>`setExpanded` is a function that controls the children visibility by accepting an explicit boolean parameter.</CSD.ListItem>
					<CSD.ListItem>`toggleExpanded` is a function that toggles the children visibility by flipping the current visibility state with React state asynchronicity in mind.</CSD.ListItem>
				</CSD.List>
				<CSD.Code>
					{`
						interface CSTreeItemMetaInterface {
							level: number;
							active: boolean;
							selected: boolean;
							indeterminate: boolean;
							readOnly: boolean;
							expanded: boolean;
							setExpanded: (expanded: boolean) => void;
							toggleExpanded: () => void;
						}
					`}
				</CSD.Code>
			</CSD.Section>
			<CSD.Heading>Hierarchy</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Basic Hierarchy</CSD.Heading>
				<CSD.Text>
					The `item` object is typed as recursive with regards to the `children` attribute.
					The `children` attribute also accepts an array of `CSTreeItemInterface` objects and renders them as child items
					Since the object is recursive, the tree sets no limit on how deep items can be nested.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render', 'children']}
					code={`
						<CSTree
							items={[{
								key: 'london',
								render: 'London',
								children: items
							}]}
						/>
					`}
				>
					<CSTree
						items={[{
							key: 'london',
							render: 'London',
							children: items
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					By default, child items are collapsed
					This can be overridden on a global or a per-item scale.
					Setting the `defaultCollapsed` prop to `false` will show children immediately.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'defaultCollapsed']}
					code={`
						<CSTree
							defaultCollapsed={false}
							items={[{
								key: 'london',
								render: 'London',
								children: items
							}]}
						/>
					`}
				>
					<CSTree
						defaultCollapsed={false}
						items={[{
							key: 'london',
							render: 'London',
							children: items
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					Adjusting default collapsibility per-item can be done by setting
					the `defaultCollapsed` attribute on the item object.
					This attribute will override the tree prop,
					but it will not be inherited to the children of the current item.
				</CSD.Text>
				<CSD.Text>
					Furthermore, `defaultCollapsed` and `collapsible`
					can be combined to show a static tree with all items visible at once.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'defaultCollapsed', 'collapsible']}
					code={`
						<CSTree
							collapsible={false}
							defaultCollapsed={false}
							items={[{
								key: 'london',
								render: 'London',
								children: items
							}]}
						/>
					`}
				>
					<CSTree
						collapsible={false}
						defaultCollapsed={false}
						items={[{
							key: 'london',
							render: 'London',
							children: items
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Hierarchy Toggles</CSD.Heading>
				<CSD.Text>
					Default controls can be added by setting the `collapsible` prop
					to `false` and making use of the `toggleExpanded` method inside the `meta` attribute of the item.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'collapsible']}
					code={`
						<CSTree
							items={[{
								key: 'london',
								render: 'London',
								children: items
							}]}
						/>
					`}
				>
					<CSTree
						collapsible={false}
						items={[{
							key: 'parent',
							children: items,
							render: (item: CSTreeItemWithMetaInterface) => (
								<CSButton
									label={item.meta.expanded ? 'Collapse' : 'Expand'}
									onClick={item.meta.toggleExpanded}
								/>
							)
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Selectability</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Basic Checkbox Selection</CSD.Heading>
				<CSD.Text>
					Unlike collapsibility, which manages state under the hood,
					the selectability aspect of trees is completely stateless.
					This means that determining tree interactions and
					behaviour is left to the developer. Because of this,
					it is possible to support a wide array of possibilities for
					triggers and callbacks when selecting items.
				</CSD.Text>
				<CSD.Text>
					The `selectable` prop shows checkboxes
					and enables accessibility interactions
					by adding keyboard navigation and visual indicators.
				</CSD.Text>
				<CSD.Text>
					Since trees keep no state, it is necessary
					to manage an external state and pass an array of
					corresponding item keys in the `selectedKeys` prop.
					Unlike the data table, tree does not  accept
					individual keys as trees are always intended to
					work with multiselect use cases. If you wish to
					use a tree with singe-select, please refer to
					the <CSD.Link path="cs-ui/tree#active-item-selection">Active Item Selection</CSD.Link> section.
				</CSD.Text>
				<CSD.Text>
					The behaviour for selecting items can
					be described in the `onSelectChange` prop,
					which provides access to the item object of the `CSTreeItemWithMetaInterface` type.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'selectedKeys', 'onSelectChange', 'selectable']}
					code={`
						const handleSelectChange = (event: React.ChangeEvent, item: CSTreeItemWithMetaInterface) => {
							setSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(item.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
								newSelectedKeys.splice(prevIndex, 1);
							} else {
								newSelectedKeys.push(item.key);
							}
								return newSelectedKeys;
							});
						}

						<CSTree
							items={items}
							selectable
							selectedKeys={selectedKeys}
							onSelectChange={handleSelectChange}
						/>
					`}
				>
					<CSTree
						items={items}
						selectable
						selectedKeys={selectedKeys}
						onSelectChange={(event: React.ChangeEvent, item: CSTreeItemWithMetaInterface) => {
							setSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(item.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
									newSelectedKeys.splice(prevIndex, 1);
								} else {
									newSelectedKeys.push(item.key);
								}
								return newSelectedKeys;
							});
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Advanced Checkbox Selection</CSD.Heading>
				<CSD.Text>
					Besides setting `selectedKeys`,
					it is also possible to set `indeterminateKeys` and `readOnlyKeys`.
					Because the selection is stateless,
					it is very easy to implement custom behaviour and per-use-case logic.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'indeterminateKeys', 'selectable', 'selectedKeys', 'onSelectChange']}
					code={`
						<CSTree
							items={items}
							selectable
							selectedKeys={selectedKeys}
							indeterminateKeys={['zagreb']}
							onSelectChange={handleSelectChange}
						/>
					`}
				>
					<CSTree
						items={items}
						selectable
						selectedKeys={indeterminateSelectedKeys}
						indeterminateKeys={['zagreb']}
						onSelectChange={(event: React.ChangeEvent, item: CSTreeItemWithMetaInterface) => {
							setIndeterminateSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(item.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
									newSelectedKeys.splice(prevIndex, 1);
								} else {
									newSelectedKeys.push(item.key);
								}
								return newSelectedKeys;
							});
						}}
					/>
				</CSD.Preview>
				<CSD.Text>
					As shown above, `indeterminateKeys` will override
					`selectedKeys`, but `readOnlyKeys` work well in combination with the others.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'indeterminateKeys', 'selectable', 'selectedKeys', 'readOnlyKeys']}
					code={`
						<CSTree
							items={items}
							selectable
							selectedKeys={['chennai']}
							indeterminateKeys={['zagreb']}
							readOnlyKeys={['zagreb', 'chennai', 'leeds']}
						/>
					`}
				>
					<CSTree
						items={items}
						selectable
						selectedKeys={['chennai']}
						indeterminateKeys={['zagreb']}
						readOnlyKeys={['zagreb', 'chennai', 'leeds']}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Restricting Selectability</CSD.Heading>
				<CSD.Text>
					When the tree is marked as selectable,
					all the items inherit the selectable property.
					That can be overridden on a per-item basis by setting the
					`selectable` attribute on the item object. The item value will
					only override the global value when the global value is set to `true`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeItemAttributes}
					related={['key', 'render', 'selectable']}
					code={`
						<CSTree
							selectable
							items={[{
								key: 'london',
								render: 'London',
								selectable: false
							}, ...items]}
						/>
					`}
				>
					<CSTree
						selectable
						items={[{
							key: 'london',
							render: 'London',
							selectable: false
						}, ...items]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Active Item Selection</CSD.Heading>
				<CSD.Text>
					An alternative selection mode is the ability
					to select a single active tree item. This is useful
					for navigation or highlight purposes and can be done
					by passing the active item's key to the `activeKey` prop.
				</CSD.Text>
				<CSD.Text>
					The active feature is intended to be used with the `onItemClick`
					prop, which triggers a callback when an item has been clicked.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSTreeProps}
					related={['items', 'activeKey', 'onItemClick']}
					code={`
						const handleItemClick = (event: React.MouseEvent, item: CSTreeItemWithMetaInterface) => {
							setActiveKey(item.key);
						};

						<CSTree
							items={items}
							selectable
							activeKey={activeKey}
							onItemClick={handleItemClick}
						/>
					`}
				>
					<CSTree
						items={items}
						activeKey={activeKey}
						onItemClick={(event: React.MouseEvent, item: CSTreeItemWithMetaInterface) => {
							setActiveKey(item.key);
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSTreePreview;
