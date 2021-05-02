import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSAlert, CSButton, CSList, CSListGroup, CSListItem } from '@cloudsense/cs-ui-components';

class CSListPreview extends React.Component {
	handleSelect = () => alert('An item has been selected.');

	getListDoc = () => ({
		name: 'List',
		usage: 'List that contains items',
		accessible: 'partially',
		previews: [
			{
				name: 'CSList',
				examples: [
					{
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <CSList size="small">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList size="small">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>`
							}, {
								primaryVariants: 'size="medium"',
								quickLink: 'medium',
								component: <CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>`
							}, {
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <CSList size="large">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList size="large">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="simple-list"',
								quickLink: 'simple-list',
								component: <CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>`
							}, {
								primaryVariants: 'variant="check-list"',
								quickLink: 'check-list',
								component: <CSList variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSList id="custom-id" className="custom-class">
									<CSListGroup
										title="List Group"
										id="group-id"
										className="custom-group-class"
									>
										<CSListItem
											text="List item"
											id="item-id"
											className="custom-item-class"
										/>
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList id="custom-id" className="custom-class">
									<CSListGroup
										title="List Group"
										id="group-id"
										className="custom-group-class"
									>
										<CSListItem
											text="List item"
											id="item-id-1"
											className="custom-item-class"
										/>
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}
				]
			}, {
				name: 'CSListItem',
				examples: [
					{
						propName: 'customContent',
						variations: [
							{
								secondaryVariants: 'variant="simple-list"',
								component: <CSList>
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>`
							}, {
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								secondaryVariants: 'variant="simple-list"',
								quickLink: 'true simple-list',
								component: <CSList>
									<CSListItem text="List item" disabled />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" disabled />
									<CSListItem text="List item" />
								</CSList>`
							}, {
								primaryVariants: 'disabled={true}',
								secondaryVariants: 'variant="check-list"',
								quickLink: 'true check-list',
								component: <CSList variant="check-list">
									<CSListItem text="List item" disabled />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListItem text="List item" disabled />
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}, {
						propName: 'onSelectChange',
						variations: [
							{
								component: <CSList>
									<CSListItem text="List item" onSelectChange={this.handleSelect} />
									<CSListItem text="List item" onSelectChange={this.handleSelect} />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" onSelectChange={this.handleSelect} />
									<CSListItem text="List item" onSelectChange={this.handleSelect} />
								</CSList>`
							}
						]
					}, {
						propName: 'selected',
						variations: [
							{
								primaryVariants: 'selected={true}',
								secondaryVariants: 'variant="simple-list"',
								quickLink: 'true simple-list',
								component: <CSList>
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>`
							}, {
								primaryVariants: 'selected={true}',
								secondaryVariants: 'variant="check-list"',
								quickLink: 'true check-list',
								component: <CSList variant="check-list">
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}, {
						propName: 'text',
						variations: [
							{
								component: <CSList>
									<CSListItem text="List item" />
								</CSList>,
								code: `<CSList>
									<CSListItem text="List item" />
								</CSList>`
							}
						]
					}
				]
			}, {
				name: 'CSListGroup',
				examples: [
					{
						propName: 'checkboxOption',
						alert: {
							variant: 'info',
							text: 'checkboxOption can only be used if variant is set to check-list.'
						},
						variations: [
							{
								quickLink: 'select-all',
								primaryVariants: 'checkboxOption="select-all"',
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								quickLink: 'select-self',
								primaryVariants: 'checkboxOption="select-self"',
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup title="List Group" checkboxOption="select-self">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup title="List Group" checkboxOption="select-self">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								quickLink: 'not-selectable',
								primaryVariants: 'checkboxOption="not-selectable"',
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup title="List Group" checkboxOption="not-selectable">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup title="List Group" checkboxOption="not-selectable">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
						propName: 'collapsible',
						variations: [
							{
								primaryVariants: 'collapsible={true}',
								quickLink: 'true',
								component: <CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								primaryVariants: 'collapsible={false}',
								quickLink: 'false',
								component: <CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
						propName: 'customContent',
						variations: [
							{
								component: <CSList>
									<CSListGroup
										title="List Group"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup
										title="List Group"
										customContent={
											<CSButton
												label="delete"
												labelHidden
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								primaryVariants: 'customContent={false}',
								component: <CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								secondaryVariants: 'variant="simple-list"',
								component: <CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
						propName: 'onSelectChange',
						variations: [
							{
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup title="List Group" onSelectChange={this.handleSelect}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup title="List Group" onSelectChange={this.handleSelect}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSListChildren',
					types: ['<CSListGroup />', '<CSListItem />', 'any']
				}],
				description: 'This component is designed to support CSListGroup and CSListItem as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the ul tag.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the list.'
			}, {
				name: 'size',
				customTypes: [{
					name: 'CSListSize',
					types: ['\'large\'', '\'medium\'', '\'small\'']
				}],
				default: 'medium',
				description: 'List size.'
			}, {
				name: 'variant',
				customTypes: [{
					name: 'CSListVariant',
					types: ['\'simple-list\'', '\'check-list\'']
				}],
				default: 'simple-list',
				description: 'List variant.'
			}
		],
		accessibility: [
			{
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
				requirements: [
					{
						structure: [
							'`<ul>` - list, allows screen reader list navigation and counts `<li>` items',
							'`<li>` - list item, allows screen reader list navigation',
							'`<button>` inside `<h3>` - group header - allows heading search, as well as focusable'
						],
						properties: [
							'`aria-selected` - true when list item is selected',
							'`aria-expanded` - true on group header when group is expanded',
							'`aria-level` - TODO',
							'`role="group"` - TODO',
							'`role="treeitem"` - TODO'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'List items focus enabled by `tabindex="0"`',
							'`Enter` and `Space` - select item'
						]
					}
				]
			}
		]
	})

	getListItemDoc = () => ({
		name: 'List Item',
		properties: [
			{
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the li tag.'
			}, {
				name: 'customContent',
				types: ['ReactNode'],
				description: 'Additional content which can be added to list item (buttons, text, etc.).'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'List item disabled state.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the list item.'
			}, {
				name: 'onSelectChange',
				types: ['(value) => any'],
				description: 'Callback function which will be executed when selection is changed on list item.'
			}, {
				name: 'selected',
				types: ['boolean'],
				default: 'false',
				description: 'Selected state.'
			}, {
				name: 'text',
				types: ['string'],
				description: 'Set list item text.'
			}
		]
	})

	getListGroupDoc = () => ({
		name: 'List Group',
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSListChildren',
					types: ['<CSListItem />', 'any']
				}],
				description: 'This component is designed to support CSListItem as a child.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the heading tag (h3).'
			}, {
				name: 'collapsible',
				types: ['boolean'],
				default: 'false',
				description: 'List group collapsible state.'
			}, {
				name: 'customContent',
				types: ['ReactNode'],
				description: 'Additional content which can be added to list group header (buttons, text, etc.).'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the list group.'
			}, {
				name: 'onSelectChange',
				types: ['(value) => any'],
				description: 'Callback function which will be executed when list group checkbox is selected. It can only be used if variant is check-list.'
			}, {
				name: 'checkboxOption',
				customTypes: [{
					name: 'CSListGroupCheckboxOption',
					types: ['select-all', 'select-self', 'not-selectable']
				}],
				default: 'select-all',
				description: 'Defines how items in group will be selected if list group checkbox is checked. When is set to \'select-all\' it will select everything in the group, but when set to \'select-self\' it will select only the group itself. It can be used only if variant is check-list.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'List group header title.'
			}
		]
	})

	render() {
		const component = this.getListDoc();
		const component2 = this.getListItemDoc();
		const component3 = this.getListGroupDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2, component3]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSListPreview;
