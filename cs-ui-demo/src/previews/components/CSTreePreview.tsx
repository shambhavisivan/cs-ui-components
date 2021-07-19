import React from 'react';
import { CSButton, CSChip, CSTree, CSTreeDataType } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSTreePreviewState {
	checked: Array<string>;
	selectedKey: string;
}

class CSTreePreview extends React.Component<{}, CSTreePreviewState> {
	treeData: Array<CSTreeDataType> = [];

	constructor(props: any) {
		super(props);

		this.state = {
			checked: ['0-0', ' 0-1-0', '0-2-2-0'],
			selectedKey: '0-0'
		};

		this.treeData = [
			{
				label: 'Tree node 0-0',
				nodeKey: '0-0',
				actions: [
					{
						onClick: this.handleActionsClick,
						iconName: 'add'
					},
					{
						onClick: this.handleActionsClick,
						iconName: 'call'
					}
				]
			},
			{
				label: 'Tree node 0-1',
				nodeKey: '0-1',
				actions: [
					{
						onClick: this.handleActionsClick,
						iconName: 'add'
					},
					{
						onClick: this.handleActionsClick,
						iconName: 'call'
					}
				],
				actionsDisplay: 'hover',
				children: [
					{
						label: 'Tree node 0-1-0',
						nodeKey: '0-1-0',
						treeNodeIcon: {
							name: 'activity',
							color: '#4a26ab'
						}
					},
					{
						label: 'Tree node 0-1-1',
						nodeKey: '0-1-1'
					}
				]
			},
			{
				label: 'Tree node 0-2',
				nodeKey: '0-2',
				actions: [
					{
						onClick: this.handleActionsClick,
						iconName: 'add'
					},
					{
						onClick: this.handleActionsClick,
						iconName: 'call'
					}
				],
				actionsDisplay: 'hover',
				children: [
					{
						label: 'Tree node 0-2-0',
						nodeKey: '0-2-0'
					},
					{
						label: 'Tree node 0-2-1',
						nodeKey: '0-2-1'
					},
					{
						label: 'Tree node 0-2-2',
						nodeKey: '0-2-2',
						actions: [
							{
								onClick: this.handleActionsClick,
								iconName: 'add'
							},
							{
								onClick: this.handleActionsClick,
								iconName: 'call'
							}
						],
						actionsDisplay: 'hover',
						children: [
							{
								label: 'Tree node 0-2-2-0',
								nodeKey: '0-2-2-0',
								children: [
									{
										label: 'Tree node 0-2-2-0-0',
										nodeKey: '0-2-2-0-0',
										actions: [
											{
												onClick: this.handleActionsClick,
												iconName: 'add'
											},
											{
												onClick: this.handleActionsClick,
												iconName: 'call'
											}
										]
									},
									{
										label: 'Tree node 0-2-2-0-1',
										nodeKey: '0-2-2-0-1',
										actions: [
											{
												onClick: this.handleActionsClick,
												iconName: 'add'
											},
											{
												onClick: this.handleActionsClick,
												iconName: 'call'
											}
										]
									},
									{
										label: 'Tree node 0-2-2-0-2',
										nodeKey: '0-2-2-0-2',
										actions: [
											{
												onClick: this.handleActionsClick,
												iconName: 'add'
											},
											{
												onClick: this.handleActionsClick,
												iconName: 'call'
											}
										]
									}
								]
							},
							{
								label: 'Tree node 0-2-2-1',
								nodeKey: '0-2-2-1',
								treeNodeIcon: {
									name: 'trailhead',
									color: '#4a26ab'
								}
							}
						]
					}
				]
			},
			{
				label: 'Tree node 0-3',
				nodeKey: '0-3',
				render: <>
					<CSChip text="Tree node 0-3" />
					<CSButton label="Click me for message" onClick={() => alert('I\'m rendered by render prop')} />
				</>
			}
		];
	}

