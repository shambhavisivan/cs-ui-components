import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSInputNumberProps {
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
	min?: any;
	max?: any;
	value?: any;
	className?: string;
	errorMessage?: string;
	hideSpinner?: boolean;
}

class CSInputNumber extends React.Component<CSInputNumberProps> {

	static getDoc() {

		const json = {
			name: 'Input Number',
			usage: 'Number inputs are used for number entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" value="1" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" id="quantity" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" id="value" />
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
								<CSInputNumber label="Enter value:" helpText="Help text example" />
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
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-right" />
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
								<CSInputNumber label="Enter value:" disabled />
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" readOnly placeholder="This is read only"/>
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
								<CSInputNumber required label="Enter value" id="number" />
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
								<CSInputNumber label="Enter value:" error />
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
								<CSInputNumber label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" min="1" />
						}
					]
				},
				{
					propName: 'max',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" max="5" />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSInputNumber label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'hideSpinner',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSInputNumber label="hideSpinner True" hideSpinner />
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSInputNumber label="hideSpinner False" hideSpinner={false} />
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
								<CSInputNumber label="Enter value:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Default value to display',
					options: []
				},
				{
					propertyName: 'placeholder',
					description: 'Input number placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Input number id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Input label text to display',
					options: []
				},
				{
					propertyName: 'helpText',
					description: 'Input help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Input tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
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
					propertyName: 'read-only',
					description: 'Read only description',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
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
					propertyName: 'min',
					description: 'Input number min value',
					options: []
				},
				{
					propertyName: 'max',
					description: 'Input number max value',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Input border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'hideSpinner',
					description: 'Logic for spinner visibility',
					options: [
						'false',
						'true'
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
	render() {
		const inputNumberClasses = classNames(
			'cs-input-number',
			{
				[`cs-input-number-${this.props.borderType}`]: this.props.borderType,
				'cs-input-number-error': this.props.error,
				[`${this.props.className}`]: this.props.className,
				[`hide-spinner-${this.props.hideSpinner}`]: this.props.hideSpinner
			}
		);
		return (
			<>
				<div className="cs-input-number-wrapper">
					{this.props.label &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						/>
					}
					<input className={inputNumberClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						min={this.props.min}
						max={this.props.max}
						readOnly={this.props.readOnly}
						required={this.props.required}
						disabled={this.props.disabled}
						value={this.props.value}
						type="number"
						aria-valuemin={this.props.min}
						aria-valuemax={this.props.max}
						aria-valuenow={this.props.value}
						aria-invalid={this.props.error}
						autoComplete="off"
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-number-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputNumber;
