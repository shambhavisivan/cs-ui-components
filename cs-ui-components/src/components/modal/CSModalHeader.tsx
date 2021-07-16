import React from 'react';
import classNames from 'classnames';

export interface CSModalHeaderProps {
	[key: string]: any;
	className?: string;
	id?: string;
	subtitle?: string;
	title?: string;
	titleId?: string;
}

class CSModalHeader extends React.Component<CSModalHeaderProps> {
	render() {
		const {
			children,
			className,
			id,
			subtitle,
			title,
			titleId,
			...rest
		} = this.props;

		const modalHeaderClasses = classNames(
			'cs-modal-header',
			{
				[`${className}`]: className,
			},
		);

		return (
			<header
				className={modalHeaderClasses}
				id={id}
				{...rest}
			>
				{title
					&& <h3 className="cs-modal-header-title" id={titleId}>{title}</h3>}
				{subtitle
					&& <h4 className="cs-modal-header-subtitle">{subtitle}</h4>}
				{children}
			</header>
		);
	}
}

export default CSModalHeader;
