import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';

export type CSToggleLabelPosition = 'default' | 'left';

export interface CSToggleProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSToggleLabelPosition;
	labelTitle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

class CSToggle extends React.Component<CSToggleProps> {
	public toggleInnerRef: React.Ref<HTMLInputElement>;

	private readonly uniqueAutoId: string | null;

	constructor(props: CSToggleProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();
		this.toggleInnerRef = React.createRef();
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
			checked = false,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			icons,
			id,
			label,
			labelHidden,
			labelPosition,
			labelTitle,
			onChange,
			onClick,
			onKeyDown,
			readOnly,
			required,
			title,
			tooltipPosition,
			...rest
		} = this.props;

		const toggleClasses = classNames(
			'cs-toggle',
			{
				'cs-toggle-error': error === true,
				'cs-toggle-read-only': readOnly,
			},
		);

		const toggleWrapperClasses = classNames(
			'cs-toggle-wrapper',
			{
				[`cs-toggle-label-${labelPosition}`]: labelPosition,
				[`${className}`]: className,
			},
		);

		return (
			<div className={toggleWrapperClasses}>
				<div className="cs-toggle-wrapper-outer">
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
					<div className="cs-toggle-wrapper-inner">
						{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
						<label
							className="cs-toggle-group"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => event.stopPropagation()}
						>
							<input
								onChange={this.handleOnChange}
								onClick={this.handleOnClick}
								onKeyDown={onKeyDown}
								className={toggleClasses}
								type="checkbox"
								disabled={disabled}
								checked={checked}
								required={required}
								id={this.uniqueAutoId}
								aria-label={label}
								aria-readonly={readOnly}
								aria-required={required}
								aria-invalid={error}
								ref={this.toggleInnerRef}
								{...rest}
							/>
							<span className="cs-toggle-faux" title={title} />
						</label>
						{error && errorTooltip && errorMessage && (
							<CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />
						)}
						<CSCustomData icons={icons} actions={actions} />
					</div>
				</div>
				{!errorTooltip && error && errorMessage && (
					<CSFieldErrorMsg message={errorMessage} />
				)}
			</div>
		);
	}
}

export default CSToggle;
