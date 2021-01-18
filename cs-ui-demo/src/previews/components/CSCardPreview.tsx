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
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Card id value'
				}
			],
			accessibility: [
				{
					criteriaList: [
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
					propertyName: 'iconColor',
					description: 'Card header icon color'
				},
				{
					propertyName: 'iconFrame',
					description: 'Card header icon frame logic',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Card header icon name'
				},
				{
					propertyName: 'iconOrigin',
					description: 'Card header icon origin',
					options: [
						'slds',
						'cs'
					]
				},
				{
					propertyName: 'id',
					description: 'Card header id value'
				},
				{
					propertyName: 'showBorder',
					description: 'Card header border display',
					options: [
						'true',
						'false'
					]
				},
				{
					propertyName: 'title',
					description: 'Card header title'
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
					propertyName: 'id',
					description: 'Card body id value'
				},
				{
					propertyName: 'maxHeight',
					description: 'Card body max height value'
				},
				{
					propertyName: 'padding',
					description: 'Card body padding'
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
					propertyName: 'id',
					description: 'Card footer id value'
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
