import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';

class CSRadioPreview extends React.Component {
	getCSRadioDoc() {

		const json = {
			name: 'Radio',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'Label',
					variations: [
						{
							variationName: ['label'],
							string: '',
							component:
								<CSRadio
									label="This is a label"
								>
									<CSRadioOption name="value" label="high" />
									<CSRadioOption name="value" label="low" />
								</ CSRadio>
						}
					]
				},
				{
					propName: 'Error',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSRadio
									error
									label="This is a label"
								>
									<CSRadioOption name="gender" label="male" />
									<CSRadioOption name="gender" label="female" />
								</ CSRadio>
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSRadio
									required
									label="This is a label"
								>
									<CSRadioOption name="country" label="England" />
									<CSRadioOption name="country" label="Croatia" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'Disabled',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSRadio
									disabled
									label="This is a label"
								>
									<CSRadioOption name="drink" label="Cola" disabled />
									<CSRadioOption name="drink" label="Pepsi" disabled />
								</CSRadio>
						}
					]
				},
				{
					propName: 'Variant',
					variations: [
						{
							variationName: ['variant'],
							string: '',
							component:
								<CSRadio
									variant="brand"
									label="This is a label"
								>
									<CSRadioOption name="continent" label="Africa" />
									<CSRadioOption name="continent" label="America" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'Help Text',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-right">
									<CSRadioOption name="colour" label="red" />
									<CSRadioOption name="colour" label="blue" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'Tooltip Position',
					variations: [
						{
							variationName: ['tooltipPosition'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-right">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSRadio label="This is a label" className="custom-class">
									<CSRadioOption name="year" label="2020" />
									<CSRadioOption name="year" label="2021" />
								</CSRadio>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Radio label to display',
					options: []
				},
				{
					propertyName: 'required',
					description: 'Logic for required state',
					options: [
						'false',
						'true'
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
					propertyName: 'variant',
					description: 'Radio Option variant',
					options: [
						'neutral',
						'brand'
					]
				},
				{
					propertyName: 'error',
					description: 'Logic for error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helptext',
					description: 'Radio help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Radio tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
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

	getCSRadioOptionDoc() {

		const onChangeHandler = () => alert('Radio changed!');

		const json = {
			name: 'Radio Option',
			usage: 'Individual radio options.',
			properties: [
				{
					propertyName: 'Label',
					description: 'Radio Option label',
					options: ['n/a']
				},
				{
					propertyName: 'Name',
					description: 'Radio Option name',
					options: ['n/a']
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
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: ['n/a']
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: ['n/a']
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSRadioDoc();
		const component2 = this.getCSRadioOptionDoc();

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
										<div className="version-preview radio-preview">
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

				<div className="table-wrapper table-wrapper-alt">
					<h3 className="component-name">{component2.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component2.properties.map((prop: any, i: any) => (
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

export default CSRadioPreview;
