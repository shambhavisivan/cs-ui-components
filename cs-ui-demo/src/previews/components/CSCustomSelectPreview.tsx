import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';

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
				<PreviewHeading name={component.name} usage={component.usage} />
				<PreviewProperties name={component.name} examples={component.examples} />
				<PreviewTable name={component.name} properties={component.properties} />
			</>
		);
	}
}

export default CSCustomSelectPreview;
