import React, { CSSProperties } from 'react';
import DatePicker, { setDefaultLocale, registerLocale } from 'react-datepicker';
import {
	addDays, subDays, addYears, subYears,
} from 'date-fns';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import * as dateFnsLocales from 'date-fns/locale';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';

export type CSDatepickerDropdownMode = 'select' | 'scroll';

export interface CSDatepickerProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	clearable?: boolean;
	dateFormat?: string;
	disabled?: boolean;
	dropdownMode?: CSDatepickerDropdownMode;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	inline?: boolean;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: string;
	maxDate?: number;
	maxDateYear?: boolean;
	minDate?: number;
	minDateYear?: boolean;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onCalendarClose?: () => void;
	onChange: (date: Date) => void;
	onChangeRaw?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onClick?: () => void;
	onKeyDown?: (event: React.KeyboardEvent<any>) => void;
	onSelect?: (date: Date) => void;
	openToDate?: any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: Date | null | undefined;
	showMonthDropdown?: boolean;
	showYearDropdown?: boolean;
	timeFormat?: string;
	title?: string;
	todayButton?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
	width?: string;
	yearDropdownItemNumber?: number;
}

export interface CSDatepickerState {
	customDataWidth: number;
}

class CSDatepicker extends React.Component<CSDatepickerProps, CSDatepickerState> {
	public static defaultProps = {
		dateFormat: 'P',
		dropdownMode: 'scroll',
	};

	public datepickerInnerRef: React.RefObject<DatePicker>;

	private customDataRef: React.RefObject<HTMLDivElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSDatepickerProps) {
		super(props);

		this.datepickerInnerRef = React.createRef();
		this.customDataRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = { customDataWidth: 0 };

		if (props.locale) {
			const localeCode = props.locale.replace('-', '');
			registerLocale(props.locale, dateFnsLocales[localeCode]);
		} else {
			setDefaultLocale('en-GB');
			registerLocale('en-GB', dateFnsLocales.enGB);
		}
	}

	componentDidMount() {
		this.setState({
			customDataWidth: this.customDataRef.current?.getBoundingClientRect().width,
		});
	}

	handleOnKeyDown = (event: any) => {
		const { onKeyDown } = this.props;

		// If shift key and tab pressed together close datepicker
		if (event.shiftKey && event.key === KeyCode.Tab) {
			this.datepickerInnerRef.current.setOpen(false);
		}

		onKeyDown?.(event);
	}

	public render() {
		const {
			actions,
			autoFocus,
			borderRadius,
			className,
			clearable,
			dateFormat,
			disabled,
			dropdownMode,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			icons,
			id,
			inline,
			label,
			labelHidden,
			labelTitle,
			locale,
			maxDate,
			maxDateYear,
			minDate,
			minDateYear,
			name,
			onBlur,
			onCalendarClose,
			onChange,
			onChangeRaw,
			onClick,
			onKeyDown,
			onSelect,
			openToDate,
			placeholder,
			readOnly,
			required,
			scrollableYearDropdown,
			selected,
			showMonthDropdown,
			showYearDropdown,
			timeFormat,
			title,
			todayButton,
			tooltipPosition,
			value,
			width,
			yearDropdownItemNumber,
			...rest
		} = this.props;

		const { customDataWidth } = this.state;

		const datepickerClasses = classNames(
			'cs-datepicker-wrapper',
			{
				'cs-datepicker-wrapper-error': error,
				'cs-datepicker-wrapper-error-tooltip': errorTooltip,
				'cs-datepicker-wrapper-read-only': readOnly,
				'cs-datepicker-wrapper-clearable': clearable,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--datepicker-width': width,
			'--cs-datepicker-border-radius': borderRadius,
			'--cs-datepicker-custom-data-width': customDataWidth ? `${customDataWidth}px` : undefined,
		};
		const calcMaxDate = () => {
			if (maxDateYear) {
				return addYears(new Date(), maxDate);
			}
			return addDays(new Date(), maxDate);
		};
		const calcMinDate = () => {
			if (minDateYear) {
				return subYears(new Date(), minDate);
			}
			return subDays(new Date(), minDate);
		};

		return (
			<div className={datepickerClasses} style={style}>
				{label && !labelHidden && !inline && (
					<CSLabel
						htmlFor={this.uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
					/>
				)}
				<div className="cs-datepicker" title={title}>
					<DatePicker
						dateFormat={dateFormat}
						isClearable={clearable}
						placeholderText={placeholder}
						todayButton={todayButton}
						disabled={disabled}
						maxDate={maxDateYear || maxDate ? calcMaxDate() : undefined}
						minDate={minDateYear || minDate ? calcMinDate() : undefined}
						name={name}
						locale={locale}
						selected={selected}
						onBlur={onBlur}
						onCalendarClose={onCalendarClose}
						onChange={onChange}
						onChangeRaw={onChangeRaw}
						onInputClick={onClick}
						onKeyDown={this.handleOnKeyDown}
						onSelect={onSelect}
						openToDate={openToDate}
						showYearDropdown={showYearDropdown}
						showMonthDropdown={showMonthDropdown}
						scrollableYearDropdown={scrollableYearDropdown}
						dropdownMode={dropdownMode}
						readOnly={readOnly}
						ref={this.datepickerInnerRef}
						timeFormat={timeFormat}
						yearDropdownItemNumber={yearDropdownItemNumber}
						autoComplete="off"
						required={required}
						id={this.uniqueAutoId}
						inline={inline}
						autoFocus={autoFocus}
						value={value}
						{...rest}
					/>
					<CSCustomData
						ref={this.customDataRef}
						icons={icons}
						actions={actions}
					/>
				</div>
				{(!readOnly && !inline) && <CSIcon name="event" className="cs-datepicker-icon" size="0.875rem" />}
				{error && errorMessage && <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSDatepicker;
