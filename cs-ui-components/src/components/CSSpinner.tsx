import React from 'react';
import classNames from 'classnames';

export interface CSSpinnerProps {
	className?: string;
	color?: string;
	id?: string;
	inline?: boolean;
	label?: string;
	overlay?: string;
	size?: string;
}

class CSSpinner extends React.Component<CSSpinnerProps> {

	public static defaultProps = {
		color: 'brand',
		size: 'large',
		overlay: 'light'
	};
	render() {
		const spinnerClasses = classNames(
			'cs-spinner-wrapper',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-spinner-inline': this.props.inline,
				[`cs-spinner-overlay-${this.props.overlay}`]: this.props.overlay
			}
		);
		return (
			<>
				<div
					className={spinnerClasses}
					id={this.props.id}
				>
					<div className="cs-spinner-wrapper-label">
						<div className={'cs-spinner cs-spinner-' + this.props.size + ' cs-spinner-' + this.props.color}>
							<div className="cs-spinner-dot-a"/>
							<div className="cs-spinner-dot-b"/>
						</div>
						{(this.props.label && !this.props.inline) &&
							<div className="cs-spinner-label">
								<span>{this.props.label}</span>
							</div>
						}
					</div>
				</div>

			</>
		);
	}
}

export default CSSpinner;
