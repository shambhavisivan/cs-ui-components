import React from "react";
import {Route, NavLink} from "react-router-dom";

import CSIcon from "../../src/components/CSIcon";
import classNames from 'classnames';

function searchingFor(term) {
	return function(x) {
		return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}

class SidebarList extends React.Component {
	constructor(props) {
		super(props);

		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.searchHandler= this.searchHandler.bind(this);

		this.state = {
			sidebarOpen: true,
			term: ''
		};
	}

	toggleSidebar() {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	};

	searchHandler(event) {
		this.setState({
			term: event.target.value
		});
	}

	render() {
		const { term } = this.state;
		let componentPreviewClass = classNames(
			"components-preview",
			{
				[`${this.props.customClass}`] : this.props.customClass
			}
		);

		return (
			<>
				<div className={"components-list-wrapper" + (this.state.sidebarOpen ? " sidebar-open" : "")}>
					{this.props.search && this.state.sidebarOpen ?
						<div className="components-list-search">
							<input placeholder="Search..." onChange={this.searchHandler} value={term}/>
						</div>
						: null
					}
					{this.state.sidebarOpen ?
						<div
							className="components-list-inner">
							<ul className="components-list">
								{this.props.sidebarList.filter(searchingFor(term)).map((component) => (
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
					{this.props.toggle ?
						<div className="sidebar-toggle" onClick={this.toggleSidebar}>
							<CSIcon name={this.state.sidebarOpen ? "close" : "rows"}/>
						</div>
						:
						null
					}
					<div className={componentPreviewClass}>
						{this.props.sidebarList.map((component) => (
							<Route key={component.name} path={`${this.props.path}${component.name.split(' ').join('')}`} component={component.component}/>
						))}
					</div>
				</div>
			</>
		)
	}
}

export default SidebarList;
