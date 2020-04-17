import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSChip} from '@cloudsense/cs-ui-components';

class CSChipPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Chip',
			usage: 'Chips are labels which hold small amounts of information',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['brand'],
							quickLink: 'brand',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="brand" variant="brand" />
						},
						{
							variationName: ['success'],
							quickLink: 'success',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="success" variant="success" />
						},
						{
							variationName: ['neutral'],
							quickLink: 'neutral',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral"/>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="error" variant="error" />
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" />
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent',
							variationText: ['variantStyle="fill"'],
							string: '',
							component:
								<CSChip text="transparent" variant="transparent" />
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
							string: '',
							component:
								<CSChip text="brand" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border success',
							variationText: ['variant="success"'],
							string: '',
							component:
								<CSChip text="success" variant="success" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border neutral',
							variationText: ['variant="brand"'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border error',
							variationText: ['variant="error"'],
							string: '',
							component:
								<CSChip text="error" variant="error" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border warning',
							variationText: ['variant="warning"'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" variantStyle="border" />
						},
						{
							variationName: ['border'],
							quickLink: 'border transparent',
							variationText: ['variant="transparent"'],
							string: '',
							component:
								<CSChip text="transparent" variant="transparent" variantStyle="border" />
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
							string: '',
							component:
								<CSChip text="brand" className="custom-class" />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'variant',
					description: 'Chip variant',
					options: [
						'brand',
						'success',
						'neutral',
						'error',
						'warning',
						'transparent'
					]
				},
				{
					propertyName: 'variantStyle',
					description: 'Chip border variant',
					options: [
						'border',
						'fill'
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

export default CSChipPreview;
