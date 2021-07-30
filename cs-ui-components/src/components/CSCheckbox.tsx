import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';

export type CSCheckboxVariant = 'neutral' | 'brand';
export type CSCheckboxLabelPosition = 'left' | 'right';

export interface CSCheckboxProps {
	[key: string]: any;
	borderRadius?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	indeterminate?: boolean;
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

class CSCheckbox extends React.Component<CSCheckboxProps> {
	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
	};

	private checkboxRef: React.RefObject<HTMLInputElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSCheckboxProps) {
		super(props);

		this.checkboxRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

	componentDidMount() {
		const { indeterminate, checked } = this.props;

		if (indeterminate && !checked) {
			this.setIndeterminate(true);
		}
	}

	componentDidUpdate(prevProps: CSCheckboxProps) {
		const { indeterminate } = this.props;

		if (prevProps.indeterminate !== indeterminate) {
			this.setIndeterminate(indeterminate);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { readOnly, onChange } = this.props;

		if (readOnly) {
			return;
		}

		if (onChange) {
			onChange(e);
		}
	}

	handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		const { readOnly, onClick } = this.props;

		if (readOnly) {
			e.preventDefault();
			return;
		}

		if (onClick) {
			onClick(e);
		}
	}

	setIndeterminate = (value: boolean) => {
		if (this.checkboxRef.current) {
			this.checkboxRef.current.indeterminate = value;
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
			hidden,
			id,
			indeterminate,
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
				'cs-checkbox-read-only': readOnly,
			},
		);
		const checkboxWrapperClasses = classNames(
			'cs-checkbox-wrapper',
			{
				[`cs-checkbox-label-${labelPosition}`]: labelPosition,
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const checkboxFauxClasses = classNames(
			'cs-checkbox-faux',
			{
				[`cs-checkbox-${variant}`]: variant,
			},
		);
		const style: CSSProperties = {
			'--cs-checkbox-border-radius': borderRadius,
		};
		return (
			<>
				<div className={checkboxWrapperClasses}>
					{(label && !labelHidden)
						&& (
							<CSLabel
								htmlFor={this.uniqueAutoId}
								label={label}
								helpText={helpText}
								tooltipPosition={tooltipPosition}
								required={required}
								title={labelTitle ? label : null}
							/>
						)}
					<label className="cs-checkbox-group">
						<input
							onChange={this.handleOnChange}
							className={checkboxClasses}
							type="checkbox"
							disabled={disabled}
							checked={checked}
							required={required}
							id={this.uniqueAutoId}
							onClick={this.handleOnClick}
							name={name}
							ref={this.checkboxRef}
							aria-label={label}
							aria-readonly={readOnly}
							aria-required={required}
							aria-invalid={error}
							onKeyDown={onKeyDown}
							{...rest}
						/>
						<span
							className={checkboxFauxClasses}
							title={title}
							style={style}
						/>
					</label>
					{(error && errorMessage)
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
