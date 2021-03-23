import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSButton, CSSection } from '@cloudsense/cs-ui-components';

class CSSectionPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Section',
			usage: 'This is used as a toggle visibility of section content.',
			accessible: 'yes',
			examples: [
				{
					propName: 'collapsible',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSection collapsible title="Collapsible Section">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSSection
									title="Section is closed by default"
									id="id"
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'defaultClosed',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSection defaultClosed collapsible title="Section is closed by default">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							variationText: ['collapsible="true"'],
							component:
								<CSSection collapsible title="Collapsible Section" className="custom-class">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				},
				{
					propName: 'children',
					customText: 'CSSection supports custom content provided as a child',
					variations: [
						{
							variationName: ['custom component'],
							quickLink: 'custom component',
							variationText: ['collapsible="true"'],
							component:
								<CSSection collapsible title="Collapsible Section" className="custom-class">
									<CSButton label="Custom Button" />
								</CSSection>
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
					description: 'Apply custom CSS classes to the section.'
				},  {
					name: 'collapsible',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether the section should be collapsible.'
				}, {
					name: 'defaultClosed',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether the section is closed by default. It is designed to be used with collapsible prop.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the section.'
				}, {
					name: 'title',
					required: true,
					types: ['string'],
					description: 'Set a title for the section.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the section tag.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'`<section>` is top wrapper - implicit `role="region"`',
								'Heading is `<h3>` - allows screen reader heading search',
								'Child is `<button>`'
							],
							properties: [
								'`aria-expanded` - reads out whether section is expanded or collapsed, if expandable'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Child is `<button>` - allows focus and supports clicks with `enter` and `space` keys'
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

export default CSSectionPreview;
