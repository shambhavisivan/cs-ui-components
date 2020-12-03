import React from 'react';
import classNames from 'classnames';
import CSLabel from '../CSLabel';
import { CSTooltipPosition } from '../CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import { v4 as uuidv4 } from 'uuid';

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
		variant: 'neutral'
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

		const radioGroupClasses = classNames(
			'cs-radio-group',
			{
				'cs-radio-error': error === true,
				[`${className}`]: className,
				[`cs-radio-${variant}`]: variant,
				'cs-radio-disabled': disabled
			}
		);

		const uniqueAutoId = this.props.id ? this.props.id : uuidv4();

		const childrenWithProps = React.Children.map(this.props.children, child => {
			if (child) {
				return (
					React.cloneElement(
						child as any,
						{
							ariaInvalid: (this.props.error),
							ariaRequired: (this.props.required)
						}
					)
				);
			}
		});

		return (
			<div className="cs-radio-wrapper" {...rest}>
				{(label && !labelHidden) &&
					<CSLabel
						htmlFor={uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
					/>
				}
				<div className={radioGroupClasses} id={uniqueAutoId}>
					{childrenWithProps}
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div>
		);
	}
}

export default CSRadio;
