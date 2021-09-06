import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import SecondarySidebar from './SecondarySidebar';
import { getSlug } from './helpers';

const anchorList = ['General', 'Official Documentation', 'Criteria',  'Literature', 'App General', 'FAQ'];

const Accessibility: React.FC = () => {
	const [markdown, setMarkdown] = useState<string>('');

	useEffect(() => {
		const releaseNotesPath = require('../Accessibility.md');
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
			<SecondarySidebar
				className="accessibility-sidebar"
				anchorList={anchorList}
				spyOn=".accessibility"
				collapsible
				color="black"
			/>
			<ReactMarkdown
				children={markdown}
				rehypePlugins={[rehypeRaw]}
				className="accessibility"
				linkTarget="_blank"
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

export default Accessibility;
