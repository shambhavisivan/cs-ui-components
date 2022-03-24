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

const CSDateTimePicker = ({
	className,
	dateFormat = 'Pp',
	dropdownMode = 'scroll',
	forwardRef,
	label,
	onChange,
	selected,
	timeFormat = 'p',
	...rest
}: CSDateTimePickerProps) => {
	const dateTimePickerClasses = classNames(
		'cs-datetimepicker',
		{
			[`${className}`]: className,
		},
	);

	return (
		<CSDatepicker
			showTimeSelect
			timeFormat={timeFormat}
			onChange={onChange}
			selected={selected}
			label={label}
			dateFormat={dateFormat}
			dropdownMode={dropdownMode}
			className={dateTimePickerClasses}
			ref={forwardRef}
			{...rest}
		/>
	);
};

const CSDateTimePickerWithRefs: React.ForwardRefExoticComponent<CSDateTimePickerProps & React.RefAttributes<CSDatepicker>> = React.forwardRef<CSDatepicker, CSDateTimePickerProps>((props: CSDateTimePickerProps, ref) => <CSDateTimePicker {...props} forwardRef={ref} />);

export default CSDateTimePickerWithRefs;
