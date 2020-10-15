import React from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';

export interface CSReleaseNotesState {
	markdown: any;
}

class ReleaseNotes extends React.Component<any, CSReleaseNotesState> {

	private anchorList =
		[
			'General', 'Offical Documentation', 'Criterions', 'FAQ', 'App General'
		];

	constructor(props: any) {
		super(props);
		this.state = {
			markdown: ''
		};
	}

	componentDidMount() {
		const releaseNotesPath = require('../Accessibility.md');
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
					className="accessibility"
				/>
			</>
		);
	}
}

export default ReleaseNotes;
