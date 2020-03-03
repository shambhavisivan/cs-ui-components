import './App.scss';
import React from 'react';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import CSComponentsList from './previews/CSComponentsList';
import CSIconsList from './previews/CSIconsList';
import CSColorsPreview from './previews/colors/CSColorsPreview';

class App extends React.Component {

	render() {

		return (
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
						</ul>
						{/*<img alt="CS logo" src={require('../../cs-ui-components/src/images/cs_logo_dark_blue_small.png')}/>*/}
					</div>
					<div className="app-body">
						<Route path="/components" component={CSComponentsList}/>
						<Route path="/icons" component={CSIconsList}/>
						<Route path="/colors" component={CSColorsPreview}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
