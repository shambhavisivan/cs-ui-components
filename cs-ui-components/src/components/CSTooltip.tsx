import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSTooltipProps {
	className?: string;
	helpText: string | Array<string>;
	iconName?: string;
	iconSize?: string;
	position?: string;
	tooltipHeader?: string;
	variant?: string;
}

class CSTooltip extends React.Component<CSTooltipProps> {

	public static defaultProps = {
		variant: 'info',
		iconSize: 'small',
		position: 'top-right'
	};

	render() {
		const tooltipClasses = classNames(
			'cs-tooltip',
			{
				[`cs-${this.props.position}`]: this.props.position,
				'cs-tooltip-info': this.props.variant === 'info',
				'cs-tooltip-warning': this.props.variant === 'warning',
				'cs-tooltip-error': this.props.variant === 'error',
				'cs-tooltip-with-header': this.props.tooltipHeader
			}
		);

		const tooltipWrapperClasses = classNames(
			'cs-tooltip-wrapper',
			{
				'cs-tw-info': this.props.variant === 'info',
				'cs-tw-warning': this.props.variant === 'warning',
				'cs-tw-error': this.props.variant === 'error',
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={tooltipWrapperClasses} tabIndex={0} role="tooltip">
				{this.props.iconName ?
					<CSIcon name={this.props.iconName} className={'cs-icon-' + this.props.iconSize}/> :
					<CSIcon name={this.props.variant} className={'cs-icon-' + this.props.iconSize}/>
				}
				<div className={tooltipClasses}>
					{this.props.tooltipHeader ?
						<div className="cs-tooltip-header">{this.props.tooltipHeader}</div>
						: null
					}
					{this.props.helpText ? (
						Array.isArray(this.props.helpText) ?
							this.props.helpText.map((t, index) =>
								<div className="cs-tooltip-body" key={index}>{t}</div>
							)
							: <div className="cs-tooltip-body">{this.props.helpText}</div>
						) : null}
				</div>
			</div>
		);
	}
}

export default CSTooltip;
