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
	rotate?: string;
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
			'cs-icon',
			{
				[`cs-icon-rotate-${rotate}`]: rotate,
				'cs-icon-spin': spin,
				[`${className}`]: className
			}
		);
		const style: CSSProperties = {
			'--cs-icon-c': color,
			'--cs-main-header-neutral-icon': color,
			'--cs-icon-size': size
		};

		let prefix = 'cssfi-';
		if (origin === 'cs') {
			prefix = 'csi-';
		}
		return (
			<>
				{frame ? (
					<div
						className="cs-icon-frame"
						style={style}
						id={id}
						title={title}
						{...rest}
					>
						<svg
							className={styleClass}
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
								{title &&
									<title>{title}</title>
								}
							</use>
						</svg>
					)}
			</>
		);
	}
}

export default CSIcon;
