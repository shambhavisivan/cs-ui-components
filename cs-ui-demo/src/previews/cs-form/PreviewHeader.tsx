import React from 'react';
import { CSFormPreviewInterface } from '../types';

const PreviewHeader: React.FC<CSFormPreviewInterface> = ({
	name,
	usage
}) => {
	return (
		<div className="preview-main-heading-wrapper">
			<div className="preview-main-heading-row">
				<h1>{name}</h1>
			</div>
			{usage && <h2 className="preview-main-heading-subtitle">{usage}</h2>}
		</div>
	);
};

export default PreviewHeader;
