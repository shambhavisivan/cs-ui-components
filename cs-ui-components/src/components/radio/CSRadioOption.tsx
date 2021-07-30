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
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
	title?: string;
}

class CSRadioOption extends React.Component<CSRadioOptionProps> {
	constructor(props: CSRadioOptionProps) {
		super(props);

		this.toggleRadio = this.toggleRadio.bind(this);
	}

	toggleRadio(e: React.ChangeEvent<HTMLInputElement>) {
		if (this.props.readOnly) {
			e.target.checked = e.target.defaultChecked;
			e.preventDefault();
			return;
		}

		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		const {
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
			onChange,
			title,
			...rest
		} = this.props;

		const radioOptionWrapperClasses = classNames(
			'cs-radio-label',
			{
				'cs-radio-label-read-only': readOnly,
				'cs-radio-label-disabled': disabled,
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
			<label className={radioOptionWrapperClasses} title={title}>
				{/* readonly, invalid and required aria properties work well with role radio, unlike with radiomenuitem role which supports these attributes, but does not work well as a role and doesn't enter radio form mode in screen readers */}
				{/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
				<input
					onChange={this.toggleRadio}
					className={radioOptionClasses}
					type="radio"
					name={name}
					disabled={disabled || parentDisabled}
					id={id}
					aria-readonly={readOnly}
					aria-invalid={ariaInvalid}
					aria-required={ariaRequired}
					defaultChecked={this.props.checked}
					{...rest}
				/>
				<span className="cs-radio-faux" />
				<span>{label}</span>
			</label>
		);
	}
}

export default CSRadioOption;
