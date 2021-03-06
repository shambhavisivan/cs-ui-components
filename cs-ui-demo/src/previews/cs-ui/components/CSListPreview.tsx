import React from 'react';
import { CSButton, CSList, CSListGroup, CSListItem } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSListPreview extends React.Component {
	handleSelect = () => alert('An item has been selected.');

	getDoc = () => ({
		name: 'List',
		usage: 'List that contains items.',
		accessible: 'yes',
		components: [
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
								component: <CSList id="custom-id" className="custom-br-blue">
									<CSListGroup
										text="List Group"
										id="group-id"
										className="custom-bg-mint"
									>
										<CSListItem
											text="List item"
											id="item-id"
											className="custom-br-purple"
										/>
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList id="custom-id" className="custom-br-blue">
									<CSListGroup
										text="List Group"
										id="group-id"
										className="custom-bg-mint"
									>
										<CSListItem
											text="List item"
											id="item-id"
											className="custom-br-purple"
										/>
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}
				],
				properties: [
					{
						name: 'size',
						customTypes: {
							name: 'CSListSize',
							types: [
								`'small'`,
								`'medium'`,
								`'large'`
							]
						},
						default: 'medium',
						description: 'List size.'
					}, {
						name: 'variant',
						customTypes: {
							name: 'CSListVariant',
							types: [`'simple-list'`, `'check-list'`]
						},
						default: 'simple-list',
						description: 'List variant.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the list.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the ul tag.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSListChildren',
							types: [
								'<CSListGroup />',
								'<CSListItem />',
								'any'
							]
						},
						description: 'This component is designed to support CSListGroup and CSListItem as children.'
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
				],
				properties: [
					{
						name: 'customContent',
						types: 'ReactNode',
						description: 'Additional content which can be added to list item (buttons, text, etc.).'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'List item disabled state.'
					}, {
						name: 'onSelectChange',
						types: '(value) => any',
						description: 'Callback function which will be executed when selection is changed on list item.'
					}, {
						name: 'selected',
						types: 'boolean',
						default: 'false',
						description: 'Selected state.'
					}, {
						name: 'text',
						types: 'string',
						description: 'Set list item text.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the list item.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the li tag.'
					}
				]
			}, {
				name: 'CSListGroup',
				examples: [
					{
						propName: 'text',
						variations: [
							{
								component: <CSList>
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}, {
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
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								quickLink: 'select-self',
								primaryVariants: 'checkboxOption="select-self"',
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup text="List Group" checkboxOption="select-self">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup text="List Group" checkboxOption="select-self">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								quickLink: 'not-selectable',
								primaryVariants: 'checkboxOption="not-selectable"',
								secondaryVariants: 'variant="check-list"',
								component: <CSList variant="check-list">
									<CSListGroup text="List Group" checkboxOption="not-selectable">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup text="List Group" checkboxOption="not-selectable">
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
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								primaryVariants: 'collapsible={false}',
								quickLink: 'false',
								component: <CSList>
									<CSListGroup text="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup text="List Group" collapsible={false}>
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
										text="List Group"
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
										text="List Group"
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
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								secondaryVariants: 'variant="simple-list"',
								quickLink: 'simple-list',
								component: <CSList>
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList>
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}, {
								secondaryVariants: 'variant="check-list"',
								quickLink: 'check-list',
								component: <CSList variant="check-list">
									<CSListGroup text="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup text="List Group">
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
									<CSListGroup text="List Group" onSelectChange={this.handleSelect}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>,
								code: `<CSList variant="check-list">
									<CSListGroup text="List Group" onSelectChange={this.handleSelect}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList>`
							}
						]
					}
				],
				properties: [
					{
						name: 'text',
						required: true,
						types: 'string',
						description: 'List group header text.'
					}, {
						name: 'checkboxOption',
						customTypes: {
							name: 'CSListGroupCheckboxOption',
							types: [
								'select-all',
								'select-self',
								'not-selectable'
							]
						},
						default: 'select-all',
						description: `Defines how items in group will be selected if list group checkbox is checked. When is set to 'select-all' it will select everything in the group, but when set to 'select-self' it will select only the group itself. It can be used only if variant is check-list.`
					}, {
						name: 'collapsible',
						types: 'boolean',
						default: 'true',
						description: 'List group collapsible state.'
					}, {
						name: 'selected',
						types: 'boolean',
						default: 'false',
						description: 'List group selected state.'
					}, {
						name: 'customContent',
						types: 'ReactNode',
						description: 'Additional content which can be added to list group header (buttons, text, etc.).'
					}, {
						name: 'onSelectChange',
						types: '(value) => any',
						description: 'Callback function which will be executed when list group checkbox is selected. It can only be used if variant is check-list.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the list group.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the heading tag (h3).'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSListChildren',
							types: ['<CSListItem />', 'any']
						},
						description: 'This component is designed to support CSListItem as a child.'
					}
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
					'`<ul>` - list, allows screen reader list navigation and count of `<li>` items',
					'`<li>` - list item, allows screen reader list navigation, sets role',
					'`<button>` inside `<h3>` - group header - allows heading search, as well as focusable'
				],
				attributes: [
					'`aria-selected` - true when list item is selected',
					'`aria-expanded` - true on group header when group is expanded',
					'`aria-level` - Defines the hierarchical level of an element within a structure. 1 on a group, 2 on a list item if list item is within a group, otherwise value is 1.',
					'`role="group"` - added on group `ul` - enables enumeration of group items',
					'`role="list"` - implicit on `ul`',
					'`role="listitem"` - implicit on list item `<li>`',
					'`role="option"` - simple list node items'
				],
				keyboardOperability: [
					'List items focus enabled by `tabindex="0"`',
					'`Enter` and `Space` - select item'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSListPreview;
