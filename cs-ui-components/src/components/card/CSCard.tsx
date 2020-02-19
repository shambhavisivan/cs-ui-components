import React from 'react';
import CSCardHeader from './CSCardHeader';
import CSCardBody from './CSCardBody';
import CSCardFooter from './CSCardFooter';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';

export interface CSCardProps {
	className?: string;
}

class CSCard extends React.Component<CSCardProps> {

	static getDoc() {

		const json = {
			name: 'Card',
			usage: 'Cards are used to apply a container around a related grouping of information.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['Card'],
							string: '',
							component:
								<CSCard>
									<CSCardHeader title="Card Header"/>
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
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
								<CSCard className="custom-class">
									<CSCardHeader title="Card Header"/>
									<CSCardBody>
										Card Body
									</CSCardBody>
									<CSCardFooter>
										Card Footer
									</CSCardFooter>
								</CSCard>
						}
					]
				}
			],
			properties: [
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
		const cardClasses = classNames(
			'cs-card',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={cardClasses}>
				{this.props.children}
			</div>
		);
	}
}

export default CSCard;
