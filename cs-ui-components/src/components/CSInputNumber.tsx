import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

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
		/* parent element which holds icons/actions/status/menu icon */
		if (this.inputNumberOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.inputNumberOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				inputNumberOptionsWrapperWidth: el.width + 16,
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

		const { inputNumberOptionsWrapperWidth } = this.state;

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

		/* Set actions array once data is available */
		let actionsList;
		if (actions?.length > 0) {
			actionsList = actions;
		}

		/* Render actions button */
		function getActionsBtn(action: CSCustomDataActionProps) {
			return (
				<CSButton
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
					iconOrigin={action.icon.iconOrigin}
					iconSize={action.icon.iconSize}
					size={action.size}
				/>
			);
		}

		return (
			<>
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
							value={value}
							type={type}
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

						{/* Icons, Actions */}
						<div className="cs-input-number-options" ref={this.inputNumberOptionsWrapperRef}>
							{/* Icons */}
							{icons?.length > 0
								? (
									<div className="cs-input-number-option cs-input-number-icons">
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
													) : (
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
									<div className="cs-input-number-option cs-input-number-actions">
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
						{error
							&& errorTooltip
							&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
					</div>
					{!errorTooltip
						&& error
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSInputNumber;
