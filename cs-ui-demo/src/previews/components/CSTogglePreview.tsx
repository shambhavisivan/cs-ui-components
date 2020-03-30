import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSToggle} from '@cloudsense/cs-ui-components';

class CSTogglePreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Toggle',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'checked',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSToggle
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
								<CSToggle
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
								<CSToggle
									required
									label="This is a label"
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
								<CSToggle
									error
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSToggle
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
							variationName: ['top-right'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-left"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Toggle label to display',
					options: []
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
					propertyName: 'error',
					description: 'Logic for error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Helptext content',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Toggle tooltip position',
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

export default CSTogglePreview;
