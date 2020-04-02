import React from 'react';
import CSInputTextPreview from './components/CSInputTextPreview';
import CSInputNumberPreview from './components/CSInputNumberPreview';
import CSSelectPreview from './components/CSSelectPreview';
import CSCheckboxPreview from './components/CSCheckboxPreview';
import CSTogglePreview from './components/CSTogglePreview';
import CSTextareaPreview from './components/CSTextareaPreview';
import CSIconPreview from './components/CSIconPreview';
import CSInputSearchPreview from './components/CSInputSearchPreview';
import CSCustomSelectPreview from './components/CSCustomSelectPreview';
import CSDatepickerPreview from './components/CSDatepickerPreview';
import CSDividerPreview from './components/CSDividerPreview';
import CSInputFilePreview from './components/CSInputFilePreview';
import CSTabPreview from './components/CSTabPreview';
import CSModalPreview from './components/CSModalPreview';
import CSSpinnerPreview from './components/CSSpinnerPreview';
import CSMainHeaderPreview from './components/CSMainHeaderPreview';
import CSCardPreview from './components/CSCardPreview';
import CSSectionPreview from './components/CSSectionPreview';
import CSTablePreview from './components/CSTablePreview';
import CSPaginationPreview from './components/CSPaginationPreview';
import CSChipPreview from './components/CSChipPreview';
import CSTooltipPreview from './components/CSTooltipPreview';
import CSRadioPreview from './components/CSRadioPreview';
import CSPathPreview from './components/CSPathPreview';
import CSToastPreview from './components/CSToastPreview';
import CSAlertPreview from './components/CSAlertPreview';
import CSButtonPreview from './components/CSButtonPreview';
import CSLabelPreview from './components/CSLabelPreview';
import CSProgressBarPreview from './components/CSProgressBarPreview';
import CSButtonDropdownPreview from './components/CSButtonDropdownPreview';
import CSButtonGroupPreview from './components/CSButtonGroupPreview';

import SidebarList from './SidebarList';

class CSComponentsList extends React.Component {

	render() {
		const componentsList = [
			{
				name: 'Alert',
				component: CSAlertPreview
			},
			{
				name: 'Button',
				component: CSButtonPreview
			},
			{
				name: 'Button Dropdown',
				component: CSButtonDropdownPreview
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
				component: CSCheckboxPreview
			},
			{
				name: 'Chip',
				component: CSChipPreview
			},
			{
				name: 'Custom Select',
				component: CSCustomSelectPreview
			},
			{
				name: 'Datepicker',
				component: CSDatepickerPreview
			},
			{
				name: 'Divider',
				component: CSDividerPreview
			},
			{
				name: 'Icon',
				component: CSIconPreview
			},
			{
				name: 'InputFile',
				component: CSInputFilePreview
			},
			{
				name: 'Input Number',
				component: CSInputNumberPreview
			},
			{
				name: 'InputSearch',
				component: CSInputSearchPreview
			},
			{
				name: 'Input Text',
				component: CSInputTextPreview
			},
			{
				name: 'Label',
				component: CSLabelPreview
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
				name: 'Radio',
				component: CSRadioPreview
			},
			{
				name: 'Section',
				component: CSSectionPreview
			},
			{
				name: 'Select',
				component: CSSelectPreview
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
				component: CSTextareaPreview
			},
			{
				name: 'Toast',
				component: CSToastPreview
			},
			{
				name: 'Toggle',
				component: CSTogglePreview
			},
			{
				name: 'Tooltip',
				component: CSTooltipPreview
			}
		];

		return (
			<SidebarList toggle search sidebarList={componentsList} path="/components/CS"/>
		);
	}
}

export default CSComponentsList;
