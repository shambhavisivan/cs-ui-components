import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSTextareaProps {
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
	rows?: any;
	cols?: any;
	className?: any;
}

class CSTextarea extends React.Component<CSTextareaProps> {

	static getDoc() {

		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'Value',
					customText: '',
					variations: [
						{
							variationName: ['Value'],
							string: '',
							component:
								<CSTextarea label="Enter message:" value="Message" id="message" />
						}
					]
				},
				{
					propName: 'Placeholder',
					customText: '',
					variations: [
						{
							variationName: ['Placeholder'],
							string: '',
							component:
								<CSTextarea label="Enter message:" placeholder="Message" id="message" />
						}
					]
				},
				{
					propName: 'Id',
					customText: '',
					variations: [
						{
							variationName: ['Id'],
							string: '',
							component:
								<CSTextarea label="Enter message:" id="message" />
						}
					]
				},
				{
					propName: 'Label',
					variations: [
						{
							variationName: ['Label'],
							string: '',
							component:
								<CSTextarea label="Enter message:" id="messageBody" />
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
									<CSTextarea label="Enter message:" helpText="Help" />
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
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="top-left" />
						}
					]
				},
				{
					propName: 'Disabled',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSTextarea label="Enter message:" disabled />
						}
					]
				},
				{
					propName: 'Read Only',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSTextarea label="Enter message:" readOnly />
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSTextarea required label="Enter message:" id="messageContent" />
						}
					]
				},
				{
					propName: 'Error',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSTextarea label="Enter message:" error />
						}
					]
				},
				{
					propName: 'Rows',
					variations: [
						{
							variationName: ['10', '20', '30', '40', '50'],
							string: '',
							component:
								<CSTextarea label="Enter message:" rows="10" />
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['10', '20', '30', '40', '50'],
							string: '',
							component:
								<CSTextarea label="Enter message:" cols="40" required/>
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
								<CSTextarea label="Enter message:" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Textarea value to display',
					options: []
				},
				{
					propertyName: 'placeholder',
					description: 'Textarea placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Textarea id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Textarea label text to display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Textarea tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Textara help text for tooltip display',
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
					propertyName: 'rows',
					description: 'Textarea rows value',
					options: []
				},
				{
					propertyName: 'cols',
					description: 'Textarea cols value',
					options: []
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
		const textareaClasses = classNames(
			'cs-textarea', {
				'cs-textarea-error': this.props.error,
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<>
				<div>
					{this.props.label &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
					}
					<textarea
						className={textareaClasses}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						required={this.props.required}
						rows={this.props.rows}
						cols={this.props.cols}
						aria-invalid={this.props.error}
						value={this.props.value}
					/>
				</div>
			</>
		);
	}
}

export default CSTextarea;
