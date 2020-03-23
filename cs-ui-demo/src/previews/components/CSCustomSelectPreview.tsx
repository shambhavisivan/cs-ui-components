import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSCustomSelect} from '@cloudsense/cs-ui-components';

class CSCustomSelectPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'Id',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="letter" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['Label'],
							string: '',
							component:
								<CSCustomSelect label="Choose color" id="color" optionsList={['Red', 'Blue', 'Green']} />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" borderType="square" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Example of help text" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Example of help text" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['disabled'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" disabled optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['required'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="number" required optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationName: ['errorMessage'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error errorMessage="Term not found" optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" className="custom-class" optionsList={['A', 'B', 'C']} />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'id',
					description: 'Select id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Select label text to display',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Select border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Select tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error message',
					description: 'Error text message',
					options: []
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
										<div className="version-preview custom-select-preview">
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

export default CSCustomSelectPreview;
