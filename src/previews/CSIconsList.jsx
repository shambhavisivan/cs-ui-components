import React from "react";
import {Route, NavLink} from "react-router-dom";

import LightningIconsPreview from "./icons/LightningIconsPreview.jsx";
import CloudSenseIconsPreview from "./icons/CloudSenseIconsPreview.jsx";

class CSComponentsList extends React.Component {
	render() {

		return (
			<>
				<ul className="components-list">
					<li className="ui-component">
						<NavLink to={"/icons/LightningIcons"} activeClassName="active-component">Lightning Icons</NavLink>
					</li>
					<li className="ui-component">
						<NavLink to={"/icons/CloudSenseIcons"} activeClassName="active-component">CloudSense Icons</NavLink>
					</li>
				</ul>
				<div className="components-preview">
					<Route path="/icons/LightningIcons" component={LightningIconsPreview}/>
					<Route path="/icons/CloudSenseIcons" component={CloudSenseIconsPreview}/>
				</div>
			</>
		)
	}
}

export default CSComponentsList;
