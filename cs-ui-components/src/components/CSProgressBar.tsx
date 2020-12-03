import React, { CSSProperties } from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export type CSProgressBarThickness = 'xsmall' | 'small' | 'medium' | 'large';

export interface CSProgressBarProps {
	[key: string]: any;
	className?: string;
	color?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	progress: string;
	progressIndicator?: boolean;
	thickness?: CSProgressBarThickness;
	title?: string;
}

class CSProgressBar extends React.Component<CSProgressBarProps> {

	render() {
		const {
			className,
			color,
			id,
			label,
			labelHidden,
			labelTitle,
			progress,
			progressIndicator,
			thickness,
			title,
			...rest
		} = this.props;

		const progressBarWrapperClasses = classNames(
			'cs-progress-bar-wrapper', {
				[`${className}`]: className
			}
		);

		const style: CSSProperties = {
			width: progress,
			backgroundColor: color
		};

		return (
			<div
				className={progressBarWrapperClasses}
				id={id}
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={parseInt(progress, 10)}
				{...rest}
			>
				<div className="cs-progress-bar-text">
					{(label && !labelHidden) &&
						<CSLabel
							label={label}
							title={labelTitle ? label : null}
						/>
					}
					{progressIndicator ? (
						<div className="cs-progress-indicator">
							{`${progress} Complete`}
						</div>
					) : ('')}
				</div>
				<div className={`cs-progress-bar cs-progress-bar-${thickness}`} title={title}>
					<div className="cs-progress-bar-value" style={style}/>
				</div>
			</div>
		);
	}
}

export default CSProgressBar;
