import React from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export type CSAlertStyleFormat = 'default' | 'scoped';
export type CSAlertStyleType = 'default' | 'light';
export type CSAlertTextAlign = 'center' | 'left';
export type CSAlertVariant = 'info' | 'warning' | 'error' | 'base';

export interface CSAlertProps {
	className?: string;
	closeButton?: boolean;
	iconName?: string;
	iconVisibility?: boolean;
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
		iconVisibility: true,
		styleFormat: 'default',
		styleType: 'default',
		textAlign: 'left'
	};

	render() {
		const alertClasses = classNames(
			'cs-alert',
			[`cs-alert-${this.props.variant}`],
			[`cs-alert-type-${this.props.styleType}`],
			{
				[`${this.props.className}`]: this.props.className,
				'cs-alert-scoped': this.props.styleFormat === 'scoped'
			}
		);

		const alertTextWrapperClasses = classNames(
			'cs-alert-text-wrapper',
			[`cs-alert-${this.props.textAlign}`]
		);

		const alertRole = this.props.variant === 'info' ? 'status' : 'alert';
		const alertIconSize = this.props.styleFormat === 'scoped' ? '1.5rem' : '0.875rem';
		const alertIconName = this.props.variant === 'base' ? 'info' : this.props.variant;
		return (
			<div
				className={alertClasses}
				role={alertRole}
				id={this.props.id}
			>
				<h4 className={alertTextWrapperClasses}>
					{this.props.iconVisibility ? (this.props.iconName ? (
						<CSIcon
							name={this.props.iconName}
							size={alertIconSize}
						/>
					) : (
						<CSIcon
							name={alertIconName}
							size={alertIconSize}
						/>
					)) : null}
					{this.props.text ? (
						Array.isArray(this.props.text) ?
							this.props.text.map((t, index) =>
								<span className="cs-alert-text" key={index}>{t}</span>
							)
							: <span className="cs-alert-text">{this.props.text}</span>
						) : null}
					{this.props.children ? (
						<span className="cs-alert-text">{this.props.children}</span>
					) : null}
				</h4>
				{this.props.closeButton ? (
					<button className="cs-alert-close" onClick={this.props.onClose} aria-label="close">
						<CSIcon name="close" size={alertIconSize} />
					</button>
				) : null}
			</div>
		);
	}
}

export default CSAlert;
