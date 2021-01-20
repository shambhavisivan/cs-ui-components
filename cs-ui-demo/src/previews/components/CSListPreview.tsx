import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSList, CSListItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSListPreview extends React.Component {
	getCSListDoc() {
		const json = {
			name: 'List',
			usage: 'List that contains items',
			accessible: 'no',
			examples: [
				{
					propName: 'text',
					variations: [
						{
							quickLink: '',
							component:
								<CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'text',
					variations: [
						{
							quickLink: '',
							component:
								<CSListItem text="List item not in a list" />
						}
					]
				}
			],

			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the list.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the list.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Not yet operational.'
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
								'Buttons wrapped in HTML <li> - allows screen reader list navigation while preserving keyboard operability',
								'<button> used'
							],
							properties: [
								'aria-selected',
								'<ul> wrapper role="menu"',
								'button role="menuitemradio"'
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

	getCSListItemDoc() {
		const json = {
			name: 'List Item',
			usage: 'List item inside CSList',
			properties: [
				{
					name: 'active',
					types: ['string'],
					description: 'Control the active state.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the list item.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the list item.'
				}, {
					name: 'onClick',
					types: ['(value) => any'],
					description: 'Handler method for when the click event.'
				}, {
					name: 'text',
					types: ['string'],
					description: 'Set textual content of the list item.'
				}, {
					name: 'toggleActive',
					types: ['(event) => void'],
					description: 'Handler method for when managing the active state.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the list item tag.'
				}
			]
		};
		return json;
	}

	render() {
		const component = this.getCSListDoc();
		const component2 = this.getCSListItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="warning" text="This component is under construction and should not be used." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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

export default CSListPreview;
