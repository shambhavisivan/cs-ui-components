import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSDivider, CSButtonGroup, CSButtonDropdown, CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon} from '@cloudsense/cs-ui-components';

class CSDividerPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Divider',
			usage: 'Divides things, simple.',
			examples: [
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['vertical'],
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButtonGroup>
											<CSButton label="Button 1"/>
											<CSButton label="Button 2"/>
										</CSButtonGroup>
										<CSDivider variant="vertical" size="2rem"/>
										<CSButton label="Button 2"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['horizontal'],
							string: '',
							component:
								<CSButtonDropdown>
									<CSButton label="Button 1"/>
									<CSButton label="Button 2"/>
									<CSDivider variant="horizontal"/>
									<CSButton label="Lonely Button"/>
								</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSButtonGroup>
									<CSButton label="Button 1"/>
									<CSButton label="Button 2"/>
									<CSDivider variant="vertical" size="2rem" className="custom-class"/>
									<CSButton label="Button 3"/>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSDivider
									variant="horizontal"
									label="Some label"
									size="25rem"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'variant',
					description: 'Vertical or Horizontal variant',
					options: [
						'vertical',
						'horizontal'
					]
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
					propertyName: 'label',
					description: 'Divider label to display',
					options: []
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
				<div className="preview-section-wrapper divider-preview">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples}/>
					<PreviewTable name={component.name} properties={component.properties}/>
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
