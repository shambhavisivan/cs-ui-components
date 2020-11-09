import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

export type CSDatepickerDropdownMode = 'select' | 'scroll';

export interface CSDatepickerProps {
	borderType?: string;
	className?: string;
	dateFormat?: string;
	disabled?: boolean;
	dropdownMode?: CSDatepickerDropdownMode;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	isClearable?: boolean;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: any;
	maxDate?: number;
	maxDateYear?: boolean;
	minDate?: number;
	minDateYear?: boolean;
	name?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	showMonthDropdown?: boolean;
	showYearDropdown?: boolean;
	title?: string;
	todayButton?: boolean;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
	width?: string;
	yearDropdownItemNumber?: number;
}

export interface CSDatePickerState  {
	startDate: Date;
}

class CSDatepicker extends React.Component<CSDatepickerProps, CSDatePickerState> {

	public static defaultProps = {
		dateFormat: 'dd-MM-yyyy',
		dropdownMode: 'scroll'
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSDatepickerProps) {
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
	componentDidUpdate(prevProps: CSDatepickerProps) {
		if (prevProps.value !== this.props.value) {
		this.setState({ startDate: this.props.value });
		}
	}

	public render() {
		const { maxDate, minDate, maxDateYear, minDateYear } = this.props;

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
				<div className={datepickerClasses} style={style}>
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel
							for={this.uniqueAutoId}
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
							maxDate={maxDateYear || maxDate ? calcMaxDate() : undefined}
							minDate={minDateYear || minDate ? calcMinDate() : undefined}
							name={this.props.name}
							locale={this.props.locale}
							selected={this.state.startDate}
							onChange={this.handleChange}
							showYearDropdown={this.props.showYearDropdown}
							showMonthDropdown={this.props.showMonthDropdown}
							scrollableYearDropdown={this.props.scrollableYearDropdown}
							dropdownMode={this.props.dropdownMode}
							readOnly={this.props.readOnly}
							tabIndex={this.props.readOnly ? -1 : null}
							yearDropdownItemNumber={this.props.yearDropdownItemNumber}
							autoComplete="off"
							required={this.props.required}
							id={this.uniqueAutoId}
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
