import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSButton from '../CSButton';

export type CSSidebarOpensTo = 'left' | 'right';

export interface CSSidebarProps {
	[key: string]: any;
	className?: string;
	collapsible?: boolean;
	defaultClosed?: boolean;
	height?: string;
	id?: string;
	multipleTabs?: boolean;
	opensTo?: CSSidebarOpensTo;
	tabsPadding?: string;
	tabsWidth?: string;
	wholeSidebarClickable?: boolean;
}

export interface CSSidebarState {
	closed: boolean;
	activeTabIndex: number;
}

class CSSidebar extends React.Component<CSSidebarProps, CSSidebarState> {
	public static defaultProps = {
		defaultClosed: false,
		collapsible: true,
		multipleTabs: false,
		opensTo: 'right',
		wholeSidebarClickable: true,
	};

	constructor(props: CSSidebarProps) {
		super(props);

		this.state = {
			closed: this.props.defaultClosed,
			activeTabIndex: 0,
		};
	}

	handleTabClick = (index: number) => {
		this.setState((prevState) => ({
			activeTabIndex: index,
			closed: index === prevState.activeTabIndex && !prevState.closed && this.props.collapsible,
		}));
	}

	toggleClose = () => {
		this.setState((prevState) => ({
			closed: !prevState.closed,
		}));
	}

	handleSidebarClickToggle = () => {
		if (this.props.wholeSidebarClickable && this.state.closed && !this.props.multipleTabs) {
			this.toggleClose();
		}
	}

	render() {
		const {
			children,
			className,
			collapsible,
			defaultClosed,
			height,
			id,
			multipleTabs,
			opensTo,
			tabsPadding,
			tabsWidth,
			wholeSidebarClickable,
			...rest
		} = this.props;

		const sidebarClasses = classNames(
			'cs-sidebar',
			{
				'cs-sidebar-closed': this.state.closed,
				'cs-sidebar-multiple-tabs': multipleTabs,
				'cs-whole-sidebar-clickable': (wholeSidebarClickable && this.state.closed && !multipleTabs),
				'cs-sidebar-wrapper-left': opensTo === 'right',
				[`${className}`]: className,
			},
		);

		/** * takes child props title, iconName and index to display them through this component when sidebar is collapsed ** */
		const tabs: Array<any> = React.Children.map(children, (child: React.ReactElement, index) => {
			if (child) {
				return ({
					index,
					title: child.props.title,
					iconName: child.props.iconName,
					iconOrigin: child.props.iconOrigin,
					tabWidth: child.props.tabWidth,
				});
			}

			return null;
		});

		/** * pass isActiveTab status to child if that child is active ** */
		const renderChildrenWithProps = React.Children.map(children, (child, index) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					isActiveTab: (this.state.activeTabIndex === index && !this.state.closed),
				});
			}

			return null;
		});

		const getToggleIcon = () => {
			if (!this.state.closed) {
				return 'close';
			}

			if (tabs[0].iconName) {
				return tabs[0].iconName;
			}

			return 'assignment';
		};

		const getToggleIconOrigin = () => {
			if (!this.state.closed) {
				return 'slds';
			}

			return tabs[0].iconOrigin;
		};

		const showToggleBtn = collapsible && (
			(!this.state.closed && multipleTabs) || !multipleTabs
		);

		const style: CSSProperties = {
			'--cs-sidebar-height': height,
			'--cs-sidebar-tab-custom-width': tabs[this.state.activeTabIndex].tabWidth ? tabs[this.state.activeTabIndex].tabWidth : tabsWidth,
			'--cs-sidebar-tabs-custom-padding': tabsPadding,
		};

		return (
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
			<aside
				className={sidebarClasses}
				style={style}
				id={id}
				onClick={this.handleSidebarClickToggle}
				{...rest}
			>
				{showToggleBtn
					&& (
						<CSButton
							btnType="transparent"
							color="var(--cs-sidebar-toggle-btn-c)"
							className="cs-sidebar-toggle"
							label={this.state.closed ? 'expand sidebar' : 'collapse sidebar'}
							iconName={getToggleIcon()}
							iconOrigin={getToggleIconOrigin()}
							labelHidden
							size="small"
							onClick={this.toggleClose}
							ariaExpanded={!this.state.closed}
						/>
					)}
				{multipleTabs ? (
					<div className="cs-button-tabs-wrapper">
						{tabs.map((tab: any) => (
							<CSButton
								btnType="transparent"
								btnStyle="brand"
								borderRadius="0"
								labelHidden
								iconName={tab.iconName ? tab.iconName : 'assignment'}
								iconOrigin={tab.iconOrigin}
								label={tab.title}
								key={tab.index}
								className={this.state.activeTabIndex === tab.index && !this.state.closed ? 'cs-sidebar-tab-selected' : null}
								aria-current={this.state.activeTabIndex === tab.index}
								onClick={() => { this.handleTabClick(tab.index); }}
							/>
						))}
					</div>
				)
					: (
						<div className="cs-sidebar-single-tab-title-wrapper">
							<span
								className={this.state.closed ? 'cs-sidebar-tab-closed-title cs-visible' : 'cs-sidebar-tab-closed-title'}
							>
								{tabs[0].title}
							</span>
						</div>
					)}
				<div className="cs-sidebar-tab-content-wrapper">
					{renderChildrenWithProps}
				</div>
			</aside>
		);
	}
}

export default CSSidebar;
