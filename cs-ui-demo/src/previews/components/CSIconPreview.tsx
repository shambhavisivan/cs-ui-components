import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSIcon} from '@cloudsense/cs-ui-components';

class CSIconPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Icon',
			usage: 'Support for both Lightening and CloudSense Icons',
			examples: [
				{
					propName: 'name',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSIcon
									name="video"
								/>
						}
					],
					customText: 'Icons require a name prop which correlates to the icon you would like to use.'
				},
				{
					propName: 'origin',
					variations: [
						{
							variationName: ['slds'],
							string: '',
							component:
								<CSIcon
									name="video"
									origin="slds"
								/>
						},
						{
							variationName: ['cs'],
							string: '',
							component:
								<CSIcon
									origin="cs"
									name="table"
								/>
						}
					]
				},
				{
					propName: 'rotate',
					variations: [
						{
							variationName: ['90', '180', '270'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="180"
								/>
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['pink'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="pink"
								/>
						},
						{
							variationName: ['#ff0000'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="#ff0000"
								/>
						},
						{
							variationName: ['rgba(100,100,255)'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="rgba(100,100,255,1.00)"
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
								<CSIcon
									origin="cs"
									name="tag"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'name',
					description: 'Name prop of Icon',
					options: [
						'See icons tab for a full list of icons'
					]
				},
				{
					propertyName: 'origin',
					description: 'Origin prop of Icon',
					options: ['slds', 'cs']
				},
				{
					propertyName: 'rotate',
					description: 'Degree value for clockwise icon rotation',
					options: ['90', '180', '270']
				},
				{
					propertyName: 'color',
					description: 'Color value of icon',
					options: [
						'e.g.',
						'pink',
						'#ff0000',
						'rgba(100,100,255,1.00)'
					]
				},
				{
					propertyName: 'className',
					description: 'Icon class',
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
										<div className="version-preview icon-component-preview">
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

export default CSIconPreview;