	handleActionsClick = (e: any) => {
		e.stopPropagation();
		alert('Action invoked.');
	}
	handleExpand = (key: string) => alert(`Expanded node key: ${key}`);
	handleSelect = (key: string) => alert(`Selected node key: ${key}`);
	handleCheck = (key: string) => {
		const checked = this.state.checked.includes(key) ?
			this.state.checked.filter(_key => _key !== key) :
			[...this.state.checked, key];

		this.setState({ checked });
	}
	handleSelectedKey = (key: string) => this.setState({ selectedKey: key });
	getDoc = () => ({
		name: 'Tree',
		usage: 'Tree is visualization of a structure hierarchy.',
		accessible: 'no',
		components: [
			{
				name: 'CSTree',
				examples: [
					{
						propName: 'treeData',
						variations: [
							{

								component: <CSTree
									treeData={this.treeData}
								/>,
								code: `<CSTree
									treeData={[
										{
											label: 'Tree node 0-0',
											nodeKey: '0-0',
											actions: [
												{
													onClick: this.handleActionsClick,
													iconName: 'add'
												},
												{
													onClick: this.handleActionsClick,
													iconName: 'call'
												}
											]
										},
										{
											label: 'Tree node 0-1',
											nodeKey: '0-1',
											actions: [
												{
													onClick: this.handleActionsClick,
													iconName: 'add'
												},
												{
													onClick: this.handleActionsClick,
													iconName: 'call'
												}
											],
											actionsDisplay: 'hover',
											children: [
												{
													label: 'Tree node 0-1-0',
													nodeKey: '0-1-0',
													treeNodeIcon: {
														name: 'activity',
														color: '#4a26ab'
													}
												},
												{
													label: 'Tree node 0-1-1',
													nodeKey: '0-1-1'
												}
											]
										},
										{
											label: 'Tree node 0-2',
											nodeKey: '0-2',
											actions: [
												{
													onClick: this.handleActionsClick,
													iconName: 'add'
												},
												{
													onClick: this.handleActionsClick,
													iconName: 'call'
												}
											],
											actionsDisplay: 'hover',
											children: [
												{
													label: 'Tree node 0-2-0',
													nodeKey: '0-2-0'
												},
												{
													label: 'Tree node 0-2-1',
													nodeKey: '0-2-1'
												},
												{
													label: 'Tree node 0-2-2',
													nodeKey: '0-2-2',
													actions: [
														{
															onClick: this.handleActionsClick,
															iconName: 'add'
														},
														{
															onClick: this.handleActionsClick,
															iconName: 'call'
														}
													],
													actionsDisplay: 'hover',
													children: [
														{
															label: 'Tree node 0-2-2-0',
															nodeKey: '0-2-2-0',
															children: [
																{
																	label: 'Tree node 0-2-2-0-0',
																	nodeKey: '0-2-2-0-0',
																	actions: [
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'add'
																		},
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'call'
																		}
																	],
																},
																{
																	label: 'Tree node 0-2-2-0-1',
																	nodeKey: '0-2-2-0-1',
																	actions: [
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'add'
																		},
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'call'
																		}
																	],
																},
																{
																	label: 'Tree node 0-2-2-0-2',
																	nodeKey: '0-2-2-0-2',
																	actions: [
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'add'
																		},
																		{
																			onClick: this.handleActionsClick,
																			iconName: 'call'
																		}
																	],
																}
															]
														},
														{
															label: 'Tree node 0-2-2-1',
															nodeKey: '0-2-2-1',
															treeNodeIcon: {
																name: 'trailhead',
																color: '#4a26ab'
															}
														}
													]
												}
											]
										},
										{
											label: 'Tree node 0-2',
											nodeKey: '0-2',
											render: <>
												<CSChip text="Tree node 0-2" />
												<CSButton label="Click me for message" onClick={() => alert('I'm rendered by render prop')} />
											</>
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'checkable',
						primaryVariants: ['checkable={true}'],
						variations: [
							{
								primaryVariants: 'checkable={true}',
								component: <CSTree
									treeData={this.treeData}
									checkable
								/>,
								code: `<CSTree
									treeData={this.treeData}
									checkable
								/>`
							}
						]
					}, {
						propName: 'checkedKeys',
						variations: [
							{
								secondaryVariants: 'checkable={true}',
								component: <CSTree
									treeData={this.treeData}
									checkable
									onSelect={this.handleCheck}
									checkedKeys={this.state.checked}
								/>,
								code: `<CSTree
									treeData={this.treeData}
									checkable
									onSelect={this.handleCheck}
									checkedKeys={this.state.checked}
								/>`
							}
						]
					}, {
						propName: 'defaultExpandedKeys',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									defaultExpandedKeys={['0-1', '0-2-2']}
								/>,
								code: `<CSTree
									treeData={this.treeData}
									defaultExpandedKeys={['0-1', '0-2-2']}
								/>`
							}
						]
					}, {
						propName: 'nonCheckableKeys',
						secondaryVariants: 'checkable={true}',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									checkable
									nonCheckableKeys={['0-1', '0-2', '0-2-1', '0-2-2']}
								/>,
								code: `<CSTree
									treeData={this.treeData}
									checkable
									nonCheckableKeys={['0-1', '0-2', '0-2-1', '0-2-2']}
								/>`
							}
						]
					}, {
						propName: 'onExpand',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									onExpand={this.handleExpand}
								/>,
								code: `<CSTree
									treeData={this.treeData}
									onExpand={this.handleExpand}
								/>`
							}
						]
					}, {
						propName: 'onSelect',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									onSelect={this.handleSelect}
								/>,
								code: `<CSTree
								treeData={this.treeData}
								onSelect={this.handleSelect}
							/>`
							}
						]
					}, {
						propName: 'selectedKey',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									onSelect={this.handleSelectedKey}
									selectedKey={this.state.selectedKey}

								/>,
								code: `<CSTree
								treeData={this.treeData}
								onSelect={(key) => this.setState({ selectedKey: key})}
								selectedKey={this.state.selectedKey}
							/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'treeData',
						required: true,
						types: 'Array<CSTreeDataType>',
						description: `Set the data which will be rendered in form of tree nodes. Every node can have 'label', 'nodeKey', 'children', 'actions', 'actionsDisplay', 'treeNodeIcon' and 'render' properties defined. 'actions' array property renders CSButton for every object and allows defining CSButton properties. 'actionDisplay' can be defined as 'visible' or 'hover'. 'visible' is the default value, while 'hover' will show actions only if tree node is hovered. 'treeNodeIcon' allows rendering CSIcon-s on tree node by defining CSIcon properties. 'render' property allows to render any JSX element which will replace tree node label.`
					}, {
						name: 'checkable',
						types: 'boolean',
						description: 'Set whether the component is checkable (has checkboxes for multiple selection of tree nodes).'
					}, {
						name: 'checkedKeys',
						types: 'Array<string>',
						description: 'Set node keys which will be checked. This prop is only available in combination with checkable prop.'
					}, {
						name: 'defaultExpandedKeys',
						types: 'Array<string>',
						description: 'Set node keys for nodes with children which will be expanded by default.'
					}, {
						name: 'nonCheckableKeys',
						types: 'Array<string>',
						description: 'Set node keys which will override checkable prop - on such tree nodes checkbox won\'t be rendered.'
					}, {
						name: 'onExpand',
						types: '(key: string) => any',
						description: 'Handler method for when tree node is expanded or shrinks. It returns node key of expanded tree node.'
					}, {
						name: 'onSelect',
						types: '(key: string) => any',
						description: 'Handler method for when tree node is selected. It returns node key of the selected tree node.'
					}, {
						name: 'selectedKey',
						types: 'string',
						description: 'Set one selected node in the component and apply selected styles.'
					}
				]
			}
		],
		accessibility: {

		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTreePreview;
