import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, addYears, subYears } from 'date-fns';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';
import KeyCode from '../util/KeyCode';

export type CSDatepickerDropdownMode = 'select' | 'scroll';

export interface CSDatepickerProps {
	[key: string]: any;
	borderRadius?: string;
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
	onCalendarClose?: () => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onChangeRaw?: (event: React.FocusEvent<HTMLInputElement>) => any;
	openToDate?: any;
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

export interface CSDatePickerState {
	startDate: Date;
}

class CSDatepicker extends React.Component<CSDatepickerProps, CSDatePickerState> {

	public static defaultProps = {
		dateFormat: 'dd-MM-yyyy',
		dropdownMode: 'scroll'
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();
	private datepicker: React.RefObject<DatePicker>;

	constructor(props: CSDatepickerProps) {
		super(props);

		this.datepicker = React.createRef();
		this.closeOnFocusOutside = this.closeOnFocusOutside.bind(this);

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

	closeOnFocusOutside(event: any) {
		// If shift key and tab pressed together close datepicker
		if (event.shiftKey && event.key === KeyCode.Tab) {
			this.datepicker.current.setOpen(false);
		}
	}

	componentDidUpdate(prevProps: CSDatepickerProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({ startDate: this.props.value });
		}
	}

	public render() {
		const {
			borderRadius,
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
			onCalendarClose,
			onChange,
			onChangeRaw,
			openToDate,
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
			...rest
		} = this.props;

		const datepickerClasses = classNames(
			'cs-datepicker', {
			[`${className}`]: className,
			'cs-datepicker-error': error,
			'cs-datepicker-read-only': readOnly
		}
		);
		const style: CSSProperties = {
			'--datepicker-width': width,
			'--cs-datepicker-border-radius': borderRadius
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
							onCalendarClose={this.props.onCalendarClose}
							onChange={this.handleChange}
							onChangeRaw={onChangeRaw}
							onKeyDown={this.closeOnFocusOutside}
							openToDate={openToDate}
							showYearDropdown={showYearDropdown}
							showMonthDropdown={showMonthDropdown}
							scrollableYearDropdown={scrollableYearDropdown}
							dropdownMode={dropdownMode}
							readOnly={readOnly}
							ref={this.datepicker}
							yearDropdownItemNumber={yearDropdownItemNumber}
							autoComplete="off"
							required={required}
							id={this.uniqueAutoId}
							{...rest}
						/>
					</div>
					{!this.props.readOnly && <CSIcon name="event" className="cs-datepicker-icon" />}
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSDatepicker;
