import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';

class CSRadioPreview extends React.Component {
	getCSRadioDoc() {

		const json = {
			name: 'Radio',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSRadio
									label="This is a label"
								>
									<CSRadioOption name="value" label="high" />
									<CSRadioOption name="value" label="low" />
								</ CSRadio>
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
								<CSRadio
									error
									label="This is a label"
								>
									<CSRadioOption name="gender" label="male" />
									<CSRadioOption name="gender" label="female" />
								</ CSRadio>
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
								<CSRadio
									required
									label="This is a label"
								>
									<CSRadioOption name="country" label="England" />
									<CSRadioOption name="country" label="Croatia" />
								</CSRadio>
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
								<CSRadio
									disabled
									label="This is a label"
								>
									<CSRadioOption name="drink" label="Cola" disabled />
									<CSRadioOption name="drink" label="Pepsi" disabled />
								</CSRadio>
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
								<CSRadio
									variant="brand"
									label="This is a label"
								>
									<CSRadioOption name="continent" label="Africa" />
									<CSRadioOption name="continent" label="America" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-right">
									<CSRadioOption name="colour" label="red" />
									<CSRadioOption name="colour" label="blue" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="top-right">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="top-left">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-right">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-left">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSRadio label="This is a label" className="custom-class">
									<CSRadioOption name="year" label="2020" />
									<CSRadioOption name="year" label="2021" />
								</CSRadio>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Radio label to display',
					options: []
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
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'variant',
					description: 'Radio Option variant',
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
					description: 'Radio help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Radio tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
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

	getCSRadioOptionDoc() {

		const onChangeHandler = () => alert('Radio changed!');

		const json = {
			name: 'Radio Option',
			usage: 'Individual radio options.',
			properties: [
				{
					propertyName: 'Label',
					description: 'Radio Option label',
					options: ['n/a']
				},
				{
					propertyName: 'Name',
					description: 'Radio Option name',
					options: ['n/a']
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
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: ['n/a']
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: ['n/a']
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSRadioDoc();
		const component2 = this.getCSRadioOptionDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
					<PreviewTable name={component2.name} properties={component2.properties} alt />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSRadioPreview;
