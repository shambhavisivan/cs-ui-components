import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

export interface CSTextareaProps {
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
	maxHeight?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rows?: number;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

export interface CSTextareaState {
	textareaOptionsWrapperWidth: number | null;
}

class CSTextarea extends React.Component<CSTextareaProps, CSTextareaState> {
	public static defaultProps = {
		rows: 3,
	};

	public textareaInnerRef: React.RefObject<HTMLTextAreaElement>;

	private readonly uniqueAutoId: string;

	private textareaOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSTextareaProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			textareaOptionsWrapperWidth: null,
		};

		this.textareaOptionsWrapperRef = React.createRef();
		this.textareaInnerRef = React.createRef();
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.textareaOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.textareaOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				textareaOptionsWrapperWidth: el.width + 12,
			});
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
			maxHeight,
			onChange,
			placeholder,
			readOnly,
			required,
			rows,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const { textareaOptionsWrapperWidth } = this.state;

		const textareaClasses = classNames(
			'cs-textarea',
			{
				'cs-textarea-error': error,
				'cs-textarea-error-tooltip': errorTooltip,
			},
		);
		const style: CSSProperties = {
			'--max-height': maxHeight,
			'--cs-textarea-border-radius': borderRadius,
			'--cs-textarea-options-spacing': `${textareaOptionsWrapperWidth}px`,
		};
		const textareaWrapperClasses = classNames(
			'cs-textarea-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);

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
				<div className={textareaWrapperClasses}>
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
					<div className="cs-textarea-wrapper-inner">
						<textarea
							className={textareaClasses}
							id={this.uniqueAutoId}
							placeholder={placeholder}
							disabled={disabled}
							readOnly={readOnly}
							required={required}
							rows={readOnly ? 1 : rows}
							aria-label={label}
							aria-required={required}
							aria-invalid={error}
							value={value}
							style={style}
							onChange={this.handleOnChange}
							title={title}
							ref={this.textareaInnerRef}
							{...rest}
						/>
						{/* Icons, Actions */}
						<div className="cs-textarea-options" ref={this.textareaOptionsWrapperRef}>
							{/* Icons */}
							{icons?.length > 0
								? (
									<div className="cs-textarea-option cs-textarea-icons">
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
									<div className="cs-textarea-option cs-textarea-actions">
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

export default CSTextarea;
