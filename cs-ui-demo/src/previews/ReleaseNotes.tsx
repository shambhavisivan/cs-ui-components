import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';
import { getSlug } from './helpers';

const anchorList = ['1.1.22', '1.1.21', '1.1.20', '1.1.19', '1.1.18', '1.1.17', '1.1.16', '1.1.15', '1.1.14', '1.1.13', '1.1.12', '1.1.11', '1.1.10', '1.1.9', '1.1.8', '1.1.7', '1.1.6', '1.1.5', '1.1.4', '1.1.3', '1.1.2', '1.1.1', '1.1.0'];

const ReleaseNotes: React.FC = () => {
	const [markdown, setMarkdown] = useState<string>('');

	useEffect(() => {
		const releaseNotesPath = require('../ReleaseNotes.md');
		fetch(releaseNotesPath)
			.then(res => res.text())
			.then(text => setMarkdown(text));
	}, []);

	useLayoutEffect(() => {
		if (markdown) {
			const scrollId = window.location.hash;
			if (scrollId) {
				const scrollToElement = document.getElementById(scrollId.substring(1));
				if (scrollToElement) {
					scrollToElement.scrollIntoView({ block: 'start' });
				}
			}
		}
	}, [markdown]);

	return (
		<>
			<AnchorSidebarList
				className="release-notes-sidebar"
				anchorList={anchorList}
				spyOn=".release-notes"
			/>
			<ReactMarkdown
				source={markdown}
				escapeHtml={false}
				className="release-notes"
				renderers={{
					heading: ({ level, children }) => {
						const Heading = `h${level}` as keyof JSX.IntrinsicElements;
						return <Heading id={getSlug(children[0].props.value)}>{children[0].props.value}</Heading>;
					}
				}}
			/>
		</>
	);
};

export default ReleaseNotes;
