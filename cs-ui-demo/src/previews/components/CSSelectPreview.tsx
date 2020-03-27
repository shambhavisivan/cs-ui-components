import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSelect} from '@cloudsense/cs-ui-components';

class CSSelectPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSSelect label="Choose number" id="option">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose color" id="colour">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose color" labelHidden id="colour">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose:" borderType="square">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" id="amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose value:" error errorMessage="Error message!">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" className="custom-class">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
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
					propertyName: 'errorMessage',
					description: 'Error message text',
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
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSSelectPreview;
