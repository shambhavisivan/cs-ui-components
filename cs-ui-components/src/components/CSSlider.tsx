import React, { CSSProperties } from 'react';
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
	max?: string;
	min?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	size?: CSSliderSize;
	step?: string;
	title?: string;
	stepValues?: Array<any>;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

export interface CSSliderState {
	value?: string;
	prevValue?: any;
	steps?: Array<number>;
	step?: any;
	min?: string;
	max?: string;
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
			prevValue: props.value,
			steps: [],
			step: props.step,
			min: props.min,
			max: props.max
		};
		this.stepsIcons = this.stepsIcons.bind(this);
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

	componentDidMount() {
		this.stepsIcons();
		this.stepValuesIcons();
		this.setState({});
	}

	stepsIcons() {
		const initialStep = Number(this.props.min);
		const numberOfSteps = (Number(this.props.max) - Number(this.props.min)) / Number(this.props.step);
		let stepInterval = initialStep;

		this.state.steps.push(stepInterval);

		for (let step = 0; step < numberOfSteps; step++) {
			stepInterval = stepInterval + Number(this.props.step);
			this.state.steps.push(stepInterval);
		}
	}

	stepValuesIcons() {
		const stepValues = this.props.stepValues;
		if (stepValues !== undefined) {
			const numberOfStepValues = stepValues.length;
			const newMax = String(numberOfStepValues - 1);
			this.setState({max : newMax});
			this.setState({min : '0'});
			this.setState({step : 1});
		}
	}

	render() {
		const sliderGroupClasses = classNames(
			'cs-slider-group',
			{
				[`${this.props.className}`]: this.props.className,
				[`cs-slider-group-${this.props.size}`]: this.props.size
			}
		);

		const exportedValue = `${this.props.stepValues !== undefined ? this.props.stepValues[Number(this.state.value)] : this.state.value}`;

		const allSteps = this.state.steps;
		const percentageRange = ((Number(this.state.value) - Number(this.props.min)) / (Number(this.props.max) - Number(this.props.min))) * 100;

		const valueStyle: CSSProperties = {
			'--cs-slider-value-position': percentageRange + '%'
		};

		const valueClasses = classNames(
			'cs-slider-max-value',
			percentageRange === 0 ? 'start' : null,
			percentageRange === 100 ? 'end' : null
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
						max={this.state.max}
						min={this.state.min}
						required={this.props.required}
						step={this.state.step}
						value={fixControlledValue(this.state.value)}
						type="range"
						onChange={this.handleOnChange}
						title={this.props.title}
						aria-required={this.props.required}
						aria-invalid={this.props.error}
						aria-minvalue={this.state.min}
						aria-maxvalue={this.state.max}
					/>
					{this.props.step ? (
						<div className="cs-slider-steps-wrapper">
							{allSteps.map(step => (
								<span key={step} className="cs-slider-step">
									<span className="cs-slider-step-circle"/>
									<span className="cs-slider-step-number">{step}</span>
								</span>
							))}
						</div>
					) : null}
					{this.props.stepValues ? (
						<div className="cs-slider-steps-wrapper">
							{this.props.stepValues.map(stepValue => (
								<span key={stepValue} className="cs-slider-step">
									<span className="cs-slider-step-circle"/>
									<span className="cs-slider-step-number">{stepValue}</span>
								</span>
							))}
						</div>
					) : null}
					{!this.props.step && !this.props.stepValues ? (
						<div className="cs-slider-max-value-wrapper">
							<span className={valueClasses} style={valueStyle}>{this.state.value}</span>
						</div>
					) : null}
					<div>{exportedValue}</div>
				</div>
				{(this.props.error && this.props.errorMessage) &&
					<CSFieldErrorMsg message={this.props.errorMessage} />
				}
			</div>
		);
	}
}

// export const exportedValue: any;

export default CSSlider;
