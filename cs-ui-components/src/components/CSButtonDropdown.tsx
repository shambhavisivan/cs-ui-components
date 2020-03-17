import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import CSIcon from './CSIcon';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSButtonDropdownProps {
	btnType?: string;
	btnStyle?: string;
	size?: string;
	iconName?: string;
	iconOrigin?: string;
	disabled?: boolean;
	className?: string;
	align?: string;
	iconRotate?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface CSButtonDropdownStates {
	active?: boolean;
	toggleActive?: any;
}

class CSButtonDropdown extends React.Component<CSButtonDropdownProps, CSButtonDropdownStates> {

	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down'
	};

	static getDoc() {
		// const clickHandler = () => alert('Button is clicked!');

		const json = {
			name: 'Button Dropdown',
			usage: 'Like a regular button, just with a dropdown',
			examples: [
				{
					propName: 'btnType',
					customText: '',
					variations: [
						{
							variationName: ['default initial'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>

						},
						{
							variationName: ['default brand'],
							string: '',
							component: <CSButtonDropdown
											btnStyle="brand"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['default outline'],
							string: '',
							component: <CSButtonDropdown
											btnStyle="outline"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['Transparent initial'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButtonDropdown
									btnType="transparent"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSButtonDropdown>
							</div>
						},
						{
							variationName: ['Transparent brand'],
							string: '',
							component: <CSButtonDropdown
											btnType="transparent"
											btnStyle="brand"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['Transparent outline'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButtonDropdown
									btnType="transparent"
									btnStyle="outline"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSButtonDropdown>
							</div>
						}
					]
				},
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							string: '',
							component: <CSButtonDropdown
											size="large"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['small'],
							string: '',
							component: <CSButtonDropdown
											size="small"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['extra-small'],
							string: '',
							component: <CSButtonDropdown
											size="extra-small"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'iconName',
					customText: '',
					variations: [
						{
							variationName: ['iconName="down"'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['iconName="threedots_vertical"'],
							string: '',
							component: <CSButtonDropdown
											iconName="threedots_vertical"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationName: ['default disabled'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											disabled
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'align',
					customText: '',
					variations: [
						{
							variationName: ['left'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											align="left"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['right'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											align="right"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'iconRotate',
					customText: '',
					variations: [
						{
							variationName: ['90'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="90"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['180'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="180"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['270'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="270"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
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
							component: <CSButtonDropdown
											iconName="down"
											className="custom-class"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'btnType',
					description: 'Button Group type',
					options: [
						'default',
						'error',
						'success',
						'transparent'
					]
				},
				{
					propertyName: 'btnStyle',
					description: 'Button Group style',
					options: [
						'initial',
						'brand',
						'outline'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library',
					options: [
					]
				},
				{
					propertyName: 'iconOrigin',
					description: 'SLDS or CloudSense icons',
					options: [
						'icon-only',
						'no-icon'
					]
				},
				{
					propertyName: 'size',
					description: 'Button size',
					options: [
						'normal',
						'small',
						'extra small',
						'large'
					]
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'<condition>'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'align',
					description: 'Align the dropdown either left or right',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'iconRotate',
					description: 'Degree value for clockwise icon',
					options: [
						'90',
						'180',
						'270'
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

	constructor(props: any) {
		super(props);
		this.toggleActive = this.toggleActive.bind(this);
		this.state = {
			active: false
		};
	}

	toggleActive() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}

	render() {

		return (
			<div className="cs-btn-dropdown-wrapper">
				<CSButton
					className="cs-btn-dropdown cs-btn-icon-only"
					btnType={this.props.btnType}
					btnStyle={this.props.btnStyle}
					size={this.props.size}
					iconName={this.props.iconName}
					iconOrigin={this.props.iconOrigin}
					iconRotate={this.props.iconRotate}
					disabled={this.props.disabled}
					onClick={this.toggleActive}
				/>
				{this.state.active ? (
					<div className={`cs-btn-dropdown-item-wrapper cs-btn-dropdown-${this.props.align}`}>
						{this.props.children}
					</div>
				) : null}
			</div>
		);
	}

}

export default CSButtonDropdown;
