import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSDivider, CSButtonGroup, CSDropdown, CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon } from '@cloudsense/cs-ui-components';

class CSDividerPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Divider',
			usage: 'Divides things, simple.',
			accessible: 'yes',
			examples: [
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['vertical'],
							quickLink: 'vertical',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButtonGroup>
											<CSButton label="Button 1" />
											<CSButton label="Button 2" />
										</CSButtonGroup>
										<CSDivider variant="vertical" size="2rem" />
										<CSButton label="Button 2" />
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['horizontal'],
							quickLink: 'horizontal',
							component:
								<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="horizontal" />
									<CSButton label="Lonely Button" />
								</CSDropdown>
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
								<CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="vertical" size="2rem" className="custom-class" />
									<CSButton label="Button 3" />
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="horizontal" id="id" />
									<CSButton label="Lonely Button" />
								</CSDropdown>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSDivider
									variant="horizontal"
									label="Some label"
									size="25rem"
								/>
						}
					]
				},
				{
					propName: 'size',
					variations: [
						{
							variationName: ['100px'],
							component:
								<CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="vertical" size="100px" />
									<CSButton label="Button 3" />
								</CSButtonGroup>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Divider id value'
				},
				{
					propertyName: 'label',
					description: 'Divider label to display (available only for horizontal variant)'
				},
				{
					propertyName: 'size',
					description: 'Value of width of divider for horizontal variant or height for vertical variant',
					options: [
						'e.g',
						'20px',
						'10rem',
						'100%'
					]
				},
				{
					propertyName: 'variant',
					description: 'Vertical or Horizontal variant',
					options: [
						'vertical',
						'horizontal'
					]
				}
			],
			accessibility: [
				{
					criteriaList: [
						'4.1.2'
					],
					requirements: [
						{
							properties: [
								'role="separator"',
								'aria-orientation'
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

export default CSDividerPreview;
