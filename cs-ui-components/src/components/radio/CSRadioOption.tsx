import React from 'react';
import classNames from 'classnames';

export interface CSRadioOptionProps {
	className?: string;
	disabled?: boolean;
	id?: string;
	label?: string;
	name?: string;
	title?: string;
	onChange?(): any;
}

class CSRadioOption extends React.Component<CSRadioOptionProps> {
	constructor(props: CSRadioOptionProps) {
		super(props);

		this.toggleRadio = this.toggleRadio.bind(this);
	}

	toggleRadio() {
		if (this.props.onChange) {
			this.props.onChange();
		}
	}

	render() {
		const radioOptionWrapperClasses = classNames(
			'cs-radio-label'
		);

		const radioOptionClasses = classNames(
			'cs-radio'
		);

		const radioOptionFauxClasses = classNames(
			'cs-radio-faux'
		);

		return (
			<>
				<div>
					<label className={radioOptionWrapperClasses} title={this.props.title}>
						<input
							onChange={this.toggleRadio}
							className={radioOptionClasses}
							type="radio"
							name={this.props.name}
							disabled={this.props.disabled}
							id={this.props.id}
						/>
						<span className={radioOptionFauxClasses}/>
						<span>{this.props.label}</span>
					</label>
				</div>
			</>
		);
	}
}

export default CSRadioOption;
