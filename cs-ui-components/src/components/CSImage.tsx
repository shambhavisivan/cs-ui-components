import React, { CSSProperties } from 'react';

export interface CSImageProps {
	type: string;
	variant?: string;
	color?: string;
	width?: string;
	height?: string;
}

class CSImage extends React.Component<CSImageProps> {
	render() {

		const style: CSSProperties = {
			'--cs-image-width': this.props.width,
			'--cs-image-height': this.props.height
		};

		return(
			<img
				className="cs-image"
				style={style}
				src={require(`../images/cs-${this.props.type}-${this.props.color}-${this.props.variant}.png`)} alt={`${this.props.type}-${this.props.color}-${this.props.variant}`}
			/>
		);
	}
}

export default CSImage;
