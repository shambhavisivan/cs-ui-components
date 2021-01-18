import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSButtonGroup, CSButton, CSDropdown } from '@cloudsense/cs-ui-components';

class CSButtonGroupPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Button Group',
			usage: 'Button groups are used to bunch together buttons with similar actions',
			accessible: 'yes',
			examples: [
				{
					propName: 'combined',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSButtonGroup
									combined
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							component:
								<CSButtonGroup
									combined={false}
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'marginPosition',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							component:
								<CSButtonGroup
									combined
									marginPosition="left"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						},
						{
							variationName: ['right'],
							quickLink: 'right',
							component:
								<CSButtonGroup
									combined={false}
									marginPosition="right"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						},
						{
							variationName: ['both'],
							quickLink: 'both',
							component:
								<CSButtonGroup
									combined
									marginPosition="both"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSButtonGroup
									combined
									id="id"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSButtonGroup
									combined
									className="custom-class"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Middle Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Last Button"
									/>
									<CSDropdown
										iconName="down"
										label="button dropdown"
									>
										<CSButton
											label="Dropdown item 1"
										/>
										<CSButton
											label="Dropdown item 2"
										/>
										<CSButton
											label="Dropdown item 3"
										/>
									</CSDropdown>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'ariaDescription',
					customText: 'Hidden span will be added with description for screen readers',
					variations: [
						{
							variationName: ['aria description'],
							component:
								<CSButtonGroup
									combined
									ariaDescription="grouping of related buttons sharing similar actions"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Second Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Third Button"
									/>
								</CSButtonGroup>
						},
						{
							variationName: ['aria description and custom id'],
							component:
								<CSButtonGroup
									combined
									id="id"
									ariaDescription="grouping of related buttons sharing similar actions"
								>
									<CSButton
										label="First Button"
									/>
									<CSButton
										label="Second Button"
									/>
									<CSButton
										btnStyle="brand"
										label="Third Button"
									/>
								</CSButtonGroup>
						}
					]
				}
			],

			properties: [
				{
					name: 'combined',
					types: ['boolean'],
					default: 'true',
					description: 'Set whether the button group styling should be combined.'
				}, {
					name: 'marginPosition',
					description: 'Set horizontal margin location.',
					customTypes: [{
						name: 'CSButtonGroupMargin',
						types: ['\'left\'', '\'right\'', '\'both\'']
					}]
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the button group.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the button group.'
				}, {
					name: 'ariaDescription',
					types: ['string'],
					description: 'Set an accessible semantic description of the button group.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the button group div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'2.1.1',
						'2.1.2',
						'2.5.3',
						'3.2.1',
						'3.3.1'
					],
					requirements: [
						{
							structure: [
								'<CSButton> used'
							],
							properties: [
								'aria-labelledby - associate group description hidden span with group wrapper',
								'role="group"'
							],
							styling: [
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'Proper focus management and keyboard operability ensured by structure and <CSButton>'
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

export default CSButtonGroupPreview;
