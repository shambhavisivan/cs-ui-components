import React from 'react';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export interface CSToggleProps {
	checked?: boolean;
	defaultChecked?: boolean;
	error?: boolean;
	disabled?: boolean;
	required?: boolean;
	label: string;
	helpText?: string;
	tooltipPosition?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	labelPosition?: string;
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
			checked: this.props.checked || this.props.defaultChecked
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
						/>
						<span className="cs-toggle-faux"/>
					</label>
				</div>
			</>
		);
	}
}

export default CSToggle;
