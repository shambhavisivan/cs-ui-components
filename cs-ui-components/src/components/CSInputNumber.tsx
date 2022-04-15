import React, { CSSProperties, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';

export interface CSInputNumberNumberLocale {
	numLocale: string;
	options?: {
		currency?: string;
		style?: CSInputNumberLocaleStyle;
		maximumFractionDigits?: number;
		minimumFractionDigits?: number;
	}
}

export type CSInputNumberLocaleStyle = 'decimal' | 'currency' | 'percent' | 'unit';

export interface CSInputNumberProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	fractionDigits?: number;
	helpText?: string;
	hidden?: boolean;
	hideSpinner?: boolean;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: CSInputNumberNumberLocale;
	max?: any;
	maxLength?: number;
	min?: any;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (value?: any) => void;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
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

const CSInputNumber = ({
	actions,
	borderRadius,
	className,
	disabled,
	error,
	errorMessage,
	errorTooltip,
	forwardRef,
	fractionDigits,
	helpText,
	hidden,
	hideSpinner,
	icons,
	id,
	label,
	labelHidden,
	labelTitle,
	locale,
	max,
	maxLength,
	min,
	name,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onKeyDown,
	onPaste,
	placeholder,
	readOnly,
	required,
	step,
	title,
	tooltipPosition,
	type = 'number',
	value,
	...rest
}: CSInputNumberProps) => {
	const [showFormattedValue, toggleFormattedValue] = useState(!!locale || !!fractionDigits);
	const { current: uniqueAutoId } = useRef<string>(id || uuidv4());
	const [focused, setFocused] = useState(false);
	const inputNumberRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(forwardRef, () => inputNumberRef.current);

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		onClick?.(event);
		inputNumberRef.current?.focus();
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (focused && (event.target as HTMLDivElement).classList.contains('cs-input-wrapper')) event.preventDefault();
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			setFocused(false);
			onBlur?.(event);
		}

		if (locale || fractionDigits) toggleFormattedValue(true);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value);

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			setFocused(true);
			onFocus?.(event);
		}

		if (locale || fractionDigits) toggleFormattedValue(false);
	};

	const formatNumber = (numberValue: number, numberLocale?: CSInputNumberNumberLocale) => (locale
		? new Intl.NumberFormat(numberLocale.numLocale, { ...numberLocale.options }).format(numberValue)
		: Number(numberValue).toFixed(fractionDigits)
	);

	const getType = () => {
		if (locale) {
			return showFormattedValue ? 'text' : 'number';
		} return type;
	};

	const renderLabel = () => {
		if (!label || labelHidden) return null;

		return (
			<CSLabel
				htmlFor={uniqueAutoId}
				label={label}
				helpText={helpText}
				tooltipPosition={tooltipPosition}
				required={required}
				title={labelTitle ? label : null}
			/>
		);
	};

	const renderErrorMessage = () => {
		if (!error || !errorMessage || errorTooltip) return null;

		return <CSFieldErrorMsg message={errorMessage} />;
	};

	const renderErrorTooltip = () => {
		if (!error || !errorTooltip) return null;

		return <CSTooltip variant="error" content={errorMessage} />;
	};

	const inputNumberWrapperClasses = classNames(
		'cs-input-number-wrapper',
		{
			'cs-element-hidden': hidden,
			[className]: className,
		},
	);

	const inputWrapperClasses = classNames(
		'cs-input-wrapper',
		{
			'cs-input-wrapper-error': error,
			'cs-input-wrapper-disabled': disabled,
			'cs-input-wrapper-focused': focused,
			'cs-input-wrapper-read-only': readOnly,
		},
	);

	const inputNumberClasses = classNames(
		'cs-input-number',
		'cs-invisible-input',
		{
			[`cs-input-number-hide-spinner-${hideSpinner}`]: hideSpinner,
		},
	);

	const style: CSSProperties = {
		'--cs-input-border-radius': borderRadius,
	};

	return (
		<div className={inputNumberWrapperClasses} style={style}>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={inputWrapperClasses}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
			>
				<input
					className={inputNumberClasses}
					id={uniqueAutoId}
					placeholder={placeholder}
					min={min}
					max={max}
					name={name}
					maxLength={type === 'text' ? maxLength : undefined}
					readOnly={readOnly}
					required={required}
					disabled={disabled}
					value={showFormattedValue ? formatNumber(value, locale) : value ?? ''}
					type={getType()}
					role="spinbutton"
					aria-label={label}
					aria-required={required}
					aria-valuemin={min}
					aria-valuemax={max}
					aria-valuenow={value}
					aria-invalid={error}
					autoComplete="off"
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleChange}
					onKeyDown={onKeyDown}
					onPaste={onPaste}
					title={title}
					step={step}
					ref={inputNumberRef}
					{...rest}
				/>
				<CSCustomData icons={icons} actions={actions} />
				{renderErrorTooltip()}
			</div>
			{renderErrorMessage()}
		</div>
	);
};

const CSInputNumberWithRef = React.forwardRef<HTMLDivElement, CSInputNumberProps>((props: CSInputNumberProps, ref) => <CSInputNumber {...props} forwardRef={ref} />);

CSInputNumberWithRef.displayName = 'CSInputNumber';

export default CSInputNumber;
