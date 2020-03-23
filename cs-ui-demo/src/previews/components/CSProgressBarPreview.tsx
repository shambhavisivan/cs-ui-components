import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

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
				<div className="preview-heading">
					<h1>{component.name}</h1>
					{component.usage ? <h2>{component.usage}</h2> : null}
				</div>

				{component.examples.map((example: any) => (
					<div className={`property-section ${example.propName}`} key={example.propName}>
						<h2 className="property-name">{example.propName}</h2>
						<div key={example.customText}>
							<p className="info-text">{example.customText}</p>
							{example.variations.map((variation: any, i: any) => (
								<React.Fragment key={i}>
									{variation.variationName.map((chip: any) => (
										<div key={chip} className="chip-label">{chip}</div>
									))}
									<div className="component-version">
										<div className="version-preview progress-preview">
											{variation.component}
										</div>
										<div className="version-description">
											<SyntaxHighlighter className="code-snippet"
												language="jsx">{variation.string}</SyntaxHighlighter>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				))}

				<div className="table-wrapper">
					<h2 className="property-name">Properties list</h2>
					<h3 className="component-name">{component.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component.properties.map((prop: any, i: any) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map((option: any) => (
											<span className="prop-option" key={option}>{option}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CSProgressBarPreview;
