import React, { useState, useEffect, CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon, { CSIconOrigin } from '../CSIcon';
import CSButton from '../CSButton';

export interface CSCardHeaderProps {
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
	[key: string]: any;
}

const CSCardHeader = ({
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
	showBorder = true,
	title,
	...rest
}: CSCardHeaderProps) => {
	const [expanded, setExpanded] = useState<boolean>(!collapsible || !defaultClosed);

	useEffect(() => {
		if (collapsible) setExpanded(!defaultClosed);
	}, [collapsible, defaultClosed]);

	const cardHeaderClasses = classNames(
		'cs-card-header',
		{
			'cs-card-header-with-border': showBorder,
			'cs-card-header-collapsible': collapsible,
			'cs-card-header-collapsed': !expanded,
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
					label={expanded ? 'Collapse' : 'Expand'}
					labelHidden
					btnType="transparent"
					btnStyle="brand"
					size="small"
					iconName="chevronright"
					iconRotate={expanded ? 90 : null}
					className="cs-card-toggle-btn"
					onClick={() => setExpanded((prevExpanded: boolean) => !prevExpanded)}
					ariaExpanded={expanded}
				/>
			) : null}
			{iconName && (
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
};

export default CSCardHeader;
