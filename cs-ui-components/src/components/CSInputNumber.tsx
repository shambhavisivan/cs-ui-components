import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

export interface CSInputNumberProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
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

	public static defaultProps = {
		type: 'number'
	};

	static getDerivedStateFromProps(nextProps: CSInputNumberProps, { prevValue }: CSInputNumberState) {
		const newState: Partial<CSInputNumberState> = { prevValue: nextProps.value };
		if (prevValue !== nextProps.value) {
			newState.value = nextProps.value;
			return newState;
		}
		return null;
	}

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSInputNumberProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value
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
		/* changeState variable will determine wheather or not setState will be called.
			setState won't be called if the function passed to onChange prop returns false.
			This can be useful in certain scenarios where we don't want to update state (for example
			in cs-form's NumberField - when formatting is incorrect state won't be changed)
		*/
		let changeState = true;
		if (this.props.onChange) {
			changeState = this.props.onChange(e.target.value);
		}
		if (changeState || changeState === undefined) {
			this.setState({ value: e.target.value });
		}
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(e);
		}
	}

	handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		if (this.props.onPaste) {
			this.props.onPaste(e);
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
				[`${className}`]: className,
				'cs-element-hidden': hidden
			}
		);
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				'cs-input-number-error': error,
				[`cs-input-number-hide-spinner-${hideSpinner}`]: hideSpinner
			}
		);
		const style: CSSProperties = {
			'--cs-input-number-border-radius': borderRadius
		};
		return (
			<>
				<div className={inputNumberWrapperClasses}>
					{(label && !labelHidden) &&
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					}
					<input className={inputNumberClasses}
						id={this.uniqueAutoId}
						placeholder={placeholder}
						min={min}
						max={max}
						name={name}
						maxLength={type === 'text' ? maxLength : undefined}
						readOnly={readOnly}
						required={required}
						disabled={disabled}
						value={fixControlledValue(this.state.value)}
						type={type}
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
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSInputNumber;
