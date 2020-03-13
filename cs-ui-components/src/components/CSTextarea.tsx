import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';

export interface CSTextareaProps {
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
	rows?: any;
	cols?: any;
	className?: any;
	errorMessage?: string;
}

class CSTextarea extends React.Component<CSTextareaProps> {

	static getDoc() {

		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter message:" value="Message" id="message" />
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
								<CSTextarea label="Enter message:" placeholder="Message" id="message" />
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTextarea label="Enter message:" id="message" />
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
								<CSTextarea label="Enter message:" id="messageBody" />
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
								<CSTextarea label="Enter message:" borderType="square" />
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
									<CSTextarea label="Enter message:" helpText="Help" />
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
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="top-left" />
						},
						{
							variationName: ['top-right'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="top-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="bottom-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
									<CSTextarea label="Enter message:" helpText="Help" tooltipPosition="bottom-right" />
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
								<CSTextarea label="Enter message:" disabled />
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
								<CSTextarea label="Enter message:" readOnly />
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
								<CSTextarea required label="Enter message:" id="messageContent" />
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
								<CSTextarea label="Enter message:" error />
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
								<CSTextarea label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'rows',
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
					propName: 'cols',
					variations: [
						{
							variationName: ['10', '20', '30', '40', '50'],
							string: '',
							component:
								<CSTextarea label="Enter message:" cols="40"/>
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
					description: 'Textarea help text for tooltip display',
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
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'readOnly',
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
				[`${this.props.className}`]: this.props.className,
				[`cs-textarea-${this.props.borderType}`]: this.props.borderType
			}
		);
		return (
			<>
				<div className="cs-textarea-wrapper">
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
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-textarea-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSTextarea;
