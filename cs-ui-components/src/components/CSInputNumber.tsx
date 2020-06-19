import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export interface CSInputNumberProps {
	borderType?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	hideSpinner?: boolean;
	id?: string;
	label: string;
	max?: any;
	min?: any;
	onChange?: (value: any) => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
}

export interface CSInputNumberState {
	value: any;
	prevValue: any;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSInputNumber extends React.Component<CSInputNumberProps, CSInputNumberState> {

	static getDerivedStateFromProps(nextProps: CSInputNumberProps, { prevValue }: CSInputNumberState) {
		const newState: Partial<CSInputNumberState> = { prevValue: nextProps.value };
		if (prevValue !== nextProps.value) {
		  newState.value = nextProps.value;
		  return newState;
		}
		return null;
	}

	constructor(props: CSInputNumberProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}

	render() {
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				[`cs-input-number-${this.props.borderType}`]: this.props.borderType,
				'cs-input-number-error': this.props.error,
				[`${this.props.className}`]: this.props.className,
				[`cs-input-number-hide-spinner-${this.props.hideSpinner}`]: this.props.hideSpinner
			}
		);
		return (
			<>
				<div className="cs-input-number-wrapper">
					{this.props.label &&
						<CSLabel
							for={this.props.id}
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
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
						value={fixControlledValue(this.state.value)}
						type="number"
						aria-valuemin={this.props.min}
						aria-valuemax={this.props.max}
						aria-valuenow={this.props.value}
						aria-invalid={this.props.error}
						autoComplete="off"
						onChange={this.handleOnChange}
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
