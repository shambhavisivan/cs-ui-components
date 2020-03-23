import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSTextarea} from '@cloudsense/cs-ui-components';

class CSTextareaPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter message:" value="Message" id="message" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter message:" placeholder="Message" id="message" />
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter message:" id="message" />
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
								<CSTextarea label="Enter message:" id="messageBody" />
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
								<CSTextarea label="Enter message:" borderType="square" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-left'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="top-left" />
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="top-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="bottom-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="bottom-right" />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSTextarea label="Enter message:" disabled />
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSTextarea label="Enter message:" readOnly />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSTextarea required label="Enter message:" id="messageContent" />
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSTextarea label="Enter message:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'rows',
					variations: [
						{
							variationName: ['10'],
							string: '',
							component:
								<CSTextarea label="Enter message:" rows={10} />
						}
					]
				},
				{
					propName: 'maxHeight',
					variations: [
						{
							variationName: ['160px'],
							string: '',
							component:
								<CSTextarea label="Enter message:" maxHeight="200px"/>
						},
						{
							variationName: ['5rem'],
							string: '',
							component:
								<CSTextarea label="Enter message:" maxHeight="5rem"/>
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
								<CSTextarea label="Enter message:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Textarea value to display',
					options: []
				},
				{
					propertyName: 'placeholder',
					description: 'Textarea placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Textarea id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Textarea label text to display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Textarea tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Textarea help text for tooltip display',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Input border type',
					options: [
						'round',
						'square'
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
					propertyName: 'readOnly',
					description: 'Read only description',
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
					propertyName: 'errorMessage',
					description: 'Error message text',
					options: []
				},
				{
					propertyName: 'rows',
					description: 'Textarea rows value',
					options: []
				},
				{
					propertyName: 'maxHeight',
					description: 'Max height value for textarea',
					options: [
						'e.g.',
						'160px',
						'5rem'
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
										<div className="version-preview textarea-preview">
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

export default CSTextareaPreview;
