import React from 'react';
import classNames from 'classnames';
import jsxToString from 'jsx-to-string';

export interface CSRadioOptionProps {
	className?: string;
	disabled?: boolean;
	label?: string;
	name?: string;
	onChange?(): any;
}

class CSRadioOption extends React.Component<CSRadioOptionProps> {

	static getDoc() {

		const onChangeHandler = () => alert('Radio changed!');

		const json = {
			name: 'Radio Option',
			usage: 'Individual radio options.',
			properties: [
				{
					propertyName: 'Label',
					description: 'Radio Option label',
					options: ['n/a']
				},
				{
					propertyName: 'Name',
					description: 'Radio Option name',
					options: ['n/a']
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: ['n/a']
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: ['n/a']
				}
			]
		};

		return json;
	}

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
					<label className={radioOptionWrapperClasses}>
						<input
							onChange={this.toggleRadio}
							className={radioOptionClasses}
							type="radio"
							name={this.props.name}
							disabled={this.props.disabled}
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
