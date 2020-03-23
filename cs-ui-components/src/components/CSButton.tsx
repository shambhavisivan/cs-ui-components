import React, { Component } from 'react';
// import {stripIndent} from "common-tags/es";
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
	btnRound?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	label?: string;
	link?: string;
	className?: string;
}

class CSButton extends React.Component<CSButtonProps> {

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

			'cs-btn-round': this.props.btnRound === true,

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
