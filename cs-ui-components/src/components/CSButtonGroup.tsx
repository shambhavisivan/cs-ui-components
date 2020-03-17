import React from 'react';
import jsxToString from 'jsx-to-string';
import CSButton from './CSButton';
import CSButtonDropdown from './CSButtonDropdown';

export interface CSButtonGroupProps {
	combined: boolean;
}

class CSButtonGroup extends React.Component<CSButtonGroupProps> {

	public static defaultProps = {
		combined: true
	};

	static getDoc() {

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
		return (
			<div className={`cs-button-group cs-button-group-${this.props.combined}`}>
				{this.props.children}
			</div>
		);
	}
}

export default CSButtonGroup;
