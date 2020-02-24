import React from 'react';
import LightningIconsPreview from './icons/LightningIconsPreview';
import CloudSenseIconsPreview from './icons/CloudSenseIconsPreview';
import SidebarList from './SidebarList';

class CSIconsList extends React.Component {

	render() {
		const iconsList = [
			{
				name: 'Lightning Icons',
				component: LightningIconsPreview
			},
			{
				name: 'CloudSense Icons',
				component: CloudSenseIconsPreview
			}
		];

		return (
			<SidebarList sidebarList={iconsList} toggle path="/icons/" customClass="icons" />
		);
	}
}

export default CSIconsList;
