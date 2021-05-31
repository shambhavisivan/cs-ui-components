import React from 'react';
import {
	CSDropdown,
	CSButton,
	CSList,
	CSListItem,
	CSListGroup,
	CSAlert
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSDropdownPreview extends React.Component {
	handleClose = () => alert('Dropdown has been closed.');
	handleOpen = () => alert('Dropdown has been opened.');

	getDoc = () => ({
		name: 'Dropdown',
		usage: 'Offers a list of actions or functions that a user can access.',
		accessible: 'yes',
		components: [
			{
				name: 'CSDropdown',
				examples: [
					{
						propName: 'align',
						variations: [
							{
								primaryVariants: 'align="left"',
								quickLink: 'left',
								component: <CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'align="right"',
								quickLink: 'right',
								component: <CSDropdown align="right">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown align="right">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'btnType | btnStyle',
						variations: [
							{
								primaryVariants: [
									'btnType="default"',
									'btnStyle="initial"'
								],
								quickLink: 'default initial',
								component: <CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" disabled />
									<CSButton label="Button 3 with more content" disabled />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" disabled />
									<CSButton label="Button 3 with more content" disabled />
								</CSDropdown>`
							}, {
								primaryVariants: [
									'btnType="default"',
									'btnStyle="brand"'
								],
								quickLink: 'default brand',
								component: <CSDropdown btnStyle="brand">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown btnStyle="brand">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: [
									'btnType="default"',
									'btnStyle="outline"'
								],
								quickLink: 'default outline',
								component: <CSDropdown btnStyle="outline">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown btnStyle="outline">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="initial"'
								],
								quickLink: 'transparent initial',
								customClass: 'inverse-background',
								component: <div className="purple-background">
									<CSDropdown btnType="transparent">
										<CSButton label="Button 1" />
										<CSButton label="Button 2 with more content" />
									</CSDropdown>
								</div>,
								code: `<div className="purple-background">
									<CSDropdown btnType="transparent">
										<CSButton label="Button 1" />
										<CSButton label="Button 2 with more content" />
									</CSDropdown>
								</div>`
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="brand"'
								],
								quickLink: 'transparent brand',
								component: <CSDropdown btnType="transparent" btnStyle="brand">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: ` <CSDropdown btnType="transparent" btnStyle="brand">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="outline"'
								],
								quickLink: 'transparent outline',
								customClass: 'inverse-background',
								component: <div className="purple-background">
									<CSDropdown btnType="transparent" btnStyle="outline">
										<CSButton label="Button 1" />
										<CSButton label="Button 2 with more content" />
									</CSDropdown>
								</div>,
								code: `<div className="purple-background">
								<CSDropdown btnType="transparent" btnStyle="outline">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>
							</div>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSDropdown disabled>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown disabled>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'hover',
						variations: [
							{
								primaryVariants: 'hover={true}',
								component: <CSDropdown hover>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown hover>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="chevrondown"',
									'iconOrigin="slds"'
								],
								quickLink: 'slds',
								component: <CSDropdown iconName="chevrondown">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown iconName="chevrondown">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: [
									'iconName="circle_arrow_down"',
									'iconOrigin="cs"'
								],
								quickLink: 'cs',
								component: <CSDropdown iconName="circle_arrow_down" iconOrigin="cs">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown iconName="circle_arrow_down" iconOrigin="cs">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'iconPosition',
						alert: {
							variant: 'info',
							text: 'iconPosition prop should be used together with the label prop.'
						},
						variations: [
							{
								primaryVariants: 'iconPosition="left"',
								component: <CSDropdown label="Label">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown label="Label">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'iconPosition="right"',
								component: <CSDropdown label="Label" iconPosition="right">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown label="Label" iconPosition="right">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'iconRotate',
						variations: [
							{
								primaryVariants: 'iconRotate={90}',
								quickLink: '90',
								component: <CSDropdown iconRotate={90}>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown iconRotate={90}>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'iconRotate={-90}',
								quickLink: '-90',
								component: <CSDropdown iconRotate={-90}>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown iconRotate={-90}>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'label',
						variations: [
							{
								component: <CSDropdown label="Label">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown label="Label">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="3rem"',
								component: <CSDropdown maxHeight="3rem">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
									<CSButton label="Button 3 with more content" />
								</CSDropdown>,
								code: `<CSDropdown maxHeight="3rem">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
									<CSButton label="Button 3 with more content"/>
								</CSDropdown>`
							}
						]
					}, {
						propName: 'maxWidth',
						variations: [
							{
								primaryVariants: 'maxWidth="2rem"',
								component: <CSDropdown maxWidth="2rem">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown maxWidth="2rem">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'mode',
						description: '`mode="button"` is designed to support `<CSButton />` as children, `mode="list"` is designed to support `<CSList />` as a child and `mode="custom"` is designed to support any content as children.',
						variations: [
							{
								primaryVariants: 'mode="button"',
								quickLink: 'button',
								component: <CSDropdown>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>`
							}, {
								primaryVariants: 'mode="list"',
								quickLink: 'list',
								component: <CSDropdown mode="list">
									<CSList variant="check-list" className="dropdown-list">
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
									</CSList>
								</CSDropdown>,
								code: `<CSDropdown mode="list">
									<CSList variant="check-list" className="dropdown-list">
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
									</CSList>
								</CSDropdown>`
							}, {
								primaryVariants: 'mode="custom"',
								quickLink: 'custom',
								component: <CSDropdown mode="custom">
									<CSAlert variant="info">
										Dropdown with mode="custom" can have any custom content inside it.
									</CSAlert>
								</CSDropdown>,
								code: `<CSDropdown mode="custom">
									<CSAlert variant="info">
										Dropdown with mode="custom" can have any custom content inside it.
									</CSAlert>
								</CSDropdown>`
							}
						]
					}, {
						propName: 'onDropdownClose',
						variations: [
							{
								component: <CSDropdown onDropdownClose={this.handleClose}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>,
								code: `<CSDropdown onDropdownClose={this.handleClose}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'onDropdownOpen',
						variations: [
							{
								component: <CSDropdown onDropdownOpen={this.handleOpen}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>,
								code: `<CSDropdown onDropdownOpen={this.handleOpen}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'onDropdownTabClose',
						variations: [
							{
								component: <CSDropdown onDropdownTabClose={this.handleClose}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>,
								code: `<CSDropdown onDropdownTabClose={this.handleClose}>
									<CSButton label="List item 1" />
									<CSButton label="List item 2" disabled />
									<CSButton label="List item 3" />
									<CSButton label="List item 4" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'padding',
						variations: [
							{
								primaryVariants: 'padding="0"',
								component: <CSDropdown padding="0">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown padding="0">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'position',
						variations: [
							{
								primaryVariants: 'position="bottom"',
								quickLink: 'bottom',
								component: <CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'position="top"',
								quickLink: 'top',
								component: <CSDropdown position="top">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown position="top">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <CSDropdown size="large">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown size="large">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'size="normal"',
								quickLink: 'normal',
								component: <CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <CSDropdown size="small">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown size="small">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}, {
								primaryVariants: 'size="xsmall"',
								quickLink: 'xsmall',
								component: <CSDropdown size="xsmall">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown size="xsmall">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								secondaryVariants: 'disabled={true}',
								component: <CSDropdown  title="This is a title">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown title="This is a title">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
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
								component: <CSDropdown id="custom-id" className="custom-br-mint">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>,
								code: `<CSDropdown id="custom-id" className="custom-br-mint">
									<CSButton label="Button 1" />
									<CSButton label="Button 2 with more content" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'children',
						description: 'This component is designed to support `<CSButton />` as children while `mode="button"`. In `mode="list"`, it is designed to support `<CSList />` as a child and, in `mode="custom"`, it is designed to support any content as children.',
						variations: [
							{
								component: <CSDropdown padding="0">
									<CSList variant="check-list" className="dropdown-list">
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
									</CSList>
								</CSDropdown>,
								code: `<CSDropdown padding="0">
									<CSList variant="check-list" className="dropdown-list">
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
										<CSListGroup title="List Group">
											<CSListItem text="First list item" />
											<CSListItem text="List item with a very long name" />
											<CSListItem text="List item" />
											<CSListItem text="Last list item" />
										</CSListGroup>
									</CSList>
								</CSDropdown>`
							}
						]
					}
				],
				properties: [
					{
						name: 'align',
						customTypes: [{
							name: 'CSDropdownAlign',
							types: ['\'left\'', '\'right\'']
						}],
						default: '\'left\'',
						description: 'Align the dropdown.'
					}, {
						name: 'btnStyle',
						customTypes: [{
							name: 'CSDropdownStyle',
							types: ['\'initial\'', '\'brand\'', '\'outline\'']
						}],
						default: '\'initial\'',
						description: 'Set the button group style.'
					}, {
						name: 'btnType',
						customTypes: [{
							name: 'CSDropdownType',
							types: [
								'\'default\'',
								'\'error\'',
								'\'success\'',
								'\'transparent\''
							]
						}],
						default: '\'default\'',
						description: 'Set the button group type.'
					}, {
						name: 'children',
						customTypes: [{
							name: 'CSDropdownChildren',
							types: ['<CSButton />', '<CSList />', 'any']
						}],
						description: 'This component supports content passed as children depending on the mode prop.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the dropdown.'
					}, {
						name: 'disabled',
						types: ['boolean'],
						default: 'false',
						description: 'Disable the dropdown.'
					}, {
						name: 'hover',
						types: ['boolean'],
						default: 'false',
						description: 'Set whether the dropdown should open on hover.'
					}, {
						name: 'iconName',
						types: ['string'],
						default: '\'down\'',
						description: 'Name of the icon from the icons library.'
					}, {
						name: 'iconOrigin',
						customTypes: [{
							name: 'CSIconOrigin',
							types: ['\'slds\'', '\'cs\'']
						}],
						default: '\'slds\'',
						description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
					}, {
						name: 'iconPosition',
						customTypes: [{
							name: 'CSDropdownIconPosition',
							types: ['\'left\'', '\'right\'']
						}],
						default: '\'left\'',
						description: 'Set the position of the icon if both icon and label are set.'
					}, {
						name: 'iconRotate',
						types: ['number', 'string'],
						default: '0',
						description: 'Please always use a number value. String values are deprecated and will be removed. Set by how many degrees the icon should be rotated clockwise. (eg. 90, 180, -90, etc.)'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the dropdown.'
					}, {
						name: 'label',
						types: ['string'],
						default: '\'Toggle dropdown\'',
						description: 'Set which text should appear as the dropdown label.'
					}, {
						name: 'maxHeight',
						types: ['string'],
						description: 'Set the max-height of the dropdown content. (eg. 200px, 20rem, etc.)'
					}, {
						name: 'maxWidth',
						types: ['string'],
						description: 'Set the max-width of the dropdown content. (eg. 200px, 20rem, etc.)'
					}, {
						name: 'mode',
						customTypes: [{
							name: 'CSDropdownMode',
							types: ['\'button\'', '\'list\'', '\'custom\'']
						}],
						default: '\'button\'',
						description: 'Set the mode in which dropdown will be displayed.'
					}, {
						name: 'onDropdownClose',
						types: ['() => void'],
						description: 'Callback for when the dropdown is closed.'
					}, {
						name: 'onDropdownOpen',
						types: ['() => void'],
						description: 'Callback for when the dropdown is opened.'
					}, {
						name: 'onDropdownTabClose',
						types: ['(event) => void'],
						description: 'Callback for when the dropdown is closed by pressing a tab key.'
					}, {
						name: 'padding',
						types: ['string'],
						default: '\'0.25rem 0\'',
						description: 'Set custom padding for the dropdown content.'
					}, {
						name: 'position',
						customTypes: [{
							name: 'CSDropdownPosition',
							types: ['\'bottom\'', '\'top\'']
						}],
						default: '\'bottom\'',
						description: 'Determine the vertical position of the dropdown content.'
					}, {
						name: 'size',
						customTypes: [{
							name: 'CSDropdownSize',
							types: [
								'\'xsmall\'',
								'\'small\'',
								'\'normal\'',
								'\'large\''
							]
						}],
						default: '\'normal\'',
						description: 'Set the size of the dropdown button.'
					}, {
						name: 'title',
						types: ['string'],
						description: 'Set the dropdown title.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the dropdown wrapper div.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'2.1.1',
				'2.1.2',
				'3.2.1',
				'3.3.1',
				'4.1.2'
			],
			requirements: {
				structure: [
					'Dropdown is HTML `<ul>` - allow screen reader list navigation and counting `<li>` items',
					'Buttons wrapped in HTML `<li>` - allow screen reader list navigation while preserving keyboard operability',
					'`<CSButton>` used'
				],
				attributes: [
					'`aria-expanded`',
					'`aria-haspopup`',
					'`<ul>` wrapper `role="menu"`',
					'`button role="menuitem"`'
				],
				styling: [
					'Distinct hover, active and focus state styles'
				],
				keyboardOperability: [
					'Proper focus management and keyboard operability ensured by structure and `<CSButton>`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSDropdownPreview;
