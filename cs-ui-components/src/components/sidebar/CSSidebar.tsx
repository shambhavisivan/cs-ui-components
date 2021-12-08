import React, { useState, CSSProperties } from 'react';
import classNames from 'classnames';
import CSButton from '../CSButton';

export type CSSidebarOpensTo = 'left' | 'right';

export interface CSSidebarProps {
	className?: string;
	expanded?: boolean;
	height?: string;
	id?: string;
	multipleTabs?: boolean;
	onToggle?: () => void;
	opensTo?: CSSidebarOpensTo;
	tabsPadding?: string;
	tabsWidth?: string;
	wholeSidebarClickable?: boolean;
	[key: string]: any;
}

const CSSidebar = ({
	children,
	className,
	expanded = false,
	height,
	id,
	multipleTabs = false,
	onToggle,
	opensTo = 'right',
	tabsPadding,
	tabsWidth,
	wholeSidebarClickable = true,
	...rest
}: CSSidebarProps) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const handleTabClick = (index: number) => {
		if (index === activeTabIndex || !expanded) onToggle?.();
		setActiveTabIndex(index);
	};

	const handleSidebarClickToggle = () => {
		if (wholeSidebarClickable && !expanded && !multipleTabs) onToggle?.();
	};

	const handleButtonClickToggle = () => {
		if (expanded || !wholeSidebarClickable) onToggle?.();
	};

	const sidebarClasses = classNames(
		'cs-sidebar',
		{
			'cs-sidebar-closed': !expanded,
			'cs-sidebar-multiple-tabs': multipleTabs,
			'cs-whole-sidebar-clickable': (onToggle && wholeSidebarClickable && !expanded && !multipleTabs),
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
				isActiveTab: (activeTabIndex === index && expanded),
			});
		}

		return null;
	});

	const getToggleIcon = () => {
		if (expanded) return 'close';
		if (tabs && tabs[0].iconName) return tabs[0].iconName;
		return 'rows';
	};

	const getToggleIconOrigin = () => {
		if (expanded) return 'slds';
		if (!tabs) return null;
		return tabs[0].iconOrigin;
	};

	const style: CSSProperties = {
		'--cs-sidebar-height': height,
		'--cs-sidebar-tab-custom-width': (tabs && tabs[activeTabIndex].tabWidth) ? tabs[activeTabIndex].tabWidth : tabsWidth,
		'--cs-sidebar-tabs-custom-padding': tabsPadding,
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
		<aside
			className={sidebarClasses}
			style={style}
			id={id}
			onClick={handleSidebarClickToggle}
			{...rest}
		>
			{((expanded && onToggle) || (!expanded && !multipleTabs)) && (
				<CSButton
					btnStyle="brand"
					btnType="transparent"
					color={expanded ? 'var(--cs-sidebar-toggle-btn-c)' : null}
					className="cs-sidebar-toggle"
					label={expanded ? 'Expand sidebar' : 'Collapse sidebar'}
					iconName={getToggleIcon()}
					iconOrigin={getToggleIconOrigin()}
					labelHidden
					size="small"
					onClick={handleButtonClickToggle}
					ariaExpanded={expanded}
					disabled={!onToggle}
				/>
			)}
			{multipleTabs ? (
				<div className="cs-button-tabs-wrapper">
					{tabs?.map((tab: any) => (
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							borderRadius="0"
							labelHidden
							iconName={tab.iconName ? tab.iconName : 'rows'}
							iconOrigin={tab.iconOrigin}
							label={tab.title}
							key={tab.index}
							className={activeTabIndex === tab.index && expanded ? 'cs-sidebar-tab-selected' : null}
							aria-current={activeTabIndex === tab.index}
							onClick={() => handleTabClick(tab.index)}
						/>
					))}
				</div>
			) : (
				<div className="cs-sidebar-single-tab-title-wrapper">
					<span className={`cs-sidebar-tab-closed-title${expanded ? '' : ' cs-visible'}`}>
						{tabs && (
							tabs[0].title
						)}
					</span>
				</div>
			)}
			<div className="cs-sidebar-tab-content-wrapper">
				{renderChildrenWithProps}
			</div>
		</aside>
	);
};

export default CSSidebar;
