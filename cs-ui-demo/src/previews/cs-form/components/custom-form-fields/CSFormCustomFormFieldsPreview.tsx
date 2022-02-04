// tslint:disable:no-console
import React from 'react';
import * as CSD from '../../../../demo-components';
import { CSButton, CSChip, CSDataTable, CSInputSearch, CSSlider, CSTooltip } from '@cloudsense/cs-ui-components';
import CSCustomFieldsCommonAttributes from './cs-form-custom-fields-common-attributes';
import CSCustomFieldSpecificAttributes from './cs-form-custom-field-specific-attributes';
import CSFormCustomModalFieldSpecificAttributes from './cs-form-custom-modal-field-specific-attributes';
import CSFormCustomModalButtonAttributes from './cs-form-custom-modal-button-attributes';
import CSFormCustomModalAttributes from './cs-form-custom-modal-attributes';
import CSFormCustomModalHeaderAttributes from './cs-form-custom-modal-header-attributes';
import CSFormCustomModalBodyAttributes from './cs-form-custom-modal-body-attributes';
import CSFormCustomModalFooterAttributes from './cs-from-custom-modal-footer-attributes';
import { CSForm } from '@cloudsense/cs-form-v2';

const modalButtonPath = '../cs-ui/button#CSButton-';
const modalPath = '../cs-ui/modal#CSModal-';
const modalHeaderPath = '../cs-ui/modal#CSModalHeader-';
const modalBodyPath = '../cs-ui/modal#CSModalBody-';
const modalFooterPath = '../cs-ui/modal#CSModalFooter-';

