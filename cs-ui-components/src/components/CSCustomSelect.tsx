import React from 'react';
import jsxToString from 'jsx-to-string';
import CSInputText from './CSInputText';
import classNames from 'classnames';

// tslint:disable-next-line: no-empty-interface
export interface CSCustomSelectProps {
	className?: string;
}

export interface CSCustomSelectState {
	toggle: boolean;
}

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {

	static getDoc() {

		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCustomSelect>
									<div>Option A</div>
									<div>Option B</div>
									<div>Option C</div>
								</CSCustomSelect>
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
								<CSCustomSelect className="custom-class">
									<div>Option A</div>
									<div>Option B</div>
									<div>Option C</div>
								</CSCustomSelect>
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
	constructor(props: CSCustomSelectProps) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			toggle: false
		};
	}
	toggle() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

	render() {

		const customSelectClasses = classNames(
			'cs-custom-select-input',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className="cs-custom-select">
				<div className={customSelectClasses}>
					<CSInputText label="This is a label" placeholder="Select an Option" readOnly />
					<svg xmlns="http://www.w3.org/2000/svg" width="9.55" height="6.04"><path d="M.33 0h8.91c.25 0 .43.33.23.55L5.11 5.89c-.15.2-.48.2-.63 0L.08.55C-.1.33.05 0 .33 0z" fill="#706e6b"/></svg>
				</div>
			</div>
		);
	}
}

export default CSCustomSelect;
