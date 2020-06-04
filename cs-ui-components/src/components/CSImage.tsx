import React from 'react';

export interface CSImageProps {
	type: string;
	variant?: string;
	color?: string;
	width?: string;
	height?: string;
}

class CSImage extends React.Component<CSImageProps> {
	render() {
		return(
			<img
				className="cs-image"
				style={
					{
						'--cs-image-width': this.props.width,
						'--cs-image-height': this.props.height
					}
				}
				src={require(`../images/cs-${this.props.type}-${this.props.color}-${this.props.variant}.png`)} alt={`${this.props.type}-${this.props.color}-${this.props.variant}`}
			/>
		);
	}
}

export default CSImage;
