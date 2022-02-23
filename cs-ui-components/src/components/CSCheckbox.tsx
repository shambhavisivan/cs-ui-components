import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';
import KeyCode from '../util/KeyCode';

export type CSCheckboxVariant = 'neutral' | 'brand';
export type CSCheckboxLabelPosition = 'left' | 'right';

export interface CSCheckboxProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	borderRadius?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	indeterminate?: boolean;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSCheckboxLabelPosition;
	labelTitle?: boolean;
	name?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
		checked: false,
	};

	public checkboxInnerRef: React.RefObject<HTMLInputElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSCheckboxProps) {
		super(props);

		this.checkboxInnerRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { readOnly, onChange } = this.props;

		if (onChange && !readOnly) onChange?.(e);
	}

	handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
		const { readOnly, onClick } = this.props;

		if (onClick && !readOnly) onClick?.(e);
	}

	render() {
		const {
			actions,
			borderRadius,
			checked,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			icons,
			id,
			indeterminate,
			label,
			labelHidden,
			labelPosition,
			labelTitle,
			name,
			onBlur,
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
				'cs-checkbox-indeterminate': indeterminate,
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
				<div
					className={checkboxWrapperClasses}
				>
					{label && !labelHidden && (
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					)}
					<div className="cs-checkbox-wrapper-inner">
						{/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
						<label
							className="cs-checkbox-group"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => {
								// Stop propagation on enter/space keys only
								if (event.key === KeyCode.Enter || event.key === KeyCode.Space) {
									event.stopPropagation();
								}
							}}
						>
							<input
								onBlur={onBlur}
								onChange={this.handleOnChange}
								onClick={this.handleOnClick}
								className={checkboxClasses}
								type="checkbox"
								disabled={disabled}
								checked={checked}
								required={required}
								id={this.uniqueAutoId}
								name={name}
								ref={this.checkboxInnerRef}
								aria-label={label}
								readOnly={readOnly}
								aria-readonly={readOnly}
								aria-required={required}
								aria-invalid={error}
								aria-checked={indeterminate ? 'mixed' : checked}
								onKeyDown={onKeyDown}
								{...rest}
							/>
							<span
								className={checkboxFauxClasses}
								title={title}
								style={style}
							/>
						</label>
						{error && errorTooltip && errorMessage && (
							<CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />
						)}
						<CSCustomData icons={icons} actions={actions} />
					</div>
					{!errorTooltip && error && errorMessage && (
						<CSFieldErrorMsg message={errorMessage} />
					)}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
