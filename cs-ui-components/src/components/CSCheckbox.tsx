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
	errorMessage?: string;
	onChange?(): any;
}

export interface CSCheckboxState {
	checkedValue: boolean | undefined;
}

class CSCheckbox extends React.Component<CSCheckboxProps, CSCheckboxState> {

	public static defaultProps = {
		variant: 'neutral',
		labelHidden: false,
		borderType: 'square'
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
					propName: 'checked',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSCheckbox
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
								<CSCheckbox
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
								<CSCheckbox
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									variant="brand"
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
								<CSCheckbox
									error
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCheckbox
									label="Enter value:"
									error
									errorMessage="Error message!"
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
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
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
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
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
								<CSCheckbox
									label="This is a label"
									labelHidden
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
								<CSCheckbox
									label="This is a label"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									onChange={onChangeHandler}
								/>
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
					propertyName: 'errorMessage',
					description: 'Error message text',
					options: []
				},
				{
					propertyName: 'helpText',
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
						<CSLabel label={this.props.label} helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
					}
					<label className={checkboxGroupClasses}>
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
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-checkbox-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSCheckbox;
