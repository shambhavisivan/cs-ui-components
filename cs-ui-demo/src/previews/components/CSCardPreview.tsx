import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSCard, CSCardHeader, CSCardBody, CSCardFooter} from '@cloudsense/cs-ui-components';

class CSCardPreview extends React.Component {
	getCSCardDoc() {

		const json = {
			name: 'Card',
			usage: 'Cards are used to apply a container around a related grouping of information.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
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
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
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
					description: 'For implementing custom class to component',
					options: ['n/a']
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
					propertyName: 'title',
					description: 'Card header title',
					options: ['n/a']
				}
			]
		};
		return json;
	}
	render() {
		const component = this.getCSCardDoc();
		const component2 = this.getCSCardHeaderDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
					<PreviewTable name={component2.name} properties={component2.properties} alt />
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
