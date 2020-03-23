import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSButtonGroup, CSButton, CSButtonDropdown} from '@cloudsense/cs-ui-components';

class CSButtonGroupPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Button Group',
			usage: 'Button groups are used to bunch together buttons with similar actions',
			examples: [
				{
					propName: 'combined',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSButtonGroup
									combined
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSButtonDropdown
										iconName="down"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSButtonDropdown>
								</CSButtonGroup>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSButtonGroup
									combined={false}
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSButtonDropdown
										iconName="down"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSButtonDropdown>
								</CSButtonGroup>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'combined',
					description: 'Logic for combined button styling',
					options: [
						'true',
						'false'
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
										<div className="version-preview button-group-preview">
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

				<div className="table-wrapper properties-table-wrapper">
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

export default CSButtonGroupPreview;
