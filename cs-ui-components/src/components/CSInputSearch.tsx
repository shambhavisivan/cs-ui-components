import React, { CSSProperties, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSButton from './CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';

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
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
	const inputSearchInnerRef = useRef<HTMLInputElement>(null);
	const { current: uniqueAutoId } = useRef(id || uuidv4());

	useImperativeHandle(forwardRef, () => inputSearchInnerRef.current);

	const handleClearSearch = () => {
		onClearSearch?.();

		inputSearchInnerRef.current?.focus();
	};

	const inputSearchWrapperClasses = classNames(
		'cs-input-search-wrapper',
		{
			'cs-element-hidden': hidden,
			[className]: className,
		},
	);

	const inputSearchGroupClasses = classNames(
		'cs-input-search-group',
		{
			[`cs-icon-${iconPosition}`]: iconPosition,
		},
	);

	const inputSearchClasses = classNames(
		'cs-input-search',
		{
			'cs-input-search-error': error,
		},
	);

	const inputClearClasses = classNames(
		'cs-input-search-clear',
		{
			'cs-input-search-clear-tooltip': errorTooltip,
		},
	);

	const style: CSSProperties = {
		'--search-width': width,
		'--cs-input-search-border-radius': borderRadius,
	};

	return (
		<div className={inputSearchWrapperClasses}>
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
			<div className={inputSearchGroupClasses} style={style}>
				<CSIcon
					name="search"
					className="cs-input-search-icon"
					color="var(--cs-input-icon-fill)"
					size="0.875rem"
				/>
				<input
					className={inputSearchClasses}
					autoFocus={autoFocus}
					onChange={onChange}
					id={uniqueAutoId}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					aria-label={label}
					aria-invalid={error}
					aria-required={required}
					value={value}
					type="text"
					autoComplete="off"
					ref={inputSearchInnerRef}
					onKeyDown={onKeyDown}
					onBlur={onBlur}
					onClick={onClick}
					onFocus={onFocus}
					title={title}
					{...rest}
				/>
				{value && (
					<CSButton
						btnType="transparent"
						btnStyle="brand"
						className={inputClearClasses}
						iconColor="var(--cs-input-clear)"
						iconName="close"
						labelHidden
						label="clear"
						onClick={handleClearSearch}
						size="small"
					/>
				)}
			</div>
			{error && errorMessage && <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
		</div>
	);
};

const CSInputSearchWithRef = React.forwardRef<HTMLDivElement, CSInputSearchProps>((props: CSInputSearchProps, ref) => <CSInputSearch {...props} forwardRef={ref} />);

CSInputSearchWithRef.displayName = 'CSInputSearch';

export default CSInputSearch;
