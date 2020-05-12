import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSTabProps {
	active?: boolean;
	disabled?: boolean;
	onClick?: (value?: any) => any;
	parentVariant?: string;
	status?: string;
	tabIcon?: string | undefined;
	title: string;
}

class CSTab extends React.Component<CSTabProps> {

	public static defaultProps = {
		status: 'initial'
	};

	statusIcons = () => {
		if (this.props.status === 'error' || this.props.status === 'warning') {
			return 'warning';
		} else if (this.props.status === 'success') {
			return 'check';
		} else if (this.props.status === 'initial' || this.props.status === 'disabled') {
			return 'routing_offline';
		}
	}

	onClickHandler = (event: React.MouseEvent<HTMLDivElement,  MouseEvent>) => {
		event.preventDefault();
		if (this.props.onClick) {
			this.props.onClick();
		}
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
				onClick={this.onClickHandler}
				aria-current={this.props.active}
				aria-invalid={this.props.status === 'error'}
			>
				<div className="cs-tab-wrapper">
					{(this.props.active && this.props.parentVariant === 'large') ?
						<CSIcon name="record" /> :
							(this.props.tabIcon ||
							(this.props.status && this.props.parentVariant !== 'normal') ?
								<CSIcon
									name={
										this.props.tabIcon ?
										this.props.tabIcon :
										this.statusIcons()
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
