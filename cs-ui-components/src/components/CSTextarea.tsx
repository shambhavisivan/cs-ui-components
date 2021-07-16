import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';

export interface CSTextareaProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	hidden?: boolean;
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

class CSTextarea extends React.Component<CSTextareaProps> {

	public static defaultProps = {
		rows: 3
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		const {
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			hidden,
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

		const textareaClasses = classNames(
			'cs-textarea',
			{
				'cs-textarea-error': error
			}
		);
		const style: CSSProperties = {
			'--max-height': maxHeight,
			'--cs-textarea-border-radius': borderRadius
		};
		const textareaWrapperClasses = classNames(
			'cs-textarea-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className
			}
		);
		return (
			<>
				<div className={textareaWrapperClasses}>
					{(label && !labelHidden) &&
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					}
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
						{...rest}
					/>
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSTextarea;
