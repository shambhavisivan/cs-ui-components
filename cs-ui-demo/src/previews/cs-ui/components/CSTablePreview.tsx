import React from 'react';
import {
	CSTable,
	CSTableHeader,
	CSTableBody,
	CSTableRow,
	CSTableCell,
	CSButton
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSTablePreview extends React.Component {
	handleClick = () => alert('Table row has been clicked.');
	handleMouseDown = () => alert('Mouse down has been registered.');
	handleMouseOut = () => alert('Mouse out has been registered.');
	handleMouseOver = () => alert('Mouse over has been registered.');

	getDoc = () => ({
		name: 'Table',
		usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
		accessible: 'partially',
		/* alerts: {
			variant: 'error',
			text: 'CSTable is deprecated and should not be used. Use CSDataTable instead.'
		}, */
		components: [
			{
				name: 'CSTable',
				examples: [
					{
						propName: 'selectableRows',
						alert: {
							variant: 'warning',
							text: 'This prop needs to be reviewed and updated. Do not use.'
						},
						variations: [
							{
								component: <CSTable selectableRows>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable selectableRows>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'tableDescription',
						description: 'Hidden span will be added with description for screen readers',
						variations: [
							{
								primaryVariants: 'tableDescription="text"',
								quickLink: 'tableDescription',
								component: <CSTable tableDescription="almost last and almost best table">
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable tableDescription="almost last and almost best table">
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
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
								component: <CSTable id="custom-table-id" className="custom-br-blue">
									<CSTableHeader id="custom-table-header-id" className="custom-table-header-class">
										<CSTableCell
											id="custom-table-cell-id"
											className="custom-br-mint"
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody id="custom-table-body-id" className="custom-br-purple">
										<CSTableRow id="custom-table-row-id">
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1}
											/>
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow className="custom-br-mint">
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable id="custom-table-id" className="custom-br-blue">
									<CSTableHeader id="custom-table-header-id" className="custom-table-header-class">
										<CSTableCell
											id="custom-table-cell-id"
											className="custom-br-mint"
											text="Header Item 1"
											grow={2}
										/>
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody id="custom-table-body-id" className="custom-br-purple">
										<CSTableRow id="custom-table-row-id">
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1}
											/>
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow className="custom-br-mint">
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSTable is designed to support CSTableHeader and CSTableBody as children. CSTableBody is designed to support CSTableRow. CSTableHeader and CSTableRow are designed to support CSTableCell, which then supports custom content.',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}
				],
				properties: [
					{
						name: 'selectableRows',
						types: 'boolean',
						description: 'Implement keyboard support for table rows.'
					}, {
						name: 'tableDescription',
						types: 'string',
						description: 'Set a table description for accessibility screen readers.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the table.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSTableChildren',
							types: [
								'<CSTableHeader />',
								'<CSTableBody />',
								'any'
							]
						},
						description: 'This component is designed to support CSTableHeader and CSTableBody as children.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table div.'
					}
				]
			}, {
				name: 'CSTableHeader',
				examples: [
					{
						propName: 'headerSticky',
						variations: [
							{
								primaryVariants: 'headerSticky={true}',
								component: <CSTable>
									<CSTableHeader headerSticky>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Third Row Item 1" grow={2} />
											<CSTableCell text="Third Row Item 2" grow={1} />
											<CSTableCell text="Third Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fourth Row Item 1" grow={2} />
											<CSTableCell text="Fourth Row Item 2" grow={1} />
											<CSTableCell text="Fourth Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fifth Row Item 1" grow={2} />
											<CSTableCell text="Fifth Row Item 2" grow={1} />
											<CSTableCell text="Fifth Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader headerSticky>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Third Row Item 1" grow={2} />
											<CSTableCell text="Third Row Item 2" grow={1} />
											<CSTableCell text="Third Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fourth Row Item 1" grow={2} />
											<CSTableCell text="Fourth Row Item 2" grow={1} />
											<CSTableCell text="Fourth Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fifth Row Item 1" grow={2} />
											<CSTableCell text="Fifth Row Item 2" grow={1} />
											<CSTableCell text="Fifth Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}
				],
				properties: [
					{
						name: 'headerSticky',
						types: 'boolean',
						description: 'Apply sticky positioning to the table header.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the table header.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table header.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSTableHeaderChildren',
							types: ['<CSTableCell />', 'any']
						},
						description: 'This component is designed to support CSTableCell as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table header div.'
					}
				]
			}, {
				name: 'CSTableBody',
				examples: [
					{
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="10rem"',
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" />
										<CSTableCell text="Header Item 2" />
										<CSTableCell text="Header Item 3" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell text="First Row Item 1" />
											<CSTableCell text="First Row Item 2" />
											<CSTableCell text="First Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" />
											<CSTableCell text="Second Row Item 2" />
											<CSTableCell text="Second Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Third Row Item 1" />
											<CSTableCell text="Third Row Item 2" />
											<CSTableCell text="Third Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fourth Row Item 1" />
											<CSTableCell text="Fourth Row Item 2" />
											<CSTableCell text="Fourth Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" />
										<CSTableCell text="Header Item 2" />
										<CSTableCell text="Header Item 3" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody maxHeight="10rem">
										<CSTableRow>
											<CSTableCell text="First Row Item 1" />
											<CSTableCell text="First Row Item 2" />
											<CSTableCell text="First Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" />
											<CSTableCell text="Second Row Item 2" />
											<CSTableCell text="Second Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Third Row Item 1" />
											<CSTableCell text="Third Row Item 2" />
											<CSTableCell text="Third Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Fourth Row Item 1" />
											<CSTableCell text="Fourth Row Item 2" />
											<CSTableCell text="Fourth Row Item 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}
				],
				properties: [
					{
						name: 'maxHeight',
						types: 'string',
						description: 'Set the max-height attribute for the table body.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the table body.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table body.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSTableBodyChildren',
							types: ['<CSTableRow />', 'any']
						},
						description: 'This component is designed to support CSTableRow as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table body div.'
					}
				]
			}, {
				name: 'CSTableRow',
				examples: [
					{
						propName: 'onClick',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onClick={this.handleClick}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onClick={this.handleClick}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'onMouseDown',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseDown={this.handleMouseDown}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseDown={this.handleMouseDown}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'onMouseOut',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseOut={this.handleMouseOut}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseOut={this.handleMouseOut}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'onMouseOver',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseOver={this.handleMouseOver}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow onMouseOver={this.handleMouseOver}>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'rowHighlighted',
						variations: [
							{
								primaryVariants: 'rowHighlighted={true}',
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow rowHighlighted>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow rowHighlighted>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'rowSelected',
						variations: [
							{
								primaryVariants: 'rowSelected={true}',
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow rowSelected>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" grow={1} />
										<CSTableCell text="Header Item 3" grow={1} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={2} />
											<CSTableCell text="First Row Item 2" grow={1} />
											<CSTableCell text="First Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow rowSelected>
											<CSTableCell text="Second Row Item 1" grow={2} />
											<CSTableCell text="Second Row Item 2" grow={1} />
											<CSTableCell text="Second Row Item 3" grow={1} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}
				],
				properties: [
					{
						name: 'onClick',
						types: '(event) => any',
						description: 'Handler method for the click event.'
					}, {
						name: 'onMouseDown',
						types: '(event) => any',
						description: 'Handler method for the mouse down event.'
					}, {
						name: 'onMouseOut',
						types: '(event) => any',
						description: 'Handler method for the mouse out event.'
					}, {
						name: 'onMouseOver',
						types: '(event) => any',
						description: 'Handler method for the mouse over event.'
					}, {
						name: 'rowHighlighted',
						types: 'bolean',
						description: 'Highlights row. Used to simulate hover effect.'
					}, {
						name: 'rowSelected',
						types: 'bolean',
						description: 'Marks selected row, which works only if table has selectableRows true.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the table row.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table row.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSTableRowChildren',
							types: ['<CSTableCell />', 'any']
						},
						description: 'This component is designed to support CSTableCell as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table row div.'
					}
				]
			}, {
				name: 'CSTableCell',
				examples: [
					{
						propName: 'grow',
						variations: [
							{
								primaryVariants: 'grow={3}',
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={3} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={3} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={3} />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" grow={3} />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'maxWidth',
						variations: [
							{
								primaryVariants: 'maxWidth="15rem"',
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" maxWidth="15rem" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" maxWidth="15rem" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" maxWidth="15rem" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="First Row Item 1" maxWidth="15rem" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}, {
						propName: 'text',
						variations: [
							{
								component: <CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" />
										<CSTableCell text="Header Item 3" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="This is text for cell 1" grow={2} />
											<CSTableCell text="This is text for cell 2" />
											<CSTableCell text="This is text for cell 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>,
								code: `<CSTable>
									<CSTableHeader>
										<CSTableCell text="Header Item 1" grow={2} />
										<CSTableCell text="Header Item 2" />
										<CSTableCell text="Header Item 3" />
										<CSTableCell text="Button Column" />
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell text="This is text for cell 1" grow={2} />
											<CSTableCell text="This is text for cell 2" />
											<CSTableCell text="This is text for cell 3" />
											<CSTableCell>
												<CSButton
													label="label"
													labelHidden
													btnType="default"
													iconName="emoji"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>`
							}
						]
					}
				],
				properties: [
					{
						name: 'maxHeight',
						types: 'string',
						description: 'Set the max-height attribute for the table body.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the table body.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table body.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSTableBodyChildren',
							types: ['<CSTableRow />', 'any']
						},
						description: 'This component is designed to support CSTableRow as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table body div.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4',
				'2.1.1',
				'2.1.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<div>` - all table parts',
					'`<span>` - text wrappers inside cells with overflow ellipsis styles because cells have flex which prevents text ellipsis'
				],
				attributes: [
					'`role="table"` - top wrapper',
					'`role="row"` - div that contains cells which are grouped in a row',
					'`role="columnheader"` - div that represent table header cell',
					'`role="rowgroup"` - div that wraps table row, represents `thead` or `tbody`',
					'`role="cell"` - div that represents table cell'
				],
				styling: [
					'Color contrast ratio > 4.5'
				],
				keyboardOperability: [
					'Selectable table rows are focusable'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTablePreview;
