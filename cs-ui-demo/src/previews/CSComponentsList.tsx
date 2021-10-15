import React from 'react';

import CSAlertPreview from './cs-ui/components/cs-alert/CSAlertPreview';
import CSButtonPreview from './cs-ui/components/CSButtonPreview';
import CSButtonGroupPreview from './cs-ui/components/CSButtonGroupPreview';
import CSCardPreview from './cs-ui/components/CSCardPreview';
import CSCheckboxPreview from './cs-ui/components/CSCheckboxPreview';
import CSChipPreview from './cs-ui/components/CSChipPreview';
import CSCurrencyPreview from './cs-ui/components/CSCurrencyPreview';
import CSCustomDataPreview from './cs-ui/components/CSCustomDataPreview';
import CSCustomSelectPreview from './cs-ui/components/CSCustomSelectPreview';
import CSDataTablePreview from './cs-ui/components/CSDataTablePreview';
import CSDatepickerPreview from './cs-ui/components/CSDatepickerPreview';
import CSDateTimePickerPreview from './cs-ui/components/CSDateTimePickerPreview';
import CSDividerPreview from './cs-ui/components/CSDividerPreview';
import CSDropdownPreview from './cs-ui/components/CSDropdownPreview';
import CSFieldErrorMsgPreview from './cs-ui/components/CSFieldErrorMsgPreview';
import CSIconPreview from './cs-ui/components/CSIconPreview';
import CSImagePreview from './cs-ui/components/CSImagePreview';
import CSInputFilePreview from './cs-ui/components/CSInputFilePreview';
import CSInputNumberPreview from './cs-ui/components/CSInputNumberPreview';
import CSInputSearchPreview from './cs-ui/components/CSInputSearchPreview';
import CSInputTextPreview from './cs-ui/components/CSInputTextPreview';
import CSLabelPreview from './cs-ui/components/CSLabelPreview';
import CSListPreview from './cs-ui/components/CSListPreview';
import CSLookupPreview from './cs-ui/components/CSLookupPreview';
import CSMainHeaderPreview from './cs-ui/components/CSMainHeaderPreview';
import CSModalPreview from './cs-ui/components/CSModalPreview';
import CSPaginationPreview from './cs-ui/components/CSPaginationPreview';
import CSPathPreview from './cs-ui/components/CSPathPreview';
import CSProgressBarPreview from './cs-ui/components/CSProgressBarPreview';
import CSProgressIndicatorPreview from './cs-ui/components/CSProgressIndicatorPreview';
import CSRadioPreview from './cs-ui/components/CSRadioPreview';
import CSSectionPreview from './cs-ui/components/CSSectionPreview';
import CSSelectPreview from './cs-ui/components/CSSelectPreview';
import CSSidebarPreview from './cs-ui/components/CSSidebarPreview';
import CSSkipLinkPreview from './cs-ui/components/CSSkipLinkPreview';
import CSSliderPreview from './cs-ui/components/CSSliderPreview';
import CSSpinnerPreview from './cs-ui/components/CSSpinnerPreview';
import CSTablePreview from './cs-ui/components/CSTablePreview';
import CSTabPreview from './cs-ui/components/CSTabPreview';
import CSTextareaPreview from './cs-ui/components/CSTextareaPreview';
import CSToastPreview from './cs-ui/components/CSToastPreview';
import CSTogglePreview from './cs-ui/components/CSTogglePreview';
import CSTooltipPreview from './cs-ui/components/CSTooltipPreview';
import CSTransferPreview from './cs-ui/components/CSTransferPreview';
import CSTreePreview from './cs-ui/components/CSTreePreview';
import GettingStarted from './cs-ui/GettingStarted';
import SidebarList from './SidebarList';

class CSComponentsList extends React.Component {

