import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export type CSInputTextBorderType = 'round' | 'square';

export interface CSInputTextProps {
	borderType?: CSInputTextBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	maxLength?: number;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

export interface CSInputTextState {
	value: string;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSInputText extends React.Component<CSInputTextProps, CSInputTextState> {

	constructor(props: CSInputTextProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value
		};
	}

	onFocus: React.FocusEventHandler<HTMLInputElement> = e => {
		const { onFocus } = this.props;
		if (onFocus) {
			onFocus(e);
		}
	}

	onBlur: React.FocusEventHandler<HTMLInputElement> = e => {
		const { onBlur } = this.props;
		if (onBlur) {
			onBlur(e);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	componentDidUpdate(prevProps: CSInputTextProps) {
		if (prevProps.value !== this.props.value) {
		this.setState({value: this.props.value});
		}
   }

	render() {

		const inputTextWrapperClasses = classNames(
			'cs-input-text-wrapper',
			{
				'cs-element-hidden': this.props.hidden
			}
		);
		const inputTextClasses = classNames(
			'cs-input-text',
			{
				[`cs-input-text-${this.props.borderType}`]: this.props.borderType,
				'cs-input-text-error': this.props.error,
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<>
				<div className={inputTextWrapperClasses}>
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel
							for={this.props.id}
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}
							title={this.props.labelTitle ? this.props.label : null}
						/>
					}
					<input className={inputTextClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						maxLength={this.props.maxLength}
						readOnly={this.props.readOnly}
						required={this.props.required}
						value={fixControlledValue(this.state.value)}
						type="text"
						aria-invalid={this.props.error}
						autoComplete="off"
						onChange={this.handleOnChange}
						name={this.props.name}
						onBlur={this.onBlur}
						onFocus={this.onFocus}
						title={this.props.title}
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputText;
