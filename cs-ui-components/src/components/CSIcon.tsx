import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSIconOrigin = 'slds' | 'cs';

export interface CSIconProps {
	[key: string]: any;
	className?: string;
	color?: string;
	frame?: boolean;
	id?: string;
	name: string;
	origin?: CSIconOrigin;
	rotate?: number | string;
	size?: string;
	spin?: boolean;
	title?: string;
}

class CSIcon extends React.Component<CSIconProps> {
	render() {
		const {
			className,
			color,
			frame,
			id,
			name,
			origin,
			rotate,
			size,
			spin,
			title,
			...rest
		} = this.props;

		const styleClass = classNames(
			frame ? 'cs-icon-frame' : 'cs-icon',
			{
				'cs-icon-spin': spin,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--cs-icon-c': color,
			'--cs-main-header-neutral-icon': color,
			'--cs-icon-size': size,
			'--cs-icon-rotate': rotate ? `${rotate}deg` : null,
		};

		let prefix = 'cssfi-';
		if (origin === 'cs') {
			prefix = 'csi-';
		}
		return (
			<>
				{frame ? (
					<div
						className={styleClass}
						style={style}
						id={id}
						title={title}
						{...rest}
					>
						<svg
							className="cs-icon"
							aria-hidden="true"
						>
							<use href={`#${prefix}${name}`} />
						</svg>
					</div>
				) : (
					<svg
						className={styleClass}
						style={style}
						aria-hidden="true"
						id={id}
						{...rest}
					>
						<use href={`#${prefix}${name}`}>
							{title
									&& <title>{title}</title>}
						</use>
					</svg>
				)}
			</>
		);
	}
}

export default CSIcon;
