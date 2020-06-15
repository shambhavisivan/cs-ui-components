import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSInputFile} from '@cloudsense/cs-ui-components';

class CSInputFilePreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Input File',
			usage: 'Input File component',
			examples: [
				{
					propName: 'label',
					variations: [
						{
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSInputFile
									label="Upload a file"
									accept=".png"
								/>
						},
						{
							variationName: ['audio/*'],
							quickLink: 'audio/*',
							string: '',
							component:
								<CSInputFile
									label="Upload an audio file"
									accept="audio/*"
								/>
						},
						{
							variationName: ['video/*'],
							quickLink: 'video/*',
							string: '',
							component:
								<CSInputFile
									label="Upload a video file"
									accept="video/*"
								/>
						},
						{
							variationName: ['image/*'],
							quickLink: 'image/*',
							string: '',
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
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
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
							string: '',
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
					propName: 'id',
					variations: [
						{
							string: '',
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
							string: '',
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
					propertyName: 'label',
					description: 'Manually change the label name of the file text'
				},
				{
					propertyName: 'id',
					description: 'File input id value'
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

export default CSInputFilePreview;
