import React from 'react';
import classNames from 'classnames';

export interface CSRadioOptionProps {
	[key: string]: any;
	ariaInvalid?: boolean;
	ariaRequired?: boolean;
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	label?: string;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	readOnly?: boolean;
	title?: string;
}

export interface CSRadioOptionState {
	checked: boolean;
}

class CSRadioOption extends React.Component<CSRadioOptionProps, CSRadioOptionState> {
	constructor(props: CSRadioOptionProps) {
		super(props);

		this.state = {
			checked: !!this.props.checked
		};

		this.toggleRadio = this.toggleRadio.bind(this);
	}

	toggleRadio(e: React.ChangeEvent<HTMLInputElement>) {
		if (this.props.readOnly) {
			return;
		}

		this.setState({ checked: !this.state.checked });
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	componentDidUpdate(prevProps: CSRadioOptionProps) {
		if (prevProps.checked !== this.props.checked) {
			this.setState({ checked: this.props.checked });
		}
	}

	render() {
		const {
			ariaInvalid,
			ariaRequired,
			checked,
			className,
			disabled,
			id,
			label,
			name,
			readOnly,
			onChange,
			title,
			...rest
		} = this.props;

		const radioOptionWrapperClasses = classNames(
			'cs-radio-label', {
			'cs-radio-label-read-only': readOnly
		});

		const radioOptionClasses = classNames(
			'cs-radio', {
			'cs-radio-read-only': readOnly
		});

		return (
			<label className={radioOptionWrapperClasses} title={title}>
				<input
					onChange={this.toggleRadio}
					className={radioOptionClasses}
					type="radio"
					name={name}
					disabled={disabled}
					id={id}
					aria-invalid={ariaInvalid}
					aria-required={ariaRequired}
					checked={this.state.checked}
					{...rest}
				/>
				<span className="cs-radio-faux" />
				<span>{label}</span>
			</label>
		);
	}
}

export default CSRadioOption;
