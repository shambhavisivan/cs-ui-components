import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSelect} from '@cloudsense/cs-ui-components';

class CSSelectPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Selection changed!');

		const json = {
			name: 'Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
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
							string: '',
							component:
								<CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
							<CSSelect label="Choose color" labelTitle>
								<option>Red</option>
								<option>Blue</option>
								<option>Green</option>
							</CSSelect>
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSSelect label="Choose color" labelHidden>
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
							quickLink: 'square',
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
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example">
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
							variationName: ['top-right'],
							quickLink: 'top-right',
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-left">
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
							variationName: ['true'],
							quickLink: 'true',
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
					propName: 'hidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSSelect label="Choose number" hidden>
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
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSSelect label="Choose amount" required>
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
							variationName: ['true'],
							quickLink: 'true',
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
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							string: '',
							component:
								<CSSelect label="Choose value:" error errorMessage="Error message!">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							string: '',
							component:
								<CSSelect label="Choose value:" onChange={onChangeHandler}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							string: '',
							component:
								<CSSelect label="Choose value:" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'value',
					variations: [
						{
							string: '',
							component:
								<CSSelect label="Choose value:" name="Select field" value="30">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							string: '',
							component:
								<CSSelect label="Choose amount" title="This is a title">
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
							variationName: ['custom class'],
							quickLink: 'custom class',
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
					propertyName: 'borderType',
					description: 'Select border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
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
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error message text'
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display'
				},
				{
					propertyName: 'hidden',
					description: 'Hidden state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'id',
					description: 'Select id value'
				},
				{
					propertyName: 'label',
					description: 'Select label text to display'
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
					propertyName: 'labelTitle',
					description: 'Logic for label title attribute',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'name',
					description: 'Select name value'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
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
					propertyName: 'title',
					description: 'Select title value'
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
					propertyName: 'value',
					description: 'Display a fixed value'
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
					<PreviewTable components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSSelectPreview;
