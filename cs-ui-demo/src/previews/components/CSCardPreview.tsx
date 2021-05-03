import React from 'react';
import {
	CSCard,
	CSCardHeader,
	CSCardBody,
	CSCardFooter,
	CSButton
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSCardPreview extends React.Component {
	getDoc = () => ({
		name: 'Card',
		usage: 'Cards are used to apply a container around a related grouping of information.',
		accessible: 'yes',
		components: [
			{
				name: 'CSCard',
				examples: [
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSCard id="custom-id" className="custom-br-mint">
									<CSCardHeader title="Card Header" className="custom-br-purple" />
									<CSCardBody className="custom-bg-mint">Card Body</CSCardBody>
									<CSCardFooter className="custom-br-blue">Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard id="custom-id" className="custom-br-mint">
									<CSCardHeader title="Card Header" className="custom-br-purple" />
									<CSCardBody className="custom-bg-mint">Card Body</CSCardBody>
									<CSCardFooter className="custom-br-blue">Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSCardBody and CSCardFooter support custom content provided as children',
						variations: [
							{
								component: <CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>
										Card Body
										<CSButton label="Custom Button" />
									</CSCardBody>
									<CSCardFooter>
										Card Footer
										<CSButton label="Custom Button" />
									</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>
										Card Body
										<CSButton label="Custom Button" />
									</CSCardBody>
									<CSCardFooter>
										Card Footer
										<CSButton label="Custom Button" />
									</CSCardFooter>
								</CSCard>`
							}
						]
					}
				],
				properties: [
					{
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the card.'
					}, {
						name: 'children',
						customTypes: [{
							name: 'CSCardChildren',
							types: ['<CSCardHeader />', '<CSCardBody />', '<CSCardFooter />', 'any']
						}],
						description: 'This component is designed to support CSCardHeader, CSCardBody and CSCardFooter as children.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the card.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the card div.'
					}
				]
			}, {
				name: 'CSCardHeader',
				examples: [
					{
						propName: 'collapsible',
						variations: [
							{
								primaryVariants: 'collapsible={true}',
								component: <CSCard>
									<CSCardHeader title="Card Header" collapsible />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" collapsible />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'defaultClosed',
						alert: {
							variant: 'info',
							text: 'defaultClosed can be used only if collapsible is set to true.'
						},
						variations: [
							{
								primaryVariants: ['defaultClosed={true}'],
								secondaryVariants: ['collapsible={true}'],
								component:
									<CSCard>
										<CSCardHeader
											title="Card Header"
											collapsible
											defaultClosed
										/>
										<CSCardBody>Card Body</CSCardBody>
										<CSCardFooter>Card Footer</CSCardFooter>
									</CSCard>,
									code: `<CSCard>
										<CSCardHeader
											title="Card Header"
											collapsible
											defaultClosed
										/>
										<CSCardBody>Card Body</CSCardBody>
										<CSCardFooter>Card Footer</CSCardFooter>
									</CSCard>`
							}
						]
					}, {
						propName: 'iconColor',
						variations: [
							{
								primaryVariants: 'iconColor="red"',
								secondaryVariants: 'iconName="description"',
								component: <CSCard>
									<CSCardHeader
										title="Card Header"
										iconName="description"
										iconColor="red"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader
										title="Card Header"
										iconName="description"
										iconColor="red"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'iconFrame',
						variations: [
							{
								primaryVariants: 'iconFrame={true}',
								secondaryVariants: 'iconName="description"',
								component: <CSCard>
									<CSCardHeader
										title="Card Header"
										iconName="description"
										iconFrame
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader
										title="Card Header"
										iconName="description"
										iconFrame
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="quote"',
									'iconOrigin="slds"'
								],
								quickLink: 'slds',
								component: <CSCard>
									<CSCardHeader
										title="Card Header"
										iconOrigin="slds"
										iconName="quote"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader
										title="Card Header"
										iconOrigin="slds"
										iconName="quote"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}, {
								primaryVariants: [
									'iconName="lead"',
									'iconOrigin="cs"'
								],
								quickLink: 'cs',
								component: <CSCard>
									<CSCardHeader
										title="Card Header"
										iconOrigin="cs"
										iconName="lead"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader
										title="Card Header"
										iconOrigin="cs"
										iconName="lead"
									/>
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'showBorder',
						variations: [
							{
								primaryVariants: 'showBorder={true}',
								quickLink: 'true',
								component: <CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}, {
								primaryVariants: 'showBorder={false}',
								quickLink: 'false',
								component: <CSCard>
									<CSCardHeader title="Card Header" showBorder={false} />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" showBorder={false} />
									<CSCardBody>Card Body</CSCardBody>
									<CSCardFooter>Card Footer</CSCardFooter>
								</CSCard>`
							}
						]
					}
				],
				properties: [
					{
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the card header.'
					}, {
						name: 'collapsible',
						types: ['boolean'],
						default: 'false',
						description: 'Set whether the card is collapsible on click.'
					}, {
						name: 'defaultClosed',
						types: ['boolean'],
						default: 'false',
						description: 'Control whether the card is closed by default. It is designed to be used with collapsible prop.'
					}, {
						name: 'iconColor',
						types: ['string'],
						description: 'Set a custom color for the icon inside of the card header.'
					}, {
						name: 'iconFrame',
						types: ['boolean'],
						default: 'false',
						description: 'Show a frame behind the card header icon.'
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
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the card header.'
					}, {
						name: 'showBorder',
						types: ['boolean'],
						default: 'true',
						description: 'Hide the border beneath the card header.'
					}, {
						name: 'title',
						required: true,
						types: ['string'],
						description: 'Set a title for the card header.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the card header tag.'
					}
				]
			}, {
				name: 'CSCardBody',
				examples: [
					{
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="5rem"',
								component: <CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody maxHeight="5rem">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta.
										Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales.
										Morbi at rhoncus mi. Aliquam lobortis mi non nisi hendrerit tristique. Pellentesque habitant morbi
										tristique senectus et netus et malesuada fames ac turpis egestas. Sed finibus quis mi sed sodales.
										Cras eget posuere libero. Nulla facilisi. Aliquam tempor magna lectus, sed malesuada nunc efficitur et.
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody maxHeight="5rem">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta.
										Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales.
										Morbi at rhoncus mi. Aliquam lobortis mi non nisi hendrerit tristique. Pellentesque habitant morbi
										tristique senectus et netus et malesuada fames ac turpis egestas. Sed finibus quis mi sed sodales.
										Cras eget posuere libero. Nulla facilisi. Aliquam tempor magna lectus, sed malesuada nunc efficitur et.
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>`
							}
						]
					}, {
						propName: 'padding',
						variations: [
							{
								primaryVariants: 'padding="0"',
								component: <CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody padding="0">
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>,
								code: `<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody padding="0">
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>`
							}
						]
					}
				],
				properties: [
					{
						name: 'children',
						types: ['any'],
						description: 'This component supports custom content passed as children.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the card body.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the card body.'
					}, {
						name: 'maxHeight',
						types: ['string'],
						description: 'Set the max-height attribute for the card body.'
					}, {
						name: 'padding',
						types: ['string'],
						description: 'Set custom padding for the card body.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the card body div.'
					}
				]
			}, {
				name: 'CSCardFooter',
				properties: [
					{
						name: 'children',
						types: ['any'],
						description: 'This component supports custom content passed as children.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the card footer.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the card footer.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the footer tag.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4'
			],
			requirements: {
				structure: [
					'`<header>`',
					'`<footer>`',
					'Heading is `<h2>` - allows screen reader heading search'
				],
				attributes: [
					'`role="region"` - on a wrapper `<div>`, allows screen reader region search'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSCardPreview;
