import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSCheckboxProps {
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	required?: boolean;
	borderType?: string;
	label: string;
	helpText?: string;
	tooltipPosition?: string;
	variant?: string;
	labelHidden?: boolean;
	className?: string;
	onChange?(): any;
}

export interface CSCheckboxState {
	checkedValue: boolean | undefined;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false
	};

	static getDoc() {

		const onChangeHandler = () => alert('Checbox changed!');

		const json = {
			name: 'Checkbox',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'borderType',
					customText: '',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									label="This is a label"
								/>
						},
						{
							variationName: ['round'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'Checked',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									checked
									label="This is a label"
								/>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									checked
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'Disabled',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									disabled
									label="This is a label"
								/>
						},
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									disabled
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									required
									label="This is a label"
								/>
						},
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'Variant',
					variations: [
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSCheckbox label="This is a label" variant="brand" />
						}
					]
				},
				{
					propName: 'Error',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									error
									label="This is a label"
								/>
						},
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
									borderType="round"
									error
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'Help Text',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
								<CSCheckbox label="This is a label" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'Tooltip Position',
					variations: [
						{
							variationName: ['tooltipPosition'],
							string: '',
							component:
								<CSCheckbox label="This is a label" helpText="Help text example" tooltipPosition="top-left" />
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox label="This is a label" labelHidden />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSCheckbox label="This is a label" className="custom-class" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							variationName: ['onChange'],
							string: '',
							component:
								<CSCheckbox label="This is a label" onChange={onChangeHandler} />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Checkbox label to display',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Checkbox style',
					options: [
						'square',
						'round'
					]
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
					propertyName: 'variant',
					description: 'Checkbox variant',
					options: [
						'neutral',
						'brand'
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
					propertyName: 'helptext',
					description: 'Checkbox help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Checkbox tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
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
	constructor(props: CSCheckboxProps) {
		super(props);

		this.state = {
			checkedValue: this.props.checked
		};

		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox() {
		this.setState({checkedValue: !this.state.checkedValue});
		if (this.props.onChange) {
			this.props.onChange();
		}
	}

	render() {

		const checkboxClasses = classNames(
			'cs-checkbox',
			{
				'cs-checkbox-error': this.props.error === true
			}
		);
		const checkboxWrapperClasses = classNames(
			'cs-checkbox-wrapper',
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
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel label={this.props.label} helpText={this.props.helpText}
					tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
				}
				<label className={checkboxWrapperClasses}>
						<input
							onChange={this.toggleCheckbox}
							className={checkboxClasses}
							type="checkbox"
							disabled={this.props.disabled}
							checked={this.state.checkedValue}
							required={this.props.required}
						/>
					<span className={checkboxFauxClasses}/>
				</label>
			</>
		);
	}
}

export default CSCheckbox;
