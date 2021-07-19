import React from 'react';
import { CSTree, CSTreeDataType } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSTreePreview extends React.Component {
	treeData: Array<CSTreeDataType> = [];

	constructor() {
		super({});

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
			}
		];
	}

	handleActionsClick = (e: any) => {
		e.stopPropagation();
		alert('Action invoked.');
	}
	handleExpand = (key: string) => alert(`Expanded node key: ${key}`);
	handleSelect = (key: string) => alert(`Selected node key: ${key}`);

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
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'defaultExpandedNodes',
						variations: [
							{
								component: <CSTree
									treeData={this.treeData}
									defaultExpandedNodes={['0-1', '0-2-2']}
								/>,
								code: `<CSTree
									treeData={this.treeData}
									defaultExpandedNodes={['0-1', '0-2-2']}
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
					}
				],
				properties: [
					{
						name: 'treeData',
						required: true,
						types: 'Array<CSTreeDataType>',
						description: `Set the data which will be rendered in form of tree nodes. Every node can have 'label', 'nodeKey', 'children', 'actions', 'actionsDisplay' and 'treeNodeIcon' properties defined. 'actions' array property renders CSButton for every object and allows defining CSButton properties. 'actionDisplay' can be defined as 'visible' or 'hover'. 'visible' is the default value, while 'hover' will show actions only if tree node is hovered. 'treeNodeIcon' allows rendering CSIcon-s on tree node by defining CSIcon properties.`
					}, {
						name: 'defaultExpandedNodes',
						types: 'Array<string>',
						description: 'Set node keys for nodes with children which will be expanded by default.'
					}, {
						name: 'onExpand',
						types: '(key: string) => any',
						description: 'Handler method for when tree node is expanded or shrinks. It returns node key of expanded tree node.'
					}, {
						name: 'onSelect',
						types: '(key: string) => any',
						description: 'Handler method for when tree node is selected. It returns node key of the selected tree node.'
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
