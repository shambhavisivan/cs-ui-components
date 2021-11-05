import React from 'react';
import FieldTypes from './cs-form/components/FieldTypes';
import GettingStarted from './cs-form/GettingStarted';

import SidebarList from './SidebarList';

class CSFormList extends React.Component {

	render() {
		const componentsList = [
			{
				name: 'Getting Started',
				component: GettingStarted
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
			<SidebarList sidebarList={componentsList} path="cs-form"/>
		);
	}
}

export default CSFormList;
