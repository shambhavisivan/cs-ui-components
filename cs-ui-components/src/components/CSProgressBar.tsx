import React from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export interface CSProgressBarProps {
	progress: string;
	label: string;
	progressIndicator?: boolean;
	color?: string;
	thickness?: string;
	className?: string;
}

class CSProgressBar extends React.Component<CSProgressBarProps> {

	render() {

		const progressBarWrapperClasses = classNames(
			'cs-progress-bar-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={progressBarWrapperClasses}>
				<div className="cs-progress-bar-text">
					{this.props.label &&
					<CSLabel label={this.props.label}/>
					}
					{this.props.progressIndicator ? (
						<div className="cs-progress-indicator">
							{`${this.props.progress} Complete`}
						</div>
					) : ('')}
				</div>
				<div className={`cs-progress-bar ${this.props.thickness}`}>
					<div className="cs-progress-bar-value" style={{width: this.props.progress, backgroundColor: this.props.color}}/>
				</div>
			</div>
		);
	}
}

export default CSProgressBar;
