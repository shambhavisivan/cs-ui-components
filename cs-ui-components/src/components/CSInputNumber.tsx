import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

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
	actions?: Array<CSCustomDataActionProps>;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	hideSpinner?: boolean;
	icons?: Array<CSCustomDataIconProps>;
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
	onChange?: (value?: any) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
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
	inputNumberOptionsWrapperWidth: number | null;
	showLocaleFormat?: boolean;
	formattedValue?: string;
}

class CSInputNumber extends React.Component<CSInputNumberProps, CSInputNumberState> {
	public static defaultProps = {
		type: 'number',
	};

	public inputNumberInnerRef: React.RefObject<HTMLInputElement>;

	private inputNumberOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSInputNumberProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			inputNumberOptionsWrapperWidth: null,
		};

		this.inputNumberOptionsWrapperRef = React.createRef();
		this.inputNumberInnerRef = React.createRef();
	}

	componentDidMount() {
		const { locale, value } = this.props;

		/* Get width of parent element and set state to width + 16 for extra spacing */
		const inputNumberOptionsRect = this.inputNumberOptionsWrapperRef.current?.getBoundingClientRect();
		this.setState({
			inputNumberOptionsWrapperWidth: (inputNumberOptionsRect?.width ?? 0) + 16,
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

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { onKeyDown } = this.props;

		if (onKeyDown) {
			onKeyDown(e);
		}
	}

	handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		const { onPaste } = this.props;

		if (onPaste) {
			onPaste(e);
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

		const { formattedValue, inputNumberOptionsWrapperWidth, showLocaleFormat } = this.state;

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
			'--cs-input-number-options-spacing': `${inputNumberOptionsWrapperWidth}px`,
		};

		const setType = () => {
			if (locale) {
				return showLocaleFormat ? 'text' : 'number';
			} return type;
		};

		return (
			<div className={inputNumberWrapperClasses} style={style}>
				{(label && !labelHidden)
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
						onKeyDown={this.handleOnKeyDown}
						onPaste={this.handleOnPaste}
						title={title}
						step={step}
						ref={this.inputNumberInnerRef}
						{...rest}
					/>
					{(actions?.length || icons?.length)
						&& (
							<div className="cs-input-number-options" ref={this.inputNumberOptionsWrapperRef}>
								{icons?.length && <CSCustomDataIcons icons={icons} />}
								{actions?.length && <CSCustomDataActions actions={actions} />}
							</div>
						)}
				</div>
				{error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSInputNumber;
