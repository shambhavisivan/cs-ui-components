import React, { useState, useRef, CSSProperties, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';

export interface CSInputTextProps {
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
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	maxLength?: number;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

const CSInputText = ({
	actions,
	borderRadius,
	className,
	disabled,
	error,
	errorMessage,
	errorTooltip,
	helpText,
	hidden,
	icons,
	id,
	label,
	labelHidden,
	labelTitle,
	maxLength,
	name,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onKeyDown,
	placeholder,
	readOnly,
	required,
	title,
	tooltipPosition,
	value,
	forwardRef,
	...rest
}: CSInputTextProps) => {
	const { current: uniqueAutoId } = useRef<string>(id || uuidv4());
	const [focused, setFocused] = useState<boolean>(false);
	const inputTextRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(forwardRef, () => inputTextRef.current);

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		onClick?.(event);
		inputTextRef.current?.focus();
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (focused) event.preventDefault();
	};

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			onFocus?.(event);
			setFocused(true);
		}
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			onBlur?.(event);
			setFocused(false);
		}
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

	const inputTextWrapperClasses = classNames(
		'cs-input-text-wrapper',
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

	const inputTextClasses = classNames(
		'cs-input-text',
		'cs-invisible-input',
	);

	const style: CSSProperties = {
		'--cs-input-border-radius': borderRadius,
	};

	return (
		<div className={inputTextWrapperClasses}>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={inputWrapperClasses}
				style={style}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
			>
				<input
					className={inputTextClasses}
					id={uniqueAutoId}
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
					name={name}
					onBlur={handleBlur}
					onChange={onChange}
					onFocus={handleFocus}
					onKeyDown={onKeyDown}
					title={title}
					ref={inputTextRef}
					{...rest}
				/>
				<CSCustomData icons={icons} actions={actions} />
				{renderErrorTooltip()}
			</div>
			{renderErrorMessage()}
		</div>
	);
};

const CSInputTextWithRef = React.forwardRef<HTMLDivElement, CSInputTextProps>((props: CSInputTextProps, ref) => <CSInputText {...props} forwardRef={ref} />);

CSInputTextWithRef.displayName = 'CSInputText';

export default CSInputText;
