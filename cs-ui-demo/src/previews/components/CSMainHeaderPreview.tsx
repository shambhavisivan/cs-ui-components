import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon} from '@cloudsense/cs-ui-components';

class CSMainHeaderPreview extends React.Component {
	getCSMainHeaderDoc() {

		const json = {
			name: 'Main Header',
			usage: 'Main Headers are used at the top of several page types. They are comprised of multiple components.',
			examples: [
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['neutral'],
							quickLink: 'neutral',
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['brand'],
							quickLink: 'brand',
							string: '',
							component:
								<CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							string: '',
							component:
								<CSMainHeader
									color="error"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['info'],
							quickLink: 'info',
							string: '',
							component:
								<CSMainHeader
									color="info"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
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
							string: '',
							component:
								<CSMainHeader maxWidth="720px">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 720px"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['80rem'],
							quickLink: '80rem',
							string: '',
							component:
								<CSMainHeader maxWidth="80rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 80rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 100%"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
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
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							string: '',
							component:
								<CSMainHeader
									color="neutral"
									sticky={false}
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is not a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
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
							string: '',
							component:
								<CSMainHeader className="custom-class">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
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
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSButton label="back" btnType="transparent" btnStyle="brand" iconName="back" iconDisplay="icon-only"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a custom header"
										subtitle="This is a subtitle"
									>
										<CSButton label="Back to basket" iconName="reply"/>
									</CSMainHeaderLeft>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
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
					description: 'Background color',
					options: [
						'neutral',
						'brand',
						'error',
						'info'
					]
				},
				{
					propertyName: 'maxWidth',
					description: 'Max width of inner wrapper',
					options: [
						'Examples',
						'720px',
						'80rem',
						'100%'
					]
				},
				{
					propertyName: 'sticky',
					description: 'Logic for sticky position',
					options: [
						'true',
						'false'
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
					propertyName: 'subtitle',
					description: 'Secondary text content'
				},
				{
					propertyName: 'title',
					description: 'Main header title'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSMainHeaderDoc();
		const component2 = this.getCSMainHeaderLeftDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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
