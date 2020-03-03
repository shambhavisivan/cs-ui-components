import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';

export interface CSSelectProps {
	borderType?: string;
	error?: boolean;
	label: string;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
}

class CSSelect extends React.Component<CSSelectProps> {

	static getDoc() {

		const json = {
			name: 'Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'Id',
					customText: '',
					variations: [
						{
							variationName: ['Id'],
							string: '',
							component:
								<CSSelect label="Choose number" id="option">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['Label'],
							string: '',
							component:
								<CSSelect label="Choose color" id="colour">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose:" borderType="square">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Example of help text">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Example of help text" tooltipPosition="top-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['disabled'],
							string: '',
							component:
								<CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['required'],
							string: '',
							component:
								<CSSelect label="Choose amount" id="amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" className="custom-class">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'id',
					description: 'Select id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Select label text to display',
					options: []
				},
				{
					propertyName: 'broderType',
					description: 'Select border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Select tooltip position',
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
		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': this.props.error,
				[`cs-select-${this.props.borderType}`]: this.props.borderType
			}
		);

		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div>
				{this.props.label &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
				}
				<div className={selectWrapperClasses}>
					<select
						className={selectClasses}
						id={this.props.id}
						required={this.props.required}
						disabled={this.props.disabled}
						aria-invalid={this.props.error}
					>
						{this.props.children}
					</select>
					<CSIcon name="down"/>
				</div>
			</div>
		);
	}
}

export default CSSelect;
