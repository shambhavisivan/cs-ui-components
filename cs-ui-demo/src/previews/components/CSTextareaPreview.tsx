import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTextarea} from '@cloudsense/cs-ui-components';

class CSTextareaPreview extends React.Component {

	getDoc() {

		const onChangeHandler = () => alert('Textarea changed!');

		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
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
							quickLink: 'square',
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
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-left" />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
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
							quickLink: 'true',
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
							quickLink: 'true',
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
							quickLink: 'true',
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
							variationText: ['error="true"'],
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
							quickLink: '10',
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
							quickLink: '160px',
							string: '',
							component:
								<CSTextarea label="Enter message:" maxHeight="200px"/>
						},
						{
							variationName: ['5rem'],
							quickLink: '5rem',
							string: '',
							component:
								<CSTextarea label="Enter message:" maxHeight="5rem"/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							string: '',
							component:
								<CSTextarea label="Enter message:" onChange={onChangeHandler}/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSTextarea label="Enter message:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'borderType',
					description: 'Input border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
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
					propertyName: 'helpText',
					description: 'Textarea help text for tooltip display',
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
					propertyName: 'maxHeight',
					description: 'Max height value for textarea',
					options: [
						'e.g.',
						'160px',
						'5rem'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: []
				},
				{
					propertyName: 'placeholder',
					description: 'Textarea placeholder to display',
					options: []
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
					propertyName: 'rows',
					description: 'Textarea rows value',
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
					propertyName: 'value',
					description: 'Textarea value to display',
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

export default CSTextareaPreview;
