import React from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

export type CSSelectBorderType = 'round' | 'square';

export interface CSSelectProps {
	[key: string]: any;
	borderType?: CSSelectBorderType;
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
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
}

export interface CSSelectState {
	value: any;
	prevValue: any;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSSelect extends React.Component<CSSelectProps, CSSelectState> {

	public static defaultProps = {
		labelHidden: false
	};

	static getDerivedStateFromProps(nextProps: CSSelectProps, { prevValue }: CSSelectState) {
		const newState: Partial<CSSelectState> = { prevValue: nextProps.value };
		if (prevValue !== nextProps.value) {
			newState.value = nextProps.value;
			return newState;
		}
		return null;
	}

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
		this.setState({ value: e.target.value });
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}

	render() {
		const {
			borderType,
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
				[`cs-select-${borderType}`]: borderType
			}
		);

		const selectGroupClasses = classNames(
			'cs-select-group',
			{
				[`${className}`]: className
			}
		);

		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				'cs-element-hidden': hidden
			}
		);

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
				<div className={selectGroupClasses}>
					<select
						className={selectClasses}
						id={this.uniqueAutoId}
						required={required}
						disabled={disabled}
						aria-required={required}
						aria-invalid={error}
						onChange={this.handleOnChange}
						name={name}
						value={fixControlledValue(this.state.value)}
						title={title}
						{...rest}
					>
						{children}
					</select>
					<CSIcon name="down" />
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div>
		);
	}
}

export default CSSelect;
