import React from 'react';
import LightningIconsPreview from './icons/LightningIconsPreview';
import CloudSenseIconsPreview from './icons/CloudSenseIconsPreview';
import CSColorsList from './colors/CSColorsList';

import SidebarList from './SidebarList';

class CSUtilitiesList extends React.Component {

	render() {
		const utilitiesList = [
			{
				name: 'Lightning Icons',
				component: LightningIconsPreview
			},
			{
				name: 'CloudSense Icons',
				component: CloudSenseIconsPreview
			},
			{
				name: 'Colors',
				component: CSColorsList
			}
		];

		return (
			<SidebarList sidebarList={utilitiesList} path="/utilities/" customClass="utilities" />
		);
	}
}

export default CSUtilitiesList;
