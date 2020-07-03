import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSImageProps {
	className?: string;
	color?: string;
	height?: string;
	id?: string;
	type: string;
	variant?: string;
	width?: string;
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
			/>
		);
	}
}

export default CSImage;
