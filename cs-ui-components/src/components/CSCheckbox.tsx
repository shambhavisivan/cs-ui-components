import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

export type CSCheckboxVariant = 'neutral' | 'brand';
export type CSCheckboxLabelPosition = 'left' | 'right';

export interface CSCheckboxProps {
	[key: string]: any;
	actions?: Array<CSCustomDataActionProps>;
	borderRadius?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	indeterminate?: boolean;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSCheckboxLabelPosition;
	labelTitle?: boolean;
	name?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
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

		if (readOnly) {
			return;
		}

		if (onChange) {
			onChange(e);
		}
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
					<div className="cs-checkbox-wrapper-inner">
						{/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
						<label
							className="cs-checkbox-group"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => event.stopPropagation()}
						>
							<input
								onBlur={onBlur}
								onChange={this.handleOnChange}
								className={checkboxClasses}
								type="checkbox"
								disabled={disabled}
								checked={checked}
								required={required}
								id={this.uniqueAutoId}
								name={name}
								ref={this.checkboxInnerRef}
								aria-label={label}
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
						{error
							&& errorTooltip
							&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
						{(actions?.length || icons?.length)
							&& (
								<div className="cs-checkbox-options">
									{icons?.length && <CSCustomDataIcons icons={icons} />}
									{actions?.length && <CSCustomDataActions actions={actions} />}
								</div>
							)}
					</div>
					{!errorTooltip
						&& error
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
