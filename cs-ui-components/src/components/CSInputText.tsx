import React, { useState, useRef, useCallback, CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';
import { CSTooltipPosition } from './CSTooltip';

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
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
	const { current: uniqueAutoId } = useRef(id || uuidv4());

	const [customDataWidth, updateCustomDataWidth] = useState(null);

	const customDataRef = useCallback((node) => {
		if (node !== null) {
			updateCustomDataWidth(node.getBoundingClientRect().width);
		}
	}, [customDataWidth]);

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
			'cs-input-text-error-tooltip': errorTooltip,
		},
	);

	const style: CSSProperties = {
		'--cs-input-text-border-radius': borderRadius,
		'--cs-input-text-custom-data-width': customDataWidth ? `${customDataWidth}px` : undefined,
	};

	return (
		<div className={inputTextWrapperClasses} style={style}>
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
			<div className="cs-input-text-wrapper-inner">
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
					onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
					onKeyDown={onKeyDown}
					title={title}
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

const CSInputTextWithRef = React.forwardRef<HTMLDivElement, CSInputTextProps>((props: CSInputTextProps, ref) => <CSInputText {...props} forwardRef={ref} />);

CSInputTextWithRef.displayName = 'CSInputText';

export default CSInputText;
