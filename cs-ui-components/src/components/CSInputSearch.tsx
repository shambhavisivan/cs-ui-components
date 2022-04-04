import React, { CSSProperties, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSButton from './CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';

export type CSInputSearchIconPosition = 'left' | 'right';

export interface CSInputSearchProps {
	[key: string]: any;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	iconPosition?: CSInputSearchIconPosition;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
	onClearSearch?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
	width?: string;
}

const CSInputSearch = ({
	autoFocus,
	borderRadius,
	className,
	disabled,
	error,
	errorMessage,
	errorTooltip,
	forwardRef,
	helpText,
	hidden,
	iconPosition = 'left',
	id,
	label,
	labelHidden = false,
	labelTitle,
	onBlur,
	onChange,
	onClearSearch,
	onClick,
	onFocus,
	onKeyDown,
	placeholder,
	required,
	title,
	tooltipPosition,
	value,
	width,
	...rest
}: CSInputSearchProps) => {
	const inputSearchRef = useRef<HTMLInputElement>(null);
	const { current: uniqueAutoId } = useRef<string>(id || uuidv4());
	const [focused, setFocused] = useState<boolean>(false);

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		onClick?.(event);
		inputSearchRef.current?.focus();
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (focused) event.preventDefault();
	};

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		onFocus?.(event);
		setFocused(true);
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		onBlur?.(event);
		setFocused(false);
	};

	useImperativeHandle(forwardRef, () => inputSearchRef.current);

	const handleClearSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
		onClearSearch?.();
		inputSearchRef.current?.focus();
		event.stopPropagation();
	};

	const inputSearchWrapperClasses = classNames(
		'cs-input-search-wrapper',
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
		},
	);

	const inputSearchClasses = classNames(
		'cs-input-search',
		'cs-invisible-input',
	);

	const style: CSSProperties = {
		'--cs-input-width': width,
		'--cs-input-border-radius': borderRadius,
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

	const searchIcon =	(
		<CSIcon
			name="search"
			color="var(--cs-input-icon-fill)"
			size="0.875rem"
		/>
	);

	return (
		<div className={inputSearchWrapperClasses}>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={inputWrapperClasses}
				style={style}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
			>
				{iconPosition === 'left' && searchIcon }
				<input
					autoFocus={autoFocus}
					onChange={onChange}
					id={uniqueAutoId}
					className={inputSearchClasses}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					aria-label={label}
					aria-invalid={error}
					aria-required={required}
					value={!value && onChange ? '' : value}
					type="text"
					autoComplete="off"
					ref={inputSearchRef}
					onKeyDown={onKeyDown}
					onBlur={handleBlur}
					onFocus={handleFocus}
					title={title}
					{...rest}
				/>
				{iconPosition === 'right' && searchIcon}
				{value && (
					<CSButton
						btnType="transparent"
						btnStyle="brand"
						iconColor="var(--cs-input-clear)"
						iconName="close"
						labelHidden
						label="clear"
						onClick={handleClearSearch}
						size="small"
					/>
				)}
				{renderErrorTooltip()}
			</div>
			{renderErrorMessage()}
		</div>
	);
};

const CSInputSearchWithRef = React.forwardRef<HTMLDivElement, CSInputSearchProps>((props: CSInputSearchProps, ref) => <CSInputSearch {...props} forwardRef={ref} />);

CSInputSearchWithRef.displayName = 'CSInputSearch';

export default CSInputSearch;
