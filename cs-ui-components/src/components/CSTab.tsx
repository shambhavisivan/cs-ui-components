import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSTabProps {
	active?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	onClick?: (value?: any) => any;
	parentVariant?: string;
	status?: string;
	tabIcon?: string | undefined;
	title: string | undefined;
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

	onClickHandler = (event: React.MouseEvent<HTMLLIElement,  MouseEvent>) => {
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
				[`cs-tab-${this.props.status}`]: this.props.status,
				[`cs-tab-${this.props.parentVariant}`]: this.props.parentVariant,
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<li
				className={tabClasses}
				onClick={this.onClickHandler}
				id={this.props.id}
			>
				<button
					className="cs-tab-wrapper"
					aria-current={this.props.active}
					aria-invalid={this.props.status === 'error'}
					disabled={this.props.disabled}
				>
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
				</button>
			</li>
		);
	}
}

export default CSTab;
