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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the label.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'htmlFor',
					types: ['string'],
					description: 'Assign the ID of the element the label describes.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the label.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the label value.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Set whether the label describes a required field.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the number input title.'
				}, {
					name: 'tooltipPosition',
					customTypes: [{
						name: 'CSTooltipPosition',
						types: [
							'\'bottom-right\'',
							'\'bottom-left\'',
							'\'top-right\'',
							'\'top-left\'',
							'\'top-center\'',
							'\'bottom-center\'',
							'\'right-top\'',
							'\'right-center\'',
							'\'right-bottom\'',
							'\'left-top\'',
							'\'left-center\'',
							'\'left-bottom\''
						]
					}],
					description: 'Set the tooltip position for the label.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the label tag.'
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
								'HTML `<label>`'
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
