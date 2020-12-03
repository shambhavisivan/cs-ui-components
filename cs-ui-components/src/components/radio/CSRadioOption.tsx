import React from 'react';

export interface CSRadioOptionProps {
	[key: string]: any;
	ariaInvalid?: boolean;
	ariaRequired?: boolean;
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
		const {
			ariaInvalid,
			ariaRequired,
			className,
			disabled,
			id,
			label,
			name,
			title,
			...rest
		} = this.props;

		return (
			<label className="cs-radio-label" title={title}>
				<input
					onChange={this.toggleRadio}
					className="cs-radio"
					type="radio"
					name={name}
					disabled={disabled}
					id={id}
					aria-invalid={ariaInvalid}
					aria-required={ariaRequired}
					{...rest}
				/>
				<span className="cs-radio-faux" />
				<span>{label}</span>
			</label>
		);
	}
}

export default CSRadioOption;
