import React from 'react';
import FieldTypes from './components/FieldTypes';
import GettingStarted from './getting-started/GettingStarted';
import CSFormPreview from './components/form/CSFormPreview';

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
				name: 'Field Types',
				component: FieldTypes
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
