import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSButton from './CSButton';

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
			closed: false,
		};
	}

	componentDidMount() {
		if (this.props.closed) {
			this.setState({
				closed: true,
			});
		}
	}

	onClose() {
		this.setState((prevState) => ({
			closed: !prevState.closed,
		}));
	}

	toggleActive(text: any) {
		this.setState({
			active: text,
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

		const renderChildrenWithTabsAsProps = React.Children.map(children, (child) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					toggleActive: this.toggleActive,
					active: this.state.active,
				});
			}

			return null;
		});

		const style: CSSProperties = {
			'--cs-sidebar-width': width,
			'--cs-sidebar-height': height,
		};

		const sidebarClasses = classNames(
			'cs-sidebar',
			{
				closed: this.state.closed,
				[`${className}`]: className,
			},
		);

		return (
			<nav className={sidebarClasses} style={style} id={id} {...rest}>
				<div className="cs-sidebar-item-top">
					{!fixed
						&& (
							<CSButton
								className="cs-sidebar-close"
								onClick={this.onClose}
								label="toggle sidebar"
								labelHidden
								iconName="assignment"
								size="small"
								ariaExpanded={!this.state.closed}
							/>
						)}
				</div>
				{!this.state.closed
					&& (
						<ul role="menu">
							{renderChildrenWithTabsAsProps}
						</ul>
					)}
			</nav>
		);
	}
}

export default CSSidebar;
