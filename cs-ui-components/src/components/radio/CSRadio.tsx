import React from 'react';
import classNames from 'classnames';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';

export interface CSRadioProps {
	className?: string;
	disabled?: boolean;
	error?: boolean;
	helpText?: string;
	id?: string;
	label: string;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
	variant?: string;
}

class CSRadio extends React.Component<CSRadioProps> {

	public static defaultProps = {
		variant: 'neutral'
	};

	constructor(props: CSRadioProps) {
		super(props);
	}

	render() {
		const radioWrapperClasses = classNames(
			'cs-radio-wrapper',
			{
				'cs-radio-error': this.props.error === true,
				[`${this.props.className}`]: this.props.className,
				[`cs-radio-${this.props.variant}`]: this.props.variant,
				'cs-radio-disabled': this.props.disabled
			}
		);

		return (
			<>
				{this.props.label &&
					<CSLabel label={this.props.label} helpText={this.props.helpText}
					tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
				}
				<div className={radioWrapperClasses} id={this.props.id}>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default CSRadio;
