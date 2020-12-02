import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSection } from '@cloudsense/cs-ui-components';

class CSSectionPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Section',
			usage: 'This is used as a toggle visibility of section content.',
			accessible: 'yes',
			examples: [
				{
					propName: 'collapsible',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSection collapsible title="Collapsible Section">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSSection
									collapsed
									title="Collapsed Section"
									id="id"
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'collapsed',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSection collapsed title="Collapsed Section">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							variationText: ['collapsible="true"'],
							component:
								<CSSection collapsible title="Collapsible Section" className="custom-class">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
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
					propertyName: 'collapsed',
					description: 'Collapsed state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'collapsible',
					description: 'Section collapsible state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'id',
					description: 'Section id value'
				},
				{
					propertyName: 'title',
					description: 'Title content'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML <section> is top wrapper - implicit role="region"',
								'Heading is HTML <h3> - allows screen reader heading search',
								'Child is <button>'
							],
							properties: [
								'aria-expanded'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Child is <button> - allows focus and keyboard operability'
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

export default CSSectionPreview;
