import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../images/index';

export type CSImageColor = 'white' | 'black' | 'purple';
export type CSImageType = 'logo' | 'logomark';
export type CSImageVariant = 'initial' | 'reversed';

export interface CSImageProps {
	[key: string]: any;
	className?: string;
	color?: CSImageColor;
	height?: string;
	id?: string;
	type: CSImageType;
	variant?: CSImageVariant;
	width?: string;
	longDescription?: string;
}

class CSImage extends React.Component<CSImageProps> {
	static defaultProps = {
		color: 'purple',
		variant: 'initial',
	};

	private uniqueAutoId = this.props.longDescription ? uuidv4() : null;

	render() {
		const {
			className,
			color,
			height,
			id,
			type,
			variant,
			width,
			longDescription,
			...rest
		} = this.props;

		const style: CSSProperties = {
			'--cs-image-width': width,
			'--cs-image-height': height,
		};
		const imageClasses = classNames(
			'cs-image',
			{
				[`${className}`]: className,
			},
		);
		return (
			<>
				<img
					className={imageClasses}
					id={id}
					style={style}
					src={Logo[`cs-${type}-${color}-${variant}`]}
					alt={`${type}-${color}-${variant}`}
					aria-labelledby={this.uniqueAutoId}
					{...rest}
				/>
				{longDescription
					&& <span className="cs-aria-description" id={this.uniqueAutoId}>{longDescription}</span>}
			</>
		);
	}
}

export default CSImage;
