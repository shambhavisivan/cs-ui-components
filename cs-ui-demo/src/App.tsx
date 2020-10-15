import './App.scss';
import React from 'react';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import CSComponentsList from './previews/CSComponentsList';
import CSIconsList from './previews/CSIconsList';
import CSColorsPreview from './previews/colors/CSColorsPreview';
import ReleaseNotes from './previews/ReleaseNotes';
import Accessibility from './previews/Accessibility';

import {CSImage} from '@cloudsense/cs-ui-components';

class App extends React.Component {

	render() {

		return (
			<>
				<Router>
					<div className="cs-app-wrapper">
						<div className="app-main-header">
							<ul>
								<li className="main-header-tab">
									<NavLink to={'/components'} activeClassName="active-main-header-tab">CS UI
										Components</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/icons'} activeClassName="active-main-header-tab">Icons</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/colors'} activeClassName="active-main-header-tab">Colors</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/release-notes'} activeClassName="active-main-header-tab">Release
										Notes</NavLink>
								</li>
								<li className="main-header-tab">
									<NavLink to={'/accessibility'} activeClassName="active-main-header-tab">Accessibility</NavLink>
								</li>
							</ul>
							<CSImage type="logo" height="2.25rem"/>
						</div>
						<div className="app-body">
							<Route path="/components" component={CSComponentsList}/>
							<Route path="/icons" component={CSIconsList}/>
							<Route path="/colors" component={CSColorsPreview}/>
							<Route path="/release-notes" component={ReleaseNotes}/>
							<Route path="/accessibility" component={Accessibility}/>
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
