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
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Chip id value'
				},
				{
					propertyName: 'text',
					description: 'Chip text'
				},
				{
					propertyName: 'variant',
					description: 'Chip variant',
					options: [
						'brand',
						'success',
						'neutral',
						'error',
						'warning',
						'transparent',
						'dark'
					]
				},
				{
					propertyName: 'variantStyle',
					description: 'Chip border variant',
					options: [
						'border',
						'fill'
					]
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
