import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	CSButton,
	CSTable,
	CSTableCell,
	CSTableHeader,
	CSTableBody,
	CSTableRow,
	CSTooltip
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSButtonPreview extends React.Component {
	handleClick = () => alert('Button has been clicked.');
	handleMouseDown = () => alert('Mouse down has been registered.');
	handleMouseEnter = () => alert('Mouse enter has been registered.');
	handleMouseLeave = () => alert('Mouse leave has been registered.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);

	getDoc = () => ({
		name: 'Button',
		usage: 'Button provides a base UI for button actions.',
		accessible: 'yes',
		components: [
			{
				name: 'CSButton',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a button. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSButton label="Label" />,
								code: '<CSButton label="Label" />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="1rem"',
								quickLink: '1rem',
								component: <CSButton label="Round border button" borderRadius="1rem" />,
								code: `<CSButton label="Round border button" borderRadius="1rem" />`
							}, {
								primaryVariants: 'borderRadius="0"',
								quickLink: '0',
								component: <CSButton label="Sharp border button" borderRadius="0" />,
								code: '<CSButton label="Sharp border button" borderRadius="0"/>'
							}, {
								primaryVariants: 'borderRadius="1rem"',
								secondaryVariants: ['labelHidden={true}', 'iconName="list"'],
								quickLink: '1rem icon only',
								component: <CSButton
									label="Round icon only button"
									labelHidden
									iconName="list"
									borderRadius="1rem"
								/>,
								code: `<CSButton
									label="Round icon only button"
									labelHidden
									iconName="list"
									borderRadius="1rem"
								/>`
							}
						]
					}, {
						propName: 'btnType & btnStyle',
						variations: [
							{
								primaryVariants: [
									'btnType="default"',
									'btnStyle="initial"'
								],
								quickLink: 'default initial',
								component: <CSButton label="Default initial" />,
								code: '<CSButton label="Default initial" />'
							}, {
								primaryVariants: [
									'btnType="default"',
									'btnStyle="brand"'
								],
								quickLink: 'default brand',
								component: <CSButton label="Default brand" btnStyle="brand" />,
								code: '<CSButton label="Default brand" btnStyle="brand" />'
							}, {
								primaryVariants: [
									'btnType="default"',
									'btnStyle="outline"'
								],
								quickLink: 'default outline',
								component: <CSButton label="Default outline" btnStyle="outline" />,
								code: '<CSButton label="Default outline" btnStyle="outline" />'
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="initial"'
								],
								quickLink: 'transparent initial',
								customClass: 'inverse-background',
								component: <div className="purple-background">
									<CSButton label="Transparent initial" btnType="transparent" />
								</div>,
								code: `<div className="purple-background">
									<CSButton label="Transparent initial" btnType="transparent" />
								</div>`
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="brand"'
								],
								quickLink: 'transparent brand',
								component: <CSButton
									label="Transparent brand"
									btnType="transparent"
									btnStyle="brand"
								/>,
								code: `<CSButton
									label="Transparent brand"
									btnType="transparent"
									btnStyle="brand"
								/>`
							}, {
								primaryVariants: [
									'btnType="transparent"',
									'btnStyle="outline"'
								],
								quickLink: 'transparent outline',
								customClass: 'inverse-background',
								component: <div className="purple-background">
									<CSButton
										label="Transparent outline"
										btnType="transparent"
										btnStyle="outline"
									/>
								</div>,
								code: `<div className="purple-background">
									<CSButton
										label="Transparent outline"
										btnType="transparent"
										btnStyle="outline"
									/>
								</div>`
							}, {
								primaryVariants: [
									'btnType="error"',
									'btnStyle="initial"'
								],
								quickLink: 'error initial',
								component: <CSButton label="Error initial" btnType="error" />,
								code: '<CSButton label="Error initial" btnType="error" />'
							}, {
								primaryVariants: [
									'btnType="error"',
									'btnStyle="brand"'
								],
								quickLink: 'error brand',
								component: <CSButton
									label="Error brand"
									btnType="error"
									btnStyle="brand"
								/>,
								code: `<CSButton
									label="Error brand"
									btnType="error"
									btnStyle="brand"
								/>`
							}, {
								primaryVariants: [
									'btnType="error"',
									'btnStyle="outline"'
								],
								quickLink: 'error outline',
								component: <CSButton
									label="Error outline"
									btnType="error"
									btnStyle="outline"
								/>,
								code: `<CSButton
									label="Error outline"
									btnType="error"
									btnStyle="outline"
								/>`
							}, {
								primaryVariants: [
									'btnType="success"',
									'btnStyle="initial"'
								],
								quickLink: 'success initial',
								component: <CSButton label="Success initial" btnType="success" />,
								code: '<CSButton label="Success initial" btnType="success" />'
							}, {
								primaryVariants: [
									'btnType="success"',
									'btnStyle="brand"'
								],
								quickLink: 'success brand',
								component: <CSButton
									label="Success brand"
									btnType="success"
									btnStyle="brand"
								/>,
								code: `<CSButton
									label="Success brand"
									btnType="success"
									btnStyle="brand"
								/>`
							}, {
								primaryVariants: [
									'btnType="success"',
									'btnStyle="outline"'
								],
								quickLink: 'success outline',
								component: <CSButton
									label="Success outline"
									btnType="success"
									btnStyle="outline"
								/>,
								code: `<CSButton
									label="Success outline"
									btnType="success"
									btnStyle="outline"
								/>`
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="#4a26ab"',
								secondaryVariants: ['btnType="default"', 'btnStyle="initial"'],
								quickLink: 'default initial',
								component: <CSButton
									label="Initial color button"
									btnStyle="initial"
									color="#4a26ab"
								/>,
								code: `<CSButton
									label="Initial color button"
									btnStyle="initial"
									color="#4a26ab"
								/>`
							}, {
								primaryVariants: 'color="#4a26ab"',
								secondaryVariants: ['btnType="default"', 'btnStyle="brand"'],
								quickLink: 'default brand',
								component: <CSButton
									label="Brand color button"
									btnStyle="brand"
									color="#4a26ab"
								/>,
								code: `<CSButton
									label="Brand color button"
									btnStyle="brand"
									color="#4a26ab"
								/>`
							}, {
								primaryVariants: 'color="#4a26ab"',
								secondaryVariants: ['btnType="default"', 'btnStyle="outline"'],
								quickLink: 'default outline',
								component: <CSButton
									label="Outline color button"
									btnStyle="outline"
									color="#4a26ab"
								/>,
								code: `<CSButton
									label="Outline color button"
									btnStyle="outline"
									color="#4a26ab"
								/>`
							}, {
								primaryVariants: 'color="#3cdbc0"',
								secondaryVariants: ['btnType="transparent"', 'btnStyle="inital"'],
								quickLink: 'transparent inital',
								component: <div className="purple-background">
									<CSButton
										label="Transparent initial color button"
										btnType="transparent"
										btnStyle="initial"
										color="#3cdbc0"
									/>
								</div>,
								code: `<div className="purple-background">
									<CSButton
										label="Transparent initial color button"
										btnType="transparent"
										btnStyle="initial"
										color="#3cdbc0"
									/>
								</div>`
							}, {
								primaryVariants: 'color="#4a26ab"',
								secondaryVariants: ['btnType="transparent"', 'btnStyle="brand"'],
								quickLink: 'transparent brand',
								component: <CSButton
									label="Transparent brand color button"
									btnType="transparent"
									btnStyle="brand"
									color="#4a26ab"
								/>,
								code: `<CSButton
									label="Transparent brand color button"
									btnType="transparent"
									btnStyle="brand"
									color="#4a26ab"
								/>`
							}, {
								primaryVariants: 'color="#3cdbc0"',
								secondaryVariants: ['btnType="transparent"', 'btnStyle="outline"'],
								quickLink: 'transparent outline',
								component: <div className="purple-background">
									<CSButton
										label="Transparent outline color button"
										btnType="transparent"
										btnStyle="outline"
										color="#3cdbc0"
									/>
								</div>,
								code: `<div className="purple-background">
									<CSButton
										label="Transparent outline color button"
										btnType="transparent"
										btnStyle="outline"
										color="#3cdbc0"
									/>
								</div>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSButton label="Disabled button" disabled />,
								code: `<CSButton label="Disabled button" disabled />`
							}
						]
					}, {
						propName: 'iconColor',
						variations: [
							{
								primaryVariants: 'iconColor="#4a26ab"',
								secondaryVariants: 'iconName="list"',
								component: <CSButton
									label="Custom icon color"
									iconColor="#4a26ab"
									iconName="list"
								/>,
								code: `<CSButton
									label="Custom icon color"
									iconColor="#4a26ab"
									iconName="list"
								/>`
							}
						]
					}, {
						propName: 'iconDisplay',
						alert: {
							variant: 'warning',
							text: 'Prop is deprecated and should not be used. Use labelHidden prop instead.'
						},
						variations: [
							{
								primaryVariants: 'iconDisplay="default"',
								secondaryVariants: 'iconName="list"',
								quickLink: 'default',
								component: <CSButton
									label="Activity icon button"
									iconName="list"
									iconDisplay="default"
								/>,
								code: `<CSButton
									label="Activity icon button"
									iconName="list"
									iconDisplay="default"
								/>`
							}, {
								primaryVariants: 'iconDisplay="no-icon"',
								secondaryVariants: ['size="large"', 'iconName="list"'],
								quickLink: 'no-icon large',
								component: <CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="large"
								/>,
								code: `<CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="large"
								/>`
							}, {
								primaryVariants: 'iconDisplay="no-icon"',
								secondaryVariants: ['size="small"', 'iconName="list"'],
								quickLink: 'no-icon small',
								component: <CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="small"
								/>,
								code: `<CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="small"
								/>`
							}, {
								primaryVariants: 'iconDisplay="no-icon"',
								secondaryVariants: ['size="xsmall"', 'iconName="list"'],
								quickLink: 'no-icon xsmall',
								component: <CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="xsmall"
								/>,
								code: `<CSButton
									label="No-icon button"
									iconName="list"
									iconDisplay="no-icon"
									size="xsmall"
								/>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="list"',
									'iconOrigin="slds"'

								],
								quickLink: 'slds',
								component: <CSButton
									label="slds icon"
									iconName="list"
								/>,
								code: `<CSButton
									label="slds icon"
									iconName="list"
								/>`
							}, {
								primaryVariants: [
									'iconName="tag"',
									'iconOrigin="cs"'

								],
								quickLink: 'cs',
								component: <CSButton
									label="cs icon"
									iconOrigin="cs"
									iconName="tag"
								/>,
								code: `<CSButton
									label="cs icon"
									iconOrigin="cs"
									iconName="tag"
								/>`
							}
						]
					}, {
						propName: 'iconPosition',
						variations: [
							{
								primaryVariants: 'iconPosition="left"',
								secondaryVariants: 'iconName="list"',
								quickLink: 'left',
								component: <CSButton
									label="Icon Left"
									iconName="list"
								/>,
								code: `<CSButton
									label="Icon Left"
									iconName="list"
								/>`
							}, {
								primaryVariants: 'iconPosition="right"',
								secondaryVariants: 'iconName="list"',
								quickLink: 'right',
								component: <CSButton
									label="Icon Right"
									iconName="list"
									iconPosition="right"
								/>,
								code: `<CSButton
									label="Icon Right"
									iconName="list"
									iconPosition="right"
								/>`
							}
						]
					}, {
						propName: 'iconRotate',
						variations: [
							{
								primaryVariants: 'iconRotate="90"',
								secondaryVariants: 'iconName="list"',
								quickLink: '90',
								component: <CSButton
									label="Icon rotated 90 degrees"
									iconName="list"
									iconRotate="90"
								/>,
								code: `<CSButton
									label="Icon rotated 90 degrees"
									iconName="list"
									iconRotate="90"
								/>`
							}, {
								primaryVariants: 'iconRotate="180"',
								secondaryVariants: 'iconName="list"',
								quickLink: '180',
								component: <CSButton
									label="Icon rotated 180 degrees"
									iconName="list"
									iconRotate="180"
								/>,
								code: `<CSButton
									label="Icon rotated 180 degrees"
									iconName="list"
									iconRotate="180"
								/>`
							}, {
								primaryVariants: 'iconRotate="270"',
								secondaryVariants: 'iconName="list"',
								quickLink: '270',
								component: <CSButton
									label="Icon rotated 270 degrees"
									iconName="list"
									iconRotate="270"
								/>,
								code: `<CSButton
									label="Icon rotated 270 degrees"
									iconName="list"
									iconRotate="270"
								/>`
							}
						]
					}, {
						propName: 'iconSize',
						variations: [
							{
								primaryVariants: 'iconSize="10px"',
								secondaryVariants: 'iconName="list"',
								quickLink: '10px',
								component: <CSButton
									label="Icon size 10px"
									iconName="list"
									iconSize="10px"
								/>,
								code: `<CSButton
									label="Icon size 10px"
									iconName="list"
									iconSize="10px"
								/>`
							}, {
								primaryVariants: 'iconSize="2rem"',
								secondaryVariants: 'iconName="list"',
								quickLink: '2rem',
								component: <CSButton
									label="Icon size 2rem"
									iconName="list"
									iconSize="2rem"
								/>,
								code: `<CSButton
									label="Icon size 2rem"
									iconName="list"
									iconSize="2rem"
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								secondaryVariants: 'iconName="list"',
								component: <CSButton
									label="Label is hidden"
									labelHidden
									iconName="list"
								/>,
								code: `<CSButton
									label="Label is hidden"
									labelHidden
									iconName="list"
								/>`
							}, {
								primaryVariants: 'labelHidden={true}',
								secondaryVariants: ['size="large"', 'iconName="list"'],
								quickLink: 'large',
								component: <CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="large"
								/>,
								code: `<CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="large"
								/>`
							}, {
								primaryVariants: 'labelHidden={true}',
								secondaryVariants: ['size="small"', 'iconName="list"'],
								quickLink: 'small',
								component: <CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="small"
								/>,
								code: `<CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="small"
								/>`
							}, {
								primaryVariants: 'labelHidden={true}',
								secondaryVariants: ['size="xsmall"', 'iconName="list"'],
								quickLink: 'xsmall',
								component: <CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="xsmall"
								/>,
								code: `<CSButton
									label="Activity icon button"
									iconName="list"
									labelHidden
									size="xsmall"
								/>`
							}
						]
					}, {
						propName: 'link',
						alert: {
							variant: 'info',
							text: 'Link button should always have distinctive icon to distinguish from regular buttons. Alternative is to add text-decoration: underline'
						},
						variations: [
							{
								secondaryVariants: 'iconName="link"',
								component: <CSButton
									label="Link button"
									iconName="link"
									link="https://www.google.com"
								/>,
								code: `<CSButton
									label="Link button"
									iconName="link"
									link="https://www.google.com"
								/>`
							}
						]
					}, {
						propName: 'loading',
						description: 'When loading, button is in disabled state',
						variations: [
							{
								primaryVariants: 'loading={true}',
								quickLink: 'true',
								component: <CSButton label="Spinner" loading />,
								code: '<CSButton label="Spinner" loading />'
							}, {
								primaryVariants: 'loading={true}',
								secondaryVariants: 'labelHidden={true}',
								quickLink: 'true labelHidden',
								component: <CSButton
									label="Spinner"
									labelHidden
									loading
								/>,
								code: `<CSButton
									label="Spinner"
									labelHidden
									loading
								/>`
							}, {
								primaryVariants: 'loading={true}',
								secondaryVariants: 'btnStyle="brand"',
								quickLink: 'true brand',
								component: <CSButton
									label="Spinner"
									btnStyle="brand"
									loading
								/>,
								code: `<CSButton
									label="Spinner"
									btnStyle="brand"
									loading
								/>`
							}, {
								primaryVariants: 'loading={true}',
								secondaryVariants: ['btnStyle="brand"', 'labelHidden={true}'],
								quickLink: 'true brand labelHidden',
								component: <CSButton
									label="Spinner"
									labelHidden
									btnStyle="brand"
									loading
								/>,
								code: `<CSButton
									label="Spinner"
									labelHidden
									btnStyle="brand"
									loading
								/>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSButton label="Button with onClick" onClick={this.handleClick} />,
								code: '<CSButton label="Button with onClick" onClick={this.handleClick} />'
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSButton label="Button with onKeyDown" onKeyDown={this.handleKeyDown} />,
								code: '<CSButton label="Button with onKeyDown" onKeyDown={this.handleKeyDown} />'
							}
						]
					}, {
						propName: 'onMouseDown',
						variations: [
							{
								component: <CSButton label="Button with onMouseDown" onMouseDown={this.handleMouseDown} />,
								code: '<CSButton label="Button with onMouseDown" onMouseDown={this.handleMouseDown} />'
							}
						]
					}, {
						propName: 'onMouseEnter',
						variations: [
							{
								component: <CSButton label="Button with onMouseEnter" onMouseEnter={this.handleMouseEnter} />,
								code: '<CSButton label="Button with onMouseEnter" onMouseEnter={this.handleMouseEnter} />'
							}
						]
					}, {
						propName: 'onMouseLeave',
						variations: [
							{
								component: <CSButton label="Button with onMouseLeave" onMouseLeave={this.handleMouseLeave} />,
								code: '<CSButton label="Button with onMouseLeave" onMouseLeave={this.handleMouseLeave} />'
							}
						]
					}, {
						propName: 'openInNewTab',
						alert: {
							variant: 'info',
							text: 'openInNewTab prop can only be used with the link prop.'
						},
						variations: [
							{
								primaryVariants: 'openInNewTab={true}',
								secondaryVariants: 'link="url"',
								component: <CSButton
									label="openInNewTab button"
									openInNewTab
									link="https://www.google.com"
									iconName="new_window"
								/>,
								code: `<CSButton
									label="openInNewTab button"
									openInNewTab
									link="https://www.google.com"
									iconName="new_window"
								/>`
							}
						]
					}, {
						propName: 'routerLink',
						description: 'Can render React Router\'s `<NavLink />` or `<Link />` component',
						variations: [
							{
								component: <CSButton
									label="routerLink button"
									routerLink={<NavLink to="/icons/LightningIcons" />}
									iconName="link"
								/>,
								code: `<CSButton
									label="routerLink button"
									routerLink={<NavLink to="/icons/LightningIcons" />}
									iconName="link"
								/>`
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <CSButton label="Large button" size="large" />,
								code: '<CSButton label="Large button" size="large" />'
							}, {
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <CSButton label="Small button" size="small" />,
								code: '<CSButton label="Small button" size="small" />'
							}, {
								primaryVariants: 'size="xsmall"',
								quickLink: 'xsmall',
								component: <CSButton label="Xsmall button" size="xsmall" />,
								code: '<CSButton label="Xsmall button" size="xsmall" />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								secondaryVariants: 'disabled={true}',
								component: <CSButton
									label="Button with custom title"
									title="this is a title"
								/>,
								code: `<CSButton
									label="Button with custom title"
									title="this is a title"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSButton label="Button with value" value="value" />,
								code: '<CSButton label="Button with value" value="value" />'
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="max"',
								quickLink: 'max',
								component: <CSButton label="Max width button" width="max" />,
								code: '<CSButton label="Max width button" width="max" />'
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
								component: <CSButton
									label="Custom class"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSButton
									label="Custom class"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}, {
						propName: 'children',
						secondaryVariants: 'labelHidden={true}',
						description: 'CSButton supports custom content provided as a child',
						variations: [
							{
								component: <CSButton label="Default initial" labelHidden>
									<CSTooltip content="This is custom content provided as a child of CSButton" />
								</CSButton>,
								code: `<CSButton label="Default initial" labelHidden>
								<CSTooltip content="This is custom content provided as a child of CSButton" />
							</CSButton>`
							}
						]
					}
				],
				properties: [
					{
						name: 'borderRadius',
						types: ['string'],
						default: '\'0.25rem\'',
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
						description: 'Set a custom color for the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
					}, {
						name: 'disabled',
						types: ['boolean'],
						default: 'false',
						description: 'Disable the button.'
					}, {
						name: 'iconColor',
						types: ['string'],
						description: 'Set a custom color for the icon inside of the button. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
					}, {
						name: 'iconDisplay',
						customTypes: [{
							name: 'CSButtonIconDisplay',
							types: ['\'default\'', '\'no-icon\'']
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
						description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
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
						description: 'Set by how many degrees the icon should be rotated. (eg. 90, 180, -90 etc.)'
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
						name: 'onMouseEnter',
						types: ['(event) => any'],
						description: 'Handler method for the mouseenter event.'
					}, {
						name: 'onMouseLeave',
						types: ['(event) => any'],
						description: 'Handler method for the mouseleave event.'
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
						description: 'Set the value of the title attribute.'
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
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<button>`',
					'Icon is a child element with `aria-hidden`'
				],
				attributes: [
					'`aria-expanded` - support when button controls display of another object',
					'`aria-haspopup` - support when button controls display of a popup such as menu',
					'`aria-label` - necessary when label is hidden',
					'`role` - change role button if needed to a more accurate one such as menu item'
				],
				styling: [
					'Color contrast ratio > 4.5 (note: disabled state fails)',
					'Distinct hover, active and focus state styles'
				],
				keyboardOperability: [
					'`<button>` OOTB focusable and supports clicks with `Enter` and `Space` keys'
				]
			}
		}
	})

	render = () => (
		<Preview {...this.getDoc()}>
			<div className="button-style-preview">
				<CSTable>
					<CSTableHeader>
						<CSTableCell />
						<CSTableCell>btnStyle="initial"</CSTableCell>
						<CSTableCell>btnStyle="brand"</CSTableCell>
						<CSTableCell>btnStyle="outline"</CSTableCell>
					</CSTableHeader>
					<CSTableBody>
						<CSTableRow>
							<CSTableCell>btnType="default"</CSTableCell>
							<CSTableCell>
								<CSButton label="Default initial" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnStyle="brand" label="Default brand" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnStyle="outline" label="Default outline" />
							</CSTableCell>
						</CSTableRow>
						<CSTableRow>
							<CSTableCell>btnType="error"</CSTableCell>
							<CSTableCell>
								<CSButton btnType="error" label="Error initial" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="error" btnStyle="brand" label="Error brand" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="error" btnStyle="outline" label="Error outline" />
							</CSTableCell>
						</CSTableRow>
						<CSTableRow>
							<CSTableCell>btnType="success"</CSTableCell>
							<CSTableCell>
								<CSButton btnType="success" label="Success initial" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="success" btnStyle="brand" label="Success brand" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="success" btnStyle="outline" label="Success outline" />
							</CSTableCell>
						</CSTableRow>
						<CSTableRow>
							<CSTableCell>btnType="transparent"</CSTableCell>
							<CSTableCell>
								<CSButton btnType="transparent" label="Transparent initial" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="transparent" btnStyle="brand" label="Transparent brand" />
							</CSTableCell>
							<CSTableCell>
								<CSButton btnType="transparent" btnStyle="outline" label="Transparent outline" />
							</CSTableCell>
						</CSTableRow>
					</CSTableBody>
				</CSTable>
			</div>
		</Preview>
	)
}

export default CSButtonPreview;
