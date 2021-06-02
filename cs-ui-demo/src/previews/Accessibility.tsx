import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import AnchorSidebarList from './AnchorSidebarList';
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
			<AnchorSidebarList
				className="accessibility-sidebar"
				anchorList={anchorList}
				spyOn=".accessibility"
			/>
			<ReactMarkdown
				source={markdown}
				escapeHtml={false}
				className="accessibility"
				linkTarget="_blank"
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

export default Accessibility;
