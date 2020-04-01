import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSInputText} from '@cloudsense/cs-ui-components';

class CSInputTextPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Input Text',
			usage: 'Text inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" value="Enter name"/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" id="name"/>
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
								<CSInputText label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Help text example"/>
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
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="top-right"/>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="top-left"/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="bottom-right"/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="bottom-left"/>
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" placeholder="Enter name"/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" id="name"/>
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
								<CSInputText label="Type here:" disabled/>
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
								<CSInputText label="Type here:" readOnly placeholder="This is read only"/>
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
								<CSInputText required label="Enter job role" id="jobRole" helpText="Help text example" tooltipPosition="top-left"/>
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
								<CSInputText label="Type here:" error/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputText label="Type here:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				 {
					propertyName: 'value',
					description: 'Input value to display',
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
					description: 'Input placeholder to display',
					options: []
				},
				 {
					propertyName: 'id',
					description: 'Input id value',
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
					propertyName: 'borderType',
					description: 'Input style',
					options: [
						'round',
						'square'
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

export default CSInputTextPreview;
