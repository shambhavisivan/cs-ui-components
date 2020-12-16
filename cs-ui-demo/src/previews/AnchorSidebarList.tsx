import React from 'react';
import classNames from 'classnames';

export interface AnchorSidebarListProps {
	anchorList: Array<any>;
	className?: string;
}

class AnchorSidebarList extends React.Component<AnchorSidebarListProps> {

	render() {
		const anchorListClasses = classNames(
			'components-list-wrapper sidebar-open', {
			[`${this.props.className}`]: this.props.className
		});
		return (
			<div className={anchorListClasses}>
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
