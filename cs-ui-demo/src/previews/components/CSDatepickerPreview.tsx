import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import moment from 'moment';

import { CSDatepicker } from '@cloudsense/cs-ui-components';

class CSDatepickerPreview extends React.Component {
	value = moment('1.1.2020', 'DD-MM-YYYY').toDate();

	handleCloseCalendar = () =>	alert('Calendar has been closed.');
	handleChange = () => alert('Date has changed.');
	handleChangeRaw = () =>	alert('Date has changed from raw value.');

	getDoc() {
		const json = {
			name: 'Datepicker',
			usage: 'A datepicker is a text input to capture a date. You can select a single date, date range or date and time.',
			accessible: 'partially',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" value={this.value} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" />
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" labelHidden />
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" id="value" />
						}
					]
				},
				{
					propName: 'isClearable',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" isClearable />
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" name="datepicker" />
						}
					]
				},
				{
					propName: 'todayButton',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" todayButton />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" disabled />
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" value={this.value} readOnly />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker required label="Enter date:" />
						}
					]
				},
				{
					propName: 'error',
					alert: {
						variant: 'info',
						text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSDatepicker label="Enter date:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'showYearDropdown',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" showYearDropdown />
						}
					]
				},
				{
					propName: 'showMonthDropdown',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" showMonthDropdown />
						}
					]
				},
				{
					propName: 'scrollableYearDropdown',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" scrollableYearDropdown showYearDropdown />
						}
					]
				},
				{
					propName: 'dropdownMode',
					variations: [
						{
							variationName: ['scroll'],
							quickLink: 'scroll',
							component:
								<CSDatepicker
									label="Enter date:"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
								/>
						},
						{
							variationName: ['select'],
							quickLink: 'select',
							component:
								<CSDatepicker
									label="Enter date:"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
								/>
						}
					]
				},
				{
					propName: 'yearDropdownItemNumber',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" showYearDropdown scrollableYearDropdown yearDropdownItemNumber={15} />
						}
					]
				},
				{
					propName: 'minDate',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" minDate={10} />
						}
					]
				},
				{
					propName: 'maxDate',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" maxDate={5} />
						}
					]
				},
				{
					propName: 'minDateYear',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" minDate={1} minDateYear />
						}
					]
				},
				{
					propName: 'maxDateYear',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSDatepicker label="Enter date:" maxDate={1} maxDateYear />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['round'],
							quickLink: 'round',
							component:
								<CSDatepicker label="Enter date:" borderType="round" />
						},
						{
							variationName: ['square'],
							quickLink: 'square',
							component:
								<CSDatepicker label="Enter date:" borderType="square" />
						}
					]
				},
				{
					propName: 'dateFormat',
					variations: [
						{
							variationName: ['dd-MM-yyyy'],
							quickLink: 'dd-MM-yyyy',
							component:
								<CSDatepicker label="Enter date:" dateFormat="dd-MM-yyyy" />
						},
						{
							variationName: ['MM-dd-yyyy'],
							quickLink: 'MM-dd-yyyy',
							component:
								<CSDatepicker label="Enter date:" dateFormat="MM-dd-yyyy" />
						},
						{
							variationName: ['yyyy-MM-dd'],
							quickLink: 'yyyy-MM-dd',
							component:
								<CSDatepicker label="Enter date:" dateFormat="yyyy-MM-dd" />
						},
						{
							variationName: ['yyyy-dd-MM'],
							quickLink: 'yyyy-dd-MM',
							component:
								<CSDatepicker label="Enter date:" dateFormat="yyyy-dd-MM" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSDatepicker label="Enter date:" width="100%" />
						},
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							component:
								<CSDatepicker label="Enter date:" width="20rem" />
						},
						{
							variationName: ['400px'],
							quickLink: '400px',
							component:
								<CSDatepicker label="Enter date:" width="400px" />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" title="This is a title" />

						}
					]
				},
				{
					propName: 'openToDate',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" openToDate={new Date('12-20-1992')}/>

						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" onChange={this.handleChange}/>

						}
					]
				},
				{
					propName: 'onChangeRaw',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" onChangeRaw={this.handleChangeRaw}/>
						}
					]
				},
				{
					propName: 'onCalendarClose',
					variations: [
						{
							component:
								<CSDatepicker label="Enter date:" onCalendarClose={this.handleCloseCalendar}/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSDatepicker label="Enter date:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'borderType',
					types: ['string'],
					description: 'Set the border type.'
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
					description: 'Set the help text to be displayed for the datepicker.'
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
								'HTML <input type="text">',
								'Icon as a child element with aria-hidden'
							],
							properties: [
								'aria-labelledby - associate field with label'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Logic for keyboard operability inside date picker',
								'Providing to type date in field is sufficient, without making the datepicker body accessible. In that case provide date format in title attribute'
							]
						}
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper datepicker-preview">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSDatepickerPreview;
