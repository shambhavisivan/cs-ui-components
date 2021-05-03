import React from 'react';
import {
	CSDivider,
	CSButtonGroup,
	CSDropdown,
	CSMainHeader,
	CSMainHeaderLeft,
	CSMainHeaderRight,
	CSMainHeaderIcon,
	CSButton,
	CSIcon
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSDividerPreview extends React.Component {
	getDoc = () => ({
		name: 'Divider',
		usage: 'Divides things, simple.',
		accessible: 'yes',
		components: [
			{
				name: 'CSDivider',
				examples: [
					{
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="vertical"',
								quickLink: 'vertical',
								component: <CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji" />
									</CSMainHeaderIcon>
									<CSMainHeaderLeft title="This is a white header" subtitle="This is a subtitle" />
									<CSMainHeaderRight>
										<CSButtonGroup>
											<CSButton label="Button 1" />
											<CSButton label="Button 2" />
										</CSButtonGroup>
										<CSDivider variant="vertical" size="2rem" />
										<CSButton label="Button 2" />
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
										<CSButtonGroup>
											<CSButton label="Button 1" />
											<CSButton label="Button 2" />
										</CSButtonGroup>
										<CSDivider variant="vertical" size="2rem" />
										<CSButton label="Button 2" />
									</CSMainHeaderRight>
								</CSMainHeader>`
							}, {
								primaryVariants: 'variant="horizontal"',
								quickLink: 'horizontal',
								component: <CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="horizontal" />
									<CSButton label="Lonely Button" />
								</CSDropdown>,
								code: `<CSDropdown>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="horizontal" />
									<CSButton label="Lonely Button" />
								</CSDropdown>`
							}
						]
					}, {
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'This prop can only be used with the horizontal variant.'
						},
						variations: [
							{
								secondaryVariants: 'variant="horizontal"',
								component: <CSDivider
									variant="horizontal"
									label="Some label"
									size="25rem"
								/>,
								code: `<CSDivider
									variant="horizontal"
									label="Some label"
									size="25rem"
								/>`
							}
						]
					}, {
						propName: 'size',
						description: 'The size property affects height for vertical variants and it affects width for horizontal variants.',
						variations: [
							{
								primaryVariants: 'size="100px"',
								secondaryVariants: 'variant="vertical"',
								quickLink: '100px vertical',
								component: <CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="vertical" size="100px" />
									<CSButton label="Button 3" />
								</CSButtonGroup>,
								code: `<CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider variant="vertical" size="100px" />
									<CSButton label="Button 3" />
								</CSButtonGroup>`
							}, {
								primaryVariants: 'size="50%"',
								secondaryVariants: 'variant="horizontal"',
								quickLink: '50% horizontal',
								component: <>
									<CSButton label="Button 1" />
									<CSDivider variant="horizontal" size="50%" />
									<CSButton label="Button 2" />
								</>,
								code: `<CSButton label="Button 1" />
								<CSDivider variant="horizontal" size="50%" />
								<CSButton label="Button 2" />`
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
								component: <CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider
										variant="vertical"
										id="custom-id"
										className="custom-br-mint"
										size="2rem"
									/>
									<CSButton label="Button 3" />
								</CSButtonGroup>,
								code: `<CSButtonGroup>
									<CSButton label="Button 1" />
									<CSButton label="Button 2" />
									<CSDivider
										variant="vertical"
										id="custom-id"
										className="custom-br-mint"
										size="2rem"
									/>
									<CSButton label="Button 3" />
								</CSButtonGroup>`
							}
						]
					}
				],
				properties: [
					{
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the divider.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the divider.'
					}, {
						name: 'label',
						types: ['string'],
						description: 'Set the divider label, available for horizontal only.'
					}, {
						name: 'size',
						types: ['string'],
						description: 'Set the width for the horizontal or the height for the vertical divider. (eg. 20px, 10rem, 100%, etc.)'
					}, {
						name: 'variant',
						required: true,
						customTypes: [{
							name: 'CSDividerVariant',
							types: ['\'horizontal\'', '\'vertical\'']
						}],
						description: 'Set the divider variant.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the divider div.'
					}
				]

			}
		],
		accessibility: {
			criterionList: [
				'4.1.2'
			],
			requirements: {
				properties: [
					'`role="separator"`',
					'`aria-orientation`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSDividerPreview;
