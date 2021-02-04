import React from 'react';
import CSIcon, { CSIconOrigin } from '../CSIcon';
import classNames from 'classnames';
import CSButton from '../CSButton';

export interface CSCardHeaderProps {
	[key: string]: any;
	className?: string;
	collapsible?: boolean;
	iconColor?: string;
	iconFrame?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	id?: string;
	showBorder?: boolean;
	title: string;
}

export interface CSCardHeaderState {
	collapsed: boolean;
}

class CSCardHeader extends React.Component<CSCardHeaderProps, CSCardHeaderState> {

	public static defaultProps = {
		showBorder: true
	};

	constructor(props: CSCardHeaderProps) {
		super(props);
		this.state = {
			collapsed: false
		};
	}

	handleCollapse = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		const {
			className,
			collapsible,
			iconColor,
			iconFrame,
			iconName,
			iconOrigin,
			id,
			showBorder,
			title,
			...rest
		} = this.props;

		const cardHeaderClasses = classNames(
			'cs-card-header', {
			'cs-card-header-with-border': showBorder,
			'cs-card-header-collapsible': this.props.collapsible,
			'cs-card-header-collapsed': this.state.collapsed
		});
		return (
			<header
				className={cardHeaderClasses}
				id={id}
				{...rest}
			>
				{this.props.collapsible ? (
					<CSButton
						label={this.state.collapsed ? 'expand' : 'collapse'}
						btnType="transparent"
						btnStyle="brand"
						size="small"
						iconDisplay="icon-only"
						iconName="chevronright"
						iconRotate={this.state.collapsed ? null : '90'}
						className="cs-card-button"
						onClick={this.handleCollapse}
					/>
				) : null}
				{iconName &&
					<span className="cs-card-header-icon">
						<CSIcon
							name={iconName}
							size="1.5rem"
							color={iconColor}
							frame={iconFrame}
							origin={iconOrigin}
						/>
					</span>
				}
				<h2 className="cs-card-header-title">{title}</h2>
			</header>
		);
	}
}

export default CSCardHeader;
