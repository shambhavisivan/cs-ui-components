import React from 'react';
import classNames from 'classnames';

export interface CSRadioOptionProps {
	ariaInvalid?: boolean;
	ariaRequired?: boolean;
	checked: boolean;
	disabled?: boolean;
	label: string;
	name: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	title?: string;
	value: React.ReactText;
}

const CSRadioOption = ({
	ariaInvalid,
	ariaRequired,
	checked,
	disabled,
	label,
	name,
	readOnly,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onKeyDown,
	title,
	value,
}: CSRadioOptionProps) => {
	const radioOptionWrapperClasses = classNames(
		'cs-radio-option-wrapper',
		{
			'cs-radio-option-wrapper-read-only': readOnly,
			'cs-radio-option-wrapper-disabled': disabled,
		},
	);

	const radioOptionClasses = classNames(
		'cs-radio',
		{
			'cs-radio-read-only': readOnly,
		},
	);

	const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		event?.stopPropagation();
		onClick?.(event);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		event?.stopPropagation();
		onKeyDown?.(event);
	};

	return (
		<label className={radioOptionWrapperClasses} title={title}>
			{/* readonly, invalid and required aria properties work well with role radio, unlike with radiomenuitem role which supports these attributes,
				but does not work well as a role and doesn't enter radio form mode in screen readers */}
			{/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
			<input
				onClick={handleClick}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onKeyDown={handleKeyDown}
				className={radioOptionClasses}
				type="radio"
				name={name}
				disabled={disabled}
				aria-readonly={readOnly}
				aria-invalid={ariaInvalid}
				aria-required={ariaRequired}
				value={value}
				checked={checked}
			/>
			<span className="cs-radio-faux" />
			<span className="cs-radio-option-label">{label}</span>
		</label>
	);
};

export default CSRadioOption;
