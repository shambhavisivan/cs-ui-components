import React from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';

export type CSSelectBorderType = 'round' | 'square';

export interface CSSelectProps {
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

	constructor(props: CSSelectProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		this.setState({value: e.target.value});
		if (this.props.onChange) {
			this.props.onChange(e.target.value);
		}
	}

	render() {
		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': this.props.error,
				[`cs-select-${this.props.borderType}`]: this.props.borderType
			}
		);

		const selectGroupClasses = classNames(
			'cs-select-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				'cs-element-hidden': this.props.hidden
			}
		);

		return (
			<div className={selectWrapperClasses}>
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel
						for={this.props.id}
						label={this.props.label}
						helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						title={this.props.labelTitle ? this.props.label : null}
					/>
				}
				<div className={selectGroupClasses}>
					<select
						className={selectClasses}
						id={this.props.id}
						required={this.props.required}
						disabled={this.props.disabled}
						aria-required={this.props.required}
						aria-invalid={this.props.error}
						onChange={this.handleOnChange}
						name={this.props.name}
						value={fixControlledValue(this.state.value)}
						title={this.props.title}
					>
						{this.props.children}
					</select>
					<CSIcon name="down"/>
				</div>
				{(this.props.error && this.props.errorMessage) &&
					<CSFieldErrorMsg message={this.props.errorMessage} />
				}
			</div>
		);
	}
}

export default CSSelect;
