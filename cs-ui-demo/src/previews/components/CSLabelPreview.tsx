import React from 'react';
import { CSLabel, CSButton } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSLabelPreview extends React.Component {
	getDoc = () => ({
		name: 'Label',
		usage: 'This is used to associate value with form field.',
		accessible: 'yes',
		components: [
			{
				name: 'CSLabel',
				examples: [
					{
						propName: 'helpText',
						variations: [
							{
								component: <CSLabel label="Label" helpText="Help text example" />,
								code: '<CSLabel label="Label" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'htmlFor',
						variations: [
							{
								component: <>
									<CSLabel label="Label" htmlFor="Name" />
									<CSButton label="Button" id="Name" />
								</>,
								code: `<>
									<CSLabel label="Label" htmlFor="Name" />
									<CSButton label="Button" id="Name" />
								</>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSLabel label="Label" required />,
								code: '<CSLabel label="Label" required />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSLabel label="Label" title="Title example on a label" />,
								code: '<CSLabel label="Label" title="Title example on a label" />'
							}
						]
					}, {
						propName: 'tooltipPosition',
						alert: {
							variant: 'info',
							text: 'This prop can only be used when helpText is set.'
						},
						variations: [
							{
								primaryVariants: 'tooltipPosition="top-left"',
								component: <CSLabel
									label="Label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSLabel
									label="Label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
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
								component: <CSLabel
									label="Label"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSLabel
									label="Label"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the label.'
					}, {
						name: 'helpText',
						types: ['string'],
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'htmlFor',
						types: ['string'],
						description: 'Assign the ID of the element the label describes.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the label.'
					}, {
						name: 'label',
						required: true,
						types: ['string'],
						description: 'Set the label value.'
					}, {
						name: 'required',
						types: ['boolean'],
						default: 'false',
						description: 'Set whether the label describes a required field.'
					}, {
						name: 'title',
						types: ['string'],
						description: 'Set the custom title to a label.'
					}, {
						name: 'tooltipPosition',
						customTypes: [{
							name: 'CSTooltipPosition',
							types: [
								'\'bottom-right\'',
								'\'bottom-left\'',
								'\'top-right\'',
								'\'top-left\'',
								'\'top-center\'',
								'\'bottom-center\'',
								'\'right-top\'',
								'\'right-center\'',
								'\'right-bottom\'',
								'\'left-top\'',
								'\'left-center\'',
								'\'left-bottom\''
							]
						}],
						default: '\'top-right\'',
						description: 'Set the tooltip position for the label.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the label tag.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.1',
				'1.4.4'
			],
			requirements: {
				structure: [
					'`<label>`'
				],
				styling: [
					'Required status has an asterisk character in order to comply with rule to not describe error with color or text only'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSLabelPreview;
