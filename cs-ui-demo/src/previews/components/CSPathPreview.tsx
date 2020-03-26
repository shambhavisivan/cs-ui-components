import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSPath, CSPathItem, CSPathWrapper} from '@cloudsense/cs-ui-components';

class CSPathPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Path',
			usage: 'A process component communicates to the user the progress of a particular process.',
			examples: [
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSPath>
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
								</CSPath>
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
								<CSPath className="custom-class">
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
								</CSPath>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'title',
					description: 'Text content of path item',
					options: ['n/a']
				},
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

export default CSPathPreview;
