import React from 'react';
import CSUIReleaseNotes from './release-notes/CSUIReleaseNotes';
import CSGridReleaseNotes from './release-notes/CSGridReleaseNotes';
import CSFormReleaseNotes from './release-notes/CSFormReleaseNotes';
import FutureScope from './release-notes/FutureScope';
import ReleaseNotes from './release-notes/ReleaseNotes';
import SidebarList from './SidebarList';

class ReleaseNotesList extends React.Component {

	render() {
		const releaseNotesList = [
			{
				name: 'Starting Page',
				component: ReleaseNotes
			}, {
				name: 'CS UI Components',
				component: CSUIReleaseNotes
			}, {
				name: 'CS Grid',
				component: CSGridReleaseNotes
			}, {
				name: 'CS Form',
				component: CSFormReleaseNotes
			}, {
				name: 'Future Scope',
				component: FutureScope
			}
		];

		return (
			<SidebarList sidebarList={releaseNotesList} path="release-notes" />
		);
	}
}

export default ReleaseNotesList;
