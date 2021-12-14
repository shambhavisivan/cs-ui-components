import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import * as CSD from '../../demo-components';
import * as CSDH from '../../demo-helpers';

const anchorList = ['2.0.1', '2.0.0', '1.1.25', '1.1.24', '1.1.23', '1.1.22', '1.1.21', '1.1.20', '1.1.19', '1.1.18', '1.1.17', '1.1.16', '1.1.15', '1.1.14', '1.1.13', '1.1.12', '1.1.11', '1.1.10', '1.1.9', '1.1.8', '1.1.7', '1.1.6', '1.1.5', '1.1.4', '1.1.3', '1.1.2', '1.1.1', '1.1.0'];

const CSUIReleaseNotes: React.FC = () => {
	const [markdown, setMarkdown] = useState<string>('');

	useEffect(() => {
		const releaseNotesPath = require('./CSUIReleaseNotes.md');
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
				routePrefix="release-notes/cs-ui-components"
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

export default CSUIReleaseNotes;
