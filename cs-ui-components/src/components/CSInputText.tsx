import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSInputTextProps {
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
	value?: string;
	className?: string;
	errorMessage?: string;
}

class CSInputText extends React.Component<CSInputTextProps> {

	static getDoc() {

		const json = {
			name: 'Input Text',
			usage: 'Text inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputText label="Type here:" value="Enter name"/>
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
								<CSInputText label="Type here:" id="name"/>
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
								<CSInputText label="Enter value:" borderType="square" />
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
								<CSInputText label="Type here:" helpText="Example of help text"/>
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
								<CSInputText label="Type here:" helpText="Example of help text" tooltipPosition="top-left"/>
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Example of help text" tooltipPosition="top-right"/>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Example of help text" tooltipPosition="bottom-left"/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSInputText label="Type here:" helpText="Example of help text" tooltipPosition="bottom-right"/>
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputText label="Type here:" placeholder="Enter name"/>
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
								<CSInputText label="Type here:" id="name"/>
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
								<CSInputText label="Type here:" disabled/>
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
								<CSInputText label="Type here:" readOnly placeholder="This is read only"/>
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
								<CSInputText required label="Enter job role" id="jobRole" helpText="Example of help text" tooltipPosition="top-left"/>
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
								<CSInputText label="Type here:" error/>
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
								<CSInputText label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSInputText label="Type here:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				 {
					propertyName: 'value',
					description: 'Input value to display',
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
					propertyName: 'placeholder',
					description: 'Input placeholder to display',
					options: []
				},
				 {
					propertyName: 'id',
					description: 'Input id value',
					options: []
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
					propertyName: 'borderType',
					description: 'Input style',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
					]
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
		const inputTextClasses = classNames(
			'cs-input-text',
			{
				[`cs-input-text-${this.props.borderType}`]: this.props.borderType,
				'cs-input-text-error': this.props.error,
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<>
				<div className="cs-input-text-wrapper">
					{this.props.label &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition} required={this.props.required}/>
					}
					<input className={inputTextClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						required={this.props.required}
						value={this.props.value}
						type="text"
						aria-invalid={this.props.error}
						autoComplete="off"
					/>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputText;
