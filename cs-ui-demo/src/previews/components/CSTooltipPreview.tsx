import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSTooltip} from '@cloudsense/cs-ui-components';

class CSTooltipPreview extends React.Component {
	getDoc() {

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
								<CSTooltip variant="info" helpText="Help text example"/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip variant="warning" helpText="Help text example"/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip variant="error" helpText="Help text example"/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is used for overriding default icon defined by variant',
					variations: [
						{
							variationName: ['quote'],
							string: '',
							component:
								<CSTooltip iconName="quote" helpText="Help text example"/>
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
								<CSTooltip iconName="info" helpText="Help text example"/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSTooltip iconName="info" iconSize="medium" helpText="Help text example"/>
						}
					]
				},
				{
					propName: 'position',
					variations: [
						{
							variationName: ['top-right', 'array'],
							string: '',
							component:
								<CSTooltip helpText={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} position="top-right"/>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="top-left"/>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSTooltip  helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." position="bottom-right"/>
						},
						{
							variationName: ['bottom-left'],
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
								<CSTooltip  tooltipHeader="Info" helpText={['This is an example tooltip', 'One more tooltip', 'Another tooltip to display']} />
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSTooltip  variant="warning" tooltipHeader="Warning" helpText="Help text example" />
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSTooltip  variant="error" tooltipHeader="Error" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSTooltip iconName="quote" helpText="Help text example" className="custom-class"/>
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
					propertyName: 'helpText',
					description: 'Tooltip help text content',
					options: []
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
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSTooltipPreview;
