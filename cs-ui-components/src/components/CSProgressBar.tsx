import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';

export type CSProgressBarStatus = 'neutral' | 'loading' | 'success' | 'error';
export type CSProgressBarThickness = 'xsmall' | 'small' | 'medium' | 'large';

export interface CSProgressBarProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	color?: string;
	id?: string;
	infoText?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	progress: string;
	status?: CSProgressBarStatus;
	thickness?: CSProgressBarThickness;
	title?: string;
}

class CSProgressBar extends React.Component<CSProgressBarProps> {
	public static defaultProps = {
		status: 'neutral',
		thickness: 'medium',
	};

	getStatus() {
		const { status } = this.props;

		if (status === 'success') {
			return (
				<CSIcon
					name="check"
					color="var(--cs-progress-bar-success-bg)"
					frame
					title="Success"
				/>
			);
		}

		if (status === 'error') {
			return (
				<CSIcon
					name="close"
					color="var(--cs-progress-bar-error-bg)"
					frame
					title="Error"
				/>
			);
		}

		return <CSIcon name="spinner" spin title="Loading" />;
	}

	render() {
		const {
			borderRadius,
			className,
			color,
			id,
			infoText,
			label,
			labelHidden,
			labelTitle,
			progress,
			status,
			thickness,
			title,
			...rest
		} = this.props;

		const progressBarWrapperClasses = classNames(
			'cs-progress-bar-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const progressBarValueClasses = classNames(
			'cs-progress-bar-value',
			{
				[`cs-progress-bar-${status}`]: status !== 'neutral',
				'cs-progress-bar-custom': color,
			},
		);

		const progressBarStyle: CSSProperties = {
			'--cs-progress-bar-border-radius': borderRadius,
			'--cs-progress-bar-custom-bg': color,
			'--cs-progress-bar-width': progress,
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
					{(label && !labelHidden)
						&& (
							<CSLabel
								label={label}
								title={labelTitle ? label : null}
							/>
						)}
					{infoText && (
						<div className="cs-progress-info-text">
							{infoText}
						</div>
					)}
					{status !== 'neutral' && (
						<div className="cs-progress-status">
							{this.getStatus()}
						</div>
					)}
				</div>
				<div className={`cs-progress-bar cs-progress-bar-${thickness}`} style={progressBarStyle} title={title}>
					<div className={progressBarValueClasses} />
				</div>
			</div>
		);
	}
}

export default CSProgressBar;
