import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';
import moment from 'moment';

import {CSDatepicker} from '@cloudsense/cs-ui-components';

class CSDatepickerPreview extends React.Component {
	value = moment('1.1.2020', 'DD-MM-YYYY').toDate();
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
							string: '',
							component:
								<CSDatepicker label="Enter date:" value={this.value} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
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
							string: '',
							component:
								<CSDatepicker label="Enter date:" labelHidden/>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" labelTitle/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" helpText="Help text example"/>
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" placeholder="Placeholder text"/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" id="value"/>
						}
					]
				},
				{
					propName: 'isClearable',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" isClearable/>
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" name="datepicker"/>
						}
					]
				},
				{
					propName: 'todayButton',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" todayButton/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" disabled/>
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" value={this.value} readOnly/>
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker required label="Enter date:"/>
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
							string: '',
							component:
								<CSDatepicker label="Enter date:" error/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							string: '',
							component:
								<CSDatepicker label="Enter date:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'showYearDropdown',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" showYearDropdown />
						}
					]
				},
				{
					propName: 'showMonthDropdown',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:"  showMonthDropdown/>
						}
					]
				},
				{
					propName: 'scrollableYearDropdown',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" scrollableYearDropdown showYearDropdown/>
						}
					]
				},
				{
					propName: 'dropdownMode',
					variations: [
						{
							variationName: ['scroll'],
							quickLink: 'scroll',
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSDatepicker label="Enter date:" showYearDropdown scrollableYearDropdown yearDropdownItemNumber={15} />
						}
					]
				},
				{
					propName: 'minDate',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" minDate={10}/>
						}
					]
				},
				{
					propName: 'maxDate',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" maxDate={5}/>
						}
					]
				},
				{
					propName: 'minDateYear',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" minDate={1} minDateYear/>
						}
					]
				},
				{
					propName: 'maxDateYear',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSDatepicker label="Enter date:" maxDate={1} maxDateYear/>
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['round'],
							quickLink: 'round',
							string: '',
							component:
								<CSDatepicker label="Enter date:" borderType="round"/>
						},
						{
							variationName: ['square'],
							quickLink: 'square',
							string: '',
							component:
								<CSDatepicker label="Enter date:" borderType="square"/>
						}
					]
				},
				{
					propName: 'dateFormat',
					variations: [
						{
							variationName: ['dd-MM-yyyy'],
							quickLink: 'dd-MM-yyyy',
							string: '',
							component:
								<CSDatepicker label="Enter date:" dateFormat="dd-MM-yyyy"/>
						},
						{
							variationName: ['MM-dd-yyyy'],
							quickLink: 'MM-dd-yyyy',
							string: '',
							component:
								<CSDatepicker label="Enter date:" dateFormat="MM-dd-yyyy"/>
						},
						{
							variationName: ['yyyy-MM-dd'],
							quickLink: 'yyyy-MM-dd',
							string: '',
							component:
								<CSDatepicker label="Enter date:" dateFormat="yyyy-MM-dd"/>
						},
						{
							variationName: ['yyyy-dd-MM'],
							quickLink: 'yyyy-dd-MM',
							string: '',
							component:
								<CSDatepicker label="Enter date:" dateFormat="yyyy-dd-MM"/>
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['100%'],
							quickLink: '100%',
							string: '',
							component:
								<CSDatepicker label="Enter date:" width="100%"/>
						},
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							string: '',
							component:
								<CSDatepicker label="Enter date:" width="20rem"/>
						},
						{
							variationName: ['400px'],
							quickLink: '400px',
							string: '',
							component:
								<CSDatepicker label="Enter date:" width="400px"/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							string: '',
							component:
								<CSDatepicker label="Enter date:" title="This is a title"/>

						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSDatepicker label="Enter date:" className="custom-class"/>
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
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
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
					<PreviewProperties name={component.name} examples={component.examples}/>
					<PreviewTable components={[component]}/>
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component}/>
				</div>
			</>
		);
	}
}

export default CSDatepickerPreview;
