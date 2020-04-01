import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSpinner} from '@cloudsense/cs-ui-components';

class CSSpinnerPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Spinner',
			usage: 'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							string: '',
							component:
								<CSSpinner
									size="xsmall"
									color="neutral"
								/>
						},
						{
							variationName: ['small'],
							string: '',
							component:
								<CSSpinner
									size="small"
									color="neutral"
								/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSSpinner
									size="medium"
									color="neutral"
								/>
						},
						{
							variationName: ['large'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['xlarge'],
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
								/>
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="brand"
								/>
						}
					]
				},
				{
					propName: 'inline',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									inline
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
									label="This is some label"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'size',
					description: 'Size of spinner icon',
					options: [
						'large',
						'xsmall',
						'small',
						'medium',
						'xlarge'
					]
				},
				{
					propertyName: 'color',
					description: 'Color of spinner icon',
					options: [
						'neutral',
						'brand'
					]
				},
				{
					propertyName: 'inline',
					description: 'Logic for display property',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Spinner label',
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

export default CSSpinnerPreview;
