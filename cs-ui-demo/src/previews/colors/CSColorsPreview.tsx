import React from 'react';
import colors from '../../colors/colors.js';
import CSColorPreview from './CSColorPreview';

class CSColorsPreview extends React.Component {
	render() {
		return (
			<div className="components-preview colors">
				<div className="cs-colors">
					{colors.map((color, i) => (
						<CSColorPreview key={i} name={color.colorName} color={color.colorValue} />
					))}
				</div>
			</div>
		);
	}
}

export default CSColorsPreview;
