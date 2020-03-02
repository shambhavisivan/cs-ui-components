import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSTooltipProps {
	iconName?: string;
	position?: string;
	helpText: string;
	variant?: string;
	iconSize?: string;
	tooltipHeader?: string;
	className?: string;
}

class CSTooltip extends React.Component<CSTooltipProps> {

	public static defaultProps = {
		variant: 'info',
		iconSize: 'small',
		position: 'top-right'
	};

	static getDoc() {

		const json = {
			name: 'Tooltip',
			usage: 'A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSTooltip variant="info" helpText="Example of help text"/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip variant="warning" helpText="Example of help text"/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip variant="error" helpText="Example of help text"/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is used for overriding default icon defined by variant',
					variations: [
						{
							variationName: ['iconName'],
							string: '',
							component:
								<CSTooltip iconName="quote" helpText="Example of help text "/>
						}
					]
				},
				{
					propName: 'iconSize',
					customText: 'Size of the tooltip icon',
					variations: [
						{
							variationName: ['small'],
							string: '',
							component:
								<CSTooltip iconName="info" helpText="Example of help text "/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSTooltip iconName="info" iconSize="medium" helpText="Example of help text "/>
						}
					]
				},
				{
					propName: 'Position',
					variations: [
						{
							variationName: ['top', 'right'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-right"/>
						},
						{
							variationName: ['top', 'left'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-left"/>
						},
						{
							variationName: ['bottom', 'right'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="bottom-right"/>
						},
						{
							variationName: ['bottom', 'left'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.." position="bottom-left"/>
						}
					]
				},
				{
					propName: 'tooltipHeader',
					customText: 'This is used for defining tooltip header.Its color will be defined by variant prop',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSTooltip  tooltipHeader="Info" helpText="Example of help text" />
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip  variant="warning" tooltipHeader="Warning" helpText="Example of help text" />
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip  variant="error" tooltipHeader="Error" helpText="Example of help text" />
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSTooltip iconName="quote" helpText="Example of help text" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'variant',
					description: 'Color variant of tooltip',
					options: [
						'info',
						'warning',
						'error'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant',
					options: [

					]
				},
				{
					propertyName: 'iconSize',
					description: 'Size of the tooltip icon.',
					options: [
						'small',
						'medium'
					]
				},
				{
					propertyName: 'position',
					description: 'Tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'tooltipHeader',
					description: 'Content of the tooltip header',
					options: [
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
		const tooltipClasses = classNames(
			'cs-tooltip',
			{
				[`cs-${this.props.position}`]: this.props.position,
				'cs-tooltip-info': this.props.variant === 'info',
				'cs-tooltip-warning': this.props.variant === 'warning',
				'cs-tooltip-error': this.props.variant === 'error',
				'cs-tooltip-with-header': this.props.tooltipHeader
			}
		);

		const tooltipWrapperClasses = classNames(
			'cs-tooltip-wrapper',
			{
				'cs-tw-info': this.props.variant === 'info',
				'cs-tw-warning': this.props.variant === 'warning',
				'cs-tw-error': this.props.variant === 'error',
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={tooltipWrapperClasses}>
				{this.props.iconName ?
					<CSIcon name={this.props.iconName} cssClass={'cs-icon-' + this.props.iconSize}/> :
					<CSIcon name={this.props.variant} cssClass={'cs-icon-' + this.props.iconSize}/>
				}
				<div className={tooltipClasses}>
					{this.props.tooltipHeader ?
						<div className="cs-tooltip-header">{this.props.tooltipHeader}</div>
						: null
					}
					<div className="cs-tooltip-body">
						{this.props.helpText}
					</div>
				</div>
			</div>
		);
	}
}

export default CSTooltip;
