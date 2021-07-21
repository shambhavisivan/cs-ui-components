import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSButton from './CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';

export type CSInputSearchIconPosition = 'left' | 'right';

export interface CSInputSearchProps {
	[key: string]: any;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	iconPosition?: CSInputSearchIconPosition;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClearSearch?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
	width?: string;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

export function resolveOnChange(
	target: HTMLInputElement,
	e:
		React.ChangeEvent<HTMLInputElement> |
		React.MouseEvent<HTMLElement, MouseEvent>,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
) {
	if (onChange) {
		let event = e;
		if (e.type === 'click') {
			// click clear icon
			event = Object.create(e);
			event.target = target;
			event.currentTarget = target;
			const originalInputValue = target.value;
			// change target ref value cause e.target.value should be '' when clear input
			// eslint-disable-next-line no-param-reassign
			target.value = '';
			onChange(event as React.ChangeEvent<HTMLInputElement>);
			// reset target ref value
			// eslint-disable-next-line no-param-reassign
			target.value = originalInputValue;
			return;
		}
		onChange(event as React.ChangeEvent<HTMLInputElement>);
	}
}

export interface CSInputSearchState {
	value: string;
}

class CSInputSearch extends React.Component<CSInputSearchProps, CSInputSearchState> {
	public static defaultProps = {
		iconPosition: 'left',
		labelHidden: false,
	};

	private input: HTMLInputElement;

	private readonly uniqueAutoId: string;

	constructor(props: CSInputSearchProps) {
		super(props);

		this.state = {
			value: props.value ?? '',
		};

		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

	componentDidUpdate(prevProps: CSInputSearchProps) {
		const { value } = this.props;

		if (prevProps.value !== value) {
			this.setValue(value);
		}
	}

	setValue(value: string, callback?: () => void) {
		this.setState({ value }, callback);
	}

	clearSearch = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const { onChange, onClearSearch } = this.props;

		this.setValue('');
		resolveOnChange(this.input, e, onChange);

		if (onClearSearch) {
			onClearSearch();
		}

		this.input.focus();
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

		this.setValue(e.target.value);
		resolveOnChange(this.input, e, onChange);
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { onKeyDown } = this.props;

		if (onKeyDown) {
			onKeyDown(e);
		}
	}

	render() {
		const {
			autoFocus,
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			iconPosition,
			id,
			label,
			labelHidden,
			labelTitle,
			onBlur,
			onChange,
			onClearSearch,
			onFocus,
			onKeyDown,
			placeholder,
			required,
			title,
			tooltipPosition,
			value,
			width,
			...rest
		} = this.props;

		const { value: valueState } = this.state;

		const inputSearchWrapperClasses = classNames(
			'cs-input-search-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);

		const inputSearchGroupClasses = classNames(
			'cs-input-search-group',
			{
				'cs-clear': valueState,
				'cs-icon-left': iconPosition === 'left',
				'cs-icon-right': iconPosition === 'right',
			},
		);

		const inputSearchClasses = classNames(
			'cs-input-search',
			{
				'cs-input-search-error': error,
			},
		);

		const inputClearClasses = classNames(
			'cs-input-search-clear',
			{
				'cs-input-search-clear-tooltip': errorTooltip,
			},
		);

		const style: CSSProperties = {
			'--search-width': width,
			'--cs-input-search-border-radius': borderRadius,
		};

		return (
			<>
				<div className={inputSearchWrapperClasses}>
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
					<div className={inputSearchGroupClasses} style={style}>
						<CSIcon
							name="search"
							className="cs-input-search-icon"
							color="var(--cs-input-icon-fill)"
							size="0.875rem"
						/>
						<input
							className={inputSearchClasses}
							autoFocus={autoFocus}
							onChange={this.handleOnChange}
							id={this.uniqueAutoId}
							placeholder={placeholder}
							disabled={disabled}
							required={required}
							aria-label={label}
							aria-invalid={error}
							aria-required={required}
							value={fixControlledValue(valueState)}
							type="text"
							autoComplete="off"
							ref={(node) => { this.input = node; }}
							onKeyDown={this.handleOnKeyDown}
							onBlur={this.onBlur}
							onFocus={this.onFocus}
							title={title}
							{...rest}
						/>
						{valueState
							&& (
								<CSButton
									btnType="transparent"
									btnStyle="brand"
									className={inputClearClasses}
									iconColor="var(--cs-input-clear)"
									iconName="close"
									labelHidden
									label="clear"
									onClick={this.clearSearch}
									size="small"
								/>
							)}
						{error
							&& errorMessage
							&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
					</div>
				</div>
			</>
		);
	}
}

export default CSInputSearch;
