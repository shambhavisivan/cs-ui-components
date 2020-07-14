import React, { CSSProperties } from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export type CSToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface CSToastProps {
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

		const toastClasses = classNames(
			'cs-toast',
			[`cs-toast-${this.props.variant}`],
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const style: CSSProperties = {
			minWidth: this.props.minWidth
		};

		return (
			<div
				className="cs-toast-wrapper"
				id={this.props.id}
			>
				<div style={style} className={toastClasses} role="alert">
					{this.props.iconVisibility ? (this.props.iconName ? (
						<CSIcon name={this.props.iconName}/>
					) : (
						<CSIcon name={this.props.variant}/>
					)) : null}
					<h4 className="cs-toast-text">
						{this.props.text}
						{this.props.detail ? (
							<div className="cs-toast-detail">{this.props.detail}</div>
						) : null}
						{this.props.children}
					</h4>
					{this.props.closeButton ? (
						<button className="cs-toast-close" onClick={this.props.onClose} aria-label="close">
								<CSIcon name="close"/>
						</button>
					) : null}
				</div>
			</div>

		);
	}
}

export default CSToast;
