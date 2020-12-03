import React, { CSSProperties } from 'react';
import classNames from 'classnames';

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
		variant: 'initial'
	};

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
			'--cs-image-height': height
		};
		const imageClasses = classNames(
			'cs-image',
			{
				[`${className}`] : className
			}
		);
		return(
			<img
				className={imageClasses}
				id={id}
				style={style}
				src={require(`../images/cs-${type}-${color}-${variant}.png`)} alt={`${type}-${color}-${variant}`}
				aria-describedby={longDescription}
				{...rest}
			/>
		);
	}
}

export default CSImage;
