import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CSDAccessibility from './CSDAccessibility';
import CSDContent from './CSDContent';
import CSDHeader from './CSDHeader';
import CSDSidebar, { CSDSidebarItem } from './CSDSidebar';
import CSDTable from './CSDTable';
import * as CSDH from '../demo-helpers';

export interface CSDPageProps {
	children: React.ReactNode;
	title: string;
	tables?: any;
	accessibility?: any;
	accessible?: 'yes' | 'partly' | 'no';
	playground?: React.ReactNode;
	hideSidebar?: boolean;
	routePrefix?: string;
}

const CSDPage = ({
	children,
	title,
	accessible,
	tables,
	accessibility,
	playground,
	hideSidebar,
	routePrefix = ''
}: CSDPageProps) => {
	const pageRef = useRef<HTMLDivElement>(null);
	const [links, setLinks] = useState<Array<CSDSidebarItem>>([]);

	useEffect(() => {
		const scrollId = window.location.hash;
		if (scrollId) {
			const scrollToElement = document.getElementById(scrollId.substring(1));
			if (scrollToElement) {
				scrollToElement.scrollIntoView({ block: 'start' });
			}
		}

		if (pageRef.current) {
			const linkElements = Array.from(pageRef.current.getElementsByClassName('csd-scrollspy'));

			const newLinks = linkElements.map((linkElement: Element) => ({
				name: linkElement.textContent,
				level: Number(linkElement.ariaLevel)
			})) as Array<CSDSidebarItem>;

			setLinks(newLinks);
		}
	}, []);

	const path = useLocation().pathname.split('/');
	const lastPath = path[path.length - 1];

	const activeTab = useMemo(() => {
		if (lastPath === 'playground' && playground) {
			return 'playground';
		}

		if (lastPath === 'accessibility' && accessibility) {
			return 'accessibility';
		}

		if (lastPath === 'props' && tables) {
			return 'props';
		}

		return 'examples';
	}, [lastPath, playground, accessibility, tables]);

	const renderChildren = () => (
		<CSDContent hidden={activeTab !== 'examples'}>
			{children}
		</CSDContent>
	);

	const renderProps = () => {
		if (!tables) {
			return null;
		}

		if (!Array.isArray(tables)) {
			return (
				<CSDContent hidden={activeTab !== 'props'}>
					<CSDTable {...tables} section />
				</CSDContent>
			);
		}

		return (
			<CSDContent hidden={activeTab !== 'props'}>
				{tables.map((table: any) => (
					<CSDTable key={table.name} {...table} section />
				))}
			</CSDContent>
		);
	};

	const renderAccessibility = () => {
		if (!accessibility) {
			return null;
		}

		return (
			<CSDContent hidden={activeTab !== 'accessibility'}>
				<CSDAccessibility {...accessibility} />
			</CSDContent>
		);
	};

	const renderPlayground = () => {
		if (!playground) {
			return null;
		}

		return (
			<CSDContent hidden={activeTab !== 'playground'}>
				{playground}
			</CSDContent>
		);
	};

	return (
		<>
			{!hideSidebar && (
				<CSDSidebar
					hashLinks
					data={links}
					routePrefix={`${routePrefix}/${CSDH.toKebabCase(title)}`}
					trackScroll={activeTab === 'examples'}
				/>
			)}
			<div ref={pageRef} id="csd-page" className="csd-page">
				<CSDHeader
					title={title}
					accessible={accessible}
					activeTab={activeTab}
					props={!!tables}
					accessibility={!!accessibility}
					playground={!!playground}
					routePrefix={`${routePrefix}/${CSDH.toKebabCase(title)}`}
				/>
				{renderChildren()}
				{renderProps()}
				{renderAccessibility()}
				{renderPlayground()}
			</div>
		</>
	);
};

export default CSDPage;
