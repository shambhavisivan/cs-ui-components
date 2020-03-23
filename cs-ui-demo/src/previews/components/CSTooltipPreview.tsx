import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSTooltip} from '@cloudsense/cs-ui-components';

class CSTooltipPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Tooltip',
			usage: 'A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSTooltip variant="info" helpText="Example of help text"/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip variant="warning" helpText="Example of help text"/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip variant="error" helpText="Example of help text"/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is used for overriding default icon defined by variant',
					variations: [
						{
							variationName: ['quote'],
							string: '',
							component:
								<CSTooltip iconName="quote" helpText="Example of help text "/>
						}
					]
				},
				{
					propName: 'iconSize',
					customText: 'Size of the tooltip icon',
					variations: [
						{
							variationName: ['small'],
							string: '',
							component:
								<CSTooltip iconName="info" helpText="Example of help text "/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSTooltip iconName="info" iconSize="medium" helpText="Example of help text "/>
						}
					]
				},
				{
					propName: 'position',
					variations: [
						{
							variationName: ['top-right', 'array'],
							string: '',
							component:
								<CSTooltip helpText={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} position="top-right"/>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-left"/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="bottom-right"/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-left"/>
						}
					]
				},
				{
					propName: 'tooltipHeader',
					customText: 'This is used for defining tooltip header.Its color will be defined by variant prop',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSTooltip  tooltipHeader="Info" helpText={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} />
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip  variant="warning" tooltipHeader="Warning" helpText="Example of help text" />
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip  variant="error" tooltipHeader="Error" helpText="Example of help text" />
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
								<CSTooltip iconName="quote" helpText="Example of help text" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'variant',
					description: 'Color variant of tooltip',
					options: [
						'info',
						'warning',
						'error'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant',
					options: [

					]
				},
				{
					propertyName: 'iconSize',
					description: 'Size of the tooltip icon.',
					options: [
						'small',
						'medium'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Tooltip help text content',
					options: []
				},
				{
					propertyName: 'position',
					description: 'Tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'tooltipHeader',
					description: 'Content of the tooltip header',
					options: [
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
										<div className="version-preview tooltip-preview">
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

export default CSTooltipPreview;
