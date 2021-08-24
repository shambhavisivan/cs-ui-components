import React, { CSSProperties } from 'react';
import DatePicker from 'react-datepicker';
import {
	addDays, subDays, addYears, subYears,
} from 'date-fns';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon, { CSIconOrigin } from './CSIcon';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';

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
	onCalendarClose?: () => void;
	onChange: (date: Date) => any;
	onChangeRaw?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onKeyDown?: (event: React.KeyboardEvent<any>) => any;
	onSelect?: (date: Date) => any;
	openToDate?: any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: Date | null | undefined;
	showMonthDropdown?: boolean;
	showYearDropdown?: boolean;
	title?: string;
	todayButton?: boolean;
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

	public datepickerRef: React.RefObject<DatePicker>;

	private datepickerOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSDatepickerProps) {
		super(props);

		this.datepickerRef = React.createRef();
		this.datepickerOptionsWrapperRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			datepickerOptionsWrapperWidth: null,
		};
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.datepickerOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.datepickerOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				datepickerOptionsWrapperWidth: el.width + 32,
			});
		}
	}

	handleOnKeyDown = (event: any) => {
		const { onKeyDown } = this.props;

		// If shift key and tab pressed together close datepicker
		if (event.shiftKey && event.key === KeyCode.Tab) {
			this.datepickerRef.current.setOpen(false);
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
			onCalendarClose,
			onChange,
			onChangeRaw,
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
			'cs-datepicker',
			{
				'cs-datepicker-error': error,
				'cs-datepicker-error-tooltip': errorTooltip,
				'cs-datepicker-read-only': readOnly,
				'cs-datepicker-clearable': isClearable,
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

		/* Set actions array once data is available */
		let actionsList;
		if (actions?.length > 0) {
			actionsList = actions;
		}

		/* Render actions button */
		function getActionsBtn(action: CSCustomDataActionProps) {
			return (
				<CSButton
					className="cs-text-display-item"
					btnStyle={action.btnStyle}
					btnType={action.btnType}
					label={action.name}
					labelHidden={action.labelHidden}
					onClick={(event: any) => {
						event.stopPropagation();
						action.action();
					}}
					iconColor={action.icon.iconColor}
					iconName={action.icon.iconName}
					iconOrigin={action.icon.iconOrigin as CSIconOrigin}
					iconSize={action.icon.iconSize}
					size={action.size}
				/>
			);
		}
		return (
			<>
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
							onCalendarClose={onCalendarClose}
							onChange={onChange}
							onChangeRaw={onChangeRaw}
							onKeyDown={this.handleOnKeyDown}
							onSelect={onSelect}
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

					{/* Icons, Actions */}
					<div className="cs-datepicker-options" ref={this.datepickerOptionsWrapperRef}>
						{/* Icons */}
						{icons?.length > 0
							? (
								<div className="cs-datepicker-option cs-datepicker-icons">
									{icons.map((icon) => {
										let tooltipContents;
										if (icon.getTooltip) {
											tooltipContents = icon.getTooltip;
										}
										return (
											<React.Fragment key={icon.iconName}>
												{icon.getTooltip ? (
													<CSTooltip
														content={tooltipContents.content}
														delayTooltip={tooltipContents.delay}
														height={tooltipContents.height}
														iconName={icon.iconName}
														iconColor={icon.iconColor}
														iconOrigin={icon.iconOrigin as CSIconOrigin}
														iconSize={icon.iconSize as CSTooltipIconSize}
														maxHeight={tooltipContents.maxHeight}
														maxWidth={tooltipContents.maxWidth}
														padding={tooltipContents.padding}
														position={tooltipContents.position}
														stickyOnClick={tooltipContents.stickyOnClick}
														variant={tooltipContents.variant}
														width={tooltipContents.width as CSTooltipIconSize}
													/>
												) :	(
													<CSIcon
														className="cs-text-display-item"
														name={icon.iconName}
														color={icon.iconColor}
														origin={icon.iconOrigin as CSIconOrigin}
														size={icon.iconSize}
													/>
												)}
											</React.Fragment>
										);
									})}
								</div>
							)
							: null}

						{/* Actions */}
						{actionsList?.length > 0
							? (
								<div className="cs-datepicker-option cs-datepicker-actions">
									{actions.map((action: CSCustomDataActionProps) => {
										let tooltipContents;
										if (action.getTooltip) {
											tooltipContents = action.getTooltip;
										}
										return (
											<React.Fragment key={action.name}>
												{tooltipContents ? (
													<CSTooltip
														content={tooltipContents.content}
														delayTooltip={tooltipContents.delay}
														height={tooltipContents.height}
														maxHeight={tooltipContents.maxHeight}
														maxWidth={tooltipContents.maxWidth}
														padding={tooltipContents.padding}
														position={tooltipContents.position}
														stickyOnClick={tooltipContents.stickyOnClick}
														variant={tooltipContents.variant}
														width={tooltipContents.width as CSTooltipIconSize}
													>
														{getActionsBtn(action)}
													</CSTooltip>
												) : getActionsBtn(action)}
											</React.Fragment>
										);
									})}
								</div>
							)
							: null}
					</div>
					{(!readOnly && !inline) && <CSIcon name="event" className="cs-datepicker-icon" size="0.875rem" />}
					{error
						&& errorTooltip
						&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
				</div>
				{!errorTooltip
					&& error
					&& <CSFieldErrorMsg message={errorMessage} />}
			</>
		);
	}
}

export default CSDatepicker;
