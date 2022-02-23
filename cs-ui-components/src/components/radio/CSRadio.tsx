import React, { useRef } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import CSRadioOption from './CSRadioOption';

export type CSRadioVariant = 'neutral' | 'brand';

export interface CSRadioOptionInterface {
	key: React.ReactText;
	label: string;
	title?: string;
}

export interface CSRadioProps {
	[key: string]: any;
	className?: string;
	disabled?: boolean;
	disabledKeys?: Array<React.ReactText>;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	options: Array<CSRadioOptionInterface>,
	readOnly?: boolean,
	required?: boolean;
	selectedKey?: React.ReactText,
	tooltipPosition?: CSTooltipPosition;
	variant?: CSRadioVariant;
}

const CSRadio = ({
	className,
	disabled,
	disabledKeys,
	error,
	errorMessage,
	helpText,
	hidden,
	id,
	label,
	labelHidden,
	labelTitle,
	name,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onKeyDown,
	options,
	readOnly,
	required,
	selectedKey,
	tooltipPosition,
	variant = 'neutral',
	forwardRef,
	...rest
}: CSRadioProps) => {
	const { current: uniqueAutoId } = useRef(id || uuidv4());

	const radioWrapperClasses = classNames(
		'cs-radio-wrapper',
		{
			[className]: className,
			'cs-element-hidden': hidden,
		},
	);

	const radioGroupClasses = classNames(
		'cs-radio-group',
		{
			'cs-radio-error': error === true,
			[`cs-radio-${variant}`]: variant,
			'cs-radio-disabled': disabled,
		},
	);

	return (
		<div className={radioWrapperClasses} {...rest} ref={forwardRef}>
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
			<div className={radioGroupClasses} id={uniqueAutoId} aria-label={label}>
				{options?.map((option) => (
					<CSRadioOption
						key={option.key}
						name={name || uniqueAutoId}
						value={option.key}
						label={option.label}
						title={option.title}
						onClick={onClick}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						onKeyDown={onKeyDown}
						readOnly={readOnly}
						ariaInvalid={error}
						ariaRequired={required}
						checked={selectedKey === option.key}
						disabled={disabled || disabledKeys?.indexOf(option.key) >= 0}
					/>
				))}
			</div>
			{error && errorMessage && <CSFieldErrorMsg message={errorMessage} />}
		</div>
	);
};

const CSRadioWithRef = React.forwardRef<HTMLDivElement, CSRadioProps>((props: CSRadioProps, ref) => <CSRadio {...props} forwardRef={ref} />);

CSRadioWithRef.displayName = 'CSRadio';

export default CSRadioWithRef;
