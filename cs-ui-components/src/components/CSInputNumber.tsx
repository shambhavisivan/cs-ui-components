import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export interface CSInputNumberProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	hideSpinner?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	max?: any;
	maxLength?: number;
	min?: any;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (value?: any) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	step?: string;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	type?: string;
	value?: any;
}

class CSInputNumber extends React.Component<CSInputNumberProps> {
	public static defaultProps = {
		type: 'number',
	};

	private readonly uniqueAutoId: string;

	constructor(props: CSInputNumberProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

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
		const { onChange } = this.props;

		if (onChange) {
			onChange(e.target.value);
		}
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { onKeyDown } = this.props;

		if (onKeyDown) {
			onKeyDown(e);
		}
	}

	handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		const { onPaste } = this.props;

		if (onPaste) {
			onPaste(e);
		}
	}

	render() {
		const {
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			hideSpinner,
			id,
			label,
			labelHidden,
			labelTitle,
			max,
			maxLength,
			min,
			name,
			onBlur,
			onChange,
			onFocus,
			onKeyDown,
			onPaste,
			placeholder,
			readOnly,
			required,
			step,
			title,
			tooltipPosition,
			type,
			value,
			...rest
		} = this.props;

		const inputNumberWrapperClasses = classNames(
			'cs-input-number-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				'cs-input-number-error': error,
				'cs-input-number-error-tooltip': errorTooltip,
				[`cs-input-number-hide-spinner-${hideSpinner}`]: hideSpinner,
			},
		);
		const style: CSSProperties = {
			'--cs-input-number-border-radius': borderRadius,
		};
		return (
			<>
				<div className={inputNumberWrapperClasses}>
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
						className={inputNumberClasses}
						id={this.uniqueAutoId}
						placeholder={placeholder}
						min={min}
						max={max}
						name={name}
						maxLength={type === 'text' ? maxLength : undefined}
						readOnly={readOnly}
						required={required}
						disabled={disabled}
						value={value}
						type={type}
						role="spinbutton"
						aria-label={label}
						aria-required={required}
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={value}
						aria-invalid={error}
						autoComplete="off"
						onBlur={this.onBlur}
						onFocus={this.onFocus}
						onChange={this.handleOnChange}
						onKeyDown={this.handleOnKeyDown}
						onPaste={this.handleOnPaste}
						title={title}
						step={step}
						style={style}
						{...rest}
					/>
					{error
						&& errorMessage
						&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
				</div>
			</>
		);
	}
}

export default CSInputNumber;
