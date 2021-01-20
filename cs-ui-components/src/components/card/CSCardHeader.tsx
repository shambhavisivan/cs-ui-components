import React from 'react';
import CSIcon, { CSIconOrigin } from '../CSIcon';
import classNames from 'classnames';

export interface CSCardHeaderProps {
	[key: string]: any;
	className?: string;
	iconColor?: string;
	iconFrame?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	id?: string;
	showBorder?: boolean;
	title: string;
}

class CSCardHeader extends React.Component<CSCardHeaderProps> {

	public static defaultProps = {
		showBorder: true
	};

	render() {
		const {
			className,
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
			'cs-card-header-with-border': showBorder
		});
		return (
			<header
				className={cardHeaderClasses}
				id={id}
				{...rest}
			>
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
