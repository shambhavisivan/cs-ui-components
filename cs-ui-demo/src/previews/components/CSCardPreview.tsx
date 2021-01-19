import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSCard, CSCardHeader, CSCardBody, CSCardFooter } from '@cloudsense/cs-ui-components';

class CSCardPreview extends React.Component {
	getCSCardDoc() {
		const json = {
			name: 'Card',
			usage: 'Cards are used to apply a container around a related grouping of information.',
			accessible: 'yes',
			examples: [
				{
					propName: 'Default View',
					variations: [
						{
							component:
								<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSCard id="id">
									<CSCardHeader title="Card Header" id="id" />
									<CSCardBody id="id">
										Card Body
									</CSCardBody>
									<CSCardFooter id="id">
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'iconName',
					variations: [
						{
							component:
								<CSCard>
									<CSCardHeader title="Card Header" iconName="activity" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'iconColor',
					variations: [
						{
							component:
								<CSCard>
									<CSCardHeader title="Card Header" iconName="activity" iconColor="red" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'iconOrigin',
					variations: [
						{
							variationName: ['cs'],
							quickLink: 'cs',
							component:
								<CSCard>
									<CSCardHeader title="Card Header" iconOrigin="cs" iconName="lead" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'iconFrame',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSCard>
									<CSCardHeader title="Card Header" iconOrigin="cs" iconName="lead" iconFrame />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'padding',
					variations: [
						{
							variationName: ['0'],
							component:
								<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody padding="0">
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'showBorder',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSCard>
									<CSCardHeader title="Card Header" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							component:
								<CSCard>
									<CSCardHeader
										title="Card Header"
										showBorder={false}
									/>
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				},
				{
					propName: 'maxHeight',
					variations: [
						{
							variationName: ['5rem'],
							component:
								<CSCard>
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
								</CSCard>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							quickLink: 'custom class',
							component:
								<CSCard className="custom-class">
									<CSCardHeader title="Card Header" />
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the card.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the card div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4'
					],
					requirements: [
						{
							structure: [
								'HTML <Header> and <Footer>',
								'Heading is HTML <h2> - allows screen reader heading search'
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

	getCSCardHeaderDoc() {
		const json = {
			name: 'Card Header',
			properties: [
				{
					name: 'iconColor',
					types: ['string'],
					description: 'Set a custom colour for the icon inside of the card header.'
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
					description: 'Select whether a SalesForce or a CloudSense icon should be used.'
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
					type: ['string'],
					description: 'Set a title for the card header.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the card header tag.'
				}
			]
		};
		return json;
	}

	getCSCardBodyDoc() {
		const json = {
			name: 'Card Body',
			properties: [
				{
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
		};
		return json;
	}

	getCSCardFooterDoc() {
		const json = {
			name: 'Card Footer',
			properties: [
				{
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the card footer.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the footer tag.'
				}
			]
		};
		return json;
	}

	render() {
		const component = this.getCSCardDoc();
		const component2 = this.getCSCardHeaderDoc();
		const component3 = this.getCSCardBodyDoc();
		const component4 = this.getCSCardFooterDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4]} />
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

export default CSCardPreview;
