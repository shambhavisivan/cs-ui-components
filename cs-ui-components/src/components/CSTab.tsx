import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';
import { CSTabGroupVariant } from './CSTabGroup';
import CSTooltip from './CSTooltip';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export type CSTabStatus = 'initial' | 'error' | 'warning' | 'success';
export interface CSTabProps {
	[key: string]: any;
	active?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	navLink?: any;
	navLinkClass?: string;
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

	onClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		event.preventDefault();
		if (this.props.onClick) {
			this.props.onClick();
		}
	}

	render() {
		const {
			active,
			children,
			className,
			disabled,
			id,
			parentVariant,
			status,
			tabIcon,
			title,
			tooltipContent,
			...rest
		} = this.props;

		const tabClasses = classNames(
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

		const tabContent = () => {
			return (
				<>
					{tooltipContent ?
						<CSTooltip
							content={tooltipContent}
							iconName={getStatusIcon()}
							variant={status === 'initial' ? 'info' : status}
							iconSize={'medium'}
						/>
						: renderTabIcon() ? <CSIcon name={getStatusIcon()} /> : null
					}
					<span className="cs-tab-title">{title}</span>
					{children}
				</>
			);
		};

		return (
			<li className={tabClasses} onClick={this.onClickHandler} id={id}>
				{this.props.navLink ? (
					<Router>
						<NavLink
							to={this.props.navLink}
							className="cs-tab"
							activeClassName={this.props.navLinkClass}
							aria-current={active}
							aria-invalid={status === 'error'}
							{...rest}
						>
							{tabContent()}
						</NavLink>
					</Router>
				) : (
						<button
							className="cs-tab"
							aria-current={active}
							aria-invalid={status === 'error'}
							disabled={disabled}
							{...rest}
						>
							{tabContent()}
						</button>
					)}
			</li>
		);
	}
}

export default CSTab;
