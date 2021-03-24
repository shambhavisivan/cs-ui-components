import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSButtonGroup, CSButton, CSDropdown } from '@cloudsense/cs-ui-components';

class CSButtonGroupPreview extends React.Component {
	getButtonGroupDoc = () => ({
		name: 'Button Group',
		usage: 'Button groups are used to bunch together buttons with similar actions',
		accessible: 'yes',
		previews: [
			{
				name: 'Button Group',
				examples: [
					{
						propName: 'ariaDescription',
						description: 'Hidden span will be added with description for screen readers',
						variations: [
							{
								primaryVariants: 'ariaDescription="text"',
								component: <CSButtonGroup ariaDescription="a group of related buttons sharing similar actions">
									<CSButton label="First Button" />
									<CSButton label="Second Button" />
									<CSButton btnStyle="brand" label="Third Button"/>
								</CSButtonGroup>,
								code: `<CSButtonGroup ariaDescription="a group of related buttons sharing similar actions">
									<CSButton label="First Button" />
									<CSButton label="Second Button" />
									<CSButton label="Third Button" btnStyle="brand" />
								</CSButtonGroup>`
							}, {
								primaryVariants: 'ariaDescription="text"',
								secondaryVariants: 'id="custom-id"',
								component: <CSButtonGroup id="custom-id" ariaDescription="a group of related buttons sharing similar actions">
									<CSButton label="First Button" />
									<CSButton label="Second Button" />
									<CSButton label="Third Button" btnStyle="brand" />
								</CSButtonGroup>,
								code: `<CSButtonGroup id="custom-id" ariaDescription="a group of related buttons sharing similar actions">
									<CSButton label="First Button" />
									<CSButton label="Second Button" />
									<CSButton label="Third Button" btnStyle="brand" />
								</CSButtonGroup>`
							}
						]
					}, {
						propName: 'combined',
						variations: [
							{
								primaryVariants: 'combined={true}',
								quickLink: 'true',
								component: <CSButtonGroup combined>
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup combined>
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
							}, {
								primaryVariants: 'combined={false}',
								quickLink: 'false',
								component: <CSButtonGroup combined={false}>
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup combined={false}>
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
							}
						]
					}, {
						propName: 'marginPosition',
						variations: [
							{
								primaryVariants: 'marginPosition="left"',
								quickLink: 'left',
								component: <CSButtonGroup marginPosition="left">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup marginPosition="left">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
							}, {
								primaryVariants: 'marginPosition="right"',
								quickLink: 'right',
								component: <CSButtonGroup
									combined={false}
									marginPosition="right"
								>
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup
									combined={false}
									marginPosition="right"
								>
									<CSButton label="First Button" />
									<CSButton label="Middle Button"	/>
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
							}, {
								primaryVariants: 'marginPosition="both"',
								quickLink: 'both',
								component: <CSButtonGroup marginPosition="both">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup marginPosition="both">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
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
								component: <CSButtonGroup id="custom-id" className="custom-class">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>,
								code: `<CSButtonGroup id="custom-id" className="custom-class">
									<CSButton label="First Button" />
									<CSButton label="Middle Button" />
									<CSButton label="Last Button" btnStyle="brand" />
									<CSDropdown label="button dropdown">
										<CSButton label="Dropdown item 1" />
										<CSButton label="Dropdown item 2" />
										<CSButton label="Dropdown item 3" />
									</CSDropdown>
								</CSButtonGroup>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSButtonGroupChildren',
					types: ['<CSButton />', '<CSDropdown />', 'any']
				}],
				description: 'This component is designed to support CSButton and CSDropdown as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the button group.'
			}, {
				name: 'combined',
				types: ['boolean'],
				default: 'true',
				description: 'Set whether the button group styling should be combined.'
			}, {
				name: 'marginPosition',
				customTypes: [{
					name: 'CSButtonGroupMargin',
					types: ['\'left\'', '\'right\'', '\'both\'']
				}],
				description: 'Set horizontal margin location.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the button group.'
			}, {
				name: 'ariaDescription',
				types: ['string'],
				description: 'Set an accessible semantic description of the button group.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the button group div.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'2.1.1',
					'2.1.2',
					'2.5.3',
					'3.2.1',
					'3.3.1'
				],
				requirements: [
					{
						structure: [
							'`div` wrapper with role',
							'`<CSButton>`',
							'hidden `<span>` with aria description'
						],
						properties: [
							'`aria-labelledby` - contains id pointing to hidden span when `ariaDescription` is set which associates group with description',
							'`role="group"`'
						],
						styling: [
							'Distinct hover, active and focus state styles'
						],
						keyboardOperability: [
							'Proper focus management and keyboard operability ensured by `<CSButton>`'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getButtonGroupDoc();

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

export default CSButtonGroupPreview;
