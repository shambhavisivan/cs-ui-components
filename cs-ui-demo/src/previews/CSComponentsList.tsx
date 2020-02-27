import React from 'react';
import CSInputTextPreview from './components/CSInputTextPreview';
import CSInputNumberPreview from './components/CSInputNumberPreview';
import CSSelectPreview from './components/CSSelectPreview';
import CSCheckboxPreview from './components/CSCheckboxPreview';
import CSTogglePreview from './components/CSTogglePreview';
import CSTextareaPreview from './components/CSTextareaPreview';
import CSInputSearchPreview from './components/CSInputSearchPreview';
import CSCustomSelectPreview from './components/CSCustomSelectPreview';
import CSDatepickerPreview from './components/CSDatepickerPreview';
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
import CSPathPreview from './components/CSPathPreview';
import CSToastPreview from './components/CSToastPreview';
import CSAlertPreview from './components/CSAlertPreview';
import SidebarList from './SidebarList';

class CSComponentsList extends React.Component {

	render() {
		const componentsList = [
			{
				name: 'InputText',
				component: CSInputTextPreview
			},
			{
				name: 'InputNumber',
				component: CSInputNumberPreview
			},
			{
				name: 'Select',
				component: CSSelectPreview
			},
			{
				name: 'Checkbox',
				component: CSCheckboxPreview
			},
			{
				name: 'Toggle',
				component: CSTogglePreview
			},
			{
				name: 'Textarea',
				component: CSTextareaPreview
			},
			{
				name: 'InputSearch',
				component: CSInputSearchPreview
			},
			{
				name: 'CustomSelect',
				component: CSCustomSelectPreview
			},
			{
				name: 'Datepicker',
				component: CSDatepickerPreview
			},
			{
				name: 'Tab',
				component: CSTabPreview
			},
			{
				name: 'Modal',
				component: CSModalPreview
			},
			{
				name: 'Spinner',
				component: CSSpinnerPreview
			},
			{
				name: 'MainHeader',
				component: CSMainHeaderPreview
			},
			{
				name: 'Card',
				component: CSCardPreview
			},
			{
				name: 'Section',
				component: CSSectionPreview
			},
			{
				name: 'Table',
				component: CSTablePreview
			},
			{
				name: 'Pagination',
				component: CSPaginationPreview
			},
			{
				name: 'Chip',
				component: CSChipPreview
			},
			{
				name: 'Tooltip',
				component: CSTooltipPreview
			},
			{
				name: 'Path',
				component: CSPathPreview
			},
			{
				name: 'Toast',
				component: CSToastPreview
			},
			{
				name: 'Alert',
				component: CSAlertPreview
			}
		];

		return (
			<SidebarList toggle search sidebarList={componentsList} path="/components/CS"/>
		);
	}
}

export default CSComponentsList;
