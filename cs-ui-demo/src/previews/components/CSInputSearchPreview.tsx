import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSInputSearch} from '@cloudsense/cs-ui-components';

class CSInputSearchPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Input search changed!');

		const json = {
			name: 'Input Search',
			usage: 'Search input is used for search value entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSInputSearch label="Type here:" value="Value" />
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
									<CSInputSearch label="Type here:"  id="searchName" />
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
									<CSInputSearch label="Type here:" helpText="Help text example" />
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
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-right" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSInputSearch label="Type here:" placeholder="Search name" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSInputSearch label="Type here:" id="search" />
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
									<CSInputSearch label="Type here:" disabled />
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
									<CSInputSearch label="Type here:" required id="searchItem" />
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
									<CSInputSearch label="Type here:" error />
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
								<CSInputSearch label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['right'],
							string: '',
							component:
								<CSInputSearch label="Type here:" iconPosition="right" />
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
									<CSInputSearch label="Type here:" borderType="square" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['50%'],
							string: '',
							component:
									<CSInputSearch label="Type here:" width="50%" />
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
									<CSInputSearch label="Type here:" className="custom-class" />
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
									<CSInputSearch label="Type here:" onChange={onChangeHandler} />
						}
					]
				},
				{
					propName: 'autoFocus',
					variations: [
						{
							variationName: ['onFocus'],
							string: '',
							component:
									<CSInputSearch label="Type here:" autoFocus />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Input search value to display',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Input label text to display',
					options: []
				},
				{
					propertyName: 'helpText',
					description: 'Input help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Input tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'placeholder',
					description: 'Input search placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Input search id value',
					options: []
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
					propertyName: 'read-only',
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
					propertyName: 'iconPosition',
					description: 'Input search icon position',
					options: [
						'left',
						'right'
					]
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
					propertyName: 'width',
					description: 'Width of the input search',
					options: [
						'e.g.',
						'50%',
						'30rem',
						'25px'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
						'square'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: []
				},
				{
					propertyName: 'autoFocus',
					description: 'Auto focus input',
					options: [
						'false',
						'true'
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
										<div className="version-preview input-search-preview">
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

export default CSInputSearchPreview;
