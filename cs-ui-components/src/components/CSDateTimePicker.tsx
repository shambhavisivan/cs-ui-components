import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

export type CSDateTimePickerDropdownMode = 'select' | 'scroll';

export interface CSDateTimePickerProps {
	[key: string]: any;
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

export interface CSDateTimePickerState {
	startDate: Date;
}

class CSDateTimePicker extends React.Component<CSDateTimePickerProps, CSDateTimePickerState> {

	public static defaultProps = {
		dateFormat: 'MMMM d, yyyy h:mm aa',
		dropdownMode: 'scroll'
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

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
		const {
			borderType,
			className,
			dateFormat,
			disabled,
			dropdownMode,
			error,
			errorMessage,
			helpText,
			id,
			isClearable,
			label,
			labelHidden,
			labelTitle,
			locale,
			maxDate,
			maxDateYear,
			minDate,
			minDateYear,
			name,
			onChange,
			placeholder,
			readOnly,
			required,
			scrollableYearDropdown,
			showMonthDropdown,
			showYearDropdown,
			title,
			todayButton,
			tooltipPosition,
			value,
			width,
			yearDropdownItemNumber,
			timeFormat,
			timeIntervals,
			timeCaption,
			...rest
		} = this.props;

		const dateTimePickerClasses = classNames(
			'cs-datepicker cs-datetimepicker', {
			[`${className}`]: className,
			[`cs-datepicker-${borderType}`]: borderType,
			'cs-datepicker-error': error,
			'cs-datepicker-read-only': readOnly,
			'cs-datepicker-today-btn': todayButton
		}
		);

		const style: CSSProperties = {
			'--datetimepicker-width': width
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
					<div className="cs-datepicker-wrapper" title={title}>
						<DatePicker
							dateFormat={dateFormat}
							isClearable={isClearable}
							placeholderText={placeholder}
							todayButton={todayButton ? 'Today' : null}
							disabled={disabled}
							maxDate={maxDateYear || maxDate ? calcMaxDate() : undefined}
							minDate={minDateYear || minDate ? calcMinDate() : undefined}
							name={name}
							locale={locale}
							selected={this.state.startDate}
							onChange={this.handleChange}
							readOnly={readOnly}
							tabIndex={readOnly ? -1 : null}
							showYearDropdown={showYearDropdown}
							showMonthDropdown={showMonthDropdown}
							scrollableYearDropdown={scrollableYearDropdown}
							dropdownMode={dropdownMode}
							yearDropdownItemNumber={yearDropdownItemNumber}
							required={required}
							id={this.uniqueAutoId}
							autoComplete="off"
							showTimeSelect
							timeFormat={timeFormat}
							timeIntervals={timeIntervals}
							timeCaption={timeCaption}
							{...rest}
						/>
					</div>
					<CSIcon name="event" className="cs-datepicker-icon" />
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSDateTimePicker;
