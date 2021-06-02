import React, { useState } from 'react';
import classNames from 'classnames';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';
import { HashLink } from 'react-router-hash-link';
import { useQuickLinks } from '../context/QuickLinksContext';
import { getSlug } from './helpers';

export interface AnchorSidebarListProps {
	anchorList: Array<string>;
	secondary?: boolean;
	className?: string;
}

const AnchorSidebarList: React.FC<AnchorSidebarListProps> = ({
	anchorList,
	secondary,
	className
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const { quickLinks, toggleQuickLinks } = useQuickLinks();

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

	const nameClasses = classNames(
		'prop-name'
		// needs active styling
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
			<div className="prop-list">
				<div>
					{anchorList.filter(filterAnchors).map((anchor: string) => (
						<div className="prop-group" key={anchor}>
							<h5 className={nameClasses}>
								<HashLink to={`#${getSlug(anchor)}`}>{anchor}</HashLink>
							</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AnchorSidebarList;
