import React, { CSSProperties } from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSSidebarListProps {
	[key: string]: any;
	className?: string;
	closed?: boolean;
	fixed?: boolean;
	height?: string;
	id?: string;
	onClose?: boolean;
	width?: string;
}

export interface CSSidebarListState {
	active: string;
	closed: boolean;
}

class CSSidebarList extends React.Component<CSSidebarListProps, CSSidebarListState> {
	constructor(props: any) {
		super(props);

		this.toggleActive = this.toggleActive.bind(this);
		this.onClose = this.onClose.bind(this);

		this.state = {
			active: '',
			closed: false
		};
	}
	componentDidMount() {
		if (this.props.closed) {
			this.setState({
				closed: true
			});
		}
	}
	toggleActive(text: any) {
		this.setState({
			active: text
		});
	}
	onClose() {
		this.setState({
			closed: !this.state.closed
		});
	}
	render() {
		const {
			children,
			className,
			closed,
			fixed,
			height,
			id,
			onClose,
			width,
			...rest
		} = this.props;

		const renderChildrenWithTabsAsProps = React.Children.map(children, (child, index) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					toggleActive: this.toggleActive,
					active: this.state.active
				});
			}
		});

		const style: CSSProperties = {
			'--cs-sidebar-list-width': width,
			'--cs-sidebar-list-height': height
		};

		const sidebarListClasses = classNames(
			'cs-sidebar-list',
			{
				[`${className}`]: className,
				closed: this.state.closed
			}
		);

		return (
			<nav className={sidebarListClasses} style={style} id={id} {...rest}>
				<div className="cs-sidebar-list-item-top">
					{!fixed &&
						<CSButton
							className="cs-sidebar-list-close"
							onClick={this.onClose}
							label="toggle sidebar"
							iconName="assignment"
							iconDisplay="icon-only"
							size="small"
							ariaExpanded={!this.state.closed}
						/>
					}
				</div>
				{!this.state.closed &&
					<ul role="menu">
						{renderChildrenWithTabsAsProps}
					</ul>
				}
			</nav>
		);
	}
}

export default CSSidebarList;
