import './sass/style.scss';
import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CSComponentsList from './previews/CSComponentsList';
import CSIconsList from './previews/CSIconsList';
import CSColorsPreview from './previews/colors/CSColorsPreview';
import ReleaseNotes from './previews/ReleaseNotes';
import Accessibility from './previews/Accessibility';
import MainHeader from './previews/MainHeader';

import { ThemeProvider } from './context/ThemeContext';
import { QuickLinksProvider } from './context/QuickLinksContext';

const App: React.FC = () => (
	<ThemeProvider>
		<QuickLinksProvider>
			<Router>
				<div className="cs-app-wrapper">
					<MainHeader />
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
		</QuickLinksProvider>
	</ThemeProvider>
);

export default App;
