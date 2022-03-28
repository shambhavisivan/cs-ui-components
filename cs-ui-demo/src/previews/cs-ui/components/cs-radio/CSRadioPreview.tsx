import React, { useState } from 'react';
import { CSRadio } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSRadioAccessibility from './cs-radio-accessibility';
import CSRadioProps from './cs-radio-props';
import CSRadioOptionAttribues from './cs-radio-option-attributes';

const options = [{
	key: 'zagreb',
	label: 'Zagreb'
}, {
	key: 'chennai',
	label: 'Chennai'
}];

const CSRadioPreview = () => {
	const [selectedKeys, setSelectedKeys] = useState<Record<string, string>>({});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
		setSelectedKeys((prevSelectedKeys: Record<string, string>) => ({...prevSelectedKeys, [key]: event.target.value}));
	};

	return (
		<CSD.Page
			title="Radio"
			accessible="yes"
			accessibility={CSRadioAccessibility}
			tables={[CSRadioProps, CSRadioOptionAttribues]}
			routePrefix="cs-ui"
		>
			<CSD.Heading>General Props</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Base Usage</CSD.Heading>
				<CSD.Text>
					Input elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.
					Only one radio button in a given group can be selected at the same time.
				</CSD.Text>
				<CSD.Text>
					Radio options items are key-value pair objects described with the `CSRadioOption` interface.
					An options content is defined in the `label` attribute, which is strictly a string.
				</CSD.Text>
				<CSD.Text>
					It is necessary to provide a unique key to the item object to allow delta updates and better performance.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange'
					]}
					code={`
						const options = [{
							key: 'zagreb',
							label: 'Zagreb'
						}, {
							key: 'chennai',
							label: 'Chennai'
						}];

						const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
							setSelectedKeys((prevSelectedKeys: Record<string, string>) => ({...prevSelectedKeys, [key]: event.target.value}));
						};

						<CSRadio
							label="This is a label"
							options={options}
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						selectedKey={selectedKeys.base}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'base')}
					/>
				</CSD.Preview>
				<CSD.Text>
					If necessary it is possible to hide the CSRadio using the `hidden prop`
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={['options', 'label', 'hidden']}
					code={`<CSRadio label="This is a label" options={options} hidden />`}
				>
					<CSRadio label="This is a label" options={options} hidden />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Option Styling</CSD.Heading>
				<CSD.Text>
					When choosing radio button styling there are two options available. With `variant` prop we can either choose the `brand` styling
					or the default `neutral` styling.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange',
						'variant'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							variant="brand"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						variant="brand"
						selectedKey={selectedKeys.hidden}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'hidden')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Label Options</CSD.Heading>
				<CSD.Text>
					`label` is a required prop which should be strictly a `string`. It sets a label for the whole CSRadio component, and should not be mixed
					with another `label` prop in the options array, which sets the label for the CSRadioOption.
				</CSD.Text>
				<CSD.Text>
					Using the `labelHidden` prop we can conditionally hide the label from the user.
					If we want to pass a title to the labels title attribute we will use `labelTitle` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange',
						'labelHidden',
						'labelTitle'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							labelHidden
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							labelTitle
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						selectedKey={selectedKeys.label}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'label')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						labelHidden
						selectedKey={selectedKeys.labelHidden}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'labelHidden')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						labelTitle
						selectedKey={selectedKeys.labelTitle}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'labelTitle')}
					/>
				</CSD.Preview>
				<CSD.Text>
					Sometimes more information is needed than what the `label` prop can realistically provide.
					The content may be too large or the information is secondary to the label and in this case you can add the `helpText` prop.
					This takes a string and displays it inside a tooltip which is displayed on hover so that it doesn't take up any space in the interface.
				</CSD.Text>
				<CSD.Text>
					The tooltip can be customised further by using the `tooltipPosition` prop.
					This takes one of twelve position values so that the position of the tooltip is explicity set.
					The tooltip will take this position unless there is no space in the viewport.
					In this case it would take a different value that would allow the entire tooltip to fit within the viewport.
					If no `tooltipPosition` value is provided, the tooltip will take a default position of `top-right` unless it doesn't
					fit in the viewport where it would once again adapt accordingly.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'helpText',
						'selectedKey',
						'onChange',
						'tooltipPosition'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							helpText="Help text example"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							helpText="Help text example"
							tooltipPosition="bottom-right"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						helpText="Help text example"
						selectedKey={selectedKeys.helpText}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'helpText')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						helpText="Help text example"
						tooltipPosition="bottom-right"
						selectedKey={selectedKeys.helpTextPosition}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'helpTextPosition')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Error</CSD.Heading>
				<CSD.Text>
					CSRadio features two error props.
					The first one is `error` which simply lets the user know if something is wrong.
					If you want to elaborate on the problem and provide some information you can add the `errorMessage` prop in combination with the `error` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange',
						'error',
						'errorMessage'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							error
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							error
							errorMessage="Error message"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						error
						selectedKey={selectedKeys.error}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'error')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						error
						errorMessage="Error message"
						selectedKey={selectedKeys.errorMessage}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'errorMessage')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to the CSRadio
					using the `className` and `id` props respectively.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange',
						'id',
						'className'
					]}
					code={`
						<CSRadio
							options={options}
							id="custom-id"
							className="custom-br-purple"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						options={options}
						id="custom-id"
						className="csd-custom-br-mint"
						selectedKey={selectedKeys.classNameId}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'classNameId')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.Text>
					CSRadio features five event handler props which are: `onBlur`, `onClick`, `onChange`, `onFocus` and `onKeyDown`.
					All five event handlers run on mouse or keyboard events.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					consoleAlert
					related={[
						'options',
						'label',
						'selectedKey',
						'onBlur',
						'onClick',
						'onChange',
						'onFocus',
						'onKeyDown'
					]}
					code={`
						<CSRadio
							label="Radio with onBlur"
							options={options}
							onBlur={console.log}
							selectedKey={selectedKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement) => setSelectedKey(event.target.value)}
						/>
						<CSRadio
							label="Radio with onClick"
							options={options}
							onClick={handleClick}
							selectedKey={selectedKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement) => setSelectedKey(event.target.value)}
						/>
						<CSRadio
							label="Radio with onChange"
							options={options}
							selectedKey={selectedKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement) => {
								setSelectedKey(event.target.value);
								console.log(event);
							}}
						/>
						<CSRadio
							label="Radio with onFocus"
							options={options}
							onFocus={console.log}
							selectedKey={selectedKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement) => setSelectedKey(event.target.value)}
						/>
						<CSRadio
							label="Radio with onKeyDown"
							options={options}
							onKeyDown={console.log}
							selectedKey={selectedKey}
							onChange={(event: React.ChangeEvent<HTMLInputElement) => setSelectedKey(event.target.value)}
						/>
					`}
				>
					<CSRadio
						label="Radio with onBlur"
						options={options}
						onBlur={console.log}
						selectedKey={selectedKeys.onBlur}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onBlur')}
					/>
					<CSRadio
						label="Radio with onClick"
						options={options}
						onClick={console.log}
						selectedKey={selectedKeys.onClick}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onClick')}
					/>
					<CSRadio
						label="Radio with onChange"
						options={options}
						selectedKey={selectedKeys.onChange}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							handleChange(event, 'onChange');
							console.log(event);
						}}
					/>
					<CSRadio
						label="Radio with onFocus"
						options={options}
						onFocus={console.log}
						selectedKey={selectedKeys.onFocus}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onFocus')}
					/>
					<CSRadio
						label="Radio with onKeyDown"
						options={options}
						onKeyDown={console.log}
						selectedKey={selectedKeys.onKeyDown}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onKeyDown')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Restrictions</CSD.Heading>
				<CSD.Text>
					CSRadio features a selection of boolean restriction props that either prevent or require user interaction.
					Each prop can be used individually or in combination, however certain combinations are recommended against such as combining `required` with any prop that prevents interaction.
					Using the `readOnly` prop user won't be able to modify the radio anymore, however, user will still be able to focus it, highlight it, and copy the text from it.
					Using the `disabled` prop radio will become unusable and un-clickable.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'selectedKey',
						'onChange',
						'disabled',
						'readOnly',
						'required'
					]}
					code={`
						<CSRadio
							label="This is a disabled radio"
							options={options}
							disabled
						/>
						<CSRadio
							label="This is a readOnly radio"
							options={options}
							readOnly
							checked
						/>
						<CSRadio
							label="This is a required radio"
							options={options}
							required
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a disabled radio"
						options={options}
						disabled
					/>
					<CSRadio
						label="This is a readOnly radio"
						options={options}
						readOnly
						checked
					/>
					<CSRadio
						label="This is a required radio"
						options={options}
						required
						selectedKey={selectedKeys.required}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'required')}
					/>
				</CSD.Preview>
				<CSD.Text>
					If we want to choose which radio buttons should be disabled we can use `disabledKeys` prop.
					Also it's possible to mannualy check wanted radio option with `selectedKey` prop.
					When using `selectedKey` prop user won't be able to toggle the radio buttons anymore.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'onChange',
						'disabledKeys',
						'selectedKey'
					]}
					code={`
						<CSRadio
							label="This is a disabled radio option"
							options={options}
							disabledKeys={['zagreb']}
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a selected radio option"
							options={options}
							selectedKey="zagreb"
						/>
					`}
				>
					<CSRadio
						label="This is a disabled radio option"
						options={options}
						disabledKeys={['zagreb']}
						selectedKey={selectedKeys.disabledKeys}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'disabledKeys')}
					/>
					<CSRadio
						label="This is a selected radio option"
						options={options}
						selectedKey="zagreb"
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSRadioPreview;
