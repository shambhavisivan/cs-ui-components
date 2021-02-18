import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon } from '@cloudsense/cs-ui-components';

class CSMainHeaderPreview extends React.Component {
	getCSMainHeaderDoc() {
		const json = {
			name: 'Main Header',
			usage: 'Main Headers are used at the top of several page types. They are comprised of multiple components.',
			accessible: 'yes',
			examples: [
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['neutral'],
							quickLink: 'neutral',
							component:
								<CSMainHeader>
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
								</CSMainHeader>
						},
						{
							variationName: ['brand'],
							quickLink: 'brand',
							component:
								<CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline" />
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							component:
								<CSMainHeader
									color="error"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline" />
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['info'],
							quickLink: 'info',
							component:
								<CSMainHeader
									color="info"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline" />
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'maxWidth',
					variations: [
						{
							variationName: ['720px'],
							quickLink: '720px',
							component:
								<CSMainHeader maxWidth="720px">
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
								</CSMainHeader>
						},
						{
							variationName: ['80rem'],
							quickLink: '80rem',
							component:
								<CSMainHeader maxWidth="80rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 80rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSMainHeader maxWidth="100%">
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
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'sticky',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSMainHeader>
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
								</CSMainHeader>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							component:
								<CSMainHeader
									color="neutral"
									sticky={false}
								>
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
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSMainHeader id="id">
									<CSMainHeaderIcon id="id">
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										id="id"
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight id="id">
										<CSButton label="Button 1" />
										<CSButton label="Button 2" btnStyle="brand" />
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'reverseOrder',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSMainHeader>
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
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSMainHeader className="custom-class">
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
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'custom',
					customText: 'Want to add buttons or other features to the header? Just add them as child components.',
					variations: [
						{
							variationName: ['Add custom buttons'],
							quickLink: 'Add custom buttons',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSButton label="back" btnType="transparent" btnStyle="brand" iconName="back" iconDisplay="icon-only" />
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
								</CSMainHeader>
						}
					]
				}
			],

			properties: [
				{
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
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	getCSMainHeaderLeftDoc() {
		const json = {
			name: 'MainHeaderLeft',
			properties: [
				{
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
		};

		return json;
	}
	getCSMainHeaderRightDoc() {
		const json = {
			name: 'MainHeaderRight',
			properties: [
				{
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the main header right.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the main header right div wrapper.'
				}
			]
		};

		return json;
	}
	getCSMainHeaderIconDoc() {
		const json = {
			name: 'MainHeaderIcon',
			properties: [
				{
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the main header icon.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the main header icon div wrapper.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSMainHeaderDoc();
		const component2 = this.getCSMainHeaderLeftDoc();
		const component3 = this.getCSMainHeaderRightDoc();
		const component4 = this.getCSMainHeaderIconDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4]} />
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

export default CSMainHeaderPreview;
