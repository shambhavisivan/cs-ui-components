import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import moment from 'moment';

import { CSDateTimePicker } from '@cloudsense/cs-ui-components';

class CSDateTimePickerPreview extends React.Component {
	value = moment('1.1.2020', 'DD-MM-YYYY').toDate();

	handleChange() {
		alert('Date changed!');
	}

	getDoc() {
		const json = {
			name: 'DateTimePicker',
			usage: 'A datetimepicker is a text input to capture a date. You can select a single date, date range or date and time.',
			accessible: 'partially',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" value={this.value} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" />
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
								<CSDateTimePicker label="Enter date:" labelHidden />
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
								<CSDateTimePicker label="Enter date:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							component:
								<CSDateTimePicker label="Enter date:" placeholder="Placeholder text" tooltipPosition="top-right" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" id="value" />
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
								<CSDateTimePicker label="Enter date:" isClearable />
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" name="datepicker" />
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
								<CSDateTimePicker label="Enter date:" todayButton />
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
								<CSDateTimePicker label="Enter date:" disabled />
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
								<CSDateTimePicker label="Enter date:" value={this.value} readOnly />
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
								<CSDateTimePicker required label="Enter date:" />
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
								<CSDateTimePicker label="Enter date:" error />
						}
					]
				},
				{
					propName: 'showYearDropdown',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" showYearDropdown />
						}
					]
				},
				{
					propName: 'showMonthDropdown',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" showMonthDropdown />
						}
					]
				},
				{
					propName: 'scrollableYearDropdown',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" scrollableYearDropdown showYearDropdown />
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
								<CSDateTimePicker
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
								<CSDateTimePicker
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
								<CSDateTimePicker label="Enter date:" showYearDropdown scrollableYearDropdown yearDropdownItemNumber={15} />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSDateTimePicker label="Enter date:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'minDate',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" minDate={10} />
						}
					]
				},
				{
					propName: 'maxDate',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" maxDate={5} />
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
								<CSDateTimePicker label="Enter date:" minDate={1} minDateYear />
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
								<CSDateTimePicker label="Enter date:" maxDate={1} maxDateYear />
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
								<CSDateTimePicker label="Enter date:" borderType="round" />
						},
						{
							variationName: ['square'],
							quickLink: 'square',
							component:
								<CSDateTimePicker label="Enter date:" borderType="square" />
						}
					]
				},
				{
					propName: 'dateFormat',
					variations: [
						{
							variationName: ['d MMMM, yyyy h:mm aa'],
							quickLink: 'd MMMM, yyyy h:mm aa',
							component:
								<CSDateTimePicker label="Enter date:" dateFormat="d MMMM, yyyy h:mm aa" />
						},
						{
							variationName: ['MMMM d, yyyy h:mm aa'],
							quickLink: 'MMMM d, yyyy h:mm aa',
							component:
								<CSDateTimePicker label="Enter date:" dateFormat="MMMM d, yyyy h:mm aa" />
						},
						{
							variationName: ['yyyy MMMM, d h:mm aa'],
							quickLink: 'yyyy MMMM, d h:mm aa',
							component:
								<CSDateTimePicker label="Enter date:" dateFormat="yyyy MMMM, d h:mm aa" />
						},
						{
							variationName: ['yyyy d, MMMM h:mm aa'],
							quickLink: 'yyyy d, MMMM h:mm aa',
							component:
								<CSDateTimePicker label="Enter date:" dateFormat="yyyy d, MMMM h:mm aa" />
						}
					]
				},
				{
					propName: 'timeFormat',
					variations: [
						{
							variationName: ['HH:mm'],
							quickLink: 'HH:mm',
							component:
								<CSDateTimePicker label="Enter date:" timeFormat="HH:mm" />
						},
						{
							variationName: ['HH:mm:ss'],
							quickLink: 'HH:mm:ss',
							component:
								<CSDateTimePicker label="Enter date:" timeFormat="HH:mm:ss" />
						},
						{
							variationName: ['yyyy-MM'],
							quickLink: 'yyyy-MM',
							component:
								<CSDateTimePicker label="Enter date:" timeFormat="yyyy-MM" />
						},
						{
							variationName: ['yyyy-MM-dd'],
							quickLink: 'yyyy-MM-dd',
							component:
								<CSDateTimePicker label="Enter date:" timeFormat="yyyy-MM-dd" />
						}
					]
				},
				{
					propName: 'timeIntervals',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" timeIntervals={60} />
						}
					]
				},
				{
					propName: 'timeCaption',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" timeCaption="Tick Tock" />
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
								<CSDateTimePicker label="Enter date:" width="100%" />
						},
						{
							variationName: ['30rem'],
							quickLink: '30rem',
							component:
								<CSDateTimePicker label="Enter date:" width="30rem" />
						},
						{
							variationName: ['400px'],
							quickLink: '400px',
							component:
								<CSDateTimePicker label="Enter date:" width="400px" />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" title="This is a title" />

						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSDateTimePicker label="Enter date:" onChange={this.handleChange} />

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
								<CSDateTimePicker label="Enter date:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSDatepickerBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set the border type.'
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
								'HTML `<input type="date">`',
								'Icon as a child element with `aria-hidden`'
							],
							properties: [
								'`aria-labelledby` - associate field with label'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Logic for keyboard operability inside date picker',
								'Providing to type date in field is sufficient, without making the datepicker body accessible. In that case provide date format in `title` attribute'
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

export default CSDateTimePickerPreview;
