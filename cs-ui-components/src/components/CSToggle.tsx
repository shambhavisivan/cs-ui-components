import React from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

export type CSToggleLabelPosition = 'default' | 'left';

export interface CSToggleProps {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	id?: string;
	label: string;
	labelPosition?: CSToggleLabelPosition;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
}

export interface CSToggleState {
	checked: boolean;
}

class CSToggle extends React.Component<CSToggleProps, CSToggleState> {
	public static defaultProps = {
		defaultChecked: false
	};

	constructor(props: CSToggleProps) {
		super(props);

		this.state = {
			checked: this.props.checked
		};
	}

	handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({checked: !this.state.checked});
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {

		const toggleClasses = classNames(
			'cs-toggle',
			{
				'cs-toggle-error': this.props.error === true
			}
		);

		const toggleWrapperClasses = classNames(
			'cs-toggle-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const toggleElementWrapperClasses = classNames(
			'cs-toggle-element',
			{
				[`cs-toggle-label-${this.props.labelPosition}`]: this.props.labelPosition
			}
		);
		return (
			<>
				<div className={toggleElementWrapperClasses}>
					{this.props.label &&
						<CSLabel
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}/>
					}
					<label className={toggleWrapperClasses}>
						<input
							onChange={this.handleOnChange}
							className={toggleClasses}
							type="checkbox"
							disabled={this.props.disabled}
							checked={this.state.checked}
							required={this.props.required}
							id={this.props.id}
						/>
						<span className="cs-toggle-faux"/>
					</label>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-toggle-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSToggle;
