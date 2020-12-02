import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSFieldErrorMsg } from '@cloudsense/cs-ui-components';

class CSFieldErrorMsgPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Field Error Message',
			usage: 'Field Error Message renders error message on form elements.',
			accessible: 'yes',
			examples: [
				{
					propName: 'message',
					customText: '',
					variations: [
						{
							variationName: ['string'],
							quickLink: 'string',
							component:
								<CSFieldErrorMsg message="Error message!" />
						},
						{
							variationName: ['Array<string>'],
							quickLink: 'Array<string>',
							component:
								<CSFieldErrorMsg message={['Error message 1!', 'Error message 2!', 'Error message 3!']} />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'message',
					description: 'Error message text'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4'
					],
					requirements: [
						{
							visual: [
								'Color contrast ratio > 4.5'
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
				<div className="preview-section-wrapper divider-preview">
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

export default CSFieldErrorMsgPreview;
