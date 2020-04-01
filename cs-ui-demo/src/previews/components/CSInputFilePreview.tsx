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
							variationName: ['label'],
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
							variationName: ['disabled'],
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
					propName: 'error',
					variations: [
						{
							variationName: ['error'],
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
							variationName: ['errorMessage'],
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
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
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
					propertyName: 'error message',
					description: 'Error text message',
					options: [
					]
				},
				{
					propertyName: 'label',
					description: 'Manually change the label name of the file text',
					options: [
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
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
					<PreviewTable name={component.name} properties={component.properties} />
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
