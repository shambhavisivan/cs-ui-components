import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import KeyCode from '../util/KeyCode';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

export interface CSSelectProps {
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
	name?: string;
	onChange?: (value: any) => void;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
}

export interface CSSelectState {
	selectOptionsWrapperWidth: number | null;
}

class CSSelect extends React.Component<CSSelectProps, CSSelectState> {
	public static defaultProps = {
		labelHidden: false,
	};

	public selectInnerRef: React.RefObject<HTMLSelectElement>;

	private readonly uniqueAutoId: string;

	private selectOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSSelectProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			selectOptionsWrapperWidth: null,
		};

		this.selectOptionsWrapperRef = React.createRef();
		this.selectInnerRef = React.createRef();
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.selectOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.selectOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				selectOptionsWrapperWidth: el.width + 40,
			});
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { onChange } = this.props;

		if (onChange) {
			onChange(e.target.value);
		}
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
		if (e.key !== KeyCode.Tab) {
			e.preventDefault();
		}
	}

	render() {
		const {
			actions,
			borderRadius,
			children,
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
			name,
			onChange,
			readOnly,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const { selectOptionsWrapperWidth } = this.state;

		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': error,
				'cs-select-error-tooltip': errorTooltip,
				'cs-select-read-only': readOnly,
			},
		);
		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--cs-select-border-radius': borderRadius,
			'--cs-select-options-spacing': `${selectOptionsWrapperWidth}px`,
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
			<div className={selectWrapperClasses}>
				{(label && !labelHidden)
					&& (
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
							className={disabled ? 'cs-label-disabled' : ''}
						/>
					)}
				<div className="cs-select-wrapper-inner">
					<div className="cs-select-group">
						<select
							className={selectClasses}
							id={this.uniqueAutoId}
							required={required}
							disabled={disabled}
							aria-label={label}
							aria-required={required}
							aria-invalid={error}
							aria-readonly={readOnly}
							onChange={this.handleOnChange}
							onKeyDown={readOnly ? this.handleOnKeyDown : undefined}
							name={name}
							value={value}
							title={title}
							style={style}
							ref={this.selectInnerRef}
							{...rest}
						>
							{children}
						</select>
						{!readOnly
							&& <CSIcon name="down" />}
					</div>

					{/* Icons, Actions */}
					<div className="cs-select-options" ref={this.selectOptionsWrapperRef}>
						{/* Icons */}
						{icons?.length > 0
							? (
								<div className="cs-select-option cs-select-icons">
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
								<div className="cs-select-option cs-select-actions">
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
				{error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSSelect;
