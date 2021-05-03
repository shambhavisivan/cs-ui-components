import React from 'react';
import PreviewQuickLinks from './PreviewQuickLinks';
import PreviewHeader from './PreviewHeader';
import PreviewExamples from './PreviewExamples';
import PreviewProps from './PreviewProps';
import PreviewApi from './PreviewApi';
import PreviewAccessibility from './PreviewAccessibility';
import { PreviewInterface } from './types';

const Preview: React.FC<PreviewInterface> = (preview: PreviewInterface) => (
	<>
		<PreviewQuickLinks {...preview} />
		<div className="preview-section-wrapper">
			<PreviewHeader {...preview} />
			{preview?.children}
			<PreviewExamples {...preview} />
			<PreviewProps {...preview} />
			<PreviewApi {...preview} />
			<PreviewAccessibility {...preview} />
		</div>
	</>
);

export default Preview;
