import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSLabel} from '@cloudsense/cs-ui-components';

class CSLabelPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Label',
			usage: 'This is used to associate value with form field.',
			examples: [
				{
					propName: 'for',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSLabel label="Label" for="Name"/>
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
								<CSLabel label="Label" required/>
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
									<CSLabel label="Label" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
									<CSLabel label="Label" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
									<CSLabel label="Label" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
									<CSLabel label="Label" helpText="Help text example" tooltipPosition="bottom-left" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSLabel label="Label" helpText="Help text example"/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSLabel label="Label" helpText="Help text example" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'Label',
					description: 'Label value',
					options: []
				},
				{
					propertyName: 'for',
					description: 'Label id',
					options: []
				},
				{
					propertyName: 'required',
					description: 'Label required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Label help text display for tooltip',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Label tooltip position',
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

export default CSLabelPreview;
