import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';

export interface CSSelectProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	name?: string;
	onChange?: (value: any) => void;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
}

class CSSelect extends React.Component<CSSelectProps> {

	public static defaultProps = {
		labelHidden: false
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSSelectProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
		if (e.key !== KeyCode.Tab) {
			e.preventDefault();
		}
	}

	render() {
		const {
			borderRadius,
			children,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			hidden,
			id,
			label,
			labelHidden,
			labelTitle,
			onChange,
			readOnly,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': error,
				'cs-select-read-only': readOnly
			}
		);
		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className
			}
		);
		const style: CSSProperties = {
			'--cs-select-border-radius': borderRadius
		};
		return (
			<div className={selectWrapperClasses}>
				{(label && !labelHidden) &&
					<CSLabel
						htmlFor={this.uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
						className={disabled ? 'cs-label-disabled' : ''}
					/>
				}
				<div className="cs-select-group">
					<select
						className={selectClasses}
						id={this.uniqueAutoId}
						required={required}
						disabled={disabled}
						aria-label={label}
						aria-required={required}
						aria-invalid={error}
						aria-readonly={readOnly}
						onChange={this.handleOnChange}
						onKeyDown={readOnly ? this.handleOnKeyDown : undefined}
						name={name}
						value={value}
						title={title}
						style={style}
						{...rest}
					>
						{children}
					</select>
					{!readOnly &&
						<CSIcon name="down" size="0.8125rem" />
					}
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div>
		);
	}
}

export default CSSelect;
