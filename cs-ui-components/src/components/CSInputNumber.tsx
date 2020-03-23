import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSInputNumberProps {
	borderType?: string;
	error?: boolean;
	label: string;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	min?: any;
	max?: any;
	value?: any;
	className?: string;
	errorMessage?: string;
	hideSpinner?: boolean;
}

class CSInputNumber extends React.Component<CSInputNumberProps> {

	render() {
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				[`cs-input-number-${this.props.borderType}`]: this.props.borderType,
				'cs-input-number-error': this.props.error,
				[`${this.props.className}`]: this.props.className,
				[`hide-spinner-${this.props.hideSpinner}`]: this.props.hideSpinner
			}
		);
		return (
			<>
				<div className="cs-input-number-wrapper">
					{this.props.label &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						/>
					}
					<input className={inputNumberClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						min={this.props.min}
						max={this.props.max}
						readOnly={this.props.readOnly}
						required={this.props.required}
						disabled={this.props.disabled}
						value={this.props.value}
						type="number"
						aria-valuemin={this.props.min}
						aria-valuemax={this.props.max}
						aria-valuenow={this.props.value}
						aria-invalid={this.props.error}
						autoComplete="off"
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputNumber;
