import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSImageColor = 'white' | 'black' | 'purple';
export type CSImageType = 'logo' | 'logomark';
export type CSImageVariant = 'initial' | 'reversed';

export interface CSImageProps {
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
		const style: CSSProperties = {
			'--cs-image-width': this.props.width,
			'--cs-image-height': this.props.height
		};

		const imageClasses = classNames(
			'cs-image',
			{
				[`${this.props.className}`] : this.props.className
			}
		);
		return(
			<img
				className={imageClasses}
				id={this.props.id}
				style={style}
				src={require(`../images/cs-${this.props.type}-${this.props.color}-${this.props.variant}.png`)} alt={`${this.props.type}-${this.props.color}-${this.props.variant}`}
				aria-describedby={this.props.longDescription}
			/>
		);
	}
}

export default CSImage;
