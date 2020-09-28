import React from 'react';
import classNames from 'classnames';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';
import { v4 as uuidv4 } from 'uuid';

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

		const uniqueAutoId = uuidv4();

		return (
			<>
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel
						for={this.props.id ? this.props.id : uniqueAutoId}
						label={this.props.label}
						helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						title={this.props.labelTitle ? this.props.label : null}
					/>
				}
				<div className={radioWrapperClasses} id={this.props.id ? this.props.id : uniqueAutoId}>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default CSRadio;
