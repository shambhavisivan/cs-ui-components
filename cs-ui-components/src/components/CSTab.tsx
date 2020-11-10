import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';
import { CSTabGroupVariant } from './CSTabGroup';
import CSTooltip from './CSTooltip';

export type CSTabStatus = 'initial' | 'error' | 'warning' | 'success';
export interface CSTabProps {
	active?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	onClick?: (value?: any) => any;
	parentVariant?: CSTabGroupVariant;
	status?: CSTabStatus;
	tabIcon?: string | undefined;
	title: string | undefined;
	tooltipContent?: string;
}

class CSTab extends React.Component<CSTabProps> {

	public static defaultProps = {
		status: 'initial'
	};

	onClickHandler = (event: React.MouseEvent<HTMLLIElement,  MouseEvent>) => {
		event.preventDefault();
		if (this.props.onClick) {
			this.props.onClick();
		}
	}

	render() {
		const { active, className, disabled, id, parentVariant, status, tabIcon, title, tooltipContent } = this.props;
		const tabClasses = classNames (
			'cs-tab-wrapper',
			{
				'cs-tab-active': active,
				[`cs-tab-wrapper-${status}`]: status,
				[`cs-tab-wrapper-${parentVariant}`]: parentVariant,
				[`${className}`]: className
			}
		);

		const getStatusIcon = () => {
			switch (true) {
				case (active):
					return 'record';
				case (!!tabIcon):
					return tabIcon;
				case (!!tooltipContent):
					return; // If tooltipContent is provided, icon will come OOTB from CSTooltip
				case (status === 'error' || status === 'warning'):
					return 'warning';
				case (status === 'success'):
					return 'check';
				default:
					return 'routing_offline';
			}
		};

		const renderTabIcon = () => {
			return tabIcon || !(parentVariant === 'normal' && status === 'initial');
		};

		return (
			<li className={tabClasses} onClick={this.onClickHandler} id={id}>
				<button
					className="cs-tab"
					aria-current={active}
					aria-invalid={status === 'error'}
					disabled={disabled}
				>
					{tooltipContent ?
						<CSTooltip
							content={tooltipContent}
							iconName={getStatusIcon()}
							variant={status === 'initial' ? 'info' : status}
							iconSize={'medium'}
						/>
						: renderTabIcon() ? <CSIcon name={getStatusIcon()}/> : null
					}
					<span className="cs-tab-title">{title}</span>
					{this.props.children}
				</button>
			</li>
		);
	}
}

export default CSTab;
