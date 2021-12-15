import React from 'react';
import { CSButton, CSChip, CSTree, CSButtonGroup } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSTreePreviewState {
	activeKey?: React.ReactText;
	selectedKeys: Array<React.ReactText>;
	readOnlyKeys: Array<React.ReactText>;
	indeterminateKeys: Array<React.ReactText>;
}

class CSTreePreview extends React.Component<{}, CSTreePreviewState> {
	state: CSTreePreviewState = {
		selectedKeys: [],
		readOnlyKeys: [],
		indeterminateKeys: []
	};

	getDoc = () => ({
		name: 'Tree',
		usage: 'Tree is visualization of a structure hierarchy.',
		accessible: 'yes',
		components: [
			{
				name: 'CSTree',
				examples: [
					{
						propName: 'newTree',
						variations: [
							{
								component: <CSTree
									selectable
									activeKey={this.state.activeKey}
									selectedKeys={this.state.selectedKeys}
									readOnlyKeys={this.state.readOnlyKeys}
									indeterminateKeys={this.state.indeterminateKeys}
									onItemClick={(event: any, item: any) => {
										this.setState((prevState: any) => ({
											activeKey: prevState.activeKey === item.key ? undefined : item.key
										}));
									}}
									onSelectChange={(event: any, item: any) => {
										if (item.meta.level === 0) {
											this.setState((prevState: any) => {
												const prevIndex = prevState.selectedKeys.indexOf(item.key);
												const newSelectedKeys = prevState.selectedKeys;
												if (prevIndex >= 0) {
													newSelectedKeys.splice(prevIndex, 1);
												} else {
													newSelectedKeys.push(item.key);
												}
												return { selectedKeys: [...newSelectedKeys] };
											});
										} else if (item.meta.level === 1) {
											this.setState((prevState: any) => {
												const prevIndex = prevState.readOnlyKeys.indexOf(item.key);
												const newReadOnlyKeys = prevState.readOnlyKeys;
												if (prevIndex >= 0) {
													newReadOnlyKeys.splice(prevIndex, 1);
												} else {
													newReadOnlyKeys.push(item.key);
												}
												return { readOnlyKeys: [...newReadOnlyKeys] };
											});
										} else {
											this.setState((prevState: any) => {
												const prevIndex = prevState.indeterminateKeys.indexOf(item.key);
												const newIndeterminateKeys = prevState.indeterminateKeys;
												if (prevIndex >= 0) {
													newIndeterminateKeys.splice(prevIndex, 1);
												} else {
													newIndeterminateKeys.push(item.key);
												}
												return { indeterminateKeys: [...newIndeterminateKeys] };
											});
										}
									}}
									items={[
										{
											key: '1',
											render: '1 - selecting a first level element will toggle the checkbox'
										}, {
											key: '2',
											render: '2 - selecting a second level element will make the checkbox read only',
											children: [
												{
													key: '2.1',
													render: '2.1 - selecting a other elements will toggle the indeterminate checkbox state'
												}, {
													key: '2.2',
													render: '2.2 - custom actions',
													actions: [
														{
															label: 'Add',
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
															label: 'Call',
															onClick: () => alert('Called'),
															iconName: 'call'
														}
													]
												}
											]
										}, {
											key: '3',
											render: '3 - not selectable',
											selectable: false,
											children: [
												{
													key: '3.1',
													render: '3.1 - item'
												}, {
													key: '3.2',
													render: '3.2 - hidden actions, visible on hover',
													displayActionsOnHover: true,
													actions: [
														{
															label: 'Add',
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
															label: 'Call',
															onClick: () => alert('Called'),
															iconName: 'call'
														}
													]
												}, {
													key: '3.3',
													collapsible: false,
													render: (item: any) => (
														<CSButton
															label={`3.3 - instead of an arrow control, this button will ${item.meta.expanded ? 'collapse' : 'expand'} the section`}
															onClick={(event: any) => {
																event.stopPropagation();
																item.meta.toggleExpanded();
															}}
														/>
													),
													children: [
														{
															key: '3.3.1',
															render: '3.3.1 - item',
															children: [
																{
																	key: '3.3.1.1',
																	render: '3.3.1.1 - item'
																}, {
																	key: '3.3.1.2',
																	render: '3.3.1.2 - item'
																}, {
																	key: '3.3.1.3',
																	render: '3.3.1.3 - item'
																}
															]
														}, {
															key: '3.3.2',
															render: '3.3.2 - item',
															selectable: false
														}, {
															render: (
																<CSButtonGroup>
																	<CSButton label="3.3.3 - item" />
																	<CSButton label="test" labelHidden iconName="add" />
																	<CSButton label="test" labelHidden iconName="call" />
																</CSButtonGroup>
															),
															key: '3.3.3'
														}
													]
												}
											]
										}, {
											key: '4',
											selectable: false,
											render:	<CSChip text="4 - item" />
										}
									]}
								/>,
								code: `<CSTree
									selectable
									activeKey={this.state.activeKey}
									selectedKeys={this.state.selectedKeys}
									readOnlyKeys={this.state.readOnlyKeys}
									indeterminateKeys={this.state.indeterminateKeys}
									onItemClick={(event: any, item: any) => {
										this.setState((prevState: any) => ({
											activeKey: prevState.activeKey === item.key ? undefined : item.key
										}));
									}}
									onSelectChange={(event: any, item: any) => {
										if (item.meta.level === 0) {
											this.setState((prevState: any) => {
												const prevIndex = prevState.selectedKeys.indexOf(item.key);
												const newSelectedKeys = prevState.selectedKeys;
												if (prevIndex >= 0) {
													newSelectedKeys.splice(prevIndex, 1);
												} else {
													newSelectedKeys.push(item.key);
												}
												return { selectedKeys: [...newSelectedKeys] };
											});
										} else if (item.meta.level === 1) {
											this.setState((prevState: any) => {
												const prevIndex = prevState.readOnlyKeys.indexOf(item.key);
												const newReadOnlyKeys = prevState.readOnlyKeys;
												if (prevIndex >= 0) {
													newReadOnlyKeys.splice(prevIndex, 1);
												} else {
													newReadOnlyKeys.push(item.key);
												}
												return { readOnlyKeys: [...newReadOnlyKeys] };
											});
										} else {
											this.setState((prevState: any) => {
												const prevIndex = prevState.indeterminateKeys.indexOf(item.key);
												const newIndeterminateKeys = prevState.indeterminateKeys;
												if (prevIndex >= 0) {
													newIndeterminateKeys.splice(prevIndex, 1);
												} else {
													newIndeterminateKeys.push(item.key);
												}
												return { indeterminateKeys: [...newIndeterminateKeys] };
											});
										}
									}}
									items={[
										{
											key: '1',
											render: '1 - selecting a first level element will toggle the checkbox'
										}, {
											key: '2',
											render: '2 - selecting a second level element will make the checkbox read only',
											children: [
												{
													key: '2.1',
													render: '2.1 - selecting a other elements will toggle the indeterminate checkbox state'
												}, {
													key: '2.2',
													render: '2.2 - custom actions',
													actions: [
														{
															label: 'Add',
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
															label: 'Call',
															onClick: () => alert('Called'),
															iconName: 'call'
														}
													]
												}
											]
										}, {
											key: '3',
											render: '3 - not selectable',
											selectable: false,
											children: [
												{
													key: '3.1',
													render: '3.1 - item'
												}, {
													key: '3.2',
													render: '3.2 - hidden actions, visible on hover',
													displayActionsOnHover: true,
													actions: [
														{
															label: 'Add',
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
															label: 'Call',
															onClick: () => alert('Called'),
															iconName: 'call'
														}
													]
												}, {
													key: '3.3',
													collapsible: false,
													render: (item: any) => (
														<CSButton
															label={\`3.3 - instead of an arrow control, this button will \${item.meta.expanded ? 'collapse' : 'expand'} the section\`}
															onClick={(event: any) => {
																event.stopPropagation();
																item.meta.toggleExpanded();
															}}
														/>
													),
													children: [
														{
															key: '3.3.1',
															render: '3.3.1 - item',
															children: [
																{
																	key: '3.3.1.1',
																	render: '3.3.1.1 - item'
																}, {
																	key: '3.3.1.2',
																	render: '3.3.1.2 - item'
																}, {
																	key: '3.3.1.3',
																	render: '3.3.1.3 - item'
																}
															]
														}, {
															key: '3.3.2',
															render: '3.3.2 - item',
															selectable: false
														}, {
															render: (
																<CSButtonGroup>
																	<CSButton label="3.3.3 - item" />
																	<CSButton label="test" labelHidden iconName="add" />
																	<CSButton label="test" labelHidden iconName="call" />
																</CSButtonGroup>
															),
															key: '3.3.3'
														}
													]
												}
											]
										}, {
											key: '4',
											selectable: false,
											render:	<CSChip text="4 - item" />
										}
									]}
								/>`
							}
						]
					}
				],
				properties: [
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.3.1',
				'1.4.1',
				'2.1.1',
				'2.1.2',
				'2.4.3',
				'2.4.7',
				'2.5.3',
				'3.2.1',
				'3.2.2',
				'3.3.1',
				'3.3.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<ul>` - tree, allows screen reader tree navigation and count of `<li>` items',
					'`<li>` - tree item, allows screen reader tree navigation'
				],
				attributes: [
					'`aria-checked` - true when tree item is selected',
					'`aria-expanded` - true on item group when group is expanded and on toggle button',
					'`aria-level` - Defines the hierarchical level of an element within a structure. Levels increase with depth.',
					'`role="tree"` - set on top `ul`',
					'`role="group"` - set on group `ul` - enables enumeration of group items',
					'`role="treeitem"` - set on `<li>`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'Tree items focus enabled by `tabindex="0"`',
					'`Enter` - select item',
					'`Up` - move up through the tree',
					'`Down` - move down through the tree',
					'`Right` - expand group',
					'`Left` - collapse group'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTreePreview;
