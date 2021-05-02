import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import moment from 'moment';

import { CSDateTimePicker } from '@cloudsense/cs-ui-components';

class CSDateTimePickerPreview extends React.Component {
	value = moment('1.1.2020', 'DD-MM-YYYY').toDate();

	handleChange = () => alert('The date the has changed.');

	getDateTimePickerDoc = () => ({
		name: 'DateTimePicker',
		usage: 'A datetimepicker is a text input to capture a date. You can select a single date, date range or date and time.',
		accessible: 'yes',
		previews: [
			{
				name: 'CSDateTimePicker',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for datetimepicker. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" />,
								code: '<CSDateTimePicker label="Enter date" />'
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSDateTimePicker label="Enter date" autoFocus />,
								code: '<CSDateTimePicker label="Enter date" autoFocus />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSDateTimePicker label="Enter date" borderRadius="0" />,
								code: '<CSDateTimePicker label="Enter date" borderRadius="0" />'
							}
						]
					}, {
						propName: 'dateFormat',
						variations: [
							{
								primaryVariants: 'dateFormat="d MMMM, yyyy h:mm aa"',
								quickLink: 'd MMMM, yyyy h:mm aa',
								component: <CSDateTimePicker label="Enter date" dateFormat="d MMMM, yyyy h:mm aa" />,
								code: '<CSDateTimePicker label="Enter date" dateFormat="d MMMM, yyyy h:mm aa" />'
							}, {
								primaryVariants: 'dateFormat="MMMM d, yyyy h:mm aa"',
								quickLink: 'MMMM d, yyyy h:mm aa',
								component: <CSDateTimePicker label="Enter date" dateFormat="MMMM d, yyyy h:mm aa" />,
								code: '<CSDateTimePicker label="Enter date" dateFormat="MMMM d, yyyy h:mm aa" />'
							}, {
								primaryVariants: 'dateFormat="yyyy MMMM, d h:mm aa"',
								quickLink: 'yyyy MMMM, d h:mm aa',
								component: <CSDateTimePicker label="Enter date" dateFormat="yyyy MMMM, d h:mm aa" />,
								code: '<CSDateTimePicker label="Enter date" dateFormat="yyyy MMMM, d h:mm aa" />'
							}, {
								primaryVariants: ['dateFormat="yyyy d, MMMM h:mm aa"'],
								quickLink: 'yyyy d, MMMM h:mm aa',
								component: <CSDateTimePicker label="Enter date" dateFormat="yyyy d, MMMM h:mm aa" />,
								code: '<CSDateTimePicker label="Enter date" dateFormat="yyyy d, MMMM h:mm aa" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSDateTimePicker label="Enter date" disabled />,
								code: '<CSDateTimePicker label="Enter date" disabled />'
							}
						]
					}, {
						propName: 'dropdownMode',
						variations: [
							{
								primaryVariants: 'dropdownMode="scroll"',
								quickLink: 'scroll',
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
								/>`
							}, {
								primaryVariants: 'dropdownMode="select"',
								quickLink: 'select',
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
								/>,
								code: `<CSDateTimePicker
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
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSDateTimePicker label="Enter date" error />,
								code: '<CSDateTimePicker label="Enter date" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSDateTimePicker
									label="Enter date"
									error
									errorMessage="Error message."
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" helpText="Help text example" />,
								code: '<CSDateTimePicker label="Enter date" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'inline',
						variations: [
							{
								primaryVariants: 'inline={true}',
								component: <CSDateTimePicker label="Enter date" inline />,
								code: '<CSDateTimePicker label="Enter date" inline />'
							}
						]
					}, {
						propName: 'isClearable',
						variations: [
							{
								primaryVariants: 'isClearable={true}',
								component: <CSDateTimePicker label="Enter date" isClearable />,
								code: '<CSDateTimePicker label="Enter date" isClearable />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSDateTimePicker label="Enter date" labelHidden />,
								code: '<CSDateTimePicker label="Enter date" labelHidden />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSDateTimePicker label="Enter date" labelTitle />,
								code: '<CSDateTimePicker label="Enter date" labelTitle />'
							}
						]
					}, {
						propName: 'maxDate',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" maxDate={5} />,
								code: '<CSDateTimePicker label="Enter date" maxDate={5} />'
							}
						]
					}, {
						propName: 'maxDateYear',
						variations: [
							{
								primaryVariants: 'maxDateYear={true}',
								component: <CSDateTimePicker
									label="Enter date"
									maxDate={1}
									maxDateYear
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker label="Enter date" minDate={10} />,
								code: '<CSDateTimePicker label="Enter date" minDate={10} />'
							}
						]
					}, {
						propName: 'minDateYear',
						variations: [
							{
								primaryVariants: 'minDateYear={true}',
								component: <CSDateTimePicker
									label="Enter date"
									minDate={1}
									minDateYear
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker label="Enter date" name="datepicker" />,
								code: '<CSDateTimePicker label="Enter date" name="datepicker" />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" onChange={this.handleChange} />,
								code: '<CSDateTimePicker label="Enter date" onChange={this.handleChange} />'

							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" placeholder="Placeholder text" />,
								code: '<CSDateTimePicker label="Enter date" placeholder="Placeholder text" />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSDateTimePicker
									label="Enter date"
									value={this.value}
									readOnly
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker label="Enter date" required />,
								code: '<CSDateTimePicker label="Enter date" required />'
							}
						]
					}, {
						propName: 'scrollableYearDropdown',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker label="Enter date" showMonthDropdown />,
								code: '<CSDateTimePicker label="Enter date" showMonthDropdown />'
							}
						]
					}, {
						propName: 'showYearDropdown',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" showYearDropdown />,
								code: '<CSDateTimePicker label="Enter date" showYearDropdown />'
							}
						]
					}, {
						propName: 'timeCaption',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" timeCaption="Tick Tock" />,
								code: '<CSDateTimePicker label="Enter date" timeCaption="Tick Tock" />'
							}
						]
					}, {
						propName: 'timeFormat',
						variations: [
							{
								primaryVariants: 'timeFormat="HH:mm"',
								quickLink: 'HH:mm',
								component: <CSDateTimePicker label="Enter date" timeFormat="HH:mm" />,
								code: '<CSDateTimePicker label="Enter date" timeFormat="HH:mm" />'
							}, {
								primaryVariants: 'timeFormat="HH:mm:ss"',
								quickLink: 'HH:mm:ss',
								component: <CSDateTimePicker label="Enter date" timeFormat="HH:mm:ss" />,
								code: '<CSDateTimePicker label="Enter date" timeFormat="HH:mm:ss" />'
							}, {
								primaryVariants: 'timeFormat="yyyy-MM"',
								quickLink: 'yyyy-MM',
								component: <CSDateTimePicker label="Enter date" timeFormat="yyyy-MM" />,
								code: '<CSDateTimePicker label="Enter date" timeFormat="yyyy-MM" />'
							}, {
								primaryVariants: 'timeFormat="yyyy-MM-dd"',
								quickLink: 'yyyy-MM-dd',
								component: <CSDateTimePicker label="Enter date" timeFormat="yyyy-MM-dd" />,
								code: '<CSDateTimePicker label="Enter date" timeFormat="yyyy-MM-dd" />'
							}
						]
					}, {
						propName: 'timeIntervals',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" timeIntervals={60} />,
								code: '<CSDateTimePicker label="Enter date" timeIntervals={60} />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" title="This is a title" />,
								code: '<CSDateTimePicker label="Enter date" title="This is a title" />'

							}
						]
					}, {
						propName: 'todayButton',
						variations: [
							{
								primaryVariants: 'todayButton={true}',
								component: <CSDateTimePicker label="Enter date" todayButton />,
								code: '<CSDateTimePicker label="Enter date" todayButton />'
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
								component: <CSDateTimePicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSDateTimePicker label="Enter date" value={this.value} />,
								code: '<CSDateTimePicker label="Enter date" value={this.value} />'
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="100%"',
								quickLink: '100%',
								component: <CSDateTimePicker label="Enter date" width="100%" />,
								code: '<CSDateTimePicker label="Enter date" width="100%" />'
							}, {
								primaryVariants: 'width="30rem"',
								quickLink: '30rem',
								component: <CSDateTimePicker label="Enter date" width="30rem" />,
								code: '<CSDateTimePicker label="Enter date" width="30rem" />'
							}, {
								primaryVariants: 'width="400px"',
								quickLink: '400px',
								component: <CSDateTimePicker label="Enter date" width="400px" />,
								code: '<CSDateTimePicker label="Enter date" width="400px" />'
							}
						]
					}, {
						propName: 'yearDropdownItemNumber',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={15}
								/>,
								code: `<CSDateTimePicker
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
									'class="custom-class"'
								],
								component: <CSDateTimePicker
									label="Enter date"
									id="custom-id"
									className="custom-class"

								/>,
								code: `<CSDateTimePicker
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
				name: 'autoFocus',
				types: ['boolean'],
				default: 'false',
				description: 'Focuses the datetimepicker by default.'
			}, {
				name: 'borderRadius',
				types: ['string'],
				default: '\'0.25rem\'',
				description: 'Set a border radius style.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the datetimepicker.'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'Disable the datetimepicker.'
			}, {
				name: 'dateFormat',
				types: ['string'],
				default: '\'MMMM d, yyyy h:mm aa\'',
				description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
			}, {
				name: 'dropdownMode',
				customTypes: [{
					name: 'CSDatepickerDropdownMode',
					types: ['\'scroll\'', '\'select\'']
				}],
				default: '\'scroll\'',
				description: 'Set the type of year and month dropdown.'
			}, {
				name: 'timeFormat',
				types: ['string'],
				description: 'Set the date format for various locales. (eg. HH:mm, HH:mm:ss, yyyy-MM, yyyy-MM:dd, etc.)'
			}, {
				name: 'timeIntervals',
				types: ['number'],
				description: 'Set the interval between each time value. (eg. 15, 20, 30, 60, etc.)'
			}, {
				name: 'timeCaption',
				types: ['string'],
				description: 'Set the title for the time column.'
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
				description: 'Set the error message or messages for the datetimepicker.'
			}, {
				name: 'helpText',
				types: ['string'],
				description: 'Set the text to be displayed in the tooltip.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the datetimepicker.'
			}, {
				name: 'inline',
				types: ['boolean'],
				default: 'false',
				description: 'Display the popup inline with content'
			}, {
				name: 'isClearable',
				types: ['boolean'],
				description: 'Show or hide the clear button.'
			}, {
				name: 'label',
				required: true,
				types: ['string'],
				description: 'Set the datetimepicker label.'
			}, {
				name: 'labelHidden',
				types: ['boolean'],
				default: 'false',
				description: 'Hide the datetimepicker label.'
			}, {
				name: 'labelTitle',
				types: ['boolean'],
				description: 'Control whether to set the title attribute.'
			}, {
				name: 'locale',
				types: ['any'],
				description: 'Set the datetimepicker locale.'
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
				name: 'onChange',
				types: ['(event) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'placeholder',
				types: ['string'],
				description: 'Set a datetimepicker placeholder.'
			}, {
				name: 'readOnly',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether to apply the readonly attribute.'
			}, {
				name: 'required',
				types: ['boolean'],
				default: 'false',
				description: 'Make the datetimepicker required.'
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
				description: 'Set the datetimepicker title.'
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
				description: 'Set the tooltip position for the datetimepicker.'
			}, {
				name: 'value',
				types: ['any'],
				description: 'Pass a value to the datetimepicker.'
			}, {
				name: 'width',
				types: ['string'],
				description: 'Set the datetimepicker input field width. (eg. 100%, 20rem, 400px, etc.)'
			}, {
				name: 'yearDropdownItemNumber',
				types: ['number'],
				description: 'Display a number of years before and after the current year in the year dropdown.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the datetimepicker.'
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
							'`<input type="text">` - because type="date" creates browser default datepicker which interferes with custom datepicker',
							'Icon as a child element with `aria-hidden`'
						],
						properties: [
							'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'Support to type date in field',
							'Dropdown closes when focused out with `Shift + Tab`',
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
		const component = this.getDateTimePickerDoc();

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

export default CSDateTimePickerPreview;
