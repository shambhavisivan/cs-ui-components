import React from 'react';
import {CSButton, CSChip, CSTree, CSButtonGroup } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSTreePreview extends React.Component {
	getDoc = () => ({
		name: 'Tree',
		usage: 'Tree is visualization of a structure hierarchy.',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
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
									onItemClick={(item: any) => {
										if (item.key === '1') {
											item.meta.toggleActive();
										} else if (item.key === '4') {
											item.meta.toggleChecked();
										}
									}}
									onSelectChange={(item: any) => {
										item.meta.toggleChecked();
										if (item.key === '2') {
											item?.children.forEach((child: any) => item.meta.toggleChecked(child.key));
											item?.children.forEach((child: any) => item.meta.setReadOnly(true, child.key));
										}
									}}
									selectable
									items={[
										{
											key: '1',
											render: '1 - clicking here will toggle the active state'
										}, {
											key: '2',
											render: '2 - checking this will control children and apply read-only to them',
											children: [
												{
													key: '2.1',
													render: '2.1 - item'
												}, {
													key: '2.2',
													render: '2.2 - custom actions',
													actions: [
														{
															onClick: () => alert('Added'),
															iconName: 'add'
														},
														{
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
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
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
											render:	'4 - clicking anywhere in here will toggle the checkbox'
										}, {
											key: '5',
											selectable: false,
											render:	<CSChip text="5 - item" />
										}
									]}
								/>,
								code: `<CSTree
									onItemClick={(item: any) => {
										if (item.key === '1') {
											item.meta.toggleActive();
										} else if (item.key === '4') {
											item.meta.toggleChecked();
										}
									}}
									onSelectChange={(item: any) => {
										item.meta.toggleChecked();
										if (item.key === '2') {
											item?.children.forEach((child: any) => item.meta.toggleChecked(child.key));
											item?.children.forEach((child: any) => item.meta.setReadOnly(true, child.key));
										}
									}}
									selectable
									items={[
										{
											key: '1',
											render: '1 - clicking here will toggle the active state'
										}, {
											key: '2',
											render: '2 - checking this will control children and apply read-only to them',
											children: [
												{
													key: '2.1',
													render: '2.1 - item'
												}, {
													key: '2.2',
													render: '2.2 - custom actions',
													actions: [
														{
															onClick: () => alert('Added'),
															iconName: 'add'
														},
														{
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
															onClick: () => alert('Added'),
															iconName: 'add'
														}, {
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
											render:	'4 - clicking anywhere in here will toggle the checkbox'
										}, {
											key: '5',
											selectable: false,
											render:	<CSChip text="5 - item" />
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

		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTreePreview;
