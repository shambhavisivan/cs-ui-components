import React from 'react';
import jsxToString from 'jsx-to-string';
import CSPathWrapper from './CSPathWrapper';
import CSPathItem from './CSPathItem';
import classNames from 'classnames';

export interface CSPathProps {
	className?: string;
}

class CSPath extends React.Component<CSPathProps> {

	static getDoc() {

		const json = {
			name: 'Path',
			usage: 'A process component communicates to the user the progress of a particular process.',
			examples: [
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSPath>
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
								</CSPath>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSPath className="custom-class">
									<CSPathWrapper>
										<CSPathItem
											title="Path Item 1"
										/>
										<CSPathItem
											title="Path Item 2"
										/>
										<CSPathItem
											title="Path Item 3"
										/>
									</CSPathWrapper>
								</CSPath>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'title',
					description: 'Text content of path item',
					options: ['n/a']
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: ['n/a']
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
		const pathClasses = classNames(
			'cs-path',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={pathClasses}>
				{this.props.children}
			</div>
		);
	}
}

export default CSPath;
