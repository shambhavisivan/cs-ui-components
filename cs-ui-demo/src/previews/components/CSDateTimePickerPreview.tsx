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
					propertyName: 'borderType',
					description: 'Datepicker border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'dateFormat',
					description: 'Format of datepicker for various countries',
					options: [
						'dd-MM-yyyy',
						'MM-dd-yyyy',
						'yyyy-MM-dd',
						'yyyy-dd-MM'
					]
				},
				{
					propertyName: 'dropdownMode',
					description: 'Defines type of year and month dropdown',
					options: [
						'scroll',
						'select'
					]
				},
				{
					propertyName: 'timeFormat',
					description: 'Format of datepicker time for various countries',
					options: [
						'HH:mm',
						'HH:mm:ss',
						'yyyy-MM',
						'yyyy-MM:dd'
					]
				},
				{
					propertyName: 'timeIntervals',
					description: 'Time between each time value',
					options: [
						'15',
						'30',
						'60'
					]
				},
				{
					propertyName: 'timeCaption',
					description: 'Title for times column'
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error message text'
				},
				{
					propertyName: 'helpText',
					description: 'Datepicker help text for tooltip display'
				},
				{
					propertyName: 'id',
					description: 'Datepicker number id value'
				},
				{
					propertyName: 'isClearable',
					description: 'Logic for clear button visibility'
				},
				{
					propertyName: 'label',
					description: 'Datepicker label text to display'
				},
				{
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'labelTitle',
					description: 'Logic for label title attribute',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'locale',
					description: 'Datepicker locale'
				},
				{
					propertyName: 'maxDate',
					description: 'Datepicker number maximum date in days from today'
				},
				{
					propertyName: 'maxDateYear',
					description: 'Logic to change maxDate format to years from days',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'minDate',
					description: 'Datepicker number minimum date in days from today'
				},
				{
					propertyName: 'minDateYear',
					description: 'Logic to change minDate format to years from days',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'name',
					description: 'Input name. In a HTML form, only form elements with a name attribute will have their values passed when submitting a form.'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'placeholder',
					description: 'Datepicker placeholder to display'
				},
				{
					propertyName: 'readOnly',
					description: 'Logic for read only state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Logic for today button state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'scrollableYearDropdown',
					description: 'Sets year dropdown to fixed height and adds scrollbar',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'showMonthDropdown',
					description: 'Shows months dropdown list',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'showYearDropdown',
					description: 'Shows years dropdown list',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'title',
					description: 'Title to display'
				},
				{
					propertyName: 'todayButton',
					description: 'Logic for today button',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Datepicker tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'value',
					description: 'Datepicker value to display'
				},
				{
					propertyName: 'width',
					description: 'Datepicker input field width',
					options: [
						'e.g.',
						'100%',
						'20rem',
						'400px'
					]
				},
				{
					propertyName: 'yearDropdownItemNumber',
					description: 'Displays defined number of years before and after the current year in year dropdown'
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
								'HTML <input type="date">',
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

export default CSDateTimePickerPreview;
