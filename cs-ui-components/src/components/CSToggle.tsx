import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition } from './CSTooltip';
import CSButton from './CSButton';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon, { CSIconOrigin } from './CSIcon';

export type CSToggleLabelPosition = 'default' | 'left';

export interface CSToggleProps {
	[key: string]: any;
	actions?: Array<CSCustomDataActionProps>;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSToggleLabelPosition;
	labelTitle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

class CSToggle extends React.Component<CSToggleProps> {
	public toggleInnerRef: React.Ref<HTMLInputElement>;

	private readonly uniqueAutoId: string | null;

	constructor(props: CSToggleProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();
		this.toggleInnerRef = React.createRef();
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

	render() {
		const {
			actions,
			checked,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			icons,
			id,
			label,
			labelHidden,
			labelPosition,
			labelTitle,
			onChange,
			readOnly,
			required,
			title,
			tooltipPosition,
			...rest
		} = this.props;

		const toggleClasses = classNames(
			'cs-toggle',
			{
				'cs-toggle-error': error === true,
				'cs-toggle-read-only': readOnly,
			},
		);

		const toggleElementWrapperClasses = classNames(
			'cs-toggle-element',
			{
				[`cs-toggle-label-${labelPosition}`]: labelPosition,
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
					iconOrigin={action.icon.iconOrigin as CSIconOrigin}
					iconSize={action.icon.iconSize}
					size={action.size}
				/>
			);
		}

		return (
			<>
				<div className={toggleElementWrapperClasses}>
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
					<div className="cs-toggle-wrapper-inner">
						{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
						<label
							className="cs-toggle-wrapper"
							onClick={(event) => event.stopPropagation()}
							onKeyDown={(event) => event.stopPropagation()}
						>
							<input
								onChange={this.handleOnChange}
								className={toggleClasses}
								type="checkbox"
								disabled={disabled}
								checked={checked}
								required={required}
								id={this.uniqueAutoId}
								aria-label={label}
								aria-readonly={readOnly}
								aria-required={required}
								aria-invalid={error}
								ref={this.toggleInnerRef}
								{...rest}
							/>
							<span className="cs-toggle-faux" title={title} />
						</label>
						{error
							&& errorTooltip
							&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
						{/* Icons, Actions */}
						<div className="cs-toggle-options">
							{/* Icons */}
							{icons?.length > 0
								? (
									<div className="cs-toggle-option cs-toggle-icons">
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
									<div className="cs-toggle-option cs-toggle-actions">
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

export default CSToggle;
