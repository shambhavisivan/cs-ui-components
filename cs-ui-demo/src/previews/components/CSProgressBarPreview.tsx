import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSProgressBar} from '@cloudsense/cs-ui-components';

class CSProgressBarPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Progress Bar',
			usage: 'A progress bar component communicates to the user the progress of a particular process.',
			examples: [
				{
					propName: 'progress',
					customText: '',
					variations: [
						{
							variationName: ['0%'],
							string: '',
							component:
								<CSProgressBar
									label="Progress"
									progress="0%"
								/>
						},
						{
							variationName: ['50%'],
							string: '',
							component:
								<CSProgressBar
									label="Progress"
									progress="50%"
								/>
						},
						{
							variationName: ['100%'],
							string: '',
							component:
								<CSProgressBar
									label="Progress"
									progress="100%"
								/>
						}
					]
				},
				{
					propName: 'label',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'progressIndicator',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									progressIndicator
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['green'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									color="green"
									label="Progress"
								/>
						},
						{
							variationName: ['#FFAA00'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									color="#FFAA00"
									label="Progress"
								/>
						},
						{
							variationName: ['rgb(100,100,255)'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									color="rgb(100,100,255)"
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'thickness',
					customText: '',
					variations: [
						{
							variationName: ['x-small'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="x-small"
									label="Progress"
								/>
						},
						{
							variationName: ['small'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="small"
									label="Progress"
								/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="medium"
									label="Progress"
								/>
						},
						{
							variationName: ['large'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="large"
									label="Progress"
								/>
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
								<CSProgressBar
									progress="50%"
									label="Progress"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'progress',
					description: 'Percentage value to represent progress',
					options: [
						'e.g.',
						'0%',
						'50%',
						'100%'
					]
				},
				{
					propertyName: 'label',
					description: 'Text content of label',
					options: [
						'n/a'
					]
				},
				{
					propertyName: 'progressIndicator',
					description: 'Boolean state of percentage indicator',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'color',
					description: 'CSS color value of the progress bar',
					options: [
						'e.g.',
						'green',
						'#FFAA00',
						'rgb(100,100,255)'
					]
				},
				{
					propertyName: 'thickness',
					description: 'Thickness of the progress bar',
					options: [
						'x-small',
						'small',
						'medium',
						'large'
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

export default CSProgressBarPreview;
