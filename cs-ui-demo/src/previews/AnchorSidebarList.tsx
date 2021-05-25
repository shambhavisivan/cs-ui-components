import React from 'react';
import classNames from 'classnames';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';

export interface AnchorSidebarListProps {
	anchorList: Array<any>;
	className?: string;
}

export interface AnchorSidebarListState {
	sidebar: boolean;
	searchTerm: string;
}

class AnchorSidebarList extends React.Component<AnchorSidebarListProps, AnchorSidebarListState> {
	constructor(props: AnchorSidebarListProps | Readonly<AnchorSidebarListProps>) {
		super(props);
		this.state = {
			sidebar: true,
			searchTerm: ''
		};
	}

	render() {
		const toggleSidebar = () => {
			this.setState({sidebar: !this.state.sidebar});
		};

		const clearSearchTerm = () => {
			this.setState({searchTerm: ''});
		};

		// needs search functionality

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({searchTerm: event.target.value});
		};

		const sidebarClasses = classNames(
			'prop-sidebar',
			this.props.className ?? this.props.className,
			{
				'quick-links-closed': !this.state.sidebar
			}
		);

		const nameClasses = classNames(
			'prop-name'
			// needs active styling
		);

		return (
			<div className={sidebarClasses}>
				<CSButton
					iconName={this.state.sidebar ? 'close' : 'rows'}
					label={this.state.sidebar ? 'close' : 'open'}
					btnType="transparent"
					size="small"
					labelHidden
					className="quick-links-toggle"
					onClick={toggleSidebar}
					borderRadius="50%"
				/>
				<div className="quick-links-search">
					<CSIcon name="search" />
					<input
						placeholder="Search..."
						onChange={handleChange}
						value={this.state.searchTerm}
					/>
					{this.state.searchTerm && (
						<CSButton
							label="clear"
							btnType="transparent"
							iconName="close"
							size="small"
							labelHidden
							onClick={clearSearchTerm}
						/>
					)}
				</div>
				<div className="prop-list">
					<div>
						{this.props.anchorList.map(anchor => (
							<div className="prop-group" key={anchor}>
								<h5 className={nameClasses} key={anchor.split(' ').join('')}>
									<a href={`#${anchor}`}>{anchor}</a>
								</h5>
							</div>)
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default AnchorSidebarList;
