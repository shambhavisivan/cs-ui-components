import React, {useLayoutEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';
import { HashLink } from 'react-router-hash-link';
import { useQuickLinks } from '../context/QuickLinksContext';
import { getSlug } from './helpers';

export interface AnchorSidebarListProps {
	anchorList: Array<string>;
	secondary?: boolean;
	className?: string;
	spyOn?: string;
}

const AnchorSidebarList: React.FC<AnchorSidebarListProps> = ({
	anchorList,
	secondary,
	className,
	spyOn
}) => {
	const [activeElement, setActiveElement] = useState<Element | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const sidebarRef = useRef<HTMLDivElement>(null);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const { quickLinks, toggleQuickLinks } = useQuickLinks();

	useLayoutEffect(() => {
		if (spyOn && sidebarRef.current) {
			const contentSection = document.querySelectorAll(spyOn)[0];
			if (contentSection) {
				contentSection.addEventListener('scroll', (event: Event) => {
					if (timer.current) {
						clearTimeout(timer.current);
					}
					timer.current = setTimeout(() => {
						const observableElements = [...contentSection.querySelectorAll('h2')];
						const newActiveElement = observableElements.reverse().find((element: Element) => {
							const target = event.target as HTMLElement;
							if (element?.getBoundingClientRect && target?.getBoundingClientRect) {
								return element.getBoundingClientRect().top <= target.getBoundingClientRect().top + 1;
							}
							return false;
						});
						setActiveElement(newActiveElement as Element);
						const sidebar = sidebarRef.current;
						const newActiveAnchor = sidebar?.getElementsByClassName('active')[0];
						if (newActiveAnchor?.getBoundingClientRect && sidebar?.getBoundingClientRect) {
							const anchorTop = newActiveAnchor.getBoundingClientRect().top;
							const sidebarTop = sidebar.getBoundingClientRect().top;
							const anchorBottom = newActiveAnchor.getBoundingClientRect().bottom;
							const sidebarBottom = sidebar.getBoundingClientRect().bottom;
							if (anchorTop < sidebarTop) {
								sidebar.scrollBy({
									top: anchorTop - sidebarTop,
									behavior: 'smooth'
								});
							}
							if (anchorBottom > sidebarBottom) {
								sidebar.scrollBy({
									top: anchorBottom - sidebarBottom,
									behavior: 'smooth'
								});
							}
						}
					}, 25);
				});
			}
		}
	}, [sidebarRef, spyOn]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filterAnchors = (anchor: string) => anchor.toLowerCase().includes(searchTerm.toLowerCase());

	const sidebarClasses = classNames(
		'prop-sidebar',
		{
			'quick-links-closed': !quickLinks && secondary,
			[`${className}`]: className
		}
	);

	return (
		<div className={sidebarClasses}>
			{secondary && (
				<CSButton
					iconName={quickLinks ? 'close' : 'rows'}
					label={quickLinks ? 'close' : 'open'}
					btnType="transparent"
					size="small"
					labelHidden
					className="quick-links-toggle"
					onClick={toggleQuickLinks}
					borderRadius="50%"
				/>
			)}
			<div className="quick-links-search">
				<CSIcon name="search" />
				<input
					placeholder="Search..."
					onChange={handleChange}
					value={searchTerm}
				/>
				{searchTerm && (
					<CSButton
						label="clear"
						btnType="transparent"
						iconName="close"
						size="small"
						labelHidden
						onClick={() => setSearchTerm('')}
					/>
				)}
			</div>
			<div className="prop-list" ref={sidebarRef}>
				<div>
					{anchorList.filter(filterAnchors).map((anchor: string) => {
						const link = getSlug(anchor);
						const nameClasses = classNames(
							'prop-name',
							{
								active: link === activeElement?.id
							}
						);
						return (
							<div className="prop-group" key={anchor}>
								<h5 className={nameClasses}>
									<HashLink to={`#${link}`}>{anchor}</HashLink>
								</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AnchorSidebarList;
