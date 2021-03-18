import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon } from '@cloudsense/cs-ui-components';

class CSMainHeaderPreview extends React.Component {
	getCSMainHeaderDoc = () => ({
		name: 'Main Header',
		usage: 'Main Headers are used at the top of several page types. They are comprised of multiple components.',
		accessible: 'yes',
		previews: [
			{
				name: 'Main Header',
				examples: [
					{
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="neutral"',
								quickLink: 'neutral',
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'color="brand"',
								quickLink: 'brand',
								component: <CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'color="success"',
								quickLink: 'success',
								component: <CSMainHeader color="success">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a green header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader color="success">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a green header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'color="error"',
								quickLink: 'error',
								component: <CSMainHeader color="error">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader color="error">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'color="info"',
								quickLink: 'info',
								component: <CSMainHeader color="info">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader color="info">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton
											label="Button 2"
											btnType="transparent"
											btnStyle="outline"
										/>
									</CSMainHeaderRight>
								</CSMainHeader>`
							}
						]
					}, {
						propName: 'maxWidth',
						variations: [
							{
								primaryVariants: 'maxWidth="100%"',
								quickLink: '100%',
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 100%"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 100%"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'maxWidth="720px"',
								quickLink: '720px',
								component: <CSMainHeader maxWidth="720px">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 720px"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader maxWidth="720px">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 720px"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'maxWidth="40rem"',
								quickLink: '40rem',
								component: <CSMainHeader maxWidth="40rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 40rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader maxWidth="40rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 40rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}
						]
					}, {
						propName: 'sticky',
						variations: [
							{
								primaryVariants: 'sticky={true}',
								quickLink: 'true',
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'sticky={false}',
								quickLink: 'false',
								component: <CSMainHeader sticky={false}>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is not a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader sticky={false}>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is not a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
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
								component: <CSMainHeader id="custom-id" className="custom-class">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader id="custom-id" className="custom-class">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSMainHeader only supports CSMainHeaderIcon, CSMainHeaderLeft and CSMainHeaderRight as children. They all support custom children.',
						variations: [
							{
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSButton
											label="back"
											labelHidden
											btnType="transparent"
											btnStyle="brand"
											iconName="back"
										/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a custom header"
										subtitle="This is a subtitle"
									>
										<CSButton label="Back to basket" iconName="reply" />
									</CSMainHeaderLeft>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader>
									<CSMainHeaderIcon>
										<CSButton
											label="back"
											labelHidden
											btnType="transparent"
											btnStyle="brand"
											iconName="back"
										/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a custom header"
										subtitle="This is a subtitle"
									>
										<CSButton label="Back to basket" iconName="reply" />
									</CSMainHeaderLeft>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}
						]
					}
				]
			}, {
				name: 'Main Header Left',
				examples: [
					{
						propName: 'reverseOrder',
						variations: [
							{
								primaryVariants: 'reverseOrder={true}',
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										reverseOrder
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>,
								code: `<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										reverseOrder
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>`
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
					name: 'CSMainHeaderChildren',
					types: ['<CSMainHeaderIcon />', '<CSMainHeaderLeft />', '<CSMainHeaderRight />', '\'any\'']
				}],
				description: 'This component is designed to support CSMainHeaderIcon, CSMainHeaderLeft and CSMainHeaderRight as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the list.'
			}, {
				name: 'color',
				customTypes: [{
					name: 'CSMainHeaderColor',
					types: [
						'\'neutral\'',
						'\'brand\'',
						'\'success\'',
						'\'error\'',
						'\'info\''
					]
				}],
				default: '\'neutral\'',
				description: 'Set the main header background colour.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the main header.'
			}, {
				name: 'maxWidth',
				types: ['string'],
				default: '\'100%\'',
				description: 'Set the max-width of the dropdown content. (eg. 720px, 80rem, 100%, etc.)'
			}, {
				name: 'sticky',
				types: ['boolean'],
				default: 'true',
				description: 'Set whether the main header should be sticky.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the header tag.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'1.4.4',
					'2.1.1',
					'2.1.2',
					'4.1.2'
				],
				requirements: [
					{
						structure: [
							'HTML `<header>`',
							'Title is HTML `<h1>`',
							'Subtitle is HTML `<h4>`'
						]
					}
				]
			}
		]
	})

	getCSMainHeaderLeftDoc = () => ({
		name: 'MainHeaderLeft',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the main header left.'
			}, {
				name: 'reverseOrder',
				types: ['boolean'],
				default: 'false',
				description: 'Reverse the order of the title and subtitle.'
			}, {
				name: 'subtitle',
				types: ['string'],
				description: 'Set a subtitle for the main header left.'
			}, {
				name: 'title',
				required: true,
				types: ['string'],
				description: 'Set a title for the main header left.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the main header left div wrapper.'
			}
		]
	})

	getCSMainHeaderRightDoc = () => ({
		name: 'MainHeaderRight',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the main header right.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the main header right div wrapper.'
			}
		]
	})

	getCSMainHeaderIconDoc = () => ({
		name: 'MainHeaderIcon',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the main header icon.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the main header icon div wrapper.'
			}
		]
	})

	render() {
		const component = this.getCSMainHeaderDoc();
		const component2 = this.getCSMainHeaderLeftDoc();
		const component3 = this.getCSMainHeaderRightDoc();
		const component4 = this.getCSMainHeaderIconDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2, component3, component4]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSMainHeaderPreview;
