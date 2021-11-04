import React from 'react';
import { CSInputFile } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSInputFilePreview extends React.Component {
	handleChange = () => alert('File has been uploaded.');
	handleDrop = () => alert('File has been dropped.');

	getDoc = () => ({
		name: 'Input File',
		usage: 'Input File component.',
		accessible: 'yes',
		components: [
			{
				name: 'CSInputFile',
				examples: [
					{
						propName: 'accept',
						variations: [
							{
								primaryVariants: 'accept=".png"',
								quickLink: 'file extension',
								component: <CSInputFile accept=".png" />,
								code: '<CSInputFile accept=".png" />'
							}, {
								primaryVariants: 'accept="audio/*"',
								quickLink: 'audio',
								component: <CSInputFile label="Upload an audio file" accept="audio/*" />,
								code: '<CSInputFile label="Upload an audio file" accept="audio/*" />'
							}, {
								primaryVariants: 'accept="video/*"',
								quickLink: 'video',
								component: <CSInputFile label="Upload a video file" accept="video/*" />,
								code: '<CSInputFile label="Upload a video file" accept="video/*" />'
							}, {
								primaryVariants: 'accept="image/*"',
								quickLink: 'image',
								component: <CSInputFile label="Upload an image file" accept="image/*" />,
								code: '<CSInputFile label="Upload an image file" accept="image/*" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSInputFile disabled />,
								code: '<CSInputFile disabled />'
							}
						]
					}, {
						propName: 'dropAreaBackground',
						variations: [
							{
								primaryVariants: 'dropAreaBackground={true}',
								secondaryVariants: [
									'dropAreaWidth="25rem"',
									'dropAreaHeight="3rem"'
								],
								quickLink: 'true',
								component: <CSInputFile
									dropAreaBackground
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>,
								code: `<CSInputFile
									dropAreaBackground
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>`
							}, {
								primaryVariants: 'dropAreaBackground={false}',
								secondaryVariants: [
									'dropAreaWidth="25rem"',
									'dropAreaHeight="3rem"'
								],
								quickLink: 'false',
								component: <CSInputFile
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>,
								code: `<CSInputFile
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>`
							}
						]
					}, {
						propName: 'dropAreaHeight',
						variations: [
							{
								primaryVariants: 'dropAreaHeight="100px"',
								quickLink: '100px',
								component: <CSInputFile dropAreaHeight="100px" />,
								code: '<CSInputFile dropAreaHeight="100px" />'
							}, {
								primaryVariants: 'dropAreaHeight="10rem"',
								quickLink: '10rem',
								component: <CSInputFile dropAreaHeight="10rem" />,
								code: '<CSInputFile dropAreaHeight="10rem" />'
							}
						]
					}, {
						propName: 'dropAreaWidth',
						variations: [
							{
								primaryVariants: 'dropAreaWidth="100%"',
								quickLink: '100%',
								component: <CSInputFile dropAreaWidth="100%" />,
								code: '<CSInputFile dropAreaWidth="100%" />'
							}, {
								primaryVariants: 'dropAreaWidth="400px"',
								quickLink: '400px',
								component: <CSInputFile dropAreaWidth="400px" />,
								code: '<CSInputFile dropAreaWidth="400px" />'
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSInputFile error />,
								code: '<CSInputFile error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSInputFile
									error
									errorMessage="File type not supported"
								/>,
								code: `<CSInputFile
									error
									errorMessage="File type not supported"
								/>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSInputFile
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputFile
									error
									errorMessage="Error message."
									errorTooltip
								/>`
							}
						]
					}, {
						propName: 'fileSelectedLabel',
						variations: [
							{
								component: <CSInputFile fileSelectedLabel="Directory uploaded" />,
								code: '<CSInputFile fileSelectedLabel="Directory uploaded" />'
							}
						]
					}, {
						propName: 'fileSize',
						variations: [
							{
								primaryVariants: 'fileSize={true}',
								component: <CSInputFile fileSize />,
								code: '<CSInputFile fileSize />'
							}
						]
					}, {
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label will always be rendered and has default value (\'Upload a file\') because of accessibility.'
						},
						variations: [
							{
								component: <CSInputFile label="Upload directory" />,
								code: '<CSInputFile label="Upload directory" />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSInputFile onChange={this.handleChange} />,
								code: '<CSInputFile onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'onDrop',
						variations: [
							{
								component: <CSInputFile onDrop={this.handleDrop} />,
								code: '<CSInputFile onDrop={this.handleDrop} />'
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
								component: <CSInputFile
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSInputFile
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'accept',
						types: ['string', 'Array<string>'],
						description: 'Set which file types should be accepted. (eg. .jpg, .mp3, audio/*, image/*, etc.)'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the file input.'
					}, {
						name: 'dropAreaBackground',
						types: 'boolean',
						default: 'false',
						description: 'Set whether the background area should be gray.'
					}, {
						name: 'dropAreaHeight',
						types: 'string',
						description: 'Set the height of the drop area. (eg. 200px, 20rem, etc.)'
					}, {
						name: 'dropAreaWidth',
						types: 'string',
						description: 'Set the height of the drop area. (eg. 200px, 20rem, 100%, etc.)'
					}, {
						name: 'error',
						types: 'boolean',
						default: 'false',
						description: 'Toggle the error state.'
					}, {
						name: 'errorMessage',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error message or messages for the file input.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the file input.'
					}, {
						name: 'fileSelectedLabel',
						types: 'string',
						default: '\'File selected\'',
						description: 'Set input file label to display after file is selected.'
					}, {
						name: 'fileSize',
						types: 'boolean',
						default: 'false',
						description: 'Display the file size.'
					}, {
						name: 'onChange',
						types: '(value) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'onDrop',
						types: '(value) => any',
						description: 'Handler method for the drop event.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the file input.'
					}, {
						name: 'label',
						types: 'string',
						default: '\'Upload a file\'',
						description: 'Set the file input label.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the file input wrapper.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the file input.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.1',
				'1.4.4',
				'2.1.1',
				'2.1.2',
				'2.4.7',
				'2.5.3',
				'3.2.1',
				'3.2.2',
				'3.3.1',
				'3.3.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<input type="file">` - hidden',
					'`<span>` imitates button with custom style',
					'`<input>` and `<span>` wrapped in `<label>`'
				],
				attributes: [
					'`aria-invalid` - true when there is an error',
					'`title`'
				],
				styling: [
					'Focus state styles',
					'`<label>` styled as drop zone area'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable and supports clicks with `Enter` and `Space` keys',
					'Logic around tooltip provided in order for tooltip to not break focus pattern when it is shown'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSInputFilePreview;
