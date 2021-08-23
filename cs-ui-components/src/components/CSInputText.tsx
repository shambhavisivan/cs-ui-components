import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize } from './CSTooltip';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

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
	private readonly uniqueAutoId: string | null;

	private inputTextOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSInputTextProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			inputTextOptionsWrapperWidth: null,
		};

		this.inputTextOptionsWrapperRef = React.createRef();
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
					iconOrigin={action.icon.iconOrigin as CSIconOrigin}
					iconSize={action.icon.iconSize}
					size={action.size}
				/>
			);
		}
		return (
			<>
				<div className={inputTextWrapperClasses}>
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
							style={style}
							{...rest}
						/>

						{/* Icons, Actions */}
						<div className="cs-input-text-options" ref={this.inputTextOptionsWrapperRef}>
							{/* Icons */}
							{icons?.length > 0
								? (
									<div className="cs-input-text-option cs-input-text-icons">
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
									<div className="cs-input-text-option cs-input-text-actions">
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
					</div>

					{(error && errorMessage)
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSInputText;
