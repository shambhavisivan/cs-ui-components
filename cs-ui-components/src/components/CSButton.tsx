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
	id?: string;
	label: string | undefined;
	link?: string;
	loading?: boolean;
	onClick?: (value: any) => any;
	openInNewTab?: boolean;
	size?: string;
	width?: string;
}

class CSButton extends React.Component<CSButtonProps> {

	constructor(props: CSButtonProps) {
		super(props);
		this.iconComponent = this.iconComponent.bind(this);
		this.label = this.label.bind(this);
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		const { onClick } = this.props;
		if (onClick) {
		  onClick(e);
		}
	}

	iconComponent() {
		if (this.props.loading) {
			return (
				<span className="cs-btn-icon cs-btn-icon-loading">
					<CSIcon name="spinner"/>
				</span>
			);
		} else if (this.props.iconName) {
			return (
				<span className="cs-btn-icon">
					<CSIcon
						name={this.props.iconName}
						rotate={this.props.iconRotate}
						origin={this.props.iconOrigin}
					/>
				</span>
			);
		}
	}

	label() {
		if (this.props.label) {
			return (
				<span className="cs-btn-label">{this.props.label}</span>
			);
		}
	}

	render() {
		const btnGroupClasses = classNames(
			'cs-btn',
			{
				'cs-btn-default': (this.props.btnType !== ('error') && this.props.btnType !== ('success') && this.props.btnType !== ('transparent')),

				'cs-btn-error': this.props.btnType === 'error',
				'cs-btn-success': this.props.btnType === 'success',
				'cs-btn-transparent': this.props.btnType === 'transparent',
				'cs-btn-custom': (this.props.btnType) === 'custom' && this.props.color !== undefined,

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

		const componentProps = {
			'className': btnGroupClasses,
			'onClick': this.handleClick,
			'disabled': this.props.disabled || this.props.loading,
			'aria-label': this.props.label,
			'style': {'--cs-btn-custom-c': this.props.color},
			'title': this.props.iconDisplay === 'icon-only' ? this.props.label : undefined,
			'href': this.props.link && this.props.link,
			'target': (this.props.openInNewTab && this.props.link) ? '_blank' : undefined,
			'id': this.props.id
		};

		return (
			React.createElement(
				this.props.link ? 'a' : 'button',
				componentProps,
				this.iconComponent(),
				this.label(),
				this.props.children
			)
		);
	}
}

export default CSButton;
