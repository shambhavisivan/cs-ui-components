import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { v4 as uuidv4 } from 'uuid';

export type CSCheckboxVariant = 'neutral' | 'brand';
export type CSCheckboxLabelPosition = 'default' | 'left';

export interface CSCheckboxProps {
	[key: string]: any;
	borderRadius?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSCheckboxLabelPosition;
	labelTitle?: boolean;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
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
		labelHidden: false
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCheckboxProps) {
		super(props);

		this.state = {
			checked: !!this.props.checked
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.readOnly) {
			return;
		}

		this.setState({ checked: !this.state.checked });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		if (this.props.readOnly) {
			return;
		}

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
			borderRadius,
			checked,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			id,
			label,
			labelHidden,
			labelPosition,
			labelTitle,
			name,
			onChange,
			onClick,
			onKeyDown,
			readOnly,
			required,
			title,
			tooltipPosition,
			variant,
			...rest
		} = this.props;

		const checkboxClasses = classNames(
			'cs-checkbox',
			{
				'cs-checkbox-error': error === true,
				'cs-checkbox-read-only': readOnly
			}
		);
		const checkboxWrapperClasses = classNames(
			'cs-checkbox-wrapper',
			{
				[`${className}`]: className,
				[`cs-checkbox-label-${labelPosition}`]: labelPosition
			}
		);
		const checkboxFauxClasses = classNames(
			'cs-checkbox-faux',
			{
				[`cs-checkbox-${variant}`]: variant
			}
		);
		const style: CSSProperties = {
			'--cs-checkbox-border-radius': borderRadius
		};
		return (
			<>
				<div className={checkboxWrapperClasses}>
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
					<label className="cs-checkbox-group">
						<input
							onChange={this.handleOnChange}
							className={checkboxClasses}
							type="checkbox"
							disabled={disabled}
							checked={this.state.checked}
							required={required}
							id={this.uniqueAutoId}
							onClick={this.handleOnClick}
							name={name}
							aria-readonly={readOnly}
							aria-required={required}
							aria-invalid={error}
							onKeyDown={onKeyDown}
							{...rest}
						/>
						<span
							className={checkboxFauxClasses}
							title={this.props.title}
							style={style}
						/>
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
