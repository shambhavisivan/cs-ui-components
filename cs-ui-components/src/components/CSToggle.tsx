import React from 'react';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

export type CSToggleLabelPosition = 'default' | 'left';

export interface CSToggleProps {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelPosition?: CSToggleLabelPosition;
	labelTitle?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	required?: boolean;
	title?: string;
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

	componentDidUpdate(prevProps: CSToggleProps) {
		if (prevProps.checked !== this.props.checked) {
		this.setState({ checked: this.props.checked });
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
					{(this.props.label && !this.props.labelHidden) &&
						<CSLabel
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}
							title={this.props.labelTitle ? this.props.label : null}
						/>
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
							aria-required={this.props.required}
							aria-invalid={this.props.error}
						/>
						<span className="cs-toggle-faux" title={this.props.title}/>
					</label>
					{(this.props.error && this.props.errorMessage) &&
						<CSFieldErrorMsg message={this.props.errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSToggle;
