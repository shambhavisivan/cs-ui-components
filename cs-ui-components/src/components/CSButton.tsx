import React, { Component } from 'react';
// import {stripIndent} from "common-tags/es";
import jsxToString from 'jsx-to-string';
// import { Link } from 'react-router-dom';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSButtonProps {
	btnType?: string;
	btnStyle?: string;
	size?: string;
	width?: string;
	iconDisplay?: string;
	iconName?: string;
	iconPosition?: string;
	iconRotate?: string;
	iconOrigin?: string;
	btnRound?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	label?: string;
	link?: string;
	className?: string;
}

class CSButton extends React.Component<CSButtonProps> {

	static getDoc() {
		const clickHandler = () => alert('Button is clicked!');

		const json = {
			name: 'Button',
			usage: 'Button provides a base UI for button actions',
			examples: [
				{
					propName: 'btnType and btnStyle',
					customText: '',
					variations: [
						{
							variationName: ['default initial'],
							string: '',
							component: <CSButton iconName="activity" label="default initial"/>
						},
						{
							variationName: ['default brand'],
							string: '',
							component: <CSButton btnStyle="brand" iconName="activity" label="default brand"/>
						},
						{
							variationName: ['default outline'],
							string: '',
							component: <CSButton btnStyle="outline" iconName="activity" label="default outline"/>
						},
						{
							variationName: ['transparent initial'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" iconName="activity" label="transparent initial"/>
							</div>
						},
						{
							variationName: ['transparent brand'],
							string: '',
							component: <CSButton btnType="transparent" btnStyle="brand" iconName="activity" label="transparent brand"/>
						},
						{
							variationName: ['transparent outline'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" btnStyle="outline" iconName="activity" label="transparent outline"/>
							</div>
						},
						{
							variationName: ['error initial'],
							string: '',
							component: <CSButton btnType="error" iconName="activity" label="error initial"/>
						},
						{
							variationName: ['error brand'],
							string: '',
							component: <CSButton btnType="error" btnStyle="brand" iconName="activity" label="error brand"/>
						},
						{
							variationName: ['error outline'],
							string: '',
							component: <CSButton btnType="error" btnStyle="outline" iconName="activity" label="error outline"/>
						},
						{
							variationName: ['success initial'],
							string: '',
							component: <CSButton btnType="success" iconName="activity" label="success initial"/>
						},
						{
							variationName: ['success brand'],
							string: '',
							component: <CSButton btnType="success" btnStyle="brand" iconName="activity" label="success brand"/>
						},
						{
							variationName: ['success outline'],
							string: '',
							component: <CSButton btnType="success" btnStyle="outline" iconName="activity" label="success outline"/>
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
							component: <CSButton size="large" iconName="activity" label="default large"/>
						},
						{
							variationName: ['small'],
							string: '',
							component: <CSButton size="small" iconName="activity" label="default small"/>
						},
						{
							variationName: ['extra-small'],
							string: '',
							component: <CSButton size="extra-small" iconName="activity" label="default extra-small"/>
						}
					]
				},
				{
					propName: 'round',
					customText: '',
					variations: [
						{
							variationName: ['round'],
							string: '',
							component: <CSButton btnRound="round" iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'onClick',
					customText: 'onClick prop for onClick event - verify the click by opening browser console',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component: <CSButton onClick={clickHandler} btnRound="round" iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'icon',
					customText: '',
					variations: [
						{
							variationName: ['icon-only'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only"/>
						},
						{
							variationName: ['icon-only large'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="large"/>
						},
						{
							variationName: ['icon-only small'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="small"/>
						},
						{
							variationName: ['icon-only extra-small'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="extra-small"/>
						},
						{
							variationName: ['default icon-only round'],
							string: '',
							component: <CSButton btnRound="round" iconOrigin="cs" iconName="tag" iconDisplay="icon-only" label="default icon-only round"/>
						},
						{
							variationName: ['default icon right'],
							string: '',
							component: <CSButton btnRound="round" iconName="activity" iconPosition="right" label="I Leon"/>
						},
						{
							variationName: ['90', '180', '270'],
							string: '',
							component: <CSButton btnRound="round" iconName="activity" iconRotate="270" label="Icon rotated 270 degrees"/>
						}
					]
				},
				{
					propName: 'width',
					customText: '',
					variations: [
						{
							variationName: ['max'],
							string: '',
							component: <CSButton iconName="activity" label="default max" width="max"/>
						}
					]
				},
				{
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component: <CSButton iconName="activity" label="default disabled" disabled/>
						}
					]
				},
				{
					propName: 'link',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component: <CSButton iconName="activity" label="default" link="www.google.com"/>
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
							component: <CSButton  iconName="activity" label="default initial" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'btnType',
					description: 'Button type',
					options: [
						'default',
						'error',
						'success',
						'transparent'
					]
				},
				{
					propertyName: 'btnStyle',
					description: 'Button style',
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
						'slds',
						'cs'
					]
				},
				{
					propertyName: 'iconDisplay',
					description: 'Icon-only',
					options: [
						'icon-only',
						'no-icon'
					]
				},
				{
					propertyName: 'iconPosition',
					description: 'Icon position on left or right edge of button',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'iconRotate',
					description: 'Degree value for clockwise icon rotation',
					options: ['90', '180', '270']
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
					propertyName: 'btnRound',
					description: 'Button edges. Add to type.',
					options: [
						'square',
						'round'
					]
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event',
					options: []
				},
				{
					propertyName: 'width',
					description: 'Button width',
					options: [
						'auto',
						'max'
					]
				},
				{
					propertyName: 'colorOverride',
					description: 'Icon and label color (not supported yet)',
					options: [
						'<hex value>'
					]
				},
				{
					propertyName: 'label',
					description: 'Button label to display',
					options: [
						'<label>'
					]
				},
				{
					propertyName: 'link',
					description: 'Link path (not supported yet)',
					options: [
						'<url>'
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
				}
			],
			backlog: [
				{
					backlogName: 'Add link prop',
					description: 'Allow adding href url',
					obstacles: 'Accessibility issue on using Link component as a child of button, there are 2 focuses. Alternative - add click routing logic (check frame agreement)'

				},
				{
					backlogName: 'Add colorOverride prop',
					description: 'Allows to pass custom hex colour.',
					obstacles: 'Button state colors need to depend on the main hex colour and use darken and lighten mixins'
				},
				{
					backlogName: 'CSS optimise - CS icons need additional sc mixin (not sf)',
					description: 'Color setting for icons is doubled in all places with both sc and sf mixins',
					obstacles: 'Check how are CS icons different'
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

	const btnGroupClasses = classNames(
		'cs-btn',
		{
			'cs-btn-default': (this.props.btnType !== ('error') && this.props.btnType !== ('success') && this.props.btnType !== ('transparent')),

			'cs-btn-error': this.props.btnType === 'error',
			'cs-btn-success': this.props.btnType === 'success',
			'cs-btn-transparent': this.props.btnType === 'transparent',

			'cs-btn-initial': (this.props.btnStyle !== ('brand') && this.props.btnStyle !== ('outline')),
			'cs-btn-brand': this.props.btnStyle === 'brand',
			'cs-btn-outline': this.props.btnStyle === 'outline',

			'cs-btn-round': this.props.btnRound === 'round',

			'cs-btn-icon-only': this.props.iconDisplay === 'icon-only',
			'cs-btn-no-icon': !this.props.iconName || this.props.iconDisplay === 'no-icon',

			'cs-btn-icon-right': this.props.iconPosition === 'right',

			'cs-btn-max-width': this.props.width === 'max',

			'cs-btn-size-extra-small': this.props.size === 'extra-small',
			'cs-btn-size-small': this.props.size === 'small',
			'cs-btn-size-large': this.props.size === 'large',

			[`${this.props.className}`]: this.props.className
		}
	);

	return (
		<button className={btnGroupClasses} onClick={this.props.onClick} disabled={this.props.disabled} aria-label={this.props.label}>
			{ this.props.iconName ? (
				<span className="cs-btn-icon">
					<CSIcon name={this.props.iconName} rotate={this.props.iconRotate} origin={this.props.iconOrigin}/>
				</span>
			) : null }
			{this.props.label && <span className="cs-btn-label">{this.props.label}</span>}
		</button>
		);
	}

}

export default CSButton;
