import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import * as CSDH from '../demo-helpers';
import * as CSD from '../demo-components';

interface SidebarItem {
	name: string;
	component: React.ComponentType<any>;
	icon?: string;
}

export interface SidebarListProps {
	sidebarList: Array<SidebarItem>;
	path: string;
	customClass?: string;
}

const SidebarList = ({
	sidebarList,
	path,
	customClass
}: SidebarListProps) => {

	const componentPreviewClass = classNames(
		'components-preview',
		{
			[`${customClass}`]: customClass
		}
	);

	return (
		<>
			<CSD.Sidebar
				primary
				routePrefix={path}
				trackScroll={false}
				data={sidebarList.map((sidebarItem: SidebarItem) => ({
					name: sidebarItem.name,
					icon: sidebarItem.icon
				}))}
			/>
			<div className={componentPreviewClass}>
				{sidebarList.map(component => (
					<Route
						key={component.name}
						path={`/${path}/${CSDH.toKebabCase(component.name)}`}
						component={component.component}
					/>
				))}
			</div>
		</>
	);
};

export default SidebarList;
