import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSTextareaProps {
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
	rows?: number;
	maxHeight?: string;
	className?: string;
	errorMessage?: string;
}

class CSTextarea extends React.Component<CSTextareaProps> {
	render() {
		const textareaClasses = classNames(
			'cs-textarea', {
				'cs-textarea-error': this.props.error,
				[`${this.props.className}`]: this.props.className,
				[`cs-textarea-${this.props.borderType}`]: this.props.borderType
			}
		);
		return (
			<>
				<div className="cs-textarea-wrapper">
					{this.props.label &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
					}
					<textarea
						className={textareaClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						required={this.props.required}
						rows={this.props.rows}
						aria-invalid={this.props.error}
						value={this.props.value}
						style={{'--max-height': this.props.maxHeight}}
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSTextarea;
