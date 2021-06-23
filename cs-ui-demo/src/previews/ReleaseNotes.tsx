import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import AnchorSidebarList from './AnchorSidebarList';
import { getSlug } from './helpers';

const anchorList = ['1.1.24', '1.1.23', '1.1.22', '1.1.21', '1.1.20', '1.1.19', '1.1.18', '1.1.17', '1.1.16', '1.1.15', '1.1.14', '1.1.13', '1.1.12', '1.1.11', '1.1.10', '1.1.9', '1.1.8', '1.1.7', '1.1.6', '1.1.5', '1.1.4', '1.1.3', '1.1.2', '1.1.1', '1.1.0'];

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
				children={markdown}
				rehypePlugins={[rehypeRaw]}
				className="release-notes"
				components={{
					h1: ({ children })  => {
						return <h1 id={getSlug(children.toString())}>{children}</h1>;
					},
					h2: ({ children })  => {
						return <h2 id={getSlug(children.toString())}>{children}</h2>;
					},
					h3: ({ children })  => {
						return <h3 id={getSlug(children.toString())}>{children}</h3>;
					},
					h4: ({ children })  => {
						return <h4 id={getSlug(children.toString())}>{children}</h4>;
					},
					h5: ({ children })  => {
						return <h5 id={getSlug(children.toString())}>{children}</h5>;
					},
					h6: ({ children })  => {
						return <h6 id={getSlug(children.toString())}>{children}</h6>;
					}
				}}
			/>
		</>
	);
};

export default ReleaseNotes;
