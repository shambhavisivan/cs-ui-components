import React from 'react';
import { CSInputSearch } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSInputSearchPreviewState {
	focused: boolean;
	value: string;
	[key: string]: any;
}

class CSInputSearchPreview extends React.Component<{}, CSInputSearchPreviewState> {
	state: CSInputSearchPreviewState = {
		focused: false,
		value: ''
	};

	handleBlur = () => alert('Input has lost focus.');
	handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
		this.setState({ [key]: event.target.value  });
	}
	handleClick = () => alert('Input has been clicked.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handleClearSearch = (key: string) => this.setState({ [key]: '' });
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc = () => ({
		name: 'Input Search',
		usage: 'Search input is used for search value entry.',
		accessible: 'yes',
		components: [
			{
				name: 'CSInputSearch',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a search input. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.label}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'label')}
									onClearSearch={() => this.handleClearSearch('label')}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
								/>`
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.autoFocus}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'autoFocus')}
									onClearSearch={() => this.handleClearSearch('autoFocus')}
									autoFocus
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									autoFocus
								/>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSInputSearch
									label="Type here"
									value={this.state.borderRadius}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'borderRadius')}
									onClearSearch={() => this.handleClearSearch('borderRadius')}
									borderRadius="0"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									borderRadius="0"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSInputSearch label="Type here" disabled />,
								code: '<CSInputSearch label="Type here" disabled />'
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.error}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'error')}
									onClearSearch={() => this.handleClearSearch('error')}
									error
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									error
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.errorMessage}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'errorMessage')}
									onClearSearch={() => this.handleClearSearch('errorMessage')}
									error
									errorMessage="Error message."
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSInputSearch
									label="Enter value"
									value={this.state.errorTooltip}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'errorTooltip')}
									onClearSearch={() => this.handleClearSearch('errorTooltip')}
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputSearch
									label="Enter value"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									error
									errorMessage="Error message."
									errorTooltip
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.helpText}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'helpText')}
									onClearSearch={() => this.handleClearSearch('helpText')}
									helpText="Help text example"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSInputSearch label="Type here" hidden />,
								code: '<CSInputSearch label="Type here" hidden />'
							}
						]
					}, {
						propName: 'iconPosition',
						variations: [
							{
								primaryVariants: 'iconPosition="right"',
								component: <CSInputSearch
									label="Type here"
									value={this.state.iconPosition}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'iconPosition')}
									onClearSearch={() => this.handleClearSearch('iconPosition')}
									iconPosition="right"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									iconPosition="right"
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.labelHidden}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'labelHidden')}
									onClearSearch={() => this.handleClearSearch('labelHidden')}
									labelHidden
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.labelTitle}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'labelTitle')}
									onClearSearch={() => this.handleClearSearch('labelTitle')}
									labelTitle
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onBlur}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onBlur')}
									onClearSearch={() => this.handleClearSearch('onBlur')}
									onBlur={this.handleBlur}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									onBlur={this.handleBlur}
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onChange}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										alert('Input has been changed.');
										this.handleChange(event, 'onChange');
									}}
									onClearSearch={() => this.handleClearSearch('onChange')}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={this.handleChange}
									onClearSearch={() => setValue('')}
								/>`
							}
						]
					}, {
						propName: 'onClearSearch',
						description: 'Provides option to call a function after search cleared to provide extra functionality',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onClearSearch}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onClearSearch')}
									onClearSearch={() =>  {
										alert('Input has been cleared.');
										this.handleClearSearch('onClearSearch');
									}}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={this.handleClearSearch}
								/>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onClick}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onClick')}
									onClearSearch={() => this.handleClearSearch('onClick')}
									onClick={this.handleClick}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									onClick={this.handleClick}
								/>`
							}
						]
					}, {
						propName: 'onFocus',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onFocus}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onFocus')}
									onClearSearch={() => this.handleClearSearch('onFocus')}
									onFocus={this.handleFocus}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									onFocus={this.handleFocus}
								/>`
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.onKeyDown}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onKeyDown')}
									onClearSearch={() => this.handleClearSearch('onKeyDown')}
									onKeyDown={this.handleKeyDown}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									onKeyDown={this.handleKeyDown}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.placeholder}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'placeholder')}
									onClearSearch={() => this.handleClearSearch('placeholder')}
									placeholder="Search name"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									placeholder="Search name"
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSInputSearch
									label="Type here"
									value={this.state.required}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'required')}
									onClearSearch={() => this.handleClearSearch('required')}
									required
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									required
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value={this.state.title}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'title')}
									onClearSearch={() => this.handleClearSearch('title')}
									title="This is a title"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									title="This is a title"
								/>`
							}
						]
					}, {
						propName: 'tooltipPosition',
						alert: {
							variant: 'info',
							text: 'This prop can only be used when helpText is set.'
						},
						variations: [
							{
								primaryVariants: 'tooltipPosition="top-left"',
								secondaryVariants: 'helpText="text"',
								component: <CSInputSearch
									label="Type here"
									value={this.state.tooltipPosition}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'tooltipPosition')}
									onClearSearch={() => this.handleClearSearch('tooltipPosition')}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSInputSearch
									label="Type here"
									value="Value"
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => event.target.value}
								/>,
								code: `<CSInputSearch
									label="Type here"
									value="Value"
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'value')}
								/>`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="50%"',
								component: <CSInputSearch
									label="Type here"
									value={this.state.width}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'width')}
									onClearSearch={() => this.handleClearSearch('width')}
									width="50%"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									width="50%"
								/>`
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
								component: <CSInputSearch
									label="Type here"
									value={this.state.idClass}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'idClass')}
									onClearSearch={() => this.handleClearSearch('idClass')}
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSInputSearch
									label="Type here"
									value={value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
									onClearSearch={() => setValue('')}
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the search input label.'
					}, {
						name: 'autoFocus',
						types: 'boolean',
						default: 'false',
						description: 'Set whether the search input should be autofocused.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the search input.'
					}, {
						name: 'error',
						types: 'boolean',
						default: 'false',
						description: 'Toggle the error state.'
					}, {
						name: 'errorMessage',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error message or messages for the number input.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the search input.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'hidden',
						types: 'boolean',
						default: 'false',
						description: 'Control the hidden attribute.'
					}, {
						name: 'iconPosition',
						customTypes: {
							name: 'CSInputSearchIconPosition',
							types: [`'left'`, `'right'`]
						},
						default: `'left'`,
						description: 'Set where the icon should be positioned.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the search input label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onChange',
						types: '(event) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'onClearSearch',
						types: '() => void',
						description: 'Handler method for when the input is cleared.'
					}, {
						name: 'onClick',
						types: '(event) => void',
						description: 'Handler method for the click event.'
					}, {
						name: 'onFocus',
						types: '(event) => void',
						description: 'Handler method for the focus event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => void',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a search input placeholder.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the search input required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the search input title.'
					}, {
						name: 'tooltipPosition',
						customTypes: {
							name: 'CSTooltipPosition',
							types: [
								`'top-right'`,
								`'top-center'`,
								`'top-left'`,
								`'bottom-right'`,
								`'bottom-center'`,
								`'bottom-left'`,
								`'right-top'`,
								`'right-center'`,
								`'right-bottom'`,
								`'left-top'`,
								`'left-center'`,
								`'left-bottom'`
							]
						},
						default: `'top-right'`,
						description: 'Set the tooltip position for the search input.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the search input value.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the search input field width. (eg. 100%, 20rem, 400px, etc.)'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the search input.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the search input.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the search input.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.3.1',
				'1.4.1',
				'1.4.4',
				'2.1.1',
				'2.1.2',
				'2.4.7',
				'2.5.3',
				'3.2.1',
				'3.2.2',
				'3.3.1',
				'3.3.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<input>`',
					'Icon as a child and `<CSIcon>`',
					'Clear button is `<CSButton>`'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-invalid` - true when entered value is not valid',
					'`aria-required` - true when entering a value is required',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable and supports click with `Enter`',
					'`<CSButton>` - focusable and supports clicks with `Enter` and `Space`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSInputSearchPreview;
