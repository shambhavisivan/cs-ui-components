import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';

export interface CSSelectProps {
	borderType?: string;
	error?: boolean;
	label: string;
	labelHidden?: boolean;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	errorMessage?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

class CSSelect extends React.Component<CSSelectProps> {

	public static defaultProps = {
		labelHidden: false
	};

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}
	render() {
		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': this.props.error,
				[`cs-select-${this.props.borderType}`]: this.props.borderType
			}
		);

		const selectGroupClasses = classNames(
			'cs-select-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className="cs-select-wrapper">
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
				}
				<div className={selectGroupClasses}>
					<select
						className={selectClasses}
						id={this.props.id}
						required={this.props.required}
						disabled={this.props.disabled}
						aria-invalid={this.props.error}
						onChange={this.handleOnChange}
					>
						{this.props.children}
					</select>
					<CSIcon name="down"/>
				</div>
				{(this.props.error && this.props.errorMessage) &&
					<span className="cs-input-error-msg">{this.props.errorMessage}</span>
				}
			</div>
		);
	}
}

export default CSSelect;
