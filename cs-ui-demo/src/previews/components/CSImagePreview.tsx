import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSImage } from '@cloudsense/cs-ui-components';

class CSImagePreview extends React.Component {
	getImagePreviewDoc = () => ({
		name: 'Image',
		usage: 'Image is used for rendering logos and logomarks',
		accessible: 'yes',
		previews: [
			{
				name: 'CSImage',
				examples: [
					{
						propName: 'type',
						variations: [
							{
								primaryVariants: 'type="logo"',
								quickLink: 'logo',
								component: <CSImage type="logo" />,
								code: '<CSImage type="logo" />'
							}, {
								primaryVariants: 'type="logomark"',
								quickLink: 'logomark',
								component: <CSImage type="logomark" />,
								code: '<CSImage type="logomark" />'
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="purple"',
								secondaryVariants: 'type="logo"',
								quickLink: 'purple logo',
								component: <CSImage type="logo" />,
								code: '<CSImage type="logo" />'
							}, {
								primaryVariants: 'color="white"',
								secondaryVariants: 'type="logo"',
								quickLink: 'white logo',
								component: <div className="black-background">
									<CSImage type="logo" color="white" />
								</div>,
								code: `<div className="black-background">
									<CSImage type="logo" color="white" />
								</div>`
							}, {
								primaryVariants: 'color="purple"',
								secondaryVariants: 'type="logomark"',
								quickLink: 'purple logomark',
								component: <CSImage type="logomark" />,
								code: '<CSImage type="logomark" />'
							}, {
								primaryVariants: 'color="white"',
								secondaryVariants: 'type="logomark"',
								quickLink: 'white logomark',
								component: <div className="black-background">
									<CSImage type="logomark" color="white" />
								</div>,
								code: `<div className="black-background">
									<CSImage type="logomark" color="white" />
								</div>`
							}, {
								primaryVariants: 'color="black"',
								secondaryVariants: 'type="logomark"',
								quickLink: 'black logomark',
								component: <CSImage type="logomark" color="black" />,
								code: '<CSImage type="logomark" color="black" />'
							}
						]
					}, {
						propName: 'height',
						variations: [
							{
								primaryVariants: 'height="15px"',
								component: <CSImage
									type="logomark"
									height="15px"
									color="black"
								/>,
								code: `<CSImage
									type="logomark"
									height="15px"
									color="black"
								/>`
							}
						]
					}, {
						propName: 'longDescription',
						variations: [
							{
								component: <CSImage type="logo" longDescription="A purple CloudSense logo on a white background." />,
								code: `<CSImage type="logo" longDescription="A purple CloudSense logo on a white background." />`
							}
						]
					}, {
						propName: 'variant',
						alert: {
							variant: 'info',
							text: 'The variant prop should only be used with images of type logomark.'
						},
						variations: [
							{
								primaryVariants: 'variant="initial"',
								secondaryVariants: [
									'type="logomark"',
									'color="purple"'
								],
								quickLink: 'initial purple',
								component: <CSImage type="logomark" />,
								code: `<CSImage type="logomark" />`
							}, {
								primaryVariants: 'variant="reversed"',
								secondaryVariants: [
									'type="logomark"',
									'color="purple"'
								],
								quickLink: 'reversed purple',
								component: <CSImage type="logomark" variant="reversed" />,
								code: `<CSImage type="logomark" variant="reversed" />`
							}, {
								primaryVariants: 'variant="initial"',
								secondaryVariants: [
									'type="logomark"',
									'color="white"'
								],
								quickLink: 'initial white',
								component: <div className="black-background">
									<CSImage type="logomark" color="white" />
								</div>,
								code: `<div className="black-background">
									<CSImage type="logomark" color="white" />
								</div>`
							}, {
								primaryVariants: 'variant="reversed"',
								secondaryVariants: [
									'type="logomark"',
									'color="black"'
								],
								quickLink: 'reversed black',
								component: <CSImage
									type="logomark"
									color="black"
									variant="reversed"
								/>,
								code: `<CSImage
									type="logomark"
									color="black"
									variant="reversed"
								/>`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="8rem"',
								component: <CSImage type="logomark" width="8rem" />,
								code: `<CSImage type="logomark" width="8rem" />`
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
								component: <CSImage
									type="logomark"
									color="black"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSImage
									type="logomark"
									color="black"
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
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the image.'
			}, {
				name: 'color',
				customTypes: [{
					name: 'CSImageColor',
					types: ['\'purple\'', '\'white\'', '\'black\'']
				}],
				default: '\'purple\'',
				description: 'Set the image color.'
			}, {
				name: 'height',
				types: ['string'],
				description: 'Set the image height. (eg. 200px, 20rem, 50%, etc.)'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the image.'
			}, {
				name: 'type',
				required: true,
				customTypes: [{
					name: 'CSImageType',
					types: ['\'logo\'', '\'logomark\'']
				}],
				description: 'Set the image type.'
			}, {
				name: 'variant',
				customTypes: [{
					name: 'CSImageVariant',
					types: ['\'initial\'', '\'reversed\'']
				}],
				default: '\'initial\'',
				description: 'Set the image variant.'
			}, {
				name: 'width',
				types: ['string'],
				description: 'Set the image width. (eg. 200px, 20rem, 50%, etc.)'
			}, {
				name: 'longDescription',
				types: ['string'],
				description: 'Set the expanded description of the image. Creates hidden span with custom description when alt is not enough.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the image tag.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'4.1.2'
				],
				requirements: [
					{
						structure: [
							'`<img>`'
						],
						properties: [
							'`alt` - alternate text for image, constructed as {type}-{color}-{variant}',
							'`aria-labelledby` - contains id pointing to hidden span when `longDescription` is set which associates image with description'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getImagePreviewDoc();

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

export default CSImagePreview;
