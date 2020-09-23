import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';

export type CSSliderSize = 'xsmall' | 'small' | 'medium' | 'large';

export interface CSSliderProps {
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label?: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	max: string;
	min: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	size?: CSSliderSize;
	step?: string;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

export interface CSSliderState {
	value?: string;
	prevValue?: any;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSSlider extends React.Component<CSSliderProps, CSSliderState> {

	static getDerivedStateFromProps(nextProps: CSSliderProps, { prevValue }: CSSliderState) {
		const newState: Partial<CSSliderState> = { prevValue: nextProps.value };
		if (prevValue !== nextProps.value) {
		  newState.value = nextProps.value;
		  return newState;
		}
		return null;
	}

	constructor(props: CSSliderProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value
		};
	}

	handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (this.props.onChange) {
			this.props.onChange(event);
		}
		this.setState({
			value: event.target.value
		});
	}

	render() {
		const sliderGroupClasses = classNames(
			'cs-slider-group',
			{
				[`${this.props.className}`]: this.props.className,
				[`cs-slider-group-${this.props.size}`]: this.props.size
			}
		);

		return (
			<div className="cs-slider-wrapper">
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
				<span className="cs-slide-range">{this.props.min}-{this.props.max}</span>
				<div className={sliderGroupClasses}>
					<input
						className="cs-slider"
						disabled={this.props.disabled}
						id={this.props.id}
						max={this.props.max}
						min={this.props.min}
						required={this.props.required}
						step={this.props.step}
						value={fixControlledValue(this.state.value)}
						type="range"
						onChange={this.handleOnChange}
						title={this.props.title}
						aria-required={this.props.required}
					/>
					<span className="cs-slider-max-value">{this.state.value}</span>
				</div>
				{(this.props.error && this.props.errorMessage) &&
					<CSFieldErrorMsg message={this.props.errorMessage} />
				}
			</div>
		);

	}

}

export default CSSlider;
