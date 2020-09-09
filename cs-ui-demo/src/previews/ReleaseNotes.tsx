import React from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';

export interface CSReleaseNotesState {
	markdown: any;
}

class ReleaseNotes extends React.Component<any, CSReleaseNotesState> {

	private anchorList = ['1.100', '1.101', '1.102'];

	constructor(props: any) {
		super(props);
		this.state = {
			markdown: ''
		};
	}

	componentDidMount() {
		const releaseNotesPath = require('../ReleaseNotes.md');
		// Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
		fetch(releaseNotesPath)
			.then(res => res.text())
			.then(text => this.setState({ markdown: text }));
	}

	render() {
		const { markdown } = this.state;
		return (
			<>
				<AnchorSidebarList anchorList={this.anchorList} />
				<ReactMarkdown
					source={markdown}
					escapeHtml={false}
					className="release-notes"
				/>
			</>
		);
	}
}

export default ReleaseNotes;
