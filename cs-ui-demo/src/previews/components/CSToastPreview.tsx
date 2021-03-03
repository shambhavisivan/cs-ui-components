import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewApi from '../PreviewApi';

import { CSToast, CSToastApi, CSButton, CSButtonGroup } from '@cloudsense/cs-ui-components';

class CSToastPreview extends React.Component {
	handleClose = () => alert('Toast has been closed.');

	getToastDoc = () => ({
		name: 'Toast',
		usage: 'Toast serves as a feedback & confirmation mechanism after the user takes an action.',
		accessible: 'partially',
		previews: [
			{
				name: 'Toast',
				examples: [
					{
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="info"',
								quickLink: 'info',
								component: <CSToast variant="info" text="This is an info variant toast" />,
								code: '<CSToast variant="info" text="This is an info variant toast" />'
							}, {
								primaryVariants: 'variant="success"',
								quickLink: 'success',
								component: <CSToast variant="success" text="This is a success variant toast" />,
								code: '<CSToast variant="success" text="This is a success variant toast" />'
							}, {
								primaryVariants: 'variant="warning"',
								quickLink: 'warning',
								component: <CSToast variant="warning" text="This is a warning variant toast" />,
								code: '<CSToast variant="warning" text="This is a warning variant toast" />'
							}, {
								primaryVariants: 'variant="error"',
								quickLink: 'error',
								component: <CSToast variant="error" text="This is an error variant toast" />,
								code: '<CSToast variant="error" text="This is an error variant toast" />'
							}
						]
					}, {
						propName: 'closeButton',
						variations: [
							{
								primaryVariants: 'closeButton={true}',
								component: <CSToast
									variant="info"
									closeButton
									text="This is an example toast with a close button"
								/>,
								code: `<CSToast
									variant="info"
									closeButton
									text="This is an example toast with a close button"
								/>`
							}
						]
					}, {
						propName: 'detail',
						variations: [
							{
								component: <CSToast
									variant="info"
									text="This is an example toast with a detail prop"
									detail="This is the detail"
								/>,
								code: `<CSToast
									variant="info"
									text="This is an example toast with a detail prop"
									detail="This is the detail"
								/>`
							}
						]
					}, {
						propName: 'iconName',
						description: 'This is used for overriding default icon defined by variant',
						variations: [
							{
								primaryVariants: 'iconName="quote"',
								component: <CSToast
									variant="warning"
									iconName="quote"
									text="This is an example alert for overriding the icon with iconName prop"
								/>,
								code: `<CSToast
									variant="warning"
									iconName="quote"
									text="This is an example alert for overriding the icon with iconName prop"
								/>`
							}
						]
					}, {
						propName: 'iconOrigin',
						variations: [
							{
								primaryVariants: 'iconOrigin="slds"',
								secondaryVariants: 'iconName="quote"',
								quickLink: 'slds',
								component: <CSToast
									variant="info"
									iconName="quote"
									text="This is an example toast with an icon with origin 'slds'"
								/>,
								code: `<CSToast
									variant="info"
									iconName="quote"
									text="This is an example toast with an icon with origin 'slds'"
								/>`
							}, {
								primaryVariants: 'iconOrigin="cs"',
								secondaryVariants: 'iconName="big_shot"',
								quickLink: 'cs',
								component: <CSToast
									variant="info"
									iconName="big_shot"
									iconOrigin="cs"
									text="This is an example toast with an icon with origin 'cs'"
								/>,
								code: `<CSToast
									variant="info"
									iconName="big_shot"
									iconOrigin="cs"
									text="This is an example toast with an icon with origin 'cs'"
								/>`
							}
						]
					}, {
						propName: 'iconVisibility',
						variations: [
							{
								primaryVariants: 'iconVisibility={false}',
								component: <CSToast
									variant="success"
									iconVisibility={false}
									text="This is an example toast without an icon"
								/>,
								code: `<CSToast
									variant="success"
									iconVisibility={false}
									text="This is an example toast without an icon"
								/>`
							}
						]
					}, {
						propName: 'onClose',
						variations: [
							{
								secondaryVariants: 'closeButton={true}',
								component: <CSToast
									variant="info"
									text="This is an example toast with an onClose handler"
									closeButton
									onClose={this.handleClose}
								/>,
								code: `<CSToast
									variant="info"
									text="This is an example toast with an onClose handler"
									closeButton
									onClose={this.handleClose}
								/>`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="100%"',
								quickLink: '100%',
								component: <CSToast
									variant="info"
									width="100%"
									text="This is an example toast with width 100%"
								/>,
								code: `<CSToast
									variant="info"
									width="100%"
									text="This is an example toast with width 100%"
								/>`
							}, {
								primaryVariants: 'width="600px"',
								quickLink: '600px',
								component: <CSToast
									variant="info"
									width="600px"
									text="This is an example toast with width 600px"
								/>,
								code: `<CSToast
									variant="info"
									width="600px"
									text="This is an example toast with width 600px"
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
								component: <CSToast
									variant="info"
									className="custom-class"
									text="This is an example alert with a close button"
								/>,
								code: `<CSToast
									variant="info"
									className="custom-class"
									text="This is an example alert with a close button"
								/>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSToast supports custom content provided as children. You can use the `.cs-toast-link` class to apply native link styling.',
						variations: [
							{
								quickLink: 'custom link',
								primaryVariants: 'link',
								component: <CSToast variant="warning">
									<span>This custom text includes a <a href="./CSToast" className="cs-toast-link">link</a></span>
								</CSToast>,
								code: `<CSToast variant="warning">
									<span>This custom text includes a <a href="./CSToast" className="cs-toast-link">link</a></span>
								</CSToast>`
							},
							{
								quickLink: 'bold and italic text',
								primaryVariants: 'bold and italic text',
								component: <CSToast variant="success">
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSToast>,
								code: `<CSToast variant="success">
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSToast>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the toast.'
			}, {
				name: 'closeButton',
				types: ['boolean'],
				default: 'false',
				description: 'Show the close button.'
			}, {
				name: 'detail',
				types: ['string'],
				description: 'Set the text content for the toast detail.'
			}, {
				name: 'iconName',
				types: ['string'],
				description: 'Override the default icon defined by the variant.'
			}, {
				name: 'iconOrigin',
				customTypes: [{
					name: 'CSToastIconOrigin',
					types: ['\'slds\'', '\'cs\'']
				}],
				default: '\'slds\'',
				description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
			}, {
				name: 'iconVisibility',
				types: ['boolean'],
				default: 'true',
				description: 'Show or hide the icon.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the toast.'
			}, {
				name: 'onClose',
				types: ['(event) => void'],
				description: 'Handler method for closing the toast.'
			}, {
				name: 'text',
				types: ['string'],
				description: 'Set textual content for the toast.'
			}, {
				name: 'variant',
				required: true,
				customTypes: [{
					name: 'CSToastVariant',
					types: ['\'info\'', '\'success\'', '\'warning\'', '\'error\'']
				}],
				description: 'Set the colour and icon variant of the toast.'
			}, {
				name: 'width',
				types: ['string'],
				description: 'Set the toast width. (eg. 200px, 20rem, 50%, etc.)'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the toast wrapper div.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'1.4.4',
					'2.1.1',
					'2.1.2',
					'2.2.1 - check',
					'2.4.7',
					'3.2.1',
					'3.3.1',
					'4.1.2',
					'4.1.3'
				],
				requirements: [
					{
						structure: [
							'Heading is HTML `<h4>` - allows screen reader heading search'
						],
						properties: [
							'`role="alert/status"` - depending on toast variant',
							'`duration` - allowing setting large enough time'
						],
						visual: [
							'Color contrast ratio > 4.5'
						],
						keyboardOperability: [
							'Close button is `<button>` and a child - allows keyboard focus'
						]
					}
				]
			}
		],
		api: [
			{
				name: 'renderCSToast',
				description: 'onClick={() => CSToastApi.renderCSToast({...CSToastProps}, position: CSToastPosition, duration: number)',
				component: <CSButtonGroup combined>
					<CSButton
						label="top-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top right toast'
							}, 'top-right', 3)
						)}
					/>
					<CSButton
						label="top-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'warning',
								text: 'Top left toast'
							}, 'top-left', 4)
						)}
					/>
					<CSButton
						label="top-center"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top center toast'
							}, 'top-center', 5)
						)}
					/>
					<CSButton
						label="bottom-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'info',
								text: 'Bottom right toast'
							}, 'bottom-right', 6)
						)}
					/>
					<CSButton
						label="bottom-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'error',
								text: 'Bottom left toast that won\'t close (duration = null)'
							}, 'bottom-left', null)
						)}
					/>
				</CSButtonGroup>,
				code: `<CSButtonGroup combined>
					<CSButton
						label="top-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top right toast'
							}, 'top-right', 3)
						)}
					/>
					<CSButton
						label="top-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'warning',
								text: 'Top left toast'
							}, 'top-left', 4)
						)}
					/>
					<CSButton
						label="top-center"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top center toast'
							}, 'top-center', 5)
						)}
					/>
					<CSButton
						label="bottom-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'info',
								text: 'Bottom right toast'
							}, 'bottom-right', 6)
						)}
					/>
					<CSButton
						label="bottom-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'error',
								text: 'Bottom left toast that won't close (duration = null)'
							}, 'bottom-left', null)
						)}
					/>
				</CSButtonGroup>`,
				properties: [
					{
						name: 'props',
						required: true,
						customTypes: [{
							name: 'CSToastProps',
							types: ['object']
						}],
						description: 'Set the toast properties as defined in the property table above.'
					}, {
						name: 'position',
						customTypes: [{
							name: 'CSToastPosition',
							types: [
								'\'top-right\'',
								'\'top-left\'',
								'\'top-center\'',
								'\'bottom-left\'',
								'\'bottom-right'
							]
						}],
						default: '\'top-right\'',
						description: 'Set the toast position.'
					}, {
						name: 'duration',
						types: ['number'],
						default: '5',
						description: 'Set the duration in seconds.'
					}
				]
			}
		]
	})

	render() {
		const component = this.getToastDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewApi api={component.api} name={component.name} />
					<PreviewTable api components={component.api} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSToastPreview;
