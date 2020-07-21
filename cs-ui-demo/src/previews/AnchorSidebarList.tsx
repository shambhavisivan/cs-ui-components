import React from 'react';

export interface AnchorSidebarListProps {
	anchorList: Array<any>;
}

class AnchorSidebarList extends React.Component<AnchorSidebarListProps> {

	render() {
		return (
			<div className={'components-list-wrapper sidebar-open'}>
				<div className="components-list-inner">
					<ul className="components-list">
						{this.props.anchorList.map(anchor => (
							<li className="ui-component" key={anchor.split(' ').join('')}>
								<a href={`#${anchor}`}>{anchor}</a>
							</li>)
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default AnchorSidebarList;
