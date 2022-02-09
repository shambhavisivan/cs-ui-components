import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import {
	addDays, subDays, addYears, subYears,
} from 'date-fns';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';
import { CSCustomDataIconProps, CSCustomDataActionProps } from './custom-data/CSCustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

export type CSDatepickerDropdownMode = 'select' | 'scroll';

export interface CSDatepickerProps {
	[key: string]: any;
	actions?: Array<CSCustomDataActionProps>;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	dateFormat?: string;
	disabled?: boolean;
	dropdownMode?: CSDatepickerDropdownMode;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	icons?: Array<CSCustomDataIconProps>;
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
	title?: string;
	todayButton?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
	width?: string;
	yearDropdownItemNumber?: number;
}

export interface CSDatepickerState {
	datepickerOptionsWrapperWidth: number | null;
}

class CSDatepicker extends React.Component<CSDatepickerProps, CSDatepickerState> {
	public static defaultProps = {
		dateFormat: 'dd-MM-yyyy',
		dropdownMode: 'scroll',
	};

	public datepickerInnerRef: React.RefObject<DatePicker>;

	private datepickerOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSDatepickerProps) {
		super(props);

		this.datepickerInnerRef = React.createRef();
		this.datepickerOptionsWrapperRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			datepickerOptionsWrapperWidth: null,
		};
	}

	componentDidMount() {
		/* Get width of parent element and set state to width + 32 for extra spacing */
		const datepickerOptionsRef = this.datepickerOptionsWrapperRef.current?.getBoundingClientRect();
		this.setState({
			datepickerOptionsWrapperWidth: (datepickerOptionsRef?.width ?? 0) + 32,
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
			title,
			todayButton,
			tooltipPosition,
			value,
			width,
			yearDropdownItemNumber,
			...rest
		} = this.props;

		const { datepickerOptionsWrapperWidth } = this.state;

		const datepickerClasses = classNames(
			'cs-datepicker-wrapper',
			{
				'cs-datepicker-wrapper-error': error,
				'cs-datepicker-wrapper-error-tooltip': errorTooltip,
				'cs-datepicker-wrapper-read-only': readOnly,
				'cs-datepicker-wrapper-clearable': isClearable,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--datepicker-width': width,
			'--cs-datepicker-border-radius': borderRadius,
			'--cs-datepicker-options-spacing': `${datepickerOptionsWrapperWidth}px`,
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
				{(label && !labelHidden && !inline)
					&& (
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
						isClearable={isClearable}
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
				{(icons?.length || actions?.length)
					&& (
						<div className="cs-datepicker-options" ref={this.datepickerOptionsWrapperRef}>
							{icons?.length && <CSCustomDataIcons icons={icons} />}
							{actions?.length && <CSCustomDataActions actions={actions} />}
						</div>
					)}
				{(!readOnly && !inline) && <CSIcon name="event" className="cs-datepicker-icon" size="0.875rem" />}
				{error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSDatepicker;
