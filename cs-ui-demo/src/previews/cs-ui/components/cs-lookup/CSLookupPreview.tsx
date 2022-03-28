import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSButtonSize, CSIconOrigin, CSLookup, CSTooltipPosition } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSLookupProps from './cs-lookup-props';
import ClientSideProps from './cs-lookup-client-props';
import ServerSideProps from './cs-lookup-server-props';
import CSLookupAccessibility from './cs-lookup-accessibility';

const columns = [
	{ key: 'Account', header: 'Account' },
	{ key: 'Industry', header: 'Industry' }
];

const options = [
	{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
	{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
	{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
	{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } },
	{ key: 5, data: { Id: 5, Account: 'Facebook', Industry: 'Social media' } },
	{ key: 6, data: { Id: 6, Account: 'Google', Industry: 'Technology' } },
	{ key: 7, data: { Id: 7, Account: 'Spotify', Industry: 'Streaming and media' } },
	{ key: 8, data: { Id: 8, Account: 'British Gas', Industry: 'Energy' } },
	{ key: 9, data: { Id: 9, Account: 'Columbia Pictures', Industry: 'Film' } },
	{ key: 10, data: { Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' } },
	{ key: 11, data: { Id: 11, Account: 'News Corp', Industry: 'Mass media' } },
	{ key: 12, data: { Id: 12, Account: 'Telstra', Industry: 'Telecommunications' } },
	{ key: 13, data: { Id: 13, Account: 'Netflix', Industry: 'Production' } },
	{ key: 14, data: { Id: 14, Account: 'Instagram', Industry: 'Social media' } },
	{ key: 15, data: { Id: 15, Account: 'Vodafone', Industry: 'Telecommunications' } },
	{ key: 16, data: { Id: 16, Account: 'Apple', Industry: 'Software' } },
	{ key: 17, data: { Id: 17, Account: 'Amazon', Industry: 'E-commerce' } },
	{ key: 18, data: { Id: 18, Account: 'Ikea', Industry: 'Furniture retail' } },
	{ key: 19, data: { Id: 19, Account: 'Microsoft', Industry: 'Software' } },
	{ key: 20, data: { Id: 20, Account: 'Visa', Industry: 'Finance' } },
	{ key: 21, data: { Id: 21, Account: 'IBM', Industry: 'Software' } },
	{ key: 22, data: { Id: 22, Account: 'eBay', Industry: 'E-commerce' } },
	{ key: 23, data: { Id: 23, Account: 'Oracle', Industry: 'Software' } },
	{ key: 24, data: { Id: 24, Account: 'Tesla', Industry: 'Car manufacturing' } },
	{ key: 25, data: { Id: 25, Account: 'YouTube', Industry: 'Streaming and media' } },
	{ key: 26, data: { Id: 26, Account: 'O2', Industry: 'Telecommunications' } },
	{ key: 27, data: { Id: 27, Account: 'Warner Bros. Pictures', Industry: 'Film' } }
];

const CSLookupPreview = () => {
	const fetchData = async (searchTerm: any, pageSize: any, pageNo: any) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		if (searchTerm === '') {
			return {
				records: options.slice(pageNo * pageSize, (pageNo + 1) * pageSize),
				moreRecords: (pageNo + 1) * pageSize < options.length
			};
		} else {
			const filteredData = options
				.filter(record => record.data.Account.toString().toLowerCase().includes(searchTerm.toLowerCase()))
				.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
			return {
				records: filteredData,
				moreRecords: (pageNo + 1) * pageSize < filteredData.length
			};
		}
	};

	const clientWithBaseProps = { ...ClientSideProps, data: [...CSLookupProps.data, ...ClientSideProps.data] };
	const serverWithBaseProps = { ...ServerSideProps, data: [...CSLookupProps.data, ...ServerSideProps.data] };

	return (
		<CSD.Page
			title="Lookup"
			accessible="yes"
			accessibility={CSLookupAccessibility}
			tables={[CSLookupProps, ClientSideProps, ServerSideProps]}
			routePrefix="cs-ui"
		>
			<CSD.Heading>Base Usage</CSD.Heading>
			<CSD.List type="props">
				<CSD.ListItem>label</CSD.ListItem>
				<CSD.ListItem>columns</CSD.ListItem>
				<CSD.ListItem>fieldToBeDisplayed</CSD.ListItem>
				<CSD.ListItem>mode</CSD.ListItem>
			</CSD.List>
			<CSD.Section>
				<CSD.Text>
					CSLookup is an autocomplete combobox that will search against a database object.
					It has four default required props in order for it to function including `label`, `columns`, `fieldToBeDisplayed`, and `mode`.
					The last of which determines whether the data passed to the lookup is client side or server side.
					There is a fifth or sixth required prop determined by the value of `mode` called `options` if `mode="client"` or `fetchOptions` and `pageSize` if `mode="server"`.
				</CSD.Text>
				<CSD.Text>
					There are multiple props that only work on either <CSD.Link path="#client-side"><b>client</b></CSD.Link> or <CSD.Link path="#server-side"><b>server</b></CSD.Link>  versions of CSLookup.
					These are explained in their respective sections below.
				</CSD.Text>
				<CSD.Text>
					To get started a `label` must be provided. Even if no label is required visually, it is still a required prop for accessibility reasons.
				</CSD.Text>
				<CSD.Text>
					The `columns` prop determines which columns are to be shown in the lookup dropdown.
					It accepts an array of objects as its value which can customize a wide variety of factors.
					These are explained in full in the `CSDataTable` component page under the section <CSD.Link path="/cs-ui/data-table#column-controls"><b>Column Controls</b></CSD.Link>.
					The columns on this page just feature two of those possible values, `key` which is required, and `header`.
					The value for `header` can be a string, number or renderable React element, but for simplicity all examples shown below will be strings.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Client Side</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Displaying Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>options</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					When using `mode="client"`, the `options` prop is used to determine the list of values inside the lookup.
					This is passed as an array of objects to the component. Each item in the array has two main values, `key` and `data`.
					`key` is a number and `data` is another object with the values that are able to be displayed inside the lookup dropdown.
				</CSD.Text>
				<CSD.Text>
					The values displayed inside the lookup dropdown are determined by the `columns` prop.
					In the example below the values passed to the `columns` prop's `header` attribute are "Account" and "Industry", therefore in the lookup dropdown
					the two columns shown contain the strings "Account" and "Industry". This is despite the `options` array containing more potential column values.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Loading</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>loading</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					In some circumstances you may want to provide a loading icon inside the lookup dropdown until all the data for the dropdown has been fetched.
					You can set the `loading` prop to `true` whilst the data is being fetched and to `false` once it is complete.
					This helps the user know something is happening even if no data is currently showing.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'loading']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							loading
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						loading
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Client Side Search</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>searchby</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Search, by default works by searching through all the columns and filtering the results.
					The `searchBy` prop allows you to override the default functionality and provide a specific column to search against.
					In the example below, when you begin to type you will start searching through the industry column.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'searchBy']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							searchBy={['Industry']}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						searchBy={['Industry']}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Server Side</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					Some scenarios may require the use of `mode="server"` rather than `mode="client"`.
					This enables asynchronous fetching of records with the `fetchOptions` prop, which also allows the use of the `infiniteScroll` and `minTermLength`
					props which aren't able to be used when `mode="client"`.
				</CSD.Text>
				<CSD.Heading level={2}>Fetching Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>fetchOptions</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					The `fetchOptions` prop accepts a function which will be called on every search or focus change if the `minTermLength` is set to `0`, which it is by default.
					The function takes the search term, the page size (which determines the number of returned records)
					and the page number which will automatically increase on every infiniteScroll event.
					It returns an object with a records property of the same type as options and a boolean moreRecords property which indicates whether further records can be fetched.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'fetchOptions', 'pageSize']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="server"
							fetchOptions={fetchData}
							pageSize={5}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="server"
						fetchOptions={fetchData}
						pageSize={5}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Pagination</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>pageSize</CSD.ListItem>
					<CSD.ListItem>infiniteScroll</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Pagination can be customized when using `mode="server"` in two ways. The first way which is also required is by using the `pageSize` prop.
					This sets the number of records that should be returned after each lookup records fetch. The second, `infiniteScroll`, determines whether
					fetching additional records when the dropdown scroll hits the bottom is enabled, which by default is `false`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={serverWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'fetchOptions', 'pageSize', 'infiniteScroll']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="server"
							fetchOptions={fetchData}
							pageSize={5}
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="server"
							fetchOptions={fetchData}
							pageSize={5}
							infiniteScroll
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="server"
						fetchOptions={fetchData}
						pageSize={5}
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="server"
						fetchOptions={fetchData}
						pageSize={5}
						infiniteScroll
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Server Side Search</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>minTermLength</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Sometimes there may be too many returned items in the lookup which could cause the search to be less effective at producing the results you are after.
					If this is the case, then the `minTermLength` prop could help narrow down the results further by providing a minimum search term length.
					Set it to `5` as in the example below and the search field will only return results once five or more characters have been typed.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={serverWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'fetchOptions', 'pageSize', 'minTermLength']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="server"
							fetchOptions={fetchData}
							pageSize={5}
							minTermLength={5}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="server"
						fetchOptions={fetchData}
						pageSize={5}
						minTermLength={5}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Interaction</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Selection</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>value</CSD.ListItem>
					<CSD.ListItem>onSelectChange</CSD.ListItem>
					<CSD.ListItem>multiselect</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Some scenarios may call for a different approach to how values are presented or selected. There are three props that can be used to provide more or custom functionality.
				</CSD.Text>
				<CSD.Text>
					The `value` prop allows you to set a default value for the lookup. This can be overridden by selecting a different option from the dropdown.
				</CSD.Text>
				<CSD.Text>
					If you want to provide multiple options for the user rather than just allowing a single selection then the `multiselect` prop will allow this.
				</CSD.Text>
				<CSD.Text>
					Finally if you want to run some logic once an option has been selected then the `onSelectChange` prop accepts a function and runs after each option is selected.
					This can be combined with the `multiselect` prop to run multiple functions after each selection.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'value', 'onSelectChange', 'multiselect']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							multiselect
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onSelectChange={console.log}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						multiselect
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onSelectChange={console.log}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>onBlur</CSD.ListItem>
					<CSD.ListItem>onClick</CSD.ListItem>
					<CSD.ListItem>onFocus</CSD.ListItem>
					<CSD.ListItem>onDropdownClose</CSD.ListItem>
					<CSD.ListItem>onKeyDown</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSLookup features seven event handler props. The first, `onSelectChange` is explained in the "Selection" part of this page above.
				</CSD.Text>
				<CSD.Text>
					CSLookup supports these native events: `onBlur`, `onClick`, `onFocus` and `onKeyDown`.
				</CSD.Text>
				<CSD.Text>
					Besides those, two synthetic events are exposed: `onDropdownClose`, which triggers once the dropdown collapses, and `onSearch`,
					which triggers when the search term gets modified.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					consoleAlert
					related={[
						'label',
						'columns',
						'fieldToBeDisplayed',
						'mode',
						'options',
						'onBlur',
						'onClick',
						'onFocus',
						'onDropdownClose',
						'onKeyDown',
						'searchBy',
						'onSearch'
					]}
					code={`
						<CSLookup
							label="Lookup with onBlur"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onBlur={console.log}
						/>
						<CSLookup
							label="Lookup with onClick"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onClick={console.log}
						/>
						<CSLookup
							label="Lookup with onFocus"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onFocus={console.log}
						/>
						<CSLookup
							label="Lookup with onDropdownClose"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onDropdownClose={() => console.log('onDropdownClose triggered')}
						/>
						<CSLookup
							label="Lookup with onKeyDown"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							onKeyDown={console.log}
						/>
						<CSLookup
							label="Lookup with onSearch"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							searchBy={['Id', 'Account']}
							onSearch={console.log}
						/>
					`}
				>
					<CSLookup
						label="Lookup with onBlur"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onBlur={console.log}
					/>
					<CSLookup
						label="Lookup with onClick"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onClick={console.log}
					/>
					<CSLookup
						label="Lookup with onFocus"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onFocus={console.log}
					/>
					<CSLookup
						label="Lookup with onDropdownClose"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onDropdownClose={() => console.log('onDropdownClose triggered')}
					/>
					<CSLookup
						label="Lookup with onKeyDown"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						onKeyDown={console.log}
					/>
					<CSLookup
						label="Lookup with onSearch"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						searchBy={['Id', 'Account']}
						onSearch={console.log}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Shared Props</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Error</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>error</CSD.ListItem>
					<CSD.ListItem>errorMessage</CSD.ListItem>
					<CSD.ListItem>errorTooltip</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Like most other form field components, CSLookup features three error props.
					The first and most basic, `error` simply lets the user know if something is wrong.
					Along this prop you should provide some information which you can add to the `errorMessage` prop.
				</CSD.Text>
				<CSD.Text>
					If you want to provide a message but have limited space or a fixed layout then the `errorTooltip` prop may be the way forward.
					`errorTooltip` takes the value of the `errorMessage` prop and hides it away in a tooltip so that the message doesn't interfere with the layout of the page.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'error', 'errorMessage', 'errorTooltip']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							error
							errorMessage="Error Message"
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							error
							errorMessage="Error Message"
							errorTooltip
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						error
						errorMessage="Error Message"
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						error
						errorMessage="Error Message"
						errorTooltip
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
					Similar to the `error` props, most form fields including CSLookup feature a selection of boolean restriction props that
					either prevent or require user interaction.
				</CSD.Text>
				<CSD.Text>
					Using the `readOnly` prop user won't be able to modify the input field anymore, however, user will still be able to focus it,
					highlight it, and copy the text from it.
				</CSD.Text>
				<CSD.Text>
					Using the `disabled` prop input field will become non-interactive. Disabled fields should not have value.
				</CSD.Text>
				<CSD.Text>
					`required` prop will mark that completing the field is needed to proceed by adding a red asterisk in the label.
					It should not be used alongside the `disabled` or `readOnly`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'disabled', 'readOnly', 'required', 'hidden']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							disabled
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							hidden
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
							readOnly
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							required
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						disabled
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
						readOnly
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						required
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						hidden
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Label Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>helpText</CSD.ListItem>
					<CSD.ListItem>tooltipPosition</CSD.ListItem>
					<CSD.ListItem>labelHidden</CSD.ListItem>
					<CSD.ListItem>labelTitle</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Some applications or use cases may require more or less information than a simple label can provide.
					We have four props to vary the type of data shown on the label.
				</CSD.Text>
				<CSD.Text>
					Some scenarios may require a CSLookup without a label. In this case the `label` prop is still required
					for accessibility reasons but adding the `labelHidden` prop causes the label to not show for the user.
				</CSD.Text>
				<CSD.Text>
					Alternatively, you may wish to add a title on hover to the label. The `labelTitle` prop is a boolean prop
					which displays the value of the `label` prop on hover.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'labelHidden', 'labelTitle']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							labelHidden
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							labelTitle
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						labelHidden
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						labelTitle
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
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'helpText', 'tooltipPosition']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							helpText="This is help text"
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							helpText="This is help text"
							tooltipPosition="top-left"
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						helpText="This is help text"
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						helpText="This is help text"
						tooltipPosition="top-left"
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Input Options</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>placeholder</CSD.ListItem>
					<CSD.ListItem>title</CSD.ListItem>
					<CSD.ListItem>autoFocus</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSLookup has a few more general props which it shares with most input components.
					There are `placeholder` and `title`, both of which accept a string and provide extra information to the user.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'placeholder', 'title']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							placeholder="This is a placeholder"
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							title="This is a title"
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						placeholder="This is a placeholder"
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						title="This is a title"
					/>
				</CSD.Preview>
				<CSD.Text>
					There is also the `autoFocus` prop. `autoFocus` causes the component to be focused once the page is rendered.
					It's a `boolean` prop which by default is set to `false`, so explicitly stating `false` like in the example below is unnecessary.
					However, setting it to `true` would cause this page to load with this example below in the viewport, which we don't want.
					This can be useful when we want to direct the users attention to a specific input field or area of the screen.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'autoFocus']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							autoFocus={false}
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						autoFocus={false}
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
					Custom data can be added to most form field components including CSLookup.
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
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'actions', 'icons']}
					code={`
						<CSLookup
							label="CSLookup with custom actions"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							actions={[
								{
									onClick: () => alert('Delete option called'),
									iconName: 'delete',
									labelHidden: true,
									size: 'small' as CSButtonSize,
									label: 'Delete'
								}, {
									onClick: () => alert('Add option called'),
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
							]}
						/>
						<CSLookup
							label="CSLookup with custom icons"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							icons={[
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
							]}
						/>
					`}
				>
					<CSLookup
						label="CSLookup with custom actions"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						actions={[
							{
								onClick: () => alert('Delete option called'),
								iconName: 'delete',
								labelHidden: true,
								size: 'small' as CSButtonSize,
								label: 'Delete'
							}, {
								onClick: () => alert('Add option called'),
								iconName: 'add',
								labelHidden: true,
								size: 'small' as CSButtonSize,
								label: 'Add',
								tooltip: {
									content: ['actions tooltip'],
									delay: 300,
									padding: '0.5rem',
									position: 'bottom-left' as CSTooltipPosition,
									stickyOnClick: true
								}
							}
						]}
					/>
					<CSLookup
						label="CSLookup with custom icons"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						icons={[
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
						]}
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
					Setting `gridCustomPopup` to `true` adds the class `.ag-custom-component-popup` to the outer dropdown wrapper to allow support for AG Grid custom components.
					This prevents the dropdown from closing on mouse click when inside the CSLookup component. This will have no effect outside of cs-grid.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'borderRadius', 'gridCustomPopup']}
					code={`
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							borderRadius="2rem"
						/>
						<CSLookup
							label="Label"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							gridCustomPopup
						/>
					`}
				>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						borderRadius="2rem"
					/>
					<CSLookup
						label="Label"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						gridCustomPopup
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Dropdown Position</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>position</CSD.ListItem>
					<CSD.ListItem>align</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSLookup features two props to determine the position of the dropdown.
					These are `position` which determines vertical positioning and `align` which determines horizontal positioning.
				</CSD.Text>
				<CSD.Text>
					By default `position` is set to open the dropdown to the `bottom` of the input field.
					However, if there is no space below in the viewport but there is above, then this value will temporarily change to `top` until there is space below.
					If `position` is set to `top` then this behaviour will reverse.
				</CSD.Text>
				<CSD.Text>
					By default `align` is set so that it aligns the dropdown to the `left` edge of the input field.
					`align` also takes the value of `right`, although when the width of the input field and the dropdown are the same, as in these examples, there is no visible difference between `left` and `right`.
					Setting a smaller input field width or setting the `dropdownWidth` prop will make the `align` prop clearer to see. `dropdownWidth` is explained more in the next section.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'position', 'align']}
					code={`
						<CSLookup
							label="Position is bottom by default"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
						/>
						<CSLookup
							label="Position can also be top"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							position="top"
						/>
						<CSLookup
							label="Align is left by default"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
						/>
						<CSLookup
							label="Align can also be right"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							align="right"
						/>
					`}
				>
					<CSLookup
						label="Position is bottom by default"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
					/>
					<CSLookup
						label="Position can also be top"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						position="top"
					/>
					<CSLookup
						label="Align is left by default"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
					/>
					<CSLookup
						label="Align can also be right"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						align="right"
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Dropdown Size</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>dropdownHeight</CSD.ListItem>
					<CSD.ListItem>dropdownWidth</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					CSLookup features two props to determine the size of the dropdown. These are `dropdownHeight` and `dropdownWidth`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'dropdownHeight, dropdownWidth']}
					code={`
						<CSLookup
							label="Height of the dropdown is 100px"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							dropdownHeight="100px"
						/>
						<CSLookup
							label="Width of the dropdown is 500px"
							columns={columns}
							fieldToBeDisplayed="Account"
							mode="client"
							options={options}
							dropdownWidth="500px"
						/>
					`}
				>
					<CSLookup
						label="Height of the dropdown is 100px"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						dropdownHeight="100px"
					/>
					<CSLookup
						label="Width of the dropdown is 500px"
						columns={columns}
						fieldToBeDisplayed="Account"
						mode="client"
						options={options}
						dropdownWidth="500px"
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.List type="props">
					<CSD.ListItem>id</CSD.ListItem>
					<CSD.ListItem>className</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					It is possible to apply custom CSS classes and IDs to CSLookup using the `className` and `id` props respectively.
					`className` is applied to the outer wrapper whilst `id` is applied to both the input element and the label `for` attribute.
				</CSD.Text>
				<CSD.Text>
					If `id` is not specified, random unique id is generated, which is there for semantic association with belonging label.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={clientWithBaseProps}
					related={['label', 'columns', 'fieldToBeDisplayed', 'mode', 'options', 'id', 'className']}
					code={`
						<CSLookup
							fieldToBeDisplayed="Account"
							label="This is a lookup with a custom class"
							options={options}
							columns={columns}
							mode="client"
							className="custom-br-purple"
						/>
						<CSLookup
							fieldToBeDisplayed="Account"
							label="This is a lookup with a custom id"
							options={options}
							columns={columns}
							mode="client"
							id="custom-id"
						/>
					`}
				>
					<CSLookup
						fieldToBeDisplayed="Account"
						label="This is a lookup with a custom class"
						options={options}
						columns={columns}
						mode="client"
						className="custom-br-purple"
					/>
					<CSLookup
						fieldToBeDisplayed="Account"
						label="This is a lookup with a custom id"
						options={options}
						columns={columns}
						mode="client"
						id="custom-id"
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSLookupPreview;
