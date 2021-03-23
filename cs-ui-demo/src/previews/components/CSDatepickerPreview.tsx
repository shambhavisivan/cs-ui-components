import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import moment from 'moment';

import { CSDatepicker } from '@cloudsense/cs-ui-components';

class CSDatepickerPreview extends React.Component {
	value = moment('1.1.2020', 'DD-MM-YYYY').toDate();

	handleCloseCalendar = () => alert('Calendar has been closed.');
	handleChange = () => alert('Date has changed.');
	handleChangeRaw = () => alert('Date has changed from raw value.');

	getDatePickerDoc = () => ({
		name: 'Datepicker',
		usage: 'A datepicker is a text input to capture a date. You can select a single date, date range or date and time.',
		accessible: 'yes',
		previews: [
			{
				name: 'DatePicker',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for datepicker. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSDatepicker label="Enter date" />,
								code: '<CSDatepicker label="Enter date" />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSDatepicker label="Enter date" borderRadius="0" />,
								code: '<CSDatepicker label="Enter date" borderRadius="0" />'
							}
						]
					}, {
						propName: 'dateFormat',
						variations: [
							{
								primaryVariants: 'dateFormat="dd-MM-yyyy"',
								quickLink: 'dd-MM-yyyy',
								component: <CSDatepicker label="Enter date" dateFormat="dd-MM-yyyy" />,
								code: '<CSDatepicker label="Enter date" dateFormat="dd-MM-yyyy" />'
							}, {
								primaryVariants: 'dateFormat="MM-dd-yyyy"',
								quickLink: 'MM-dd-yyyy',
								component: <CSDatepicker label="Enter date" dateFormat="MM-dd-yyyy" />,
								code: '<CSDatepicker label="Enter date" dateFormat="MM-dd-yyyy" />'
							}, {
								primaryVariants: 'dateFormat="yyyy-MM-dd"',
								quickLink: 'yyyy-MM-dd',
								component: <CSDatepicker label="Enter date" dateFormat="yyyy-MM-dd" />,
								code: '<CSDatepicker label="Enter date" dateFormat="yyyy-MM-dd" />'
							}, {
								primaryVariants: 'dateFormat="yyyy-dd-MM"',
								quickLink: 'yyyy-dd-MM',
								component: <CSDatepicker label="Enter date" dateFormat="yyyy-dd-MM" />,
								code: '<CSDatepicker label="Enter date" dateFormat="yyyy-dd-MM" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSDatepicker label="Enter date" disabled />,
								code: '<CSDatepicker label="Enter date" disabled />'
							}
						]
					}, {
						propName: 'dropdownMode',
						variations: [
							{
								primaryVariants: 'dropdownMode="scroll"',
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
								/>`

							}, {
								primaryVariants: 'dropdownMode="select"',
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
								/>`
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSDatepicker label="Enter date" error />,
								code: '<CSDatepicker label="Enter date" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSDatepicker
									label="Enter date"
									error
									errorMessage="Error message!"
								/>,
								code: `<CSDatepicker
									label="Enter date"
									error
									errorMessage="Error message!"
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSDatepicker label="Enter date" helpText="Help text example" />,
								code: '<CSDatepicker label="Enter date" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'isClearable',
						variations: [
							{
								primaryVariants: 'isClearable={true}',
								component: <CSDatepicker label="Enter date" isClearable />,
								code: '<CSDatepicker label="Enter date" isClearable />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSDatepicker label="Enter date" labelHidden />,
								code: '<CSDatepicker label="Enter date" labelHidden />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSDatepicker label="Enter date" labelTitle />,
								code: '<CSDatepicker label="Enter date" labelTitle />'
							}
						]
					}, {
						propName: 'maxDate',
						variations: [
							{
								component: <CSDatepicker label="Enter date" maxDate={5} />,
								code: '<CSDatepicker label="Enter date" maxDate={5} />'
							}
						]
					}, {
						propName: 'maxDateYear',
						variations: [
							{
								primaryVariants: 'maxDateYear={true}',
								component: <CSDatepicker
									label="Enter date"
									maxDate={1}
									maxDateYear
								/>,
								code: `<CSDatepicker
									label="Enter date"
									maxDate={1}
									maxDateYear
								/>`
							}
						]
					}, {
						propName: 'minDate',
						variations: [
							{
								component: <CSDatepicker label="Enter date" minDate={10} />,
								code: '<CSDatepicker label="Enter date" minDate={10} />'
							}
						]
					}, {
						propName: 'minDateYear',
						variations: [
							{
								primaryVariants: 'minDateYear={true}',
								component: <CSDatepicker
									label="Enter date"
									minDate={1}
									minDateYear
								/>,
								code: `<CSDatepicker
									label="Enter date"
									minDate={1}
									minDateYear
								/>`
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSDatepicker label="Enter date" name="datepicker" />,
								code: '<CSDatepicker label="Enter date" name="datepicker" />'
							}
						]
					}, {
						propName: 'onCalendarClose',
						variations: [
							{
								component: <CSDatepicker label="Enter date" onCalendarClose={this.handleCloseCalendar} />,
								code: '<CSDatepicker label="Enter date" onCalendarClose={this.handleCloseCalendar} />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSDatepicker label="Enter date" onChange={this.handleChange} />,
								code: '<CSDatepicker label="Enter date" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'onChangeRaw',
						variations: [
							{
								component: <CSDatepicker label="Enter date" onChangeRaw={this.handleChangeRaw} />,
								code: '<CSDatepicker label="Enter date" onChangeRaw={this.handleChangeRaw} />'
							}
						]
					}, {
						propName: 'openToDate',
						variations: [
							{
								component: <CSDatepicker label="Enter date" openToDate={new Date('12-20-1992')} />,
								code: `<CSDatepicker label="Enter date" openToDate={new Date('12-20-1992')} />`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSDatepicker label="Enter date" placeholder="Placeholder text" />,
								code: '<CSDatepicker label="Enter date" placeholder="Placeholder text" />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSDatepicker
									label="Enter date"
									value={this.value}
									readOnly
								/>,
								code: `<CSDatepicker
									label="Enter date"
									value={this.value}
									readOnly
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSDatepicker label="Enter date" required />,
								code: '<CSDatepicker label="Enter date" required />'
							}
						]
					}, {
						propName: 'scrollableYearDropdown',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
								/>,
								code: `<CSDatepicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
								/>`
							}
						]
					}, {
						propName: 'showMonthDropdown',
						variations: [
							{
								component: <CSDatepicker label="Enter date" showMonthDropdown />,
								code: '<CSDatepicker label="Enter date" showMonthDropdown />'
							}
						]
					}, {
						propName: 'showYearDropdown',
						variations: [
							{
								component: <CSDatepicker label="Enter date" showYearDropdown />,
								code: '<CSDatepicker label="Enter date" showYearDropdown />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSDatepicker label="Enter date" title="This is a title" />,
								code: '<CSDatepicker label="Enter date" title="This is a title" />'

							}
						]
					}, {
						propName: 'todayButton',
						variations: [
							{
								primaryVariants: 'todayButton={true}',
								component: <CSDatepicker label="Enter date" todayButton />,
								code: '<CSDatepicker label="Enter date" todayButton />'
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
								secondaryVariant: 'helpText="text"',
								component: <CSDatepicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
								/>,
								code: `<CSDatepicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'value',
						customText: '',
						variations: [
							{
								component: <CSDatepicker label="Enter date" value={this.value} />,
								code: `<CSDatepicker label="Enter date" value={this.value} />`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="100%"',
								quickLink: '100%',
								component: <CSDatepicker label="Enter date" width="100%" />,
								code: '<CSDatepicker label="Enter date" width="100%" />'
							}, {
								primaryVariants: 'width="20rem"',
								quickLink: '20rem',
								component: <CSDatepicker label="Enter date" width="20rem" />,
								code: '<CSDatepicker label="Enter date" width="20rem" />'
							}, {
								primaryVariants: 'width="400px"',
								quickLink: '400px',
								component: <CSDatepicker label="Enter date" width="400px" />,
								code: '<CSDatepicker label="Enter date" width="400px" />'
							}
						]
					}, {
						propName: 'yearDropdownItemNumber',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={15}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={15}
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
								component: <CSDatepicker
									label="Enter date"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSDatepicker
									label="Enter date"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'borderRadius',
				types: ['string'],
				default: '0.25rem',
				description: 'Set a border radius style.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the datepicker.'
			}, {
				name: 'dateFormat',
				types: ['string'],
				default: '\'dd-MM-yyyy\'',
				description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'Disable the datepicker.'
			}, {
				name: 'dropdownMode',
				customTypes: [{
					name: 'CSDatepickerDropdownMode',
					types: ['\'scroll\'', '\'select\'']
				}],
				default: '\'scroll\'',
				description: 'Set the type of year and month dropdown.'
			}, {
				name: 'error',
				types: ['boolean'],
				default: 'false',
				description: 'Toggle the error state.'
			}, {
				name: 'errorMessage',
				customTypes: [{
					name: 'CSFieldErrorMsgType',
					types: ['string', 'Array<string>']
				}],
				description: 'Set the error message or messages for the datepicker.'
			}, {
				name: 'helpText',
				types: ['string'],
				description: 'Set the text to be displayed in the tooltip.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the datepicker.'
			}, {
				name: 'isClearable',
				types: ['boolean'],
				description: 'Show or hide the clear button.'
			}, {
				name: 'label',
				required: true,
				types: ['string'],
				description: 'Set the datepicker label.'
			}, {
				name: 'labelHidden',
				types: ['boolean'],
				default: 'false',
				description: 'Hide the datepicker label.'
			}, {
				name: 'labelTitle',
				types: ['boolean'],
				description: 'Control whether to set the title attribute.'
			}, {
				name: 'locale',
				types: ['any'],
				description: 'Set the datepicker locale.'
			}, {
				name: 'maxDate',
				types: ['number'],
				description: 'Set the maximum date in days relative to today.'
			}, {
				name: 'maxDateYear',
				types: ['boolean'],
				default: 'false',
				description: 'Make maxDate observe years instead of days.'
			}, {
				name: 'minDate',
				types: ['number'],
				description: 'Set the minimum date in days relative to today.'
			}, {
				name: 'minDateYear',
				types: ['boolean'],
				default: 'false',
				description: 'Make minDate observe years instead of days.'
			}, {
				name: 'name',
				types: ['string'],
				description: 'Set the input name.'
			}, {
				name: 'onCalendarClose',
				types: ['() => void'],
				description: 'Handler method for closing the calendar.'
			}, {
				name: 'onChange',
				types: ['(event) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'onChangeRaw',
				types: ['(event) => any'],
				description: 'Handler method for the change event from raw data.'
			}, {
				name: 'openToDate',
				types: ['any'],
				description: 'Select a date to which to open the datepicker. (eg. new Date(\'1997-10-11\'))'
			}, {
				name: 'placeholder',
				types: ['string'],
				description: 'Set a datepicker placeholder.'
			}, {
				name: 'readOnly',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether to apply the readonly attribute.'
			}, {
				name: 'required',
				types: ['boolean'],
				default: 'false',
				description: 'Make the datepicker required.'
			}, {
				name: 'scrollableYearDropdown',
				types: ['boolean'],
				default: 'false',
				description: 'Set the year dropdown to fixed height and add a scrollbar.'
			}, {
				name: 'showMonthDropdown',
				types: ['boolean'],
				description: 'Show the month dropdown list.'
			}, {
				name: 'showYearDropdown',
				types: ['boolean'],
				description: 'Show the year dropdown list.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the datepicker title.'
			}, {
				name: 'todayButton',
				types: ['boolean'],
				description: 'Show the today button.'
			}, {
				name: 'tooltipPosition',
				customTypes: [{
					name: 'CSTooltipPosition',
					types: [
						'\'bottom-right\'',
						'\'bottom-left\'',
						'\'top-right\'',
						'\'top-left\'',
						'\'top-center\'',
						'\'bottom-center\'',
						'\'right-top\'',
						'\'right-center\'',
						'\'right-bottom\'',
						'\'left-top\'',
						'\'left-center\'',
						'\'left-bottom\''
					]
				}],
				default: '\'top-right\'',
				description: 'Set the tooltip position for the datepicker.'
			}, {
				name: 'value',
				types: ['any'],
				description: 'Pass a value to the datepicker.'
			}, {
				name: 'width',
				types: ['string'],
				description: 'Set the datepicker input field width. (eg. 100%, 20rem, 400px, etc.)'
			}, {
				name: 'yearDropdownItemNumber',
				types: ['number'],
				description: 'Display a number of years before and after the current year in the year dropdown.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the datepicker.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'1.3.1',
					'1.4.1',
					'1.4.4',
					'2.1.1',
					'2.1.2',
					'2.1.4',
					'2.4.7',
					'2.5.3',
					'3.2.1',
					'3.2.2',
					'3.3.1',
					'3.3.2',
					'4.1.2'
				],
				requirements: [
					{
						structure: [
							'`<input type="text">` because type="date" creates browser default datepicker which interferes with custom datepicker',
							'Icon as a child element with `aria-hidden`'
						],
						properties: [
							'id - needed to connect label with form element. If there is no id, autogenerated unique id is set'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'Support to type date in field',
							'Dropdown closes when focused out with shift-tab',
							'`Left` - Move to the previous day.',
							'`Right` - Move to the next day.',
							'`Up` - Move to the previous week.',
							'`Down` - Move to the next week.',
							'`PgUp` - Move to the previous month.',
							'`PgDn` - Move to the next month.',
							'`Home` - Move to the previous year.',
							'`End` - Move to the next year.',
							'`Enter/Esc` - close the calendar'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getDatePickerDoc();

		return (
			<>
				<div className="preview-section-wrapper datepicker-preview">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSDatepickerPreview;
