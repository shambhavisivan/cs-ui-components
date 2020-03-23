import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSCheckboxProps {
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	required?: boolean;
	borderType?: string;
	label: string;
	helpText?: string;
	tooltipPosition?: string;
	variant?: string;
	labelHidden?: boolean;
	className?: string;
	errorMessage?: string;
	onChange?(): any;
}

export interface CSCheckboxState {
	checkedValue: boolean | undefined;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		borderType: 'square'
	};

	constructor(props: CSCheckboxProps) {
		super(props);

		this.state = {
			checkedValue: this.props.checked
		};

		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox() {
		this.setState({checkedValue: !this.state.checkedValue});
		if (this.props.onChange) {
			this.props.onChange();
		}
	}

	render() {

		const checkboxClasses = classNames(
			'cs-checkbox',
			{
				'cs-checkbox-error': this.props.error === true
			}
		);
		const checkboxGroupClasses = classNames(
			'cs-checkbox-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		const checkboxFauxClasses = classNames(
			'cs-checkbox-faux',
			{
				[`cs-checkbox-faux-${this.props.borderType}`]: this.props.borderType,
				[`cs-checkbox-${this.props.variant}`]: this.props.variant
			}
		);
		return (
			<>
				<div className="cs-checkbox-wrapper">
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel label={this.props.label} helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
					}
					<label className={checkboxGroupClasses}>
							<input
								onChange={this.toggleCheckbox}
								className={checkboxClasses}
								type="checkbox"
								disabled={this.props.disabled}
								checked={this.state.checkedValue}
								required={this.props.required}
							/>
						<span className={checkboxFauxClasses}/>
					</label>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-checkbox-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
