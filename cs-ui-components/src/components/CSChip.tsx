import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';

export interface CSChipProps {
	variant?: string;
	variantStyle?: string;
	text: string;
	className?: string;
}

class CSChip extends React.Component<CSChipProps> {

	public static defaultProps = {
		variant: 'brand',
		variantStyle: 'fill'
	};

	static getDoc() {

		const json = {
			name: 'Chip',
			usage: 'Chips are labels which hold small amounts of information',
			examples: [
				{
					propName: 'Variant',
					customText: '',
					variations: [
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSChip text="brand" variant="brand" />
						},
						{
							variationName: ['success'],
							string: '',
							component:
								<CSChip text="success" variant="success" />
						},
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral"/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSChip text="error" variant="error" />
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" />
						},
						{
							variationName: ['transparent'],
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
							variationName: ['brand', 'border'],
							string: '',
							component:
								<CSChip text="brand" variantStyle="border" />
						},
						{
							variationName: ['success', 'border'],
							string: '',
							component:
								<CSChip text="success" variant="success" variantStyle="border" />
						},
						{
							variationName: ['neutral', 'border'],
							string: '',
							component:
								<CSChip text="neutral" variant="neutral" variantStyle="border" />
						},
						{
							variationName: ['error', 'border'],
							string: '',
							component:
								<CSChip text="error" variant="error" variantStyle="border" />
						},
						{
							variationName: ['warning', 'border'],
							string: '',
							component:
								<CSChip text="warning" variant="warning" variantStyle="border" />
						},
						{
							variationName: ['transparent', 'border'],
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
		const chipClasses = classNames(
			'cs-chip', {
				[`cs-chip-${this.props.variant}`]: this.props.variantStyle === 'fill',
				[`cs-chip-${this.props.variant}-border`]: this.props.variantStyle === 'border',
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={chipClasses}>
				{this.props.text}
			</div>
		);
	}
}

export default CSChip;
