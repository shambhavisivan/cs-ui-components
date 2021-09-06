import React from 'react';
import {Route} from 'react-router-dom';
import classNames from 'classnames';
import PrimarySidebar from './PrimarySidebar';

interface SidebarItem {
	name: string;
	component: React.ComponentType<any>;
	isFormElement?: boolean;
}

export interface SidebarListProps {
	sidebarList: Array<SidebarItem>;
	path: string;
	toggle?: boolean;
	search?: boolean;
	customClass?: string;
}

class SidebarList extends React.Component<SidebarListProps> {
	constructor(props: SidebarListProps) {
		super(props);
	}

	render() {

		const componentPreviewClass = classNames(
			'components-preview',
			{
				[`${this.props.customClass}`] : this.props.customClass
			}
		);

		return (
			<>
				<PrimarySidebar path={this.props.path} sidebarList={this.props.sidebarList} toggle search />
				<div className={componentPreviewClass}>
					{this.props.sidebarList.map(component => (
						<Route key={component.name} path={`${this.props.path}${component.name.split(' ').join('')}`} component={component.component} />
					))}
				</div>
			</>
		);
	}
}

export default SidebarList;
