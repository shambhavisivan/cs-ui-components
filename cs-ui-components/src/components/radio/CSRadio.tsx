import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';

export type CSRadioVariant = 'neutral' | 'brand';

export interface CSRadioProps {
	[key: string]: any;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
	variant?: CSRadioVariant;
}

class CSRadio extends React.Component<CSRadioProps> {
	public static defaultProps = {
		variant: 'neutral',
	};

	constructor(props: CSRadioProps) {
		super(props);
	}

	render() {
		const {
			children,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			id,
			label,
			labelHidden,
			labelTitle,
			required,
			tooltipPosition,
			variant,
			...rest
		} = this.props;

		const radioWrapperClasses = classNames(
			'cs-radio-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const radioGroupClasses = classNames(
			'cs-radio-group',
			{
				'cs-radio-error': error === true,
				[`cs-radio-${variant}`]: variant,
				'cs-radio-disabled': disabled,
			},
		);

		const uniqueAutoId = this.props.id ? this.props.id : uuidv4();

		const childrenWithProps = React.Children.map(this.props.children, (child) => {
			if (child) {
				return (
					React.cloneElement(
						child as any,
						{
							ariaInvalid: this.props.error,
							ariaRequired: this.props.required,
							parentDisabled: this.props.disabled,
						},
					)
				);
			}
		});

		return (
			<div className={radioWrapperClasses} {...rest}>
				{(label && !labelHidden)
					&& (
						<CSLabel
							htmlFor={uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					)}
				<div className={radioGroupClasses} id={uniqueAutoId} aria-label={label}>
					{childrenWithProps}
				</div>
				{(error && errorMessage)
					&& <CSFieldErrorMsg message={errorMessage} />}
			</div>
		);
	}
}

export default CSRadio;
