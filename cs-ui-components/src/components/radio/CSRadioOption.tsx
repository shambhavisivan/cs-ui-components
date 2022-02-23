import React from 'react';
import classNames from 'classnames';

export interface CSRadioOptionProps {
	[key: string]: any;
	ariaInvalid?: boolean;
	ariaRequired?: boolean;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	label?: string;
	name: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	title?: string;
	value?: string | number;
}

const CSRadioOption = ({
	ariaInvalid,
	ariaRequired,
	checked,
	className,
	disabled,
	id,
	label,
	name,
	parentDisabled,
	readOnly,
	onBlur,
	onChange,
	onClick,
	onKeyDown,
	title,
	value,
	...rest
}: CSRadioOptionProps) => {
	const toggleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (readOnly) {
			e.target.checked = e.target.defaultChecked;
			e.preventDefault();
			return;
		}

		onChange?.(e);
	};

	const radioOptionWrapperClasses = classNames(
		'cs-radio-option-wrapper',
		{
			'cs-radio-option-wrapper-read-only': readOnly,
			'cs-radio-option-wrapper-disabled': disabled,
			[`${className}`]: className,
		},
	);

	const radioOptionClasses = classNames(
		'cs-radio',
		{
			'cs-radio-read-only': readOnly,
		},
	);

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<label
			className={radioOptionWrapperClasses}
			title={title}
			onClick={(event) => event.stopPropagation()}
			onKeyDown={(event) => event.stopPropagation()}
		>
			{/* readonly, invalid and required aria properties work well with role radio, unlike with radiomenuitem role which supports these attributes, but does not work well as a role and doesn't enter radio form mode in screen readers */}
			{/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
			<input
				onBlur={onBlur}
				onChange={toggleRadio}
				onClick={onClick}
				onKeyDown={onKeyDown}
				className={radioOptionClasses}
				type="radio"
				name={name}
				disabled={disabled || parentDisabled}
				id={id}
				readOnly={readOnly}
				aria-readonly={readOnly}
				aria-invalid={ariaInvalid}
				aria-required={ariaRequired}
				defaultChecked={checked}
				value={value}
				{...rest}
			/>
			<span className="cs-radio-faux" />
			<span className="cs-radio-option-label">{label}</span>
		</label>
	);
};

export default CSRadioOption;
