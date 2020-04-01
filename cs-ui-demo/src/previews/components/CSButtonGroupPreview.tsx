import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSButtonGroup, CSButton, CSButtonDropdown} from '@cloudsense/cs-ui-components';

class CSButtonGroupPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Button Group',
			usage: 'Button groups are used to bunch together buttons with similar actions',
			examples: [
				{
					propName: 'combined',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
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
									<CSButtonDropdown
										iconName="down"
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
									</CSButtonDropdown>
								</CSButtonGroup>
						},
						{
							variationName: ['false'],
							string: '',
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
									<CSButtonDropdown
										iconName="down"
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
									</CSButtonDropdown>
								</CSButtonGroup>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
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
									<CSButtonDropdown
										iconName="down"
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
									</CSButtonDropdown>
								</CSButtonGroup>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'combined',
					description: 'Logic for combined button styling',
					options: [
						'true',
						'false'
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

export default CSButtonGroupPreview;
