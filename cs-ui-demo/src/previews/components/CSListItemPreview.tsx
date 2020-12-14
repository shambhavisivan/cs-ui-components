import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSListItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSListItemPreview extends React.Component {

	getDoc() {
		const json = {
			name: 'List Item',
			usage: 'List idem inside CSList',
			accessible: 'no',
			examples: [
				{
					propName: 'text',
					variations: [
						{
							quickLink: '',
							component:
								<CSListItem
									text="List item in no list"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'active',
					description: 'Active state'
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'List item id value'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'text',
					description: 'Text content for main toast message'
				},
				{
					propertyName: 'toggleActive',
					description: 'Toggle active state',
					helperPropInComponents: [
						'Sidebar'
					]
				}
			],
			accessibility: [
				{
					criterionList: [
						'2.1.1',
						'2.1.2',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'li'
							],
							properties: [
								'aria-selected'
							],
							styling: [
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'Proper focus management and keyboard operability ensured by structure and <button>'
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
					<CSAlert variant="warning" text="This component is under construction." />
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

export default CSListItemPreview;
