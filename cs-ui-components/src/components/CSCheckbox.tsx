import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { v4 as uuidv4 } from 'uuid';

export type CSCheckboxBorderType = 'square' | 'round';
export type CSCheckboxVariant = 'neutral' | 'brand';

export interface CSCheckboxProps {
	borderType?: CSCheckboxBorderType;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	variant?: CSCheckboxVariant;
}

export interface CSCheckboxState {
	checked: boolean;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		borderType: 'square',
		defaultChecked: false,
		checked: false
	};

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCheckboxProps) {
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

	handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		this.setState({checked: !this.state.checked});
		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	componentDidUpdate(prevProps: CSCheckboxProps) {
		if (prevProps.checked !== this.props.checked) {
		this.setState({ checked: this.props.checked });
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
							for={this.uniqueAutoId}
							label={this.props.label}
							helpText={this.props.helpText}
							tooltipPosition={this.props.tooltipPosition}
							required={this.props.required}
							title={this.props.labelTitle ? this.props.label : null}
						/>
					}
					<label className={checkboxGroupClasses}>
							<input
								onChange={this.handleOnChange}
								className={checkboxClasses}
								type="checkbox"
								disabled={this.props.disabled}
								checked={this.state.checked}
								required={this.props.required}
								id={this.uniqueAutoId}
								onClick={this.handleOnClick}
								name={this.props.name}
								aria-required={this.props.required}
								aria-invalid={this.props.error}
							/>
						<span className={checkboxFauxClasses} title={this.props.title} />
					</label>
					{(this.props.error && this.props.errorMessage) &&
						<CSFieldErrorMsg message={this.props.errorMessage} />
					}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
