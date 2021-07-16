import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export type CSToggleLabelPosition = 'default' | 'left';

export interface CSToggleProps {
	[key: string]: any;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSToggleLabelPosition;
	labelTitle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

class CSToggle extends React.Component<CSToggleProps> {
	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (this.props.readOnly) {
			return;
		}

		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		const {
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
			onChange,
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

		const toggleElementWrapperClasses = classNames(
			'cs-toggle-element',
			{
				[`cs-toggle-label-${labelPosition}`]: labelPosition,
				[`${className}`]: className,
			},
		);

		return (
			<>
				<div className={toggleElementWrapperClasses}>
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
					<label className="cs-toggle-wrapper">
						<input
							onChange={this.handleOnChange}
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
							{...rest}
						/>
						<span className="cs-toggle-faux" title={title} />
					</label>
					{(error && errorMessage)
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSToggle;
