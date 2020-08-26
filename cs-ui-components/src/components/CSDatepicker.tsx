import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
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
	errorMessage?: string;
	helpText?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: any;
	id?: string;
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
	todayButton?: string;
	tooltipPosition?: CSTooltipPosition;
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
		this.state = {
			startDate: null,
			maxDateValue: this.props.maxDate,
			minDateValue: this.props.minDate
		};
	}

	handleChange = (date: any) => {
		this.setState({
			startDate: date
		});
	}

	public render() {
		const { startDate, maxDateValue, minDateValue } = this.state;

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
							selected={startDate}
							onChange={this.handleChange}
							placeholderText={this.props.placeholder}
							todayButton={this.props.todayButton}
							disabled={this.props.disabled}
							maxDate={this.props.maxDateYear ? addYears(new Date(), maxDateValue) : addDays(new Date(), maxDateValue)}
							minDate={this.props.minDateYear ? subYears(new Date(), minDateValue) : subDays(new Date(), minDateValue)}
							name={this.props.name}
							locale={this.props.locale}
							autoComplete="off"
						/>
					</div>
					<CSIcon name="event" className="cs-datepicker-icon" />
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-datepicker-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSDatepicker;
