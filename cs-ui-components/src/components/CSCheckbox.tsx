import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

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
						<div className="cs-checkbox-options">
							{/* Icons */}
							{icons?.length > 0 ? (<CSCustomDataIcons icons={icons} />) : null}
							{/* Actions */}
							{actionsList?.length > 0 ? (<CSCustomDataActions actions={actions} />) : null}
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
