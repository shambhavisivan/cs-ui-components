import React, { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';
import { HashLink } from 'react-router-hash-link';
import { useSidebar } from '../context/SidebarContext';
import { getSlug } from './helpers';

export type SecondarySidebarColor = 'purple' | 'black';

export interface SecondarySidebarProps {
	anchorList?: Array<string>;
	children?: React.ReactElement;
	className?: string;
	collapsible?: boolean;
	color?: SecondarySidebarColor;
	preview?: boolean;
	searchPlaceholder?: string;
	spyOn?: string;
}

const SecondarySidebar: React.FC<SecondarySidebarProps> = ({
	anchorList,
	children = <div/>,
	className,
	collapsible,
	color = 'purple',
	preview,
	searchPlaceholder,
	spyOn
}) => {
	const [activeElement, setActiveElement] = useState<Element | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const sidebarRef = useRef<HTMLDivElement>(null);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const { primarySidebar, secondarySidebar, toggleSecondarySidebar } = useSidebar();

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

	const sidebarWrapperClasses = classNames(
		'sidebar-wrapper secondary',
		{
			'sidebar-wrapper-closed': !secondarySidebar && collapsible
		}
	);

	const sidebarClasses = classNames(
		'sidebar',
		{
			[`sidebar-${color}`] : color,
			[`${className}`]: className
		}
	);

	const sidebarToggleClasses = classNames(
		'csd-sidebar-toggle',
		{
			'csd-sidebar-toggle-closed': !secondarySidebar,
			'csd-sidebar-toggle-primary-open': primarySidebar,
			'csd-sidebar-toggle-secondary-open': secondarySidebar
		}
	);

	return (
		<>
			<CSButton
				iconName={secondarySidebar ? 'back' : 'rows'}
				label={secondarySidebar ? 'Close sidebar' : 'Open sidebar'}
				btnType="transparent"
				size="small"
				labelHidden
				className={sidebarToggleClasses}
				onClick={toggleSecondarySidebar}
				borderRadius="50%"
			/>
			<div className={sidebarWrapperClasses}>
				<div className={sidebarClasses}>
					<div className="sidebar-search">
						<CSIcon name="search" />
						<input
							placeholder={searchPlaceholder ? searchPlaceholder : 'Search...'}
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
								borderRadius="50%"
								onClick={() => setSearchTerm('')}
							/>
						)}
					</div>
					{preview ? (
						React.Children.map(children, child => {
							return React.cloneElement(child, {
								searchTerm
							});
						})
					) : (
						<div className="prop-list" ref={sidebarRef}>
							<div>
								{anchorList?.filter(filterAnchors).map((anchor: string) => {
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
					)}
				</div>
			</div>
		</>
	);
};

export default SecondarySidebar;
