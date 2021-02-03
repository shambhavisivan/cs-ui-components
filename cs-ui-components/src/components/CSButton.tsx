import React, { CSSProperties } from 'react';
import CSIcon, { CSIconOrigin } from './CSIcon';
import classNames from 'classnames';

export type CSButtonIconDisplay = 'default' | 'icon-only' | 'no-icon';
export type CSButtonIconPosition = 'left' | 'right';
export type CSButtonRole = 'menuitem';
export type CSButtonSize = 'xsmall' | 'small' | 'normal' | 'large';
export type CSButtonStyle = 'initial' | 'brand' | 'outline';
export type CSButtonType = 'default' | 'error' | 'success' | 'transparent';
export type CSButtonWidth = 'auto' | 'max';

export interface CSButtonProps {
	[key: string]: any;
	ariaExpanded?: boolean;
	ariaHaspopup?: boolean;
	ariaLabel?: string;
	btnRound?: boolean;
	btnStyle?: CSButtonStyle;
	btnType?: CSButtonType;
	className?: string;
	color?: string;
	disabled?: boolean;
	iconColor?: string;
	iconDisplay?: CSButtonIconDisplay;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSButtonIconPosition;
	iconRotate?: string;
	iconSize?: string;
	id?: string;
	label: string | undefined;
	link?: string;
	loading?: boolean;
	onClick?: (value: any) => any;
	onKeyDown?: (e: React.KeyboardEvent<HTMLLIElement | HTMLButtonElement>) => any;
	onMouseDown?: (e: React.MouseEvent<HTMLLIElement | HTMLButtonElement>) => any;
	openInNewTab?: boolean;
	role?: CSButtonRole;
	routerLink?: JSX.Element;
	size?: CSButtonSize;
	title?: string;
	value?: any;
	width?: CSButtonWidth;
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
				<span className="cs-btn-icon">
					<CSIcon
						name="spinner"
						size={this.props.iconSize}
						spin
					/>

				</span>
			);
		} else if (this.props.iconName) {
			return (
				<span className="cs-btn-icon">
					<CSIcon
						name={this.props.iconName}
						rotate={this.props.iconRotate}
						origin={this.props.iconOrigin}
						size={this.props.iconSize}
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
		const {
			ariaExpanded,
			ariaHaspopup,
			ariaLabel,
			btnRound,
			btnStyle,
			btnType,
			children,
			className,
			color,
			disabled,
			iconColor,
			iconDisplay,
			iconName,
			iconOrigin,
			iconPosition,
			iconRotate,
			iconSize,
			id,
			label,
			link,
			loading,
			onClick,
			onKeyDown,
			onMouseDown,
			openInNewTab,
			role,
			routerLink,
			size,
			title,
			value,
			width,
			forwardRef,
			...rest
		} = this.props;

		const btnGroupClasses = classNames(
			'cs-btn',
			{
				'cs-btn-default': (btnType !== ('error') && btnType !== ('success') && btnType !== ('transparent')),

				'cs-btn-error': btnType === 'error',
				'cs-btn-success': btnType === 'success',
				'cs-btn-transparent': btnType === 'transparent',

				'cs-btn-initial': (btnStyle !== ('brand') && btnStyle !== ('outline')),
				'cs-btn-brand': btnStyle === 'brand',
				'cs-btn-outline': btnStyle === 'outline',

				'cs-btn-round': btnRound === true,

				'cs-btn-icon-only': iconDisplay === 'icon-only',
				'cs-btn-no-icon': (!iconName || iconDisplay === 'no-icon') && !loading,

				'cs-btn-icon-right': iconPosition === 'right',

				'cs-btn-max-width': width === 'max',

				'cs-btn-size-xsmall': size === 'xsmall',
				'cs-btn-size-small': size === 'small',
				'cs-btn-size-large': size === 'large',

				[`${className}`]: className
			}
		);

		const style: CSSProperties = {
			'--cs-btn-custom-c': color,
			'--cs-btn-custom-icon-c': iconColor
		};

		const componentProps = {
			'className': btnGroupClasses,
			'onClick': this.handleClick,
			'disabled': disabled || loading,
			'aria-label': ariaLabel ? ariaLabel : label,
			'style': style,
			'title': title ? title : iconDisplay === 'icon-only' ? label : null,
			'href': link && link,
			'target': (openInNewTab && link) ? '_blank' : undefined,
			'id': id,
			'value': value,
			'aria-expanded': ariaExpanded,
			'aria-haspopup': ariaHaspopup,
			'role': role,
			'onMouseDown': onMouseDown,
			'onKeyDown': onKeyDown,
			'ref': forwardRef,
			...rest
		};

		return (
			<>
				{routerLink ?
					React.cloneElement(
						routerLink,
						componentProps,
						this.iconComponent(),
						this.label(),
						children
					) :
					React.createElement(
						link ? 'a' : 'button',
						componentProps,
						this.iconComponent(),
						this.label(),
						children
					)
				}
			</>
		);
	}
}

const CSButtonWithRefs: React.ForwardRefExoticComponent<CSButtonProps & React.RefAttributes<HTMLButtonElement>> = React.forwardRef<HTMLButtonElement, CSButtonProps>((props: CSButtonProps, ref) => <CSButton {...props} forwardRef={ref} />);

export default CSButtonWithRefs;
