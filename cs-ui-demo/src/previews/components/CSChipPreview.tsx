import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSChip } from '@cloudsense/cs-ui-components';

class CSChipPreview extends React.Component {
	getChipDoc = () => ({
		name: 'Chip',
		usage: 'Chips are labels which hold small amounts of information',
		accessible: 'yes',
		previews: [
			{
				name: 'CSChip',
				examples: [
					{
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="brand"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'brand',
								component: <CSChip text="brand" variant="brand" />,
								code: '<CSChip text="brand" variant="brand" />'
							}, {
								primaryVariants: 'variant="success"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'success',
								component: <CSChip text="success" variant="success" />,
								code: '<CSChip text="success" variant="success" />'
							}, {
								primaryVariants: 'variant="neutral"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'neutral',
								component: <CSChip text="neutral" variant="neutral" />,
								code: '<CSChip text="neutral" variant="neutral" />'
							}, {
								primaryVariants: 'variant="error"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'error',
								component: <CSChip text="error" variant="error" />,
								code: '<CSChip text="error" variant="error" />'
							}, {
								primaryVariants: 'variant="warning"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'warning',
								component: <CSChip text="warning" variant="warning" />,
								code: '<CSChip text="warning" variant="warning" />'
							}, {
								primaryVariants: 'variant="transparent"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'transparent',
								component: <CSChip text="transparent" variant="transparent" />,
								code: '<CSChip text="transparent" variant="transparent" />'
							}, {
								primaryVariants: 'variant="dark"',
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'dark',
								component: <CSChip text="dark" variant="dark" />,
								code: '<CSChip text="dark" variant="dark" />'
							}
						]
					}, {
						propName: 'variantStyle',
						variations: [
							{
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="brand"',
								quickLink: 'border brand',
								component: <CSChip text="brand" variantStyle="border" />,
								code: '<CSChip text="brand" variantStyle="border" />'
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="success"',
								quickLink: 'border success',
								component: <CSChip
									text="success"
									variant="success"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="success"
									variant="success"
									variantStyle="border"
								/>`
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="neutral"',
								quickLink: 'border neutral',
								component: <CSChip
									text="neutral"
									variant="neutral"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="neutral"
									variant="neutral"
									variantStyle="border"
								/>`
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="error"',
								quickLink: 'border error',
								component: <CSChip
									text="error"
									variant="error"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="error"
									variant="error"
									variantStyle="border"
								/>`
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="warning"',
								quickLink: 'border warning',
								component: <CSChip
									text="warning"
									variant="warning"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="warning"
									variant="warning"
									variantStyle="border"
								/>`
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="transparent"',
								quickLink: 'border transparent',
								component: <CSChip
									text="transparent"
									variant="transparent"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="transparent"
									variant="transparent"
									variantStyle="border"
								/>`
							}, {
								primaryVariants: 'variantStyle="border"',
								secondaryVariants: 'variant="dark"',
								quickLink: 'border dark',
								component: <CSChip
									text="dark"
									variant="dark"
									variantStyle="border"
								/>,
								code: `<CSChip
									text="dark"
									variant="dark"
									variantStyle="border"
								/>`
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								secondaryVariants: 'variantStyle="fill"',
								quickLink: 'fill',
								component: <CSChip
									text="color"
									color="#4a26ab"
								/>,
								code: `<CSChip
									text="color"
									color="#4a26ab"
								/>`
							},
							{
								secondaryVariants: 'variantStyle="border"',
								quickLink: 'border',
								component: <CSChip
									text="color"
									variantStyle="border"
									color="#4a26ab"
								/>,
								code: `<CSChip
									text="color"
									variantStyle="border"
									color="#4a26ab"
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSChip
									text="custom"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSChip
									text="custom"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
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
				name: 'color',
				types: ['string'],
				description: 'Apply custom color to the chip. Custom color will override variant styles.'
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
							'`<div>` with text - visible to screen reader'
						],
						styling: [
							'Color contrast ratio > 4.5'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getChipDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSChipPreview;
