import React, { useState } from 'react';
import {
	CSAlert,
	CSAlertVariant,
	CSAlertStyleFormat,
	CSAlertStyleType,
	CSAlertTextAlign,
	CSIconOrigin,
	CSRadio,
	CSRadioOption,
	CSToggle,
	CSCustomSelect,
	CSCustomSelectOptionInterface,
	CSInputText
} from '@cloudsense/cs-ui-components';

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

	const toggleProp = (prop: string) => {
		setAlertProps((prevState: any) => ({
			...prevState,
			[prop]: !prevState[prop]
		}));
	};

	const setProp = (prop: string, value: any) => {
		setAlertProps((prevState: any) => ({
			...prevState,
			[prop]: value
		}));
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
			<CSRadio label="variant" required>
				<CSRadioOption
					label="info"
					name="variant"
					onClick={() => setProp('variant', 'info')}
				/>
				<CSRadioOption
					label="warning"
					name="variant"
					onClick={() => setProp('variant', 'warning')}
				/>
				<CSRadioOption
					label="error"
					name="variant"
					onClick={() => setProp('variant', 'error')}
				/>
				<CSRadioOption
					label="base"
					name="variant"
					onClick={() => setProp('variant', 'base')}
					checked
				/>
			</CSRadio>
			<CSToggle label="closeButton" onClick={() => toggleProp('closeButton')} />
			<CSToggle label="iconHidden" onClick={() => {
				toggleProp('iconHidden');
				setProp('iconName', undefined);
				setProp('iconOrigin', 'slds');
			}} />
			<CSCustomSelect
				label="iconName"
				disabled={alertProps.iconHidden}
				onSelect={(value: CSCustomSelectOptionInterface) => setProp('iconName', value.key)}
				selectedKeys={alertProps.iconName}
				onClear={() => setProp('iconName', undefined)}
				options={availableIcons.map((icon: any) => ({
					key: icon.name,
					label: icon.name
				}))}
			/>
			<CSRadio label="iconOrigin" disabled={alertProps.iconHidden}>
				<CSRadioOption
					label="slds"
					name="iconOrigin"
					checked
					onClick={() => {
						setProp('iconOrigin', 'slds');
						setProp('iconName', undefined);
					}}
				/>
				<CSRadioOption
					label="cs"
					name="iconOrigin"
					onClick={() => {
						setProp('iconOrigin', 'cs');
						setProp('iconName', undefined);
					}}
				/>
			</CSRadio>
			<CSRadio label="styleFormat">
				<CSRadioOption
					label="default"
					name="styleFormat"
					onClick={() => setProp('styleFormat', 'default')}
					checked
				/>
				<CSRadioOption
					label="scoped"
					name="styleFormat"
					onClick={() => setProp('styleFormat', 'scoped')}
				/>
			</CSRadio>
			<CSRadio label="styleType">
				<CSRadioOption
					label="default"
					name="styleType"
					onClick={() => setProp('styleType', 'default')}
					checked
				/>
				<CSRadioOption
					label="light"
					name="styleType"
					onClick={() => setProp('styleType', 'light')}
				/>
			</CSRadio>
			<CSInputText label="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProp('text', event.target.value)} />
			<CSRadio label="textAlign">
				<CSRadioOption
					label="left"
					name="setAlign"
					onClick={() => setProp('textAlign', 'left')}
					checked
				/>
				<CSRadioOption
					label="center"
					name="setAlign"
					onClick={() => setProp('textAlign', 'center')}
				/>
			</CSRadio>
			<CSInputText label="id" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProp('id', event.target.value)} />
			<CSInputText label="className" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProp('className', event.target.value)} />
		</CSD.Playground>
	);
};

export default CSAlertPlayground;
