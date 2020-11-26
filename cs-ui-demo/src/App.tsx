import './App.scss';
import React from 'react';

import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';

import CSComponentsList from './previews/CSComponentsList';
import CSIconsList from './previews/CSIconsList';
import CSColorsPreview from './previews/colors/CSColorsPreview';
import ReleaseNotes from './previews/ReleaseNotes';
import Accessibility from './previews/Accessibility';

import { CSImage, CSChip } from '@cloudsense/cs-ui-components';

class App extends React.Component {

	render() {

		return (
			<>
				<Router>
					<div className="cs-app-wrapper">
						<div className="app-main-header">
							<ul>
								<li className="main-header-tab">
									<NavLink to={'/components'} activeClassName="active-main-header-tab">CS UI Components</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/icons'} activeClassName="active-main-header-tab">Icons</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/colors'} activeClassName="active-main-header-tab">Colors</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/accessibility'} activeClassName="active-main-header-tab">Accessibility</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/release-notes'} activeClassName="active-main-header-tab">Release Notes</NavLink>
								</li>
							</ul>
							<div className="app-main-header-right">
								<CSChip text="latest published version: 1.0.0-alpha.147" />
								<CSImage type="logo" height="2.25rem" />
							</div>
						</div>
						<div className="app-body">
							<Route path="/components" component={CSComponentsList} />
							<Route path="/icons" component={CSIconsList} />
							<Route path="/colors" component={CSColorsPreview} />
							<Route path="/release-notes" component={ReleaseNotes} />
							<Route path="/accessibility" component={Accessibility} />
							<Switch>
								<Redirect exact from="/" to="/components/CSGettingStarted" />
								<Redirect exact from="/components" to="/components/CSGettingStarted" />
								<Redirect exact from="/icons/" to="/icons/LightningIcons" />
							</Switch>
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
