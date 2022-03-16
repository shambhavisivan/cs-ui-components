import React, { useState } from 'react';
import { CSRadio } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSRadioAccessibility from './cs-radio-accessibility';
import CSRadioProps from './cs-radio-props';
import CSRadioOptionAttributes from './cs-radio-option-attributes';

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
			tables={[CSRadioProps, CSRadioOptionAttributes]}
			routePrefix="cs-ui"
		>
			<CSD.Heading>Base Usage</CSD.Heading>
			<CSD.List type="props">
				<CSD.ListItem>label</CSD.ListItem>
				<CSD.ListItem>options</CSD.ListItem>
			</CSD.List>
			<CSD.Section>
				<CSD.Text>
					Input elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.
					Only one radio button in a given group can be selected at the same time.
					Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.
				</CSD.Text>
				<CSD.Text>
					Radio options are key-value pair objects described with the CSRadioOptionInterface.
					The options content is defined in the `label` attribute.
					It is necessary to provide a unique key to the options object.
				</CSD.Text>
				<CSD.Code>
					{`
						const options = [{
							key: 'zagreb',
							label: 'Zagreb'
						}, {
							key: 'chennai',
							label: 'Chennai'
						}];
					`}
				</CSD.Code>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'label',
						'options',
						'onChange',
						'selectedKey'
					]}
					code={`
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
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Selection</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onChange</CSD.ListItem>
					<CSD.ListItem>selectedKey</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSRadio is a stateless component so `selectedKey` prop must be used in order to achieve selection of options.
					The value of `selectedKey` prop must match the value of options property `key`.
					If we want any action to appear when changing the radio buttons we must define `onChange` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'label',
						'options',
						'onChange',
						'selectedKey'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							selectedKey="zagreb"
						/>
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
						selectedKey="zagreb"
					/>
					<CSRadio
						label="This is a label"
						options={options}
						selectedKey={selectedKeys.onChangeBase}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onChangeBase')}
					/>
				</CSD.Preview>
				<CSD.Text>
					Even though `onChange` event handler prop is not defined as required it is necessary to define it and use it in a combination with `selectedKey`
					if we expect any action. Here is an example of `onChange` method used across the examples.
				</CSD.Text>
				<CSD.Code>
					{`
						const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
							setSelectedKeys((prevSelectedKeys: Record<string, string>) => ({...prevSelectedKeys, [key]: event.target.value}));
						};
					`}
				</CSD.Code>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onBlur</CSD.ListItem>
					<CSD.ListItem>onClick</CSD.ListItem>
					<CSD.ListItem>onChange</CSD.ListItem>
					<CSD.ListItem>onFocus</CSD.ListItem>
					<CSD.ListItem>onKeyDown</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSRadio features five event handler props which are: `onBlur`, `onClick`, `onChange`, `onFocus` and `onKeyDown`.
					All five event handlers run on mouse or keyboard events and are native to the radio element.
					All of the event handlers mentioned above work largely in the same way where they pass a function which executes after certain event is triggered.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					consoleAlert
					related={[
						'label',
						'options',
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
			<CSD.Heading>General props</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Error</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>error</CSD.ListItem>
					<CSD.ListItem>errorMessage</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSRadio features two error props.
					The first one is `error` which simply lets the user know if something is wrong.
					If you want to elaborate on the problem and provide some information you can add the `errorMessage` prop in combination with the `error` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'label',
						'options',
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
				<CSD.Heading level={2}>Restrictions</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>disabled</CSD.ListItem>
					<CSD.ListItem>disabledKeys</CSD.ListItem>
					<CSD.ListItem>hidden</CSD.ListItem>
					<CSD.ListItem>readOnly</CSD.ListItem>
					<CSD.ListItem>required</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSRadio features a selection of boolean restriction props that either prevent or require user interaction.
					Each prop can be used individually or in combination, however some combinations are not recommended such as combining `required`
					with any prop that prevents interaction.
				</CSD.Text>
				<CSD.Text>
					`readOnly` prop prevents selection of the radio option, but user can still focus, highlight and copy text from it.
					`disabled` prop will make radio nonselectable.
					If we want to choose which radio buttons should be disabled we can use `disabledKeys` prop. `disabledKeys` prop accepts  an array of values which must match
					options key property in order to disable wanted radio options.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'disabled',
						'disabledKeys',
						'hidden',
						'readOnly',
						'required'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							disabled
						/>
						<CSRadio
							label="This is a label"
							options={options}
							disabledKeys={['zagreb']}
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							readOnly
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a label"
							options={options}
							required
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						disabled
					/>
					<CSRadio
						label="This is a label"
						options={options}
						disabledKeys={['zagreb']}
						selectedKey={selectedKeys.disabledKeys}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'disabledKeys')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						readOnly
						selectedKey={selectedKeys.readOnly}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'readOnly')}
					/>
					<CSRadio
						label="This is a label"
						options={options}
						required
						selectedKey={selectedKeys.required}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'required')}
					/>
				</CSD.Preview>
				<CSD.Text>
						If necessary it is possible to hide the CSRadio using the `hidden` prop.
					</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'hidden'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							hidden
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						hidden
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Label Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>label</CSD.ListItem>
					<CSD.ListItem>labelHidden</CSD.ListItem>
					<CSD.ListItem>labelTitle</CSD.ListItem>
					<CSD.ListItem>helpText</CSD.ListItem>
					<CSD.ListItem>tooltipPosition</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					`label` is a required prop. It sets a label for the whole CSRadio component, and should not be mixed
					with `label` attribute in the options array, which sets the label for the CSRadioOption.
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
					This takes one of twelve position values so that the position of the tooltip is explicitly set.
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
						selectedKey={selectedKeys.tooltipPosition}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'tooltipPosition')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Input Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>name</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Every radio group should have a unique `name` prop which we set on CSRadio. CSRadio is defined by giving each of the CSRadioOptions the same name.
					If we don't choose the name ourselves it will be autogenerated.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'options',
						'label',
						'name'
					]}
					code={`
						<CSRadio
							label="This is a label"
							options={options}
							name="City"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a label"
						options={options}
						name="City"
						selectedKey={selectedKeys.name}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'name')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Appearance</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>General</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>variant</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					When choosing radio button styling there are two options available. With `variant` prop we can either choose the `brand` styling
					or the default `neutral` which is a default styling.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'label',
						'options',
						'variant'
					]}
					code={`
						<CSRadio
							label="This is a neutral radio option"
							options={options}
							variant="neutral"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
						<CSRadio
							label="This is a brand radio option"
							options={options}
							variant="brand"
							selectedKey={selectedKey}
							onChange={handleChange}
						/>
					`}
				>
					<CSRadio
						label="This is a neutral radio option"
						options={options}
						variant="neutral"
						selectedKey={selectedKeys.neutral}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'neutral')}
					/>
					<CSRadio
						label="This is a brand radio option"
						options={options}
						variant="brand"
						selectedKey={selectedKeys.brand}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'brand')}
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>id</CSD.ListItem>
					<CSD.ListItem>className</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to the CSRadio
					using the `className` and `id` props respectively.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSRadioProps}
					related={[
						'label',
						'options',
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
		</CSD.Page>
	);
};

export default CSRadioPreview;
