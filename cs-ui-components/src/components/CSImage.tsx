import React, { CSSProperties } from 'react';

export interface CSImageProps {
	color?: string;
	height?: string;
	id?: string;
	type: string;
	variant?: string;
	width?: string;
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
				id={this.props.id}
				style={style}
				src={require(`../images/cs-${this.props.type}-${this.props.color}-${this.props.variant}.png`)} alt={`${this.props.type}-${this.props.color}-${this.props.variant}`}
			/>
		);
	}
}

export default CSImage;
