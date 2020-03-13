import React from 'react';
import jsxToString from 'jsx-to-string';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export interface CSToggleProps {
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	required?: boolean;
	label: string;
	helpText?: string;
	tooltipPosition?: string;
	className?: string;
}

export interface CSToggleState {
	checkedValue: boolean | undefined;
}

class CSToggle extends React.Component<CSToggleProps, CSToggleState> {

	static getDoc() {

		const json = {
			name: 'Toggle',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'checked',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSToggle
									checked
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSToggle
									disabled
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSToggle
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSToggle
									error
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
								/>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
									tooltipPosition="bottom-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
									tooltipPosition="bottom-right"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSToggle
									label="This is a label"
									helpText="Example of help text "
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Toggle label to display',
					options: []
				},
				{
					propertyName: 'checked',
					description: 'Logic for checked state',
					options: [
						'false',
						'true'
					]
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
					propertyName: 'required',
					description: 'Logic for required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Logic for error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Helptext content',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Toggle tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}
	constructor(props: CSToggleProps) {
		super(props);

		this.state = {
			checkedValue: this.props.checked
		};

		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox() {
		this.setState({checkedValue: !this.state.checkedValue});
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
		return (
			<>	{this.props.label &&
				<CSLabel label={this.props.label} helpText={this.props.helpText}
				tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
				}
				<label className={toggleWrapperClasses}>
					<input
						onChange={this.toggleCheckbox}
						className={toggleClasses}
						type="checkbox"
						disabled={this.props.disabled}
						checked={this.state.checkedValue}
						required={this.props.required}
					/>
					<span className="cs-toggle-faux"/>
				</label>
			</>
		);
	}
}

export default CSToggle;
