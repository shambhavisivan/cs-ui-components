import React from 'react';
import {
	CSToast,
	CSToastApi,
	CSButton,
	CSButtonGroup
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSToastPreview extends React.Component {
	handleClose = () => alert('Toast has been closed.');

	getDoc = () => ({
		name: 'Toast',
		usage: 'Toast serves as a feedback & confirmation mechanism after the user takes an action.',
		accessible: 'partially',
		components: [
			{
				name: 'CSToast',
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
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="quote"',
									'iconOrigin="slds"'
								],
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
								primaryVariants: [
									'iconName="big_shot"',
									'iconOrigin="cs"'
								],
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
						propName: 'iconHidden',
						variations: [
							{
								primaryVariants: 'iconHidden={true}',
								component: <CSToast
									variant="success"
									iconHidden
									text="This is an example toast without an icon"
								/>,
								code: `<CSToast
									variant="success"
									iconHidden
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
					},  {
						propName: 'text',
						variations: [
							{
								primaryVariants: 'has text',
								quickLink: 'has text',
								component: <CSToast
									variant="info"
									text="This is an example toast with text"
								/>,
								code: `<CSToast
									variant="info"
									text="This is an example toast with text"
								/>`
							}, {
								primaryVariants: 'doesn\'t have text',
								quickLink: 'doesn\'t have text',
								component: <CSToast
									variant="info"
								/>,
								code: `<CSToast
									variant="info"
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
									className="custom-br-mint"
									text="This is an example alert with a close button"
								/>,
								code: `<CSToast
									variant="info"
									className="custom-br-mint"
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
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSToastVariant',
							types: [
								`'info'`,
								`'success'`,
								`'warning'`,
								`'error'`
							]
						},
						description: 'Set the color and icon variant of the toast.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}, {
						name: 'detail',
						types: 'string',
						description: 'Set the text for the toast detail.'
					}, {
						name: 'iconName',
						types: 'string',
						description: 'Override the default icon defined by the variant.'
					}, {
						name: 'iconOrigin',
						customTypes: {
							name: 'CSToastIconOrigin',
							types: [`'slds'`, `'cs'`]
						},
						default: `'slds'`,
						description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
					}, {
						name: 'iconHidden',
						types: 'boolean',
						default: 'false',
						description: 'Show or hide the icon.'
					}, {
						name: 'onClose',
						types: '(event) => void',
						description: 'Handler method for closing the toast.'
					}, {
						name: 'text',
						types: 'string',
						description: 'Set the text for the toast.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the toast width. (eg. 200px, 20rem, 50%, etc.)'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the toast.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the toast.'
					}, {
						name: 'children',
						types: 'any',
						description: 'This component supports custom content passed as children.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the toast wrapper div.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4',
				'1.4.10',
				'1.4.13',
				'2.1.1',
				'2.1.2',
				'2.2.1',
				'2.4.7',
				'3.2.1',
				'3.3.1',
				'4.1.2',
				'4.1.3'
			],
			requirements: {
				structure: [
					'Heading is `<h4>` - allows screen reader heading search'
				],
				attributes: [
					'`role="alert/status"` - depending on toast variant',
					'`duration` - allowing setting large enough time'
				],
				styling: [
					'Color contrast ratio > 4.5'
				],
				keyboardOperability: [
					'Close button is `<CSButton>` and a child - allows keyboard focus'
				]
			}
		},
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
								text: 'Top right toast',
								closeButton: true
							}, 'top-right', 3)
						)}
					/>
					<CSButton
						label="top-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'warning',
								text: 'Top left toast',
								closeButton: true
							}, 'top-left', 4)
						)}
					/>
					<CSButton
						label="top-center"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top center toast',
								closeButton: true
							}, 'top-center', 5)
						)}
					/>
					<CSButton
						label="bottom-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'info',
								text: 'Bottom right toast',
								closeButton: true
							}, 'bottom-right', 6)
						)}
					/>
					<CSButton
						label="bottom-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'error',
								text: 'Bottom left toast that won\'t close (duration = null)',
								closeButton: true
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
								text: 'Top right toast',
								closeButton: true
							}, 'top-right', 3)
						)}
					/>
					<CSButton
						label="top-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'warning',
								text: 'Top left toast',
								closeButton: true
							}, 'top-left', 4)
						)}
					/>
					<CSButton
						label="top-center"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'success',
								text: 'Top center toast',
								closeButton: true
							}, 'top-center', 5)
						)}
					/>
					<CSButton
						label="bottom-right"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'info',
								text: 'Bottom right toast',
								closeButton: true
							}, 'bottom-right', 6)
						)}
					/>
					<CSButton
						label="bottom-left"
						onClick={() => (
							CSToastApi.renderCSToast({
								variant: 'error',
								text: 'Bottom left toast that won't close (duration = null)',
								closeButton: true
							}, 'bottom-left', null)
						)}
					/>
				</CSButtonGroup>`,
				arguments: [
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
			}, {
				name: 'clearAllToasts',
				description: 'onClick={() => CSToastApi.clearAllToasts()',
				component:
					<CSButton
						label="Clear all toasts"
						onClick={() => CSToastApi.clearAllToasts()}
					/>,
				code: `<CSButton
					label="Clear all toasts"
					onClick={() => CSToastApi.clearAllToasts()}
				/>`
			}
		]
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSToastPreview;
