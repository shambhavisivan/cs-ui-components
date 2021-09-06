import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import {CSIcon, CSButton} from '@cloudsense/cs-ui-components';

import classNames from 'classnames';

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

export interface SidebarListState {
	sidebarOpen: boolean;
	sidebarHover: boolean;
	term: string;
}

class SidebarList extends React.Component<SidebarListProps, SidebarListState> {
	constructor(props: SidebarListProps) {
		super(props);

		this.clearSearch = this.clearSearch.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.searchHandler = this.searchHandler.bind(this);

		this.state = {
			sidebarOpen: true,
			sidebarHover: false,
			term: ''
		};
	}

	toggleSidebar() {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	}

	clearSearch() {
		this.setState({
			term: ''
		});
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
				{!this.state.sidebarOpen &&
					<CSButton
						iconName="rows"
						label="open"
						btnType="transparent"
						size="small"
						labelHidden
						borderRadius="50%"
						className="closed-sidebar-toggle"
						onClick={this.toggleSidebar}
					/>
				}
				<div className="primary-sidebar-wrapper">
					<div className={'primary-sidebar' + (this.state.sidebarOpen ? ' sidebar-open' : ' sidebar-closed')}>
						{this.props.search && (
							<div className="primary-sidebar-search">
								<CSIcon name="search" />
								<input placeholder="Search..." onChange={this.searchHandler} value={this.state.term}/>
								{this.state.term &&
									<CSButton
										label="clear"
										btnType="transparent"
										borderRadius="0.75rem"
										iconName="close"
										size="small"
										labelHidden
										onClick={this.clearSearch}
									/>
								}
							</div>
						)}
						{this.props.toggle && (
							<CSButton
								iconName={this.state.sidebarOpen ? 'back' : 'rows'}
								label={this.state.sidebarOpen ? 'close' : 'open'}
								btnType="transparent"
								size="small"
								labelHidden
								borderRadius="50%"
								className="sidebar-toggle"
								onClick={this.toggleSidebar}
							/>
						)}
						<div className="primary-sidebar-inner">
							<ul className="primary-sidebar-list">
								{this.props.sidebarList.filter(component => {
									const term = this.state.term.toLowerCase();
									return component.name.toLowerCase().includes(term) || !term;
								}).map(component => (
									<li className={component.name.includes('Getting Started') ? 'ui-component info' : 'ui-component'} title={component.name} key={component.name.split(' ').join('')}>
										<NavLink
											to={`${this.props.path}${component.name.split(' ').join('')}`}
											activeClassName="active-component"
										>
											<span className="ui-component-name">
												{component.name}
											</span>
											{component.isFormElement &&
												<CSIcon name="edit_form" color="var(--csd-sidebar-component-form-icon-fill)" title="form element" />
											}
										</NavLink>
									</li>)
								)}
							</ul>
						</div>
					</div>
				</div>
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
