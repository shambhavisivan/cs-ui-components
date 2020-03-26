import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSection} from '@cloudsense/cs-ui-components';

class CSSectionPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Section',
			usage: 'This is used as a toggle visibility of section content.',
			examples: [
				{
					propName: 'collapsible',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
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
					propName: 'collapsed',
					variations: [
						{
							variationName: ['true'],
							string: '',
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
							variationName: ['n/a'],
							string: '',
							component:
								<CSSection collapsible title="Collapsed Section" className="custom-class">
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
					propertyName: 'title',
					description: 'Title content',
					options: [
						'n/a'
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
					propertyName: 'collapsed',
					description: 'Collapsed state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
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
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
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
