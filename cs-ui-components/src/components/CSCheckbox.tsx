import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

export type CSCheckboxVariant = 'neutral' | 'brand';
export type CSCheckboxLabelPosition = 'left' | 'right';

export interface CSCheckboxProps {
	[key: string]: any;
	actions?: Array<CSCustomDataActionProps>;
	borderRadius?: string;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	indeterminate?: boolean;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSCheckboxLabelPosition;
	labelTitle?: boolean;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	variant?: CSCheckboxVariant;
}

class CSCheckbox extends React.Component<CSCheckboxProps> {
	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		checked: false,
	};

	public checkboxInnerRef: React.RefObject<HTMLInputElement>;

	private readonly uniqueAutoId: string;

	constructor(props: CSCheckboxProps) {
		super(props);

		this.checkboxInnerRef = React.createRef();
		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

	componentDidMount() {
		const { indeterminate } = this.props;

		if (indeterminate) this.setIndeterminate(true);
	}

	componentDidUpdate(prevProps: CSCheckboxProps) {
		const { indeterminate } = this.props;

		if (prevProps.indeterminate !== indeterminate) {
			this.setIndeterminate(indeterminate);
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { readOnly, onChange } = this.props;

		if (readOnly) {
			return;
		}

		if (onChange) {
			onChange(e);
		}
	}

	setIndeterminate = (value: boolean) => {
		if (this.checkboxInnerRef.current) {
			this.checkboxInnerRef.current.indeterminate = value;
		}
	}

	render() {
		const {
			actions,
			borderRadius,
			checked,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			icons,
			id,
			indeterminate,
			label,
			labelHidden,
			labelPosition,
			labelTitle,
			name,
			onChange,
			onKeyDown,
			readOnly,
			required,
			title,
			tooltipPosition,
			variant,
			...rest
		} = this.props;

		const checkboxClasses = classNames(
			'cs-checkbox',
			{
				'cs-checkbox-error': error === true,
				'cs-checkbox-read-only': readOnly,
			},
		);
		const checkboxWrapperClasses = classNames(
			'cs-checkbox-wrapper',
			{
				[`cs-checkbox-label-${labelPosition}`]: labelPosition,
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const checkboxFauxClasses = classNames(
			'cs-checkbox-faux',
			{
				[`cs-checkbox-${variant}`]: variant,
			},
		);
		const style: CSSProperties = {
			'--cs-checkbox-border-radius': borderRadius,
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
				<div
					className={checkboxWrapperClasses}
				>
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
					<div className="cs-checkbox-wrapper-inner">
						{/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
						<label
							className="cs-checkbox-group"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => event.stopPropagation()}
						>
							<input
								onChange={this.handleOnChange}
								className={checkboxClasses}
								type="checkbox"
								disabled={disabled}
								checked={checked}
								required={required}
								id={this.uniqueAutoId}
								name={name}
								ref={this.checkboxInnerRef}
								aria-label={label}
								aria-readonly={readOnly}
								aria-required={required}
								aria-invalid={error}
								onKeyDown={onKeyDown}
								{...rest}
							/>
							<span
								className={checkboxFauxClasses}
								title={title}
								style={style}
							/>
						</label>
						{error
							&& errorTooltip
							&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
						{/* Icons, Actions */}
						<div className="cs-checkbox-options">
							{/* Icons */}
							{icons?.length > 0
								? (
									<div className="cs-checkbox-option cs-checkbox-icons">
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
									<div className="cs-checkbox-option cs-checkbox-actions">
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
					{!errorTooltip
						&& error
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
