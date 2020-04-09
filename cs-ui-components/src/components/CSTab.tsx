import React from 'react';
import classNames from 'classnames';

export interface CSTabProps {
	title: string;
	active: boolean;
	tabIndex: number;
	onClick: any;
}
class CSTab extends React.Component<CSTabProps> {

	render() {
		const tabClasses = classNames (
			'cs-tab',
			{
				'cs-tab-active': this.props.active
			}
		);

		return (
			<div
				className={tabClasses}
				onClick={event => {
					event.preventDefault();
					this.props.onClick(this.props.tabIndex);
				}}
			>
				{this.props.title}
			</div>
		);
	}
}

export default CSTab;
