import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSDropdown, CSButton } from '@cloudsense/cs-ui-components';

class CSDropdownPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Dropdown',
			usage: 'Offers a list of actions or functions that a user can access.',
			accessible: 'yes',
			examples: [
				{
					propName: 'btnType',
					customText: '',
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
							component: <div className="blue-background">
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
							component: <div className="blue-background">
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
					customText: '',
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
					propName: 'iconName',
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					customText: '',
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
					propName: 'className',
					customText: '',
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
				}
			],
			properties: [
				{
					propertyName: 'align',
					description: 'Align the dropdown either left or right',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'btnStyle',
					description: 'Button Group style',
					options: [
						'initial',
						'brand',
						'outline'
					]
				},
				{
					propertyName: 'btnType',
					description: 'Button Group type',
					options: [
						'default',
						'error',
						'success',
						'transparent'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: ['<condition>']
				},
				{
					propertyName: 'hover',
					description: 'Logic for displaying dropdown buttons on hover',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library'
				},
				{
					propertyName: 'iconOrigin',
					description: 'SLDS or CloudSense icons',
					options: [
						'slds',
						'cs'
					]
				},
				{
					propertyName: 'iconPosition',
					description: 'Position of the icon if both icon and label are set',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'iconRotate',
					description: 'Degree value for clockwise icon',
					options: [
						'90',
						'180',
						'270'
					]
				},
				{
					propertyName: 'id',
					description: 'Button dropdown id value'
				},
				{
					propertyName: 'label',
					description: 'Dropdown button label'
				},
				{
					propertyName: 'maxHeight',
					description: 'Dropdown max height'
				},
				{
					propertyName: 'maxWidth',
					description: 'Dropdown max width'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'position',
					description: 'Vertical position of dropdown',
					options: [
						'bottom',
						'top'
					]
				},
				{
					propertyName: 'size',
					description: 'Button size',
					options: [
						'normal',
						'small',
						'xsmall',
						'large'
					]
				}
			],
			accessibility: [
				{
					criterionList: [
						'2.1.1',
						'2.1.2',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'Dropdown is HTML <ul> element - allows screen reader list navigation and counts <li> items',
								'Buttons wrapped in HTML <li> - allows screen reader list navigation while preserving keyboard operability',
								'<CSButton> used'
							],
							properties: [
								'aria-expanded',
								'aria-haspopup',
								'<ul> wrapper role="menu"',
								'button role="menuitem"'
							],
							styling: [
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'Proper focus management and keyboard operability ensured by structure and <CSButton>'
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
