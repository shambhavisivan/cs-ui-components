import React from 'react';
import jsxToString from 'jsx-to-string';
import CSTooltip from './CSTooltip';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSLabelProps {
	required?: boolean;
	for?: string;
	label?: string;
	helpText?: string;
	tooltipPosition?: string;
	className?: string;
}

class CSLabel extends React.Component<CSLabelProps> {

	static getDoc() {

		const json = {
			name: 'Label',
			usage: 'This is used to associate value with form field.',
			examples: [
				{
					propName: 'For',
					customText: '',
					variations: [
						{
							variationName: ['For'],
							string: '',
							component:
								<CSLabel for="Name"/>
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['false', 'true'],
							string: '',
							component:
								<CSLabel required/>
						}
					]
				},
				{
					propName: 'Help Text',
					variations: [
						{
							variationName: ['Help'],
							string: '',
							component:
								<CSLabel helpText="Example of help text"/>
						}
					]
				},
				{
					propName: 'Help Text',
					variations: [
						{
							variationName: ['Help'],
							string: '',
							component:
								<CSLabel helpText="Example of help text" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'for',
					description: 'Label id',
					options: []
				},
				{
					propertyName: 'required',
					description: 'Label required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Label help text display for tooltip',
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

		const labelClasses = classNames(
			'cs-label-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}

		);

		return (
			<>
				<label htmlFor={this.props.for} className={labelClasses}>
					<span className={this.props.required ? 'required-true' : 'required-false'}
						aria-hidden="true">*</span>
					<span className="cs-label">
						{this.props.label}
					</span>
					<div className="cs-tooltip-group">
						{this.props.helpText ?
						<CSTooltip
							helpText={this.props.helpText}
							position={this.props.tooltipPosition}
						/> : null}
					</div>
				</label>
			</>
		);
	}
}

export default CSLabel;
