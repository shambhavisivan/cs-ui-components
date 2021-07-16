import React from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from './CSIcon';

export type CSAlertStyleFormat = 'default' | 'scoped';
export type CSAlertStyleType = 'default' | 'light';
export type CSAlertTextAlign = 'center' | 'left';
export type CSAlertVariant = 'info' | 'warning' | 'error' | 'base';

export interface CSAlertProps {
	[key: string]: any;
	className?: string;
	closeButton?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconHidden?: boolean;
	id?: string;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	styleFormat?: CSAlertStyleFormat;
	styleType?: CSAlertStyleType;
	text?: string | Array<string>;
	textAlign?: CSAlertTextAlign;
	variant: CSAlertVariant;
}

class CSAlert extends React.Component<CSAlertProps> {
	public static defaultProps = {
		iconHidden: false,
		styleFormat: 'default',
		styleType: 'default',
		textAlign: 'left',
	};

	render() {
		const {
			children,
			className,
			closeButton,
			iconName,
			iconOrigin,
			iconHidden,
			id,
			onClose,
			styleFormat,
			styleType,
			text,
			textAlign,
			variant,
			...rest
		} = this.props;

		const alertClasses = classNames(
			'cs-alert',
			[`cs-alert-${variant}`],
			[`cs-alert-type-${styleType}`],
			{
				'cs-alert-scoped': styleFormat === 'scoped',
				'cs-alert-no-close-btn': !closeButton,
				[`${className}`]: className,
			},
		);

		const alertTextWrapperClasses = classNames(
			'cs-alert-text-wrapper',
			[`cs-alert-${textAlign}`],
		);

		const alertRole = variant === 'info' ? 'status' : 'alert';
		const alertIconSize = styleFormat === 'scoped' ? '1.5rem' : '0.875rem';
		const alertIconName = variant === 'base' ? 'info' : variant;
		return (
			<div
				className={alertClasses}
				role={alertRole}
				id={id}
				{...rest}
			>
				<h4 className={alertTextWrapperClasses}>
					{!iconHidden ? (
						<CSIcon
							name={iconName || alertIconName}
							size={alertIconSize}
							origin={iconOrigin}
						/>
					) : null}
					{text ? (
						Array.isArray(text)
							? text.map((t, index) => <span className="cs-alert-text" key={index}>{t}</span>)
							: <span className="cs-alert-text">{text}</span>
					) : null}
					{children ? (
						<span className="cs-alert-text">{children}</span>
					) : null}
				</h4>
				{closeButton ? (
					<button className="cs-alert-close" onClick={onClose} aria-label="close">
						<CSIcon name="close" size={alertIconSize} />
					</button>
				) : null}
			</div>
		);
	}
}

export default CSAlert;
