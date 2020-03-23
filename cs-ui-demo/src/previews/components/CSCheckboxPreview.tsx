import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSCheckbox} from '@cloudsense/cs-ui-components';

class CSCheckboxPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Checbox changed!');

		const json = {
			name: 'Checkbox',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'borderType',
					customText: '',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									label="This is a label"
								/>
						},
						{
							variationName: ['round'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'checked',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									checked
									label="This is a label"
								/>
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
								<CSCheckbox
									disabled
									label="This is a label"
								/>
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
								<CSCheckbox
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									variant="brand"
								/>
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
								<CSCheckbox
									error
									label="This is a label"
								/>
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
								<CSCheckbox
									label="Enter value:"
									error
									errorMessage="Error message!"
								/>
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
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
								/>
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
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									labelHidden
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
								<CSCheckbox
									label="This is a label"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									onChange={onChangeHandler}
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Checkbox label to display',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Checkbox style',
					options: [
						'square',
						'round'
					]
				},
				{
					propertyName: 'checked',
					description: 'Logic for checked state',
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
					propertyName: 'required',
					description: 'Logic for required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'variant',
					description: 'Checkbox variant',
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
					propertyName: 'errorMessage',
					description: 'Error message text',
					options: []
				},
				{
					propertyName: 'helpText',
					description: 'Checkbox help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Checkbox tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
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
					propertyName: 'onChange',
					description: 'Logic for onChange event',
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
										<div className="version-preview checkbox-preview">
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

export default CSCheckboxPreview;
