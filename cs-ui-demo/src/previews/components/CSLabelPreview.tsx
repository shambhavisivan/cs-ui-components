import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSLabel } from '@cloudsense/cs-ui-components';

class CSLabelPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Label',
			usage: 'This is used to associate value with form field.',
			accessible: 'yes',
			examples: [
				{
					propName: 'htmlFor',
					customText: '',
					variations: [
						{
							component:
								<CSLabel label="Label" htmlFor="Name" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSLabel label="Label" id="id" />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLabel label="Label" required />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSLabel label="Label" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							component:
								<CSLabel label="Label" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSLabel label="Label" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSLabel label="Label" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSLabel label="Label" helpText="Help text example" tooltipPosition="bottom-left" />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSLabel label="Label" helpText="Help text example" title="Label" />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSLabel label="Label" helpText="Help text example" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'helpText',
					description: 'Label help text display for tooltip'
				},
				{
					propertyName: 'htmlFor',
					description: 'Label id'
				},
				{
					propertyName: 'id',
					description: 'Label id value'
				},
				{
					propertyName: 'label',
					description: 'Label value'
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
					propertyName: 'title',
					description: 'Title value'
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
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.1',
						'1.4.4'
					],
					requirements: [
						{
							structure: [
								'HTML <label> element'
							]
						}
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
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
