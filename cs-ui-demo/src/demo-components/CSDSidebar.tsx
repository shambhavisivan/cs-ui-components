import React, { useLayoutEffect, useState, useRef } from 'react';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';
import * as CSDH from '../demo-helpers';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import { useSidebar } from '../context/SidebarContext';

export interface CSDSidebarItem {
	name: string;
	icon?: string;
}

export interface CSDSidebarProps {
	data: Array<CSDSidebarItem>;
	routePrefix?: string;
	trackScroll?: boolean;
	hashLinks?: boolean;
	primary?: boolean;
	spyOn?: string;
}

const CSDSidebar = ({
	data,
	routePrefix = '',
	trackScroll = true,
	hashLinks,
	primary,
	spyOn = '#csd-page'
}: CSDSidebarProps) => {
	const sidebarRef = useRef<HTMLUListElement>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [activeElementId, setActiveElementId] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const { primarySidebar, togglePrimarySidebar, secondarySidebar, toggleSecondarySidebar } = useSidebar();

	const open = primary ? primarySidebar : secondarySidebar;
	const toggle = primary ? togglePrimarySidebar : toggleSecondarySidebar;

	useLayoutEffect(() => {
		if (sidebarRef.current && trackScroll) {
			const pageElement = document.querySelector(spyOn);
			if (pageElement) {
				const handleScroll = (event: Event) => {
					if (timerRef.current) {
						clearTimeout(timerRef.current);
					}
					timerRef.current = setTimeout(() => {
						const observableElements = [...pageElement.getElementsByClassName('csd-scrollspy')];
						const newActiveElement = observableElements.reverse().find((element: Element) => {
							const target = event.target as HTMLElement;
							if (element?.getBoundingClientRect && target?.getBoundingClientRect) {
								return element.getBoundingClientRect().top <= target.getBoundingClientRect().top + 89;
							}
							return false;
						});
						setActiveElementId(newActiveElement?.id || null);
						const sidebar = sidebarRef.current;
						const newActiveAnchor = sidebar?.getElementsByClassName('csd-sidebar-list-item-active')[0];
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
				};

				pageElement.addEventListener('scroll', handleScroll);

				return () => pageElement.removeEventListener('scroll', handleScroll);
			}
		}
	}, [sidebarRef]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filterAnchors = (anchor: CSDSidebarItem) => anchor.name.toLowerCase().includes(searchTerm.toLowerCase());

	const renderLink = (anchor: CSDSidebarItem) => {
		const linkId = CSDH.toKebabCase(anchor.name);

		if (hashLinks) {
			return (
				<HashLink
					to={`/${routePrefix}#${linkId}`}
					className={linkId === activeElementId && trackScroll ? 'csd-sidebar-list-item-active' : undefined}
				>
					{anchor.name}
					{anchor.icon && (
						<CSIcon
							className="csd-sidebar-icon"
							color="white"
							name={anchor.icon}
						/>
					)}
				</HashLink>
			);
		}

		return (
			<NavLink
				activeClassName="csd-sidebar-list-item-active"
				to={`/${routePrefix}/${linkId}`}
			>
				{anchor.name}
				{anchor.icon && (
					<CSIcon
						className="csd-sidebar-icon"
						color="white"
						name={anchor.icon}
					/>
				)}
			</NavLink>
		);
	};

	const sidebarWrapperClasses = classNames(
		'csd-sidebar-wrapper',
		{
			'csd-sidebar-wrapper-closed': !open,
			'csd-sidebar-wrapper-primary': primary
		}
	);

	const sidebarToggleClasses = classNames(
		'csd-sidebar-toggle',
		{
			'csd-sidebar-toggle-closed': !open,
			'csd-sidebar-toggle-primary-open': primarySidebar,
			'csd-sidebar-toggle-secondary-open': secondarySidebar,
			'csd-sidebar-toggle-primary': primary
		}
	);

	return (
		<>
			<CSButton
				iconName={open ? 'back' : 'rows'}
				label={open ? 'Close sidebar' : 'Open sidebar'}
				btnType="transparent"
				size="small"
				labelHidden
				className={sidebarToggleClasses}
				onClick={toggle}
				borderRadius="50%"
			/>
			<nav className={sidebarWrapperClasses}>
				<div className="csd-sidebar">
					<div className="csd-sidebar-search">
						<CSIcon className="csd-sidebar-search-icon" name="search" />
						<input
							placeholder="Search..."
							onChange={handleChange}
							value={searchTerm}
						/>
						{searchTerm && (
							<CSButton
								className="csd-sidebar-clear"
								label="clear"
								btnType="transparent"
								iconName="close"
								size="small"
								labelHidden
								borderRadius="50%"
								onClick={() => setSearchTerm('')}
							/>
						)}
					</div>
					<ul className="csd-sidebar-list" ref={sidebarRef}>
						{data?.filter(filterAnchors).map((anchor: CSDSidebarItem) => (
							<li key={anchor.name} className="csd-sidebar-list-item">
								{renderLink(anchor)}
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default CSDSidebar;
