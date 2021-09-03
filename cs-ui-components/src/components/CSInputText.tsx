import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

export interface CSInputTextProps {
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
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	maxLength?: number;
	name?: string;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	value?: string;
}

export interface CSInputTextState {
	inputTextOptionsWrapperWidth: number | null;
}

class CSInputText extends React.Component<CSInputTextProps, CSInputTextState> {
	public inputTextInnerRef: React.RefObject<HTMLInputElement>;

	private readonly uniqueAutoId: string | null;

	private inputTextOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSInputTextProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			inputTextOptionsWrapperWidth: null,
		};

		this.inputTextOptionsWrapperRef = React.createRef();
		this.inputTextInnerRef = React.createRef();
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.inputTextOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.inputTextOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				inputTextOptionsWrapperWidth: el.width + 12,
			});
		}
	}

	onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onFocus } = this.props;
		if (onFocus) {
			onFocus(e);
		}
	}

	onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
		const { onBlur } = this.props;
		if (onBlur) {
			onBlur(e);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props;

		if (onChange) {
			onChange(e);
		}
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
			icons,
			id,
			label,
			labelHidden,
			labelTitle,
			maxLength,
			name,
			onBlur,
			onChange,
			onFocus,
			placeholder,
			readOnly,
			required,
			title,
			tooltipPosition,
			type,
			value,
			...rest
		} = this.props;

		const { inputTextOptionsWrapperWidth } = this.state;

		const inputTextWrapperClasses = classNames(
			'cs-input-text-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const inputTextClasses = classNames(
			'cs-input-text',
			{
				'cs-input-text-error': error,
				'cs-input-text-errorTooltip': errorTooltip,
			},
		);
		const style: CSSProperties = {
			'--cs-input-text-border-radius': borderRadius,
			'--cs-input-text-options-spacing': `${inputTextOptionsWrapperWidth}px`,
		};

		/* Set actions array once data is available */
		let actionsList;
		if (actions?.length > 0) {
			actionsList = actions;
		}

		return (
			<>
				<div className={inputTextWrapperClasses} style={style}>
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
					<div className="cs-input-text-wrapper-inner">
						<input
							className={inputTextClasses}
							id={this.uniqueAutoId}
							placeholder={placeholder}
							disabled={disabled}
							maxLength={maxLength}
							readOnly={readOnly}
							required={required}
							value={value}
							type="text"
							aria-label={label}
							aria-required={required}
							aria-invalid={error}
							autoComplete="off"
							onChange={this.handleOnChange}
							name={name}
							onBlur={this.onBlur}
							onFocus={this.onFocus}
							title={title}
							ref={this.inputTextInnerRef}
							{...rest}
						/>
						<div className="cs-input-text-options" ref={this.inputTextOptionsWrapperRef}>
							{/* Icons */}
							{icons?.length > 0 ? (<CSCustomDataIcons icons={icons} />) : null}
							{/* Actions */}
							{actionsList?.length > 0 ? (<CSCustomDataActions actions={actions} />) : null}
						</div>
						{error
							&& errorTooltip
							&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
					</div>
					{!errorTooltip
						&& error
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSInputText;
