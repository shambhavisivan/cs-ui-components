import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSTabGroup, CSTab} from '@cloudsense/cs-ui-components';

class CSTabPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Tabs',
			usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',

			examples: [
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
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
							<CSTabGroup className="custom-class">
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				}
			],

		/* CSTab Properties Table */
			properties: [
				{
					propertyName: 'title',
					description: 'Text content of tab',
					options: ['n/a']
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
										<div className="version-preview tab-preview">
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

export default CSTabPreview;
