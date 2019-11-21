import React from "react";

import LightningIconsPreview from "./icons/LightningIconsPreview.jsx";
import CloudSenseIconsPreview from "./icons/CloudSenseIconsPreview.jsx";
import SidebarList from "./SidebarList";

class CSIconsList extends React.Component {
	constructor(props) {
		super(props);
		this.iconsList = [
			{
				"name": "Lightning Icons",
				"component": LightningIconsPreview
			},
			{
				"name": "CloudSense Icons",
				"component": CloudSenseIconsPreview
			}
		]
	}

	render() {
		return (
			<SidebarList sidebarList={this.iconsList} toggle={true} path='/icons/' customClass="icons" />
		)
	}
}

export default CSIconsList;
