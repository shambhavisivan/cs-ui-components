import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSTextareaProps {
	borderType?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	id?: string;
	label: string;
	maxHeight?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rows?: number;
	tooltipPosition?: string;
	value?: string;
}

export interface CSTextareaState {
	value: string;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSTextarea extends React.Component<CSTextareaProps, CSTextareaState> {

	constructor(props: CSTextareaProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {

		const textareaClasses = classNames(
			'cs-textarea', {
				'cs-textarea-error': this.props.error,
				[`${this.props.className}`]: this.props.className,
				[`cs-textarea-${this.props.borderType}`]: this.props.borderType
			}
		);

		const style: CSSProperties = {
			'--max-height': this.props.maxHeight
		};

		return (
			<>
				<div className="cs-textarea-wrapper">
					{this.props.label &&
						<CSLabel
							for={this.props.id}
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}
						/>
					}
					<textarea
						className={textareaClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						required={this.props.required}
						rows={this.props.rows}
						aria-invalid={this.props.error}
						value={fixControlledValue(this.state.value)}
						style={style}
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

export default CSTextarea;
