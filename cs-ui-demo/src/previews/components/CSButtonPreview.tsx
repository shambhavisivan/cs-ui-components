import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import { NavLink } from 'react-router-dom';

import { CSButton } from '@cloudsense/cs-ui-components';

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
					propName: 'btnType',
					customText: '',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton iconName="activity" label="default initial" />
						},
						{
							variationName: ['default'],
							quickLink: 'default brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnStyle="brand" iconName="activity" label="default brand" />
						},
						{
							variationName: ['default'],
							quickLink: 'default outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnStyle="outline" iconName="activity" label="default outline" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent initial',
							variationText: ['btnStyle="initial"'],
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" iconName="activity" label="transparent initial" />
							</div>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="transparent" btnStyle="brand" iconName="activity" label="transparent brand" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent outline',
							variationText: ['btnStyle="outline"'],
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" btnStyle="outline" iconName="activity" label="transparent outline" />
							</div>
						},
						{
							variationName: ['error'],
							quickLink: 'error initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton btnType="error" iconName="activity" label="error initial" />
						},
						{
							variationName: ['error'],
							quickLink: 'error brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="error" btnStyle="brand" iconName="activity" label="error brand" />
						},
						{
							variationName: ['error'],
							quickLink: 'error outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnType="error" btnStyle="outline" iconName="activity" label="error outline" />
						},
						{
							variationName: ['success'],
							quickLink: 'success initial',
							variationText: ['btnStyle="initial"'],
							component: <CSButton btnType="success" iconName="activity" label="success initial" />
						},
						{
							variationName: ['success'],
							quickLink: 'success brand',
							variationText: ['btnStyle="brand"'],
							component: <CSButton btnType="success" btnStyle="brand" iconName="activity" label="success brand" />
						},
						{
							variationName: ['success'],
							quickLink: 'success outline',
							variationText: ['btnStyle="outline"'],
							component: <CSButton btnType="success" btnStyle="outline" iconName="activity" label="success outline" />
						}
					]
				},
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="initial"'],
							quickLink: 'default initial',
							component: <CSButton
								btnStyle="initial"
								color="pink"
								label="custom color button"
								iconName="activity"
							/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="brand"'],
							quickLink: 'default brand',
							component: <CSButton
								btnStyle="brand"
								color="pink"
								label="custom color button"
								iconName="activity"
							/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="outline"'],
							quickLink: 'default outline',
							component: <CSButton
								btnStyle="outline"
								color="pink"
								label="custom color button"
								iconName="activity"
							/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="inital"'],
							quickLink: 'transparent inital',
							component: <div className="blue-background">
								<CSButton
									btnType="transparent"
									btnStyle="initial"
									color="pink"
									label="custom color button"
									iconName="activity"
								/>
							</div>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="brand"'],
							quickLink: 'transparent brand',
							component: <CSButton
								btnType="transparent"
								btnStyle="brand"
								color="pink"
								label="custom color button"
								iconName="activity"
							/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="outline"'],
							quickLink: 'transparent outline',
							component: <div className="blue-background">
								<CSButton
									btnType="transparent"
									btnStyle="outline"
									color="pink"
									label="custom color button"
									iconName="activity"
								/>
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
							component: <CSButton size="large" iconName="activity" label="default large" />
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							component: <CSButton size="small" iconName="activity" label="default small" />
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							component: <CSButton size="xsmall" iconName="activity" label="default xsmall" />
						}
					]
				},
				{
					propName: 'btnRound',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: <CSButton btnRound iconName="activity" label="default round" />
						}
					]
				},
				{
					propName: 'onClick',
					customText: '',
					variations: [
						{
							component: <CSButton onClick={this.handleClick} iconName="activity" label="default round" />
						}
					]
				},
				{
					propName: 'onMouseDown',
					customText: '',
					variations: [
						{
							component: <CSButton onMouseDown={this.handleMouseDown} iconName="activity" label="default round" />
						}
					]
				},
				{
					propName: 'onKeyDown',
					customText: '',
					variations: [
						{
							component: <CSButton onKeyDown={this.handleKeyDown} iconName="activity" label="default round" />
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
					propName: 'iconColor',
					variations: [
						{
							variationName: ['red'],
							quickLink: 'red',
							component: <CSButton label="default with id" iconColor="red" iconName="activity" />
						},
						{
							variationName: ['green'],
							variationText: ['color="red"'],
							quickLink: 'green',
							component: <CSButton label="default with id" iconColor="green" color="red" iconName="activity" />
						}
					]
				},
				{
					propName: 'iconDisplay',
					customText: '',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="default" />
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" />
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only large',
							variationText: ['size="large"'],
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="large" />
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only small',
							variationText: ['size="small"'],
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="small" />
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only xsmall',
							variationText: ['size="xsmall"'],
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="xsmall" />
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon large',
							variationText: ['size="large"'],
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="large" />
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon small',
							variationText: ['size="small"'],
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="small" />
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon xsmall',
							variationText: ['size="xsmall"'],
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="xsmall" />
						}
					]
				},
				{
					propName: 'iconName',
					customText: '',
					variations: [
						{
							component: <CSButton iconName="activity" label="iconName activity" />
						}
					]
				},
				{
					propName: 'iconPosition',
					customText: '',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							component: <CSButton iconName="activity" iconPosition="left" label="Icon Left" />
						},
						{
							variationName: ['right'],
							quickLink: 'right',
							component: <CSButton iconName="activity" iconPosition="right" label="Icon Right" />
						}
					]
				},
				{
					propName: 'iconOrigin',
					customText: '',
					variations: [
						{
							variationName: ['slds'],
							quickLink: 'slds',
							component: <CSButton iconOrigin="slds" iconName="activity" iconDisplay="icon-only" label="default icon-only round" />
						},
						{
							variationName: ['cs'],
							quickLink: 'cs',
							component: <CSButton iconOrigin="cs" iconName="tag" iconDisplay="icon-only" label="default icon-only round" />
						}
					]
				},
				{
					propName: 'loading',
					customText: '',
					variations: [
						{
							variationName: ['true', 'no icon'],
							component: <CSButton loading label="Spinner" />
						},
						{
							variationName: ['true', 'icon-only'],
							component: <CSButton iconOrigin="cs" iconName="tag" iconDisplay="icon-only" loading label="Spinner" />
						},
						{
							variationName: ['true', 'with icon'],
							component: <CSButton iconOrigin="cs" iconName="tag" loading label="Spinner" />
						},
						{
							variationName: ['true', 'brand'],
							component: <CSButton btnStyle="brand" loading label="Spinner" />
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
							component: <CSButton iconName="activity" iconRotate="90" label="Icon rotated 90 degrees" />
						},
						{
							variationName: ['180'],
							quickLink: '180',
							component: <CSButton iconName="activity" iconRotate="180" label="Icon rotated 180 degrees" />
						},
						{
							variationName: ['270'],
							quickLink: '270',
							component: <CSButton iconName="activity" iconRotate="270" label="Icon rotated 270 degrees" />
						}
					]
				},
				{
					propName: 'iconSize',
					customText: '',
					variations: [
						{
							variationName: ['10px'],
							quickLink: '10px',
							component: <CSButton iconName="activity" iconSize="10px" label="Icon size 10px" />
						},
						{
							variationName: ['2rem'],
							quickLink: '2rem',
							component: <CSButton iconName="activity" iconSize="2rem" label="Icon size 2rem" />
						},
						{
							variationName: ['2px'],
							quickLink: '2px',
							component: <CSButton iconName="activity" iconSize="2px" label="Icon size 2px" />
						}
					]
				},
				{
					propName: 'width',
					customText: '',
					variations: [
						{
							variationName: ['max'],
							quickLink: 'max',
							component: <CSButton iconName="activity" label="default max" width="max" />
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
							component: <CSButton iconName="activity" label="default disabled" disabled />
						}
					]
				},
				{
					propName: 'link',
					alert: {
						variant: 'info',
						text: 'Link button should always have distinctive icon to distinguish from regular buttons. Alternative is to add text-decoration: underline'
					},
					customText: '',
					variations: [
						{
							component: <CSButton iconName="link" label="default" link="https://www.google.com" />
						}
					]
				},
				{
					propName: 'openInNewTab',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							component: <CSButton iconName="activity" label="default" openInNewTab link="https://www.google.com" />
						}
					]
				},
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component: <CSButton iconName="activity" label="default initial" value="value" />
						}
					]
				},
				{
					propName: 'routerLink',
					customText: 'Can render React Router\'s NavLink or Link component',
					variations: [
						{
							component: <CSButton iconName="activity" label="default initial" routerLink={<NavLink to="/icons/LightningIcons" />} />
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
							component: <CSButton iconName="activity" label="default initial" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'btnRound',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the button should be rounded.'
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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the button.'
				}, {
					name: 'color',
					types: ['string'],
					description: 'Set a custom colour for the button.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the button.'
				}, {
					name: 'iconColor',
					types: ['string'],
					description: 'Set a custom colour for the icon inside of the button.'
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
					description: 'Set which text, if any, should appear as the button label.'
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
					types: ['(event) => void'],
					description: 'Handler method for the click event.'
				}, {
					name: 'onKeyDown',
					types: ['(event) => void'],
					description: 'Handler method for the keydown event.'
				}, {
					name: 'onMouseDown',
					types: ['(event) => void'],
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
								'HTML <button>',
								'Icon as a child element with attribute aria-hidden'
							],
							properties: [
								'aria-expanded (when button controls display of another object)',
								'aria-haspopup (when button controls display of a popup such as menu)',
								'aria-label',
								'role (to change role button to a more accurate one such as menu item)'
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<div className="cs-btn-type-preview-wrapper">
						<div className="cs-btn-type-preview">
							<span className="cs-btnStyle-header">btnStyle</span>
							<span className="cs-btnType-header">btnType</span>
							<span className="cs-btnStyle-initial">initial</span>
							<span className="cs-btnStyle-brand">brand</span>
							<span className="cs-btnStyle-outline">outline</span>
							<span className="cs-btnType-default">default</span>
							<span className="cs-btnType-error">error</span>
							<span className="cs-btnType-success">success</span>
							<span className="cs-btnType-transparent">transparent</span>
							<span className="cs-default-initial">
								<CSButton iconName="activity" label="default initial" />
							</span>
							<span className="cs-default-brand">
								<CSButton iconName="activity" btnStyle="brand" label="default brand" />
							</span>
							<span className="cs-default-outline">
								<CSButton iconName="activity" btnStyle="outline" label="default outline" />
							</span>
							<span className="cs-error-initial">
								<CSButton iconName="activity" btnType="error" label="error initial" />
							</span>
							<span className="cs-error-brand">
								<CSButton iconName="activity" btnType="error" btnStyle="brand" label="error brand" />
							</span>
							<span className="cs-error-outline">
								<CSButton iconName="activity" btnType="error" btnStyle="outline" label="error outline" />
							</span>
							<span className="cs-success-initial">
								<CSButton iconName="activity" btnType="success" label="success initial" />
							</span>
							<span className="cs-success-brand">
								<CSButton iconName="activity" btnType="success" btnStyle="brand" label="success brand" />
							</span>
							<span className="cs-success-outline">
								<CSButton iconName="activity" btnType="success" btnStyle="outline" label="success outline" />
							</span>
							<span className="cs-transparent-initial">
								<span className="cs-transparent-bg">
									<CSButton iconName="activity" btnType="transparent" label="transparent initial" />
								</span>
							</span>
							<span className="cs-transparent-brand">
								<CSButton iconName="activity" btnType="transparent" btnStyle="brand" label="transparent brand" />
							</span>
							<span className="cs-transparent-outline">
								<span className="cs-transparent-bg">
									<CSButton iconName="activity" btnType="transparent" btnStyle="outline" label="transparent outline" />
								</span>
							</span>
						</div>
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
