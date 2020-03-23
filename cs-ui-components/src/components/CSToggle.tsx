import React from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export interface CSToggleProps {
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	required?: boolean;
	label: string;
	helpText?: string;
	tooltipPosition?: string;
	className?: string;
}

export interface CSToggleState {
	checkedValue: boolean | undefined;
}

class CSToggle extends React.Component<CSToggleProps, CSToggleState> {
	constructor(props: CSToggleProps) {
		super(props);

		this.state = {
			checkedValue: this.props.checked
		};

		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox() {
		this.setState({checkedValue: !this.state.checkedValue});
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
		return (
			<>	{this.props.label &&
				<CSLabel label={this.props.label} helpText={this.props.helpText}
				tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
				}
				<label className={toggleWrapperClasses}>
					<input
						onChange={this.toggleCheckbox}
						className={toggleClasses}
						type="checkbox"
						disabled={this.props.disabled}
						checked={this.state.checkedValue}
						required={this.props.required}
					/>
					<span className="cs-toggle-faux"/>
				</label>
			</>
		);
	}
}

export default CSToggle;
