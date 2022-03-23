import React, { useState } from 'react';
import {
	CSAlert,
	CSAlertVariant,
	CSAlertStyleFormat,
	CSAlertStyleType,
	CSAlertTextAlign,
	CSIconOrigin
} from '@cloudsense/cs-ui-components';
import { CSForm } from '@cloudsense/cs-form-v2';

import lightningIcons from '../../../icons/LightningIconsList';
import cloudSenseIcons from '../../../icons/CloudSenseIconsList';
import * as CSD from '../../../../demo-components';

const CSAlertPlayground = () => {
	const alertRequiredProps = {
		variant: 'base' as CSAlertVariant
	};

	const alertDefaultProps = {
		closeButton: false,
		iconHidden: false,
		iconName: undefined,
		iconOrigin: 'slds' as CSIconOrigin,
		styleFormat: 'default' as CSAlertStyleFormat,
		styleType: 'default' as CSAlertStyleType,
		text: undefined,
		textAlign: 'left' as CSAlertTextAlign,
		id: undefined,
		className: undefined
	};

	const [alertProps, setAlertProps] = useState({ ...alertRequiredProps, ...alertDefaultProps });

	const handleFieldChange = ({ name, value }: { name: string, value: any }) => {
		setAlertProps((prevState: any) => {
			const newState = { ...prevState };

			if (typeof value === 'object') {
				newState[name] = value.key;
			} else if (value === '') {
				newState[name] = undefined;
			} else {
				newState[name] = value;
			}

			if (name === 'iconHidden') {
				newState.iconName = undefined;
				newState.iconOrigin = 'slds';
			} else if (name === 'iconOrigin') {
				newState.iconName = undefined;
			}

			return newState;
		});
	};

	const availableIcons = alertProps.iconOrigin === 'slds' ? lightningIcons : cloudSenseIcons;

	return (
		<CSD.Playground
			componentName="Alert"
			component={<CSAlert {...alertProps} />}
			defaultProps={alertDefaultProps}
			requiredProps={alertRequiredProps}
			currentProps={alertProps}
		>
			<CSForm
				onFieldChange={handleFieldChange}
				columnNumber={1}
				data={[{
					sectionKey: 'controls',
					label: 'Controls',
					hideSectionHeader: true,
					fields: [{
						fieldType: 'RADIO',
						label: 'variant',
						name: 'variant',
						required: true,
						value: alertProps.variant,
						options: [{
							key: 'info',
							label: 'info'
						}, {
							key: 'warning',
							label: 'warning'
						}, {
							key: 'error',
							label: 'error'
						}, {
							key: 'base',
							label: 'base'
						}]
					}, {
						fieldType: 'TOGGLE',
						label: 'closeButton',
						name: 'closeButton',
						value: alertProps.closeButton
					}, {
						fieldType: 'TOGGLE',
						label: 'iconHidden',
						name: 'iconHidden',
						value: alertProps.iconHidden
					}, {
						fieldType: 'CUSTOM-SELECT',
						label: 'iconName',
						name: 'iconName',
						disabled: alertProps.iconHidden,
						onClear: () => handleFieldChange({ name: 'iconName', value: undefined }),
						value: alertProps.iconName,
						options: availableIcons.map((icon: any) => ({
							key: icon.name,
							label: icon.name
						}))
					}, {
						fieldType: 'RADIO',
						label: 'iconOrigin',
						name: 'iconOrigin',
						disabled: alertProps.iconHidden,
						value: alertProps.iconOrigin,
						options: [{
							key: 'slds',
							label: 'slds'
						}, {
							key: 'cs',
							label: 'cs'
						}]
					}, {
						fieldType: 'RADIO',
						label: 'styleFormat',
						name: 'styleFormat',
						value: alertProps.styleFormat,
						options: [{
							key: 'default',
							label: 'default'
						}, {
							key: 'scoped',
							label: 'scoped'
						}]
					}, {
						fieldType: 'RADIO',
						label: 'styleType',
						name: 'styleType',
						value: alertProps.styleType,
						options: [{
							key: 'default',
							label: 'default'
						}, {
							key: 'light',
							label: 'light'
						}]
					}, {
						fieldType: 'TEXT',
						label: 'text',
						name: 'text',
						value: alertProps.text
					}, {
						fieldType: 'RADIO',
						label: 'textAlign',
						name: 'textAlign',
						value: alertProps.textAlign,
						options: [{
							key: 'left',
							label: 'left'
						}, {
							key: 'center',
							label: 'center'
						}]
					}, {
						fieldType: 'TEXT',
						label: 'id',
						name: 'id',
						value: alertProps.id
					}, {
						fieldType: 'TEXT',
						label: 'className',
						name: 'className',
						value: alertProps.className
					}]
				}]}
			/>
		</CSD.Playground>
	);
};

export default CSAlertPlayground;
