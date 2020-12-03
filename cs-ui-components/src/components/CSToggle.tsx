import React from 'react';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

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
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

export interface CSToggleState {
	checked: boolean;
}

class CSToggle extends React.Component<CSToggleProps, CSToggleState> {

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSToggleProps) {
		super(props);

		this.state = {
			checked: this.props.checked
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ checked: !this.state.checked });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	componentDidUpdate(prevProps: CSToggleProps) {
		if (prevProps.checked !== this.props.checked) {
			this.setState({ checked: this.props.checked });
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
			required,
			title,
			tooltipPosition,
			...rest
		} = this.props;

		const toggleClasses = classNames(
			'cs-toggle',
			{
				'cs-toggle-error': error === true
			}
		);

		const toggleWrapperClasses = classNames(
			'cs-toggle-wrapper',
			{
				[`${className}`]: className
			}
		);

		const toggleElementWrapperClasses = classNames(
			'cs-toggle-element',
			{
				[`cs-toggle-label-${labelPosition}`]: labelPosition
			}
		);

		return (
			<>
				<div className={toggleElementWrapperClasses}>
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
					<label className={toggleWrapperClasses}>
						<input
							onChange={this.handleOnChange}
							className={toggleClasses}
							type="checkbox"
							disabled={disabled}
							checked={this.state.checked}
							required={required}
							id={this.uniqueAutoId}
							aria-required={required}
							aria-invalid={error}
							{...rest}
						/>
						<span className="cs-toggle-faux" title={title} />
					</label>
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSToggle;
