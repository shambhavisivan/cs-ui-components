import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
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
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
	const [showLocaleFormat, setShowLocaleFormat] = useState(!!locale);
	const [formattedNumberValue, setFormattedNumberValue] = useState(null);
	const [customDataWidth, setCustomDataWidth] = useState(0);
	const { current: uniqueAutoId } = useRef(id || uuidv4());

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (locale) setShowLocaleFormat(true);

		onBlur?.(event);
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value);

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (locale) setShowLocaleFormat(false);

		onFocus?.(event);
	};

	const formatNumber = (numberValue: any, numberLocale: CSInputNumberNumberLocale) => {
		const { numLocale, options } = numberLocale;

		const formattedValue = new Intl.NumberFormat(numLocale, { ...options }).format(numberValue);
		setFormattedNumberValue(formattedValue);
	};

	const setType = () => {
		if (locale) {
			return showLocaleFormat ? 'text' : 'number';
		} return type;
	};

	useEffect(() => {
		if (locale) formatNumber(value, locale);
	}, [locale, value]);

	const customDataRef = useCallback((node) => {
		if (node !== null) setCustomDataWidth(node.getBoundingClientRect().width);
	}, []);

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
		'--cs-input-number-custom-data-width': customDataWidth ? `${customDataWidth}px` : undefined,
	};

	return (
		<div className={inputNumberWrapperClasses} style={style}>
			{label && !labelHidden && (
				<CSLabel
					htmlFor={uniqueAutoId}
					label={label}
					helpText={helpText}
					tooltipPosition={tooltipPosition}
					required={required}
					title={labelTitle ? label : null}
				/>
			)}
			<div className="cs-input-number-wrapper-inner">
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
					value={showLocaleFormat ? formattedNumberValue : value}
					type={setType()}
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
					onChange={handleOnChange}
					onKeyDown={onKeyDown}
					onPaste={onPaste}
					onClick={onClick}
					title={title}
					step={step}
					ref={forwardRef}
					{...rest}
				/>
				<CSCustomData
					ref={customDataRef}
					icons={icons}
					actions={actions}
				/>
			</div>
			{error && errorMessage && <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
		</div>
	);
};

const CSInputNumberWithRef = React.forwardRef<HTMLDivElement, CSInputNumberProps>((props: CSInputNumberProps, ref) => <CSInputNumber {...props} forwardRef={ref} />);

CSInputNumberWithRef.displayName = 'CSInputNumber';

export default CSInputNumber;
