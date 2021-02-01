import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';
import { CSTabGroupVariant } from './CSTabGroup';
import CSTooltip from './CSTooltip';

export type CSTabStatus = 'initial' | 'error' | 'warning' | 'success';
export interface CSTabProps {
	[key: string]: any;
	active?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	onClick?: (value?: any) => any;
	parentVariant?: CSTabGroupVariant;
	routerLink?: JSX.Element;
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
			onClick,
			parentVariant,
			routerLink,
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
				case (active && !tooltipContent):
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

		const componentProps = {
			'className': 'cs-tab',
			'aria-current': active,
			'aria-invalid': status === 'error',
			'disabled': disabled
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
			<li className={tabClasses} onClick={this.onClickHandler} id={id} {...rest}>
				<>
					{routerLink ?
						React.cloneElement(
							routerLink,
							componentProps,
							tabContent()
						) :
						React.createElement(
							'button',
							componentProps,
							tabContent()
						)
					}
				</>
			</li>
		);
	}
}

export default CSTab;
