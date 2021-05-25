import React from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';

export interface CSReleaseNotesState {
	markdown: any;
}

class ReleaseNotes extends React.Component<any, CSReleaseNotesState> {

	private anchorList =
		[
			'General', 'Offical Documentation', 'Criteria',  'Literature', 'App General', 'FAQ'
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

		/* If hash provided, ensure scroll after the component loads */
		if (document.location.hash) { // Return the anchor part of a URL
			setTimeout(() => {
				const element = document.getElementById(document.location.hash.substring(1));
				if (element) {
					element.scrollIntoView({behavior: 'smooth'});
				}
			}, 500);
		}
	}

	render() {
		const { markdown } = this.state;
		return (
			<>
				<AnchorSidebarList className="accessibility-sidebar" anchorList={this.anchorList} />
				<ReactMarkdown
					source={markdown}
					escapeHtml={false}
					className="accessibility"
					linkTarget="_blank"
				/>
			</>
		);
	}
}

export default ReleaseNotes;
