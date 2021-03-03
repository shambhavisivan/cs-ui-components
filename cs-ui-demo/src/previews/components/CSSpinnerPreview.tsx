import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSpinner } from '@cloudsense/cs-ui-components';

class CSSpinnerPreview extends React.Component {
	getSpinnerDoc = () => ({
		name: 'Spinner',
		usage: 'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.',
		accessible: 'yes',
		previews: [
			{
				name: 'Spinner',
				examples: [
					{
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="neutral"',
								quickLink: 'neutral',
								component: <CSSpinner color="neutral" />,
								code: `<CSSpinner color="neutral" />`
							}, {
								primaryVariants: 'color="brand"',
								quickLink: 'brand',
								component: <CSSpinner color="brand" />,
								code: `<CSSpinner color="brand" />`
							}, {
								primaryVariants: 'color="inverse"',
								quickLink: 'inverse',
								component: <CSSpinner color="inverse" className="black-background" />,
								code: `<CSSpinner color="inverse" className="black-background" />`
							}
						]
					}, {
						propName: 'inline',
						variations: [
							{
								primaryVariants: 'inline={true}',
								component: <CSSpinner inline />,
								code: `<CSSpinner inline />`
							}
						]
					}, {
						propName: 'label',
						variations: [
							{
								component: <CSSpinner label="This is some label" />,
								code: `<CSSpinner label="This is some label" />`
							}
						]
					}, {
						propName: 'overlay',
						variations: [
							{
								primaryVariants: 'overlay="light"',
								quickLink: 'light',
								component: <CSSpinner overlay="light" />,
								code: '<CSSpinner overlay="light" />'
							}, {
								primaryVariants: 'overlay="dark',
								quickLink: 'dark',
								component: <CSSpinner overlay="dark" />,
								code: '<CSSpinner overlay="dark" />'
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="xsmall"',
								quickLink: 'xsmall',
								component: <CSSpinner size="xsmall" />,
								code: `<CSSpinner size="xsmall" />`
							}, {
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <CSSpinner size="small" />,
								code: `<CSSpinner size="small" />`
							}, {
								primaryVariants: 'size="medium"',
								quickLink: 'medium',
								component: <CSSpinner size="medium" />,
								code: `<CSSpinner size="medium" />`
							}, {
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <CSSpinner />,
								code: `<CSSpinner />`
							}, {
								primaryVariants: 'size="xlarge"',
								quickLink: 'xlarge',
								component: <CSSpinner size="xlarge" />,
								code: `<CSSpinner size="xlarge" />`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSSpinner id="custom-id" className="custom-class" />,
								code: `<CSSpinner id="custom-id" className="custom-class" />`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the spinner.'
			}, {
				name: 'color',
				customTypes: [{
					name: 'CSSpinnerColor',
					types: ['\'neutral\'', '\'brand\'', '\'inverse\'']
				}],
				default: '\'brand\'',
				description: 'Set the colour variant for the spinner icon.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the spinner.'
			}, {
				name: 'inline',
				types: ['boolean'],
				default: 'false',
				description: 'Position the spinner inline.'
			}, {
				name: 'label',
				types: ['string'],
				description: 'Set the spinner label.'
			}, {
				name: 'overlay',
				customTypes: [{
					name: 'CSSpinnerOverlay',
					types: ['\'light\'', '\'dark\'']
				}],
				default: '\'light\'',
				description: 'Set the overlay color variant.'
			}, {
				name: 'size',
				customTypes: [{
					name: 'CSSpinnerSize',
					types: [
						'\'xsmall\'',
						'\'small\'',
						'\'medium\'',
						'\'large\'',
						'\'xlarge\''
					]
				}],
				default: '\'large\'',
				description: 'Set the spinner size.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the spinner wrapper div.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'1.4.4',
					'4.1.2'
				],
				requirements: [
					{
						properties: [
							'`aria-label`',
							'`aria-busy` - indicates to screen reader that content is loading',
							'`aria-live="polite"` - indicate busy status update only after current content is read',
							'`role="progressbar"`'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getSpinnerDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSSpinnerPreview;
