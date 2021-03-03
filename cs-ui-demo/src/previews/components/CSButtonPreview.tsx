import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import { NavLink } from 'react-router-dom';

import { CSButton, CSTable, CSTableCell, CSTableHeader, CSTableBody, CSTableRow, CSTooltip } from '@cloudsense/cs-ui-components';

class CSButtonPreview extends React.Component {
	handleClick = () => alert('Button has been clicked.');
	handleMouseDown = () => alert('Mouse down has been registered.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);

	getDoc() {
		const json = {
			name: 'Button',
			usage: 'Button provides a base UI for button actions',
			accessible: 'yes',
			examples: [
				{
					propName: 'label',
					alert: {
						variant: 'info',
						text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a button but if you want to hide the label from displaying you can use labelHidden={true}'
					},
					variations: [
						{
							component: <CSButton iconName="activity" label="label" />
						}
					]
				},
				{
					propName: 'btnType',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton label="default initial" />
						},
						{
							variationName: ['default'],
							quickLink: 'default brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnStyle="brand" label="default brand" />
						},
						{
							variationName: ['default'],
							quickLink: 'default outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnStyle="outline" label="default outline" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent initial',
							variationText: ['btnStyle="initial"'],
							customClass: 'inverse-background',
							component: <div className="purple-background">
								<CSButton btnType="transparent" label="transparent initial" />
							</div>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="transparent" btnStyle="brand" label="transparent brand" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent outline',
							variationText: ['btnStyle="outline"'],
							customClass: 'inverse-background',
							component: <div className="purple-background">
								<CSButton btnType="transparent" btnStyle="outline" label="transparent outline" />
							</div>
						},
						{
							variationName: ['error'],
							quickLink: 'error initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton btnType="error" label="error initial" />
						},
						{
							variationName: ['error'],
							quickLink: 'error brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="error" btnStyle="brand" label="error brand" />
						},
						{
							variationName: ['error'],
							quickLink: 'error outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnType="error" btnStyle="outline" label="error outline" />
						},
						{
							variationName: ['success'],
							quickLink: 'success initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton btnType="success" label="success initial" />
						},
						{
							variationName: ['success'],
							quickLink: 'success brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="success" btnStyle="brand" label="success brand" />
						},
						{
							variationName: ['success'],
							quickLink: 'success outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnType="success" btnStyle="outline" label="success outline" />
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['#4a26ab'],
							variationText: ['btnType="default"', 'btnStyle="initial"'],
							quickLink: 'default initial',
							component: <CSButton
								btnStyle="initial"
								color="#4a26ab"
								label="custom color button"
							/>
						},
						{
							variationName: ['#4a26ab'],
							variationText: ['btnType="default"', 'btnStyle="brand"'],
							quickLink: 'default brand',
							component: <CSButton
								btnStyle="brand"
								color="#4a26ab"
								label="custom color button"
							/>
						},
						{
							variationName: ['#4a26ab'],
							variationText: ['btnType="default"', 'btnStyle="outline"'],
							quickLink: 'default outline',
							component: <CSButton
								btnStyle="outline"
								color="#4a26ab"
								label="custom color button"
							/>
						},
						{
							variationName: ['#3cdbc0'],
							variationText: ['btnType="transparent"', 'btnStyle="inital"'],
							quickLink: 'transparent inital',
							component: <div className="purple-background">
								<CSButton
									btnType="transparent"
									btnStyle="initial"
									color="#3cdbc0"
									label="custom color button"
								/>
							</div>
						},
						{
							variationName: ['#4a26ab'],
							variationText: ['btnType="transparent"', 'btnStyle="brand"'],
							quickLink: 'transparent brand',
							component: <CSButton
								btnType="transparent"
								btnStyle="brand"
								color="#4a26ab"
								label="custom color button"
							/>
						},
						{
							variationName: ['#3cdbc0'],
							variationText: ['btnType="transparent"', 'btnStyle="outline"'],
							quickLink: 'transparent outline',
							component: <div className="purple-background">
								<CSButton
									btnType="transparent"
									btnStyle="outline"
									color="#3cdbc0"
									label="custom color button"
								/>
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
							component: <CSButton size="large" label="default large" />
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							component: <CSButton size="small" label="default small" />
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							component: <CSButton size="xsmall" label="default xsmall" />
						}
					]
				},
				{
					propName: 'borderRadius',
					variations: [
						{
							variationName: ['1rem'],
							quickLink: '1rem',
							component: <CSButton iconName="list" label="default round" borderRadius="1rem"/>
						},
						{
							variationName: ['0'],
							quickLink: '0',
							component: <CSButton label="default sharp" borderRadius="0"/>
						},
						{
							variationName: ['1rem icon only'],
							quickLink: '1rem icon only',
							component: <CSButton iconName="list" label="round icon only button" labelHidden borderRadius="1rem"/>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							component: <CSButton onClick={this.handleClick} label="default round" />
						}
					]
				},
				{
					propName: 'onMouseDown',
					variations: [
						{
							component: <CSButton onMouseDown={this.handleMouseDown} label="default" />
						}
					]
				},
				{
					propName: 'onKeyDown',
					variations: [
						{
							component: <CSButton onKeyDown={this.handleKeyDown} label="default" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component: <CSButton label="default with id" id="id" />

						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component: <CSButton label="default" title="this is a title" />
						},
						{
							component: <CSButton label="default" disabled title="this is a title" />
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							component: <CSButton label="Label is hidden" iconName="list" labelHidden />
						}
					]
				},
				{
					propName: 'iconColor',
					variations: [
						{
							variationName: ['#4a26ab'],
							quickLink: '#4a26ab',
							component: <CSButton label="default with id" iconColor="#4a26ab" iconName="list" />
						}
					]
				},
				{
					propName: 'iconDisplay',
					alert: {
						variant: 'warning',
						text: 'Prop is deprecated and should not be used. Use labelHidden prop instead.'
					},
					variations: [
						{
							variationName: ['default'],
							variationText: ['iconName="activity"'],
							quickLink: 'default',
							component: <CSButton label="activity icon button" iconName="list" iconDisplay="default" />
						},
						{
							variationName: ['icon-only'],
							variationText: ['iconName="activity"'],
							quickLink: 'icon-only',
							component: <CSButton label="activity icon button" iconName="list" iconDisplay="icon-only" />
						},
						{
							variationName: ['icon-only'],
							variationText: ['size="large"'],
							quickLink: 'icon-only large',
							component: <CSButton label="activity icon button" iconName="list" iconDisplay="icon-only" size="large" />
						},
						{
							variationName: ['icon-only'],
							variationText: ['size="small"'],
							quickLink: 'icon-only small',
							component: <CSButton label="activity icon button" iconName="list" iconDisplay="icon-only" size="small" />
						},
						{
							variationName: ['icon-only'],
							variationText: ['size="xsmall"'],
							quickLink: 'icon-only xsmall',
							component: <CSButton label="activity icon button" iconName="list" iconDisplay="icon-only" size="xsmall" />
						},
						{
							variationName: ['no-icon'],
							variationText: ['size="large"'],
							quickLink: 'no-icon large',
							component: <CSButton label="no-icon button" iconName="list" iconDisplay="no-icon" size="large" />
						},
						{
							variationName: ['no-icon'],
							variationText: ['size="small"'],
							quickLink: 'no-icon small',
							component: <CSButton label="no-icon button" iconName="list" iconDisplay="no-icon" size="small" />
						},
						{
							variationName: ['no-icon'],
							variationText: ['size="xsmall"'],
							quickLink: 'no-icon xsmall',
							component: <CSButton label="no-icon button" iconName="list" iconDisplay="no-icon" size="xsmall" />
						}
					]
				},
				{
					propName: 'iconName',
					variations: [
						{
							component: <CSButton iconName="list" label="iconName list" />
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['left'],
							variationText: ['iconName="activity"'],
							quickLink: 'left',
							component: <CSButton iconName="list" iconPosition="left" label="Icon Left" />
						},
						{
							variationName: ['right'],
							variationText: ['iconName="activity"'],
							quickLink: 'right',
							component: <CSButton iconName="list" iconPosition="right" label="Icon Right" />
						}
					]
				},
				{
					propName: 'iconOrigin',
					variations: [
						{
							variationName: ['slds'],
							variationText: ['iconName="activity"', 'labelHidden={true}'],
							quickLink: 'slds',
							component: <CSButton iconOrigin="slds" iconName="list" labelHidden label="default icon-only" />
						},
						{
							variationName: ['cs'],
							variationText: ['iconName="tag"', 'labelHidden={true}'],
							quickLink: 'cs',
							component: <CSButton iconOrigin="cs" iconName="tag" labelHidden label="default icon-only" />
						}
					]
				},
				{
					propName: 'loading',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSButton loading label="Spinner" />
						},
						{
							variationName: ['true'],
							variationText: ['labelHidden={true}'],
							quickLink: 'true labelHidden',
							component: <CSButton labelHidden loading label="Spinner" />
						},
						{
							variationName: ['true'],
							variationText: ['btnStyle="brand"'],
							quickLink: 'true brand',
							component: <CSButton btnStyle="brand" loading label="Spinner" />
						},
						{
							variationName: ['true'],
							variationText: ['btnStyle="brand", labelHidden="true'],
							quickLink: 'true brand labelHidden',
							component: <CSButton btnStyle="brand" labelHidden loading label="Spinner" />
						}
					]
				},
				{
					propName: 'iconRotate',
					variations: [
						{
							variationName: ['90'],
							variationText: ['iconName="activity"'],
							quickLink: '90',
							component: <CSButton iconName="list" iconRotate="90" label="Icon rotated 90 degrees" />
						},
						{
							variationName: ['180'],
							variationText: ['iconName="activity"'],
							quickLink: '180',
							component: <CSButton iconName="list" iconRotate="180" label="Icon rotated 180 degrees" />
						},
						{
							variationName: ['270'],
							variationText: ['iconName="activity"'],
							quickLink: '270',
							component: <CSButton iconName="list" iconRotate="270" label="Icon rotated 270 degrees" />
						}
					]
				},
				{
					propName: 'iconSize',
					variations: [
						{
							variationName: ['10px'],
							variationText: ['iconName="activity"'],
							quickLink: '10px',
							component: <CSButton iconName="list" iconSize="10px" label="Icon size 10px" />
						},
						{
							variationName: ['2rem'],
							variationText: ['iconName="activity"'],
							quickLink: '2rem',
							component: <CSButton iconName="list" iconSize="2rem" label="Icon size 2rem" />
						},
						{
							variationName: ['2px'],
							variationText: ['iconName="activity"'],
							quickLink: '2px',
							component: <CSButton iconName="list" iconSize="2px" label="Icon size 2px" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['max'],
							quickLink: 'max',
							component: <CSButton label="default max" width="max" />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSButton label="default disabled" disabled />
						}
					]
				},
				{
					propName: 'link',
					alert: {
						variant: 'info',
						text: 'Link button should always have distinctive icon to distinguish from regular buttons. Alternative is to add text-decoration: underline'
					},
					variations: [
						{
							component: <CSButton iconName="link" label="default" link="https://www.google.com" />
						}
					]
				},
				{
					propName: 'openInNewTab',
					variations: [
						{
							variationName: ['true'],
							component: <CSButton label="default" openInNewTab link="https://www.google.com" />
						}
					]
				},
				{
					propName: 'value',
					variations: [
						{
							component: <CSButton label="default initial" value="value" />
						}
					]
				},
				{
					propName: 'routerLink',
					customText: 'Can render React Router\'s NavLink or Link component',
					variations: [
						{
							component: <CSButton label="default initial" routerLink={<NavLink to="/icons/LightningIcons" />} />
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
							component:
								<CSButton label="Custom class" className="custom-class" />
						}
					]
				},
				{
					propName: 'children',
					customText: 'CSButton supports custom content provided as a child',
					variations: [
						{
							component:
								<CSButton label="default initial" labelHidden>
									<CSTooltip content="This is custom content provided as a child of CSButton" />
								</CSButton>
						}
					]
				}
			],
			properties: [
				{
					name: 'borderRadius',
					types: ['string'],
					default: '0.25rem',
					description: 'Sets custom border radius on the button.'
				}, {
					name: 'btnStyle',
					customTypes: [{
						name: 'CSButtonStyle',
						types: ['\'initial\'', '\'brand\'', '\'outline\'']
					}],
					default: '\'initial\'',
					description: 'Set the button style.'
				}, {
					name: 'btnType',
					customTypes: [{
						name: 'CSButtonType',
						types: ['\'default\'', '\'error\'', '\'success\'', '\'transparent\'']
					}],
					default: '\'default\'',
					description: 'Set the button type.'
				}, {
					name: 'children',
					types: ['any'],
					description: 'This component supports custom content passed as children.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the button.'
				}, {
					name: 'color',
					types: ['string'],
					description: 'Set a custom colour for the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the button.'
				}, {
					name: 'iconColor',
					types: ['string'],
					description: 'Set a custom colour for the icon inside of the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
				}, {
					name: 'iconDisplay',
					customTypes: [{
						name: 'CSButtonIconDisplay',
						types: ['\'default\'', '\'icon-only\'', '\'no-icon\'']
					}],
					default: '\'default\'',
					description: 'Set whether to omit the icon or display the icon only.'
				}, {
					name: 'iconName',
					types: ['string'],
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
						name: 'CSButtonIconPosition',
						types: ['\'left\'', '\'right\'']
					}],
					default: '\'left\'',
					description: 'Set where the icon should be positioned inside the button.'
				}, {
					name: 'iconRotate',
					types: ['string'],
					default: '\'0\'',
					description: 'Set by how many degrees the icon should be rotated clockwise. (eg. 90, 180, etc.)'
				}, {
					name: 'iconSize',
					types: ['string'],
					description: 'Set the size of the icon. (eg. 12px, 1rem, etc.)'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the button.'
				}, {
					name: 'label',
					types: ['string'],
					required: true,
					description: 'Set which text should appear as the button label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Logic to hide the label.'
				}, {
					name: 'link',
					types: ['string'],
					description: 'Set a valid URL path to where the button should link.'
				}, {
					name: 'loading',
					types: ['boolean'],
					default: 'false',
					description: 'Change icon to spinner and show spin animation. To be used while a process is in progress.'
				}, {
					name: 'routerLink',
					types: ['Element'],
					description: 'Define a React Router NavLink or Link component to be rendered instead of the button.'
				}, {
					name: 'onClick',
					types: ['(value) => any'],
					description: 'Handler method for the click event.'
				}, {
					name: 'onKeyDown',
					types: ['(event) => any'],
					description: 'Handler method for the keydown event.'
				}, {
					name: 'onMouseDown',
					types: ['(event) => any'],
					description: 'Handler method for the mousedown event.'
				}, {
					name: 'openInNewTab',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the link should open in a new tab.'
				}, {
					name: 'size',
					customTypes: [{
						name: 'CSButtonSize',
						types: ['\'normal\'', '\'small\'', '\'xsmall\'', '\'large\'']
					}],
					default: '\'normal\'',
					description: 'Set button size.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the value of the title attribute'
				}, {
					name: 'width',
					customTypes: [{
						name: 'CSButtonWidth',
						types: ['\'auto\'', '\'max\'']
					}],
					default: '\'auto\'',
					description: 'Set button width.'
				}, {
					name: 'value',
					types: ['any'],
					description: 'Pass a value to the button.'
				}, {
					name: 'role',
					required: 'CSButtonDropdown',
					customTypes: [{
						name: 'CSButtonRole',
						types: ['\'menuitem\'']
					}],
					description: 'Override implicit native button role when button is used in a certain context.'
				}, {
					name: 'ariaExpanded',
					required: 'CSButtonDropdown',
					types: ['boolean'],
					description: 'Accessible attribute to indicate whether an object controlled by button is expanded or not.'
				}, {
					name: 'ariaHaspopup',
					required: 'CSButtonDropdown',
					types: ['boolean'],
					description: 'Accessible attribute to indicate whether an object controlled by the button is a popup.'
				}, {
					name: 'ariaLabel',
					required: 'CSCustomSelect',
					types: ['string'],
					description: 'Override the aria-label attribute which is by default set by the label prop.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the button.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.1',
						'1.4.3',
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.3.1',
						'2.4.4',
						'2.4.7',
						'3.2.1',
						'3.3.1',
						'4.1.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<button>`',
								'Icon is a child element with `aria-hidden`'
							],
							properties: [
								'`aria-expanded` (when button controls display of another object)',
								'`aria-haspopup` (when button controls display of a popup such as menu)',
								'`aria-label`',
								'`role` (change role button to a more accurate one such as menu item)'
							],
							styling: [
								'Color contrast ratio > 4.5',
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable and supports clicks with enter and space keys'
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} className="no-border" />
					<div className="cs-btn-type-preview">
						<CSTable>
							<CSTableHeader>
								<CSTableCell/>
								<CSTableCell>
									btnStyle="initial"
								</CSTableCell>
								<CSTableCell>
									btnStyle="brand"
								</CSTableCell>
								<CSTableCell>
									btnStyle="outline"
								</CSTableCell>
							</CSTableHeader>
							<CSTableBody>
								<CSTableRow>
									<CSTableCell>
										btnType="default"
									</CSTableCell>
									<CSTableCell>
										<CSButton label="default initial" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnStyle="brand" label="default brand" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnStyle="outline" label="default outline" />
									</CSTableCell>
								</CSTableRow>
								<CSTableRow>
									<CSTableCell>
										btnType="error"
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="error" label="error initial" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="error" btnStyle="brand" label="error brand" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="error" btnStyle="outline" label="error outline" />
									</CSTableCell>
								</CSTableRow>
								<CSTableRow>
									<CSTableCell>
										btnType="success"
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="success" label="success initial" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="success" btnStyle="brand" label="success brand" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="success" btnStyle="outline" label="success outline" />
									</CSTableCell>
								</CSTableRow>
								<CSTableRow>
									<CSTableCell>
										btnType="transparent"
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="transparent" label="transparent initial" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="transparent" btnStyle="brand" label="transparent brand" />
									</CSTableCell>
									<CSTableCell>
										<CSButton btnType="transparent" btnStyle="outline" label="transparent outline" />
									</CSTableCell>
								</CSTableRow>
							</CSTableBody>
						</CSTable>
					</div>
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

export default CSButtonPreview;
