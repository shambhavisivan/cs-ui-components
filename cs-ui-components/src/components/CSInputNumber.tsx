import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';

export interface CSInputNumberNumberLocale {
	numLocale: string;
	options?: {
		currency?: string;
		style?: CSInputNumberLocaleStyle;
		maximumFractionDigits?: number;
		minimumFractionDigits?: number;
	}
}

export type CSInputNumberLocaleStyle = 'decimal' | 'currency' | 'percent' | 'unit';

export interface CSInputNumberProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	hideSpinner?: boolean;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	locale?: CSInputNumberNumberLocale;
	max?: any;
	maxLength?: number;
	min?: any;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (value?: any) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	step?: string;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	type?: string;
	value?: any;
}

export interface CSInputNumberState {
	customDataWidth: number;
	showLocaleFormat?: boolean;
	formattedValue?: string;
}

class CSInputNumber extends React.Component<CSInputNumberProps, CSInputNumberState> {
	public static defaultProps = {
		type: 'number',
	};

	public inputNumberInnerRef: React.RefObject<HTMLInputElement>;

	private customDataRef: React.RefObject<HTMLDivElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSInputNumberProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = { customDataWidth: 0 };

		this.customDataRef = React.createRef();
		this.inputNumberInnerRef = React.createRef();
	}

	componentDidMount() {
		const { locale, value } = this.props;

		this.setState({
			customDataWidth: Number(this.customDataRef.current?.getBoundingClientRect().width),
		});

		if (locale) {
			this.setState({
				showLocaleFormat: true,
			});
			this.formatNumber(value, locale);
		}
	}

	componentDidUpdate(prevProps: CSInputNumberProps) {
		const { locale, value } = this.props;
		if (locale && prevProps.value !== value) {
			this.formatNumber(value, locale);
		}
	}

	onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onFocus, locale } = this.props;

		if (locale) {
			this.setState({ showLocaleFormat: false });
		}

		if (onFocus) {
			onFocus(e);
		}
	}

	onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onBlur, locale } = this.props;

		if (locale) {
			this.setState({ showLocaleFormat: true });
		}

		if (onBlur) {
			onBlur(e);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props;

		if (onChange) {
			onChange(e.target.value);
		}
	}

	formatNumber = (value: any, locale: CSInputNumberNumberLocale) => {
		const { numLocale, options } = locale;

		const formattedValue = new Intl.NumberFormat(numLocale, { ...options }).format(value);
		this.setState({ formattedValue });
	}

	render() {
		const {
			actions,
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			hideSpinner,
			icons,
			id,
			label,
			labelHidden,
			labelTitle,
			locale,
			max,
			maxLength,
			min,
			name,
			onBlur,
			onChange,
			onClick,
			onFocus,
			onKeyDown,
			onPaste,
			placeholder,
			readOnly,
			required,
			step,
			title,
			tooltipPosition,
			type,
			value,
			...rest
		} = this.props;

		const { formattedValue, customDataWidth, showLocaleFormat } = this.state;

		const inputNumberWrapperClasses = classNames(
			'cs-input-number-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				'cs-input-number-error': error,
				'cs-input-number-error-tooltip': errorTooltip,
				[`cs-input-number-hide-spinner-${hideSpinner}`]: hideSpinner,
			},
		);
		const style: CSSProperties = {
			'--cs-input-number-border-radius': borderRadius,
			'--cs-input-number-custom-data-width': customDataWidth ? `${customDataWidth}px` : undefined,
		};

		const setType = () => {
			if (locale) {
				return showLocaleFormat ? 'text' : 'number';
			} return type;
		};

		return (
			<div className={inputNumberWrapperClasses} style={style}>
				{label && !labelHidden && (
					<CSLabel
						htmlFor={this.uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
					/>
				)}
				<div className="cs-input-number-wrapper-inner">
					<input
						className={inputNumberClasses}
						id={this.uniqueAutoId}
						placeholder={placeholder}
						min={min}
						max={max}
						name={name}
						maxLength={type === 'text' ? maxLength : undefined}
						readOnly={readOnly}
						required={required}
						disabled={disabled}
						value={showLocaleFormat ? formattedValue : value}
						type={setType()}
						role="spinbutton"
						aria-label={label}
						aria-required={required}
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={value}
						aria-invalid={error}
						autoComplete="off"
						onBlur={this.onBlur}
						onFocus={this.onFocus}
						onChange={this.handleOnChange}
						onKeyDown={onKeyDown}
						onPaste={onPaste}
						onClick={onClick}
						title={title}
						step={step}
						ref={this.inputNumberInnerRef}
						{...rest}
					/>
					<CSCustomData
						ref={this.customDataRef}
						icons={icons}
						actions={actions}
					/>
				</div>
				{error && errorMessage && <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSInputNumber;
