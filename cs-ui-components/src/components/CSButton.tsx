import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from './CSIcon';

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
	borderRadius?: string;
	btnStyle?: CSButtonStyle;
	btnType?: CSButtonType;
	className?: string;
	color?: string;
	disabled?: boolean;
	iconColor?: string;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSButtonIconPosition;
	iconRotate?: number | string;
	iconSize?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	link?: string;
	loading?: boolean;
	onClick?: (...args: any) => any;
	onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => any;
	onMouseDown?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => any;
	onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => any;
	onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => any;
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
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(e);
		}
	}

	iconComponent() {
		const {
			loading,
			iconSize,
			iconName,
			iconRotate,
			iconOrigin,
		} = this.props;
		if (loading) {
			return (
				<span className="cs-btn-icon">
					<CSIcon
						name="spinner"
						size={iconSize}
						spin
					/>
				</span>
			);
		}

		if (iconName) {
			return (
				<span className="cs-btn-icon">
					<CSIcon
						name={iconName}
						rotate={iconRotate}
						origin={iconOrigin}
						size={iconSize}
					/>
				</span>
			);
		}

		return null;
	}

	render() {
		const {
			ariaExpanded,
			ariaHaspopup,
			ariaLabel,
			borderRadius,
			btnStyle,
			btnType,
			children,
			className,
			color,
			disabled,
			iconColor,
			iconName,
			iconOrigin,
			iconPosition,
			iconRotate,
			iconSize,
			id,
			label,
			labelHidden,
			link,
			loading,
			onClick,
			onKeyDown,
			onMouseDown,
			onMouseEnter,
			onMouseLeave,
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

				'cs-btn-label-hidden': labelHidden,
				'cs-btn-no-icon': (!iconName) && !loading,

				'cs-btn-max-width': width === 'max',

				'cs-btn-size-xsmall': size === 'xsmall',
				'cs-btn-size-small': size === 'small',
				'cs-btn-size-large': size === 'large',

				'cs-btn-icon-right': iconPosition === 'right',

				[`${className}`]: className,
			},
		);

		const style: CSSProperties = {
			'--cs-btn-custom-c': color,
			'--cs-btn-custom-icon-c': iconColor,
			'--cs-btn-border-radius': borderRadius,
		};

		const componentProps = {
			className: btnGroupClasses,
			onClick: this.handleClick,
			disabled: disabled || loading,
			'aria-label': ariaLabel || label,
			style,
			title: title || (labelHidden === true ? label : null),
			href: link && link,
			target: (openInNewTab && link) ? '_blank' : undefined,
			id,
			value,
			'aria-expanded': ariaExpanded,
			'aria-haspopup': ariaHaspopup,
			role,
			onMouseDown,
			onMouseEnter,
			onMouseLeave,
			onKeyDown,
			ref: forwardRef,
			...rest,
		};

		return (
			<>
				{routerLink
					? React.cloneElement(
						routerLink,
						componentProps,
						this.iconComponent(),
						!labelHidden ? <span className="cs-btn-label">{label}</span> : null,
						children ? <span className="cs-btn-custom-content">{children}</span> : null,
					)
					: React.createElement(
						link ? 'a' : 'button',
						componentProps,
						this.iconComponent(),
						!labelHidden ? <span className="cs-btn-label">{label}</span> : null,
						children ? <span className="cs-btn-custom-content">{children}</span> : null,
					)}
			</>
		);
	}
}

const CSButtonWithRefs: React.ForwardRefExoticComponent<CSButtonProps & React.RefAttributes<HTMLButtonElement>> =	React.forwardRef<HTMLButtonElement, CSButtonProps>((props: CSButtonProps, ref) => <CSButton {...props} forwardRef={ref} />);

CSButtonWithRefs.displayName = 'CSButton';

export default CSButtonWithRefs;