const CSFormCustomFormFieldsPreview = () => {
	return (
		<CSD.Page
			title="Custom Form Fields"
			tables={[
				CSCustomFieldsCommonAttributes,
				CSCustomFieldSpecificAttributes,
				CSFormCustomModalFieldSpecificAttributes,
				CSFormCustomModalButtonAttributes,
				CSFormCustomModalAttributes,
				CSFormCustomModalHeaderAttributes,
				CSFormCustomModalBodyAttributes,
				CSFormCustomModalFooterAttributes
			]}
			routePrefix="cs-form"
		>
			<CSD.Heading>Intro</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					Custom form fields allow the rendering of custom content as an inline form field or within a custom modal,
					hence there are 2 types of custom fields: custom and custom-modal.
				</CSD.Text>
				<CSD.Text>
					Like standard form fields, custom fields are defined in CSForm's data prop as part of the section object's fields array,
					but they aren't subject to any validation and they don't need a unique name or label in order to be rendered.
				</CSD.Text>
				<CSD.Text>In order to render the desired custom field, the `fieldType` property needs to be defined.</CSD.Text>
				<CSD.Text>The table below shows which component will be rendered for each fieldType property value:</CSD.Text>
				<CSDataTable
					columns={[
						{
							key: 'fieldType',
							header: 'fieldType Value'
						}, {
							key: 'component',
							header: 'Corresponding Component'
						}
					]}
					rows={[
						{
							key: 'custom',
							data: {
								fieldType: 'CUSTOM',
								component: 'CSFormCustomField'
							}
						}, {
							key: 'custom-modal',
							data: {
								fieldType: 'CUSTOM-MODAL',
								component: 'CSFormCustomModalField'
							}
						}
					]}
				/>
				<CSD.Text>Custom form fields also have common properties just like standard fields, and they also have specific properties based on the `fieldType` value.</CSD.Text>
				<CSD.Text>Both of these field types are explained and displayed below.</CSD.Text>
			</CSD.Section>
			<CSD.Heading>Common Properites</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Custom fields share 4 properties: `fieldType`, `grow`, `showInNewLine` and `hidden`.</CSD.Text>
				<CSD.Text>Just like in standard fields, `fieldType` defines which field will be rendered and enables access to a field's specific properties.</CSD.Text>
				<CSD.Text>`grow` and `showInNewLine` define a field's width and position in the form section.</CSD.Text>
				<CSD.Text>The `hidden` property hides the form field based on a condition.</CSD.Text>
				<CSD.Preview
					table={CSCustomFieldsCommonAttributes}
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'CUSTOM',
									render: <CSTooltip content="Custom content tooltip" />,
									grow: 3
								}, {
									fieldType: 'CUSTOM',
									render: <CSChip text="Custom chip" />,
								}, {
									fieldType: 'CUSTOM-MODAL',
									showInNewLine: true,
									modalButton: {
										label: 'Open modal'
									},
									modal: {
										closeButton: true,
										header: {
											title: "This is a custom modal"
										},
										body: {
											bodyContent: <span>This is custom modal body content.</span>
										}
									}
								}, {
									fieldType: 'CUSTOM',
									render: <span>This is hidden.</span>,
									hidden: true
								}]
							}]}
						/>
					`}
				>
					<CSForm
						data={[
							{
								sectionKey: 'common-props-section',
								label: 'Section',
								collapsible: true,
								fields: [{
									fieldType: 'CUSTOM',
									render: <CSTooltip content="Custom content tooltip" />,
									grow: 3
								}, {
									fieldType: 'CUSTOM',
									render: <CSChip text="Custom chip" />
								}, {
									fieldType: 'CUSTOM-MODAL',
									showInNewLine: true,
									modalButton: {
										label: 'Open modal'
									},
									modal: {
										closeButton: true,
										header: {
											title: 'This is a custom modal'
										},
										body: {
											bodyContent: <span>This is custom modal body content.</span>
										}
									}
								}, {
									fieldType: 'CUSTOM',
									render: <span>This is hidden.</span>,
									hidden: true
								}]
							}
						]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Field Specific Properties</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Field</CSD.Heading>
				<CSD.Text>A custom field's specific properties are `render` `onBlur`, `onChange` and `onFocus`.</CSD.Text>
				<CSD.Text>The `render` property takes any custom ReactElement and renders it in the form of an inline field.</CSD.Text>
				<CSD.Text>`onBlur`,`onChange` and `onFocus` are event handlers which are fired on a corresponding field event (change, blur and focus).</CSD.Text>
				<CSD.Text>A custom form field also allows for the definition of any arbitrary property which would suit the element defined in the `render` property.</CSD.Text>
				<CSD.Preview
					table={CSCustomFieldSpecificAttributes}
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'CUSTOM',
									render: <CSInputSearch label="Custom search" />,
									onBlur: () => console.log('Blur event was fired.'),
									onFocus: () => console.log('Focus event was fired.'),
									onChange: () => console.log('Change event was fired.'),
									placeholder: 'Search...'
								}]
							}]}
						/>
					`}
				>
					<CSForm
						data={[{
							sectionKey: 'custom-field-section',
							label: 'Section',
							collapsible: true,
							fields: [{
								fieldType: 'CUSTOM',
								render: <CSInputSearch label="Custom search" />,
								onBlur: () => console.log('Blur event was fired.'),
								onFocus: () => console.log('Focus event was fired.'),
								onChange: () => console.log('Change event was fired.'),
								placeholder: 'Search...'
							}]
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Modal Field</CSD.Heading>
				<CSD.Text>A custom modal field enables for the rendering of custom content inside a modal.</CSD.Text>
				<CSD.Text>This field consists of 2 components: a button that initiates the rendering of the modal and the modal itself, where custom content resides.</CSD.Text>
				<CSD.Text>The modal component conists of header, body and footer child components.</CSD.Text>
				<CSD.Text>
					All the modal child components support rendering custom content which can be static or can be dynamically added when the modal opens.
					This is achieved by defining the corresponding content property (i.e. `headerContent`) for static rendering, or factory property (i.e. `headerFactory`) for async rendering
					of custom content. Factory properties allow for the consumption of CSForm data in the custom content. They also provide a method for closing the modal which can be called
					in a desired manner within the custom content.
				</CSD.Text>
				<CSD.Preview>
					<CSForm
						data={[{
							sectionKey: 'custom-modal-section',
							label: 'Section',
							collapsible: true,
							fields: [
								{
									fieldType: 'CUSTOM-MODAL',
									modalButton: {
										label: 'Open modal with static content'
									},
									modal: {
										closeButton: true,
										header: {
											title: 'Modal with static content'
										},
										body: {
											bodyContent: <span>Custom body static content</span>
										},
										footer: {
											footerContent: <span>Custom footer static content</span>
										}
									}
								}, {
									fieldType: 'CUSTOM-MODAL',
									showInNewLine: true,
									modalButton: {
										label: 'Open modal with dynamic content'
									},
									modal: {
										closeButton: true,
										header: {
											title: 'Modal with dynamic content'
										},
										body: {
											bodyFactory: async () => {
												await new Promise(resolve => setTimeout(resolve, 3000));
												return <span>Custom dynamic content</span>;
											}
										},
										footer: {
											footerFactory: async (data, closeModal) => {
												await new Promise(resolve => setTimeout(resolve, 3000));
												return <CSButton label="Close modal" onClick={closeModal} />;
											}
										}
									}
								}
							]
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>Both the modal button and the modal inherit properties from `CSButton` and `CSModal` (with its child components).</CSD.Text>
				<CSD.Text>Details regarding the modal button's and the modal's inherited properties can be found by clicking on a desired property in following lists.</CSD.Text>
				<CSD.Text>Modal button properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}borderRadius`}>borderRadius</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}btnType-&-btnStyle`}>btnStyle</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}btnType-&-btnStyle`}>btnType</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}id-|-class`}>className</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}color`}>color</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}disabled`}>disabled</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconColor`}>iconColor</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconName-|-iconOrigin`}>iconName</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconName-|-iconOrigin`}>iconOrigin</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconPosition`}>iconPosition</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconRotate`}>iconRotate</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}iconSize`}>iconSize</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}id-|-class`}>id</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}label`}>label</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}labelHidden`}>labelHidden</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}link`}>link</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}loading`}>loading</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}onClick`}>onClick</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}onKeyDown`}>onKeyDown</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}onMouseDown`}>onMouseDown</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}onMouseEnter`}>onMouseEnter</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}onMouseLeave`}>onMouseLeave</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}openInNewTab`}>openInNewTab</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}routerLink`}>routerLink</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}size`}>size</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}title`}>title</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}value`}>value</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalButtonPath}width`}>width</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Modal properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${modalPath}animated`}>animated</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>className</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}closeButton`}>closeButton</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>id</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}loadingText`}>loadingText</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}onClose`}>onClose</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}outerClickClose`}>outerClickClose</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}size`}>size</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}style`}>style</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Modal header properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>className</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>id</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalHeaderPath}subtitle`}>subtitle</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalHeaderPath}title`}>title</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Modal body properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>className</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>id</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalBodyPath}minHeight`}>minHeight</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalBodyPath}padding`}>padding</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Modal footer properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${modalFooterPath}align`}>align</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>className</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${modalPath}id-|-class`}>id</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
		</CSD.Page >
	);
};

export default CSFormCustomFormFieldsPreview;
