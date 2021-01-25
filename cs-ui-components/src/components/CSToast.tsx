import React, { CSSProperties } from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export type CSToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface CSToastProps {
	[key: string]: any;
	className?: string;
	closeButton?: boolean;
	detail?: string;
	iconName?: string;
	iconVisibility?: boolean;
	id?: string;
	minWidth?: string;
	onClose?: () => void;
	text?: string;
	variant: CSToastVariant;
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
			iconVisibility,
			id,
			minWidth,
			onClose,
			text,
			variant,
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
			[`cs-toast-${variant}`]
		);

		const style: CSSProperties = {
			minWidth
		};

		const toastRole = (variant === 'info' || variant === 'success') ? 'status' : 'alert';

		return (
			<div
				className={toastWrapperClasses}
				id={id}
				{...rest}
			>
				<div style={style} className={toastClasses} role={toastRole}>
					{iconVisibility ? (iconName ? (
						<CSIcon name={iconName}/>
					) : (
						<CSIcon name={variant}/>
					)) : null}
					<h4 className="cs-toast-text">
						{text}
						{detail ? (
							<div className="cs-toast-detail">{detail}</div>
						) : null}
						{children}
					</h4>
					{closeButton ? (
						<button className="cs-toast-close" onClick={onClose} aria-label="close">
								<CSIcon name="close"/>
						</button>
					) : null}
				</div>
			</div>

		);
	}
}

export default CSToast;
