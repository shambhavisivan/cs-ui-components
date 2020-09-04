import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

export type CSDateTimePickerDropdownMode = 'select' | 'scroll';

export interface CSDateTimePickerProps {
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
	timeFormat?: string;
	timeIntervals?: number;
	timeCaption?: string;
	dropdownMode?: CSDateTimePickerDropdownMode;
	scrollableYearDropdown?: boolean;
	showMonthDropdown?: boolean;
	showYearDropdown?: boolean;
	yearDropdownItemNumber?: number;
}

export interface CSDateTimePickerState  {
	startDate: Date;
}

class CSDateTimePicker extends React.Component<CSDateTimePickerProps, CSDateTimePickerState> {

	public static defaultProps = {
		dateFormat: 'MMMM d, yyyy h:mm aa',
		dropdownMode: 'scroll'
	};
	constructor(props: CSDateTimePickerProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			startDate: value
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
	componentDidUpdate(prevProps: CSDateTimePickerProps) {
		if (prevProps.value !== this.props.value) {
		this.setState({ startDate: this.props.value });
		}
	}

	public render() {
		const { maxDate, minDate, maxDateYear, minDateYear } = this.props;

		const dateTimePickerClasses = classNames(
			'cs-datepicker cs-datetimepicker', {
				[`${this.props.className}`]: this.props.className,
				[`cs-datepicker-${this.props.borderType}`]: this.props.borderType,
				'cs-datepicker-error': this.props.error,
				'cs-datepicker-read-only': this.props.readOnly,
				'cs-datepicker-today-btn': this.props.todayButton
			}
		);

		const style: CSSProperties = {
			'--datetimepicker-width': this.props.width
		};

		const calcMaxDate = () => {
			if (maxDateYear) {
				return addYears(new Date(), maxDate);
			} else {
				return addDays(new Date(), maxDate);
			}
		};

		const calcMinDate = () => {
			if (minDateYear) {
				return subYears(new Date(), minDate);
			} else {
				return subDays(new Date(), minDate);
			}
		};

		return (
			<>
				<div className={dateTimePickerClasses} style={style}>
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
							maxDate={maxDateYear || maxDate ? calcMaxDate() : null}
							minDate={minDateYear || minDate ? calcMinDate() : null}
							name={this.props.name}
							locale={this.props.locale}
							selected={this.state.startDate}
							onChange={this.handleChange}
							showYearDropdown={this.props.showYearDropdown}
							showMonthDropdown={this.props.showMonthDropdown}
							scrollableYearDropdown={this.props.scrollableYearDropdown}
							dropdownMode={this.props.dropdownMode}
							autoComplete="off"
							showTimeSelect
							timeFormat={this.props.timeFormat}
							timeIntervals={this.props.timeIntervals}
							timeCaption={this.props.timeCaption}
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

export default CSDateTimePicker;
