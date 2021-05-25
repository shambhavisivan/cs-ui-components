import React from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';

export interface CSGettingStartedState {
	markdown: any;
}

class CSGettingStarted extends React.Component<any, CSGettingStartedState> {
	private anchorList = ['cs-app-wrapper', 'cs- prefix', 'z-index', 'Unit tests & UUID', 'Documenting Components'];

	constructor(props: any) {
		super(props);
		this.state = {
			markdown: ''
		};
	}

	componentDidMount() {
		const releaseNotesPath = require('../GettingStarted.md');
		// Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
		fetch(releaseNotesPath)
			.then(res => res.text())
			.then(text => this.setState({ markdown: text }));
	}

	render() {
		const { markdown } = this.state;
		return (
			<>
				<AnchorSidebarList anchorList={this.anchorList} className="getting-started-sidebar" />
				<ReactMarkdown
					source={markdown}
					escapeHtml={false}
					className="getting-started"
				/>
			</>
		);
	}
}

export default CSGettingStarted;
