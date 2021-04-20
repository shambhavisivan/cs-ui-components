import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSSidebarTabIconOrigin = 'slds' | 'cs';

export interface CSSidebarTabProps {
	[key: string]: any;
	className?: string;
	iconName?: string;
	iconOrigin?: CSSidebarTabIconOrigin;
	id?: string;
	noTabHeader?: boolean;
	subtitle?: string;
	tabPadding?: string;
	tabWidth?: string;
	title: string;
}

class CSSidebarTab extends React.Component<CSSidebarTabProps> {

	public static defaultProps = {
		iconOrigin: 'slds',
		noTabHeader: false
	};

	render() {
		const {
			isActiveTab,
			children,
			className,
			iconName,
			iconOrigin,
			id,
			noTabHeader,
			subtitle,
			tabPadding,
			tabWidth,
			title,
			...rest
		} = this.props;

		const style: CSSProperties = {
			'--cs-sidebar-tab-custom-padding': tabPadding
		};

		const sidebarTabClasses = classNames(
			'cs-sidebar-tab',
			{
				[`${className}`]: className
			}
		);

		return (
			<>
				{isActiveTab &&
					<div
						className={sidebarTabClasses}
						id={id}
						style={style}
						{...rest}
					>
						{!noTabHeader &&
							<div className="cs-sidebar-tab-header">
								<div className="cs-sidebar-tab-headings-wrapper">
									<span className="cs-sidebar-tab-title-wrapper">
										<h3 className="cs-sidebar-tab-title" title={title}>{title}</h3>
									</span>
									{subtitle &&
										<h4 className="cs-sidebar-tab-subtitle">{subtitle}</h4>
									}
								</div>
							</div>
						}
						<div className="cs-sidebar-tab-body">
							{children}
						</div>
					</div>
				}
			</>
		);
	}
}

export default CSSidebarTab;
