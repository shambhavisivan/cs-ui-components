import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

export interface CSDatepickerProps {
	borderType?: string;
	className?: string;
	dateFormat?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: any;
	id?: string;
	isClearable?: boolean;
	maxDate?: number;
	minDateYear?: boolean;
	minDate?: number;
	maxDateYear?: boolean;
	name?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	todayButton?: boolean;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
	width?: string;
}

export interface CSDatePickerState  {
	startDate: Date;
	maxDateValue: number;
	minDateValue: number;
}

class CSDatepicker extends React.Component<CSDatepickerProps, CSDatePickerState> {

	public static defaultProps = {
		dateFormat: 'dd-MM-yyyy'
	};
	constructor(props: CSDatepickerProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			startDate: value,
			maxDateValue: this.props.maxDate,
			minDateValue: this.props.minDate
		};
	}

	handleChange = (date: any) => {
		this.setState({
			startDate: date
		});
		if (this.props.onChange) {
			this.props.onChange(date);
		}
	}
	componentDidUpdate(prevProps: CSDatepickerProps) {
		if (prevProps.value !== this.props.value) {
		this.setState({ startDate: this.props.value });
		}
	}

	public render() {
		const { maxDateValue, minDateValue } = this.state;

		const datepickerClasses = classNames(
			'cs-datepicker', {
				[`${this.props.className}`]: this.props.className,
				[`cs-datepicker-${this.props.borderType}`]: this.props.borderType,
				'cs-datepicker-error': this.props.error,
				'cs-datepicker-read-only': this.props.readOnly
			}
		);

		const style: CSSProperties = {
			'--datepicker-width': this.props.width
		};

		return (
			<>
				<div className={datepickerClasses} style={style}>
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
					<div className="cs-datepicker-wrapper" title={this.props.title}>
						<DatePicker
							dateFormat={this.props.dateFormat}
							isClearable={this.props.isClearable}
							placeholderText={this.props.placeholder}
							todayButton={this.props.todayButton ? 'Today' : null}
							disabled={this.props.disabled}
							maxDate={this.props.maxDateYear ? addYears(new Date(), maxDateValue) : addDays(new Date(), maxDateValue)}
							minDate={this.props.minDateYear ? subYears(new Date(), minDateValue) : subDays(new Date(), minDateValue)}
							name={this.props.name}
							locale={this.props.locale}
							selected={this.state.startDate}
							onChange={this.handleChange}
							autoComplete="off"
						/>
					</div>
					<CSIcon name="event" className="cs-datepicker-icon" />
					{(this.props.error && this.props.errorMessage) &&
						<CSFieldErrorMsg message={this.props.errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSDatepicker;
