import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSpinner } from '@cloudsense/cs-ui-components';

class CSSpinnerPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Spinner',
			usage: 'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.',
			accessible: 'yes',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							variationText: ['color="neutral"'],
							component:
								<CSSpinner
									size="xsmall"
									color="neutral"
								/>
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							variationText: ['color="neutral"'],
							component:
								<CSSpinner
									size="small"
									color="neutral"
								/>
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['color="neutral"'],
							component:
								<CSSpinner
									size="medium"
									color="neutral"
								/>
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							variationText: ['color="neutral"'],
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['xlarge'],
							quickLink: 'xlarge',
							variationText: ['color="neutral"'],
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
							quickLink: 'neutral',
							variationText: ['size="large"'],
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['brand'],
							quickLink: 'brand',
							variationText: ['size="large"'],
							component:
								<CSSpinner
									size="large"
									color="brand"
								/>
						},
						{
							variationName: ['inverse'],
							quickLink: 'inverse',
							variationText: ['size="large"'],
							component:
								<CSSpinner
									size="large"
									color="inverse"
									className="black-background"
								/>
						}

					]
				},
				{
					propName: 'inline',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							variationText: ['size="large"', 'color="neutral"'],
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
					propName: 'id',
					variations: [
						{

							component:
								<CSSpinner
									size="large"
									color="neutral"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationText: ['size="medium"', 'color="neutral"'],
							component:
								<CSSpinner
									size="medium"
									color="neutral"
									label="This is some label"
								/>
						}
					]
				},
				{
					propName: 'overlay',
					variations: [
						{
							variationName: ['light'],
							quickLink: 'light',
							component:
								<CSSpinner
									overlay="light"
								/>
						},
						{
							variationName: ['dark'],
							quickLink: 'dark',
							component:
								<CSSpinner
									overlay="dark"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							variationText: ['size="large"', 'color="neutral"'],
							component:
								<CSSpinner
									size="large"
									color="neutral"
									className="custom-class"
								/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'color',
					description: 'Color of spinner icon',
					options: [
						'neutral',
						'brand',
						'inverse'
					]
				},
				{
					propertyName: 'id',
					description: 'Spinner id value'
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
					propertyName: 'label',
					description: 'Spinner label'
				},
				{
					propertyName: 'overlay',
					description: 'Overlay color variant',
					options: [
						'light',
						'dark'
					]
				},
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
				}
			],
			accessibility: [
				{
					criteriaList: [
						'1.4.4',
						'4.1.2'
					],
					requirements: [
						{
							properties: [
								'aria-label',
								'aria-busy - indicates to screen reader that content is loading',
								'aria-live="polite" - it will indicate busy status update only after current content is read',
								'role="progressbar"'
							]
						}
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
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
