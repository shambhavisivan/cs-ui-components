import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSInputSearch} from '@cloudsense/cs-ui-components';

class CSInputSearchPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Input search changed!');

		const json = {
			name: 'Input Search',
			usage: 'Search input is used for search value entry.',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSInputSearch label="Type here:" value="Value" />
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
									<CSInputSearch label="Type here:"  id="searchName" />
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
									<CSInputSearch label="Type here:" helpText="Help text example" />
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
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-left" />
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
									<CSInputSearch label="Type here:" placeholder="Search name" />
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
									<CSInputSearch label="Type here:" id="search" />
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
									<CSInputSearch label="Type here:" disabled />
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
									<CSInputSearch label="Type here:" required id="searchItem" />
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
									<CSInputSearch label="Type here:" error />
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
								<CSInputSearch label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['right'],
							string: '',
							component:
								<CSInputSearch label="Type here:" iconPosition="right" />
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
									<CSInputSearch label="Type here:" borderType="square" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['50%'],
							string: '',
							component:
									<CSInputSearch label="Type here:" width="50%" />
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
									<CSInputSearch label="Type here:" className="custom-class" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
									<CSInputSearch label="Type here:" onChange={onChangeHandler} />
						}
					]
				},
				{
					propName: 'autoFocus',
					variations: [
						{
							variationName: ['onFocus'],
							string: '',
							component:
									<CSInputSearch label="Type here:" autoFocus />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Input search value to display',
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
					description: 'Input search placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Input search id value',
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
					propertyName: 'iconPosition',
					description: 'Input search icon position',
					options: [
						'left',
						'right'
					]
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
					propertyName: 'width',
					description: 'Width of the input search',
					options: [
						'e.g.',
						'50%',
						'30rem',
						'25px'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
						'square'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: []
				},
				{
					propertyName: 'autoFocus',
					description: 'Auto focus input',
					options: [
						'false',
						'true'
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

export default CSInputSearchPreview;
