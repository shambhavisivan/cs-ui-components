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
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	dateFormat?: string;
	disabled?: boolean;
	dropdownMode?: CSDatepickerDropdownMode;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	inline?: boolean;
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
	onChange: (date: Date) => any;
	onChangeRaw?: (event: React.FocusEvent<HTMLInputElement>) => any;
	openToDate?: any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	selected: Date;
	showMonthDropdown?: boolean;
	showYearDropdown?: boolean;
	title?: string;
	todayButton?: boolean;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
	width?: string;
	yearDropdownItemNumber?: number;
}

class CSDatepicker extends React.Component<CSDatepickerProps> {

	public static defaultProps = {
		dateFormat: 'dd-MM-yyyy',
		dropdownMode: 'scroll'
	};
	public datepickerRef: React.RefObject<DatePicker>;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSDatepickerProps) {
		super(props);

		this.datepickerRef = React.createRef();
		this.closeOnFocusOutside = this.closeOnFocusOutside.bind(this);
	}

	closeOnFocusOutside(event: any) {
		// If shift key and tab pressed together close datepicker
		if (event.shiftKey && event.key === KeyCode.Tab) {
			this.datepickerRef.current.setOpen(false);
		}
	}

	public render() {
		const {
			autoFocus,
			borderRadius,
			className,
			dateFormat,
			disabled,
			dropdownMode,
			error,
			errorMessage,
			helpText,
			id,
			inline,
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
			selected,
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
			'cs-datepicker',
			{
				'cs-datepicker-error': error,
				'cs-datepicker-read-only': readOnly,
				'cs-datepicker-clearable': isClearable,
				[`${className}`]: className
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
					{(label && !labelHidden && !inline) &&
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
							selected={selected}
							onCalendarClose={this.props.onCalendarClose}
							onChange={onChange}
							onChangeRaw={onChangeRaw}
							onKeyDown={this.closeOnFocusOutside}
							openToDate={openToDate}
							showYearDropdown={showYearDropdown}
							showMonthDropdown={showMonthDropdown}
							scrollableYearDropdown={scrollableYearDropdown}
							dropdownMode={dropdownMode}
							readOnly={readOnly}
							ref={this.datepickerRef}
							yearDropdownItemNumber={yearDropdownItemNumber}
							autoComplete="off"
							required={required}
							id={this.uniqueAutoId}
							inline={inline}
							autoFocus={autoFocus}
							value={value}
							{...rest}
						/>
					</div>
					{(!readOnly && !inline) && <CSIcon name="event" className="cs-datepicker-icon" size="0.875rem" />}
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</>
		);
	}
}

export default CSDatepicker;
