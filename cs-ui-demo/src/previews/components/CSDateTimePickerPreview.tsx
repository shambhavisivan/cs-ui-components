import React from 'react';
import { CSButtonSize, CSDateTimePicker, CSTooltipPosition, CSIconOrigin } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSDateTimePickerPreviewState {
	[key: string]: Date;
}

const icons = [
	{ iconName: 'cart'},
	{
		iconName: 'tag',
		iconOrigin: 'cs' as CSIconOrigin,
		getTooltip: {
			content: ['icons tooltip'],
			delay: 300,
			maxWidth: '20rem',
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

const actions = [
	{
		action: () => alert('Delete option called'),
		labelHidden: true,
		icon: { iconName: 'delete' },
		size: 'small' as CSButtonSize,
		name: 'Delete'
	},
	{
		action: () => alert('Add option called'),
		icon: { iconName: 'add' },
		labelHidden: true,
		size: 'small' as CSButtonSize,
		name: 'Add',
		getTooltip: {
			content: ['actions tooltip'],
			delay: 300,
			padding: '0.5rem',
			position: 'bottom-left' as CSTooltipPosition,
			stickyOnClick: true
		}
	}
];

class CSDateTimePickerPreview extends React.Component<{}, CSDateTimePickerPreviewState> {
	stateSuffix: string = '';
	state = {
		[`date${this.stateSuffix}`]: new Date(),
		dateReadOnly: new Date(),
		dateSelected: new Date('2020-01-01T11:30:00')
	};

	handleChange = (date: Date) => {
		alert('Date has changed.');
		this.setDate(date, 'OnChange');
	}
	handleKeyDown = () => alert('Key has been pressed.');
	handleSelect = (date: Date) => {
		alert('Date has been selected.');
		this.setDate(date, 'OnSelect');
	}

	setDate = (date: Date, stateSuffix: string) => {
		this.stateSuffix = stateSuffix;
		this.setState({
			[`date${this.stateSuffix}`]: date
		});
	}

	getDoc = () => ({
		name: 'DateTimePicker',
		usage: 'A datetimepicker is a text input to capture a date. You can select a single date, date range or date and time.',
		accessible: 'yes',
		components: [
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
								component: <CSDateTimePicker
									label="Enter date"
									selected={this.state.dateLabel}
									onChange={(date: Date) => this.setDate(date, 'Label')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
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
								component: <CSDateTimePicker
									actions={actions}
									label="Enter date"
									selected={this.state.dateActions}
									onChange={(date: Date) => this.setDate(date, 'Actions')}
									width="30rem"
								/>,
								code: `<CSDateTimePicker
									actions={[
										{
											action: () => alert('Delete option called'),
											icon: { iconName: 'delete' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Delete'
										},
										{
											action: () => alert('Add option called'),
											icon: { iconName: 'add' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Add',
											getTooltip: {
												content: ['actions tooltip'],
												delay: 300,
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true,
											}
										}
									]}
									label="Enter date"
									selected={this.state.dateActions}
									onChange={(date: Date) => this.setDate(date, 'Actions')}
									width="30rem"
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								secondaryVariants: 'selected={this.state.selected}',
								component: <CSDateTimePicker
									label="Enter date"
									selected={this.state.dateOnChange}
									onChange={this.handleChange}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									selected={this.state.selected}
									onChange={this.handleChange}
								/>`
							}
						]
					}, {
						propName: 'selected',
						variations: [
							{
								secondaryVariants: 'onChange={() => any}',
								component: <CSDateTimePicker
									label="Enter date"
									selected={this.state.dateSelected}
									onChange={(date: Date) => this.setDate(date, 'Selected')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSDateTimePicker
									label="Enter date"
									autoFocus
									selected={this.state.dateAutoFocus}
									onChange={(date: Date) => this.setDate(date, 'AutoFocus')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									borderRadius="0"
									selected={this.state.dateBorderRadius}
									onChange={(date: Date) => this.setDate(date, 'BorderRadius')}
								/>,
								code: `<CSDateTimePicker
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
								primaryVariants: 'dateFormat="d MMMM, yyyy h:mm aa"',
								quickLink: 'd MMMM, yyyy h:mm aa',
								component: <CSDateTimePicker
									label="Enter date"
									dateFormat="d MMMM, yyyy h:mm aa"
									selected={this.state.dateDateFormat1}
									onChange={(date: Date) => this.setDate(date, 'DateFormat1')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									dateFormat="d MMMM, yyyy h:mm aa"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="MMMM d, yyyy h:mm aa"',
								quickLink: 'MMMM d, yyyy h:mm aa',
								component: <CSDateTimePicker
									label="Enter date"
									dateFormat="MMMM d, yyyy h:mm aa"
									selected={this.state.dateDateFormat2}
									onChange={(date: Date) => this.setDate(date, 'DateFormat2')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									dateFormat="MMMM d, yyyy h:mm aa"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="yyyy MMMM, d h:mm aa"',
								quickLink: 'yyyy MMMM, d h:mm aa',
								component: <CSDateTimePicker
									label="Enter date"
									dateFormat="yyyy MMMM, d h:mm aa"
									selected={this.state.dateDateFormat3}
									onChange={(date: Date) => this.setDate(date, 'DateFormat3')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									dateFormat="yyyy MMMM, d h:mm aa"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'dateFormat="yyyy d, MMMM h:mm aa"',
								quickLink: 'yyyy d, MMMM h:mm aa',
								component: <CSDateTimePicker
									label="Enter date"
									dateFormat="yyyy d, MMMM h:mm aa"
									selected={this.state.dateDateFormat4}
									onChange={(date: Date) => this.setDate(date, 'DateFormat4')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									dateFormat="yyyy d, MMMM h:mm aa"
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
								component: <CSDateTimePicker
									label="Enter date"
									disabled
									selected={this.state.dateDisabled}
									onChange={(date: Date) => this.setDate(date, 'Disabled')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
									selected={this.state.dateDropdownMode1}
									onChange={(date: Date) => this.setDate(date, 'DropdownMode1')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="scroll"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`

							}, {
								primaryVariants: 'dropdownMode="select"',
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									showMonthDropdown
									dropdownMode="select"
									selected={this.state.dateDropdownMode2}
									onChange={(date: Date) => this.setDate(date, 'DropdownMode2')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									error
									selected={this.state.dateError}
									onChange={(date: Date) => this.setDate(date, 'Error')}
								/>,
								code: `<CSDateTimePicker
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
								secondaryVariants: 'error={true}',
								component: <CSDateTimePicker
									label="Enter date"
									error
									errorMessage="Error message."
									selected={this.state.dateErrorMsg}
									onChange={(date: Date) => this.setDate(date, 'ErrorMsg')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									error
									errorMessage="Error message."
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									helpText="Help text example"
									selected={this.state.dateHelpText}
									onChange={(date: Date) => this.setDate(date, 'HelpText')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									icons={icons}
									label="Enter date"
									selected={this.state.dateIcons}
									onChange={(date: Date) => this.setDate(date, 'Icons')}
									width="30rem"
								/>,
								code: `<CSDateTimePicker
									icons={[
										{ iconName: 'cart'},
										{
											iconName: 'tag',
											iconOrigin: 'cs' as CSIconOrigin,
											getTooltip: {
												content: ['icons tooltip'],
												delay: 300,
												maxWidth: '20rem',
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}
									]}
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
								component: <CSDateTimePicker
									label="Enter date"
									inline
									selected={this.state.dateInline}
									onChange={(date: Date) => this.setDate(date, 'Inline')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									isClearable
									selected={this.state.dateIsClearable}
									onChange={(date: Date) => this.setDate(date, 'IsClearable')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									labelHidden
									selected={this.state.dateLabelHidden}
									onChange={(date: Date) => this.setDate(date, 'LabelHidden')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									labelTitle
									selected={this.state.dateLabelTitle}
									onChange={(date: Date) => this.setDate(date, 'LabelTitle')}

								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									maxDate={5}
									selected={this.state.dateMaxDate}
									onChange={(date: Date) => this.setDate(date, 'MaxDate')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									maxDate={1}
									maxDateYear
									selected={this.state.dateMaxDateYear}
									onChange={(date: Date) => this.setDate(date, 'MaxDateYear')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									minDate={10}
									selected={this.state.dateMinDate}
									onChange={(date: Date) => this.setDate(date, 'MinDate')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									minDate={1}
									minDateYear
									selected={this.state.dateMinDateYear}
									onChange={(date: Date) => this.setDate(date, 'MinDateYear')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									name="datepicker"
									selected={this.state.dateName}
									onChange={(date: Date) => this.setDate(date, 'Name')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									name="datepicker"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									selected={this.state.dateOnKeyDown}
									onChange={(date: Date) => this.setDate(date, 'OnKeyDown')}
									onKeyDown={this.handleKeyDown}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									selected={this.state.dateOnSelect}
									onSelect={this.handleSelect}
									onChange={() => ({})}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									selected={this.state.selected}
									onSelect={this.handleSelect}
									onChange={() => ({})}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									placeholder="Placeholder text"
									selected={this.state.datePlaceholder}
									onChange={(date: Date) => this.setDate(date, 'Placeholder')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									readOnly
									selected={this.state.dateReadOnly}
									onChange={(date: Date) => this.setDate(date, 'ReadOnly')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									required
									selected={this.state.dateRequired}
									onChange={(date: Date) => this.setDate(date, 'Required')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
									selected={this.state.dateScrollableYearDropdown}
									onChange={(date: Date) => this.setDate(date, 'ScrollableYearDropdown')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									scrollableYearDropdown
									showYearDropdown
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'showMonthDropdown',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									showMonthDropdown
									selected={this.state.dateShowMonthDropdown}
									onChange={(date: Date) => this.setDate(date, 'ShowMonthDropdown')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									selected={this.state.dateShowYearDropdown}
									onChange={(date: Date) => this.setDate(date, 'ShowYearDropdown')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									showYearDropdown
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'timeCaption',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									timeCaption="Tick Tock"
									selected={this.state.dateTimeCaption}
									onChange={(date: Date) => this.setDate(date, 'TimeCaption')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeCaption="Tick Tock"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'timeFormat',
						variations: [
							{
								primaryVariants: 'timeFormat="HH:mm"',
								quickLink: 'HH:mm',
								component: <CSDateTimePicker
									label="Enter date"
									timeFormat="HH:mm"
									selected={this.state.dateTimeFormat1}
									onChange={(date: Date) => this.setDate(date, 'TimeFormat1')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeFormat="HH:mm"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'timeFormat="HH:mm:ss"',
								quickLink: 'HH:mm:ss',
								component: <CSDateTimePicker
									label="Enter date"
									timeFormat="HH:mm:ss"
									selected={this.state.dateTimeFormat2}
									onChange={(date: Date) => this.setDate(date, 'TimeFormat2')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeFormat="HH:mm:ss"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'timeFormat="yyyy-MM"',
								quickLink: 'yyyy-MM',
								component: <CSDateTimePicker
									label="Enter date"
									timeFormat="yyyy-MM"
									selected={this.state.dateTimeFormat3}
									onChange={(date: Date) => this.setDate(date, 'TimeFormat3')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeFormat="yyyy-MM"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'timeFormat="yyyy-MM-dd"',
								quickLink: 'yyyy-MM-dd',
								component: <CSDateTimePicker
									label="Enter date"
									timeFormat="yyyy-MM-dd"
									selected={this.state.dateTimeFormat4}
									onChange={(date: Date) => this.setDate(date, 'TimeFormat4')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeFormat="yyyy-MM-dd"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'timeIntervals',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									timeIntervals={60}
									selected={this.state.dateTimeIntervals}
									onChange={(date: Date) => this.setDate(date, 'TimeIntervals')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									timeIntervals={60}
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSDateTimePicker
									label="Enter date"
									title="This is a title"
									selected={this.state.dateTitle}
									onChange={(date: Date) => this.setDate(date, 'Title')}
								/>,
								code: `<CSDateTimePicker
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
								primaryVariants: 'todayButton={true}',
								component: <CSDateTimePicker
									label="Enter date"
									todayButton
									selected={this.state.dateTodayButton}
									onChange={(date: Date) => this.setDate(date, 'TodayButton')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									todayButton
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
								secondaryVariants: 'helpText="text"',
								component: <CSDateTimePicker
									label="Enter date"
									tooltipPosition="top-left"
									helpText="Help text example"
									selected={this.state.dateTooltipPosition}
									onChange={(date: Date) => this.setDate(date, 'TooltipPosition')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									value="1-1-2020 11:30:00"
									selected={this.state.dateValue}
									onChange={(date: Date) => this.setDate(date, 'Value')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									value="1-1-2020 11:30:00"
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
								component: <CSDateTimePicker
									label="Enter date"
									width="100%"
									selected={this.state.dateWidth1}
									onChange={(date: Date) => this.setDate(date, 'Width1')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									width="100%"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'width="30rem"',
								quickLink: '30rem',
								component: <CSDateTimePicker
									label="Enter date"
									width="30rem"
									selected={this.state.dateWidth2}
									onChange={(date: Date) => this.setDate(date, 'Width2')}
								/>,
								code: `<CSDateTimePicker
									label="Enter date"
									width="30rem"
									selected={this.state.selected}
									onChange={(date: Date) => this.setState({ selected: date })}
								/>`
							}, {
								primaryVariants: 'width="400px"',
								quickLink: '400px',
								component: <CSDateTimePicker
									label="Enter date"
									width="400px"
									selected={this.state.dateWidth3}
									onChange={(date: Date) => this.setDate(date, 'Width3')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									showYearDropdown
									scrollableYearDropdown
									yearDropdownItemNumber={15}
									selected={this.state.dateYearDropdownItemNumber}
									onChange={(date: Date) => this.setDate(date, 'YearDropdownItemNumber')}
								/>,
								code: `<CSDateTimePicker
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
								component: <CSDateTimePicker
									label="Enter date"
									id="custom-id"
									className="custom-br-mint"
									selected={this.state.dateIdClass}
									onChange={(date: Date) => this.setDate(date, 'IdClass')}
								/>,
								code: `<CSDateTimePicker
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
						description: 'Set the datetimepicker label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSDateTimePickerActionsProps',
							types: 'Array<CSDateTimePickerActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'onChange',
						required: true,
						types: '(Date) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'selected',
						required: true,
						types: 'Date',
						description: 'Set the selected date and time.'
					}, {
						name: 'autoFocus',
						types: 'boolean',
						default: 'false',
						description: 'Focuses the datetimepicker by default.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'dateFormat',
						types: 'string',
						default: `'MMMM d, yyyy h:mm aa'`,
						description: 'Set the date format for various locales. (eg. dd-MM-yyyy, MM-dd-yyyy, yyyy-MM-dd, etc.)'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the datetimepicker.'
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
						description: 'Set the error message or messages for the datetimepicker.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSDateTimePickerIconProps',
							types: 'Array<CSDateTimePickerIconProps>'
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
						description: 'Hide the datetimepicker label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'locale',
						types: 'any',
						description: 'Set the datetimepicker locale.'
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
						name: 'onKeyDown',
						types: '(event) => any',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'onSelect',
						types: '(Date) => any',
						description: 'Handler method for the change of date via date selection.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a datetimepicker placeholder.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the datetimepicker required.'
					}, {
						name: 'scrollableYearDropdown',
						types: 'boolean',
						default: 'false',
						description: 'Set the year dropdown to fixed height and add a scrollbar.'
					}, {
						name: 'showMonthDropdown',
						types: 'boolean',
						description: 'Show the month dropdown list.'
					}, {
						name: 'showYearDropdown',
						types: 'boolean',
						description: 'Show the year dropdown list.'
					}, {
						name: 'timeCaption',
						types: 'string',
						description: 'Set the title for the time column.'
					}, {
						name: 'timeFormat',
						types: 'string',
						description: 'Set the date format for various locales. (eg. HH:mm, HH:mm:ss, yyyy-MM, yyyy-MM:dd, etc.)'
					}, {
						name: 'timeIntervals',
						types: 'number',
						description: 'Set the interval between each time value. (eg. 15, 20, 30, 60, etc.)'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the datetimepicker title.'
					}, {
						name: 'todayButton',
						types: 'boolean',
						description: 'Show the today button.'
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
						description: 'Set the tooltip position for the datetimepicker.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Pass a string value to the datetimepicker.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the datetimepicker input field width. (eg. 100%, 20rem, 400px, etc.)'
					}, {
						name: 'yearDropdownItemNumber',
						types: 'number',
						description: 'Display a number of years before and after the current year in the year dropdown.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the datetimepicker.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the datetimepicker.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the datetimepicker.'
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
					'`<input type="text">` - because type="date" creates browser default datepicker which interferes with custom datepicker',
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

export default CSDateTimePickerPreview;
