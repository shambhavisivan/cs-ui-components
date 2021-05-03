import React from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';

export interface CSReleaseNotesState {
	markdown: any;
}

class ReleaseNotes extends React.Component<any, CSReleaseNotesState> {

	private anchorList = ['1.1.15', '1.1.14', '1.1.13', '1.1.12', '1.1.11', '1.1.10', '1.1.9', '1.1.8', '1.1.7', '1.1.6', '1.1.5', '1.1.4', '1.1.3', '1.1.2', '1.1.1', '1.1.0'];

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
