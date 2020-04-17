import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSInputNumber} from '@cloudsense/cs-ui-components';

class CSInputNumberPreview extends React.Component {

	getDoc() {

		const onChangeHandler = () => alert('Input changed!');

		const json = {
			name: 'Input Number',
			usage: 'Number inputs are used for number entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" value="1" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" id="quantity" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" id="value" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" />
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
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSInputNumber label="Enter value:" disabled />
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
								<CSInputNumber label="Enter value:" readOnly placeholder="This is read only"/>
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
								<CSInputNumber required label="Enter value" id="number" />
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
								<CSInputNumber label="Enter value:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" min="1" />
						}
					]
				},
				{
					propName: 'max',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" max="5" />
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
								<CSInputNumber label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'hideSpinner',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSInputNumber label="hideSpinner true" hideSpinner />
						}
					]
				},
				{
					propName: 'onChange',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" onChange={onChangeHandler} />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSInputNumber label="Enter value:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Default value to display',
					options: []
				},
				{
					propertyName: 'placeholder',
					description: 'Input number placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Input number id value',
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
					propertyName: 'min',
					description: 'Input number min value',
					options: []
				},
				{
					propertyName: 'max',
					description: 'Input number max value',
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
					propertyName: 'hideSpinner',
					description: 'Logic for spinner visibility',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
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
					<PreviewTable components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSInputNumberPreview;
