import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSCheckboxProps {
	borderType?: string;
	checked?: boolean;
	className?: string;
	defaultChecked?: boolean;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
	required?: boolean;
	tooltipPosition?: string;
	variant?: string;
}

export interface CSCheckboxState {
	checked: boolean;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		borderType: 'square',
		defaultChecked: false
	};

	constructor(props: CSCheckboxProps) {
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

	handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		this.setState({checked: !this.state.checked});
		if (this.props.onClick) {
			this.props.onClick(e);
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
						<CSLabel
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}/>
					}
					<label className={checkboxGroupClasses}>
							<input
								onChange={this.handleOnChange}
								className={checkboxClasses}
								type="checkbox"
								disabled={this.props.disabled}
								checked={this.state.checked}
								required={this.props.required}
								id={this.props.id}
								onClick={this.handleOnClick}
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
