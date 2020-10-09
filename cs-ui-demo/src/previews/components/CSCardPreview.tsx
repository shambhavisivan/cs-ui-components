import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import {CSCard, CSCardHeader, CSCardBody, CSCardFooter} from '@cloudsense/cs-ui-components';

class CSCardPreview extends React.Component {
	getCSCardDoc() {

		const json = {
			name: 'Card',
			usage: 'Cards are used to apply a container around a related grouping of information.',
			accessible: 'yes',
			examples: [
				{
					propName: 'Default View',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSCard>
									<CSCardHeader title="Card Header"/>
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
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSCard id="id">
									<CSCardHeader title="Card Header" id="id"/>
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
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['className'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSCard className="custom-class">
									<CSCardHeader title="Card Header"/>
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
					propertyName: 'id',
					description: 'Card header id value'
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
