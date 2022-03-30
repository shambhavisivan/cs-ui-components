import React, { useState } from 'react';
import { CSCustomSelect, CSCustomSelectOptionInterface } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSCustomSelectProps from './cs-custom-select-props';
import CSCustomSelectAccessibility from './cs-custom-select-accessibility';
import { actionsWithLog } from '../../helpers/actions';
import { icons } from '../../helpers/icons';
import { NavLink } from 'react-router-dom';

const options = [
	{ key: 1, label: 'Product' },
	{ key: 2, label: 'Services' },
	{ key: 3, label: 'Sales' },
	{ key: 4, label: 'Marketing' }
];

interface CSCustomSelectSelectedKeysState {
	[key: string]: Array<React.ReactText>;
}

const CSCustomSelectPreview = () => {
	const [selectedKeys, setSelectedKeys] = useState<CSCustomSelectSelectedKeysState>({
		singleSelectKey: [1],
		multiselectKeys: [1, 2],
		multiselectCompactKeys: [2, 3],
		clearExampleKeys: [1],
		readOnly: [1]
	});

	const handleSelect = (option: CSCustomSelectOptionInterface, stateName: string, multiselect?: boolean) => {
		setSelectedKeys((prevSelectedKeys: CSCustomSelectSelectedKeysState) => {
			let newSelectedKeys;
			if (prevSelectedKeys[stateName]?.includes(option.key)) {
				newSelectedKeys = prevSelectedKeys[stateName].filter((key: React.ReactText) => key !== option.key);
			} else if (multiselect) {
				newSelectedKeys = [...prevSelectedKeys[stateName], option.key];
			} else {
				newSelectedKeys = [option.key];
			}

			return { ...prevSelectedKeys, [stateName]: newSelectedKeys };
		});
	};

	const handleDeselect = (option: CSCustomSelectOptionInterface, stateName: string) => {
		setSelectedKeys((prevSelectedKeys: CSCustomSelectSelectedKeysState) => {
			const newSelectedKeys = prevSelectedKeys[stateName].filter(key => key !== option.key);
			return { ...prevSelectedKeys, [stateName]: newSelectedKeys };
		});
	};

	const handleClear = (stateName: string) => {
		setSelectedKeys(prevState => ({...prevState, [stateName]: []}));
	};

	return (
		<CSD.Page
			title="Custom Select"
			accessible="yes"
			accessibility={CSCustomSelectAccessibility}
			tables={CSCustomSelectProps}
			routePrefix="cs-ui"
		>
			<CSD.Heading>Base Usage</CSD.Heading>
			<CSD.List type="props">
				<CSD.ListItem>label</CSD.ListItem>
				<CSD.ListItem>options</CSD.ListItem>
			</CSD.List>
			<CSD.Section>
				<CSD.Text>CSCustomSelect presents a menu of options to select.</CSD.Text>
				<CSD.Text>
					`options` and `label` are the only required props.
					`options` are key-value pair objects which render CustomSelect dropdown rows
					that serve as selectable options.
				</CSD.Text>
				<CSD.Text>
					<b>Search</b> works out of the box. To perform search, all you need to do is focus the field and start typing.
					Options will filter with each typed character. More on search options can be read under search section.
				</CSD.Text>
				<CSD.Text>In all CSCustomSelect examples we will be using simple options object with departments.</CSD.Text>
				<CSD.Code>
					{`
						const options = {[
							{ key: 1, label: 'Product' },
							{ key: 2, label: 'Services' },
							{ key: 3, label: 'Sales' },
							{ key: 4, label: 'Marketing' }
						]}
					`}
				</CSD.Code>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={['options', 'label']}
					code={`<CSCustomSelect options={options} label="Department" />`}
				>
					<CSCustomSelect options={options} label="Department" />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Selection</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onSelect</CSD.ListItem>
					<CSD.ListItem>selectedKeys</CSD.ListItem>
					<CSD.ListItem>cleareable</CSD.ListItem>
					<CSD.ListItem>onClear</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSCustomSelect component keeps no state, so it is necessary to manage an external state and
					pass desired option key(s) to `selectedKeys` prop in order to display selected options.
					`selectedKeys` prop can accept one key or an array of keys.
				</CSD.Text>
				<CSD.Text>A function similar to the one below should be passed to `onSelect`.</CSD.Text>
				<CSD.Code>
					{`
						const handleSelect = (option: CSCustomSelectOptionInterface) => {
							setSelectedKey(option.key);
						};
					`}
				</CSD.Code>
				<CSD.Text>An example of working CSCustomSelect in its most basic form.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'onSelect',
						'selectedKeys',
						'clearable',
						'onClear'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKey}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'basicSelect')}
						selectedKeys={selectedKeys.basicSelect}
					/>
				</CSD.Preview>
				<CSD.Text>
					To render a clear button a boolean `cleareable` prop must be set, whereas `onClear` sets the
					desired functionality.
				</CSD.Text>
				<CSD.Code>
					{`
						const handleClear = () => {
							setSelectedKeys(undefined);
						};
					`}
				</CSD.Code>
				<CSD.Text>A basic clear method which clears selected key.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'onSelect',
						'selectedKeys',
						'clearable',
						'onClear'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							clearable
							onClear={handleClear}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'clearExampleKeys')}
						selectedKeys={selectedKeys.clearExampleKeys}
						clearable
						onClear={() => handleClear('clearExampleKeys')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Multiselect</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>multiselect</CSD.ListItem>
					<CSD.ListItem>showCompactMultiselect</CSD.ListItem>
					<CSD.ListItem>onSelect</CSD.ListItem>
					<CSD.ListItem>onDeselect</CSD.ListItem>
					<CSD.ListItem>selectedKeys</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					`multiselect` enables a UI that supports selecting multiple options. This would mean a user can
					select as many options as presented, which needs to be handled in `onSelect`.
				</CSD.Text>
				<CSD.Text>
					Another difference to single select is that clicking and selecting an option in the dropdown will
					keep the dropdown expanded. In this case, a dropdown menu can be collapsed by clicking outside of
					it or by clicking `Escape`.
				</CSD.Text>
				<CSD.Text>
					<b>Additional keyboard support</b> for multiselect enables a deselect button which removes an option
					from the selection by calling the function passed to `onDeselect`.
				</CSD.Text>
				<CSD.Text>
					The functions below describe options interaction of CSCustomSelect multiselect variant. They are
					passed to `onSelect` and `onDeselect` as seen in the example below.
				</CSD.Text>
				<CSD.Code>
					{`
						const handleMultiselect = (option: CSCustomSelectOptionInterface) => {
							setMultiselectKeys((prevMultiselectKeys: Array<React.ReactText>) => {
								if (prevMultiselectKeys.includes(option.key)) {
									return prevMultiselectKeys.filter((key: React.ReactText) => key !== option.key);
								}

								return [...prevMultiselectKeys, option.key];
							});
						};
					`}
				</CSD.Code>
				<CSD.Code>
					{`
						const handleDeselect = (option: CSCustomSelectOptionInterface) => {
							setMultiselectKeys((prevMultiselectKeys: Array<React.ReactText>) => {
								return prevMultiselectKeys.filter((key: React.ReactText) => key !== option.key);
							});
						};
					`}
				</CSD.Code>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'multiselect',
						'onSelect',
						'onDeselect',
						'clearable',
						'onClear'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							multiselect
							onSelect={handleMultiselect}
							onDeselect={handleDeselect}
							selectedKeys={selectedKeys}
							clearable
							onClear={handleClear}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						multiselect
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'multiselectKeys', true)}
						onDeselect={(option: CSCustomSelectOptionInterface) => handleDeselect(option, 'multiselectKeys')}
						selectedKeys={selectedKeys.multiselectKeys}
						clearable
						onClear={() => handleClear('multiselectKeys')}
					/>
				</CSD.Preview>
				<CSD.Text>
					Multiselect variant allows setting boolean `showCompactMultiselect` to make it visually compact.
				</CSD.Text>
				<CSD.Text>
					This will remove option items from the input field and you will not be able to navigate through
					them with keyboard. They will be shown as a single string with a comma acting as a delimiter
					between options. This way the space items take is reduced, which is most helpful when there are a
					lot of items which would fall in multiple rows.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table
					related={[
						'label',
						'options',
						'showCompactMultiselect',
						'onSelect',
						'onDeselect'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							multiselect
							showCompactMultiselect
							onSelect={handleMultiselect}
							onDeselect={handleDeselect}
							selectedKeys={selectedKeys}
							clearable
							onClear={handleClear}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						multiselect
						showCompactMultiselect
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'multiselectCompactKeys', true)}
						onDeselect={(option: CSCustomSelectOptionInterface) => handleDeselect(option, 'multiselectCompactKeys')}
						selectedKeys={selectedKeys.multiselectCompactKeys}
						clearable
						onClear={() => handleClear('multiselectCompactKeys')}
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Search</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>searchBy</CSD.ListItem>
					<CSD.ListItem>onSearch</CSD.ListItem>
				</CSD.List>
				<CSD.Text>Search is defined with `searchBy`, it accepts `'label'` and `'all'`.</CSD.Text>
				<CSD.Text>
					Default is `'label'` which works by searching through the labels of the given options.
					By setting value to `'all'`, the search will also include searching by the keys.
				</CSD.Text>
				<CSD.Text>
					`onSearch` prop allows setting custom functionality which executes on each change in the search field.
				</CSD.Text>
				<CSD.Text>
					If no data matches the search term, a message "No data found" is displayed.
				</CSD.Text>
				<CSD.Text>
					Example below will search across the keys, while also triggering custom method on each character,
					which is in this case a console log set to `onSearch`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					consoleAlert
					related={[
						'label',
						'options',
						'searchBy',
						'onSearch'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							searchBy="all"
							onSearch={console.log}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'searchExampleKeys')}
						selectedKeys={selectedKeys.searchExampleKeys}
						searchBy="all"
						onSearch={console.log}
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onBlur</CSD.ListItem>
					<CSD.ListItem>onClick</CSD.ListItem>
					<CSD.ListItem>onKeyDown</CSD.ListItem>
					<CSD.ListItem>onDropdownClose</CSD.ListItem>
					<CSD.ListItem>onClear</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					These events work largely in a same way where they pass a function which executes after certain
					criteria is met.
				</CSD.Text>
				<CSD.Text>CSCustomSelect supports these native events: `onBlur`, `onClick` and `onKeyDown`.</CSD.Text>
				<CSD.Text>
					Besides those, two synthetic events are exposed: `onDropdownClose`, which triggers once the dropdown
					collapses, and `onClear` which triggers when the clear button is clicked if there is no search term.
					If there is a search term, click on clear button will erase the search term. Once the search term is
					empty, click on clear button will then trigger `onClear` event.
				</CSD.Text>
				<CSD.Text>
					A boolean prop `clearable` controls whether clear button will be displayed or not. It is false by
					default, and without setting it to true, there is no point in passing anything to `onClear`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					consoleAlert
					related={[
						'label',
						'options',
						'selectedKeys',
						'onBlur',
						'onClick',
						'onDropdownClose',
						'onKeyDown',
						'onClear'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Custom Select with onBlur"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							onBlur={console.log}
						/>
						<CSCustomSelect
							options={options}
							label="Custom Select with onClick"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							onClick={console.log}
						/>
						<CSCustomSelect
							options={options}
							label="Custom Select with onDropdownClose"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							onDropdownClose={() => console.log('onDropdownClose triggered')}
						/>
						<CSCustomSelect
							options={options}
							label="Custom Select with onKeyDown"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							onKeyDown={console.log}
						/>
						<CSCustomSelect
							options={options}
							label="Custom Select with onClear"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							clearable
							onClear={handleClearLog}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Custom Select with onBlur"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'onBlurKeys')}
						selectedKeys={selectedKeys.onBlurKeys}
						onBlur={console.log}
					/>
					<CSCustomSelect
						options={options}
						label="Custom Select with onClick"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'onClickKeys')}
						selectedKeys={selectedKeys.onClickKeys}
						onClick={console.log}
					/>
					<CSCustomSelect
						options={options}
						label="Custom Select with onDropdownClose"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'onDropdownCloseKeys')}
						selectedKeys={selectedKeys.onDropdownCloseKeys}
						onDropdownClose={() => console.log('onDropdownClose triggered')}
					/>
					<CSCustomSelect
						options={options}
						label="Custom Select with onKeyDown"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'onKeyDownKeys')}
						selectedKeys={selectedKeys.onKeyDownKeys}
						onKeyDown={console.log}
					/>
					<CSCustomSelect
						options={options}
						label="Custom Select with onClear"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'onClearKeys')}
						selectedKeys={selectedKeys.onClearKeys}
						clearable
						onClear={() => console.log('onClear triggered')}
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Dropdown Actions</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>dropdownActions</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					In order to support custom actions, `dropdownActions` is a prop that accepts an array of objects
					which extend `CSButtonProps`.
				</CSD.Text>
				<CSD.Text>
					It is usually used to add custom actions in a form of a button that would apply to the dropdown
					list as a whole.
				</CSD.Text>
				<CSD.Text>These buttons will spawn at the bottom after all of the options.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					consoleAlert
					related={[
						'label',
						'options',
						'dropdownActions',
						'actions'
					]}
					code={`
						const dropdownActions = [{
							label: 'Add department',
							iconName: 'add',
							onClick: console.log
						}];

						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							dropdownActions={dropdownActions}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'dropdownAction')}
						selectedKeys={selectedKeys.dropdownAction}
						dropdownActions={[{
							label: 'Add department',
							iconName: 'add',
							onClick: console.log
						}]}
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
					Like most other form field components, CSCustomSelect features three error props.
					The first and most basic, `error` simply lets the user know if something is wrong.
					Along this prop you should provide some information which you can add to the `errorMessage` prop.
				</CSD.Text>
				<CSD.Text>
					If you want to provide a message but have limited space or a fixed layout then the `errorTooltip` prop
					may be the way forward. `errorTooltip` takes the value of the `errorMessage` prop and hides it away
					in a tooltip so that the message doesn't interfere with the layout of the page.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'error',
						'errorMessage',
						'errorTooltip'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							error
							errorMessage="This is an example error message"
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							error
							errorMessage="This is an example error message"
							errorTooltip
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'errorMessage')}
						selectedKeys={selectedKeys.errorMessage}
						error
						errorMessage="This is an example error message"
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'errorTooltip')}
						selectedKeys={selectedKeys.errorTooltip}
						error
						errorMessage="This is an example error message"
						errorTooltip
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Restrictions</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>disabled</CSD.ListItem>
					<CSD.ListItem>readOnly</CSD.ListItem>
					<CSD.ListItem>required</CSD.ListItem>
					<CSD.ListItem>hidden</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Similar to the `error` props, most form fields including CSCustomSelect feature a selection of boolean
					restriction props that either prevent or require user interaction.
				</CSD.Text>
				<CSD.Text>
					Using the `readOnly` prop user won't be able to modify the input field anymore, however, user will
					still be able to focus it, highlight it, and copy the text from it.
				</CSD.Text>
				<CSD.Text>
					Using the `disabled` prop input field will become non-interactive. Disabled fields should not have value.
				</CSD.Text>
				<CSD.Text>
					`required` prop will mark that completing the field is needed to proceed by adding a red asterisk in the label.
					It should not be used along the `disabled` or `readOnly`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'disabled',
						'readOnly',
						'required'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							disabled
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							readOnly
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							required
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'disabled')}
						selectedKeys={selectedKeys.disabled}
						disabled
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'readOnly')}
						selectedKeys={selectedKeys.readOnly}
						readOnly
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'required')}
						selectedKeys={selectedKeys.required}
						required
					/>
				</CSD.Preview>
				<CSD.Text>`hidden` prop is a boolean setting which will hide the input field when desired.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'hidden'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							hidden
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						hidden
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Label Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>label</CSD.ListItem>
					<CSD.ListItem>labelHidden</CSD.ListItem>
					<CSD.ListItem>labelTitle</CSD.ListItem>
					<CSD.ListItem>helpText</CSD.ListItem>
					<CSD.ListItem>tooltipPosition</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					`label` is a required prop. Even if no label is required visually,
					it is still needed for accessibility reasons.
				</CSD.Text>
				<CSD.Text>
					Some scenarios may require a CSCustomSelect without a label. This can be achieved by adding the
					`labelHidden` prop which will hide the label visually, but keep the accessibility semantics.
				</CSD.Text>
				<CSD.Text>
					Alternatively, you may wish to add a title on hover to the label. The `labelTitle` prop is a
					boolean prop which displays the value of the `label` prop on hover.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'labelHidden',
						'labelTitle'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Label"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
						/>
						<CSCustomSelect
							options={options}
							label="Label with a title"
							labelTitle="title"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
						/>
						<CSCustomSelect
							options={options}
							label="Label is visually hidden, but visible to screen readers"
							labelHidden
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Label"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'label')}
						selectedKeys={selectedKeys.label}
					/>
					<CSCustomSelect
						options={options}
						label="Label with a title"
						labelTitle="title"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'labelTitle')}
						selectedKeys={selectedKeys.labelTitle}
					/>
					<CSCustomSelect
						options={options}
						label="Label is visually hidden, but visible to screen readers"
						labelHidden
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'labelHidden')}
						selectedKeys={selectedKeys.labelHidden}
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
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'helpText',
						'tooltipPosition'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							helpText="Help text"
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							helpText="Help text"
							tooltipPosition="top-left"
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'helpText')}
						selectedKeys={selectedKeys.helpText}
						helpText="Help text"
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'tooltipPosition')}
						selectedKeys={selectedKeys.tooltipPosition}
						helpText="Help text"
						tooltipPosition="top-left"
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Input Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>title</CSD.ListItem>
					<CSD.ListItem>placeholder</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					By setting any string value to `title` you can show custom additional information which will be
					shown when hovered over the input field.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'title',
						'placeholder'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							title="Department"
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'title')}
						selectedKeys={selectedKeys.title}
						title="Department"
					/>
				</CSD.Preview>
				<CSD.Text>
					If you set `placeholder` value, input field will display it in light gray in the input field until
					something is typed in or an option is selected. This can be used for different purposes,
					but setting the "Search..." value is often used to indicate it is possible to perform the search.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'title',
						'placeholder'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							placeholder="Search..."
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							searchBy="all"
							placeholder="Search by key or label..."
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'placeholder')}
						selectedKeys={selectedKeys.placeholder}
						placeholder="Search..."
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'placeholderKeyOrLabel')}
						selectedKeys={selectedKeys.placeholderKeyOrLabel}
						searchBy="all"
						placeholder="Search by key or label..."
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Custom Data</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>actions</CSD.ListItem>
					<CSD.ListItem>icons</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Custom data can be added to most form field components including CSCustomSelect.
					These can be applied using either the `actions` or `icons` props.
				</CSD.Text>
				<CSD.Text>
					The `actions` prop allows for custom functionality to be added to the component through the addition
					of CSButton as shown in the example below. Buttons can be set in the `actions` prop, which accepts
					an array of objects typed as `CSButtonProps`, meaning that they share CSButton props as object attributes.
				</CSD.Text>
				<CSD.Text>
					The `icons` prop allows for custom icons to be added to the component through the addition of
					CSIcon as shown in the example below. Icons can be set in the `icons` prop, which accepts an array of
					objects typed as `CSIconProps`, meaning that they share CSIcon props as object attributes.
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
					table={CSCustomSelectProps}
					consoleAlert
					related={[
						'label',
						'options',
						'actions',
						'icons',
						'dropdownActions'
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

						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							actions={actions}
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							icons={icons}
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'actions')}
						selectedKeys={selectedKeys.actions}
						actions={actionsWithLog}
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'icons')}
						selectedKeys={selectedKeys.icons}
						icons={icons}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Appearance</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>General</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>borderRadius</CSD.ListItem>
					<CSD.ListItem>gridCustomPopup</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Adding the `borderRadius` prop allows custom border radius on the input element.
				</CSD.Text>
				<CSD.Text>
					Setting `gridCustomPopup` to `true` adds the class `.ag-custom-component-popup` to the outer dropdown
					wrapper to allow support for AG Grid custom components. This prevents the dropdown from closing on
					mouse click when inside the CSCustomSelect component. This will have no effect outside of cs-grid.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'borderRadius',
						`gridCustomPopup`
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							borderRadius="0"
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'borderRadius')}
						selectedKeys={selectedKeys.borderRadius}
						borderRadius="0"
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>Dropdown Position</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>align</CSD.ListItem>
					<CSD.ListItem>position</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSCustomSelect features two props to determine the position of the dropdown.
					These are `position` which determines vertical positioning and `align` which determines horizontal positioning.
				</CSD.Text>
				<CSD.Text>
					`position`, by default, is set to open the dropdown to the `bottom` of the input field.
					However, if there is no space below in the viewport but there is above, then this value will temporarily
					change to `top` until there is space below. If `position` is set to `top` then this behaviour will reverse.
				</CSD.Text>
				<CSD.Text>
					`align`, by default, is set so that it aligns the dropdown to the `left` edge of the input field.
					`align` also takes the value of `right`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'align',
						'position'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Bottom"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
						/>
						<CSCustomSelect
							options={options}
							label="Top"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							position="top"
						/>
						<CSCustomSelect
							options={options}
							label="Left"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
						/>
						<CSCustomSelect
							options={options}
							label="Right"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							align="right"
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Bottom"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'positionBottom')}
						selectedKeys={selectedKeys.positionBottom}
					/>
					<CSCustomSelect
						options={options}
						label="Top"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'positionTop')}
						selectedKeys={selectedKeys.positionTop}
						position="top"
					/>
					<CSCustomSelect
						options={options}
						label="Left"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'alignLeft')}
						selectedKeys={selectedKeys.alignLeft}
					/>
					<CSCustomSelect
						options={options}
						label="Right"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'alignRight')}
						selectedKeys={selectedKeys.alignRight}
						align="right"
					/>
				</CSD.Preview>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>id</CSD.ListItem>
					<CSD.ListItem>className</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to CSCustomSelect using the `className` and `id`
					props respectively. `className` is applied to the outer wrapper whilst `id` is applied to both the
					input element and the label `for` attribute.
				</CSD.Text>
				<CSD.Text>
					If `id` is not specified, random unique id is generated, which is there for semantic association with
					belonging label.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSCustomSelectProps}
					related={[
						'label',
						'options',
						'id',
						'className'
					]}
					code={`
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							className="custom-br-purple"
						/>
						<CSCustomSelect
							options={options}
							label="Department"
							onSelect={handleSelect}
							selectedKeys={selectedKeys}
							id="custom-id"
						/>
					`}
				>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'customClass')}
						selectedKeys={selectedKeys.customClass}
						className="custom-br-purple"
					/>
					<CSCustomSelect
						options={options}
						label="Department"
						onSelect={(option: CSCustomSelectOptionInterface) => handleSelect(option, 'id')}
						selectedKeys={selectedKeys.id}
						id="custom-id"
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSCustomSelectPreview;
