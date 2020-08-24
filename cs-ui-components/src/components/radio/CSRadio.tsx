import React from 'react';
import classNames from 'classnames';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';

export type CSRadioVariant = 'neutral' | 'brand';

export interface CSRadioProps {
	className?: string;
	disabled?: boolean;
	error?: boolean;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
	variant?: CSRadioVariant;
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
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel
						label={this.props.label}
						helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						title={this.props.labelTitle ? this.props.label : null}
					/>
				}
				<div className={radioWrapperClasses} id={this.props.id}>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default CSRadio;
