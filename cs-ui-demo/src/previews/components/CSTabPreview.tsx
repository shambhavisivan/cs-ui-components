import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import { NavLink } from 'react-router-dom';

import { CSTabGroup, CSTab, CSButton } from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	handleClick = () => alert('Tab has been clicked.');

	getTabDoc = () => ({
		name: 'Tab',
		usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',
		accessible: 'yes',
		previews: [
			{
				name: 'Tab Group',
				examples: [
					{
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="normal"',
								quickLink: 'normal',
								component: <CSTabGroup>
									<CSTab name="Tab One" />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup>
									<CSTab name="Tab One" />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
							}, {
								primaryVariants: 'variant="large"',
								quickLink: 'large',
								component: <CSTabGroup variant="large">
									<CSTab name="Tab One" />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup variant="large">
									<CSTab name="Tab One" />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
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
								component: <CSTabGroup id="custom-id" className="custom-class">
									<CSTab
										name="Tab One"
										id="custom-id-2"
										className="custom-class-2"
									/>
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup id="custom-id" className="custom-class">
									<CSTab
										name="Tab One"
										id="custom-id-2"
										className="custom-class-2"
									/>
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
							}
						]
					}
				]
			}, {
				name: 'Tab',
				examples: [
					{
						propName: 'active',
						variations: [
							{
								primaryVariants: 'active={true}',
								secondaryVariants: 'variant="normal"',
								quickLink: 'true normal',
								component: <CSTabGroup variant="normal">
									<CSTab name="Tab One" active />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup variant="normal">
									<CSTab name="Tab One" active />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
						}, {
							primaryVariants: 'active={true}',
							secondaryVariants: 'variant="large"',
							quickLink: 'true large',
							component: <CSTabGroup>
								<CSTab name="Tab One" active />
								<CSTab name="Tab Two" />
								<CSTab name="Tab Three" />
							</CSTabGroup>,
							code: `<CSTabGroup>
								<CSTab name="Tab One" active />
								<CSTab name="Tab Two" />
								<CSTab name="Tab Three" />
							</CSTabGroup>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								secondaryVariants: 'variant="normal"',
								quickLink: 'disabled normal',
								component: <CSTabGroup variant="normal">
									<CSTab name="Tab One" disabled />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup variant="normal">
									<CSTab name="Tab One" disabled />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
							}, {
								primaryVariants: 'disabled={true}',
								secondaryVariants: 'variant="large"',
								quickLink: 'disabled large',
								component: <CSTabGroup>
									<CSTab name="Tab One" disabled />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>,
								code: `<CSTabGroup>
									<CSTab name="Tab One" disabled />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
							}
						]
					}, {
							propName: 'iconOrigin',
							variations: [
								{
									primaryVariants: 'iconOrigin="slds"',
									secondaryVariants: 'iconName="activity"',
									quickLink: 'slds',
									component: <CSTabGroup>
										<CSTab name="Tab One" tabIcon="activity" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab name="Tab One" tabIcon="activity" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									primaryVariants: 'iconOrigin="cs"',
									secondaryVariants: 'iconName="big_shot"',
									quickLink: 'cs',
									component: <CSTabGroup>
										<CSTab
											name="Tab One"
											iconOrigin="cs"
											tabIcon="big_shot"
										/>
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab
											name="Tab One"
											iconOrigin="cs"
											tabIcon="big_shot"
										/>
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'onClick',
							variations: [
								{
									component: <CSTabGroup variant="large">
										<CSTab name="Tab One" onClick={this.handleClick} />
										<CSTab name="Tab Two" onClick={this.handleClick} />
										<CSTab name="Tab Three" onClick={this.handleClick} />
									</CSTabGroup>,
									code: `<CSTabGroup variant="large">
										<CSTab name="Tab One" onClick={this.handleClick} />
										<CSTab name="Tab Two" onClick={this.handleClick} />
										<CSTab name="Tab Three" onClick={this.handleClick} />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'routerLink',
							description: 'Can render React Router\'s NavLink or Link component.',
							variations: [
								{
									component: <CSTabGroup>
										<CSTab name="Tab One" routerLink={<NavLink to="/icons" />} />
										<CSTab name="Tab Two" routerLink={<NavLink to="/colors" />} />
										<CSTab name="Tab Three" routerLink={<NavLink to="/accessibility" />} />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab name="Tab One" routerLink={<NavLink to="/icons" />} />
										<CSTab name="Tab Two" routerLink={<NavLink to="/colors" />} />
										<CSTab name="Tab Three" routerLink={<NavLink to="/accessibility" />} />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'status',
							variations: [
								{
									primaryVariants: 'status="initial"',
									secondaryVariants: 'variant="large"',
									quickLink: 'initial large',
									component: <CSTabGroup variant="large">
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup variant="large">
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									primaryVariants: 'status="error"',
									secondaryVariants: 'variant="large"',
									quickLink: 'error large',
									component: <CSTabGroup variant="large">
										<CSTab name="Tab One" status="error" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup variant="large">
										<CSTab name="Tab One" status="error" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									primaryVariants: 'status="warning"',
									secondaryVariants: 'variant="large"',
									quickLink: 'warning large',
									component: <CSTabGroup variant="large">
										<CSTab name="Tab One" status="warning" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup variant="large">
										<CSTab name="Tab One" status="warning" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									primaryVariants: 'status="success"',
									secondaryVariants: 'variant="large"',
									quickLink: 'success large',
									component: <CSTabGroup variant="large">
										<CSTab name="Tab One" status="success" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup variant="large">
										<CSTab name="Tab One" status="success" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'tabIcon',
							variations: [
								{
									primaryVariants: 'tabIcon="activity"',
									component: <CSTabGroup>
										<CSTab name="Tab One" tabIcon="activity" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
									<CSTab name="Tab One" tabIcon="activity" />
									<CSTab name="Tab Two" />
									<CSTab name="Tab Three" />
								</CSTabGroup>`
								}
							]
						}, {
							propName: 'name',
							variations: [
								{
									component: <CSTabGroup>
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'tooltipContent',
							variations: [
								{
									secondaryVariants: 'status="initial"',
									quickLink: 'initial',
									component: <CSTabGroup>
										<CSTab name="Tab One" tooltipContent="Error message example!" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab name="Tab One" tooltipContent="Error message example!" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									secondaryVariants: 'status="error"',
									quickLink: 'error',
									component: <CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Error message example!"
											status="error"
										/>
										<CSTab name="Tab Two" status="error" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Error message example!"
											status="error"
										/>
										<CSTab name="Tab Two" status="error" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									secondaryVariants: 'status="warning"',
									quickLink: 'warning',
									component: <CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Warning message example!"
											status="warning"
										/>
										<CSTab name="Tab Two" status="warning" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Warning message example!"
											status="warning"
										/>
										<CSTab name="Tab Two" status="warning" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}, {
									secondaryVariants: 'status="success"',
									quickLink: 'success',
									component: <CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Warning message example!"
											status="success"
										/>
										<CSTab name="Tab Two" status="success" />
										<CSTab name="Tab Three" />
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab
											name="Tab One"
											tooltipContent="Warning message example!"
											status="success"
										/>
										<CSTab name="Tab Two" status="success" />
										<CSTab name="Tab Three" />
									</CSTabGroup>`
								}
							]
						}, {
							propName: 'children',
							description: 'CSTab supports custom content provided as a child',
							variations: [
								{
									component: <CSTabGroup>
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three">
											<CSButton label="Custom Button" />
										</CSTab>
									</CSTabGroup>,
									code: `<CSTabGroup>
										<CSTab name="Tab One" />
										<CSTab name="Tab Two" />
										<CSTab name="Tab Three">
											<CSButton label="Custom Button" />
										</CSTab>
									</CSTabGroup>`
								}
							]
						}
					]
				}
			],
			properties: [
				{
					name: 'active',
					types: ['string'],
					description: 'Control the active state.'
				}, {
					name: 'children',
					types: ['any'],
					description: 'This component supports custom content passed as children.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the tab.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the tab.'
				}, {
					name: 'iconOrigin',
					customTypes: [{
						name: 'CSIconOrigin',
						types: ['\'slds\'', '\'cs\'']
					}],
					default: '\'slds\'',
					description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the tab.'
				}, {
					name: 'onClick',
					types: ['(value) => any'],
					description: 'Handler method for the click event.'
				}, {
					name: 'routerLink',
					types: ['Element'],
					description: 'Define a React Router NavLink or Link component to be rendered instead of the tab.'
				}, {
					name: 'status',
					customTypes: [{
						name: 'CSTabStatus',
						types: [
							'\'initial\'',
							'\'error\'',
							'\'warning\'',
							'\'success\''
						]
					}],
					default: '\'initial\'',
					description: 'Set the colour and the icon variant depending on status.'
				}, {
					name: 'tabIcon',
					types: ['string'],
					description: 'Override the default icon defined by the variant.'
				}, {
					name: 'name',
					types: ['string'],
					description: 'Set the tab name.'
				}, {
					name: 'tooltipContent',
					types: ['string'],
					description: 'Set the tooltip content and replace the icon with a tooltip. Tooltip icons will match tab status icons.'
				}, {
					name: 'parentVariant',
					required: 'CSTabGroup',
					customTypes: [{
						name: 'CSTabGroupVariant',
						types: ['\'normal\'', '\'large\'']
					}],
					default: '\'normal\'',
					description: 'Set the tab variant.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the tab button or router link.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<nav>` is a top wrapper - allows screen reader navigation search',
								'HTML `<ol>` is items wrapper - allows screen reader list search',
								'Buttons wrapped in HTML `<li>` - allows screen reader list navigation while preserving keyboard operability',
								'Icon as a child element with `aria-hidden`'
							],
							properties: [
								'`aria-label`',
								'`aria-invalid`',
								'`aria-current`'
							],
							visual: [
								'Colors contrast ratio > 4.5',
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'`<button>` used to ensure focus and keyboard operability'
							]
						}
					]
				}
			]
		})

	getTabGroupDoc = () => ({
			name: 'Tab Group',
			properties: [
				{
					name: 'children',
					customTypes: [{
						name: 'CSTabGroupChildren',
						types: ['<CSTab />', '\'any\'']
					}],
					description: 'This component is designed to support CSTab as a child.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the tab group.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the tab group.'
				}, {
					name: 'listName',
					types: ['string'],
					description: 'Override the default aria-label value.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSTabGroupVariant',
						types: ['\'normal\'', '\'large\'']
					}],
					default: '\'normal\'',
					description: 'Set the tab group variant.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the tab group div wrapper.'
				}
			]
		})

	render() {
		const component = this.getTabDoc();
		const component2 = this.getTabGroupDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component2, component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSTabPreview;
