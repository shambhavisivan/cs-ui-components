import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { v4 as uuidv4 } from 'uuid';

export type CSCheckboxBorderType = 'square' | 'round';
export type CSCheckboxVariant = 'neutral' | 'brand';

export interface CSCheckboxProps {
	[key: string]: any;
	borderType?: CSCheckboxBorderType;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	variant?: CSCheckboxVariant;
}

export interface CSCheckboxState {
	checked: boolean;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		borderType: 'square'
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCheckboxProps) {
		super(props);

		this.state = {
			checked: !!this.props.checked
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ checked: !this.state.checked });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		this.setState({ checked: !this.state.checked });
		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	componentDidUpdate(prevProps: CSCheckboxProps) {
		if (prevProps.checked !== this.props.checked) {
			this.setState({ checked: this.props.checked });
		}
	}

	render() {
		const {
			borderType,
			checked,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			id,
			label,
			labelHidden,
			labelTitle,
			name,
			onChange,
			onClick,
			onKeyDown,
			required,
			title,
			tooltipPosition,
			variant,
			...rest
		} = this.props;

		const checkboxClasses = classNames(
			'cs-checkbox',
			{
				'cs-checkbox-error': error === true
			}
		);
		const checkboxGroupClasses = classNames(
			'cs-checkbox-group',
			{
				[`${className}`]: className
			}
		);
		const checkboxFauxClasses = classNames(
			'cs-checkbox-faux',
			{
				[`cs-checkbox-faux-${borderType}`]: borderType,
				[`cs-checkbox-${variant}`]: variant
			}
		);
		return (
			<>
				<div className="cs-checkbox-wrapper" >
					{(label && !labelHidden) &&
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					}
					<label className={checkboxGroupClasses}>
						<input
							onChange={this.handleOnChange}
							className={checkboxClasses}
							type="checkbox"
							disabled={disabled}
							checked={this.state.checked}
							id={this.uniqueAutoId}
							required={required}
							onClick={this.handleOnClick}
							name={name}
							aria-required={required}
							aria-invalid={error}
							onKeyDown={onKeyDown}
							{...rest}
						/>
						<span className={checkboxFauxClasses} title={title} />
					</label>
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
