import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSTabProps {
	active: boolean;
	onClick: any;
	parentVariant?: string;
	status?: string;
	tabIcon?: string;
	tabIndex: number;
	title: string;
}
class CSTab extends React.Component<CSTabProps> {

	statusIcons = () => {
		if (this.props.status === 'error' || this.props.status === 'warning') { return 'warning'; }
		if (this.props.status === 'success') { return 'check'; }
	}

	render() {
		const tabClasses = classNames (
			'cs-tab',
			{
				'cs-tab-active': this.props.active,
				[`cs-tab-${this.props.status}`]: this.props.status
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
				<div className="cs-tab-wrapper">
					{(this.props.active && this.props.parentVariant === 'large') ?
						<CSIcon name="record" /> :
						((this.props.tabIcon || this.props.status) ?
							<CSIcon
								name={
									this.props.status ?
									this.statusIcons() :
									this.props.tabIcon
								}
							/> :
							null
						)
					}
					{this.props.title}
				</div>
			</div>
		);
	}
}

export default CSTab;
