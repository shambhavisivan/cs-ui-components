import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import * as CSD from '../../demo-components';
import * as CSDH from '../../demo-helpers';

const anchorList = ['Coming Soon'];

const CSGridReleaseNotes: React.FC = () => {
	const [markdown, setMarkdown] = useState<string>('');

	useEffect(() => {
		const releaseNotesPath = require('./CSGridReleaseNotes.md');
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
			<CSD.Sidebar
				data={anchorList.map((anchor: string) => ({ name: anchor }))}
				routePrefix="release-notes/cs-grid"
				hashLinks
				spyOn=".release-notes"
			/>
			<ReactMarkdown
				children={markdown}
				rehypePlugins={[rehypeRaw]}
				className="release-notes"
				components={{
					h1: ({ children })  => {
						return <h1 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h1>;
					},
					h2: ({ children })  => {
						return <h2 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h2>;
					},
					h3: ({ children })  => {
						return <h3 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h3>;
					},
					h4: ({ children })  => {
						return <h4 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h4>;
					},
					h5: ({ children })  => {
						return <h5 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h5>;
					},
					h6: ({ children })  => {
						return <h6 id={CSDH.toKebabCase(String(children))} className="csd-scrollspy">{String(children)}</h6>;
					}
				}}
			/>
		</>
	);
};

export default CSGridReleaseNotes;
