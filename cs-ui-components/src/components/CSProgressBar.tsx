import React, { CSSProperties } from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export type CSProgressBarThickness = 'xsmall' | 'small' | 'medium' | 'large';

export interface CSProgressBarProps {
	className?: string;
	color?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	progress: string;
	progressIndicator?: boolean;
	thickness?: CSProgressBarThickness;
}

class CSProgressBar extends React.Component<CSProgressBarProps> {

	render() {

		const progressBarWrapperClasses = classNames(
			'cs-progress-bar-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const style: CSSProperties = {
			width: this.props.progress,
			backgroundColor: this.props.color
		};

		return (
			<div
				className={progressBarWrapperClasses}
				id={this.props.id}
			>
				<div className="cs-progress-bar-text">
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel
							label={this.props.label}
							title={this.props.labelTitle ? this.props.label : null}
						/>
					}
					{this.props.progressIndicator ? (
						<div className="cs-progress-indicator">
							{`${this.props.progress} Complete`}
						</div>
					) : ('')}
				</div>
				<div className={`cs-progress-bar cs-progress-bar-${this.props.thickness}`}>
					<div className="cs-progress-bar-value" style={style}/>
				</div>
			</div>
		);
	}
}

export default CSProgressBar;
