import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from '../CSIcon';
import CSButton from '../CSButton';

export interface CSCardHeaderProps {
	[key: string]: any;
	bgColor?: string;
	className?: string;
	collapsible?: boolean;
	defaultClosed?: boolean;
	iconColor?: string;
	iconFrame?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	id?: string;
	padding?: string;
	showBorder?: boolean;
	title?: string;
}

export interface CSCardHeaderState {
	collapsed: boolean;
}

class CSCardHeader extends React.Component<CSCardHeaderProps, CSCardHeaderState> {
	public static defaultProps = {
		showBorder: true,
	};

	constructor(props: CSCardHeaderProps) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	componentDidMount() {
		const { defaultClosed, collapsible } = this.props;
		if (defaultClosed && collapsible) {
			this.setState({ collapsed: true });
		}
	}

	componentDidUpdate(prevProps: CSCardHeaderProps) {
		const { defaultClosed, collapsible } = this.props;
		if (prevProps.defaultClosed !== defaultClosed && collapsible) {
			this.updateDefaultClosed();
		}
	}

	handleCollapse = () => {
		this.setState((prevState) => ({
			collapsed: !prevState.collapsed,
		}));
	}

	updateDefaultClosed = () => {
		const { defaultClosed } = this.props;
		this.setState({ collapsed: defaultClosed });
	}

	render() {
		const {
			bgColor,
			children,
			className,
			collapsible,
			defaultClosed,
			iconColor,
			iconFrame,
			iconName,
			iconOrigin,
			id,
			padding,
			showBorder,
			title,
			...rest
		} = this.props;

		const {
			collapsed,
		} = this.state;

		const cardHeaderClasses = classNames(
			'cs-card-header',
			{
				'cs-card-header-with-border': showBorder,
				'cs-card-header-collapsible': collapsible,
				'cs-card-header-collapsed': collapsed,
				[`${className}`]: className,
			},
		);

		const cardHeaderStyles: CSSProperties = {
			'--cs-card-header-padding': padding,
			'--cs-card-header-bg-color': bgColor,
		};

		return (
			<header
				className={cardHeaderClasses}
				id={id}
				style={cardHeaderStyles}
				{...rest}
			>
				{collapsible ? (
					<CSButton
						label={collapsed ? 'expand' : 'collapse'}
						btnType="transparent"
						btnStyle="brand"
						size="small"
						labelHidden
						iconName="chevronright"
						iconRotate={collapsed ? 0 : 90}
						className="cs-card-button"
						onClick={this.handleCollapse}
					/>
				) : null}
				{iconName
					&& (
						<span className="cs-card-header-icon">
							<CSIcon
								name={iconName}
								size="1.5rem"
								color={iconColor}
								frame={iconFrame}
								origin={iconOrigin}
							/>
						</span>
					)}
				<h2 className="cs-card-header-title">{title}</h2>
				{children}
			</header>
		);
	}
}

export default CSCardHeader;
