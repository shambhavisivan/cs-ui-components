import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputFile } from '@cloudsense/cs-ui-components';

class CSInputFilePreview extends React.Component {
	handleChange = () => alert('File has been uploaded.');
	handleDrop = () => alert('File has been dropped.');

	getDoc() {
		const json = {
			name: 'Input File',
			usage: 'Input File component',
			accessible: 'partially',
			examples: [
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSInputFile
									label="Upload directory"
								/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputFile
									label="Upload directory"
									disabled
								/>
						}
					]
				},
				{
					propName: 'accept',
					variations: [
						{
							variationName: ['file extension'],
							quickLink: 'file extension',
							component:
								<CSInputFile
									label="Upload a file"
									accept=".png"
								/>
						},
						{
							variationName: ['audio/*'],
							quickLink: 'audio/*',
							component:
								<CSInputFile
									label="Upload an audio file"
									accept="audio/*"
								/>
						},
						{
							variationName: ['video/*'],
							quickLink: 'video/*',
							component:
								<CSInputFile
									label="Upload a video file"
									accept="video/*"
								/>
						},
						{
							variationName: ['image/*'],
							quickLink: 'image/*',
							component:
								<CSInputFile
									label="Upload an image file"
									accept="image/*"
								/>
						}
					]
				},
				{
					propName: 'error',
					alert: {
						variant: 'info',
						text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputFile
									label="Upload directory"
									error
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSInputFile
									label="Upload directory"
									error
									errorMessage="File type not supported"
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSInputFile
									label="Upload directory"
									onChange={this.handleChange}
								/>
						}
					]
				},
				{
					propName: 'onDrop',
					variations: [
						{
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
								/>
						}
					]
				},
				{
					propName: 'dropAreaBackground',
					variations: [
						{
							variationName: ['true'],
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaBackground
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>
						},
						{
							variationName: ['false'],
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaWidth="25rem"
									dropAreaHeight="3rem"
								/>
						}
					]
				},
				{
					propName: 'dropAreaWidth',
					variations: [
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaBackground
									dropAreaWidth="100%"
								/>
						},
						{
							variationName: ['400px'],
							quickLink: '400px',
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaBackground
									dropAreaWidth="400px"
								/>
						}
					]
				},
				{
					propName: 'dropAreaHeight',
					variations: [
						{
							variationName: ['100px'],
							quickLink: '100px',
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaBackground
									dropAreaHeight="100px"
								/>
						},
						{
							variationName: ['10rem'],
							quickLink: '10rem',
							component:
								<CSInputFile
									label="Upload directory"
									onDrop={this.handleDrop}
									dropAreaBackground
									dropAreaHeight="10rem"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSInputFile
									label="Upload directory"
									id="fileInput"
								/>
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
								<CSInputFile
									label="Upload directory"
									className="custom-class"
								/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'accept',
					description: 'Type of file to accept. Multiple values can be accepted separated by a comma',
					options: [
						'file extension e.g. ".jpg" ".mp3" ".doc"',
						'audio/*',
						'video/*',
						'image/*'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'dropAreaBackground',
					description: 'Change drop area background to grey',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'dropAreaHeight',
					description: 'Set height of drop area',
					options: [
						'e.g.',
						'100px',
						'20rem'
					]
				},
				{
					propertyName: 'dropAreaWidth',
					description: 'Set width of drop area',
					options: [
						'e.g.',
						'400px',
						'20rem',
						'100%'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error text message'
				},
				{
					propertyName: 'id',
					description: 'File input id value'
				},
				{
					propertyName: 'label',
					description: 'Manually change the label name of the file text'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'onDrop',
					description: 'Logic for onDrop event'
				}
			],
			accessibility: [
				{
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
					requirements: [
						{
							structure: [
								'HTML <input type="file"> - hidden',
								'<span> imitating button with custom style',
								'<input> and <span> wrapped in <label>'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-invalid',
								'aria-required',
								'title'
							],
							styling: [
								'Focus state styles',
								'<label> styled as drop zone area'
							],
							keyboardOperability: [
								'OOTB focusable'
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

export default CSInputFilePreview;
