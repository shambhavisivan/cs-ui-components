import React from 'react';
import classNames from 'classnames';
import CSDatepicker, { CSDatepickerProps } from './CSDatepicker';

export type CSDateTimePickerDropdownMode = 'select' | 'scroll';

export interface CSDateTimePickerProps
	extends Omit<CSDatepickerProps, 'onCalendarClose' | 'onChangeRaw' | 'openToDate'> {
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
}

class CSDateTimePicker extends React.Component<CSDateTimePickerProps> {
	public static defaultProps = {
		dateFormat: 'MMMM d, yyyy h:mm aa',
		dropdownMode: 'scroll',
	};

	public render() {
		const {
			borderRadius,
			className,
			dateFormat,
			disabled,
			dropdownMode,
			error,
			errorMessage,
			errorTooltip,
			forwardRef,
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
			onKeyDown,
			onSelect,
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
			timeFormat,
			timeIntervals,
			timeCaption,
			...rest
		} = this.props;

		const dateTimePickerClasses = classNames(
			'cs-datetimepicker',
			{
				[`${className}`]: className,
			},
		);

		return (
			<CSDatepicker
				showTimeSelect
				onChange={onChange}
				selected={selected}
				label={label}
				{...this.props}
				{...rest}
				className={dateTimePickerClasses}
				ref={forwardRef}
			/>
		);
	}
}

const CSDateTimePickerWithRefs: React.ForwardRefExoticComponent<CSDateTimePickerProps & React.RefAttributes<CSDatepicker>> = React.forwardRef<CSDatepicker, CSDateTimePickerProps>((props: CSDateTimePickerProps, ref) => <CSDateTimePicker {...props} forwardRef={ref} />);

export default CSDateTimePickerWithRefs;
