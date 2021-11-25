import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSIcon } from '@cloudsense/cs-ui-components';

const ReleaseNotes: React.FC = () => {

	return (
		<>
			<div className="release-notes-page">
				<h1>Release Notes</h1>
				<h2>
					View the individual release notes for CS UI Components, CS Grid and CS Form, or view upcoming planned changes on the Future Scope page.
				</h2>
				<div className="release-notes-picker">
					<NavLink to="/release-notes/cs-ui-components" className="release-notes-link release-notes-cs-ui">
						<CSIcon name="layout" color="#000" />
						<span>CS UI Components</span>
					</NavLink>
					<NavLink to="/release-notes/future-scope" className="release-notes-link release-notes-cs-grid">
						<CSIcon name="table" color="#fff" />
						<span>CS Grid</span>
					</NavLink>
					<NavLink to="/release-notes/future-scope" className="release-notes-link release-notes-cs-form">
						<CSIcon name="edit_form" color="#000" />
						<span>CS Form</span>
					</NavLink>
					<NavLink to="/release-notes/future-scope" className="release-notes-link release-notes-future-scope">
						<CSIcon name="clock" color="#fff" />
						<span>Future Scope</span>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default ReleaseNotes;
