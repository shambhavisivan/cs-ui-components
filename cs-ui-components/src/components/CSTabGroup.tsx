import React from 'react';
import jsxToString from 'jsx-to-string';
import CSTab from './CSTab';
import classNames from 'classnames';

export interface CSTabGroupProps {

	className?: string;
}

class CSTabGroup extends React.Component<CSTabGroupProps> {

	static getDoc() {

		const json = {
			name: 'Tabs',
			usage: 'Tabs keeps related content in a single container that is shown and hidden through navigation.',

			examples: [
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							variationName: ['title'],
							string: '',
							component:
							<CSTabGroup>
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
							<CSTabGroup className="custom-class">
								<CSTab
									title="Tab One"
								/>
								<CSTab
									title="Tab Two"
								/>
								<CSTab
									title="Tab Three"
								/>
							</CSTabGroup>
						}
					]
				}
			],

		/* CSTab Properties Table */
			properties: [
				{
					propertyName: 'title',
					description: 'Text content of tab',
					options: ['n/a']
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

		const tabGroupClasses = classNames(

			'cs-tab-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const children = this.props.children;

		return (
			<div className={tabGroupClasses}>
				{children}
			</div>
		);
	}
}

export default CSTabGroup;
