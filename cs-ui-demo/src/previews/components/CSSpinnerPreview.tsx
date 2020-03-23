import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSSpinner} from '@cloudsense/cs-ui-components';

class CSSpinnerPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Spinner',
			usage: 'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							string: '',
							component:
								<CSSpinner
									size="xsmall"
									color="neutral"
								/>
						},
						{
							variationName: ['small'],
							string: '',
							component:
								<CSSpinner
									size="small"
									color="neutral"
								/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSSpinner
									size="medium"
									color="neutral"
								/>
						},
						{
							variationName: ['large'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['xlarge'],
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
								/>
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="brand"
								/>
						}
					]
				},
				{
					propName: 'inline',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									inline
									className="custom-class"
								/>
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
								<CSSpinner
									size="large"
									color="neutral"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
									label="This is some label"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'size',
					description: 'Size of spinner icon',
					options: [
						'large',
						'xsmall',
						'small',
						'medium',
						'xlarge'
					]
				},
				{
					propertyName: 'color',
					description: 'Color of spinner icon',
					options: [
						'neutral',
						'brand'
					]
				},
				{
					propertyName: 'inline',
					description: 'Logic for display property',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Spinner label',
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
										<div className="version-preview spinner-preview">
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

export default CSSpinnerPreview;
