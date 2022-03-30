import React, { useState } from 'react';
import { CSInputText } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSInputTextProps from './cs-input-text-props';
import { actionsWithLog } from '../../helpers/actions';
import { icons } from '../../helpers/icons';
import { NavLink } from 'react-router-dom';

const CSInputTextPreview = () => {
	interface CSInputTextPreviewState {
		[key: string]: string;
	}

	const [value, setValue] = useState<CSInputTextPreviewState>({key: 'value'});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
		setValue({ [key]: event.target.value });
	};

	return (
		<CSD.Page
			title="Input Text"
			accessible="yes"
			routePrefix="cs-ui"
			tables={CSInputTextProps}
		>
			<CSD.Heading>Base usage</CSD.Heading>
			<CSD.List type="props">
				<CSD.ListItem>label</CSD.ListItem>
				<CSD.ListItem>value</CSD.ListItem>
			</CSD.List>
			<CSD.Section>
				<CSD.Text>
					Text input is a freeform data entry input field that will be useful for users to give their text input.
					It has one required prop which is `label`.
				</CSD.Text>
				<CSD.Text>
					To get started a `label` must be provided. Even if no label is required visually, it is still a required prop for accessibility reasons.
				</CSD.Text>
				<CSD.Text>
					When `value` prop is provided, CSInputText will have a predefined text value.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={['label', 'value']}
					code={`
						<CSInputText label="This is a label" onChange={handleChange}/>
						<CSInputText
							label="This is a label"
							value={value}
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText label="This is a label" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'label')}/>
					<CSInputText
						label="This is a label"
						value={value.key}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'label')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					A function similar to the one below should be passed to `onChange` to manage state.
				</CSD.Text>
				<CSD.Code>
					{`
						const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
							setValue(event.target.value);
						}
					`}
				</CSD.Code>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onChange</CSD.ListItem>
					<CSD.ListItem>onBlur</CSD.ListItem>
					<CSD.ListItem>onClick</CSD.ListItem>
					<CSD.ListItem>onFocus</CSD.ListItem>
					<CSD.ListItem>onKeyDown</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					These events work largely in a same way where they pass a function which executes after certain criteria is met.
				</CSD.Text>
				<CSD.Text>
					CSInputText supports these native events: `onBlur`, `onClick`, `onFocus` and `onKeyDown`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					consoleAlert
					related={[
						'label',
						'onChange',
						'onBlur',
						'onClick',
						'onFocus',
						'onKeyDown'
					]}
					code={`
						<CSInputText label="Input Text with onBlur" onBlur={console.log} />
						<CSInputText label="Input Text with onChange" onChange={handleChange} />
						<CSInputText label="Input Text with onClick" onClick={console.log} />
						<CSInputText label="Input Text with onFocus" onFocus={console.log} />
						<CSInputText label="Input Text with onKeyDown" onKeyDown={console.log} />
					`}
				>
						<CSInputText
							label="Input Text with onBlur"
							onBlur={console.log}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onBlur')}
						/>
						<CSInputText
							label="Input Text with onChange"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								console.log(event);
								handleChange(event, 'onChange');
							}}
						/>
						<CSInputText
							label="Input Text with onClick"
							onClick={console.log}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onClick')}
						/>
						<CSInputText
							label="Input Text with onFocus"
							onFocus={console.log}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onFocus')}
						/>
						<CSInputText
							label="Input Text with onKeyDown"
							onKeyDown={console.log}
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
					<CSD.ListItem>errorTooltip</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Like most other form field components, CSInputText features three error props.
					The first and most basic, `error` simply lets the user know if something is wrong.
					Along this prop you should provide some information which you can add to the `errorMessage` prop.
				</CSD.Text>
				<CSD.Text>
					If you want to provide a message but have limited space or a fixed layout then the `errorTooltip` prop may be the way forward.
					`errorTooltip` takes the value of the `errorMessage` prop and hides it away in a tooltip so that the message doesn't interfere with the layout of the page.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'error',
						'errorMessage',
						'errorTooltip'
					]}
					code={`
						<CSInputText
							label="This is a label"
							error
							errorMessage="Error Message"
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							error
							errorMessage="Error Message"
							errorTooltip
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						error
						errorMessage="Error Message"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'errorMessage')}
					/>
					<CSInputText
						label="This is a label"
						error
						errorMessage="Error Message"
						errorTooltip
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'errorTooltip')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Restrictions</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>disabled</CSD.ListItem>
					<CSD.ListItem>readOnly</CSD.ListItem>
					<CSD.ListItem>required</CSD.ListItem>
					<CSD.ListItem>hidden</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Similar to the `error` props, most form fields including CSInputText feature a selection of boolean restriction props that
					either prevent or require user interaction.
				</CSD.Text>
				<CSD.Text>
					Using the `disabled` prop input field will become non-interactive. Disabled fields should not have value.
				</CSD.Text>
				<CSD.Text>
					Using the `readOnly` prop user won't be able to modify the input field anymore, however, user will still be able to focus it,
					highlight it, and copy the text from it.
				</CSD.Text>
				<CSD.Text>
					`required` prop will mark that completing the field is needed to proceed by adding a red asterisk in the label.
					It should not be used along with `disabled` or `readOnly`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'disabled',
						'readOnly',
						'required'
					]}
					code={`
						<CSInputText
							label="This is a label"
							disabled
						/>
						<CSInputText
							label="This is a label"
							value="value"
							readOnly
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							required
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						disabled
					/>
					<CSInputText
						label="This is a label"
						value="value"
						readOnly
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'readOnly')}
					/>
					<CSInputText
						label="This is a label"
						required
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'required')}
					/>
				</CSD.Preview>
				<CSD.Text>
					If necessary it is possible to hide the CSInputText using the `hidden` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={['label', 'hidden']}
					code={`<CSInputText label="This is a label" value="value" hidden />`}
				>
					<CSInputText label="This is a label" hidden />
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
					`label` is a required prop. Even if no label is required visually, it is still needed for accessibility reasons.
				</CSD.Text>
				<CSD.Text>
					Some scenarios may require a CSInputText without a label. This can be achieved by adding the
					`labelHidden` prop which will hide the label visually, but keep the accessibility semantics.
				</CSD.Text>
				<CSD.Text>
					Alternatively, you may wish to add a title on hover to the label. The `labelTitle` prop is a boolean prop
					which displays the value of the `label` prop on hover.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'labelHidden',
						'labelTitle',
						'helpText',
						'tooltipPosition'
					]}
					code={`
						<CSInputText
							label="This is a label"
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
						  labelHidden
							onChange={handleChange}
						/>
						<CSInputText
						 	label="Label with a title"
							labelTitle
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'onChange')}
					/>
					<CSInputText
						label="This is a label"
						labelHidden
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'labelHidden')}
					/>
					<CSInputText
						label="Label with a title"
						labelTitle
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'labelTitle')}
					/>
				</CSD.Preview>
				<CSD.Text>
					Some applications or use cases may require more or less information than a simple label can provide.
					The content may be too large or the information is secondary to the label and in this case you can
					add the `helpText` prop.
				</CSD.Text>
				<CSD.Text>
					It takes a string and displays it inside a tooltip which is displayed on
					hover so that it doesn't take up any space in the interface.
					The tooltip can be customised further by using the `tooltipPosition` prop.
					This takes one of twelve position values so that the position of the tooltip is explicitly set.
					The tooltip will take this position unless there is no space in the viewport. In this case it would
					take a different value that would allow the entire tooltip to fit within the viewport.
					If no `tooltipPosition` value is provided, the tooltip will take a default position of `'top-right'`
					unless it doesn't fit in the viewport where it would once again adapt accordingly.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'options',
						'helpText',
						'tooltipPosition'
					]}
					code={`
						<CSInputText
							label="This is a label"
							helpText="This is label"
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							helpText="This is label"
							tooltipPosition="top-left"
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						helpText="This is label"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'helpText')}
					/>
					<CSInputText
						label="This is a label"
						helpText="This is label"
						tooltipPosition="top-left"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'tooltipPosition')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Input Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>title</CSD.ListItem>
					<CSD.ListItem>name</CSD.ListItem>
					<CSD.ListItem>placeholder</CSD.ListItem>
					<CSD.ListItem>maxLength</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					By setting any string value to `title` you can show custom additional information which will be shown when hovered over the input field.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'name',
						'placeholder',
						'maxLength',
						'title'
					]}
					code={`
						<CSInputText
							label="This is a label"
							title="This is a title"
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						title="This is a title"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'title')}
					/>
				</CSD.Preview>
				<CSD.Text>
					`name` prop specifies the name of the input, its used to refer the elements when the form is submitted.
				</CSD.Text>
				<CSD.Text>
					If you set `placeholder` value, input field will display it in light gray in the input field until something is typed in or an option is selected.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'name',
						'placeholder',
						'maxLength',
						'title'
					]}
					code={`
						<CSInputText
							label="This is a label"
							name="Input Text"
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							placeholder="This is a placeholder"
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						name="Input Text"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'name')}
					/>
					<CSInputText
						label="This is a label"
						placeholder="This is a placeholder"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'placeholder')}
					/>
				</CSD.Preview>
				<CSD.Text>
					`maxLength` prop accepts a number that sets maximum number of characters limit of the input.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={['label', 'maxLength']}
					code={`
						<CSInputText
							label="This is a label"
							maxLength={10}
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						maxLength={10}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'maxLength')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Data</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>actions</CSD.ListItem>
					<CSD.ListItem>icons</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Custom data can be added to most form field components including CSInputText.
					These can be applied using either the `actions` or `icons` props.
				</CSD.Text>
				<CSD.Text>
					The `actions` prop allows for custom functionality to be added to the component through the addition of CSButton as shown in the example below.
					Buttons can be set in the `actions` prop, which accepts an array of objects typed as `CSButtonProps`,
					meaning that they share CSButton props as object attributes.
				</CSD.Text>
				<CSD.Text>
					The `icons` prop allows for custom icons to be added to the component through the addition of CSIcon as shown in the example below.
					Icons can be set in the `icons` prop, which accepts an array of objects typed as `CSIconProps`,
					meaning that they share CSIcon props as object attributes.
				</CSD.Text>
				<CSD.Text>
					Both buttons and icons can be rendered with CSTooltips attached to them.
					This can be done by setting the `tooltip` attribute on a button or icon object, which is typed as `CSTooltipProps`,
					enabling the use of all CSTooltip props as object attributes.
				</CSD.Text>
				<CSD.Text>
					If you want to read more, please do so at <NavLink to="/cs-ui/custom-data">Custom Data component</NavLink>.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'actions',
						'icons'
					]}
					code={`
						const actions = [
							{
								onClick: console.log,
								iconName: 'delete',
								labelHidden: true,
								size: 'small' as CSButtonSize,
								label: 'Delete'
							}, {
								onClick: console.log,
								iconName: 'add',
								labelHidden: true,
								size: 'small' as CSButtonSize,
								label: 'Add',
								tooltip: {
									content: 'actions tooltip',
									delay: 300,
									padding: '0.5rem',
									position: 'bottom-left' as CSTooltipPosition,
									stickyOnClick: true
								}
							}
						];
						const icons = [
							{ name: 'cart' },
							{
								name: 'tag',
								origin: 'cs' as CSIconOrigin,
								tooltip: {
									content: 'icons tooltip',
									delay: 300,
									maxWidth: '20rem',
									padding: '0.5rem',
									position: 'bottom-left' as CSTooltipPosition,
									stickyOnClick: true
								}
							}
						];

						<CSInputText
							label="This is a label"
							actions={actions}
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							icons={icons}
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						actions={actionsWithLog}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'actions')}
					/>
					<CSInputText
						label="This is a label"
						icons={icons}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'icons')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Appearance</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>General</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>borderRadius</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Adding the `borderRadius` prop allows custom border radius on the input element.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'borderRadius'
					]}
					code={`
						<CSInputText
							label="This is a label"
							borderRadius="1rem"
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						borderRadius="1rem"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'borderRadius')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>className</CSD.ListItem>
					<CSD.ListItem>id</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to CSInputText using the `className` and `id` props respectively.
					`className` is applied to the outer wrapper whilst `id` is applied to both the input element and the label `for` attribute.
				</CSD.Text>
				<CSD.Text>
					If `id` is not specified, random unique id is generated, which is there for semantic association with belonging label.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSInputTextProps}
					related={[
						'label',
						'id',
						'className'
					]}
					code={`
						<CSInputText
							label="This is a label"
							className="custom-br-purple"
							onChange={handleChange}
						/>
						<CSInputText
							label="This is a label"
							id="custom-id"
							onChange={handleChange}
						/>
					`}
				>
					<CSInputText
						label="This is a label"
						className="custom-br-purple"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'class')}
					/>
					<CSInputText
						label="This is a label"
						id="custom-id"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, 'id')}
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSInputTextPreview;
