import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from './CSIcon';

export type CSToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface CSToastProps {
	[key: string]: any;
	className?: string;
	closeButton?: boolean;
	detail?: string;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconVisibility?: boolean;
	id?: string;
	onClose?: () => void;
	text?: string;
	variant: CSToastVariant;
	width?: string;
}

class CSToast extends React.Component<CSToastProps> {
	public static defaultProps = {
		iconVisibility: true
	};

	render() {
		const {
			children,
			className,
			closeButton,
			detail,
			iconName,
			iconOrigin,
			iconVisibility,
			id,
			onClose,
			text,
			variant,
			width,
			...rest
		} = this.props;

		const toastWrapperClasses = classNames(
			'cs-toast-wrapper',
			{
				[`${className}`]: className
			}
		);

		const toastClasses = classNames(
			'cs-toast',
			[`cs-toast-${variant}`],
			{
				'cs-toast-close': closeButton
			}
		);

		const style: CSSProperties = {
			'--cs-toast-width': width
		};

		const toastRole = (variant === 'info' || variant === 'success') ? 'status' : 'alert';

		return (
			<div
				className={toastWrapperClasses}
				id={id}
				{...rest}
			>
				<div className={toastClasses} role={toastRole} style={style}>
					{iconVisibility ?
						(iconName ?
							<CSIcon name={iconName} origin={iconOrigin} size="1.5rem" /> :
							<CSIcon name={variant} size="1.5rem" />) :
						null
					}
					<div className="cs-toast-text">
						<h4>
							{text}
						</h4>
						{detail ? (
							<div className="cs-toast-detail">{detail}</div>
						) : null}
						{children}
					</div>
					{closeButton ?
						<button className="cs-toast-close-btn" onClick={onClose} aria-label="close">
							<CSIcon name="close" size="1.5rem" />
						</button>
						: null
					}
				</div>
			</div>

		);
	}
}

export default CSToast;