	render() {
		const componentsList = [
			{
				name: 'Getting Started',
				component: GettingStarted
			},
			{
				name: 'Alert',
				component: CSAlertPreview
			},
			{
				name: 'Button',
				component: CSButtonPreview
			},
			{
				name: 'Button Group',
				component: CSButtonGroupPreview
			},
			{
				name: 'Card',
				component: CSCardPreview
			},
			{
				name: 'Checkbox',
				component: CSCheckboxPreview,
				isFormElement: true
			},
			{
				name: 'Chip',
				component: CSChipPreview
			},
			{
				name: 'Currency',
				component: CSCurrencyPreview
			},
			{
				name: 'Custom Data',
				component: CSCustomDataPreview,
				isFormElement: true
			},
			{
				name: 'Custom Select',
				component: CSCustomSelectPreview,
				isFormElement: true
			},
			{
				name: 'Data Table',
				component: CSDataTablePreview
			},
			{
				name: 'Datepicker',
				component: CSDatepickerPreview,
				isFormElement: true
			},
			{
				name: 'DateTimePicker',
				component: CSDateTimePickerPreview,
				isFormElement: true
			},
			{
				name: 'Divider',
				component: CSDividerPreview
			},
			{
				name: 'Dropdown',
				component: CSDropdownPreview
			},
			{
				name: 'Field Error Message',
				component: CSFieldErrorMsgPreview
			},
			{
				name: 'Icon',
				component: CSIconPreview
			},
			{
				name: 'Image',
				component: CSImagePreview
			},
			{
				name: 'Input File',
				component: CSInputFilePreview,
				isFormElement: true
			},
			{
				name: 'Input Number',
				component: CSInputNumberPreview,
				isFormElement: true
			},
			{
				name: 'Input Search',
				component: CSInputSearchPreview,
				isFormElement: true
			},
			{
				name: 'Input Text',
				component: CSInputTextPreview,
				isFormElement: true
			},
			{
				name: 'Label',
				component: CSLabelPreview
			},
			{
				name: 'List',
				component: CSListPreview
			},
			{
				name: 'Lookup',
				component: CSLookupPreview,
				isFormElement: true
			},
			{
				name: 'Main Header',
				component: CSMainHeaderPreview
			},
			{
				name: 'Modal',
				component: CSModalPreview
			},
			{
				name: 'Pagination',
				component: CSPaginationPreview
			},
			{
				name: 'Path',
				component: CSPathPreview
			},
			{
				name: 'Progress Bar',
				component: CSProgressBarPreview
			},
			{
				name: 'Progress Indicator',
				component: CSProgressIndicatorPreview
			},
			{
				name: 'Radio',
				component: CSRadioPreview,
				isFormElement: true
			},
			{
				name: 'Section',
				component: CSSectionPreview
			},
			{
				name: 'Select',
				component: CSSelectPreview,
				isFormElement: true
			},
			{
				name: 'Sidebar',
				component: CSSidebarPreview
			},
			{
				name: 'Skip Link',
				component: CSSkipLinkPreview
			},
			{
				name: 'Slider',
				component: CSSliderPreview,
				isFormElement: true
			},
			{
				name: 'Spinner',
				component: CSSpinnerPreview
			},
			{
				name: 'Tab',
				component: CSTabPreview
			},
			{
				name: 'Table',
				component: CSTablePreview
			},
			{
				name: 'Textarea',
				component: CSTextareaPreview,
				isFormElement: true
			},
			{
				name: 'Toast',
				component: CSToastPreview
			},
			{
				name: 'Toggle',
				component: CSTogglePreview,
				isFormElement: true
			},
			{
				name: 'Tooltip',
				component: CSTooltipPreview
			},
			{
				name: 'Transfer',
				component: CSTransferPreview,
				isFormElement: true
			},
			{
				name: 'Tree',
				component: CSTreePreview
			}
		];

		return (
			<SidebarList toggle search sidebarList={componentsList} path="/cs-ui/"/>
		);
	}
}

export default CSComponentsList;
