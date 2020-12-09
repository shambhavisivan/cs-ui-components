import React, { CSSProperties } from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSSidebarProps {
	[key: string]: any;
	className?: string;
	closed?: boolean;
	fixed?: boolean;
	height?: string;
	id?: string;
	onClose?: boolean;
	width?: string;
}

export interface CSSidebarState {
	active: string;
	closed: boolean;
}

class CSSidebar extends React.Component<CSSidebarProps, CSSidebarState> {
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
			'--cs-sidebar-width': width,
			'--cs-sidebar-height': height
		};

		const sidebarClasses = classNames(
			'cs-sidebar',
			{
				[`${className}`]: className,
				closed: this.state.closed
			}
		);

		return (
			<nav className={sidebarClasses} style={style} id={id} {...rest}>
				<div className="cs-sidebar-item-top">
					{!fixed &&
						<CSButton
							className="cs-sidebar-close"
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

export default CSSidebar;