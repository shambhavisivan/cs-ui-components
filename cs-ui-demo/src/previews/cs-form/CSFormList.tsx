import React from 'react';
import GettingStarted from './GettingStarted';
import CSFormPreview from './components/form/CSFormPreview';
import CSFormSectionPreview from './components/section/CSFormSectionPreview';
import CSFormStandardFormFieldsPreview from './components/standard-form-fields/CSFormStandardFormFieldsPreview';
import CSFormCustomFormFieldsPreview from './components/custom-form-fields/CSFormCustomFormFieldsPreview';
import CSFormLayoutFormFieldsPreview from './components/layout-form-fields/CSFormLayoutFormFieldsPreview';

import SidebarList from '../SidebarList';
import CSFormValidationPreview from './components/validation/CSFormValidationPreview';
import CSFormUtilsPreview from './components/utils/CSFormUtilsPreview';

class CSFormList extends React.Component {

	render() {
		const componentsList = [
			{
				name: 'Getting Started',
				component: GettingStarted
			},
			{
				name: 'Form',
				component: CSFormPreview
			},
			{
				name: 'Section',
				component: CSFormSectionPreview
			},
			{
				name: 'Standard Form Fields',
				component: CSFormStandardFormFieldsPreview
			},
			{
				name: 'Custom Form Fields',
				component: CSFormCustomFormFieldsPreview
			},
			{
				name: 'Layout Form Fields',
				component: CSFormLayoutFormFieldsPreview
			},
			{
				name: 'Validation',
				component: CSFormValidationPreview
			},
			{
				name: 'Utils',
				component: CSFormUtilsPreview
			}
		];

		return (
			<SidebarList sidebarList={componentsList} path="cs-form" />
		);
	}
}

export default CSFormList;
