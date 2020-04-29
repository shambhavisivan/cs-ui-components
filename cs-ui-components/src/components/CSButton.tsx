import React from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSButtonProps {
	btnRound?: boolean;
	btnStyle?: string;
	btnType?: string;
	className?: string;
	color?: string;
	disabled?: boolean;
	iconDisplay?: string;
	iconName?: string;
	iconOrigin?: string;
	iconPosition?: string;
	iconRotate?: string;
	label: string;
	link?: string;
	loading?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	size?: string;
	width?: string;
}

class CSButton extends React.Component<CSButtonProps> {

	constructor(props: any) {
		super(props);
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

			'cs-btn-round': this.props.btnRound === true,

			'cs-btn-icon-only': this.props.iconDisplay === 'icon-only',
			'cs-btn-no-icon': (!this.props.iconName || this.props.iconDisplay === 'no-icon') && !this.props.loading,

			'cs-btn-icon-right': this.props.iconPosition === 'right',

			'cs-btn-max-width': this.props.width === 'max',

			'cs-btn-size-xsmall': this.props.size === 'xsmall',
			'cs-btn-size-small': this.props.size === 'small',
			'cs-btn-size-large': this.props.size === 'large',

			'cs-btn-loading': this.props.loading,

			[`${this.props.className}`]: this.props.className
		}
	);

	return (
		<button
			className={btnGroupClasses}
			onClick={this.props.onClick}
			disabled={this.props.disabled || this.props.loading}
			aria-label={this.props.label}
			title={this.props.iconDisplay === 'icon-only' ? this.props.label : ''}
			style={{'--cs-btn-custom-c': this.props.color}}
		>
			{(this.props.iconName && !this.props.loading) && (
				<span className="cs-btn-icon">
					<CSIcon name={this.props.iconName} rotate={this.props.iconRotate} origin={this.props.iconOrigin} />
				</span>
			)}
			{this.props.loading &&
				<span className="cs-btn-icon cs-btn-icon-loading">
					<CSIcon name="spinner"/>
				</span>
			}
			{this.props.label && <span className="cs-btn-label">{this.props.label}</span>}
			{this.props.children}
		</button>
		);
	}
}

export default CSButton;
