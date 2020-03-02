import React from 'react';
import jsxToString from 'jsx-to-string';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSSectionProps {
	title: string;
	collapsed?: boolean;
	collapsable?: boolean;
	className?: string;
}

export interface CSSectionState {
	collapsed?: boolean;
	collapsable?: boolean;
}

class CSSection extends React.Component<CSSectionProps, CSSectionState> {

	static getDoc() {

		const json = {
			name: 'Section',
			usage: 'This is used as a toggle visibility of section content.',
			examples: [
				{
					propName: 'Collapsable',
					customText: '',
					variations: [
						{
							variationName: ['Collapsable'],
							string: '',
							component:
								<CSSection collapsable title="Collapsable Section">
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
					propName: 'Collapsed',
					variations: [
						{
							variationName: ['Collapsed'],
							string: '',
							component:
								<CSSection collapsed title="Collapsed Section">
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
							variationName: ['className'],
							string: '',
							component:
								<CSSection collapsable title="Collapsed Section" className="custom-class">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'title',
					description: 'Title content',
					options: [
						'n/a'
					]
				},
				{
					propertyName: 'collapsable',
					description: 'Section collapsable state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'collapsed',
					description: 'Collapsed state',
					options: [
						'false',
						'true'
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

	constructor(props: CSSectionProps) {
		super(props);

		this.state = {
			collapsed: false
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	// When component mounts if collapsed equals true hide content initially
	componentDidMount() {
		if (this.props.collapsed) {
			this.setState({
				collapsed: true
			});
		}
	}

	render() {

		const sectionClasses = classNames(
			'cs-section',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		const sectionTitleClasses = classNames(
			'cs-section-wrapper', {
				'cs-section-wrapper-padding': this.props.collapsed === true
			}
		);
		return (
			<section className={sectionClasses}>
				<h3 className={sectionTitleClasses}>
					{this.props.collapsable ?
						<button className="cs-section-button" onClick={this.toggle}>
							{this.state.collapsed ?
								<CSIcon name="chevronright"/>
								:
								<CSIcon name="chevrondown"/>
							}
							<span className="cs-section-title">{this.props.title}</span>
						</button>
					:
						<span className="cs-section-title">{this.props.title}</span>

					}
				</h3>
				{this.state.collapsed ?
					null
				:
					<div className="cs-section-title">
						{this.props.children}
					</div>
				}
			</section>
		);
	}
}

export default CSSection;
