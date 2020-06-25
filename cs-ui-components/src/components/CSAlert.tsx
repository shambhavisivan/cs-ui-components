import React from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSAlertProps {
	className?: string;
	closeButton?: boolean;
	iconName?: string;
	iconVisibility?: boolean;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	styleType?: string;
	text?: string | Array<string>;
	textAlign?: string;
	variant: string;
}

class CSAlert extends React.Component<CSAlertProps> {
	public static defaultProps = {
		iconVisibility: true,
		textAlign: 'center',
		styleType: 'default'
	};

	render() {

		const alertClasses = classNames(
			'cs-alert',
			[`cs-alert-${this.props.variant}`],
			[`cs-alert-type-${this.props.styleType}`],
			[`cs-alert-${this.props.textAlign}`],
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={alertClasses} role="alert">
				<h4 className="cs-alert-text-wrapper">
					{this.props.iconVisibility ? (this.props.iconName ? (
						<CSIcon name={this.props.iconName}/>
					) : (
						<CSIcon name={this.props.variant}/>
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
						<CSIcon name="close"/>
					</button>
				) : null}
			</div>
		);
	}
}

export default CSAlert;
