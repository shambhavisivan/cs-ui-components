import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSDropdown, CSButton, CSList, CSListItem, CSListGroup } from '@cloudsense/cs-ui-components';

class CSDropdownPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Dropdown',
			usage: 'Offers a list of actions or functions that a user can access.',
			accessible: 'yes',
			examples: [
				{
					propName: 'btnType',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default initial',
							variationText: ['btnStyle="initial"'],
							component: <CSDropdown
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
									disabled
								/>
								<CSButton
									iconName="world"
									label="test label large large"
									disabled
								/>
							</CSDropdown>
						},
						{
							variationName: ['default'],
							quickLink: 'default brand',
							variationText: ['btnStyle="brand"'],
							component: <CSDropdown
								btnStyle="brand"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['default'],
							quickLink: 'default outline',
							variationText: ['btnStyle="outline"'],
							component: <CSDropdown
								btnStyle="outline"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent initial',
							variationText: ['btnStyle="initial"'],
							customClass: 'inverse-background',
							component: <div className="purple-background">
								<CSDropdown
									btnType="transparent"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSDropdown>
							</div>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent brand',
							variationText: ['btnStyle="brand"'],
							component: <CSDropdown
								btnType="transparent"
								btnStyle="brand"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent outline',
							variationText: ['btnStyle="outline"'],
							customClass: 'inverse-background',
							component: <div className="purple-background">
								<CSDropdown
									btnType="transparent"
									btnStyle="outline"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSDropdown>
							</div>
						}
					]
				},
				{
					propName: 'size',
					variations: [
						{
							variationName: ['large'],
							quickLink: 'large',
							component: <CSDropdown
								size="large"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							component: <CSDropdown
								size="small"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							component: <CSDropdown
								size="xsmall"
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'defaultOpen',
					alert: {
						variant: 'info',
						text: 'This prop shouldn\'t be used with hover prop.'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSDropdown
								iconName="down"
								defaultOpen
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'iconName',
					variations: [
						{
							variationName: ['down'],
							quickLink: 'down',
							component: <CSDropdown
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['threedots_vertical'],
							quickLink: 'threedots_vertical',
							component: <CSDropdown
								iconName="threedots_vertical"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSDropdown
								iconName="down"
								disabled
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'align',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							component: <CSDropdown
								iconName="down"
								align="left"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['right'],
							quickLink: 'right',
							component: <CSDropdown
								iconName="down"
								align="right"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'position',
					variations: [
						{
							variationName: ['bottom'],
							quickLink: 'bottom',
							component: <CSDropdown
								iconName="down"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['top'],
							quickLink: 'top',
							component: <CSDropdown
								iconName="down"
								position="top"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'iconRotate',
					variations: [
						{
							variationName: ['90'],
							quickLink: '90',
							component: <CSDropdown
								iconName="down"
								iconRotate="90"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['180'],
							quickLink: '180',
							component: <CSDropdown
								iconName="down"
								iconRotate="180"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['270'],
							quickLink: '270',
							component: <CSDropdown
								iconName="down"
								iconRotate="270"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component: <CSDropdown
								iconName="down"
								label="Label"
								id="id"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component: <CSDropdown
								iconName="down"
								label="Label"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['left'],
							component: <CSDropdown
								iconName="down"
								label="Label"
								iconPosition="left"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						},
						{
							variationName: ['right'],
							component: <CSDropdown
								iconName="down"
								label="Label"
								iconPosition="right"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'hover',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSDropdown
								iconName="down"
								hover
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'maxHeight',
					variations: [
						{
							component: <CSDropdown
								iconName="down"
								maxHeight="3rem"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'maxWidth',
					variations: [
						{
							component: <CSDropdown
								iconName="down"
								maxWidth="2rem"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'padding',
					variations: [
						{
							component: <CSDropdown
								iconName="down"
								padding="0"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component: <CSDropdown
								iconName="down"
								className="custom-class"
							>
								<CSButton
									iconName="world"
									label="test label small"
								/>
								<CSButton
									iconName="world"
									label="test label large large"
								/>
							</CSDropdown>
						}
					]
				},
				{
					propName: 'children',
					variations: [
						{
							variationName: ['CSList'],
							quickLink: 'CSList',
							component: <CSDropdown padding="0">
								<CSList variant="check-list" className="dropdown-list" >
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
							</CSDropdown>
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
						types: ['<CSButton />', 'any']
					}],
					description: 'This component is designed to support CSButton as a child.'
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
					name: 'defaultOpen',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the dropdown should be open or not by default. It will also remove dropdown toggle button.'
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
					description: 'Select whether a SalesForce or a CloudSense icon should be used.'
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
					types: ['string'],
					default: '\'0\'',
					description: 'Set by how many degrees the icon should be rotated clockwise. (eg. 90, 180, etc.)'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the dropdown.'
				}, {
					name: 'label',
					types: ['string'],
					description: 'Set which text, if any, should appear as the dropdown label.'
				}, {
					name: 'maxHeight',
					types: ['string'],
					description: 'Set the max-height of the dropdown content. (eg. 200px, 20rem, etc.)'
				}, {
					name: 'maxWidth',
					types: ['string'],
					description: 'Set the max-width of the dropdown content. (eg. 200px, 20rem, etc.)'
				}, {
					name: 'onChange',
					types: ['(event) => void'],
					description: 'Handler method for the click event.'
				}, {
					name: 'padding',
					types: ['string'],
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
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the dropdown wrapper div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'2.1.1',
						'2.1.2',
						'2.1.4',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'Dropdown is `<ul>` - allow screen reader list navigation and counting `<li>` items',
								'Buttons wrapped in `<li>` - allow screen reader list navigation while preserving keyboard operability',
								'`<CSButton>` used'
							],
							properties: [
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
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSDropdownPreview;
