import React from 'react';
import jsxToString from 'jsx-to-string';

import CSMainHeaderIcon from './CSMainHeaderIcon';
import CSMainHeaderLeft from './CSMainHeaderLeft';
import CSMainHeaderRight from './CSMainHeaderRight';
import CSButton from './CSButton';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSMainHeaderProps {
	color?: string;
	maxWidth?: string;
	sticky?: boolean;
	className?: string;
}

class CSMainHeader extends React.Component<CSMainHeaderProps> {

	public static defaultProps = {
		color: 'neutral',
		maxWidth: '100%',
		sticky: true
	};

	static getDoc() {

		const json = {
			name: 'Main Header',
			usage: 'Main Headers are used at the top of several page types. They are comprised of multiple components.',
			examples: [
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['neutral'],
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
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSMainHeader
									color="error"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['info'],
							string: '',
							component:
								<CSMainHeader
									color="info"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'maxWidth',
					variations: [
						{
							variationName: ['720px'],
							string: '',
							component:
								<CSMainHeader maxWidth="720px">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 720px"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['80rem'],
							string: '',
							component:
								<CSMainHeader maxWidth="80rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 80rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['100%'],
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 100%"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'sticky',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSMainHeader
									color="neutral"
									sticky={false}
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is not a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSMainHeader className="custom-class">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'custom',
					customText: 'Want to add buttons or other features to the header? Just add them as child components.',
					variations: [
						{
							variationName: ['Add custom buttons'],
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSButton btnType="transparent" btnStyle="brand" iconName="back" iconDisplay="icon-only"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a custom header"
										subtitle="This is a subtitle"
									>
										<CSButton label="Back to basket" iconName="reply"/>
									</CSMainHeaderLeft>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'color',
					description: 'Background color',
					options: [
						'neutral',
						'brand',
						'error',
						'info'
					]
				},
				{
					propertyName: 'maxWidth',
					description: 'Max width of inner wrapper',
					options: [
						'Examples',
						'720px',
						'80rem',
						'100%'
					]
				},
				{
					propertyName: 'sticky',
					description: 'Logic for sticky position',
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

	/* CSMainHeaderLeft Properties Table */
	static getDoc2() {
		const json = {
			name: 'CSMainHeaderLeft',
			properties: [
				{
					propertyName: 'title',
					description: 'Main text content',
					options: ['n/a']
				},
				{
					propertyName: 'subtitle',
					description: 'Secondary text content',
					options: ['n/a']
				}
			]
		};

		return json;
	}

	render() {

		const mainHeaderGroupClasses = classNames(
			'cs-main-header',
			{
				'cs-main-header-sticky': this.props.sticky === true,
				'cs-main-header-neutral': this.props.color === 'neutral',
				'cs-main-header-brand': this.props.color === 'brand',
				'cs-main-header-info': this.props.color === 'info',
				'cs-main-header-error': this.props.color === 'error',
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={mainHeaderGroupClasses}>
				<div style={{maxWidth: this.props.maxWidth}} className="cs-main-header-inner">
					{this.props.children}
				</div>
			</div>

		);
	}
}

export default CSMainHeader;
