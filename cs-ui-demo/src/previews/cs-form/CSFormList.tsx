import React from 'react';
import FieldTypes from './components/FieldTypes';
import GettingStarted from './getting-started/GettingStarted';
import CSFormPreview from './components/form/CSFormPreview';
import CSFormSectionPreview from './components/section/CSFormSectionPreview';
import CSFormStandardFormFieldsPreview from './components/standard-form-fields/CSFormStandardFormFieldsPreview';
import CSFormCustomFormFieldsPreview from './components/custom-form-fields/CSFormCustomFormFieldsPreview';

import SidebarList from '../SidebarList';

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
				name: 'Validation',
				component: FieldTypes
			},
			{
				name: 'Custom Fields',
				component: FieldTypes
			}
		];

		return (
			<SidebarList sidebarList={componentsList} path="cs-form" />
		);
	}
}

export default CSFormList;
