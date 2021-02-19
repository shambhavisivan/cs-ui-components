import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSAlert, CSButton, CSList, CSListGroup, CSListItem } from '@cloudsense/cs-ui-components';

class CSListPreview extends React.Component {
	handleOnSelect = () => alert('Item is selected!');
	getCSListDoc() {
		const json = {
			name: 'List',
			usage: 'List that contains items',
			accessible: 'no',
			examples: [
				{
					propName: 'text',
					variations: [
						{
							quickLink: '',
							component:
								<CSList>
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['simple-list'],
							quickLink: 'simple-list',
							component:
								<CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						},
						{
							variationName: ['check-list'],
							quickLink: 'check-list',
							component:
								<CSList variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'size',
					variations: [
						{
							variationName: ['small'],
							quickLink: 'small',
							component:
								<CSList size="small" variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							component:
								<CSList variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							component:
								<CSList size="large" variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'selected',
					variations: [
						{
							variationName: ['true'],
							variationText: ['variant="simple-list"'],
							quickLink: 'true simple-list',
							component:
								<CSList>
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>
						},
						{
							variationName: ['true'],
							variationText: ['variant="check-list"'],
							quickLink: 'true check-list',
							component:
								<CSList variant="check-list">
									<CSListItem text="List item" selected />
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'onSelect',
					variations: [
						{
							component:
								<CSList>
									<CSListItem text="List item" onSelect={this.handleOnSelect} />
									<CSListItem text="List item" onSelect={this.handleOnSelect} />
								</CSList>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							variationText: ['variant="simple-list"'],
							quickLink: 'true simple-list',
							component:
								<CSList>
									<CSListItem text="List item" />
									<CSListItem text="List item" disabled />
								</CSList>
						},
						{
							variationName: ['true'],
							variationText: ['variant="check-list"'],
							quickLink: 'true check-list',
							component:
								<CSList variant="check-list">
									<CSListItem text="List item" />
									<CSListItem text="List item" disabled />
								</CSList>
						}
					]
				},
				{
					propName: 'customContent',
					variations: [
						{
							variationText: ['variant="simple-list"'],
							component:
								<CSList>
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												iconDisplay="icon-only"
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>
						},
						{
							variationText: ['variant="check-list"'],
							component:
								<CSList variant="check-list">
									<CSListItem
										text="List item"
										customContent={
											<CSButton
												label="delete"
												iconDisplay="icon-only"
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									/>
									<CSListItem text="List item" />
								</CSList>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSList id="list-id">
									<CSListGroup title="List Group" id="list-group-id" >
										<CSListItem text="List item" id="list-item-id-1" />
										<CSListItem text="List item" id="list-item-id-2" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - title',
					variations: [
						{
							component:
								<CSList >
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - collapsible',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSList>
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							component:
								<CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - customContent',
					variations: [
						{
							component:
								<CSList>
									<CSListGroup
										title="List Group"
										customContent={
											<CSButton
												label="delete"
												iconDisplay="icon-only"
												iconName="delete"
												btnType="transparent"
												btnStyle="brand"
												size="small"
											/>
										}
									>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							component:
								<CSList>
									<CSListGroup title="List Group" collapsible={false}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - checkboxOption',
					alert: {
						variant: 'info',
						text: 'checkboxOption can only be used if variant is set to check-list!'
					},
					variations: [
						{
							quickLink: 'selectAll',
							variationName: ['selectAll'],
							variationText: ['variant="check-list"'],
							component:
								<CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						},
						{
							quickLink: 'selectSelf',
							variationName: ['selectSelf'],
							variationText: ['variant="check-list"'],
							component:
								<CSList variant="check-list">
									<CSListGroup title="List Group" checkboxOption="selectSelf">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - onSelect',
					variations: [
						{
							variationText: ['variant="check-list"'],
							component:
								<CSList variant="check-list">
									<CSListGroup title="List Group" onSelect={this.handleOnSelect}>
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				},
				{
					propName: 'List Group - List variant',
					variations: [
						{
							variationText: ['variant="simple-list"'],
							component:
								<CSList >
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						},
						{
							variationText: ['variant="check-list"'],
							component:
								<CSList variant="check-list">
									<CSListGroup title="List Group">
										<CSListItem text="List item" />
										<CSListItem text="List item" />
									</CSListGroup>
								</CSList >
						}
					]
				}
			],

			properties: [
				{
					name: 'children',
					customTypes: [{
						name: 'CSListChildren',
						types: ['<CSListGroup />', '<CSListItem />', '\'any\'']
					}],
					description: 'This component is designed to support CSListGroup and CSListItem as children.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the ul tag.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the list.'
				}, {
					name: 'size',
					customTypes: [{
						name: 'CSListSize',
						types: ['large', 'medium', 'small']
					}],
					default: 'medium',
					description: 'List size.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSListVariant',
						types: ['simple-list', 'check-list']
					}],
					default: 'simple-list',
					description: 'List variant.'
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

	getCSListItemDoc() {
		const json = {
			name: 'List Item',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the li tag.'
				}, {
					name: 'customContent',
					types: ['ReactNode'],
					description: 'Additional content which can be added to list item (buttons, text, etc.).'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'List item disabled state.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the list item.'
				}, {
					name: 'onSelect',
					types: ['(value?: any) => any'],
					description: 'Callback function which will be executed when selection is changed on list item.'
				}, {
					name: 'selected',
					types: ['boolean'],
					default: 'false',
					description: 'Selected state.'
				}, {
					name: 'text',
					types: ['string'],
					description: 'Set list item text.'
				}
			]
		};
		return json;
	}

	getCSListGroupDoc() {
		const json = {
			name: 'List Group',
			properties: [
				{
					name: 'children',
					customTypes: [{
						name: 'CSListChildren',
						types: ['<CSListItem />', '\'any\'']
					}],
					description: 'This component is designed to support CSListItem as a child.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the heading tag (h3).'
				}, {
					name: 'collapsible',
					types: ['boolean'],
					default: 'false',
					description: 'List group collapsible state.'
				}, {
					name: 'customContent',
					types: ['ReactNode'],
					description: 'Additional content which can be added to list group header (buttons, text, etc.).'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the list group.'
				}, {
					name: 'onSelect',
					types: ['(value?: any) => any'],
					description: 'Callback function which will be executed when list group checkbox is selected. It can only be used if variant is check-list.'
				}, {
					name: 'checkboxOption',
					customTypes: [{
						name: 'CSListGroupCheckboxOption',
						types: ['selectAll', 'selectSelf']
					}],
					default: 'selectAll',
					description: 'Defines how items in group will be selected if list group checkbox is checked. When is set to \'selectAll\' it will select everything in the group, but when set to \'selectSelf\' it will select only the group itself. It can be used only if variant is check-list.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'List group header title.'
				}
			]
		};
		return json;
	}

	render() {
		const component = this.getCSListDoc();
		const component2 = this.getCSListItemDoc();
		const component3 = this.getCSListGroupDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSListPreview;
