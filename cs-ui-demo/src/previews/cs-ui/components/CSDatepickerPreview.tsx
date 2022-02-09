import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { actions, actionsCode } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

interface CSDatepickerPreviewState {
	[key: string]: Date;
}

class CSDatepickerPreview extends React.Component<{}, CSDatepickerPreviewState> {
	stateSuffix: string = '';
	state = {
		[`date${this.stateSuffix}`]: new Date(),
		dateReadOnly: new Date(),
		dateSelected: new Date()
	};

	handleCloseCalendar = () => alert('Calendar has been closed.');
	handleChange = (date: Date) => {
		alert('Date has changed.');
		this.setDate(date, 'OnChange');
	}
	handleChangeRaw = () => alert('Date has changed from raw value.');
	handleKeyDown = () => alert('Key has been pressed.');
	handleClick = () => alert('Datepicker input has been clicked.');
	handleSelect = (date: Date) => {
		alert('Date has been selected.');
		this.setDate(date, 'OnSelect');
	}
	handleBlur = () => alert('Datepicker has lost focus.');
	setDate = (date: Date, stateSuffix: string) => {
		this.stateSuffix = stateSuffix;
		this.setState({
			[`date${stateSuffix}`]: date
		});
	}

	getDoc = () => ({
		name: 'Datepicker',
		usage: 'A datepicker is a text input to capture a date. You can select a single date, date range or date and time.',
		accessible: 'yes',
		components: [
			{
				name: 'CSDatepicker',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for datepicker. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateLabel}
									onChange={(date: Date) => this.setDate(date, 'Label')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateOnChange}
									onChange={this.handleChange}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChange={this.handleChange}
								/>`
							}
						]
					}, {
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={actions}'
								],
								component: <CSDatepicker
									actions={actions}
									label="Enter date"
									selected={this.state.dateActions}
									onChange={(date: Date) => this.setDate(date, 'Actions')}
									width="30rem"
								/>,
								code: `<CSDatepicker
									actions={${actionsCode}}
									label="Enter date"
									selected={this.state.dateActions}
									onChange={(date: Date) => this.setDate(date, 'Actions')}
									width="30rem"
								/>`
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSDatepicker
									label="Enter date"
									autoFocus
									selected={this.state.dateAutoFocus}
									onChange={(date: Date) => this.setDate(date, 'AutoFocus')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									autoFocus
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSDatepicker
									label="Enter date"
									borderRadius="0"
									selected={this.state.dateBorderRadius}
									onChange={(date: Date) => this.setDate(date, 'BorderRadius')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									borderRadius="0"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'dateFormat',
						variations: [
							{
								primaryVariants: 'dateFormat="dd-MM-yyyy"',
								quickLink: 'dd-MM-yyyy',
								component: <CSDatepicker
									label="Enter date"
									dateFormat="dd-MM-yyyy"
									selected={this.state.dateDateFormat1}
									onChange={(date: Date) => this.setDate(date, 'DateFormat1')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									dateFormat="dd-MM-yyyy"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="MM-dd-yyyy"',
								quickLink: 'MM-dd-yyyy',
								component: <CSDatepicker
									label="Enter date"
									dateFormat="MM-dd-yyyy"
									selected={this.state.dateDateFormat2}
									onChange={(date: Date) => this.setDate(date, 'DateFormat2')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									dateFormat="MM-dd-yyyy"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="yyyy-MM-dd"',
								quickLink: 'yyyy-MM-dd',
								component: <CSDatepicker
									label="Enter date"
									dateFormat="yyyy-MM-dd"
									selected={this.state.dateDateFormat3}
									onChange={(date: Date) => this.setDate(date, 'DateFormat3')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									dateFormat="yyyy-MM-dd"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="yyyy-dd-MM"',
								quickLink: 'yyyy-dd-MM',
								component: <CSDatepicker
									label="Enter date"
									dateFormat="yyyy-dd-MM"
									selected={this.state.dateDateFormat4}
									onChange={(date: Date) => this.setDate(date, 'DateFormat4')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									dateFormat="yyyy-dd-MM"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSDatepicker
									label="Enter date"
									disabled
									selected={this.state.dateDisabled}
									onChange={(date: Date) => this.setDate(date, 'Disabled')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									disabled
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'dropdownMode',
						variations: [
							{
								primaryVariants: 'dropdownMode="scroll"',
								quickLink: 'scroll',
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
									selected={this.state.dateDropdownMode1}
									onChange={(date: Date) => this.setDate(date, 'DropdownMode1')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dropdownMode="select"',
								quickLink: 'select',
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
									selected={this.state.dateDropdownMode2}
									onChange={(date: Date) => this.setDate(date, 'DropdownMode2')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
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
								component: <CSDatepicker
									label="Enter date"
									error
									selected={this.state.dateError}
									onChange={(date: Date) => this.setDate(date, 'Error')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									error
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: ['error={true}'],
								component: <CSDatepicker
									label="Enter date"
									error
									errorMessage="Error message."
									selected={this.state.dateErrorMsg}
									onChange={(date: Date) => this.setDate(date, 'ErrorMsg')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									error
									errorMessage="Error message."
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateErrorMsg}
									onChange={(date: Date) => this.setDate(date, 'ErrorMsg')}
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSDatepicker
									label="Enter date"
									error
									errorMessage="Error message."
									errorTooltip
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									helpText="Help text example"
									selected={this.state.dateHelpText}
									onChange={(date: Date) => this.setDate(date, 'HelpText')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									helpText="Help text example"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={icons}'
								],
								component: <CSDatepicker
									icons={icons}
									label="Enter date"
									selected={this.state.dateIcons}
									onChange={(date: Date) => this.setDate(date, 'Icons')}
									width="30rem"
								/>,
								code: `<CSDatepicker
									icons={${iconsCode}}
									label="Enter date"
									selected={this.state.dateIcons}
									onChange={(date: Date) => this.setDate(date, 'Icons')}
									width="30rem"
								/>`
							}
						]
					}, {
						propName: 'inline',
						variations: [
							{
								primaryVariants: 'inline={true}',
								component: <CSDatepicker
									label="Enter date"
									inline
									selected={this.state.dateInline}
									onChange={(date: Date) => this.setDate(date, 'Inline')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									inline
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'isClearable',
						variations: [
							{
								primaryVariants: 'isClearable={true}',
								component: <CSDatepicker
									label="Enter date"
									isClearable
									selected={this.state.dateIsClearable}
									onChange={(date: Date) => this.setDate(date, 'IsClearable')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									isClearable
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSDatepicker
									label="Enter date"
									labelHidden
									selected={this.state.dateLabelHidden}
									onChange={(date: Date) => this.setDate(date, 'LabelHidden')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									labelHidden
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSDatepicker
									label="Enter date"
									labelTitle
									selected={this.state.dateLabelTitle}
									onChange={(date: Date) => this.setDate(date, 'LabelTitle')}

								/>,
								code: `<CSDatepicker
									label="Enter date"
									labelTitle
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'maxDate',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									maxDate={5}
									selected={this.state.dateMaxDate}
									onChange={(date: Date) => this.setDate(date, 'MaxDate')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									maxDate={5}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
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
									selected={this.state.dateMaxDateYear}
									onChange={(date: Date) => this.setDate(date, 'MaxDateYear')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									maxDate={1}
									maxDateYear
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'minDate',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									minDate={10}
									selected={this.state.dateMinDate}
									onChange={(date: Date) => this.setDate(date, 'MinDate')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									minDate={10}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
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
									selected={this.state.dateMinDateYear}
									onChange={(date: Date) => this.setDate(date, 'MinDateYear')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									minDate={1}
									minDateYear
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									name="datepicker"
									selected={this.state.dateName}
									onChange={(date: Date) => this.setDate(date, 'Name')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									name="datepicker"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									onBlur={this.handleBlur}
									selected={this.state.dateOnBlur}
									onChange={(date: Date) => this.setDate(date, 'OnBlur')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									onBlur={this.handleBlur}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onCalendarClose',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									onCalendarClose={this.handleCloseCalendar}
									selected={this.state.dateOnCalendarClose}
									onChange={(date: Date) => this.setDate(date, 'OnCalendarClose')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									onCalendarClose={this.handleCloseCalendar}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onChangeRaw',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateOnChangeRaw}
									onChangeRaw={this.handleChangeRaw}
									onChange={(date: Date) => this.setDate(date, 'OnChangeRaw')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChangeRaw={this.handleChangeRaw}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateOnClick}
									onChange={(date: Date) => this.setDate(date, 'OnClick')}
									onClick={this.handleClick}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
									onClick={this.handleClick}
								/>`
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateOnKeyDown}
									onChange={(date: Date) => this.setDate(date, 'OnKeyDown')}
									onKeyDown={this.handleKeyDown}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
									onKeyDown={this.handleKeyDown}
								/>`
							}
						]
					}, {
						propName: 'onSelect',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateOnSelect}
									onSelect={this.handleSelect}
									onChange={() => ({})}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onSelect={this.handleSelect}
									onChange={() => ({})}
								/>`
							}
						]
					}, {
						propName: 'openToDate',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									openToDate={new Date('1992-12-20')}
									selected={this.state.dateOpenToDate}
									onChange={(date: Date) => this.setDate(date, 'OpenToDate')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									openToDate={new Date('1992-12-20')}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									placeholder="Placeholder text"
									selected={this.state.datePlaceholder}
									onChange={(date: Date) => this.setDate(date, 'Placeholder')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									placeholder="Placeholder text"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSDatepicker
									label="Enter date"
									readOnly
									selected={this.state.dateReadOnly}
									onChange={(date: Date) => this.setDate(date, 'ReadOnly')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									readOnly
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSDatepicker
									label="Enter date"
									required
									selected={this.state.dateRequired}
									onChange={(date: Date) => this.setDate(date, 'Required')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									required
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
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
									selected={this.state.dateScrollableYearDropdown}
									onChange={(date: Date) => this.setDate(date, 'ScrollableYearDropdown')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'selected',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									selected={this.state.dateSelected}
									onChange={(date: Date) => this.setDate(date, 'Selected')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'showMonthDropdown',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									showMonthDropdown
									selected={this.state.dateShowMonthDropdown}
									onChange={(date: Date) => this.setDate(date, 'ShowMonthDropdown')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showMonthDropdown
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'showYearDropdown',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									showYearDropdown
									selected={this.state.dateShowYearDropdown}
									onChange={(date: Date) => this.setDate(date, 'ShowYearDropdown')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSDatepicker
									label="Enter date"
									title="This is a title"
									selected={this.state.dateTitle}
									onChange={(date: Date) => this.setDate(date, 'Title')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									title="This is a title"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`

							}
						]
					}, {
						propName: 'todayButton',
						variations: [
							{
								primaryVariants: 'todayButton="text"',
								component: <CSDatepicker
									label="Enter date"
									todayButton="Today"
									selected={this.state.dateTodayButton}
									onChange={(date: Date) => this.setDate(date, 'TodayButton')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									todayButton="Today"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
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
								secondaryVariants: ['helpText="text"'],
								component: <CSDatepicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
									selected={this.state.dateTooltipPosition}
									onChange={(date: Date) => this.setDate(date, 'TooltipPosition')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								primaryVariants: 'value="1-1-2021"',
								component: <CSDatepicker
									label="Enter date"
									value="1-1-2021"
									selected={this.state.dateValue}
									onChange={(date: Date) => this.setDate(date, 'Value')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									value="1-1-2021"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="100%"',
								quickLink: '100%',
								component: <CSDatepicker
									label="Enter date"
									width="100%"
									selected={this.state.dateWidth1}
									onChange={(date: Date) => this.setDate(date, 'Width1')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									width="100%"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'width="20rem"',
								quickLink: '20rem',
								component: <CSDatepicker
									label="Enter date"
									width="20rem"
									selected={this.state.dateWidth2}
									onChange={(date: Date) => this.setDate(date, 'Width2')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									width="20rem"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'width="400px"',
								quickLink: '400px',
								component: <CSDatepicker
									label="Enter date"
									width="400px"
									selected={this.state.dateWidth3}
									onChange={(date: Date) => this.setDate(date, 'Width3')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									width="400px"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
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
									selected={this.state.dateYearDropdownItemNumber}
									onChange={(date: Date) => this.setDate(date, 'YearDropdownItemNumber')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={15}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
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
									className="custom-br-mint"
									selected={this.state.dateIdClass}
									onChange={(date: Date) => this.setDate(date, 'IdClass')}
								/>,
								code: `<CSDatepicker
									label="Enter date"
									id="custom-id"
									className="custom-br-mint"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
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
						description: 'Set the datepicker label.'
					}, {
						name: 'onChange',
						required: true,
						types: '(Date) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSDatepickerActionsProps',
							types: 'Array<CSDatepickerActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'autoFocus',
						types: 'boolean',
						default: 'false',
						description: 'Focuses the datepicker by default.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'dateFormat',
						types: 'string',
						default: `'dd-MM-yyyy'`,
						description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the datepicker.'
					}, {
						name: 'dropdownMode',
						customTypes: {
							name: 'CSDatepickerDropdownMode',
							types: [`'scroll'`, `'select'`]
						},
						default: `'scroll'`,
						description: 'Set the type of year and month dropdown.'
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
						description: 'Set the error message or messages for the datepicker.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the datepicker.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSDatepickerIconProps',
							types: 'Array<CSDatepickerIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'inline',
						types: 'boolean',
						default: 'false',
						description: 'Display the popup inline with content'
					}, {
						name: 'isClearable',
						types: 'boolean',
						description: 'Show or hide the clear button.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the datepicker label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'locale',
						types: 'any',
						description: 'Set the datepicker locale.'
					}, {
						name: 'maxDate',
						types: 'number',
						description: 'Set the maximum date in days relative to today.'
					}, {
						name: 'maxDateYear',
						types: 'boolean',
						default: 'false',
						description: 'Make maxDate observe years instead of days.'
					}, {
						name: 'minDate',
						types: 'number',
						description: 'Set the minimum date in days relative to today.'
					}, {
						name: 'minDateYear',
						types: 'boolean',
						default: 'false',
						description: 'Make minDate observe years instead of days.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the input name.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onCalendarClose',
						types: '() => void',
						description: 'Handler method for closing the calendar.'
					}, {
						name: 'onChangeRaw',
						types: '(event) => void',
						description: 'Handler method for the change of input value.'
					}, {
						name: 'onClick',
						types: '() => void',
						description: 'Handler method for the click event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => void',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'onSelect',
						types: '(Date) => void',
						description: 'Handler method for the change of date via date selection.'
					}, {
						name: 'openToDate',
						types: 'any',
						description: `Select a date to which to open the datepicker. (eg. new Date('1997-10-11'))`
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a datepicker placeholder.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the datepicker required.'
					}, {
						name: 'scrollableYearDropdown',
						types: 'boolean',
						default: 'false',
						description: 'Set the year dropdown to fixed height and add a scrollbar.'
					}, {
						name: 'selected',
						types: ['Date', 'null', 'undefined'],
						description: 'Set the selected date.'
					}, {
						name: 'showMonthDropdown',
						types: 'boolean',
						description: 'Show the month dropdown list.'
					}, {
						name: 'showYearDropdown',
						types: 'boolean',
						description: 'Show the year dropdown list.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the datepicker title.'
					}, {
						name: 'todayButton',
						types: 'string',
						description: 'Set the label and show the today button.'
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
						description: 'Set the tooltip position for the datepicker.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Pass a string value to the datepicker.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the datepicker input field width. (eg. 100%, 20rem, 400px, etc.)'
					}, {
						name: 'yearDropdownItemNumber',
						types: 'number',
						description: 'Display a number of years before and after the current year in the year dropdown.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the datepicker.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the datepicker.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the datepicker.'
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
				'2.1.4',
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
					'`<input type="text">` because type="date" creates browser default datepicker which interferes with custom datepicker',
					'Icon as a child element with `aria-hidden`'
				],
				attributes: [
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
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSDatepickerPreview;
