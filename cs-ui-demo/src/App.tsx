import './sass/style.scss';
import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CSComponentsList from './previews/CSComponentsList';
import CSFormList from './previews/CSFormList';
import CSUtilitiesList from './previews/CSUtilitiesList';
import Accessibility from './previews/Accessibility';
import MainHeader from './previews/MainHeader';

import { ThemeProvider } from './context/ThemeContext';
import { QuickLinksProvider } from './context/QuickLinksContext';

import ReleaseNotesList from './previews/ReleaseNotesList';

const App: React.FC = () => (
	<ThemeProvider>
		<QuickLinksProvider>
			<Router basename="/cs-ui-demo">
				<div className="cs-app-wrapper">
					<MainHeader />
					<div className="app-body">
						<Route path="/cs-ui" component={CSComponentsList} />
						<Route path="/cs-form" component={CSFormList} />
						<Route path="/utilities" component={CSUtilitiesList} />
						<Route path="/accessibility" component={Accessibility} />
						<Route path="/release-notes" component={ReleaseNotesList} />
						<Switch>
							<Redirect exact from="/" to="/cs-ui/GettingStarted" />
							<Redirect exact from="/cs-ui" to="/cs-ui/GettingStarted" />
							<Redirect exact from="/cs-form" to="/cs-form/GettingStarted" />
							<Redirect exact from="/utilities/" to="/utilities/LightningIcons" />
							<Redirect exact from="/release-notes/" to="/release-notes/StartingPage" />
						</Switch>
					</div>
				</div>
			</Router>
		</QuickLinksProvider>
	</ThemeProvider>
);

export default App;
