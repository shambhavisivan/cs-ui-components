import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSChip } from '@cloudsense/cs-ui-components';

class CSChipPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Chip',
			usage: 'Chips are labels which hold small amounts of information',
			accessible: 'yes',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['brand'],
							quickLink: 'brand',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="brand" variant="brand" />
						},
						{
							variationName: ['success'],
							quickLink: 'success',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="success" variant="success" />
						},
						{
							variationName: ['neutral'],
							quickLink: 'neutral',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="neutral" variant="neutral" />
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="error" variant="error" />
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="warning" variant="warning" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="transparent" variant="transparent" />
						},
						{
							variationName: ['dark'],
							quickLink: 'dark',
							variationText: ['variantStyle="fill"'],
							component:
								<CSChip text="dark" variant="dark" />
						}
					]
				},
				{
					propName: 'variantStyle',
					variations: [
						{
							variationName: ['border'],
							quickLink: 'border brand',
							variationText: ['variant="brand"'],
							component:
								<CSChip text="brand" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border success',
							variationText: ['variant="success"'],
							component:
								<CSChip text="success" variant="success" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border neutral',
							variationText: ['variant="neutral"'],
							component:
								<CSChip text="neutral" variant="neutral" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border error',
							variationText: ['variant="error"'],
							component:
								<CSChip text="error" variant="error" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border warning',
							variationText: ['variant="warning"'],
							component:
								<CSChip text="warning" variant="warning" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border transparent',
							variationText: ['variant="transparent"'],
							component:
								<CSChip text="transparent" variant="transparent" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border dark',
							variationText: ['variant="dark"'],
							component:
								<CSChip text="dark" variant="dark" variantStyle="border" />
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{

							component:
								<CSChip text="brand" id="id" />
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['className'],
							quickLink: 'custom class',
							component:
								<CSChip text="brand" className="custom-class" />
						}
					]
				}
			],

			properties: [
				{
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the chip.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the chip.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the chip div.'
				}, {
					name: 'text',
					required: true,
					types: ['string'],
					description: 'Set the text inside of the chip.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSChipVariant',
						types: [
							'\'brand\'',
							'\'success\'',
							'\'neutral\'',
							'\'error\'',
							'\'warning\'',
							'\'transparent\'',
							'\'dark\''
						]
					}],
					default: '\'brand\'',
					description: 'Set the chip variant.'
				}, {
					name: 'variantStyle',
					customTypes: [{
						name: 'CSChipVariantStyle',
						types: ['\'fill\'', '\'border\'']
					}],
					default: '\'fill\'',
					description: 'Set the border variant for the chip.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4'
					],
					requirements: [
						{
							structure: [
								'Basic <div> with text - visible to screen reader'
							],
							styling: [
								'Color contrast ratio > 4.5'
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

export default CSChipPreview;
