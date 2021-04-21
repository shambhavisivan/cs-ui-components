import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { v4 as uuidv4 } from 'uuid';

export type CSSliderSize = 'xsmall' | 'small' | 'medium' | 'large';

export interface CSSliderProps {
	[key: string]: any;
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
	readOnly?: boolean;
	required?: boolean;
	size?: CSSliderSize;
	step?: string;
	stepValues?: Array<any>;
	title?: string;
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
	exportedValue?: string;
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

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSSliderProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value,
			prevValue: props.value,
			steps: [],
			step: props.step,
			min: props.min,
			max: props.max,
			exportedValue: ''
		};
		this.stepsIcons = this.stepsIcons.bind(this);
	}

	handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (this.props.readOnly) {
			return;
		}
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
			this.setState({ max: newMax });
			this.setState({ min: '0' });
			this.setState({ step: 1 });
		}
	}

	render() {
		const {
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			id,
			label,
			labelHidden,
			labelTitle,
			max,
			min,
			onChange,
			readOnly,
			required,
			size,
			step,
			stepValues,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const sliderWrapperClasses = classNames(
			'cs-slider-wrapper',
			{
				[`${className}`]: className
			}
		);

		const sliderGroupClasses = classNames(
			'cs-slider-group',
			{
				[`cs-slider-group-${size}`]: size
			}
		);

		const handleValue = () => {
			const valueToExport = `${stepValues !== undefined ? stepValues[Number(this.state.value)] : this.state.value}`;
			this.setState({
				exportedValue: valueToExport
			});
		};

		const allSteps = this.state.steps;
		const percentageRange = ((Number(this.state.value) - Number(min)) / (Number(max) - Number(min))) * 100;

		const valueStyle: CSSProperties = {
			'--cs-slider-value-position': percentageRange + '%'
		};

		const valueClasses = classNames(
			'cs-slider-max-value',
			percentageRange === 0 ? 'start' : null,
			percentageRange === 100 ? 'end' : null
		);

		return (
			<div className={sliderWrapperClasses}>
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
				<span className="cs-slide-range">{min}-{max}</span>
				<div className={sliderGroupClasses}>
					<input
						className="cs-slider"
						disabled={disabled}
						id={this.uniqueAutoId}
						max={this.state.max}
						min={this.state.min}
						required={required}
						step={this.state.step}
						value={fixControlledValue(this.state.value)}
						type="range"
						onChange={this.handleOnChange}
						onMouseUp={handleValue}
						onKeyUp={handleValue}
						title={title}
						aria-readonly={readOnly}
						aria-required={required}
						aria-invalid={error}
						aria-valuemin={Number(this.state.min)}
						aria-valuemax={Number(this.state.max)}
						{...rest}
					/>
					{step ? (
						<div className="cs-slider-steps-wrapper">
							{allSteps.map(stateStep => (
								<span key={stateStep} className="cs-slider-step">
									<span className="cs-slider-step-circle" />
									<span className="cs-slider-step-number">{stateStep}</span>
								</span>
							))}
						</div>
					) : null}
					{stepValues ? (
						<div className="cs-slider-steps-wrapper">
							{stepValues.map(stepValue => (
								<span key={stepValue} className="cs-slider-step">
									<span className="cs-slider-step-circle" />
									<span className="cs-slider-step-number">{stepValue}</span>
								</span>
							))}
						</div>
					) : null}
					{!step && !stepValues ? (
						<div className="cs-slider-max-value-wrapper">
							<span className={valueClasses} style={valueStyle}>{this.state.value}</span>
						</div>
					) : null}
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div>
		);
	}
}

export default CSSlider;
