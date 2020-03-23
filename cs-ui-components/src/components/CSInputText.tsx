import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSInputTextProps {
	borderType?: string;
	error?: boolean;
	label: string;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	value?: string;
	className?: string;
	errorMessage?: string;
}

class CSInputText extends React.Component<CSInputTextProps> {
	render() {
		const inputTextClasses = classNames(
			'cs-input-text',
			{
				[`cs-input-text-${this.props.borderType}`]: this.props.borderType,
				'cs-input-text-error': this.props.error,
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<>
				<div className="cs-input-text-wrapper">
					{this.props.label &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
					}
					<input className={inputTextClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						required={this.props.required}
						value={this.props.value}
						type="text"
						aria-invalid={this.props.error}
						autoComplete="off"
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputText;
