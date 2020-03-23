import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSChip} from '@cloudsense/cs-ui-components';

class CSChipPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Chip',
			usage: 'Chips are labels which hold small amounts of information',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSChip text="brand" variant="brand" />
						},
						{
							variationName: ['success'],
							string: '',
							component:
								<CSChip text="success" variant="success" />
						},
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral"/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSChip text="error" variant="error" />
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" />
						},
						{
							variationName: ['transparent'],
							string: '',
							component:
								<CSChip text="transparent" variant="transparent" />
						}
					]
				},
				{
					propName: 'variantStyle',
					variations: [
						{
							variationName: ['brand', 'border'],
							string: '',
							component:
								<CSChip text="brand" variantStyle="border" />
						},
						{
							variationName: ['success', 'border'],
							string: '',
							component:
								<CSChip text="success" variant="success" variantStyle="border" />
						},
						{
							variationName: ['neutral', 'border'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral" variantStyle="border" />
						},
						{
							variationName: ['error', 'border'],
							string: '',
							component:
								<CSChip text="error" variant="error" variantStyle="border" />
						},
						{
							variationName: ['warning', 'border'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" variantStyle="border" />
						},
						{
							variationName: ['transparent', 'border'],
							string: '',
							component:
								<CSChip text="transparent" variant="transparent" variantStyle="border" />
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
								<CSChip text="brand" className="custom-class" />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'variant',
					description: 'Chip variant',
					options: [
						'brand',
						'success',
						'neutral',
						'error',
						'warning',
						'transparent'
					]
				},
				{
					propertyName: 'variantStyle',
					description: 'Chip border variant',
					options: [
						'border',
						'fill'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
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
										<div className="version-preview chip-preview">
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

export default CSChipPreview;
