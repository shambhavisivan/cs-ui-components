import React, { CSSProperties } from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSSidebarListProps {
	className?: string;
	closed?: boolean;
	height?: string;
	id?: string;
	onClose?: boolean;
	static?: boolean;
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
	renderChildrenWithTabsAsProps() {
		return React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child as React.ReactElement<any>, {
				toggleActive: this.toggleActive,
				active: this.state.active
			});
		});
	}
	render() {
		const style: CSSProperties = {
			'--cs-sidebar-list-width': this.props.width,
			'--cs-sidebar-list-height': this.props.height
		};

		const sidebarListClasses = classNames(
			'cs-sidebar-list',
			{
				[`${this.props.className}`]: this.props.className,
				closed: this.state.closed
			}
		);

		return (
			<div className={sidebarListClasses} style={style} id={this.props.id}>
				<div className="cs-sidebar-list-item-top">
					{!this.props.static &&
						<CSButton
							className="cs-sidebar-list-close"
							onClick={this.onClose}
							label="alignment icon button"
							iconName="assignment"
							iconDisplay="icon-only"
							size="small"
						/>
					}
				</div>
				{!this.state.closed &&
					<ul>
						{this.renderChildrenWithTabsAsProps()}
					</ul>
				}
			</div>
		);
	}
}

export default CSSidebarList;
