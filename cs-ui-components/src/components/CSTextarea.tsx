import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import { v4 as uuidv4 } from 'uuid';

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

export interface CSTextareaState {
	value: string;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSTextarea extends React.Component<CSTextareaProps, CSTextareaState> {

	public static defaultProps = {
		rows: 3
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSTextareaProps) {
		super(props);
		const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({ value: e.target.value });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	componentDidUpdate(prevProps: CSTextareaProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({ value: this.props.value });
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
				[`${className}`]: className,
				'cs-element-hidden': hidden
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
						rows={rows}
						aria-label={label}
						aria-required={required}
						aria-invalid={error}
						value={fixControlledValue(this.state.value)}
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
