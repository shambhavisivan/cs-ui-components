import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import { CSTooltipPosition } from './CSTooltip';

export type CSInputSearchBorderType = 'round' | 'square';

export interface CSInputSearchProps {
	autoFocus?: boolean;
	borderType?: CSInputSearchBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	hidden?: boolean;
	iconPosition?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
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
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
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
			target.value = '';
			onChange(event as React.ChangeEvent<HTMLInputElement>);
			// reset target ref value
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
		labelHidden: false
	};

	private input: HTMLInputElement;

	constructor(props: CSInputSearchProps) {
		super(props);
	 const value = typeof props.value === undefined ? '' : props.value;
		this.state = {
			value
		};
	}

	saveInputSearch = (node: HTMLInputElement) => {
		this.input = node;
	}

	setValue(value: string, callback?: () => void) {
		this.setState({value}, callback);
	}

	clearSearch = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		this.setValue('');
		resolveOnChange(this.input, e, this.props.onChange);
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setValue(e.target.value);
		resolveOnChange(this.input, e, this.props.onChange);
	}
	handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(e);
		}
	}

	render() {
		const inputSearchWrapperClasses = classNames(
			{
				'cs-element-hidden': this.props.hidden
			}
		);

		const inputSearchGroupClasses = classNames(
			'cs-input-search-group',
			{
				'cs-clear': this.state.value,
				'cs-icon-left': this.props.iconPosition === 'left',
				'cs-icon-right': this.props.iconPosition === 'right',
				[`${this.props.className}`]: this.props.className
			}
		);

		const inputSearchClasses = classNames(
			'cs-input-search',
			{
				[`cs-input-search-${this.props.borderType}`]: this.props.borderType,
				'cs-input-search-error': this.props.error
			}
		);

		const style: CSSProperties = {
			'--search-width': this.props.width
		};

		return (
			<>
				<div className={inputSearchWrapperClasses}>
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
					}
					<div className={inputSearchGroupClasses} style={style}>
						<CSIcon name="search" className="cs-input-search-icon" />
						<input className={inputSearchClasses}
							autoFocus={this.props.autoFocus}
							onChange={this.handleOnChange}
							id={this.props.id}
							placeholder={this.props.placeholder}
							disabled={this.props.disabled}
							required={this.props.required}
							value={fixControlledValue(this.state.value)}
							type="text"
							autoComplete="off"
							ref={this.saveInputSearch}
							onKeyDown={this.handleOnKeyDown}
						/>
						{this.state.value &&
							<button
								className="cs-input-search-clear"
								onClick={this.clearSearch}
								aria-label="close"
							>
								<CSIcon name="close"/>
							</button>
						}
					</div>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputSearch;
