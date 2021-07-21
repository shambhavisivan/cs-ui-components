import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export interface CSInputTextProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
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

class CSInputText extends React.Component<CSInputTextProps> {
	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onFocus } = this.props;
		if (onFocus) {
			onFocus(e);
		}
	}

	onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onBlur } = this.props;
		if (onBlur) {
			onBlur(e);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		const {
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			hidden,
			id,
			label,
			labelHidden,
			labelTitle,
			maxLength,
			name,
			onBlur,
			onChange,
			onFocus,
			placeholder,
			readOnly,
			required,
			title,
			tooltipPosition,
			type,
			value,
			...rest
		} = this.props;

		const inputTextWrapperClasses = classNames(
			'cs-input-text-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const inputTextClasses = classNames(
			'cs-input-text',
			{
				'cs-input-text-error': error,
			},
		);
		const style: CSSProperties = {
			'--cs-input-text-border-radius': borderRadius,
		};
		return (
			<>
				<div className={inputTextWrapperClasses}>
					{(label && !labelHidden)
						&& (
							<CSLabel
								htmlFor={this.uniqueAutoId}
								label={label}
								helpText={helpText}
								tooltipPosition={tooltipPosition}
								required={required}
								title={labelTitle ? label : null}
							/>
						)}
					<input
						className={inputTextClasses}
						id={this.uniqueAutoId}
						placeholder={placeholder}
						disabled={disabled}
						maxLength={maxLength}
						readOnly={readOnly}
						required={required}
						value={value}
						type="text"
						aria-label={label}
						aria-required={required}
						aria-invalid={error}
						autoComplete="off"
						onChange={this.handleOnChange}
						name={name}
						onBlur={this.onBlur}
						onFocus={this.onFocus}
						title={title}
						style={style}
						{...rest}
					/>
					{(error && errorMessage)
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSInputText;
