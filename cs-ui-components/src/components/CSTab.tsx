import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from './CSIcon';
import { CSTabGroupVariant } from './CSTabGroup';
import CSTooltip from './CSTooltip';

export type CSTabStatus = 'initial' | 'error' | 'warning' | 'success';
export interface CSTabProps {
	[key: string]: any;
	active?: boolean;
	className?: string;
	disabled?: boolean;
	iconOrigin?: CSIconOrigin;
	id?: string;
	onClick?: (value?: any) => any;
	parentVariant?: CSTabGroupVariant;
	routerLink?: JSX.Element;
	status?: CSTabStatus;
	tabIcon?: string | undefined;
	name: string | undefined;
	tooltipContent?: string;
	width?: string;
}

class CSTab extends React.Component<CSTabProps> {
	public static defaultProps = {
		status: 'initial',
	};

	onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (!this.props.routerLink) event.preventDefault();
		this.props.onClick?.();
	}

	render() {
		const {
			active,
			children,
			className,
			disabled,
			iconOrigin,
			id,
			onClick,
			parentVariant,
			routerLink,
			status,
			tabIcon,
			name,
			tooltipContent,
			width,
			...rest
		} = this.props;

		const tabClasses = classNames(
			'cs-tab-wrapper',
			{
				'cs-tab-active': active,
				[`cs-tab-wrapper-${status}`]: status,
				[`cs-tab-wrapper-${parentVariant}`]: parentVariant,
				[`${className}`]: className,
			},
		);

		const style: CSSProperties = {
			'--cs-tab-width': width,
		};

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

		const renderTabIcon = () => tabIcon || !(parentVariant === 'normal' && status === 'initial');

		const componentProps = {
			className: 'cs-tab',
			'aria-current': active,
			'aria-invalid': status === 'error',
			disabled,
			onClick: this.onClickHandler,
			style,
		};

		const renderTabContent = () => {
			if (!tooltipContent && !renderTabIcon()) return null;
			if (tooltipContent) {
				return (
					<CSTooltip
						content={tooltipContent}
						iconName={getStatusIcon()}
						variant={status === 'initial' ? 'info' : status}
						iconSize="medium"
						iconOrigin={iconOrigin}
					/>
				);
			}
			return (<CSIcon name={getStatusIcon()} origin={iconOrigin} size="0.875rem" />);
		};

		const tabContent = () => (
			<>
				{renderTabContent()}
				<span className="cs-tab-name">{name}</span>
				{children}
			</>
		);

		return (
			<li
				id={id}
				className={tabClasses}
				{...rest}
			>
				<>
					{routerLink
						? React.cloneElement(
							routerLink,
							componentProps,
							tabContent(),
						)
						: React.createElement(
							'button',
							componentProps,
							tabContent(),
						)}
				</>
			</li>
		);
	}
}

export default CSTab;
