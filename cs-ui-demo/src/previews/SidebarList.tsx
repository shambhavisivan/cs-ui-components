import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import classNames from 'classnames';

interface SidebarItem {
	name: string;
	component: React.ComponentType<any>;
}

export interface SidebarListProps {
	sidebarList: Array<SidebarItem>;
	path: string;
	toggle?: boolean;
	search?: boolean;
	customClass?: string;
}

export interface SidebarListState {
	sidebarOpen: boolean;
	term: string;
}

class SidebarList extends React.Component<SidebarListProps, SidebarListState> {
	constructor(props: SidebarListProps) {
		super(props);

		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.searchHandler = this.searchHandler.bind(this);

		this.state = {
			sidebarOpen: true,
			term: ''
		};
	}

	toggleSidebar() {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	}

	searchHandler(event: any) {
		this.setState({
			term: event.target.value
		});
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
				<div className={'components-list-wrapper' + (this.state.sidebarOpen ? ' sidebar-open' : '')}>
					{this.props.search && this.state.sidebarOpen ?
						<div className="components-list-search">
							<input placeholder="Search..." onChange={this.searchHandler} value={this.state.term}/>
						</div>
						: null
					}
					{this.state.sidebarOpen ?
						<div className="components-list-inner">
							<ul className="components-list">
								{this.props.sidebarList.filter(component => {
									const term = this.state.term.toLowerCase();
									return component.name.toLowerCase().includes(term) || !term;
								}).map(component => (
									<li className="ui-component" key={component.name.split(' ').join('')}>
										<NavLink to={`${this.props.path}${component.name.split(' ').join('')}`}
											activeClassName="active-component">{component.name}</NavLink>
									</li>)
								)}
							</ul>
						</div>
						:
						null
					}
				</div>
				<div className="components-preview-wrapper">
					{null}
					<div className={componentPreviewClass}>
						{this.props.sidebarList.map(component => (
							<Route key={component.name} path={`${this.props.path}${component.name.split(' ').join('')}`} component={component.component}/>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default SidebarList;